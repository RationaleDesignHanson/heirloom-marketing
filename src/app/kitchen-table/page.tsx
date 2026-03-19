import MarketingPage from "@/components/marketing/MarketingPage";
import { pages } from "@/content/content";
import { resolvePage } from "@/components/marketing/resolvePage";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomrecipebox.app";

export const metadata: Metadata = {
  title: "Kitchen Table — Cook with the People Closest to You | Heirloom Recipe Box",
  description:
    "Kitchen Table is your private shared recipe space for family and close friends. Share recipes, plan meals together, and build a shared family cookbook — up to 8 members, no algorithm.",
  alternates: { canonical: `${siteUrl}/kitchen-table` },
  openGraph: {
    title: "Kitchen Table — Heirloom Recipe Box",
    description:
      "A private space for up to 8 members. Share recipes, coordinate group meals, build a shared family cookbook.",
    images: [{ url: "/og/kitchen-table.png", width: 1200, height: 630 }],
  },
};

export default async function KitchenTablePage({
  searchParams,
}: {
  searchParams?: Promise<{ v?: string }>;
}) {
  const params = await searchParams;
  return <MarketingPage page={resolvePage(pages.lpShare, params?.v)} />;
}
