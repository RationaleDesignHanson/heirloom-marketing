import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.technology.meta.title,
  description: pages.technology.meta.description,
  openGraph: { images: [{ url: "/og/technology.png", width: 1200, height: 630 }] },
};

export default function TechnologyPage() {
  return <MarketingPage page={pages.technology} />;
}
