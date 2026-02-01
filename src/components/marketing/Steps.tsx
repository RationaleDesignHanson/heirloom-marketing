import type { StepItem } from "@/content/content";

export default function Steps({ title, items }: { title: string; items: StepItem[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {items.map((it, idx) => (
          <div key={idx} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#3A2F22] text-sm font-semibold text-[#FBF7EF]">
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
