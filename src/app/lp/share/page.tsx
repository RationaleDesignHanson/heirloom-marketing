import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.lpShare.meta.title,
  description: pages.lpShare.meta.description,
};

export default function ShareLanding({ searchParams }: { searchParams?: { v?: string } }) {
  return <MarketingPage page={resolvePage(pages.lpShare, searchParams?.v)} />;
}

