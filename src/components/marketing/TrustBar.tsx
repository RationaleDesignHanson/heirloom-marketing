export default function TrustBar({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm sm:p-5">
      {/* Mobile: horizontal scroll pills */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none sm:hidden">
        {items.map((x, idx) => (
          <div
            key={idx}
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-black/8 bg-[var(--cream)] px-3 py-1.5 text-xs text-black/70 whitespace-nowrap"
          >
            <span className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#4E8466]" />
            {x}
          </div>
        ))}
      </div>

      {/* Desktop: wrap row */}
      <div className="hidden sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-3">
        {items.map((x, idx) => (
          <div key={idx} className="text-sm text-black/70">
            <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-[#4E8466]" />
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}
