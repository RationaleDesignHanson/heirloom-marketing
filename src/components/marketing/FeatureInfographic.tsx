// Inline infographic components for FeatureShowcase rows
// Each tells part of the preservation story visually

export type InfographicId = "capture-methods" | "recipe-lineage" | "share-flow";

// ─── 1. Capture Methods ───────────────────────────────────────────────────────
function CaptureMethodsInfographic() {
  const sources = [
    { icon: "📷", label: "Scan" },
    { icon: "🎬", label: "Video" },
    { icon: "🔗", label: "URL" },
    { icon: "🎤", label: "Voice" },
    { icon: "📄", label: "PDF" },
    { icon: "✦", label: "Generate" },
  ];

  return (
    <div className="mt-5">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-black/30">
        6 ways in
      </div>
      <div className="grid grid-cols-3 gap-2">
        {sources.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-2 rounded-xl border border-black/8 bg-white/60 px-3 py-2 text-sm shadow-sm backdrop-blur"
          >
            <span className="text-base leading-none">{s.icon}</span>
            <span className="font-medium text-black/70">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 2. Recipe Lineage / Provenance ──────────────────────────────────────────
function RecipeLineageInfographic() {
  const nodes = [
    { label: "NYT Cooking", sub: "Original source", color: "bg-black/5 border-black/10", dot: "bg-black/30" },
    { label: "Your Recipe Box", sub: "Saved by you", color: "bg-[var(--terracotta)]/10 border-[var(--terracotta)]/20", dot: "bg-[var(--terracotta)]" },
    { label: "Nana's Recipe Box", sub: "Shared by you", color: "bg-[var(--terracotta)]/20 border-[var(--terracotta)]/30", dot: "bg-[var(--terracotta)]" },
  ];

  return (
    <div className="mt-5">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-black/30">
        Full provenance
      </div>
      <div className="flex items-center gap-1">
        {nodes.map((n, i) => (
          <div key={n.label} className="flex min-w-0 items-center gap-1">
            <div className={`min-w-0 rounded-xl border px-3 py-2 ${n.color}`}>
              <div className="flex items-center gap-1.5">
                <div className={`h-2 w-2 shrink-0 rounded-full ${n.dot}`} />
                <span className="truncate text-xs font-semibold text-black/70">{n.label}</span>
              </div>
              <div className="mt-0.5 text-[10px] text-black/40">{n.sub}</div>
            </div>
            {i < nodes.length - 1 && (
              <svg className="h-4 w-4 shrink-0 text-black/20" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
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
    { icon: "↗", label: "You send", sub: "One tap" },
    { icon: "✓", label: "They accept", sub: "Their choice" },
    { icon: "📖", label: "In their Box", sub: "Credited to you" },
  ];

  return (
    <div className="mt-5">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-black/30">
        How sharing works
      </div>
      <div className="flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--terracotta)]/10 text-lg">
                {s.icon}
              </div>
              <div className="mt-1.5 text-center">
                <div className="text-xs font-semibold text-black/70">{s.label}</div>
                <div className="text-[10px] text-black/40">{s.sub}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <svg className="mb-4 h-4 w-4 shrink-0 text-black/20" viewBox="0 0 16 16" fill="none">
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
