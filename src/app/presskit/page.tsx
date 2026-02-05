import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.presskit.meta.title,
  description: pages.presskit.meta.description,
};

export default function PresskitPage({ searchParams }: { searchParams?: { v?: string } }) {
  return <MarketingPage page={resolvePage(pages.presskit, searchParams?.v)} />;
}

