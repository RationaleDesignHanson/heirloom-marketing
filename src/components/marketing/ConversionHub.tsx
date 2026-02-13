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
      {/* Grid: 3 cols × 3 rows */}
      <div className="relative grid grid-cols-2 gap-2.5 sm:gap-3" style={{ gridTemplateRows: "auto auto auto" }}>
        {/* Row 1 */}
        <SpokeCard spoke={spokes[0]} anchor="bottom-right" />
        <SpokeCard spoke={spokes[1]} anchor="bottom-left" />

        {/* Row 2: cards + center hub */}
        <div className="col-span-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2.5 sm:gap-3">
          <SpokeCard spoke={spokes[2]} anchor="right" />
          {/* Center hub */}
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
          <SpokeCard spoke={spokes[3]} anchor="left" />
        </div>

        {/* Row 3 */}
        <SpokeCard spoke={spokes[4]} anchor="top-right" />
        <SpokeCard spoke={spokes[5]} anchor="top-left" />
      </div>
    </div>
  );
}

type Anchor = "bottom-right" | "bottom-left" | "right" | "left" | "top-right" | "top-left";

function SpokeCard({ spoke, anchor }: { spoke: (typeof spokes)[number]; anchor: Anchor }) {
  // Line from card edge toward center
  const lineStyles: Record<Anchor, { line: string; container: string }> = {
    "bottom-right": {
      container: "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
      line: "rotate-[135deg]",
    },
    "bottom-left": {
      container: "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
      line: "rotate-[225deg]",
    },
    right: {
      container: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
      line: "rotate-[180deg]",
    },
    left: {
      container: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
      line: "rotate-[0deg]",
    },
    "top-right": {
      container: "top-0 right-0 translate-x-1/2 -translate-y-1/2",
      line: "rotate-[-135deg]",
    },
    "top-left": {
      container: "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
      line: "rotate-[-225deg]",
    },
  };

  const style = lineStyles[anchor];

  return (
    <div className="relative">
      <div className="relative z-10 rounded-lg bg-white/30 px-3 py-2.5 backdrop-blur transition-all hover:bg-white/50 sm:px-3.5 sm:py-3">
        <div className="text-xs font-semibold tracking-tight text-[var(--ink)]">
          {spoke.title}
        </div>
        <p className="mt-0.5 text-[10px] leading-snug text-black/45 sm:text-[11px]">
          {spoke.body}
        </p>
      </div>
      {/* Connector line */}
      <div className={`absolute z-0 ${style.container}`}>
        <div className={`${style.line} h-[1px] w-8 origin-left bg-gradient-to-r from-black/15 to-black/5 sm:w-10`} />
      </div>
    </div>
  );
}
