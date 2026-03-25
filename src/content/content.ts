import { copy } from "./copy";

export type FAQItem = { q: string; a: string };
export type FeatureItem = { title: string; body: string; bodyShort?: string; icon?: string; image?: string; images?: string[]; bullets?: string[]; cardBg?: string; frameStyle?: "phone" | "naked" | "none"; dark?: boolean; infographic?: "capture-methods" | "recipe-lineage" | "share-flow" };
export type StepItem = { title: string; body?: string };
export type TechPillarItem = { title: string; body: string; detail?: string; icon?: string };
export type ComparisonRowItem = {
  feature: string;
  heirloom: boolean | string;
  paprika?: boolean | string;
  recime?: boolean | string;
  /** Legacy fallback when paprika/recime are not set */
  others?: boolean | string;
};
export type TeamMemberItem = { name: string; role: string; bio: string; skills?: string[] };
export type MetricItem = { value: string; label: string };
export type Hero = {
  h1: string;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  emailCapture?: { formName: string; placeholder?: string; buttonLabel?: string };
  trustLine?: string;
  /** Optional top pill; when set, replaces the default chip for this hero layout */
  chip?: string;
  demo: { video: string; poster: string; alt: string; aspect: "16:9" | "9:16" };
  visual?: "phone" | "diagram" | "analog";
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
      layout?: "grid" | "showcase";
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
  | { kind: "trustBar"; id: string; items: string[] }
  | { kind: "techShowcase"; id: string; title: string; subtitle?: string; items: TechPillarItem[] }
  | { kind: "comparisonTable"; id: string; title: string; subtitle?: string; rows: ComparisonRowItem[] }
  | { kind: "teamSection"; id: string; title: string; subtitle?: string; members: TeamMemberItem[] }
  | { kind: "metricsBar"; id: string; items: MetricItem[] }
  | { kind: "videoShowcase"; id: string; title: string; subtitle?: string; body?: string; bullets?: string[]; demo: { video: string; poster: string; alt: string; aspect: "16:9" | "9:16" } };

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
  appStore: "https://apps.apple.com/app/heirloom-recipe-box/id6759019723",
  download: "#download",
  howItWorks: "/how-it-works",
  lpVideo: "/lp/video",
  lpScan: "/lp/scan",
  lpGenerate: "/lp/generate",
  lpPdf: "/lp/pdf",
  lpShare: "/lp/share",
  discovery: "/discovery",
  about: "/about",
  technology: "/technology",
  support: "https://discord.gg/tfrMzefJFj",
  community: "/community",
  presskit: "/presskit",
  privacy: "/privacy",
  terms: "/terms",
};

/** App Store CTAs — use instead of repeating label + href */
export const primaryAppCta = { label: copy.ctaPrimary, href: urls.appStore };
export const storeDownloadCta = { label: copy.ctaStoreDownload, href: urls.appStore };

const sharedNav = [
  { label: "How it works", href: urls.howItWorks },
  { label: "Video", href: urls.lpVideo },
  { label: "Scan", href: urls.lpScan },
  { label: "Generate", href: urls.lpGenerate },
  { label: "Kitchen Table", href: "/kitchen-table" },
  { label: "Discover", href: urls.discovery },
  { label: "Technology", href: urls.technology },
  { label: "About", href: urls.about },
];

export const sharedFAQs: FAQItem[] = [
  {
    q: "Does it work from the Share Sheet?",
    a: "Yes. Share Sheet → Heirloom is the main way to save.",
  },
  {
    q: "Are my recipes public?",
    a: "No. Private by default. Sharing and publishing are optional.",
  },
  {
    q: "Can I share recipes with friends?",
    a: "Yes. They tap Accept and it lands in their Recipe Box.",
  },
  {
    q: "How do credits and Premium work?",
    a: "Trial includes 50 credits. Premium adds 100/month plus cookbook scanning and cloud sync. Credit packs are available when you need more.",
  },
  {
    q: "Is saving from websites free?",
    a: "Yes for Share Sheet saves from Safari. Premium adds scanning, sync, and heavier imports.",
  },
];

const sharedPricingSection: PageSection = {
  kind: "pricingCredits",
  id: "pricing",
  title: "Free to start. Go further with Premium.",
  subtitle: "50 trial credits. Premium: 100/month, cookbook scanning, and cloud sync.",
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
      price: "$6.99 / month",
      trial: "7-day trial",
      bullets: ["Cookbook scan + sync", "Cancel anytime", "Flexible"],
    },
    {
      title: "Annual",
      price: "$39.99 / year",
      trial: "14-day trial",
      highlight: true,
      bullets: ["Cookbook scan + sync", "Save 50% vs monthly", "Cancel anytime"],
    },
    {
      title: "Lifetime",
      price: "$149.99 once",
      bullets: ["Cookbook scan + sync", "No subscription", "Yours forever"],
    },
  ],
};

