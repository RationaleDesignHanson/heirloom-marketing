export default function PhoneDemo({
  demo,
}: {
  demo: { video: string; poster: string; alt: string; aspect: "16:9" | "9:16" };
}) {
  const ratio = demo.aspect === "9:16" ? "aspect-[9/16]" : "aspect-video";

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-3 shadow-sm">
      <div className={`overflow-hidden rounded-2xl bg-black/5 ${ratio}`}>
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={demo.poster}
          aria-label={demo.alt}
        >
          <source src={demo.video} type="video/mp4" />
        </video>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs text-black/60">Demo</div>
        <div className="text-xs text-black/60">Heirloom Recipe Box</div>
      </div>
    </div>
  );
}
