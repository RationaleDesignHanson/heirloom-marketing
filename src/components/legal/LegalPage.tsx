"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderNav from "@/components/marketing/HeaderNav";
import Footer from "@/components/marketing/Footer";
import { urls } from "@/content/content";

type NavItem = { label: string; href: string };

const headerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Support", href: "/support" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const legalPages = [
  { label: "Support", href: "/support", icon: "💬" },
  { label: "Privacy Policy", href: "/privacy", icon: "🔒" },
  { label: "Terms of Service", href: "/terms", icon: "📄" },
  { label: "Privacy Choices", href: "/privacy-choices", icon: "⚙️" },
];

export default function LegalPage({
  title,
  description,
  lastUpdated,
  children,
}: {
  title: string;
  description?: string;
  lastUpdated?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <HeaderNav items={headerNav} cta={{ label: "Get the app", href: urls.appStore }} />

      {/* ── Hero header ──────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl pt-10 sm:pt-14">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-[var(--cream)] via-white to-[var(--terracotta)]/40 px-6 py-8 shadow-sm sm:px-10 sm:py-10">
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[var(--tomato)]/8 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-black/5 blur-3xl" />

            <div className="relative">
              {lastUpdated && (
                <div className="mb-3 inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/60 shadow-sm backdrop-blur">
                  Updated {lastUpdated}
                </div>
              )}
              <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                {title}
              </h1>
              {description && (
                <p className="mt-3 max-w-2xl text-base text-black/60 sm:text-lg">{description}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Page pill navigation ─────────────────────────── */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl pt-6">
          <nav className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {legalPages.map((page) => {
              const isActive = pathname === page.href;
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-black/15 bg-white text-black shadow-sm"
                      : "border-transparent text-black/50 hover:border-black/10 hover:bg-white/60 hover:text-black/70"
                  }`}
                >
                  <span className="text-sm">{page.icon}</span>
                  {page.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ── Content card ─────────────────────────────────── */}
      <main className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl py-6 pb-16 sm:py-8">
          <div className="rounded-2xl border border-black/8 bg-white/80 px-5 py-8 shadow-sm backdrop-blur sm:px-10 sm:py-10">
            <article className="legal">{children}</article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
