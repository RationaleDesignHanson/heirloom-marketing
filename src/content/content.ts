export type FAQItem = { q: string; a: string };
export type FeatureItem = { title: string; body: string; icon?: string };
export type StepItem = { title: string; body?: string };
export type Hero = {
  h1: string;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustLine?: string;
  demo: { video: string; poster: string; alt: string; aspect: "16:9" | "9:16" };
};

export type PageSection =
  | { kind: "steps"; id: string; title: string; items: StepItem[] }
  | {
      kind: "featureGrid";
      id: string;
      title: string;
      items: FeatureItem[];
      columns?: 3 | 4;
    }
  | {
      kind: "testimonials";
      id: string;
      title: string;
      items: { quote: string; name?: string }[];
    }
  | { kind: "faq"; id: string; title: string; items: FAQItem[] }
  | {
      kind: "cta";
      id: string;
      title: string;
      body?: string;
      cta: { label: string; href: string };
    }
  | { kind: "trustBar"; id: string; items: string[] };

export type MarketingPage = {
  meta: { title: string; description: string };
  nav: { label: string; href: string }[];
  hero: Hero;
  sections: PageSection[];
  variants?: Record<
    string,
    Partial<{
      hero: Partial<Hero>;
      sections: PageSection[];
    }>
  >;
};

export const brand = {
  productNameFull: "Heirloom Recipe Box",
  productNameShort: "Heirloom",
  appStoreTitle: "Heirloom: Recipe Box",
  appStoreSubtitle: "Save & share recipes in one tap",
};

export const urls = {
  appStore: "#",
  download: "#download",
  share: "/share",
  discover: "/discover",
  premium: "/premium",
  privacy: "/privacy",
  terms: "/terms",
};

const sharedNav = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Share", href: urls.share },
  { label: "Discover", href: urls.discover },
  { label: "Premium", href: urls.premium },
  { label: "Privacy", href: urls.privacy },
];

const sharedFAQs: FAQItem[] = [
  {
    q: "Does it work from the Share Sheet?",
    a: "Yes—saving from the Share Sheet is the core of Heirloom Recipe Box.",
  },
  {
    q: "Are my recipes public?",
    a: "No. Your Recipe Box is private by default. Sharing and publishing are optional.",
  },
  {
    q: "Can I share recipes with friends?",
    a: "Yes—send recipes directly, and they can tap to accept into their Recipe Box.",
  },
];

export const pages: Record<
  "home" | "share" | "discover" | "premium" | "privacy" | "terms",
  MarketingPage
