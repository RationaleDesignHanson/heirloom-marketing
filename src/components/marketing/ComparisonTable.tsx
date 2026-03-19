export type ComparisonRow = {
  feature: string;
  heirloom: boolean | string;
  paprika?: boolean | string;
  recime?: boolean | string;
  /** Legacy: used when paprika/recime are not set */
  others?: boolean | string;
};

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-xs text-green-700">
        ✓
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/5 text-xs text-black/30">
        —
      </span>
    );
  return <span className="text-xs text-black/70">{value}</span>;
}

export default function ComparisonTable({
  title,
  subtitle,
  rows,
}: {
  title: string;
  subtitle?: string;
  rows: ComparisonRow[];
}) {
  // Detect whether we have named competitor columns
  const hasNamedCols = rows.some((r) => r.paprika !== undefined || r.recime !== undefined);

  return (
    <div>
      <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      {subtitle && <p className="mt-2 text-sm text-black/60">{subtitle}</p>}

      {/* ── Mobile stacked cards ──────────────────────── */}
      <div className="mt-6 grid gap-3 lg:hidden">
        {rows.map((row, idx) => (
          <div key={idx} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <div className="text-sm font-medium text-black/80">{row.feature}</div>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[var(--tomato)]">Heirloom</span>
                <Cell value={row.heirloom} />
              </div>
              {hasNamedCols ? (
                <>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-black/50">Paprika</span>
                    <Cell value={row.paprika ?? false} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-black/50">ReciMe</span>
                    <Cell value={row.recime ?? false} />
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-black/50">Others</span>
                  <Cell value={row.others ?? false} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── Desktop table ─────────────────────────────── */}
      <div className="mt-6 hidden overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm lg:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/10 bg-[var(--cream)]">
              <th className="px-5 py-3 text-left font-medium text-black/50">Feature</th>
              <th className="px-4 py-3 text-center">
                <span className="font-semibold text-[var(--tomato)]">Heirloom</span>
              </th>
              {hasNamedCols ? (
                <>
                  <th className="px-4 py-3 text-center font-medium text-black/50">Paprika</th>
                  <th className="px-4 py-3 text-center font-medium text-black/50">ReciMe</th>
                </>
              ) : (
                <th className="px-4 py-3 text-center font-medium text-black/50">Other apps</th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={`${idx < rows.length - 1 ? "border-b border-black/5" : ""} hover:bg-[var(--cream)]/40 transition-colors`}
              >
                <td className="px-5 py-3 text-black/80">{row.feature}</td>
                <td className="px-4 py-3 text-center">
                  <Cell value={row.heirloom} />
                </td>
                {hasNamedCols ? (
                  <>
                    <td className="px-4 py-3 text-center">
                      <Cell value={row.paprika ?? false} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Cell value={row.recime ?? false} />
                    </td>
                  </>
                ) : (
                  <td className="px-4 py-3 text-center">
                    <Cell value={row.others ?? false} />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
