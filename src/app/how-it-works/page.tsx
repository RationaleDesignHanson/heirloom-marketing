import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomrecipebox.app";

const { title, description } = pages.howItWorks.meta;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/how-it-works` },
  openGraph: {
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function HowItWorksPage() {
  return <MarketingPage page={pages.howItWorks} />;
}
