import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import { copy } from "@/content/copy";
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
    default: copy.siteDefaultTitle,
    template: "%s | Heirloom Recipe Box",
  },
  description: copy.siteDefaultDescription,
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
    title: copy.siteDefaultTitle,
    description: copy.openGraphDescription,
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Heirloom Recipe Box" }],
    type: "website",
    siteName: "Heirloom Recipe Box",
  },
  twitter: {
    card: "summary_large_image",
    title: copy.siteDefaultTitle,
    description: copy.twitterDescription,
    images: [`${siteUrl}/opengraph-image`],
  },
  alternates: {
    canonical: siteUrl,
  },
  // Smart App Banner — replace app-id with the numeric App Store ID when the app ships
  other: {
    "apple-itunes-app": "app-id=6759019723",
    "facebook-domain-verification": "xluveyhlnvfd7o1avwb82silmptf0r",
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
        {/* TikTok Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
                ttq.load('D70MES3C77U98PN6K730');
                ttq.page();
              }(window, document, 'ttq');
            `,
          }}
        />
        {/* PostHog analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+" (stub)"},o="init bs ws ge fs capture Sa calculateEventProperties $s se on os $r removeAllFeatureFlagCallbacks onFeatureFlags reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep identify reset people.set people.set_once setPersonProperties group resetGroups unregister register register_once unregister_for_flags opt_out_capturing has_opted_out_capturing opt_in_capturing track_pageview track_links capture_exception $set_config config startSessionRecording stopSessionRecording sessionRecordingStarted loadToolbar get_distinct_id getGroups $get_config get_session_id get_session_replay_url alias set_config init isPlatformFeatureEnabled getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadAllFlags captureException".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('phc_4tRPuzWbC05UthvDe0dmcWD0nnBR5OkNXEqG0uu75zZ', {
                api_host: '/ingest',
                ui_host: 'https://us.posthog.com',
                person_profiles: 'identified_only',
              });
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>

    </html>
  );
}
