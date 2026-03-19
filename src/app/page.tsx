import MarketingPage from "@/components/marketing/MarketingPage";
import { pages, sharedFAQs } from "@/content/content";
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(sharedFAQs)) }}
      />
      <MarketingPage page={pages.home} />
    </>
  );
}