const sharedProblemSolution: PageSection = {
  kind: "problemSolution",
  id: "problem-solution",
  title: "Recipes scatter. Heirloom gathers them.",
  problem: {
    title: "The problem",
    body: "Tabs, Notes, screenshots, saved videos—recipes get lost in the noise.",
    bullets: ["Hard to find later", "Copy/paste friction", "Links break or disappear"],
  },
  solution: {
    title: "The Heirloom way",
    body: "Share → Heirloom. Clean cards, background imports, private by default.",
    bullets: ["One tap from almost anywhere", "Structured automatically", "Yours until you share"],
  },
};

const sharedProblemSolutionHeritage: PageSection = {
  kind: "problemSolution",
  id: "problem-solution",
  title: "Recipes disappear. Preservation doesn't.",
  problem: {
    title: "The loss",
    body: "Screenshots, feeds, and fading cards—no single place that lasts.",
    bullets: ["Sites and accounts change", "Feeds move on", "Paper doesn't last forever"],
  },
  solution: {
    title: "Preserve with Heirloom",
    body: "One tap from almost any source. Structured, attributed, private until you share.",
    bullets: ["Share → Heirloom", "Background imports", "Private by default"],
  },
};

const sharedSocialProof: PageSection = {
  kind: "socialProof",
  id: "social-proof",
  title: "Made for calm cooking",
  ratingLabel: "Add App Store ratings and testimonials when ready.",
  items: [],
};

const sharedTrustBar: PageSection = {
  kind: "trustBar",
  id: "trust",
  items: [
    copy.statShort,
    "6 import methods",
    "50 free credits — no card required",
    "Private by default",
    "On-device audio processing",
  ],
};

const sharedTechShowcase: PageSection = {
  kind: "techShowcase",
  id: "technology",
  title: "Under the hood",
  subtitle: "Privacy, reliability, and scale—without sacrificing craft.",
  items: [
    {
      title: "Multi-pass AI",
      body: "Right model per task—fast text, strong vision when it matters.",
      detail: "Tiered models plus a 5-pass pipeline for silent cooking videos.",
    },
    {
      title: "Offline-first sync",
      body: "Edit anywhere. Changes merge when you're back online.",
      detail: "CRDT engine with vector clocks and staged conflict resolution.",
    },
    {
      title: "Private by architecture",
      body: "No API keys in the client. Sensitive audio stays on-device.",
      detail: "Gatewayed AI requests, WhisperKit locally, clear consent flows.",
    },
    {
      title: "Recipe provenance",
      body: "Know where a recipe came from—and how it traveled.",
      detail: "Hashes, generation tracking, and attribution across shares.",
    },
  ],
};

const sharedComparisonTable: PageSection = {
  kind: "comparisonTable",
  id: "compare",
  title: "How Heirloom compares",
  subtitle: "Same job, different depth.",
  rows: [
    { feature: "Save from any URL",                        heirloom: true,      paprika: true,      recime: true      },
    { feature: "Video-to-recipe (TikTok, YouTube)",        heirloom: true,      paprika: false,     recime: "Limited" },
    { feature: "Cookbook scanning (camera + PDF)",         heirloom: true,      paprika: false,     recime: false     },
    { feature: "Voice dictation",                          heirloom: true,      paprika: false,     recime: false     },
    { feature: "AI recipe generation",                     heirloom: true,      paprika: false,     recime: "Limited" },
    { feature: "Offline editing with sync",                heirloom: true,      paprika: true,      recime: true      },
    { feature: "Recipe attribution & lineage",             heirloom: true,      paprika: false,     recime: false     },
    { feature: "Private by default",                       heirloom: true,      paprika: true,      recime: "Varies"  },
    { feature: "On-device audio processing",               heirloom: true,      paprika: false,     recime: false     },
    { feature: "Share with accept/consent",                heirloom: true,      paprika: false,     recime: false     },
    { feature: "iOS, Mac, Android, Windows",               heirloom: "iOS",     paprika: "All",     recime: "iOS+Android" },
  ],
};

export const pages: Record<
  | "home"
  | "howItWorks"
  | "lpVideo"
  | "lpScan"
  | "lpPdf"
  | "lpGenerate"
  | "lpShare"
  | "discovery"
  | "community"
  | "presskit"
  | "about"
  | "technology",
  MarketingPage
