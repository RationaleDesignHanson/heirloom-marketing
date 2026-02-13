import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.lpShare.meta.title,
  description: pages.lpShare.meta.description,
};

export default async function ShareLanding({ searchParams }: { searchParams?: Promise<{ v?: string }> }) {
  const params = await searchParams;
  return <MarketingPage page={resolvePage(pages.lpShare, params?.v)} />;
}
