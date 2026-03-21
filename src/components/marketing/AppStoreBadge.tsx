"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/analytics";

export default function AppStoreBadge({
  href,
  eventProps,
  className,
}: {
  href: string;
  eventProps?: Record<string, string | number | boolean | undefined>;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        track("cta_click", {
          href,
          label: "Download on the App Store",
          variant: "app-store-badge",
          ...eventProps,
        })
      }
      className={`inline-flex items-center justify-center h-[55px] transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded-xl overflow-hidden${className ? ` ${className}` : ""}`}
    >
      <Image
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        width={165}
        height={55}
        className="h-full w-full object-contain"
        priority
      />
    </Link>
  );
}
