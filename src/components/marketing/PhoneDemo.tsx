export default function PhoneDemo({
  demo,
}: {
  demo: {
    video: string;
    poster: string;
    alt: string;
    aspect: "16:9" | "9:16";
    /**
     * Optional presentation knob to accommodate exports with extra safe-area
     * or inconsistent framing. Values > 1 zoom in (cropping edges).
     */
    zoom?: number;
  };
}) {
  const ratio = demo.aspect === "9:16" ? "aspect-[9/16]" : "aspect-video";
  const zoom = demo.zoom ?? 1;

  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm backdrop-blur">
      <div className={`relative overflow-hidden bg-black/5 ${ratio}`}>
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={zoom !== 1 ? { transform: `scale(${zoom})`, transformOrigin: "center" } : undefined}
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
