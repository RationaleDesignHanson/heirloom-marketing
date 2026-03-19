import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomrecipebox.app";

const routes: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
  { path: "/",              priority: 1.0, changeFrequency: "weekly"  },
  { path: "/how-it-works", priority: 0.9, changeFrequency: "weekly"  },
  { path: "/lp/video",     priority: 0.9, changeFrequency: "weekly"  },
  { path: "/lp/scan",      priority: 0.9, changeFrequency: "weekly"  },
  { path: "/lp/pdf",       priority: 0.8, changeFrequency: "weekly"  },
  { path: "/lp/generate",  priority: 0.8, changeFrequency: "weekly"  },
  { path: "/lp/share",     priority: 0.8, changeFrequency: "weekly"  },
  { path: "/discovery",    priority: 0.7, changeFrequency: "weekly"  },
  { path: "/demo",         priority: 0.8, changeFrequency: "monthly" },
  { path: "/technology",   priority: 0.7, changeFrequency: "monthly" },
  { path: "/about",        priority: 0.6, changeFrequency: "monthly" },
  { path: "/community",    priority: 0.5, changeFrequency: "weekly"  },
  { path: "/presskit",     priority: 0.4, changeFrequency: "monthly" },
  { path: "/support",      priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy",      priority: 0.2, changeFrequency: "monthly" },
  { path: "/privacy-choices", priority: 0.2, changeFrequency: "monthly" },
  { path: "/terms",        priority: 0.2, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}

