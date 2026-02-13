import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.lpScan.meta.title,
  description: pages.lpScan.meta.description,
};

export default function ScanLanding() {
  return <MarketingPage page={pages.lpScan} />;
}
