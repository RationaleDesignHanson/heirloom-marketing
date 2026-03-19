import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Age Rating — Heirloom Recipe Box",
  description: "Content rating and age suitability for Heirloom Recipe Box. App Store 13+.",
};

export default function AgeRatingPage() {
  return (
    <div className="min-h-screen bg-[var(--cream)] font-serif pb-16">
      <div className="mx-auto max-w-2xl px-6 py-12 sm:px-8 sm:py-16">
        <h1 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
          Age Rating
        </h1>
        <p className="mt-1 text-sm text-black/60">Heirloom Recipe Box · March 2026</p>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-black/90">
          <section>
            <h2 className="text-lg font-semibold text-black">App Store Age Rating: 13+</h2>
            <p className="mt-2">
              Heirloom Recipe Box is rated 13+ on the App Store. This rating reflects the app&apos;s
              social features and user-generated content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black">Content Categories Evaluated</h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-black/80">
              <li>
                <strong>User-Generated Content:</strong> Recipes shared between users. Content is
                moderated.
              </li>
              <li>
                <strong>Social Features:</strong> Connections, shared cookbooks, and a public recipe
                discovery feed.
              </li>
              <li>
                <strong>In-App Purchases:</strong> Subscriptions and credit packs for premium
                features.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black">Content Not Present</h2>
            <p className="mt-2">The app does not include:</p>
            <ul className="mt-1 list-inside list-disc space-y-1 text-black/80">
              <li>Violence</li>
              <li>Sexual content</li>
              <li>Explicit language</li>
              <li>Location sharing</li>
              <li>Gambling</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black">Moderation</h2>
            <p className="mt-2">
              User-generated recipe content is moderated to maintain a family-friendly environment.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black">App Details</h2>
            <ul className="mt-2 space-y-1 text-sm text-black/80">
              <li>Bundle ID: com.rationaledesign.heirloom</li>
              <li>Category: Food &amp; Drink</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black">Contact</h2>
            <p className="mt-2">
              For concerns about content or the age rating:{" "}
              <a
                href="mailto:admin@rationale.work"
                className="text-black underline underline-offset-2 hover:text-black/80"
              >
                admin@rationale.work
              </a>
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-black/50">Last updated: March 2026</p>

        <Link
          href="/"
          className="mt-6 inline-block text-sm font-medium text-black underline underline-offset-2 hover:text-black/80"
        >
          ← Back to Heirloom Recipe Box
        </Link>
      </div>
    </div>
  );
}
