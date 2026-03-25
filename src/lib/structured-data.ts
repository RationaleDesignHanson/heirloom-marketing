/**
 * JSON-LD structured data helpers
 * Improves SEO rich results for FAQ, app store, and organization
 */

import { copy } from "@/content/copy";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomrecipebox.app";

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Heirloom Recipe Box",
    operatingSystem: "iOS",
    applicationCategory: "LifestyleApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free to download. Premium from $6.99/month.",
    },
    description: copy.jsonLdApplicationDescription,
    url: siteUrl,
    screenshot: `${siteUrl}/og/default.png`,
    featureList: [
      "Save recipes from any URL with one tap",
      "Extract recipes from TikTok, YouTube, and Instagram videos",
      "Scan handwritten recipe cards and cookbook pages",
      "AI recipe generation from ingredients or description",
      "Voice dictation with on-device transcription",
      "Recipe attribution and lineage tracking",
      "Kitchen Table — private shared recipe space for family",
      "Offline-first with CRDT sync",
      "Private by default",
    ],
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Heirloom Recipe Box",
    url: siteUrl,
    logo: `${siteUrl}/brand/icon-1024.png`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "admin@rationale.work",
      contactType: "customer support",
    },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function webPageJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "Heirloom Recipe Box",
      url: siteUrl,
    },
  };
}
