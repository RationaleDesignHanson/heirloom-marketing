export default function TestimonialStrip({
  title,
  items,
}: {
  title: string;
  items: { quote: string; name?: string }[];
}) {
  if (!items || items.length === 0) {
    return (
      <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
        <p className="mt-3 text-sm text-black/70">
          Add testimonials when you have them. This block is ready.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((t, idx) => (
          <div key={idx} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <p className="text-sm text-black/80">&ldquo;{t.quote}&rdquo;</p>
            {t.name && <p className="mt-3 text-xs text-black/60">— {t.name}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
