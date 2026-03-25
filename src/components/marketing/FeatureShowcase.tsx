"use client";

import type { FeatureItem } from "@/content/content";
import FeatureShowcaseRow from "./FeatureShowcaseRow";

export default function FeatureShowcase({
  title,
  items,
}: {
  title: string;
  items: FeatureItem[];
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>

      <div className="mt-6 overflow-hidden rounded-3xl border border-black/10">
        {items.map((item, idx) => (
          <FeatureShowcaseRow key={idx} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
}
