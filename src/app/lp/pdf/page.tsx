import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomrecipebox.app";

export const metadata: Metadata = {
  title: pages.lpPdf.meta.title,
  description: pages.lpPdf.meta.description,
  alternates: { canonical: `${siteUrl}/lp/pdf` },
  openGraph: { images: [{ url: "/og/pdf.png", width: 1200, height: 630 }] },
};

export default async function PdfLanding({ searchParams }: { searchParams?: Promise<{ v?: string }> }) {
  const params = await searchParams;
  return <MarketingPage page={resolvePage(pages.lpPdf, params?.v)} />;
}
