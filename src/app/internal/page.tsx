import { runHogQL } from "@/lib/posthog-query";
import { Suspense } from "react";

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
      <span className="w-20 sm:w-28 shrink-0 text-xs text-black/60 truncate">{label}</span>
      <div className="flex-1 rounded-full bg-black/5 h-2">
        <div className={`h-2 rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="w-7 sm:w-8 text-right text-xs font-medium tabular-nums">{value}</span>
    </div>
  );
}

// ─── data fetchers ───────────────────────────────────────────────────────────

async function fetchRetention() {
  try {
    const { results } = await runHogQL(`
      SELECT
        toStartOfDay(timestamp) AS day,
        count(DISTINCT distinct_id) AS dau
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

async function fetchPaywall() {
  try {
    const { results } = await runHogQL(`
      SELECT
        countIf(event = 'Paywall Shown') AS shown,
        countIf(event = 'Purchase Success') AS converted
      FROM events
      WHERE properties.Platform = 'iOS'
        AND timestamp >= now() - INTERVAL 30 DAY
        AND event IN ('Paywall Shown', 'Purchase Success')
    `);
    const row = (results[0] ?? [0, 0]) as [number, number];
    return { shown: row[0], converted: row[1] };
  } catch { return { shown: 0, converted: 0 } }
}

async function fetchActivation() {
  try {
    // Users who imported a recipe within 24h of first app launch
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
      SELECT count(DISTINCT distinct_id) AS new_users
      FROM events
      WHERE event = 'App Launched'
        AND properties.Platform = 'iOS'
        AND timestamp >= now() - INTERVAL 30 DAY
    `);
    const total = ((r2[0] ?? [0]) as [number])[0];
    return { activated: row[0], total };
  } catch { return { activated: 0, total: 0 } }
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

async function fetchFeatureAdoption() {
  try {
    const { results } = await runHogQL(`
      SELECT event, count(DISTINCT distinct_id) AS users
      FROM events
      WHERE event IN ('Cooking Started', 'Lineage Viewed', 'Kitchen Table Created', 'Recipe Shared', 'Recipe Scaled')
        AND properties.Platform = 'iOS'
        AND timestamp >= now() - INTERVAL 30 DAY
      GROUP BY event
      ORDER BY users DESC
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

async function fetchToplineStats() {
  try {
    const { results } = await runHogQL(`
      SELECT
        countDistinctIf(distinct_id, toStartOfDay(timestamp) = toStartOfDay(now())) AS dau_today,
        countDistinctIf(distinct_id, timestamp >= toStartOfWeek(now())) AS wau,
        countDistinctIf(distinct_id, timestamp >= toStartOfMonth(now())) AS mau,
        countIf(event = 'Recipe Imported' AND timestamp >= now() - INTERVAL 7 DAY) AS imports_7d
      FROM events
      WHERE properties.Platform = 'iOS'
        AND timestamp >= toStartOfMonth(now())
    `);
    const row = (results[0] ?? [0, 0, 0, 0]) as [number, number, number, number];
    return { dau: row[0], wau: row[1], mau: row[2], imports7d: row[3] };
  } catch { return { dau: 0, wau: 0, mau: 0, imports7d: 0 } }
}

// ─── dashboard ───────────────────────────────────────────────────────────────

export default async function InternalDashboard() {
  const [
    stats,
    retention,
    importMix,
    paywall,
    activation,
    credits,
    features,
    aiGen,
  ] = await Promise.all([
    fetchToplineStats(),
    fetchRetention(),
    fetchImportMix(),
    fetchPaywall(),
    fetchActivation(),
    fetchCreditBurndown(),
    fetchFeatureAdoption(),
    fetchAIGeneration(),
  ]);

  const maxImport = Math.max(...importMix.map(([, n]) => n), 1);
  const maxCredit = Math.max(...credits.map(([, n]) => n), 1);
  const maxFeature = Math.max(...features.map(([, n]) => n), 1);
  const paywallRate = paywall.shown > 0 ? ((paywall.converted / paywall.shown) * 100).toFixed(1) : "—";
  const activationRate = activation.total > 0 ? ((activation.activated / activation.total) * 100).toFixed(1) : "—";

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

          {/* Paywall + Activation */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card title="Paywall Conversion">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-4">
                  <Stat label="Shown" value={String(paywall.shown)} />
                  <Stat label="Converted" value={String(paywall.converted)} />
                  <Stat label="Rate" value={`${paywallRate}%`} />
                </div>
              </div>
            </Card>
            <Card title="Activation (first import ≤ 24h)">
              <div className="grid grid-cols-3 gap-4">
                <Stat label="New users" value={String(activation.total)} />
                <Stat label="Activated" value={String(activation.activated)} />
                <Stat label="Rate" value={`${activationRate}%`} />
              </div>
            </Card>
          </div>

          {/* Import method mix */}
          <Card title="Import Method Mix (30d)">
            {importMix.length === 0 ? (
              <p className="text-sm text-black/40">No import events yet — add source property to recipeImported calls.</p>
            ) : (
              <div className="flex flex-col gap-3">
                {importMix.map(([source, count]) => (
                  <Bar key={source} label={source ?? "unknown"} value={count} max={maxImport} />
                ))}
              </div>
            )}
          </Card>

          {/* DAU trend */}
          <Card title="DAU — Last 14 Days">
            {retention.length === 0 ? (
              <p className="text-sm text-black/40">No data yet.</p>
            ) : (
              <div className="flex flex-col gap-2">
                {retention.map(([day, dau]) => (
                  <Bar
                    key={day}
                    label={new Date(day).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    value={dau}
                    max={Math.max(...retention.map(([, n]) => n), 1)}
                    color="bg-black/70"
                  />
                ))}
              </div>
            )}
          </Card>

          {/* Credit burndown */}
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

          {/* Feature adoption */}
          <Card title="Feature Adoption — Unique Users (30d)">
            <div className="flex flex-col gap-3">
              {features.length === 0 ? (
                <p className="text-sm text-black/40">No feature events yet.</p>
              ) : (
                features.map(([event, users]) => (
                  <Bar key={event} label={event} value={users} max={maxFeature} color="bg-emerald-500" />
                ))
              )}
            </div>
          </Card>

          {/* AI generation */}
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
                    max={Math.max(...aiGen.map(([, n]) => n), 1)}
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
