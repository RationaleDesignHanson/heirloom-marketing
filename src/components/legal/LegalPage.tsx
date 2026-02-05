import type { ReactNode } from "react";
import HeaderNav from "@/components/marketing/HeaderNav";
import Footer from "@/components/marketing/Footer";
import { urls } from "@/content/content";

type NavItem = { label: string; href: string };

const legalNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Support", href: "/support" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <HeaderNav items={legalNav} cta={{ label: "Get the app", href: urls.appStore }} />
      <main className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-10 sm:py-12">
          <div className="mb-6 text-xs font-medium uppercase tracking-wide text-black/50">
            {title}
          </div>
          <article className="legal">{children}</article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

