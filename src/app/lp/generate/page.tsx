import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.lpGenerate.meta.title,
  description: pages.lpGenerate.meta.description,
  openGraph: { images: [{ url: "/og/generate.png", width: 1200, height: 630 }] },
};

export default async function GenerateLanding({ searchParams }: { searchParams?: Promise<{ v?: string }> }) {
  const params = await searchParams;
  return <MarketingPage page={resolvePage(pages.lpGenerate, params?.v)} />;
}
