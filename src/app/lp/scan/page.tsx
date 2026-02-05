import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.lpScan.meta.title,
  description: pages.lpScan.meta.description,
};

export default function ScanLanding({ searchParams }: { searchParams?: { v?: string } }) {
  return <MarketingPage page={resolvePage(pages.lpScan, searchParams?.v)} />;
}

