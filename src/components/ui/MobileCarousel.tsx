"use client";

/**
 * MobileCarousel — horizontal scroll container for mobile layouts
 * Simple snap-scroll wrapper, no external deps
 */
export function MobileCarousel({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto -mx-4 px-4 snap-x snap-mandatory flex gap-4 pb-2 sm:hidden scrollbar-none">
      {children}
    </div>
  );
}
