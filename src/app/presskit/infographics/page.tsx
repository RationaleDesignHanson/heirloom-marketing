import type { Metadata } from "next";
import FeatureInfographic, { type InfographicId } from "@/components/marketing/FeatureInfographic";

export const metadata: Metadata = {
  title: "Infographics (export)",
  description:
    "Homepage feature diagrams at export-friendly size—for slides, PDF, and press. Use screenshot or Print → Save as PDF.",
  robots: { index: false, follow: false },
};

const BLOCKS: { id: InfographicId; title: string; blurb: string }[] = [
  {
    id: "capture-methods",
    title: "Six ways in",
    blurb: "Matches the first showcase row on the homepage (capture paths).",
  },
  {
    id: "recipe-lineage",
    title: "Full provenance",
    blurb: "Lineage from source through shared boxes—second homepage row.",
  },
  {
    id: "share-flow",
    title: "How sharing works",
    blurb: "Send → accept → credited in their box—third homepage row.",
  },
];

export default function PresskitInfographicsPage() {
  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      <div className="mx-auto max-w-3xl px-6 py-10 md:py-14">
        <p className="text-xs font-semibold uppercase tracking-wider text-black/40">
          Heirloom Recipe Box · Press / decks
        </p>
        <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight text-black md:text-3xl">
          Homepage infographics
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/65">
          These are the same React components as on the homepage (
          <code className="rounded bg-black/5 px-1 py-0.5 text-xs">FeatureInfographic</code>
          ). Export for Keynote, Google Slides, or PowerPoint by:
        </p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-black/65">
          <li>
            <strong className="text-black/80">Screenshot:</strong> macOS{" "}
            <kbd className="rounded border border-black/15 bg-white px-1.5 py-0.5 font-mono text-xs">
              ⇧⌘4
            </kbd>{" "}
            (or DevTools → node screenshot on the bordered block below each title).
          </li>
          <li>
            <strong className="text-black/80">Vector-friendly:</strong> Print this page{" "}
            <kbd className="rounded border border-black/15 bg-white px-1.5 py-0.5 font-mono text-xs">
              ⌘P
            </kbd>{" "}
            → Save as PDF, then place PDF on a slide or open in Illustrator / Figma.
          </li>
        </ul>
      </div>

      <div className="mx-auto max-w-4xl space-y-12 px-6 pb-20 md:space-y-16 md:pb-28">
        {BLOCKS.map((block, i) => (
          <section
            key={block.id}
            className={`infographic-export-block rounded-2xl border border-black/10 bg-white/90 p-8 shadow-sm md:p-10 print:break-inside-avoid print:border-black/20 print:shadow-none ${
              i > 0 ? "print:break-before-page" : ""
            }`}
          >
            <h2 className="font-display text-lg font-semibold text-black md:text-xl">{block.title}</h2>
            <p className="mt-1 text-xs text-black/50">{block.blurb}</p>
            <div className="mt-4 scale-100 md:scale-110 md:origin-top print:scale-100">
              <FeatureInfographic id={block.id} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
