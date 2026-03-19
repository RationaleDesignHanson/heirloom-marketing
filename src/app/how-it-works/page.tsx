import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.howItWorks.meta.title,
  description: pages.howItWorks.meta.description,
  openGraph: { images: [{ url: "/og/how-it-works.png", width: 1200, height: 630 }] },
};

export default function HowItWorksPage() {
  return <MarketingPage page={pages.howItWorks} />;
}
