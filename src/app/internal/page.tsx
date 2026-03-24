import { runHogQL } from "@/lib/posthog-query";

// ─── helpers ────────────────────────────────────────────────────────────────

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black/40">{title}</h2>
      {children}
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-2xl sm:text-3xl font-semibold tracking-tight">{value}</span>
      <span className="text-sm text-black/60">{label}</span>
      {sub && <span className="text-xs text-black/40">{sub}</span>}
    </div>
  );
}

function Bar({ label, value, max, color = "bg-[var(--terracotta)]" }: { label: string; value: number; max: number; color?: string }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <span className="w-28 sm:w-36 shrink-0 text-xs text-black/60 truncate">{label}</span>
      <div className="flex-1 rounded-full bg-black/5 h-2">
        <div className={`h-2 rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="w-7 sm:w-8 text-right text-xs font-medium tabular-nums">{value}</span>
    </div>
  );
}

function FunnelStep({ label, value, pct }: { label: string; value: number; pct?: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-black/5 last:border-0">
      <span className="text-sm text-black/70">{label}</span>
      <div className="flex items-center gap-3">
        {pct && <span className="text-xs text-black/40">{pct}</span>}
        <span className="text-sm font-semibold tabular-nums">{value}</span>
      </div>
    </div>
  );
}

// ─── data fetchers ───────────────────────────────────────────────────────────

async function fetchToplineStats() {
  try {
    const { results } = await runHogQL(`
      SELECT
        uniqIf(distinct_id, toStartOfDay(timestamp) = toStartOfDay(now())) AS dau_today,
        uniqIf(distinct_id, timestamp >= toStartOfWeek(now())) AS wau,
        uniqIf(distinct_id, timestamp >= toStartOfMonth(now())) AS mau,
        countIf(event = 'Recipe Imported' AND timestamp >= now() - INTERVAL 7 DAY) AS imports_7d
      FROM events
      WHERE properties.Platform = 'iOS'
        AND timestamp >= toStartOfMonth(now())
    `);
    const row = (results[0] ?? [0, 0, 0, 0]) as [number, number, number, number];
    return { dau: row[0], wau: row[1], mau: row[2], imports7d: row[3] };
  } catch { return { dau: 0, wau: 0, mau: 0, imports7d: 0 } }
}

async function fetchNewUsers() {
  try {
    const { results } = await runHogQL(`
      SELECT
        toStartOfDay(timestamp) AS day,
        uniq(distinct_id) AS new_users
      FROM events
      WHERE event = 'Onboarding Complete'
        AND properties.Platform = 'iOS'
        AND timestamp >= now() - INTERVAL 14 DAY
      GROUP BY day
      ORDER BY day DESC
      LIMIT 14
    `);
    return results as [string, number][];
  } catch { return [] }
}

async function fetchSubscriptionFunnel() {
  try {
    const { results } = await runHogQL(`
      SELECT
        countIf(event = 'Paywall Shown') AS paywall_shown,
        countIf(event = 'Trial Started') AS trials,
        countIf(event = 'Purchase Success') AS paid
      FROM events
      WHERE properties.Platform = 'iOS'
        AND timestamp >= now() - INTERVAL 30 DAY
        AND event IN ('Paywall Shown', 'Trial Started', 'Purchase Success')
    `);
    const row = (results[0] ?? [0, 0, 0]) as [number, number, number];
    return { paywallShown: row[0], trials: row[1], paid: row[2] };
  } catch { return { paywallShown: 0, trials: 0, paid: 0 } }
}

async function fetchRetentionCohort() {
  try {
    // D1: users who completed onboarding AND launched again within 24-48h
    const { results: d1 } = await runHogQL(`
      SELECT count(DISTINCT e2.distinct_id) AS retained
      FROM events e1
      JOIN events e2 ON e1.distinct_id = e2.distinct_id
      WHERE e1.event = 'Onboarding Complete'
        AND e2.event = 'App Launched'
        AND e2.timestamp >= e1.timestamp + INTERVAL 1 DAY
        AND e2.timestamp <= e1.timestamp + INTERVAL 2 DAY
        AND e1.properties.Platform = 'iOS'
        AND e1.timestamp >= now() - INTERVAL 30 DAY
    `);
    // D7: users who completed onboarding AND launched again 6-8 days later
    const { results: d7 } = await runHogQL(`
      SELECT count(DISTINCT e2.distinct_id) AS retained
      FROM events e1
      JOIN events e2 ON e1.distinct_id = e2.distinct_id
      WHERE e1.event = 'Onboarding Complete'
        AND e2.event = 'App Launched'
        AND e2.timestamp >= e1.timestamp + INTERVAL 6 DAY
        AND e2.timestamp <= e1.timestamp + INTERVAL 8 DAY
        AND e1.properties.Platform = 'iOS'
        AND e1.timestamp >= now() - INTERVAL 30 DAY
    `);
    // Total new users in same window
    const { results: total } = await runHogQL(`
      SELECT uniq(distinct_id) AS new_users
      FROM events
      WHERE event = 'Onboarding Complete'
        AND properties.Platform = 'iOS'
        AND timestamp >= now() - INTERVAL 30 DAY
    `);
    const d1Retained = ((d1[0] ?? [0]) as [number])[0];
    const d7Retained = ((d7[0] ?? [0]) as [number])[0];
    const newUsers = ((total[0] ?? [0]) as [number])[0];
    return { d1: d1Retained, d7: d7Retained, newUsers };
  } catch { return { d1: 0, d7: 0, newUsers: 0 } }
}

async function fetchActivation() {
  try {
    const { results } = await runHogQL(`
      SELECT count(DISTINCT e2.distinct_id) AS activated
      FROM events e1
      JOIN events e2 ON e1.distinct_id = e2.distinct_id
      WHERE e1.event = 'App Launched'
        AND e2.event = 'Recipe Imported'
        AND e2.timestamp <= e1.timestamp + INTERVAL 24 HOUR
        AND e2.timestamp >= e1.timestamp
        AND e1.properties.Platform = 'iOS'
        AND e1.timestamp >= now() - INTERVAL 30 DAY
    `);
    const row = (results[0] ?? [0]) as [number];
    const { results: r2 } = await runHogQL(`
      SELECT uniq(distinct_id) AS new_users
      FROM events
      WHERE event = 'App Launched'
        AND properties.Platform = 'iOS'
        AND timestamp >= now() - INTERVAL 30 DAY
    `);
    const total = ((r2[0] ?? [0]) as [number])[0];
    return { activated: row[0], total };
  } catch { return { activated: 0, total: 0 } }
}

async function fetchCookingCompletion() {
  try {
    const { results } = await runHogQL(`
      SELECT
        countIf(event = 'Cooking Started') AS started,
        countIf(event = 'Cooking Completed') AS completed,
        uniqIf(distinct_id, event = 'Timer Started') AS timer_users
      FROM events
      WHERE properties.Platform = 'iOS'
        AND timestamp >= now() - INTERVAL 30 DAY
        AND event IN ('Cooking Started', 'Cooking Completed', 'Timer Started')
    `);
    const row = (results[0] ?? [0, 0, 0]) as [number, number, number];
    return { started: row[0], completed: row[1], timerUsers: row[2] };
  } catch { return { started: 0, completed: 0, timerUsers: 0 } }
}

async function fetchKitchenTableFunnel() {
  try {
    const { results } = await runHogQL(`
      SELECT
        countIf(event = 'Kitchen Table Created') AS created,
        countIf(event = 'Kitchen Table Invite Sent') AS invites_sent,
        countIf(event = 'Kitchen Table Invite Accepted') AS invites_accepted,
        countIf(event = 'Recipe Shared to Table') AS recipes_shared
      FROM events
      WHERE properties.Platform = 'iOS'
        AND timestamp >= now() - INTERVAL 30 DAY
        AND event IN ('Kitchen Table Created', 'Kitchen Table Invite Sent', 'Kitchen Table Invite Accepted', 'Recipe Shared to Table')
    `);
    const row = (results[0] ?? [0, 0, 0, 0]) as [number, number, number, number];
    return { created: row[0], invitesSent: row[1], invitesAccepted: row[2], recipesShared: row[3] };
  } catch { return { created: 0, invitesSent: 0, invitesAccepted: 0, recipesShared: 0 } }
}

async function fetchPDFHealth() {
  try {
    const { results } = await runHogQL(`
      SELECT
        countIf(event = 'PDF Import Started') AS started,
        countIf(event = 'PDF Import Completed') AS completed,
        countIf(event = 'PDF Import Failed') AS failed
      FROM events
      WHERE properties.Platform = 'iOS'
        AND timestamp >= now() - INTERVAL 30 DAY
        AND event IN ('PDF Import Started', 'PDF Import Completed', 'PDF Import Failed')
    `);
    const row = (results[0] ?? [0, 0, 0]) as [number, number, number];
    return { started: row[0], completed: row[1], failed: row[2] };
  } catch { return { started: 0, completed: 0, failed: 0 } }
}

async function fetchImportMix() {
  try {
    const { results } = await runHogQL(`
      SELECT
        properties.source AS source,
        count() AS cnt
      FROM events
      WHERE event = 'Recipe Imported'
        AND properties.Platform = 'iOS'
        AND timestamp >= now() - INTERVAL 30 DAY
      GROUP BY source
      ORDER BY cnt DESC
    `);
    return results as [string, number][];
  } catch { return [] }
}

async function fetchDAUTrend() {
  try {
    const { results } = await runHogQL(`
      SELECT
        toStartOfDay(timestamp) AS day,
        uniq(distinct_id) AS dau
      FROM events
      WHERE timestamp >= now() - INTERVAL 14 DAY
        AND properties.Platform = 'iOS'
      GROUP BY day
      ORDER BY day DESC
      LIMIT 14
    `);
    return results as [string, number][];
  } catch { return [] }
}

async function fetchFeatureAdoption() {
  try {
    const { results } = await runHogQL(`
      SELECT event, uniq(distinct_id) AS users
      FROM events
      WHERE event IN (
        'Cooking Started', 'Recipe Scaled', 'Recipe Shared',
        'Search Performed', 'Added to Shopping List',
        'Lineage Viewed', 'Discovery Feed Viewed',
        'Card Flipped', 'Timer Started', 'Recipe Shared to Table'
      )
        AND properties.Platform = 'iOS'
        AND timestamp >= now() - INTERVAL 30 DAY
      GROUP BY event
      ORDER BY users DESC
    `);
    return results as [string, number][];
  } catch { return [] }
}

async function fetchCreditBurndown() {
  try {
    const { results } = await runHogQL(`
      SELECT
        properties.operation_type AS op,
        sum(toInt64OrZero(toString(properties.credits_amount))) AS total
      FROM events
      WHERE event = 'Credit Deducted'
        AND properties.Platform = 'iOS'
        AND timestamp >= now() - INTERVAL 30 DAY
      GROUP BY op
      ORDER BY total DESC
      LIMIT 8
    `);
    return results as [string, number][];
  } catch { return [] }
}

async function fetchAIGeneration() {
  try {
    const { results } = await runHogQL(`
      SELECT
        toStartOfDay(timestamp) AS day,
        count() AS cnt
      FROM events
      WHERE event = 'Recipe Created'
        AND properties.source = 'ai_generated'
        AND properties.Platform = 'iOS'
        AND timestamp >= now() - INTERVAL 14 DAY
      GROUP BY day
      ORDER BY day DESC
    `);
    return results as [string, number][];
  } catch { return [] }
}

// ─── dashboard ───────────────────────────────────────────────────────────────

export default async function InternalDashboard() {
  const [
    stats,
    newUsers,
    subFunnel,
    retention,
    activation,
    cooking,
    kitchenTable,
    pdfHealth,
    importMix,
    dauTrend,
    features,
    credits,
    aiGen,
  ] = await Promise.all([
    fetchToplineStats(),
    fetchNewUsers(),
    fetchSubscriptionFunnel(),
    fetchRetentionCohort(),
    fetchActivation(),
    fetchCookingCompletion(),
    fetchKitchenTableFunnel(),
    fetchPDFHealth(),
    fetchImportMix(),
    fetchDAUTrend(),
    fetchFeatureAdoption(),
    fetchCreditBurndown(),
    fetchAIGeneration(),
  ]);

  const maxImport = Math.max(...importMix.map(([, n]) => n), 1);
  const maxCredit = Math.max(...credits.map(([, n]) => n), 1);
  const maxFeature = Math.max(...features.map(([, n]) => n), 1);
  const maxDAU = Math.max(...dauTrend.map(([, n]) => n), 1);
  const maxNew = Math.max(...newUsers.map(([, n]) => n), 1);
  const maxAI = Math.max(...aiGen.map(([, n]) => n), 1);

  const activationRate = activation.total > 0 ? ((activation.activated / activation.total) * 100).toFixed(1) : "—";
  const trialRate = subFunnel.paywallShown > 0 ? ((subFunnel.trials / subFunnel.paywallShown) * 100).toFixed(1) : "—";
  const paidRate = subFunnel.trials > 0 ? ((subFunnel.paid / subFunnel.trials) * 100).toFixed(1) : "—";
  const cookingCompRate = cooking.started > 0 ? ((cooking.completed / cooking.started) * 100).toFixed(0) : "—";
  const pdfSuccessRate = pdfHealth.started > 0 ? ((pdfHealth.completed / pdfHealth.started) * 100).toFixed(0) : "—";
  const d1Rate = retention.newUsers > 0 ? ((retention.d1 / retention.newUsers) * 100).toFixed(1) : "—";
  const d7Rate = retention.newUsers > 0 ? ((retention.d7 / retention.newUsers) * 100).toFixed(1) : "—";
  const inviteAcceptRate = kitchenTable.invitesSent > 0 ? ((kitchenTable.invitesAccepted / kitchenTable.invitesSent) * 100).toFixed(0) : "—";

  return (
    <div className="min-h-screen bg-[var(--cream)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">🌿 Heirloom Internal</h1>
            <p className="mt-0.5 text-sm text-black/50">Last 30 days · iOS app · refreshes every 5 min</p>
          </div>
          <a
            href="https://us.posthog.com/project/351490"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-black/40 hover:text-black/70 transition"
          >
            Open PostHog ↗
          </a>
        </div>

        <div className="flex flex-col gap-6">

          {/* Topline */}
          <Card title="Active Users">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Stat label="DAU (today)" value={String(stats.dau)} />
              <Stat label="WAU" value={String(stats.wau)} />
              <Stat label="MAU" value={String(stats.mau)} />
              <Stat label="Imports (7d)" value={String(stats.imports7d)} />
            </div>
          </Card>

          {/* New Users + Retention */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card title="New Users — Last 14 Days">
              {newUsers.length === 0 ? (
                <p className="text-sm text-black/40">No onboarding events yet.</p>
              ) : (
                <div className="flex flex-col gap-2">
                  {newUsers.map(([day, n]) => (
                    <Bar
                      key={day}
                      label={new Date(day).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      value={n}
                      max={maxNew}
                      color="bg-emerald-500"
                    />
                  ))}
                </div>
              )}
            </Card>
            <Card title="Retention (30d cohort)">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-4">
                  <Stat label="New users" value={String(retention.newUsers)} />
                  <Stat label="D1 retained" value={String(retention.d1)} sub={`${d1Rate}%`} />
                  <Stat label="D7 retained" value={String(retention.d7)} sub={`${d7Rate}%`} />
                </div>
              </div>
            </Card>
          </div>

          {/* Subscription Funnel + Activation */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card title="Subscription Funnel (30d)">
              <FunnelStep label="Paywall Shown" value={subFunnel.paywallShown} />
              <FunnelStep label="Trial Started" value={subFunnel.trials} pct={`${trialRate}% of paywall`} />
              <FunnelStep label="Paid Conversion" value={subFunnel.paid} pct={`${paidRate}% of trials`} />
            </Card>
            <Card title="Activation (first import ≤ 24h)">
              <div className="grid grid-cols-3 gap-4">
                <Stat label="New users" value={String(activation.total)} />
                <Stat label="Activated" value={String(activation.activated)} />
                <Stat label="Rate" value={`${activationRate}%`} />
              </div>
            </Card>
          </div>

          {/* DAU Trend */}
          <Card title="DAU — Last 14 Days">
            {dauTrend.length === 0 ? (
              <p className="text-sm text-black/40">No data yet.</p>
            ) : (
              <div className="flex flex-col gap-2">
                {dauTrend.map(([day, dau]) => (
                  <Bar
                    key={day}
                    label={new Date(day).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    value={dau}
                    max={maxDAU}
                    color="bg-black/70"
                  />
                ))}
              </div>
            )}
          </Card>

          {/* Import Mix */}
          <Card title="Import Method Mix (30d)">
            {importMix.length === 0 ? (
              <p className="text-sm text-black/40">No import events yet.</p>
            ) : (
              <div className="flex flex-col gap-3">
                {importMix.map(([source, count]) => (
                  <Bar key={source} label={source ?? "unknown"} value={count} max={maxImport} />
                ))}
              </div>
            )}
          </Card>

          {/* Cooking + PDF Health */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card title="Cooking (30d)">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <Stat label="Started" value={String(cooking.started)} />
                <Stat label="Completed" value={String(cooking.completed)} sub={`${cookingCompRate}%`} />
                <Stat label="Timer users" value={String(cooking.timerUsers)} />
              </div>
            </Card>
            <Card title="PDF Import Health (30d)">
              <div className="grid grid-cols-3 gap-4">
                <Stat label="Started" value={String(pdfHealth.started)} />
                <Stat label="Completed" value={String(pdfHealth.completed)} sub={`${pdfSuccessRate}%`} />
                <Stat label="Failed" value={String(pdfHealth.failed)} />
              </div>
            </Card>
          </div>

          {/* Kitchen Table Funnel */}
          <Card title="Kitchen Table (30d)">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Stat label="Tables created" value={String(kitchenTable.created)} />
              <Stat label="Invites sent" value={String(kitchenTable.invitesSent)} />
              <Stat label="Invites accepted" value={String(kitchenTable.invitesAccepted)} sub={`${inviteAcceptRate}%`} />
              <Stat label="Recipes shared" value={String(kitchenTable.recipesShared)} />
            </div>
          </Card>

          {/* Feature Adoption */}
          <Card title="Feature Adoption — Unique Users (30d)">
            {features.length === 0 ? (
              <p className="text-sm text-black/40">No feature events yet.</p>
            ) : (
              <div className="flex flex-col gap-3">
                {features.map(([event, users]) => (
                  <Bar key={event} label={event} value={users} max={maxFeature} color="bg-emerald-500" />
                ))}
              </div>
            )}
          </Card>

          {/* Credit Burndown */}
          <Card title="Credit Burndown by Operation (30d)">
            {credits.length === 0 ? (
              <p className="text-sm text-black/40">No credit events yet.</p>
            ) : (
              <div className="flex flex-col gap-3">
                {credits.map(([op, total]) => (
                  <Bar key={op} label={op ?? "unknown"} value={total} max={maxCredit} color="bg-[var(--tomato)]" />
                ))}
              </div>
            )}
          </Card>

          {/* AI Generation */}
          <Card title="AI-Generated Recipes — Last 14 Days">
            {aiGen.length === 0 ? (
              <p className="text-sm text-black/40">No AI generation events yet.</p>
            ) : (
              <div className="flex flex-col gap-2">
                {aiGen.map(([day, cnt]) => (
                  <Bar
                    key={day}
                    label={new Date(day).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    value={cnt}
                    max={maxAI}
                    color="bg-violet-400"
                  />
                ))}
              </div>
            )}
          </Card>

          <p className="text-center text-xs text-black/30">
            heirloomrecipebox.app/internal · data from PostHog project 351490
          </p>

        </div>
      </div>
    </div>
  );
}
