import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pages.community.meta.title,
  description: pages.community.meta.description,
};

export default function CommunityPage({ searchParams }: { searchParams?: { v?: string } }) {
  return <MarketingPage page={resolvePage(pages.community, searchParams?.v)} />;
}