> = {
  /* ───────────────────────────────────────────────────────
   *  HOME — Heritage / preservation landing page
   * ─────────────────────────────────────────────────────── */
  home: {
    meta: {
      title: copy.metaHomeTitle,
      description: copy.metaHomeDescription,
    },
    nav: sharedNav,
    hero: {
      h1: "Every recipe worth keeping, in one\u00A0place",
      subhead:
        "Heritage—not bookmarks. Capture your family's food culture in one private Recipe Box.",
      primaryCta: primaryAppCta,
      secondaryCta: { label: "Try the demo →", href: "/demo" },
      trustLine: "Private by default — Your recipes stay yours",
      chip: copy.homeHeroChip,
      demo: {
        video: "/assets/video/lp-heritage-hero-16x9.mp4",
        poster: "/assets/posters/lp-heritage-hero.jpg",
        alt: "Preserving family recipes in Heirloom Recipe Box",
        aspect: "9:16",
      },
      visual: "analog",
    },
    sections: [
      {
        kind: "problemSolution",
        id: "the-problem",
        title: copy.statProblemSectionTitle,
        problem: {
          title: "Gone for good",
          body: "No single system of record—so favorites can slip away without you noticing.",
          bullets: [
            "Sites and links rot",
            "Feeds move on",
            "Paper fades or disappears",
          ],
        },
        solution: {
          title: "A real home for food culture",
          body: "Like photos and files, recipes deserve a durable archive. Heirloom is that place—structured, attributed, private until you choose to share.",
          bullets: [
            "One tap from almost any source",
            "Lineage and attribution built in",
            "Private by default",
          ],
        },
      },
      {
        kind: "featureGrid",
        id: "preservation",
        title: "Preservation—not piles of links",
        columns: 3,
        layout: "showcase",
        items: [
          {
            title: "From anywhere. In one tap.",
            body: "Video, cards, URLs, PDFs, voice, or AI—captured into one Recipe Box.",
            bodyShort: "Six capture paths. One home for every recipe.",
            bullets: [
              "Share Sheet from Safari and social apps",
              "Scan cookbooks and handwriting",
              "Video imports—including silent ASMR",
            ],
            image: "/assets/screens/cap_share_action.png",
            infographic: "capture-methods",
          },
          {
            title: "Every recipe carries its history.",
            body: "Source, sharer, and edits—preserved as the recipe moves.",
            bodyShort: "Attribution and lineage, automatic.",
            bullets: [
              "URLs and videos kept with the card",
              "See who shared what",
              "Track how recipes evolve",
            ],
            image: "/assets/screens/cap_gravy_lineage.png",
            infographic: "recipe-lineage",
          },
          {
            title: "Share with intention, not broadcast.",
            body: "Send to people you choose. They accept into their own box—you stay credited.",
            bodyShort: "Person-to-person sharing with credit.",
            bullets: [
              "Kitchen Table or 1:1",
              "Accept flow, not a public feed",
              "Their box, their rules",
            ],
            images: ["/assets/screens/cap_04_shareb.png", "/assets/screens/cap_04_sharec.png"],
            infographic: "share-flow",
          },
        ],
      },
      {
        kind: "steps",
        id: "how-preservation-works",
        title: "Capture. Structure. Preserve.",
        items: [
          { title: "Save from anywhere", body: "Web, video, scan, PDF, voice, or AI—one tap." },
          { title: "AI structures it", body: "Ingredients, steps, and attribution—organized for you." },
          { title: "Yours to keep", body: "Private Recipe Box. Share only when you want." },
        ],
      },
      {
        kind: "featureGrid",
        id: "heritage-features",
        title: "Not a bookmark—a record",
        columns: 4,
        items: [
          {
            title: "Scan your cookbooks",
            body: "Handwritten cards, cookbook pages, clippings—camera in, structured card out.",
            images: ["/assets/screens/cap_scan_camera.png", "/assets/screens/cap_scan_extracted.png", "/assets/screens/cap_03b_share_flow.png"],
            cardBg: "bg-[#FBF6EF]",
            frameStyle: "phone",
          },
          {
            title: "Save cooking videos",
            body: "TikTok, Instagram, YouTube—including silent ASMR. Imports run in the background.",
            image: "/assets/screens/cap_video_import_hd.png",
            cardBg: "bg-[#1C1917]",
            frameStyle: "naked",
            dark: true,
          },
          {
            title: "Dictate from memory",
            body: "Speak it; on-device transcription turns it into a clean card.",
            images: ["/assets/screens/cap_dictate_active.png", "/assets/screens/cap_dictate_result.png"],
            cardBg: "bg-[#F0F4F8]",
            frameStyle: "phone",
          },
          {
            title: "Make it yours",
            body: "Restyle cards—watercolor, woodcut, vintage print.",
            images: ["/assets/screens/cap_recipe_card_restyle_before.png", "/assets/screens/cap_recipe_card_styled.png"],
            cardBg: "bg-[#FEF0EC]",
            frameStyle: "naked",
          },
        ],
      },
      sharedTrustBar,
      sharedPricingSection,
      { kind: "faq", id: "faq", title: "FAQ", items: sharedFAQs },
      {
        kind: "cta",
        id: "download",
        title: "Start preserving your family's recipes",
        cta: primaryAppCta,
      },
    ],
  },

  /* ───────────────────────────────────────────────────────
   *  HOW IT WORKS — The "save from anywhere" functional page
   * ─────────────────────────────────────────────────────── */
  howItWorks: {
    meta: {
      title: "How it works",
      description:
        "Every capture method, one Recipe Box—links, PDFs, video, scan, voice, and AI.",
    },
    nav: sharedNav,
    hero: {
      h1: "Every capture method. One\u00A0preservation\u00A0system.",
      subhead:
        "Screenshots, video, cookbooks, voice—Heirloom pulls them into structured cards.",
      primaryCta: primaryAppCta,
      secondaryCta: { label: "Watch it in action", href: "#demo" },
      trustLine: "Private by default — Share only when you choose",
      visual: "diagram",
      demo: {
        video: "/assets/video/CardCapture.mp4",
        poster: "/assets/posters/card-capture-hero.jpg",
        alt: "Saving a recipe to Heirloom Recipe Box",
        aspect: "9:16",
      },
    },
    sections: [
      {
        kind: "videoShowcase",
        id: "demo",
        title: "See it in action",
        subtitle: "Safari → Share → Heirloom. No copy/paste.",
        body: "Blog, video, or PDF—Share Sheet hands it off; Heirloom structures it in the background.",
        bullets: [
          "Safari, social apps, camera roll",
          "Background imports",
          "Structured ingredients and steps",
          "Private until you share",
        ],
        demo: {
          video: "/assets/video/CardCapture.mp4",
          poster: "/assets/posters/card-capture-hero.jpg",
          alt: "Saving a recipe to Heirloom Recipe Box",
          aspect: "9:16",
        },
      },
      {
        kind: "steps",
        id: "how-it-works",
        title: "The fastest way to save recipes",
        items: [
          { title: "Tap Share", body: "From web, PDF, or video." },
          { title: "Save to Heirloom", body: 'Pick "Save to Heirloom Recipe Box".' },
          { title: "Cook", body: "Ingredients and steps, ready." },
        ],
      },
      {
        kind: "featureGrid",
        id: "sources",
        title: "From wherever recipes live",
        columns: 3,
        items: [
          {
            title: "From the web",
            body: "Articles, blogs, newsletters—save and move on.",
            image: "/assets/screens/cap_share_action.png",
          },
          {
            title: "From PDFs",
            body: "Cookbooks, printables, family recipes—clean and readable.",
            images: ["/assets/screens/cap_scan_camera.png", "/assets/screens/cap_scan_extracted.png"],
          },
          {
            title: "From videos",
            body: "Keep the recipe, not the scrolling.",
            image: "/assets/screens/cap_12_video_result.png",
          },
        ],
      },
      {
        kind: "featureGrid",
        id: "more-ways",
        title: "Even more ways to capture recipes",
        columns: 3,
        items: [
          {
            title: "Read it aloud",
            body: "Dictate a recipe from memory — Heirloom transcribes and structures it.",
            images: ["/assets/screens/cap_dictate_active.png", "/assets/screens/cap_dictate_result.png"],
          },
          {
            title: "Generate with AI",
            body: "Describe ingredients or a craving. Get a recipe you'll actually cook.",
            images: ["/assets/screens/cap_10_gen_read.png", "/assets/screens/cap_10_generate_result.png"],
          },
          {
            title: "Share with family",
            body: "Send recipes to anyone. They tap Accept and it's in their box.",
            image: "/assets/screens/cap_kt_event.png",
          },
        ],
      },
      {
        kind: "techShowcase",
        id: "technology",
        title: "Under the hood",
        items: sharedTechShowcase.items,
      },
      { kind: "faq", id: "faq", title: "FAQ", items: sharedFAQs },
      {
        kind: "cta",
        id: "download",
        title: "Start preserving",
        cta: primaryAppCta,
      },
    ],
  },

  lpVideo: {
    meta: {
      title: "Preserve recipes from cooking videos",
      description:
        "TikTok, Instagram, YouTube—extract cooking videos into lasting recipe cards before feeds change.",
    },
    nav: sharedNav,
    hero: {
      h1: "Those recipes in your saved videos? Give them a home that\u00A0lasts.",
      subhead:
        "Accounts and feeds change. Pull the recipe into Heirloom—structured, searchable, yours.",
      primaryCta: storeDownloadCta,
      secondaryCta: { label: "See how it works", href: "#how-it-works" },
      trustLine: "Private by default — Share only when you choose",
      demo: {
        video: "/assets/video/lp-video-hero-16x9.mp4",
        poster: "/assets/posters/lp-video-hero.jpg",
        alt: "Turning a cooking video into a recipe in Heirloom Recipe Box",
        aspect: "9:16",
      },
    },
    sections: [
      sharedProblemSolutionHeritage,
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
        columns: 4,
        layout: "showcase",
        items: [
          {
            title: "Works across platforms",
            body: "TikTok, Instagram, YouTube—same flow.",
            image: "/assets/screens/cap_12_video_result.png",
          },
          {
            title: "No copy/paste",
            body: "Share to Heirloom; keep scrolling while it imports.",
            image: "/assets/screens/cap_03b_share_flow.png",
          },
          {
            title: "Organized automatically",
            body: "Title, ingredients, steps, attribution—ready to cook.",
            image: "/assets/screens/cap_recipe_detail.png",
          },
          {
            title: "Silent videos too",
            body: "ASMR and no-voice cooks—vision pipeline fills the card.",
            image: "/assets/screens/cap_video_import_hd.png",
          },
        ],
      },
      sharedPricingSection,
      { kind: "faq", id: "faq", title: "FAQ", items: sharedFAQs },
      {
        kind: "cta",
        id: "download",
        title: "Preserve your saved videos",
        cta: storeDownloadCta,
      },
    ],
  },

  lpScan: {
    meta: {
      title: "Preserve handwritten recipe cards",
      description:
        "Scan cards and cookbook pages while they’re still clear—camera to structured recipe in one flow.",
    },
    nav: sharedNav,
    hero: {
      h1: "Grandma's handwriting. Mom's cookbook. The cards in the\u00A0drawer.",
      subhead: "Point the camera; Heirloom turns every line into a structured recipe card you can keep.",
      primaryCta: storeDownloadCta,
      secondaryCta: { label: "See how it works", href: "#how-it-works" },
      trustLine: "Private by default — Share only when you choose",
      demo: {
        video: "/assets/video/lp-scan-hero-16x9.mp4",
        poster: "/assets/posters/lp-scan-hero.jpg",
        alt: "Scanning a recipe into Heirloom Recipe Box",
        aspect: "9:16",
      },
    },
    sections: [
      sharedProblemSolutionHeritage,
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
        layout: "showcase",
        items: [
          {
            title: "Cookbook pages",
            body: "Turn printed recipes into clean steps.",
            images: ["/assets/screens/cap_scan_camera.png", "/assets/screens/cap_scan_extracted.png"],
          },
          {
            title: "Handwritten cards",
            body: "Capture the recipes you don't want to lose.",
            images: ["/assets/screens/cap_gravy_diff.png", "/assets/screens/cap_gravy_lineage.png"],
          },
          {
            title: "Saved forever",
            body: "Private Recipe Box—yours until you choose to share.",
            image: "/assets/screens/cap_recipe_detail.png",
          },
        ],
      },
      sharedPricingSection,
      { kind: "faq", id: "faq", title: "FAQ", items: sharedFAQs },
      {
        kind: "cta",
        id: "download",
        title: "Preserve your cookbooks",
        cta: storeDownloadCta,
      },
    ],
  },

  lpPdf: {
    meta: {
      title: "Preserve PDF recipe collections",
      description:
        "Family printouts and scanned pages—Heirloom pulls recipes into structured cards that last.",
    },
    nav: sharedNav,
    hero: {
      h1: "Family recipe printouts. Scanned cookbook\u00A0pages.",
      subhead: "Drop a PDF; Heirloom extracts recipes into your private Recipe Box.",
      primaryCta: storeDownloadCta,
      secondaryCta: { label: "See how it works", href: "#how-it-works" },
      trustLine: "Private by default — Share only when you choose",
      demo: {
        video: "/assets/video/lp-PDF-hero-16x9.mp4",
        poster: "/assets/posters/lp-pdf-hero.jpg",
        alt: "Importing a recipe from a PDF into Heirloom Recipe Box",
        aspect: "9:16",
      },
    },
    sections: [
      sharedProblemSolutionHeritage,
      {
        kind: "steps",
        id: "how-it-works",
        title: "From PDF to recipe card",
        items: [
          { title: "Open or share a PDF", body: "Any cookbook PDF, printout, or scanned page." },
          { title: "Heirloom extracts the recipe", body: "AI reads the PDF and structures everything." },
          { title: "Cook from clean steps", body: "Ingredients and instructions, ready to use." },
        ],
      },
      {
        kind: "featureGrid",
        id: "features",
        title: "Works with any PDF",
        columns: 3,
        items: [
          {
            title: "Digital cookbooks",
            body: "Import from ebook and PDF cookbooks.",
            images: ["/assets/screens/cap_scan_camera.png", "/assets/screens/cap_scan_extracted.png"],
          },
          {
            title: "Scanned pages",
            body: "Even photographed or scanned recipe pages work.",
            images: ["/assets/screens/cap_gravy_diff.png", "/assets/screens/cap_gravy_lineage.png"],
          },
          {
            title: "Batch-friendly",
            body: "Import multiple recipes from a single PDF.",
            image: "/assets/screens/cap_collection_overview.png",
          },
        ],
      },
      sharedPricingSection,
      { kind: "faq", id: "faq", title: "FAQ", items: sharedFAQs },
      {
        kind: "cta",
        id: "download",
        title: "Preserve your PDF recipes",
        cta: storeDownloadCta,
      },
    ],
  },

  lpGenerate: {
    meta: {
      title: "Generate and preserve recipes",
      description:
        "Describe a dish or what's in the fridge—get a structured recipe you can edit, save, and share.",
    },
    nav: sharedNav,
    hero: {
      h1: "Describe a dish, list what's in the fridge, or recreate a\u00A0memory.",
      subhead: "AI drafts the card; you edit, save, and keep it like any other recipe.",
      primaryCta: storeDownloadCta,
      secondaryCta: { label: "See how it works", href: "#how-it-works" },
      trustLine: "Private by default — Your Recipe Box stays yours",
      demo: {
        video: "/assets/video/lp-generate-hero-16x9.mp4",
        poster: "/assets/posters/lp-generate-hero.jpg",
        alt: "Generating a recipe in Heirloom Recipe Box",
        aspect: "9:16",
      },
    },
    sections: [
      sharedProblemSolutionHeritage,
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
      {
        kind: "featureGrid",
        id: "features",
        title: "AI that actually helps you cook",
        columns: 3,
        items: [
          {
            title: "Describe and generate",
            body: "Tell Heirloom what you have. Get a structured recipe back.",
            images: ["/assets/screens/cap_10_gen_read.png", "/assets/screens/cap_10_generate_result.png"],
          },
          {
            title: "Read it aloud",
            body: "Dictate a recipe from memory and let AI turn it into clean steps.",
            images: ["/assets/screens/cap_dictate_active.png", "/assets/screens/cap_dictate_result.png"],
          },
          {
            title: "Clean recipe card",
            body: "Every generated recipe is structured, editable, and ready to cook.",
            images: ["/assets/screens/cap_recipe_detail.png", "/assets/screens/cap_gravy_lineage.png"],
          },
        ],
      },
      sharedPricingSection,
      {
        kind: "cta",
        id: "download",
        title: "Generate — and preserve — your next recipe",
        cta: storeDownloadCta,
      },
    ],
  },

  lpShare: {
    meta: {
      title: "Kitchen Table — Cook with the people closest to you",
      description:
        "Private space for up to 8 people—share recipes, plan meals, and cook together without a public feed.",
    },
    nav: sharedNav,
    hero: {
      h1: "Cook with the people closest to\u00A0you",
      subhead:
        "Kitchen Table: up to 8 members, shared recipes, meal planning—no algorithms.",
      primaryCta: storeDownloadCta,
      secondaryCta: { label: "See how it works", href: "#how-it-works" },
      demo: {
        video: "/assets/video/lp-kt-hero-9x16.mp4",
        poster: "/assets/posters/lp-kt-hero.jpg",
        alt: "Kitchen Table — shared recipe space in Heirloom Recipe Box",
        aspect: "9:16",
      },
    },
    sections: [
      sharedProblemSolution,
      {
        kind: "steps",
        id: "how-it-works",
        title: "How Kitchen Table works",
        items: [
          { title: "Create or join a Table", body: "Family, friends, supper club — up to 8 members." },
          {
            title: "Share the recipes you choose",
            body: "Not your whole library — just what you want your table to see.",
          },
          {
            title: "Use Table Events",
            body: "Plan meals, suggest dishes from shared recipes, and build a shared shopping list.",
          },
        ],
      },
      {
        kind: "featureGrid",
        id: "kitchen-table-features",
        title: "Your Table. Your rules.",
        columns: 4,
        layout: "showcase",
        items: [
          {
            title: "Your Table, your rules",
            body: "Share only what you want—no feed, no follower count.",
            image: "/assets/screens/cap_kt_members.png",
          },
          {
            title: "Table Events",
            body: "Plan a meal, suggest dishes, auto-build a shared list.",
            image: "/assets/screens/cap_kt_event.png",
          },
          {
            title: "1:1 sharing",
            body: "Send a recipe; they tap Accept into their box.",
            images: ["/assets/screens/cap_04_shareb.png", "/assets/screens/cap_04b_accept.png"],
          },
          {
            title: "Private by default",
            body: "Nothing leaves your box without an explicit share.",
            image: "/assets/screens/cap_05_privacy_pills.png",
          },
        ],
      },
      sharedPricingSection,
      { kind: "faq", id: "faq", title: "FAQ", items: sharedFAQs },
      {
        kind: "cta",
        id: "download",
        title: "Start your Kitchen Table",
        cta: storeDownloadCta,
      },
    ],
  },

  discovery: {
    meta: {
      title: "Recipes that carry culture forward",
      description:
        "Theme Packs—holidays, cuisines, creators. Save with attribution into your own story.",
    },
    nav: sharedNav,
    hero: {
      h1: "Recipes that carry culture\u00A0forward",
      subhead:
        "Curated packs. One tap to save—with credit to the source.",
      primaryCta: storeDownloadCta,
      secondaryCta: { label: "See how it works", href: "#how-it-works" },
      trustLine: "Full attribution. Every recipe tracks its creator.",
      demo: {
        
        video: "/assets/video/lp-discovery-hero-16x9.mp4",
        poster: "/assets/posters/lp-discovery-hero.jpg",
        alt: "Browse Theme Packs in Heirloom Recipe Box",
        aspect: "9:16",
      },
    },
    sections: [
      {
        kind: "steps",
        id: "how-it-works",
        title: "How Discovery works",
        items: [
          { title: "Browse Theme Packs", body: "Seasonal, cultural, creator-curated collections." },
          { title: "Save with one tap", body: "Any recipe goes straight into your Recipe Box." },
          { title: "Full attribution", body: "Every recipe tracks where it came from." },
        ],
      },
      {
        kind: "featureGrid",
        id: "pack-types",
        title: "Theme Packs for every occasion",
        columns: 4,
        items: [
          {
            title: "First-party curated",
            body: "Thanksgiving Classics, Mom's Kitchen, Sourdough Deep Dive — Heirloom selections.",
            image: "/assets/screens/cap_disc_packs.png",
          },
          {
            title: "Creator packs",
            body: "Partner-published collections with full branding and attribution.",
            image: "/assets/screens/cap_disc_pack_detail.png",
          },
          {
            title: "Seasonal & cultural",
            body: "Holiday cookie exchange, West African staples, weeknight Korean.",
            image: "/assets/screens/cap_collection_overview.png",
          },
          {
            title: "Publish your originals",
            body: "You choose what's public—and can pull it back anytime.",
            image: "/assets/screens/cap_04_share.png",
          },
        ],
      },
      sharedPricingSection,
      {
        kind: "cta",
        id: "download",
        title: "Add heritage recipes to your collection",
        cta: primaryAppCta,
      },
    ],
  },

  community: {
    meta: {
      title: "Community",
      description: "Discord for updates, feedback, and early testers.",
    },
    nav: sharedNav,
    hero: {
      h1: "Join the Heirloom\u00A0community",
      subhead: "Updates, bugs, ideas—and recipes—with people building alongside us.",
      primaryCta: { label: "Join Discord", href: urls.support },
      demo: {
        video: "/assets/video/read.mp4",
        poster: "/assets/posters/read-hero.jpg",
        alt: "Cooking from a recipe in Heirloom Recipe Box",
        aspect: "9:16",
      },
    },
    sections: [
      {
        kind: "featureGrid",
        id: "what-you-get",
        title: "What to expect",
        columns: 3,
        items: [
          { title: "Bug reports", body: "Repro steps and screenshots welcome." },
          { title: "Feature requests", body: "Tell us what you need to preserve more." },
          { title: "Recipe sharing", body: "Swap saves and workflows with other cooks." },
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
      title: "Press Kit",
      description: "Logos, screenshots, and product facts for Heirloom Recipe Box.",
    },
    nav: sharedNav,
    hero: {
      h1: "Press Kit",
      subhead: "Logos, shots, and copy-friendly product summary—email for the full kit.",
      primaryCta: { label: "Contact", href: "mailto:admin@rationale.work" },
      demo: {
        video: "/assets/video/lp-COOKBOOK-hero-16x9.mp4",
        poster: "/assets/posters/lp-cookbook-hero.jpg",
        alt: "Importing a cookbook into Heirloom Recipe Box",
        aspect: "9:16",
      },
    },
    sections: [
      {
        kind: "steps",
        id: "resources",
        title: "What’s included",
        items: [
          { title: "Logos", body: "Icon and wordmark; full kit on request." },
          { title: "Screenshots", body: "Hi-res product shots by request." },
          { title: "Product summary", body: "Short description and feature list for editors." },
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

  about: {
    meta: {
      title: "About",
      description:
        "Why we built Heirloom—to keep family food culture from disappearing between generations.",
    },
    nav: sharedNav,
    hero: {
      h1: "Recipes worth\u00A0keeping",
      subhead:
        "Family recipes shouldn't vanish between generations—we're building the archive they deserve.",
      primaryCta: primaryAppCta,
      demo: {
        video: "/assets/video/lp1-save-hero-9x16.mp4",
        poster: "/assets/posters/lp1-save-hero-9x16.jpg",
        alt: "Recipe lineage in Heirloom Recipe Box",
        aspect: "9:16",
      },
    },
    sections: [
      {
        kind: "problemSolution",
        id: "why",
        title: "Why we built Heirloom",
        problem: {
          title: "The loss",
          body: copy.statProblemSectionTitle + ". Most live as screenshots, cards, and memories—scattered and fragile.",
          bullets: [
            "Bookmarks break",
            "Paper fades",
            "Feeds move on",
          ],
        },
        solution: {
          title: "The mission",
          body: "Treat recipes as heritage: preserve, organize, and attribute them in one private system.",
          bullets: [
            "One-tap capture",
            "Lineage you can trust",
            "Share deliberately",
          ],
        },
      },

      {
        kind: "metricsBar",
        id: "metrics",
        items: [
          { value: "6", label: "Recipe import methods" },
          { value: "18+", label: "Months of engineering" },
          { value: "5-pass", label: "AI video pipeline" },
          { value: "0", label: "API keys in client" },
        ],
      },
      sharedTechShowcase,
      {
        kind: "cta",
        id: "download",
        title: "Try Heirloom today",
        body: "50 free credits to start. No subscription required.",
        cta: primaryAppCta,
      },
    ],
  },

  technology: {
    meta: {
      title: "Technology",
      description:
        "Multi-pass AI, offline-first CRDT sync, on-device audio, and provenance you can verify.",
    },
    nav: sharedNav,
    hero: {
      h1: "Built for trust, not\u00A0shortcuts",
      subhead:
        "Serious infrastructure for something personal—your family's recipes.",
      primaryCta: primaryAppCta,
      demo: {
        video: "/assets/video/lp-technology-hero-9x16.mp4",
        poster: "/assets/posters/lp-technology-hero.jpg",
        alt: "Heirloom Recipe Box technology in action",
        aspect: "9:16",
      },
    },
    sections: [
      {
        kind: "techShowcase",
        id: "ai-pipeline",
        title: "Multi-pass AI pipeline",
        subtitle: "Right model per import—cost-aware, not one giant prompt.",
        items: [
          {
            title: "Tiered model selection",
            body: "Eight task types routed to fast text or stronger vision as needed.",
            detail: "Predictable cost: quick models for parsing, premium where quality matters.",
          },
          {
            title: "5-pass video extraction",
            body: "Silent cooks get a watch→validate pipeline, not a single guess.",
            detail: "Identify → detect → infer → analyze → validate.",
          },
          {
            title: "On-device transcription",
            body: "WhisperKit keeps voice capture off the wire.",
            detail: "Device-aware model pick; no API meter for dictation.",
          },
          {
            title: "Structured output",
            body: "Typed JSON to recipe schema—validated before it hits your box.",
            detail: "Tight schemas plus image compression where APIs cap payload size.",
          },
        ],
      },
      {
        kind: "techShowcase",
        id: "sync-engine",
        title: "Offline-first sync engine",
        subtitle: "CRDT merges—not naive last-write-wins.",
        items: [
          {
            title: "Vector clocks",
            body: "Order edits logically across devices.",
            detail: "Concurrent changes surface explicitly instead of silently clobbering.",
          },
          {
            title: "Operation log",
            body: "Immutable ops you can replay for history and recovery.",
            detail: "Creates, edits, ingredient/line changes—each tagged with device context.",
          },
          {
            title: "3-stage merge",
            body: "Most conflicts auto-resolve; edge cases get a clear UI.",
            detail: "Additive merges first, then deletes, then human choice with full context.",
          },
          {
            title: "Security validation",
            body: "Whitelist field paths before CRDT apply.",
            detail: "Blocks odd operations; only recipe-safe fields are mutable.",
          },
        ],
      },
      {
        kind: "techShowcase",
        id: "provenance",
        title: "Cryptographic recipe provenance",
        subtitle: "Lineage you can trace—creator, shares, and source type.",
        items: [
          {
            title: "SHA256 root hash",
            body: "Fingerprint originals; copies inherit the chain.",
            detail: "CryptoKit-backed IDs from timestamp + UUID.",
          },
          {
            title: "Generation tracking",
            body: "See Gen 0 originals vs re-shares down the tree.",
            detail: "A→B→C chains keep attribution visible to everyone involved.",
          },
          {
            title: "Source attribution",
            body: "URL, scan, AI, video—source type never gets lost.",
            detail: "Six source enums plus platform hints on video pulls.",
          },
          {
            title: "Aggregated metrics",
            body: "Shares, cooks, and trending roll up across the tree.",
            detail: "Trending when engagement crosses simple thresholds—refreshed from cloud.",
          },
        ],
      },
      sharedComparisonTable,
      {
        kind: "cta",
        id: "download",
        title: "See it in action",
        body: "50 free credits to try the stack yourself.",
        cta: primaryAppCta,
      },
    ],
  },
};

export { copy };
