import CTAButton from "./CTAButton";
import PhoneDemo from "./PhoneDemo";
import ConversionHub from "./ConversionHub";
import EmailCapture from "./EmailCapture";

export default function PageHero({
  hero,
}: {
  hero: {
    h1: string;
    subhead: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    emailCapture?: { formName: string; placeholder?: string; buttonLabel?: string };
    trustLine?: string;
    demo: { video: string; poster: string; alt: string; aspect: "16:9" | "9:16" };
    visual?: "phone" | "diagram";
  };
}) {
  const isDiagram = hero.visual === "diagram";

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl py-10 sm:py-12">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-[var(--cream)] via-white to-[var(--terracotta)] p-8 shadow-sm sm:p-10">
          {/* AI-generated warm kitchen background — soft overlay */}
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.08]"
            style={{ backgroundImage: "url(/assets/bg/landing-hero.png)" }}
          />
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--tomato)]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-black/5 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            {/* Copy block — always left-aligned */}
            <div>
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70 shadow-sm backdrop-blur">
                {isDiagram ? "Multiple import methods. One Recipe Box." : "One tap. Private by default."}
              </div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                {hero.h1}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-black/70">
                {hero.subhead}
              </p>

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

              {hero.emailCapture && (
                <div className="mt-6">
                  <EmailCapture
                    formName={hero.emailCapture.formName}
                    placeholder={hero.emailCapture.placeholder}
                    buttonLabel={hero.emailCapture.buttonLabel}
                  />
                </div>
              )}

              {hero.trustLine && <p className="mt-5 text-sm text-black/60">{hero.trustLine}</p>}
            </div>

            {/* Visual — right column */}
            <div className="lg:justify-self-end">
              {isDiagram ? (
                <ConversionHub />
              ) : (
                <PhoneDemo demo={hero.demo} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
