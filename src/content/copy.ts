/**
 * Canonical marketing strings for TS consumers (layout, content, JSON-LD).
 * Keep scripts/generate-og-images.mjs in sync via src/content/seo-sync.json.
 */
import seoSync from "./seo-sync.json";

export { seoSync };

export const copy = {
  metaHomeTitle: "Heirloom Recipe Box — Preserve your family's food culture",
  metaHomeDescription:
    "73% of family recipes are lost within one generation. Heirloom is the system of record for family food culture — capture, preserve, and share recipes from any source.",

  siteDefaultTitle: "Heirloom Recipe Box — Preserve Your Family's Food Culture",

  siteDefaultDescription:
    "73% of family recipes are lost within one generation. Heirloom is the system of record for family food culture — capture, preserve, and share recipes from any source.",

  openGraphDescription:
    "73% of family recipes are lost within one generation. Heirloom preserves family food culture — capture recipes from video, scan, voice, URL, PDF, or AI.",

  twitterDescription:
    "Preserve family food culture in one app — video, scan, voice, URL, PDF, or AI. Private by default.",

  statShort: "73% of family recipes lost in one generation",
  statProblemSectionTitle: "73% of family recipes are lost within one generation",

  ctaPrimary: "Get Heirloom Recipe Box",
  ctaStoreDownload: "Download on the App Store",

  jsonLdApplicationDescription:
    "Heirloom preserves family recipes from any source — video, scan, voice, URL, PDF, or AI. Private by default.",
} as const;
