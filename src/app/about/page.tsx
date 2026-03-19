import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.about.meta.title,
  description: pages.about.meta.description,
  openGraph: { images: [{ url: "/og/about.png", width: 1200, height: 630 }] },
};

export default function AboutPage() {
  return <MarketingPage page={pages.about} />;
}
