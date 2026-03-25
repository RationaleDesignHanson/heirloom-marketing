import type { Metadata } from "next";
import type { PageSection } from "@/content/content";
import { pages } from "@/content/content";
import FeatureShowcaseRow from "@/components/marketing/FeatureShowcaseRow";

export const metadata: Metadata = {
  title: "Infographics (export)",
  description:
    "Homepage preservation showcase at export size—screenshots, video, and infographic per row. Print → PDF or screenshot for decks.",
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
          Homepage showcase (full rows)
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/65">
          Same layout as the home page &ldquo;Preservation—not piles of links&rdquo; section: phone
          screenshot, headline, body, bullets, and diagram. Export by screenshotting each bordered block
          below, or{" "}
          <kbd className="rounded border border-black/15 bg-white px-1.5 py-0.5 font-mono text-xs">⌘P</kbd>{" "}
          → Save as PDF.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-20 md:px-6 md:pb-28">
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
      </div>
    </div>
  );
}
