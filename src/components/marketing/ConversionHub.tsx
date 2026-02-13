const spokes = [
  {
    title: "AI Generation",
    body: "Describe a dish — AI writes a complete recipe.",
    icon: "✨",
  },
  {
    title: "URL Import",
    body: "Paste any recipe link. Clean recipe, instantly.",
    icon: "🔗",
  },
  {
    title: "Food Stories",
    body: "Speak a recipe aloud — structured into a card.",
    icon: "🎙️",
  },
  {
    title: "Video Import",
    body: "TikTok, Instagram, YouTube — extracted automatically.",
    icon: "🎬",
  },
  {
    title: "Cookbook Scan",
    body: "Camera or PDF — OCR + AI structuring.",
    icon: "📷",
  },
  {
    title: "ASMR Video",
    body: "Silent cooking videos — no narration needed.",
    icon: "🤫",
  },
];

const pipeline = [
  { title: "Any Source", body: "URL, video, scan, voice, AI" },
  { title: "Structured Recipe", body: "Normalized, relational data" },
  { title: "Preserved Forever", body: "Connected, versioned, yours" },
];

export default function ConversionHub() {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* ── Radial hub ── */}
      <div className="relative mx-auto w-full max-w-[680px]">
        {/* SVG connector lines (desktop only) */}
        <svg
          className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
          preserveAspectRatio="none"
          viewBox="0 0 680 520"
        >
          {/* Lines from center (340, 260) to each card edge */}
          {[
            [170, 90],   // top-left
            [510, 90],   // top-right
            [120, 260],  // mid-left
            [560, 260],  // mid-right
            [170, 430],  // bottom-left
            [510, 430],  // bottom-right
          ].map(([x, y], i) => (
            <line
              key={i}
              x1={340}
              y1={260}
              x2={x}
              y2={y}
              stroke="currentColor"
              className="text-black/[0.08]"
              strokeWidth={2}
              strokeDasharray="6 4"
            />
          ))}
        </svg>

        {/* Grid layout: 3 cols × 3 rows */}
        <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] lg:grid-rows-3 lg:gap-x-6 lg:gap-y-4">
          {/* Row 1: top-left, center spacer, top-right */}
          <SpokeCard spoke={spokes[0]} />
          <div className="hidden lg:block" /> {/* spacer */}
          <SpokeCard spoke={spokes[1]} />

          {/* Row 2: mid-left, CENTER HUB, mid-right */}
          <SpokeCard spoke={spokes[2]} />
          <div className="flex items-center justify-center py-2 sm:col-span-2 sm:py-4 lg:col-span-1 lg:py-0">
            <div className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 border-black/[0.06] bg-gradient-radial from-white via-[var(--cream)] to-[var(--terracotta)]/20 shadow-xl sm:h-40 sm:w-40 lg:h-44 lg:w-44">
              <div className="absolute -inset-3 rounded-full border border-dashed border-black/[0.05]" />
              <div className="text-center text-sm font-bold leading-tight tracking-tight text-[var(--ink)] sm:text-[15px]">
                Structured
                <br />
                Recipe
                <br />
                Conversion
              </div>
            </div>
          </div>
          <SpokeCard spoke={spokes[3]} />

          {/* Row 3: bottom-left, center spacer, bottom-right */}
          <SpokeCard spoke={spokes[4]} />
          <div className="hidden lg:block" /> {/* spacer */}
          <SpokeCard spoke={spokes[5]} />
        </div>
      </div>

      {/* ── Pipeline ── */}
      <div className="w-full max-w-xl">
        <p className="mb-4 text-center text-xs leading-relaxed text-black/40 sm:text-sm">
          Every source becomes a structured recipe node — private, versioned, and preserved.
        </p>
        <div className="flex items-stretch gap-0">
          {pipeline.map((step, i) => (
            <div key={step.title} className="flex flex-1 items-center">
              <div className="flex-1 rounded-xl border border-black/10 bg-white/80 px-3 py-3 text-center shadow-sm backdrop-blur">
                <div className="text-xs font-bold tracking-tight text-[var(--ink)] sm:text-sm">
                  {step.title}
                </div>
                <div className="mt-0.5 text-[10px] leading-tight text-black/50 sm:text-xs">
                  {step.body}
                </div>
              </div>
              {i < pipeline.length - 1 && (
                <div className="flex w-5 shrink-0 items-center justify-center text-black/25 sm:w-6">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SpokeCard({ spoke }: { spoke: (typeof spokes)[number] }) {
  return (
    <div className="group rounded-xl border border-black/[0.08] bg-white/90 px-4 py-3.5 shadow-sm backdrop-blur transition-all hover:border-black/15 hover:shadow-md sm:px-5 sm:py-4">
      <div className="flex items-center gap-2.5">
        <span className="text-lg leading-none">{spoke.icon}</span>
        <span className="text-sm font-semibold tracking-tight text-[var(--ink)]">
          {spoke.title}
        </span>
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-black/55">
        {spoke.body}
      </p>
    </div>
  );
}
