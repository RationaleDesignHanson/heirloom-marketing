import CTAButton from "./CTAButton";
import { urls } from "@/content/content";

export default function PricingCredits({
  title,
  subtitle,
  dailyCredits,
  creditExamples,
  plans,
}: {
  title: string;
  subtitle?: string;
  dailyCredits: number;
  creditExamples: { label: string; cost: number; note?: string }[];
  plans: {
    title: string;
    price: string;
    trial?: string;
    highlight?: boolean;
    bullets: string[];
  }[];
}) {
  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-sm text-black/70">{subtitle}</p>}
        </div>
        <div className="text-sm text-black/70">
          Daily credits: <span className="font-semibold text-black">{dailyCredits}</span>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur lg:col-span-1">
          <div className="text-sm font-semibold">Credits (pay-per-use)</div>
          <p className="mt-2 text-sm text-black/70">
            Use daily credits for imports. Power users can subscribe or purchase credits in-app.
          </p>
          <div className="mt-4 space-y-2 text-sm text-black/70">
            {creditExamples.map((ex) => (
              <div key={ex.label} className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-black/80">{ex.label}</div>
                  {ex.note && <div className="text-xs text-black/50">{ex.note}</div>}
                </div>
                <div className="shrink-0 rounded-full border border-black/10 bg-[#FBF7EF] px-2 py-0.5 text-xs text-black/70">
                  {ex.cost} credit{ex.cost === 1 ? "" : "s"}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:col-span-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-2xl border p-6 shadow-sm ${
                plan.highlight
                  ? "border-black/20 bg-white"
                  : "border-black/10 bg-white/80 backdrop-blur"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold">{plan.title}</div>
                {plan.trial && (
                  <div className="rounded-full border border-black/10 bg-[#FBF7EF] px-2 py-0.5 text-xs text-black/70">
                    {plan.trial}
                  </div>
                )}
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">{plan.price}</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/70">
                {plan.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="mt-5">
                <CTAButton
                  href={urls.appStore}
                  label="Get Heirloom"
                  variant={plan.highlight ? "primary" : "secondary"}
                  eventProps={{ location: "pricing" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

