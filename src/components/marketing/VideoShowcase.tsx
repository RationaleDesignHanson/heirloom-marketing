import PhoneDemo from "./PhoneDemo";

export default function VideoShowcase({
  title,
  subtitle,
  demo,
}: {
  title: string;
  subtitle?: string;
  demo: { video: string; poster: string; alt: string; aspect: "16:9" | "9:16" };
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-[var(--cream)] via-white to-[var(--terracotta)]/10 p-8 shadow-sm sm:p-10"
      style={{ backgroundImage: "url(/assets/bg/landing-hero.png)", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle && (
            <p className="mt-2 max-w-lg text-sm text-black/70">{subtitle}</p>
          )}
        </div>

        {/* Phone */}
        <div className="lg:justify-self-end">
          <PhoneDemo demo={demo} />
        </div>
      </div>
    </div>
  );
}
