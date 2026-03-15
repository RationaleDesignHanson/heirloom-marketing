import {
  Sparkles,
  Link,
  Mic,
  Video,
  ScanLine,
  Volume2,
  FileText,
} from "lucide-react";

const spokes = [
  { title: "AI Generation", body: "Describe a dish — AI writes a complete recipe.", icon: Sparkles },
  { title: "URL Import", body: "Paste any recipe link. Clean recipe, instantly.", icon: Link },
  { title: "Food Stories", body: "Speak a recipe aloud — structured into a card.", icon: Mic },
  { title: "Video Import", body: "TikTok, Instagram, YouTube — extracted automatically.", icon: Video },
  { title: "Cookbook Scan", body: "Camera or PDF — OCR + AI structuring.", icon: ScanLine },
  { title: "ASMR Video", body: "Silent cooking videos — no narration needed.", icon: Volume2 },
];

/* Lines: card → center so dashes animate toward hub */
const connectorLines: [number, number, number, number][] = [
  [25, 14, 50, 50],
  [75, 14, 50, 50],
  [14, 50, 50, 50],
  [86, 50, 50, 50],
  [25, 86, 50, 50],
  [75, 86, 50, 50],
];

const staggerDelays = ["0.1s", "0.15s", "0.2s", "0.25s", "0.3s", "0.35s"];

export default function ConversionHub() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-[520px]">
      {/* SVG connectors: card → center so dashes flow toward hub */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {connectorLines.map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            className="conversionhub-connector"
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#3a2f22"
            opacity={0.2}
            strokeWidth={0.5}
          />
        ))}
      </svg>

      <div className="relative z-10 grid grid-cols-2 gap-4">
        {/* Row 1 */}
        <SpokeCard spoke={spokes[0]} staggerDelay={staggerDelays[0]} />
        <SpokeCard spoke={spokes[1]} staggerDelay={staggerDelays[1]} />

        {/* Row 2: cards + center hub */}
        <div className="col-span-2 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <SpokeCard spoke={spokes[2]} staggerDelay={staggerDelays[2]} />
          {/* Center hub */}
          <div
            className="relative z-20 flex h-28 w-28 flex-col items-center justify-center gap-1 overflow-visible rounded-full shadow-lg sm:h-32 sm:w-32"
            style={{ animation: "fadeInUp 0.5s ease-out 0.05s both" }}
          >
            <div className="conversionhub-ripple" />
            <div className="conversionhub-ripple" />
            <div className="conversionhub-ripple" />
            <div className="conversionhub-ripple" />
            <div className="absolute inset-0 rounded-full bg-[var(--cream)]" />
            <div
              className="absolute inset-0 rounded-full border border-[var(--terracotta)]/40"
              style={{
                background:
                  "radial-gradient(ellipse at center, white, rgba(250,245,240,0.95), rgba(242,209,197,0.4))",
              }}
            />
            <div className="relative flex flex-col items-center justify-center gap-1 text-center">
              <FileText
                className="h-8 w-8 shrink-0 text-[var(--tomato)] sm:h-10 sm:w-10"
                strokeWidth={2}
                aria-hidden
              />
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--ink)]/90 sm:text-xs">
                Structured Recipe
              </div>
            </div>
          </div>
          <SpokeCard spoke={spokes[3]} staggerDelay={staggerDelays[3]} />
        </div>

        {/* Row 3 */}
        <SpokeCard spoke={spokes[4]} staggerDelay={staggerDelays[4]} />
        <SpokeCard spoke={spokes[5]} staggerDelay={staggerDelays[5]} />
      </div>
    </div>
  );
}

function SpokeCard({
  spoke,
  staggerDelay,
}: {
  spoke: (typeof spokes)[number];
  staggerDelay: string;
}) {
  const Icon = spoke.icon;
  return (
    <div
      className="conversionhub-spoke-group flex flex-col items-center text-center"
      style={{ animation: `fadeInUp 0.5s ease-out ${staggerDelay} both` }}
    >
      <div className="conversionhub-spoke-card flex w-full max-w-[280px] flex-col items-center rounded-xl border border-[var(--terracotta)]/30 bg-white/95 px-3 py-2 shadow-sm transition-all duration-200 ease-out">
        <Icon
          className="h-5 w-5 shrink-0 text-[var(--tomato)]"
          strokeWidth={2}
          aria-hidden
        />
        <span className="mt-1 text-[13px] font-semibold tracking-tight text-[var(--ink)]">
          {spoke.title}
        </span>
        <p className="conversionhub-spoke-subtext mt-1 text-center text-xs leading-relaxed text-[var(--ink)]/65">
          {spoke.body}
        </p>
      </div>
    </div>
  );
}
