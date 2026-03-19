import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { softwareApplicationJsonLd, organizationJsonLd, faqJsonLd } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heirloom Recipe Box — Preserve Your Family's Food Culture",
  description:
    "73% of family recipes are lost within one generation. Heirloom is the system of record for family food culture — capture, preserve, and share recipes from any source.",
  alternates: {
    canonical: "https://heirloomrecipebox.app",
  },
};

// Shared FAQs for structured data (mirrors content.ts sharedFAQs)
const faqItems = [
  { q: "Does it work from the Share Sheet?", a: "Yes—saving from the Share Sheet is the core of Heirloom Recipe Box." },
  { q: "Are my recipes public?", a: "No. Your Recipe Box is private by default. Sharing and publishing are optional." },
  { q: "Can I share recipes with friends?", a: "Yes—send recipes directly, and they can tap to accept into their Recipe Box." },
  { q: "How do credits and Premium work?", a: "Some imports use credits. Your trial starts with 50 credits, and Premium includes 100 credits/month. Premium unlocks cookbook scanning and sync—the tools to preserve everything, from any source. You can also buy credit packs when you need a burst." },
  { q: "Is saving from websites free?", a: "Yes. Save from Safari with one tap using the Share Sheet. Premium unlocks advanced imports and extras like cookbook scanning and cloud sync." },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }}
      />
      <MarketingPage page={pages.home} />
    </>
  );
}
