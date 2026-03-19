import CTAButton from "./CTAButton";
import EmailCapture from "./EmailCapture";
import { urls } from "@/content/content";

export default function PageCTA({
  title,
  body,
  cta,
  emailCapture,
}: {
  title: string;
  body?: string;
  cta: { label: string; href: string };
  emailCapture?: { formName: string; placeholder?: string; buttonLabel?: string };
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          {body && <p className="mt-2 text-sm text-black/70">{body}</p>}
        </div>
        <CTAButton
          href={cta.href}
          label={cta.label}
          eventProps={{ location: "section_cta", sectionTitle: title }}
          className="w-full sm:w-auto shrink-0"
        />
      </div>

      {emailCapture && urls.appStore === "#" && (
        <div className="mt-6">
          <EmailCapture
            formName={emailCapture.formName}
            placeholder={emailCapture.placeholder}
            buttonLabel={emailCapture.buttonLabel}
          />
        </div>
      )}
    </div>
  );
}
