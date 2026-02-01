export default function TrustBar({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
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
