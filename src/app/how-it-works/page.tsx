import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.howItWorks.meta.title,
  description: pages.howItWorks.meta.description,
};

export default function HowItWorksPage() {
  return <MarketingPage page={pages.howItWorks} />;
}
