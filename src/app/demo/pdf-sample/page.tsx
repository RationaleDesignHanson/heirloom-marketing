import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomrecipebox.app";

export const metadata: Metadata = {
  title: "PDF Sample — Heirloom Recipe Import Test",
  description:
    "Download a sample recipe PDF to test importing into Heirloom Recipe Box. Heirloom Home Kitchen collection with images.",
  robots: { index: false, follow: false },
  metadataBase: new URL(siteUrl),
};

const PDF_URL = "/assets/demo/heirloom-home-kitchen.pdf";
const PDF_FILENAME = "Heirloom_Home_Kitchen.pdf";

export default function DemoPdfSamplePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 to-white font-[system-ui,sans-serif] text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-rose-100/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="/" className="flex items-center gap-2 text-gray-800 hover:text-rose-600 transition-colors">
            <span className="text-lg">📄</span>
            <span className="text-sm font-semibold tracking-tight">Heirloom Demo</span>
          </a>
          <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-700">
            PDF Import Test
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Hero card */}
        <div className="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-lg shadow-rose-100/30">
          <div className="border-b border-rose-50 bg-gradient-to-r from-rose-50 to-amber-50/50 px-6 py-8 sm:px-8 sm:py-10">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Heirloom Home Kitchen
            </h1>
            <p className="mt-2 text-base text-gray-600 sm:text-lg">
              A sample recipe collection PDF for testing import into Heirloom Recipe Box.
            </p>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-gray-600">
              Use this page to test the PDF import flow in the Heirloom app. Link to this page from your app, then tap the download button below. The PDF contains recipe content with images — perfect for verifying that Heirloom correctly extracts and preserves recipes from PDF sources.
            </p>

            {/* Download button */}
            <a
              href={PDF_URL}
              download={PDF_FILENAME}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-rose-500 px-6 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-rose-600 hover:shadow-lg active:scale-[0.98] sm:py-5"
            >
              <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download PDF
            </a>

            {/* Direct link for apps that need the raw URL */}
            <div className="rounded-lg border border-gray-100 bg-gray-50/80 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Direct PDF URL (for app linking)
              </p>
              <code className="mt-1 block break-all text-sm text-gray-700">
                {siteUrl}{PDF_URL}
              </code>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-gray-400">
          This is a demo page for testing. Not part of the main Heirloom marketing site.
        </p>
      </main>
    </div>
  );
}
