import type { FeatureItem } from "@/content/content";

export default function FeatureGrid({
  title,
  items,
  columns = 3,
}: {
  title: string;
  items: FeatureItem[];
  columns?: 3 | 4;
}) {
  const cols = columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className={`mt-6 grid gap-4 ${cols}`}>
        {items.map((it, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur"
          >
            <div className="text-base font-semibold">{it.title}</div>
            <div className="mt-2 text-sm text-black/70">{it.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
