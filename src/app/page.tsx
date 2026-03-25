import MarketingPage from "@/components/marketing/MarketingPage";
import { pages, sharedFAQs } from "@/content/content";
import { softwareApplicationJsonLd, organizationJsonLd, faqJsonLd } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.home.meta.title,
  description: pages.home.meta.description,
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
