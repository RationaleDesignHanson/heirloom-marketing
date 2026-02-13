import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.home.meta.title,
  description: pages.home.meta.description,
};

export default async function HomePage({ searchParams }: { searchParams?: Promise<{ v?: string }> }) {
  const params = await searchParams;
  return <MarketingPage page={resolvePage(pages.home, params?.v)} />;
}
