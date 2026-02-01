"use client";

import { useState } from "react";
import type { FAQItem } from "@/content/content";

export default function FAQ({ title, items }: { title: string; items: FAQItem[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white shadow-sm">
        {items.map((it, idx) => (
          <FAQRow key={idx} item={it} />
        ))}
      </div>
    </div>
  );
}

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <button type="button" onClick={() => setOpen(!open)} className="w-full px-6 py-5 text-left">
      <div className="flex items-center justify-between gap-6">
        <div className="text-sm font-semibold text-black">{item.q}</div>
        <div className="text-black/60">{open ? "−" : "+"}</div>
      </div>
      {open && <div className="mt-3 text-sm text-black/70">{item.a}</div>}
    </button>
  );
}
