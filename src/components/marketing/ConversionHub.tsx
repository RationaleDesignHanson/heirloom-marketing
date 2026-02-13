const spokes = [
  { title: "AI Generation", body: "Describe a dish — AI writes a complete recipe." },
  { title: "URL Import", body: "Paste any recipe link. Clean recipe, instantly." },
  { title: "Food Stories", body: "Speak a recipe aloud — structured into a card." },
  { title: "Video Import", body: "TikTok, Instagram, YouTube — extracted automatically." },
  { title: "Cookbook Scan", body: "Camera or PDF — OCR + AI structuring." },
  { title: "ASMR Video", body: "Silent cooking videos — no narration needed." },
];

export default function ConversionHub() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[380px]">
      {/* SVG connector lines — behind everything */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 380 480"
      >
        {[
          [95, 65],    // top-left
          [285, 65],   // top-right
          [70, 240],   // mid-left
          [310, 240],  // mid-right
          [95, 415],   // bottom-left
          [285, 415],  // bottom-right
        ].map(([x, y], i) => (
          <line
            key={i}
            x1={190}
            y1={240}
            x2={x}
            y2={y}
            stroke="#3a2f22"
            opacity={0.06}
            strokeWidth={1.5}
            strokeDasharray="4 3"
          />
        ))}
      </svg>

      {/* Grid: 3 cols × 3 rows */}
      <div className="relative z-10 grid grid-cols-2 gap-2.5 sm:gap-3" style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto auto" }}>
        {/* Row 1 */}
        <SpokeCard spoke={spokes[0]} />
        <SpokeCard spoke={spokes[1]} />

        {/* Row 2: cards + center hub overlaid */}
        <div className="col-span-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2.5 sm:gap-3">
          <SpokeCard spoke={spokes[2]} />
          {/* Center hub — z-20 so it sits above the SVG lines */}
          <div className="relative z-20 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-black/[0.06] bg-gradient-radial from-white via-[var(--cream)] to-[var(--terracotta)]/20 shadow-lg sm:h-32 sm:w-32">
            <div className="absolute -inset-2.5 rounded-full border border-dashed border-black/[0.04]" />
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
    <div className="rounded-lg border border-black/[0.04] bg-white/50 px-3 py-2.5 backdrop-blur transition-all hover:bg-white/70 sm:px-3.5 sm:py-3">
      <div className="text-xs font-semibold tracking-tight text-[var(--ink)]">
        {spoke.title}
      </div>
      <p className="mt-0.5 text-[10px] leading-snug text-black/45 sm:text-[11px]">
        {spoke.body}
      </p>
    </div>
  );
}
