const spokes = [
  {
    title: "URL Import",
    body: "Paste any recipe link — AI extracts a clean recipe. Free, always.",
    icon: "🔗",
  },
  {
    title: "Video Import",
    body: "TikTok, Instagram, YouTube — audio transcription + visual extraction.",
    icon: "🎬",
  },
  {
    title: "ASMR Video",
    body: "Silent cooking videos with no narration or text overlays? We handle those too.",
    icon: "🤫",
  },
  {
    title: "Cookbook Scan",
    body: "Point your camera at a page or import a PDF. OCR + AI structuring.",
    icon: "📷",
  },
  {
    title: "Food Stories",
    body: "Record someone speaking a recipe, or just a story of one — structured into a recipe card.",
    icon: "🎙️",
  },
  {
    title: "AI Generation",
    body: "Describe a dish. AI creates a complete recipe with ingredients and steps.",
    icon: "✨",
  },
];

const pipeline = [
  { title: "Any Source", body: "URL, video, scan, voice, AI, manual" },
  { title: "Structured Recipe", body: "Normalized, relational data" },
  { title: "Graph Node", body: "Connected, versioned, preserved" },
];

export default function ConversionHub() {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* Hub + Spokes */}
      <div className="relative w-full max-w-2xl">
        {/* Spoke cards — arranged in a responsive grid around center */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Top row */}
          <SpokeCard spoke={spokes[5]} position="top-left" />
          <SpokeCard spoke={spokes[0]} position="top-right" />

          {/* Center hub */}
          <div className="col-span-2 flex items-center justify-center py-4 sm:py-6">
            <div className="relative">
              {/* Connecting lines — subtle */}
              <div className="absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-black/[0.06]" />
              </div>
              <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-black/10 bg-gradient-to-br from-white via-[var(--cream)] to-[var(--terracotta)]/30 shadow-lg sm:h-40 sm:w-40">
                <div className="text-center text-sm font-bold leading-tight tracking-tight text-[var(--ink)] sm:text-base">
                  Structured
                  <br />
                  Recipe
                  <br />
                  Conversion
                </div>
              </div>
            </div>
          </div>

          {/* Middle row */}
          <SpokeCard spoke={spokes[4]} position="mid-left" />
          <SpokeCard spoke={spokes[1]} position="mid-right" />

          {/* Bottom row */}
          <SpokeCard spoke={spokes[3]} position="bottom-left" />
          <SpokeCard spoke={spokes[2]} position="bottom-right" />
        </div>
      </div>

      {/* Pipeline */}
      <div className="w-full max-w-xl">
        <p className="mb-4 text-center text-sm text-black/50">
          Transform any source into a structured recipe graph node. Private by default. Share intentionally. Every edit incorporated.
        </p>
        <div className="flex items-stretch gap-0">
          {pipeline.map((step, i) => (
            <div key={step.title} className="flex flex-1 items-center">
              <div className="flex-1 rounded-xl border border-black/10 bg-white/80 px-3 py-3 text-center shadow-sm backdrop-blur sm:px-4">
                <div className="text-xs font-bold tracking-tight text-[var(--ink)] sm:text-sm">
                  {step.title}
                </div>
                <div className="mt-0.5 text-[10px] leading-tight text-black/50 sm:text-xs">
                  {step.body}
                </div>
              </div>
              {i < pipeline.length - 1 && (
                <div className="flex w-5 shrink-0 items-center justify-center text-black/20 sm:w-6">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
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

function SpokeCard({
  spoke,
  position: _position,
}: {
  spoke: (typeof spokes)[number];
  position: string;
}) {
  return (
    <div className="rounded-xl border border-black/10 bg-white/80 p-3 shadow-sm backdrop-blur transition-shadow hover:shadow-md sm:p-4">
      <div className="mb-1 flex items-center gap-2">
        <span className="text-base sm:text-lg">{spoke.icon}</span>
        <span className="text-xs font-bold tracking-tight text-[var(--ink)] sm:text-sm">
          {spoke.title}
        </span>
      </div>
      <p className="text-[11px] leading-snug text-black/60 sm:text-xs">
        {spoke.body}
      </p>
    </div>
  );
}
