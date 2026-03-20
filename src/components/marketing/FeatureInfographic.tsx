// Inline infographic components for FeatureShowcase rows

export type InfographicId = "capture-methods" | "recipe-lineage" | "share-flow";

// ─── 1. Capture Methods ───────────────────────────────────────────────────────
function CaptureMethodsInfographic() {
  const sources = ["Scan", "Video", "URL", "Voice", "PDF", "Generate"];

  return (
    <div className="mt-5">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-black/30">
        6 ways in
      </div>
      <div className="grid grid-cols-3 gap-2">
        {sources.map((s) => (
          <div
            key={s}
            className="flex items-center justify-center rounded-xl border border-black/8 bg-white/60 px-3 py-2 shadow-sm backdrop-blur"
          >
            <span className="text-xs font-semibold text-black/60">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 2. Recipe Lineage / Provenance ──────────────────────────────────────────
function RecipeLineageInfographic() {
  const nodes = [
    { label: "Web recipe", sub: "Original source", color: "bg-black/5 border-black/10", dot: "bg-black/25" },
    { label: "Your Recipe Box", sub: "Saved by you", color: "bg-[var(--terracotta)]/10 border-[var(--terracotta)]/20", dot: "bg-[var(--terracotta)]/60" },
    { label: "Family Recipe Box", sub: "Shared by you", color: "bg-[var(--terracotta)]/20 border-[var(--terracotta)]/30", dot: "bg-[var(--terracotta)]" },
  ];

  return (
    <div className="mt-5">
      <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-black/30">
        Full provenance
      </div>
      {/* Vertical on mobile, horizontal on desktop */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-1">
        {nodes.map((n, i) => (
          <div key={n.label} className="flex sm:min-w-0 sm:flex-1 sm:flex-col sm:items-center">
            <div className={`w-full rounded-xl border p-3 ${n.color}`}>
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 shrink-0 rounded-full ${n.dot}`} />
                <span className="text-xs font-semibold text-black/70">{n.label}</span>
              </div>
              <div className="mt-1 text-[10px] leading-snug text-black/40">{n.sub}</div>
            </div>
            {i < nodes.length - 1 && (
              <>
                {/* Arrow on mobile (pointing down) */}
                <svg className="mx-3 my-0.5 h-4 w-4 shrink-0 rotate-90 text-black/20 sm:hidden" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* Arrow on desktop (pointing right) */}
                <svg className="hidden h-4 w-4 shrink-0 self-center text-black/20 sm:block" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 3. Share Flow ────────────────────────────────────────────────────────────
function ShareFlowInfographic() {
  const steps = [
    { n: "1", label: "You send", sub: "One tap" },
    { n: "2", label: "They accept", sub: "Their choice" },
    { n: "3", label: "In their Box", sub: "Credited to you" },
  ];

  return (
    <div className="mt-5">
      <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-black/30">
        How sharing works
      </div>
      <div className="flex items-start gap-2">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--terracotta)]/15 text-xs font-bold text-[var(--terracotta)]">
                {s.n}
              </div>
              <div className="mt-2 text-center">
                <div className="text-xs font-semibold text-black/70">{s.label}</div>
                <div className="text-[10px] text-black/40">{s.sub}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <svg className="mb-5 h-4 w-4 shrink-0 text-black/15" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Dispatcher ───────────────────────────────────────────────────────────────
export default function FeatureInfographic({ id }: { id: InfographicId }) {
  if (id === "capture-methods") return <CaptureMethodsInfographic />;
  if (id === "recipe-lineage") return <RecipeLineageInfographic />;
  if (id === "share-flow") return <ShareFlowInfographic />;
  return null;
}
