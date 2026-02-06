export type FAQItem = { q: string; a: string };
export type FeatureItem = { title: string; body: string; icon?: string };
export type StepItem = { title: string; body?: string };
export type Hero = {
  h1: string;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  emailCapture?: { formName: string; placeholder?: string; buttonLabel?: string };
  trustLine?: string;
  demo: { video: string; poster: string; alt: string; aspect: "16:9" | "9:16" };
};

export type PageSection =
  | { kind: "steps"; id: string; title: string; items: StepItem[] }
  | {
      kind: "problemSolution";
      id: string;
      title: string;
      problem: { title: string; body: string; bullets?: string[] };
      solution: { title: string; body: string; bullets?: string[] };
    }
  | {
      kind: "featureGrid";
      id: string;
      title: string;
      items: FeatureItem[];
      columns?: 3 | 4;
    }
  | {
      kind: "socialProof";
      id: string;
      title: string;
      ratingLabel?: string;
      items: { quote: string; name?: string }[];
    }
  | {
      kind: "testimonials";
      id: string;
      title: string;
      items: { quote: string; name?: string }[];
    }
  | {
      kind: "pricingCredits";
      id: string;
      title: string;
      subtitle?: string;
      trialCreditsIncluded?: number;
      premiumMonthlyCredits?: number;
      creditExamples: { label: string; cost: number; note?: string }[];
      plans: {
        title: string;
        price: string;
        trial?: string;
        highlight?: boolean;
        bullets: string[];
      }[];
    }
  | { kind: "faq"; id: string; title: string; items: FAQItem[] }
  | {
      kind: "cta";
      id: string;
      title: string;
      body?: string;
      cta: { label: string; href: string };
      emailCapture?: { formName: string; placeholder?: string; buttonLabel?: string };
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
  lpVideo: "/lp/video",
  lpScan: "/lp/scan",
  lpGenerate: "/lp/generate",
  lpShare: "/lp/share",
  support: "/support",
  community: "/community",
  presskit: "/presskit",
  privacy: "/privacy",
  terms: "/terms",
};

const sharedNav = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Video", href: urls.lpVideo },
  { label: "Scan", href: urls.lpScan },
  { label: "Generate", href: urls.lpGenerate },
  { label: "Share", href: urls.lpShare },
  { label: "Support", href: urls.support },
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
  {
    q: "How do credits and Premium work?",
    a: "Some imports use credits. Your trial starts with 50 credits, and Premium includes 100 credits/month. You can also buy credit packs when you need a burst.",
  },
  {
    q: "Is saving from websites free?",
    a: "Yes. Save from Safari with one tap using the Share Sheet. Premium unlocks advanced imports and extras like cookbook scanning and cloud sync.",
  },
];

const sharedPricingSection: PageSection = {
  kind: "pricingCredits",
  id: "pricing",
  title: "Free to start. Upgrade when you’re ready.",
  subtitle:
    "Your trial starts with 50 credits. Premium includes 100 credits/month — and you can buy more any time.",
  trialCreditsIncluded: 50,
  premiumMonthlyCredits: 100,
  creditExamples: [
    { label: "Text-rich PDF import", cost: 1, note: "Fast processing" },
    { label: "Scanned PDF import", cost: 5, note: "Vision OCR" },
    { label: "Video import (audio)", cost: 1, note: "On-device transcription" },
    { label: "Video import (ASMR)", cost: 5, note: "Vision-based extraction" },
  ],
  plans: [
    {
      title: "Monthly",
      price: "$4.99 / month",
      trial: "7-day trial",
      bullets: ["Cookbook scan + sync", "Cancel anytime", "Best for short bursts"],
    },
    {
      title: "Annual",
      price: "$29.99 / year",
      trial: "14-day trial",
      highlight: true,
      bullets: ["Cookbook scan + sync", "Best value", "Cancel anytime"],
    },
    {
      title: "Lifetime",
      price: "$99 once",
      bullets: ["Cookbook scan + sync", "No subscription", "Founding member"],
    },
  ],
};

const sharedProblemSolution: PageSection = {
  kind: "problemSolution",
  id: "problem-solution",
  title: "Stop losing recipes to bookmarks",
  problem: {
    title: "The problem",
    body: "Recipes end up scattered across Safari tabs, Notes, screenshots, and saved videos.",
    bullets: ["You can’t find what you saved", "Copy/paste breaks your flow", "Sharing becomes link-chasing"],
  },
  solution: {
    title: "The Heirloom way",
    body: "One tap from wherever you find recipes—then cook from clean, structured cards.",
    bullets: ["Share → Heirloom", "Imports in the background", "Private by default"],
  },
};

const sharedSocialProof: PageSection = {
  kind: "socialProof",
  id: "social-proof",
  title: "Made for calm cooking",
  ratingLabel: "Add App Store ratings and testimonials when ready.",
  items: [],
};

