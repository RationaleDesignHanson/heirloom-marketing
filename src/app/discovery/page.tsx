import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomrecipebox.app";

export const metadata: Metadata = {
  title: pages.discovery.meta.title,
  description: pages.discovery.meta.description,
  alternates: { canonical: `${siteUrl}/discovery` },
};

export default function DiscoveryPage() {
  return <MarketingPage page={pages.discovery} />;
}
