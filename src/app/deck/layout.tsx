import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deck — Heirloom",
  robots: { index: false, follow: false },
};

export default function DeckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
