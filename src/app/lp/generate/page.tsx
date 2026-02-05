import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.lpGenerate.meta.title,
  description: pages.lpGenerate.meta.description,
};

export default function GenerateLanding({ searchParams }: { searchParams?: { v?: string } }) {
  return <MarketingPage page={resolvePage(pages.lpGenerate, searchParams?.v)} />;
}

