import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";

export default function SharePage({ searchParams }: { searchParams?: { v?: string } }) {
  return <MarketingPage page={resolvePage(pages.share, searchParams?.v)} />;
}