export const pages: Record<
  "home" | "lpVideo" | "lpScan" | "lpGenerate" | "lpShare" | "community" | "presskit",
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
      emailCapture: { formName: "notify", placeholder: "you@domain.com", buttonLabel: "Notify me" },
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
      sharedProblemSolution,
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
      sharedSocialProof,
      sharedPricingSection,
      { kind: "faq", id: "faq", title: "FAQ", items: sharedFAQs },
      {
        kind: "cta",
        id: "download",
        title: "Start your Recipe Box today",
        body: "Want launch updates? Join the list.",
        cta: { label: "Get Heirloom Recipe Box", href: urls.appStore },
        emailCapture: { formName: "notify", placeholder: "you@domain.com", buttonLabel: "Notify me" },
      },
    ],
  },

  lpVideo: {
    meta: {
      title: "Turn cooking videos into recipes — Heirloom Recipe Box",
      description:
        "TikTok, Instagram, YouTube—extract any recipe in seconds and keep it organized in your Recipe Box.",
    },
    nav: sharedNav,
    hero: {
      h1: "Turn cooking videos into recipes",
      subhead:
        "TikTok, Instagram, YouTube—extract any recipe in seconds and keep it organized.",
      primaryCta: { label: "Download on the App Store", href: urls.appStore },
      secondaryCta: { label: "See how it works", href: "#how-it-works" },
      trustLine: "Private by default — Share only when you choose",
      demo: {
        video: "/assets/video/lp1-save-hero-16x9.mp4",
        poster: "/assets/posters/lp1-save-hero.jpg",
        alt: "Turning a cooking video into a recipe in Heirloom Recipe Box",
        aspect: "16:9",
      },
    },
    sections: [
      sharedProblemSolution,
      {
        kind: "steps",
        id: "how-it-works",
        title: "From video to recipe card",
        items: [
          { title: "Save a cooking video", body: "From TikTok, Instagram, YouTube, and more." },
          { title: "Share to Heirloom", body: 'From your camera roll, tap Share → "Heirloom".' },
          { title: "Cook from clean steps", body: "Ingredients and instructions, ready to use." },
        ],
      },
      {
        kind: "featureGrid",
        id: "features",
        title: "Built for video recipes",
        columns: 3,
        items: [
          { title: "Works across platforms", body: "TikTok, Instagram, YouTube—save what you find." },
          { title: "No copy/paste", body: "Keep browsing while the import runs in the background." },
          { title: "Organized automatically", body: "A Recipe Box you’ll actually use." },
        ],
      },
      sharedPricingSection,
      { kind: "faq", id: "faq", title: "FAQ", items: sharedFAQs },
      {
        kind: "cta",
        id: "download",
        title: "Turn your saved videos into a Recipe Box",
        cta: { label: "Download on the App Store", href: urls.appStore },
      },
    ],
  },

  lpScan: {
    meta: {
      title: "Digitize your cookbooks — Heirloom Recipe Box",
      description:
        "Point your camera at any recipe. Turn cookbooks, cards, and handwriting into clean recipes.",
    },
    nav: sharedNav,
    hero: {
      h1: "Digitize your cookbooks",
      subhead: "Point your camera at any recipe. Instant digital copy in your Recipe Box.",
      primaryCta: { label: "Download on the App Store", href: urls.appStore },
      secondaryCta: { label: "See how it works", href: "#how-it-works" },
      trustLine: "Private by default — Share only when you choose",
      demo: {
        video: "/assets/video/lp1-save-hero-16x9.mp4",
        poster: "/assets/posters/lp1-save-hero.jpg",
        alt: "Scanning a cookbook page into Heirloom Recipe Box",
        aspect: "16:9",
      },
    },
    sections: [
      sharedProblemSolution,
      {
        kind: "steps",
        id: "how-it-works",
        title: "From page to recipe card",
        items: [
          { title: "Open your cookbook", body: "Any printed recipe page or card." },
          { title: "Scan with your camera", body: "Heirloom extracts the recipe for you." },
          { title: "Edit and cook", body: "Fix anything fast, then save it forever." },
        ],
      },
      {
        kind: "featureGrid",
        id: "features",
        title: "Perfect for cookbooks and handwriting",
        columns: 3,
        items: [
          { title: "Cookbook pages", body: "Turn printed recipes into clean steps." },
          { title: "Handwritten cards", body: "Capture the recipes you don’t want to lose." },
          { title: "Private by default", body: "Your Recipe Box stays yours." },
        ],
      },
      sharedPricingSection,
      { kind: "faq", id: "faq", title: "FAQ", items: sharedFAQs },
      {
        kind: "cta",
        id: "download",
        title: "Digitize your cookbook shelf",
        cta: { label: "Download on the App Store", href: urls.appStore },
      },
    ],
  },

  lpGenerate: {
    meta: {
      title: "Tell us what you have. Get a recipe. — Heirloom Recipe Box",
      description:
        "Describe ingredients or a craving. Heirloom generates a recipe you can save and cook.",
    },
    nav: sharedNav,
    hero: {
      h1: "Tell us what you have. Get a recipe.",
      subhead: "Describe ingredients or a craving. Get a recipe you’ll actually cook.",
      primaryCta: { label: "Download on the App Store", href: urls.appStore },
      secondaryCta: { label: "See how it works", href: "#how-it-works" },
      trustLine: "Private by default — Your Recipe Box stays yours",
      demo: {
        video: "/assets/video/lp1-save-hero-16x9.mp4",
        poster: "/assets/posters/lp1-save-hero.jpg",
        alt: "Generating a recipe in Heirloom Recipe Box",
        aspect: "16:9",
      },
    },
    sections: [
      sharedProblemSolution,
      {
        kind: "steps",
        id: "how-it-works",
        title: "From idea to recipe card",
        items: [
          { title: "Describe what you want", body: "Ingredients, a cuisine, or a craving." },
          { title: "Heirloom writes a recipe", body: "Ingredients and steps, structured and clear." },
          { title: "Save it to your Recipe Box", body: "Edit, cook, and share when you choose." },
        ],
      },
      sharedPricingSection,
      {
        kind: "cta",
        id: "download",
        title: "Generate your next favorite recipe",
        cta: { label: "Download on the App Store", href: urls.appStore },
      },
    ],
  },

  lpShare: {
    meta: {
      title: "Share recipes that stick — Heirloom Recipe Box",
      description: "Privacy information for Heirloom Recipe Box.",
    },
    nav: sharedNav,
    hero: {
      h1: "Share recipes that stick",
      subhead: "Send recipes to friends and family. They’ll have it forever—organized.",
      primaryCta: { label: "Download on the App Store", href: urls.appStore },
      secondaryCta: { label: "See how it works", href: "#how-it-works" },
      demo: {
        video: "/assets/video/lp2-share-hero-16x9.mp4",
        poster: "/assets/posters/lp2-share-hero.jpg",
        alt: "Sharing a recipe from Heirloom Recipe Box",
        aspect: "16:9",
      },
    },
    sections: [
      sharedProblemSolution,
      {
        kind: "steps",
        id: "how-it-works",
        title: "Sharing that actually lands",
        items: [
          { title: "You send a recipe", body: "Directly from your Recipe Box." },
          { title: "They tap Accept", body: "It’s added instantly—no chasing links." },
          { title: "You both keep it organized", body: "A shared Recipe Box, built over time." },
        ],
      },
      sharedPricingSection,
      { kind: "faq", id: "faq", title: "FAQ", items: sharedFAQs },
      {
        kind: "cta",
        id: "download",
        title: "Make recipe sharing feel easy again",
        cta: { label: "Download on the App Store", href: urls.appStore },
      },
    ],
  },

  community: {
    meta: {
      title: "Community — Heirloom Recipe Box",
      description: "Join the Heirloom community and beta testing group.",
    },
    nav: sharedNav,
    hero: {
      h1: "Join the Heirloom community",
      subhead: "Get updates, share feedback, and swap recipes with other testers.",
      primaryCta: { label: "Join Discord", href: urls.support },
      demo: {
        video: "/assets/video/lp1-save-hero-16x9.mp4",
        poster: "/assets/posters/lp1-save-hero.jpg",
        alt: "Heirloom community",
        aspect: "16:9",
      },
    },
    sections: [
      {
        kind: "featureGrid",
        id: "what-you-get",
        title: "What to expect",
        columns: 3,
        items: [
          { title: "Bug reports", body: "Share steps and screenshots so we can fix fast." },
          { title: "Feature requests", body: "Tell us what would make Heirloom magical for you." },
          { title: "Recipe sharing", body: "Swap recipes and workflows with other cooks." },
        ],
      },
      {
        kind: "cta",
        id: "download",
        title: "Ready to join?",
        cta: { label: "Join Discord", href: urls.support },
      },
    ],
  },

  presskit: {
    meta: {
      title: "Press Kit — Heirloom Recipe Box",
      description: "Press resources for Heirloom Recipe Box.",
    },
    nav: sharedNav,
    hero: {
      h1: "Press Kit",
      subhead: "Logos, screenshots, and product info for press and partners.",
      primaryCta: { label: "Contact", href: "mailto:admin@rationale.work" },
      demo: {
        video: "/assets/video/lp1-save-hero-16x9.mp4",
        poster: "/assets/posters/lp1-save-hero.jpg",
        alt: "Heirloom Recipe Box press kit",
        aspect: "16:9",
      },
    },
    sections: [
      {
        kind: "steps",
        id: "resources",
        title: "What’s included",
        items: [
          { title: "Logos", body: "App icon and wordmark (coming soon)." },
          { title: "Screenshots", body: "High-resolution product shots (coming soon)." },
          { title: "Product summary", body: "Copy-friendly description and key features." },
        ],
      },
      {
        kind: "cta",
        id: "download",
        title: "Need something specific?",
        cta: { label: "Email us", href: "mailto:admin@rationale.work" },
      },
    ],
  },
};
