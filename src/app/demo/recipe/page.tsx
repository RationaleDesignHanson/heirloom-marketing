import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Best Soft & Chewy Chocolate Chip Cookies | The Recipe Chronicle",
  description:
    "These chocolate chip cookies have been delighting family and friends since time immemorial. Soft, chewy, and universally appreciated by nearly everyone.",
  robots: { index: false, follow: false },
};


/* ------------------------------------------------------------------ */
/*  Star rating component                                              */
/* ------------------------------------------------------------------ */
function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-0.5 text-amber-500" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i <= Math.floor(rating) ? "fill-current" : i - rating < 1 ? "fill-current opacity-50" : "fill-current opacity-20"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Recipe structured data (JSON-LD)                                   */
/* ------------------------------------------------------------------ */
const recipeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Recipe",
  name: "The Best Soft & Chewy Chocolate Chip Cookies",
  author: { "@type": "Person", name: "Cheryl Buttersworth" },
  datePublished: "2024-03-15",
  description:
    "Perfectly soft and chewy chocolate chip cookies with golden edges and melty chocolate in every bite. A family recipe that has been passed down and slightly improved upon each generation.",
  image: "https://heirloomrecipebox.app/assets/demo/cookies-hero.jpg",
  prepTime: "PT20M",
  cookTime: "PT12M",
  totalTime: "PT32M",
  recipeYield: "36 cookies",
  recipeCategory: "Dessert",
  recipeCuisine: "American",
  keywords: "chocolate chip cookies, soft cookies, chewy cookies, best cookies, baking",
  recipeIngredient: [
    "2 1/4 cups all-purpose flour",
    "1 teaspoon baking soda",
    "1 teaspoon fine sea salt",
    "1 cup (2 sticks) unsalted butter, softened",
    "3/4 cup granulated sugar",
    "3/4 cup packed light brown sugar",
    "2 large eggs, room temperature",
    "2 teaspoons pure vanilla extract",
    "2 cups semi-sweet chocolate chips",
    "1 cup chopped walnuts (optional)",
  ],
  recipeInstructions: [
    {
      "@type": "HowToStep",
      position: 1,
      text: "Preheat your oven to 375°F (190°C). Line two baking sheets with parchment paper and set aside.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      text: "In a medium bowl, whisk together the flour, baking soda, and salt. Set aside.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      text: "In a large bowl, cream together the softened butter, granulated sugar, and brown sugar with an electric mixer on medium speed until light and fluffy, about 3–4 minutes. Beat in the eggs one at a time, then stir in the vanilla extract.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      text: "Gradually add the flour mixture to the wet ingredients, mixing on low speed until just combined. Fold in the chocolate chips and walnuts (if using) with a spatula.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      text: "Drop rounded tablespoons of dough onto the prepared baking sheets, spacing them about 2 inches apart.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      text: "Bake for 9–12 minutes, or until the edges are golden brown but the centers still look slightly underdone. Remove from the oven and let cool on the baking sheet for 5 minutes before transferring to a wire rack.",
    },
  ],
  nutrition: {
    "@type": "NutritionInformation",
    calories: "210 calories",
    fatContent: "11 g",
    carbohydrateContent: "27 g",
    proteinContent: "2 g",
    sugarContent: "18 g",
    sodiumContent: "140 mg",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "2847",
    bestRating: "5",
    worstRating: "1",
  },
};

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */
export default function DemoRecipePage() {
  return (
    <>
      {/* Structured data for share-sheet parsing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd) }}
      />

      <div className="min-h-screen bg-white font-[system-ui,sans-serif] text-gray-900">
        {/* ── Header ─────────────────────────────────────── */}
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🍳</span>
              <span className="text-base font-semibold tracking-tight text-gray-800">
                The Recipe Chronicle
              </span>
            </div>
            <button className="rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white">
              Subscribe
            </button>
          </div>
        </header>

        <main className="pb-16">
          {/* ── Hero Image ───────────────────────────────── */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/demo/cookies-hero.jpg" alt="A batch of golden brown chocolate chip cookies cooling on parchment paper" className="w-full" />

          {/* ── Title & Meta ─────────────────────────────── */}
          <div className="px-4 pt-5">
            <h1 className="text-2xl leading-tight font-bold tracking-tight text-gray-900">
              The Best Soft &amp; Chewy Chocolate Chip Cookies
            </h1>

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
              <Stars rating={4.9} />
              <span className="font-medium text-gray-700">4.9</span>
              <span className="text-gray-400">•</span>
              <span>2,847 Reviews</span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-600">
                CB
              </div>
              <span>
                By <span className="font-medium text-gray-700">Cheryl Buttersworth</span>
              </span>
              <span className="text-gray-300">|</span>
              <span>March 15, 2024</span>
            </div>
          </div>

          {/* ── Jump to Recipe ────────────────────────────── */}
          <div className="px-4 pt-4">
            <a
              href="#recipe"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-rose-500 py-3 text-sm font-semibold text-white active:bg-rose-600"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              Jump to Recipe
            </a>
          </div>

          {/* ── Satirical Blog Preamble ──────────────────── */}
          <article className="space-y-4 px-4 pt-6 text-[15px] leading-relaxed text-gray-700">
            <p>
              When I first moved to the Pacific Northwest, I never expected that a simple chocolate
              chip cookie would fundamentally redefine my understanding of what baked goods could be.
              It was a Tuesday — or possibly a Wednesday, the details are hazy because I hadn&apos;t
              had my morning oat milk latte yet — and the rain was doing that thing where it&apos;s
              not quite raining but your hair somehow gets wet anyway.
            </p>
            <p>
              I turned to my husband Gerald and said, &ldquo;What if we made cookies today?&rdquo;
              He looked at me the way he always does when I suggest a baking project at 7 AM on a
              weekday — with a mixture of love and mild concern. But I could already see the recipe
              taking shape in my mind, the way a sculptor presumably sees a statue inside a block of
              marble. Or however that works.
            </p>
            <p>
              After six years of meticulous refinement (and one incident involving an electric mixer
              that we don&apos;t talk about), I can confidently say these are the{" "}
              <strong>best chocolate chip cookies</strong> I have ever produced in my kitchen. Gerald
              agrees. Our neighbor Susan agrees. Even our labradoodle, Biscuit, agrees — though his
              opinion may be biased by the fact that he&apos;ll eat literally anything.
            </p>
            <p>
              The secret? <em>Room temperature butter.</em> I know, I know — every recipe says this.
              But I really, truly mean it. If your butter is even slightly too cold, the cookies will
              know. They will be disappointed in you. And honestly? You&apos;ll be able to taste it.
            </p>
          </article>

          {/* ── In-article Image ─────────────────────────── */}
          <div className="px-4 pt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/demo/cookies-closeup.jpg" alt="Close-up of a chocolate chip cookie with golden edges and melty chocolate chips" className="w-full rounded-lg" />
            <p className="mt-1 text-center text-xs text-gray-400">
              Golden edges, soft centers. Gerald&apos;s hand for scale (not pictured).
            </p>
          </div>

          {/* ── Recipe Card ──────────────────────────────── */}
          <div id="recipe" className="mx-4 mt-8 scroll-mt-16 rounded-xl border-2 border-rose-100 bg-rose-50/50 p-5">
            <h2 className="text-xl font-bold text-gray-900">
              The Best Soft &amp; Chewy Chocolate Chip Cookies
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Perfectly soft cookies with golden edges and pools of melty chocolate in every bite.
            </p>

            {/* Time boxes */}
            <div className="mt-4 grid grid-cols-4 gap-2 text-center">
              {[
                { label: "Prep", value: "20 min" },
                { label: "Cook", value: "12 min" },
                { label: "Total", value: "32 min" },
                { label: "Yield", value: "36" },
              ].map((t) => (
                <div key={t.label} className="rounded-lg bg-white p-2 shadow-sm">
                  <div className="text-[11px] font-semibold tracking-wide text-gray-400 uppercase">
                    {t.label}
                  </div>
                  <div className="mt-0.5 text-sm font-bold text-gray-800">{t.value}</div>
                </div>
              ))}
            </div>

            {/* ── Ingredients ────────────────────────────── */}
            <h3 className="mt-6 text-base font-bold text-gray-900">Ingredients</h3>
            <ul className="mt-3 space-y-2.5">
              {[
                "2 ¼ cups all-purpose flour",
                "1 tsp baking soda",
                "1 tsp fine sea salt",
                "1 cup (2 sticks) unsalted butter, softened",
                "¾ cup granulated sugar",
                "¾ cup packed light brown sugar",
                "2 large eggs, room temperature",
                "2 tsp pure vanilla extract",
                "2 cups semi-sweet chocolate chips",
                "1 cup chopped walnuts (optional)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-gray-300 bg-white text-[10px] text-transparent">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* ── Instructions ───────────────────────────── */}
            <h3 className="mt-6 text-base font-bold text-gray-900">Instructions</h3>
            <ol className="mt-3 space-y-4">
              {[
                "Preheat your oven to 375°F (190°C). Line two baking sheets with parchment paper. Take a moment to appreciate that you're about to make something wonderful.",
                "In a medium bowl, whisk together the flour, baking soda, and salt. Set aside. Resist the urge to taste the flour — it's not that kind of recipe.",
                "In a large bowl, cream together the softened butter, granulated sugar, and brown sugar with an electric mixer on medium speed until light and fluffy, about 3–4 minutes. Beat in the eggs one at a time, then stir in the vanilla extract.",
                "Gradually add the flour mixture to the wet ingredients, mixing on low speed until just combined. Fold in the chocolate chips and walnuts (if using) with a spatula. Do not overmix — the dough has boundaries and you should respect them.",
                "Drop rounded tablespoons of dough onto the prepared baking sheets, spacing them about 2 inches apart. They will spread, because that is what cookies do.",
                "Bake for 9–12 minutes, or until the edges are golden brown but the centers still look slightly underdone. This is not a mistake — this is strategy. Let cool on the baking sheet for 5 minutes before transferring to a wire rack.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-gray-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            {/* Step photo */}
            <div className="mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/demo/cookies-baking.jpg" alt="Chocolate chip cookies on a baking sheet fresh from the oven" className="w-full rounded-lg" />
              <p className="mt-1 text-center text-xs text-gray-400">
                Perfectly golden — you&apos;ll know they&apos;re done when your kitchen smells like a hug.
              </p>
            </div>
          </div>

          {/* ── Nutrition Facts ───────────────────────────── */}
          <div className="mx-4 mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-bold text-gray-900">Nutrition Facts</h3>
            <p className="mt-1 text-xs text-gray-500">Per cookie (approximate)</p>
            <div className="mt-3 divide-y divide-gray-200 text-sm">
              {[
                { label: "Calories", value: "210" },
                { label: "Total Fat", value: "11g" },
                { label: "Carbohydrates", value: "27g" },
                { label: "Protein", value: "2g" },
                { label: "Sugar", value: "18g" },
                { label: "Sodium", value: "140mg" },
              ].map((n) => (
                <div key={n.label} className="flex justify-between py-1.5">
                  <span className="text-gray-600">{n.label}</span>
                  <span className="font-medium text-gray-900">{n.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Reviews ──────────────────────────────────── */}
          <div className="px-4 pt-8">
            <h3 className="text-lg font-bold text-gray-900">Reviews</h3>
            <div className="mt-4 space-y-4">
              {[
                {
                  name: "MidwestBaker42",
                  rating: 5,
                  date: "Feb 8, 2025",
                  text: "Made these for my book club and received three separate recipe requests within the hour. One member described them as \"transcendent,\" which feels like a strong word for a cookie, but I'll take it.",
                },
                {
                  name: "DadOfThree_Steve",
                  rating: 5,
                  date: "Jan 22, 2025",
                  text: "My kids ate the entire batch before they cooled. I have no review of the actual flavor, but the enthusiasm was undeniable. Will make a double batch next time and hide half.",
                },
                {
                  name: "GlutenFreeGreta",
                  rating: 4,
                  date: "Dec 3, 2024",
                  text: "Subbed in gluten-free flour and dairy-free butter. Were they exactly the same? No. Were they still delicious? Absolutely. Did I eat seven of them standing at the counter? I plead the fifth.",
                },
              ].map((review) => (
                <div key={review.name} className="rounded-lg border border-gray-100 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">
                        {review.name.charAt(0)}
                      </div>
                      <span className="text-sm font-semibold text-gray-800">{review.name}</span>
                    </div>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                  <div className="mt-1.5">
                    <Stars rating={review.rating} />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── "More Recipes" teaser ────────────────────── */}
          <div className="px-4 pt-8">
            <h3 className="text-lg font-bold text-gray-900">You Might Also Like</h3>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                { title: "Impossibly Fudgy Brownies", time: "45 min" },
                { title: "No-Fail Banana Bread", time: "1 hr 10 min" },
              ].map((r) => (
                <div key={r.title} className="overflow-hidden rounded-lg border border-gray-100">
                  <div className="flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200" style={{ aspectRatio: "4/3" }} />
                  <div className="p-2.5">
                    <p className="text-sm font-semibold leading-tight text-gray-800">{r.title}</p>
                    <p className="mt-1 text-xs text-gray-400">{r.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* ── Footer ─────────────────────────────────────── */}
        <footer className="border-t border-gray-100 px-4 py-6 text-center text-xs text-gray-400">
          <p>© 2024 The Recipe Chronicle. All rights reserved.</p>
          <p className="mt-1">This is a demo page. Not a real recipe website.</p>
        </footer>
      </div>
    </>
  );
}
