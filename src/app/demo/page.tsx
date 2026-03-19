import type { Metadata } from "next";
import { HeirloomDemo } from "@/components/heirloom";
import { HeirloomDemoMobile } from "@/components/heirloom/HeirloomDemoMobile";
import HeaderNav from "@/components/marketing/HeaderNav";
import Footer from "@/components/marketing/Footer";
import { pages } from "@/content/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomrecipebox.app";

export const metadata: Metadata = {
  title: "Try the Demo — Heirloom Recipe Box",
  description:
    "Upload a photo of any recipe card, cookbook page, or handwritten recipe. Watch Heirloom extract and preserve it instantly.",
  alternates: { canonical: `${siteUrl}/demo` },
  openGraph: {
    title: "Try the Demo — Heirloom Recipe Box",
    description: "Upload a recipe photo. Watch AI extract and preserve it. Then add stickers and pass it down through generations.",
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
  },
};

export default function DemoPage() {
  const nav = pages.home.nav;
  const heroCta = pages.home.hero.primaryCta;

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <HeaderNav items={nav} cta={heroCta} />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70 shadow-sm backdrop-blur">
            Live demo — powered by Claude AI
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
            See Heirloom extract a recipe
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-black/70">
            Upload a photo of any handwritten recipe card or cookbook page.
            Watch it become a structured, shareable recipe card — in seconds.
          </p>
        </div>

        {/* Mobile: snappy 3-step version */}
        <div className="sm:hidden">
          <HeirloomDemoMobile />
        </div>

        {/* Desktop: full interactive version */}
        <div className="hidden sm:block">
          <HeirloomDemo />
        </div>

        {/* Callout below */}
        <div className="mt-12 rounded-2xl border border-black/10 bg-white/80 p-8 text-center shadow-sm backdrop-blur">
          <p className="text-sm text-black/60">
            This is just one of six ways Heirloom captures recipes — web, video, PDF, voice, AI generation, and camera scan.
          </p>
          <a
            href={pages.home.hero.primaryCta.href}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--tomato)] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            {pages.home.hero.primaryCta.label}
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
