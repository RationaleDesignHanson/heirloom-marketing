import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomrecipebox.app";

export const metadata: Metadata = {
  title: "Handwritten Recipe Sample — Heirloom Import Test",
  description:
    "Download a sample handwritten recipe image to test importing into Heirloom Recipe Box. French Toast recipe.",
  robots: { index: false, follow: false },
  metadataBase: new URL(siteUrl),
};

const IMAGE_URL = "/assets/demo/french-toast-handwritten.png";
const IMAGE_FILENAME = "French_Toast_handwritten.png";

export default function DemoHandwrittenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white font-[system-ui,sans-serif] text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-amber-100/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="/" className="flex items-center gap-2 text-gray-800 hover:text-amber-600 transition-colors">
            <span className="text-lg">✍️</span>
            <span className="text-sm font-semibold tracking-tight">Heirloom Demo</span>
          </a>
          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
            Handwritten Test
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Hero card */}
        <div className="overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-lg shadow-amber-100/30">
          <div className="border-b border-amber-50 bg-gradient-to-r from-amber-50 to-rose-50/50 px-6 py-8 sm:px-8 sm:py-10">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              French Toast — Handwritten
            </h1>
            <p className="mt-2 text-base text-gray-600 sm:text-lg">
              A sample handwritten recipe image for testing import into Heirloom Recipe Box.
            </p>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            {/* Preview */}
            <div className="overflow-hidden rounded-lg border border-amber-100 bg-amber-50/30">
              <img
                src={IMAGE_URL}
                alt="Handwritten French Toast recipe"
                className="w-full object-contain"
              />
            </div>

            <p className="text-sm leading-relaxed text-gray-600">
              Use this page to test the handwritten recipe import flow in the Heirloom app. Link to this page from your app, then tap the download button below. The image contains a handwritten French Toast recipe — perfect for verifying that Heirloom correctly extracts recipes from photos.
            </p>

            {/* Download button */}
            <a
              href={IMAGE_URL}
              download={IMAGE_FILENAME}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-amber-500 px-6 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg active:scale-[0.98] sm:py-5"
            >
              <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Image
            </a>

            {/* Direct link for apps */}
            <div className="rounded-lg border border-gray-100 bg-gray-50/80 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Direct image URL (for app linking)
              </p>
              <code className="mt-1 block break-all text-sm text-gray-700">
                {siteUrl}{IMAGE_URL}
              </code>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          This is a demo page for testing. Not part of the main Heirloom marketing site.
        </p>
      </main>
    </div>
  );
}
