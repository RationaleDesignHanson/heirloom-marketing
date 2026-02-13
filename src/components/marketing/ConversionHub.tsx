const spokes = [
  { title: "AI Generation", body: "Describe a dish — AI writes a complete recipe." },
  { title: "URL Import", body: "Paste any recipe link. Clean recipe, instantly." },
  { title: "Food Stories", body: "Speak a recipe aloud — structured into a card." },
  { title: "Video Import", body: "TikTok, Instagram, YouTube — extracted automatically." },
  { title: "Cookbook Scan", body: "Camera or PDF — OCR + AI structuring." },
  { title: "ASMR Video", body: "Silent cooking videos — no narration needed." },
];

/* Approximate card centers as % of container — lines are dashed and subtle,
   so pixel-perfect precision isn't needed. */
const cardPositions: [number, number][] = [
  [25, 14],  // top-left:     AI Generation
  [75, 14],  // top-right:    URL Import
  [14, 50],  // mid-left:     Food Stories
  [86, 50],  // mid-right:    Video Import
  [25, 86],  // bottom-left:  Cookbook Scan
  [75, 86],  // bottom-right: ASMR Video
];

export default function ConversionHub() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[380px]">
      {/* SVG connector lines — behind everything */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {cardPositions.map(([x, y], i) => (
          <line
            key={i}
            x1={50}
            y1={50}
            x2={x}
            y2={y}
            stroke="#3a2f22"
            opacity={0.12}
            strokeWidth={0.3}
            strokeDasharray="1.5 1"
          />
        ))}
      </svg>

      {/* Grid: 2 cols × 3 rows */}
      <div className="relative z-10 grid grid-cols-2 gap-2.5 sm:gap-3">
        {/* Row 1 */}
        <SpokeCard spoke={spokes[0]} />
        <SpokeCard spoke={spokes[1]} />

        {/* Row 2: cards + center hub */}
        <div className="col-span-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2.5 sm:gap-3">
          <SpokeCard spoke={spokes[2]} />
          {/* Center hub — z-20 so it sits above the SVG lines */}
          <div className="relative z-20 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-black/[0.06] bg-gradient-radial from-white via-[var(--cream)] to-[var(--terracotta)]/20 shadow-lg sm:h-32 sm:w-32">
            <div className="absolute -inset-2.5 rounded-full border border-dashed border-black/[0.06]" />
            <div className="text-center text-[11px] font-bold leading-tight tracking-tight text-[var(--ink)] sm:text-xs">
              Structured
              <br />
              Recipe
              <br />
              Conversion
            </div>
          </div>
          <SpokeCard spoke={spokes[3]} />
        </div>

        {/* Row 3 */}
        <SpokeCard spoke={spokes[4]} />
        <SpokeCard spoke={spokes[5]} />
      </div>
    </div>
  );
}

function SpokeCard({ spoke }: { spoke: (typeof spokes)[number] }) {
  return (
    <div className="rounded-lg bg-white/30 px-3 py-2.5 backdrop-blur transition-all hover:bg-white/50 sm:px-3.5 sm:py-3">
      <div className="text-xs font-semibold tracking-tight text-[var(--ink)]">
        {spoke.title}
      </div>
      <p className="mt-0.5 text-[10px] leading-snug text-black/45 sm:text-[11px]">
        {spoke.body}
      </p>
    </div>
  );
}
