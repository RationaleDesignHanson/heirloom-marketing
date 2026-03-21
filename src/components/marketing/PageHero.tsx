import CTAButton from "./CTAButton";
import AppStoreBadge from "./AppStoreBadge";
import PhoneDemo from "./PhoneDemo";
import ConversionHub from "./ConversionHub";
import AnalogHero from "./AnalogHero";
import EmailCapture from "./EmailCapture";
import { urls } from "@/content/content";

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
    visual?: "phone" | "diagram" | "analog";
  };
}) {
  const isDiagram = hero.visual === "diagram";
  const isAnalog = hero.visual === "analog";

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl py-10 sm:py-12">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-[var(--cream)] via-white to-[var(--terracotta)] p-6 shadow-sm sm:p-8 lg:p-10">
          {/* AI-generated warm kitchen background — soft overlay */}
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.08]"
            style={{ backgroundImage: "url(/assets/bg/landing-hero.png)" }}
          />
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--tomato)]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-black/5 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
            {/* Copy block — wider column so headlines fit in 2–3 lines */}
            <div className="min-w-0">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70 shadow-sm backdrop-blur">
                {isDiagram
                  ? "Multiple import methods. One Recipe Box."
                  : isAnalog
                  ? "Before they're gone forever."
                  : "One tap. Private by default."}
              </div>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl lg:text-[2.75rem] lg:leading-tight">
                {hero.h1}
              </h1>
              <p className="mt-4 max-w-xl text-base text-black/70 sm:text-lg">
                {hero.subhead}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                {hero.primaryCta.href.includes("apps.apple.com") ? (
                  <AppStoreBadge
                    href={hero.primaryCta.href}
                    eventProps={{ location: "hero" }}
                  />
                ) : (
                  <CTAButton
                    href={hero.primaryCta.href}
                    label={hero.primaryCta.label}
                    eventProps={{ location: "hero" }}
                    className="w-full sm:w-auto"
                  />
                )}
                {hero.secondaryCta && (
                  <CTAButton
                    href={hero.secondaryCta.href}
                    label={hero.secondaryCta.label}
                    variant="secondary"
                    eventProps={{ location: "hero" }}
                    className="w-full sm:w-auto"
                  />
                )}
              </div>

              {hero.emailCapture && urls.appStore === "#" && (
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

            {/* Visual — right column, hidden on small screens */}
            <div className="hidden md:block lg:justify-self-end">
              {isDiagram ? (
                <ConversionHub />
              ) : isAnalog ? (
                <AnalogHero />
              ) : (
                <PhoneDemo
                  demo={hero.demo}
                  videoObjectFit={hero.demo.video.includes("16x9") ? "contain" : "cover"}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
