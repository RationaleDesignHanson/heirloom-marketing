import type { PageSection } from "@/content/content";
import Section from "./Section";
import Steps from "./Steps";
import FeatureGrid from "./FeatureGrid";
import FAQ from "./FAQ";
import TrustBar from "./TrustBar";
import PageCTA from "./PageCTA";
import TestimonialStrip from "./TestimonialStrip";

export function renderSection(section: PageSection) {
  switch (section.kind) {
    case "steps":
      return (
        <Section id={section.id}>
          <Steps title={section.title} items={section.items} />
        </Section>
      );

    case "featureGrid":
      return (
        <Section id={section.id}>
          <FeatureGrid title={section.title} items={section.items} columns={section.columns ?? 3} />
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

    case "cta":
      return (
        <Section id={section.id}>
          <PageCTA title={section.title} body={section.body} cta={section.cta} />
        </Section>
      );

    default: {
      const _exhaustive: never = section;
      return _exhaustive;
    }
  }
}
