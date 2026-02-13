import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.lpVideo.meta.title,
  description: pages.lpVideo.meta.description,
};

export default async function VideoLanding({ searchParams }: { searchParams?: Promise<{ v?: string }> }) {
  const params = await searchParams;
  return <MarketingPage page={resolvePage(pages.lpVideo, params?.v)} />;
}
