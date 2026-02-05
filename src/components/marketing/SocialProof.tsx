export default function SocialProof({
  title,
  ratingLabel,
  items,
}: {
  title: string;
  ratingLabel?: string;
  items: { quote: string; name?: string }[];
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {ratingLabel && <p className="mt-2 text-sm text-black/60">{ratingLabel}</p>}
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#FBF7EF] px-3 py-1 text-xs text-black/70">
          ★★★★★ <span className="text-black/40">•</span> Privacy-first
        </div>
      </div>

      {items.length > 0 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {items.map((t, idx) => (
            <div key={idx} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <p className="text-sm text-black/80">&ldquo;{t.quote}&rdquo;</p>
              {t.name && <p className="mt-3 text-xs text-black/60">— {t.name}</p>}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-6 text-sm text-black/60">
          Add testimonials when you have them. This block is ready.
        </p>
      )}
    </div>
  );
}

