import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomrecipebox.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Keep internal QA/test demo sub-pages out of search
      disallow: ["/demo/recipe", "/demo/recette", "/demo/handwritten", "/demo/pdf-sample"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

