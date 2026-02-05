import type { PageSection } from "@/content/content";
import Section from "./Section";
import Steps from "./Steps";
import ProblemSolution from "./ProblemSolution";
import FeatureGrid from "./FeatureGrid";
import FAQ from "./FAQ";
import TrustBar from "./TrustBar";
import PageCTA from "./PageCTA";
import TestimonialStrip from "./TestimonialStrip";
import SocialProof from "./SocialProof";
import PricingCredits from "./PricingCredits";

export function renderSection(section: PageSection) {
  switch (section.kind) {
    case "steps":
      return (
        <Section id={section.id}>
          <Steps title={section.title} items={section.items} />
        </Section>
      );

    case "problemSolution":
      return (
        <Section id={section.id}>
          <ProblemSolution
            title={section.title}
            problem={section.problem}
            solution={section.solution}
          />
        </Section>
      );

    case "featureGrid":
      return (
        <Section id={section.id}>
          <FeatureGrid title={section.title} items={section.items} columns={section.columns ?? 3} />
        </Section>
      );

    case "socialProof":
      return (
        <Section id={section.id}>
          <SocialProof
            title={section.title}
            ratingLabel={section.ratingLabel}
            items={section.items}
          />
        </Section>
      );

    case "testimonials":
      return (
        <Section id={section.id}>
          <TestimonialStrip title={section.title} items={section.items} />
        </Section>
      );

    case "trustBar":
      return (
        <Section id={section.id}>
          <TrustBar items={section.items} />
        </Section>
      );

    case "faq":
      return (
        <Section id={section.id}>
          <FAQ title={section.title} items={section.items} />
        </Section>
      );

    case "pricingCredits":
      return (
        <Section id={section.id}>
          <PricingCredits
            title={section.title}
            subtitle={section.subtitle}
            dailyCredits={section.dailyCredits}
            creditExamples={section.creditExamples}
            plans={section.plans}
          />
        </Section>
      );

    case "cta":
      return (
        <Section id={section.id}>
          <PageCTA
            title={section.title}
            body={section.body}
            cta={section.cta}
            emailCapture={section.emailCapture}
          />
        </Section>
      );

    default: {
      const _exhaustive: never = section;
      return _exhaustive;
    }
  }
}
