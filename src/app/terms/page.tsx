import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";

export default function TermsPage({ searchParams }: { searchParams?: { v?: string } }) {
  return <MarketingPage page={resolvePage(pages.terms, searchParams?.v)} />;
}
