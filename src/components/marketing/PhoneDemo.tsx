export default function PhoneDemo({
  demo,
}: {
  demo: { video: string; poster: string; alt: string; aspect: "16:9" | "9:16" };
}) {
  const ratio = demo.aspect === "9:16" ? "aspect-[9/16]" : "aspect-video";

  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm backdrop-blur">
      <div className={`overflow-hidden bg-black/5 ${ratio}`}>
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
    </div>
  );
}
