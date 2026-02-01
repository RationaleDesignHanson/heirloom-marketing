import CTAButton from "./CTAButton";
import PhoneDemo from "./PhoneDemo";

export default function PageHero({
  hero,
}: {
  hero: {
    h1: string;
    subhead: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    trustLine?: string;
    demo: { video: string; poster: string; alt: string; aspect: "16:9" | "9:16" };
  };
}) {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 py-14 sm:py-16 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70 shadow-sm">
            Save → Together → Trust
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            {hero.h1}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-black/70">{hero.subhead}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton
              href={hero.primaryCta.href}
              label={hero.primaryCta.label}
              eventProps={{ location: "hero" }}
            />
            {hero.secondaryCta && (
              <CTAButton
                href={hero.secondaryCta.href}
                label={hero.secondaryCta.label}
                variant="secondary"
                eventProps={{ location: "hero" }}
              />
            )}
          </div>

          {hero.trustLine && <p className="mt-5 text-sm text-black/60">{hero.trustLine}</p>}
        </div>

        <div className="lg:justify-self-end">
          <PhoneDemo demo={hero.demo} />
        </div>
      </div>
    </section>
  );
}
