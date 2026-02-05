import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.lpVideo.meta.title,
  description: pages.lpVideo.meta.description,
};

export default function VideoLanding({ searchParams }: { searchParams?: { v?: string } }) {
  return <MarketingPage page={resolvePage(pages.lpVideo, searchParams?.v)} />;
}

