import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomrecipebox.app";

export const metadata: Metadata = {
  title: pages.lpScan.meta.title,
  description: pages.lpScan.meta.description,
  alternates: { canonical: `${siteUrl}/lp/scan` },
};

export default function ScanLanding() {
  return <MarketingPage page={pages.lpScan} />;
}