> = {
  home: {
    meta: {
      title: "Heirloom Recipe Box — Save recipes in one tap",
      description:
        "Save recipes from anywhere in one tap. Turn links, PDFs, and videos into clean recipes you'll actually cook.",
    },
    nav: sharedNav,
    hero: {
      h1: "Save recipes from anywhere in one tap",
      subhead:
        "Heirloom Recipe Box turns links, PDFs, and videos into clean recipes you'll actually cook.",
      primaryCta: { label: "Get Heirloom Recipe Box", href: urls.appStore },
      secondaryCta: { label: "See how it works", href: "#how-it-works" },
      trustLine: "Private by default — Share only when you choose",
      demo: {
        video: "/assets/video/lp1-save-hero-16x9.mp4",
        poster: "/assets/posters/lp1-save-hero.jpg",
        alt: "Saving a recipe to Heirloom Recipe Box from the share sheet",
        aspect: "16:9",
      },
    },
    variants: {
      b: {
        hero: {
          h1: "Your Recipe Box, finally",
          subhead:
            "Save from links, PDFs, and videos—then cook from clean recipes you'll actually use.",
        },
      },
    },
    sections: [
      {
        kind: "steps",
        id: "how-it-works",
        title: "The fastest way to save recipes",
        items: [
          { title: "Tap Share", body: "On a recipe anywhere—web, PDF, or video." },
          { title: "Save to Heirloom", body: 'Choose "Save to Heirloom Recipe Box".' },
          { title: "Cook from a clean recipe", body: "Ingredients and steps, ready to go." },
        ],
      },
      {
        kind: "featureGrid",
        id: "sources",
        title: "Save recipes from the internet you already use",
        columns: 3,
        items: [
          { title: "From the web", body: "Articles, blogs, newsletters—save and move on." },
          {
            title: "From PDFs",
            body: "Cookbooks, printables, family recipes—clean and readable.",
          },
          { title: "From videos", body: "Keep the recipe, not the scrolling." },
        ],
      },
      { kind: "faq", id: "faq", title: "FAQ", items: sharedFAQs },
      {
        kind: "cta",
        id: "download",
        title: "Start your Recipe Box today",
        cta: { label: "Get Heirloom Recipe Box", href: urls.appStore },
      },
    ],
  },

  share: {
    meta: {
      title: "Share recipes — Heirloom Recipe Box",
      description:
        "Build your recipe box together. Share recipes with friends you trust—tap to accept into their Recipe Box instantly.",
    },
    nav: sharedNav.map((x) =>
      x.label === "How it works"
        ? { label: "How sharing works", href: "/share#how-sharing-works" }
        : x,
    ),
    hero: {
      h1: "Build your recipe box together",
      subhead:
        "Share recipes with friends you trust—tap to accept into their Recipe Box instantly.",
      primaryCta: { label: "Start sharing", href: urls.appStore },
      secondaryCta: { label: "See the accept moment", href: "#how-sharing-works" },
      trustLine: "Private by default — Sharing is always intentional",
      demo: {
        video: "/assets/video/lp2-share-hero-16x9.mp4",
        poster: "/assets/posters/lp2-share-hero.jpg",
        alt: "Sharing a recipe and accepting it into a Recipe Box",
        aspect: "16:9",
      },
    },
    sections: [
      {
        kind: "steps",
        id: "how-sharing-works",
        title: "Sharing that actually lands",
        items: [
          { title: "You send a recipe", body: "Share directly from a recipe in your box." },
          { title: "They get notified", body: "A simple nudge—no chasing links." },
          {
            title: "They tap Accept",
            body: "It's added to their Recipe Box instantly.",
          },
        ],
      },
      { kind: "faq", id: "faq", title: "FAQ", items: sharedFAQs },
      {
        kind: "cta",
        id: "download",
        title: "Make recipe sharing feel easy again",
        cta: { label: "Start sharing with Heirloom", href: urls.appStore },
      },
    ],
  },

  discover: {
    meta: {
      title: "Discover recipes — Heirloom Recipe Box",
      description:
        "Discover recipes from people you trust. Browse community recipes, save favorites, and publish your best—with credit.",
    },
    nav: sharedNav.map((x) =>
      x.label === "How it works" ? { label: "Discover", href: "/discover#discover" } : x,
    ),
    hero: {
      h1: "Discover recipes from people you trust",
      subhead: "Browse community recipes, save favorites, and publish your best—with credit.",
      primaryCta: { label: "Explore recipes", href: urls.appStore },
      secondaryCta: { label: "Publish your first recipe", href: "#publish" },
      trustLine: "Publish only what you want — Keep the rest private",
      demo: {
        video: "/assets/video/lp3-discover-hero-16x9.mp4",
        poster: "/assets/posters/lp3-discover-hero.jpg",
        alt: "Browsing community recipes and saving to a Recipe Box",
        aspect: "16:9",
      },
    },
    sections: [
      {
        kind: "featureGrid",
        id: "discover",
        title: "Find go-to recipes fast",
        columns: 3,
        items: [
          {
            title: "Browse community favorites",
            body: "A feed designed for saving, not doomscrolling.",
          },
          { title: "Save in one tap", body: "Add great recipes straight to your Recipe Box." },
          { title: "Cook what you save", body: "Build a box you'll actually use." },
        ],
      },
      {
        kind: "trustBar",
        id: "control",
        items: ["Private by default", "Sharing is intentional", "Publishing is optional"],
      },
      {
        kind: "cta",
        id: "download",
        title: "Build a Recipe Box you trust",
        cta: { label: "Get Heirloom Recipe Box", href: urls.appStore },
      },
    ],
  },

  premium: {
    meta: {
      title: "Premium — Heirloom Recipe Box",
      description:
        "Unlock Video Import, Cookbook Scan, Cloud Sync, and more with Heirloom Recipe Box Premium.",
    },
    nav: sharedNav,
    hero: {
      h1: "Premium that saves you time",
      subhead:
        "Unlock Video Import, Cookbook Scan, Cloud Sync, and more. Start with a trial and pick a plan that fits.",
      primaryCta: { label: "Start Premium trial", href: urls.appStore },
      secondaryCta: { label: "See plans", href: "#plans" },
      trustLine: "Cancel anytime before your trial ends",
      demo: {
        video: "/assets/video/ad-15s-premium-9x16.mp4",
        poster: "/assets/posters/lp1-save-hero.jpg",
        alt: "Premium features: video import and cookbook scan",
        aspect: "9:16",
      },
    },
    sections: [
      {
        kind: "featureGrid",
        id: "features",
        title: "What you unlock",
        columns: 3,
        items: [
          {
            title: "Video Import",
            body: "Save recipes from video and turn them into clean steps.",
          },
          {
            title: "Cookbook Scan",
            body: "Turn cookbook pages into recipes you can actually use.",
          },
          { title: "Cloud Sync", body: "Keep your Recipe Box everywhere you need it." },
        ],
      },
      {
        kind: "cta",
        id: "download",
        title: "Start your Premium trial",
        cta: { label: "Start Premium trial", href: urls.appStore },
      },
    ],
  },

  privacy: {
    meta: {
      title: "Privacy — Heirloom Recipe Box",
      description: "Privacy information for Heirloom Recipe Box.",
    },
    nav: sharedNav,
    hero: {
      h1: "Privacy",
      subhead: "Heirloom Recipe Box is private by default. Share and publish only when you choose.",
      primaryCta: { label: "Get Heirloom Recipe Box", href: urls.appStore },
      demo: {
        video: "/assets/video/lp1-save-hero-16x9.mp4",
        poster: "/assets/posters/lp1-save-hero.jpg",
        alt: "Heirloom Recipe Box privacy",
        aspect: "16:9",
      },
    },
    sections: [
      {
        kind: "cta",
        id: "download",
        title: "Ready to start?",
        cta: { label: "Get Heirloom Recipe Box", href: urls.appStore },
      },
    ],
  },

  terms: {
    meta: {
      title: "Terms — Heirloom Recipe Box",
      description: "Terms of service for Heirloom Recipe Box.",
    },
    nav: sharedNav,
    hero: {
      h1: "Terms",
      subhead: "Simple terms to support a calm, trustworthy Recipe Box experience.",
      primaryCta: { label: "Get Heirloom Recipe Box", href: urls.appStore },
      demo: {
        video: "/assets/video/lp1-save-hero-16x9.mp4",
        poster: "/assets/posters/lp1-save-hero.jpg",
        alt: "Heirloom Recipe Box terms",
        aspect: "16:9",
      },
    },
    sections: [
      {
        kind: "cta",
        id: "download",
        title: "Start cooking from your Recipe Box",
        cta: { label: "Get Heirloom Recipe Box", href: urls.appStore },
      },
    ],
  },
};
