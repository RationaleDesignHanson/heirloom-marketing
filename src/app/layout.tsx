import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomrecipebox.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display serif — matches the app's .design(.serif) / New York aesthetic
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Heirloom Recipe Box — Preserve Your Family's Recipes",
    template: "%s | Heirloom Recipe Box",
  },
  description:
    "73% of family recipes are lost within one generation. Heirloom captures, preserves, and shares recipes from any source — video, scan, voice, URL, PDF, or AI. Free to start.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "family recipe app",
    "preserve family recipes",
    "recipe heritage app",
    "save recipes from tiktok",
    "cookbook scanning app",
    "recipe organizer ios",
    "digitize handwritten recipes",
    "recipe sharing app",
    "recipe attribution",
    "family cookbook app",
  ],
  openGraph: {
    title: "Heirloom Recipe Box — Preserve Your Family's Recipes",
    description:
      "73% of family recipes are lost within one generation. Heirloom captures, preserves, and shares recipes from any source — video, scan, voice, URL, PDF, or AI.",
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Heirloom Recipe Box" }],
    type: "website",
    siteName: "Heirloom Recipe Box",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heirloom Recipe Box — Preserve Your Family's Recipes",
    description:
      "73% of family recipes are lost within one generation. Heirloom captures and preserves recipes from video, scan, voice, URL, PDF, or AI.",
    images: [`${siteUrl}/opengraph-image`],
  },
  alternates: {
    canonical: siteUrl,
  },
  // Smart App Banner — replace app-id with the numeric App Store ID when the app ships
  other: {
    "apple-itunes-app": "app-id=6759019723",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lora.variable}>
      <head>
        {/* Privacy-friendly analytics by Plausible */}
        <script async src="https://plausible.io/js/pa-Zzne4uIAt3Bo6bQUgdJOs.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>

    </html>
  );
}
