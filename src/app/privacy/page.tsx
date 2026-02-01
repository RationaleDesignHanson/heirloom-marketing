import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";

export default function PrivacyPage({ searchParams }: { searchParams?: { v?: string } }) {
  return <MarketingPage page={resolvePage(pages.privacy, searchParams?.v)} />;
}
