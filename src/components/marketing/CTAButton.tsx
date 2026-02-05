"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";

type Variant = "primary" | "secondary";

export default function CTAButton({
  href,
  label,
  variant = "primary",
  eventName = "cta_click",
  eventProps,
}: {
  href: string;
  label: string;
  variant?: Variant;
  eventName?: string;
  eventProps?: Record<string, string | number | boolean | undefined>;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20";
  const styles =
    variant === "primary"
      ? "bg-[var(--charcoal)] text-[var(--cream)] hover:opacity-95"
      : "border border-black/10 bg-white/80 text-[#3A2F22] backdrop-blur hover:bg-black/[0.03]";

  return (
    <Link
      href={href}
      onClick={() => track(eventName, { href, label, variant, ...eventProps })}
      className={`${base} ${styles}`}
    >
      {label}
    </Link>
  );
}
