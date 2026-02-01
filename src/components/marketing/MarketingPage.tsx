import type { MarketingPage as MarketingPageType, PageSection } from "@/content/content";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import PageHero from "./PageHero";
import { renderSection } from "./renderSection";

export default function MarketingPage({ page }: { page: MarketingPageType }) {
  return (
    <div className="min-h-screen">
      <HeaderNav
        items={page.nav}
        cta={{ label: page.hero.primaryCta.label, href: page.hero.primaryCta.href }}
      />
      <main>
        <PageHero hero={page.hero} />
        {page.sections.map((section: PageSection) => (
          <div key={section.id}>{renderSection(section)}</div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
