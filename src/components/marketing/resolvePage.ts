import type { MarketingPage } from "@/content/content";

export function resolvePage(page: MarketingPage, v?: string): MarketingPage {
  if (!v || !page.variants || !page.variants[v]) return page;

  const patch = page.variants[v];

  return {
    ...page,
    hero: {
      ...page.hero,
      ...(patch.hero ?? {}),
      demo: patch.hero?.demo ? patch.hero.demo : page.hero.demo,
      primaryCta: patch.hero?.primaryCta ? patch.hero.primaryCta : page.hero.primaryCta,
      secondaryCta: patch.hero?.secondaryCta ? patch.hero.secondaryCta : page.hero.secondaryCta,
    },
    sections: patch.sections ?? page.sections,
  };
}
