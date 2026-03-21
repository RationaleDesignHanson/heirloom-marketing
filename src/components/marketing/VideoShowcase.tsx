import PhoneDemo from "./PhoneDemo";

export default function VideoShowcase({
  title,
  subtitle,
  body,
  bullets,
  demo,
}: {
  title: string;
  subtitle?: string;
  body?: string;
  bullets?: string[];
  demo: { video: string; poster: string; alt: string; aspect: "16:9" | "9:16" };
}) {
  const isLandscapeHero = demo.video.includes("16x9");

  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-[var(--cream)] p-5 shadow-sm sm:p-8 lg:p-10">
      {/* Background texture at low opacity */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{ backgroundImage: "url(/assets/bg/landing-hero.png)", backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
        {/* Text */}
        <div>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
          {subtitle && (
            <p className="mt-2 max-w-lg text-sm text-black/70">{subtitle}</p>
          )}
          {body && (
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-black/60 sm:text-base">{body}</p>
          )}
          {bullets && bullets.length > 0 && (
            <ul className="mt-4 space-y-2">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-black/60">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--terracotta)]" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Phone — hidden on small screens */}
        <div className="hidden md:block lg:justify-self-end">
          <PhoneDemo demo={demo} videoObjectFit={isLandscapeHero ? "contain" : "cover"} />
        </div>
      </div>
    </div>
  );
}
