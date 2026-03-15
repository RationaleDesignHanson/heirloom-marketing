import type { StepItem } from "@/content/content";

export default function Steps({ title, items }: { title: string; items: StepItem[] }) {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => (
          <div key={idx} className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur">
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--tomato)] text-sm font-semibold text-white">
              {idx + 1}
            </div>
            <div className="text-base font-semibold">{it.title}</div>
            {it.body && <div className="mt-2 text-sm text-black/70">{it.body}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
