import type { Metadata } from "next";
import type { PageSection } from "@/content/content";
import { pages } from "@/content/content";
import ConversionHub from "@/components/marketing/ConversionHub";
import FeatureShowcaseRow from "@/components/marketing/FeatureShowcaseRow";

export const metadata: Metadata = {
  title: "Infographics (export)",
  description:
    "How it works hub diagram and homepage preservation rows—for slides and press. Screenshot or Print → PDF.",
  robots: { index: false, follow: false },
};

function preservationShowcaseItems() {
  const s = pages.home.sections.find(
    (x): x is Extract<PageSection, { kind: "featureGrid" }> =>
      x.kind === "featureGrid" && x.id === "preservation",
  );
  return s?.items ?? [];
}

export default function PresskitInfographicsPage() {
  const items = preservationShowcaseItems();

  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      <div className="mx-auto max-w-3xl px-6 py-10 md:py-14">
        <p className="text-xs font-semibold uppercase tracking-wider text-black/40">
          Heirloom Recipe Box · Press / decks
        </p>
        <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight text-black md:text-3xl">
          Marketing diagrams (export)
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/65">
          Same components as the live site. Capture with a screenshot or{" "}
          <kbd className="rounded border border-black/15 bg-white px-1.5 py-0.5 font-mono text-xs">⌘P</kbd>{" "}
          → Save as PDF. The hub diagram shows all six capture paths with descriptions (on the How it works
          page, those lines only appear on hover).
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-14 px-4 pb-20 md:space-y-16 md:px-6 md:pb-28">
        {/* How it works hero — ConversionHub */}
        <section className="print:break-inside-avoid">
          <h2 className="mb-4 font-display text-lg font-semibold text-black md:text-xl">
            How it works — capture hub
          </h2>
          <p className="mb-6 max-w-2xl text-sm text-black/60">
            Matches the diagram in the hero on{" "}
            <a className="underline decoration-black/25 underline-offset-2" href="/how-it-works">
              /how-it-works
            </a>
            . Static layout below (no dashed-line motion) so exports stay sharp.
          </p>
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-[#FBF6EF] px-4 py-10 shadow-sm sm:px-8 sm:py-12 md:py-14 print:shadow-none">
            <div
              className="conversionhub-static-export mx-auto flex max-w-[min(100%,36rem)] justify-center md:max-w-[34rem] lg:max-w-[640px] lg:scale-105 lg:origin-top"
              data-export="conversion-hub"
            >
              <ConversionHub />
            </div>
          </div>
        </section>

        {/* Homepage preservation showcase rows */}
        <section>
          <h2 className="mb-4 font-display text-lg font-semibold text-black md:text-xl">
            Homepage — preservation showcase rows
          </h2>
          <p className="mb-6 max-w-2xl text-sm text-black/60">
            Same three rows as the home page &ldquo;Preservation—not piles of links&rdquo; section.
          </p>
          {items.length === 0 ? (
            <p className="text-center text-sm text-black/50">No preservation showcase items found in content.</p>
          ) : (
            <div className="space-y-10 md:space-y-12">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-3xl border border-black/10 shadow-sm print:break-inside-avoid print:shadow-none"
                >
                  <FeatureShowcaseRow item={item} index={i} exportMode />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
