import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.discovery.meta.title,
  description: pages.discovery.meta.description,
  openGraph: { images: [{ url: "/og/discovery.png", width: 1200, height: 630 }] },
};

export default function DiscoveryPage() {
  return <MarketingPage page={pages.discovery} />;
}
