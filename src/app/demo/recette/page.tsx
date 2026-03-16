import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heirloomrecipebox.app";

export const metadata: Metadata = {
  title: "Tarte Tatin de Grand-Mère | Le Carnet de Recettes",
  description:
    "La tarte Tatin de Grand-Mère, transmise de génération en génération. Pommes caramélisées, pâte feuilletée dorée, un dessert français intemporel.",
  robots: { index: false, follow: false },
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/brand/icon-64.png",
    apple: "/brand/icon-1024.png",
  },
  openGraph: {
    title: "Tarte Tatin de Grand-Mère | Le Carnet de Recettes",
    description:
      "La tarte Tatin de Grand-Mère, transmise de génération en génération. Pommes caramélisées, pâte feuilletée dorée.",
    images: ["/assets/demo-fr/tarte-tatin-hero.jpg"],
    type: "article",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarte Tatin de Grand-Mère | Le Carnet de Recettes",
    description:
      "La tarte Tatin de Grand-Mère, transmise de génération en génération.",
    images: ["/assets/demo-fr/tarte-tatin-hero.jpg"],
  },
};

/* ------------------------------------------------------------------ */
/*  Star rating component                                              */
/* ------------------------------------------------------------------ */
function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="inline-flex gap-0.5 text-amber-500"
      aria-label={`${rating} sur 5 étoiles`}
    >
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
  name: "Tarte Tatin de Grand-Mère",
  author: { "@type": "Person", name: "Mamie Colette" },
  datePublished: "2024-09-22",
  description:
    "La tarte Tatin originale de Grand-Mère, avec ses pommes Granny Smith caramélisées au beurre et au sucre, recouverte d'une pâte feuilletée dorée et croustillante. Une recette de famille depuis 1962.",
  image: "https://heirloomrecipebox.app/assets/demo-fr/tarte-tatin-hero.jpg",
  prepTime: "PT20M",
  cookTime: "PT45M",
  totalTime: "PT65M",
  recipeYield: "8 parts",
  recipeCategory: "Dessert",
  recipeCuisine: "French",
  inLanguage: "fr",
  keywords:
    "tarte tatin, tarte aux pommes, dessert français, recette de grand-mère, caramel, pâte feuilletée",
  recipeIngredient: [
    "6 pommes Granny Smith moyennes",
    "6 cuillères à soupe de beurre doux",
    "¾ tasse de sucre cristallisé",
    "1 cuillère à soupe de jus de citron frais",
    "1 feuille de pâte feuilletée, décongelée",
    "1 pincée de fleur de sel",
  ],
  recipeInstructions: [
    {
      "@type": "HowToStep",
      position: 1,
      text: "Éplucher, évider et couper les pommes en quartiers. Les arroser de jus de citron.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      text: "Faire fondre le beurre dans un moule allant au four de 25 cm. Ajouter le sucre et le sel, remuer pour combiner.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      text: "Cuire à feu moyen, sans remuer, jusqu'à ce que le caramel devienne ambré foncé, environ 12 minutes.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      text: "Disposer les quartiers de pommes bien serrés dans le caramel, côté bombé vers le bas. Cuire 5 minutes.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      text: "Draper la pâte feuilletée sur les pommes en rentrant les bords à l'intérieur du moule.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      text: "Enfourner à 200°C pendant 25 à 30 minutes, jusqu'à ce que la pâte soit bien dorée.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      text: "Laisser tiédir 5 minutes dans le moule, puis retourner sur un plat de service. Servir tiède.",
    },
  ],
  nutrition: {
    "@type": "NutritionInformation",
    calories: "285 calories",
    fatContent: "14 g",
    carbohydrateContent: "39 g",
    proteinContent: "2 g",
    sugarContent: "28 g",
    sodiumContent: "95 mg",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1263",
    bestRating: "5",
    worstRating: "1",
  },
};

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */
export default function DemoRecettePage() {
  return (
    <>
      {/* Structured data for share-sheet parsing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd) }}
      />

      <div className="min-h-screen bg-white font-[system-ui,sans-serif] text-gray-900">
        {/* -- Header ------------------------------------------------ */}
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="text-xl">🥧</span>
              <span className="text-base font-semibold tracking-tight text-gray-800">
                Le Carnet de Recettes
              </span>
            </div>
            <button className="rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white">
              S&apos;abonner
            </button>
          </div>
        </header>

        <main className="mx-auto max-w-4xl pb-16 sm:px-6">
          {/* -- Hero Image ------------------------------------------ */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/demo-fr/tarte-tatin-hero.jpg"
            alt="Une tarte Tatin dorée et caramélisée, renversée sur un plat de service en céramique"
            className="w-full max-h-[320px] rounded-b-2xl object-cover object-center sm:max-h-[400px]"
          />

          {/* -- Title & Meta ---------------------------------------- */}
          <div className="px-4 pt-5 sm:px-0">
            <h1 className="text-2xl leading-tight font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Tarte Tatin de Grand-Mère
            </h1>

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
              <Stars rating={4.8} />
              <span className="font-medium text-gray-700">4,8</span>
              <span className="text-gray-400">&bull;</span>
              <span>1 263 avis</span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-600">
                MC
              </div>
              <span>
                Par{" "}
                <span className="font-medium text-gray-700">
                  Mamie Colette
                </span>
              </span>
              <span className="text-gray-300">|</span>
              <span>22 septembre 2024</span>
            </div>
          </div>

          {/* -- Jump to Recipe -------------------------------------- */}
          <div className="px-4 pt-4 sm:px-0">
            <a
              href="#recette"
              className="flex w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-rose-500 py-3 text-sm font-semibold text-white active:bg-rose-600 sm:max-w-xs"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              Aller à la recette
            </a>
          </div>

          {/* -- Blog Preamble --------------------------------------- */}
          <article className="space-y-4 px-4 pt-6 text-[15px] leading-relaxed text-gray-700 sm:px-0 sm:text-base">
            <p>
              Il y a des recettes qu&apos;on ne trouve dans aucun livre. Elles
              vivent dans les gestes, dans le bruit du beurre qui grésille, dans
              cette façon bien précise de tourner le poignet pour disposer les
              pommes. La tarte Tatin de ma grand-mère est de celles-là &mdash;
              une recette transmise de mère en fille depuis 1962, griffonnée au
              dos d&apos;une enveloppe qui a depuis longtemps disparu.
            </p>
            <p>
              Mamie Colette la préparait chaque dimanche d&apos;automne, sans
              jamais peser quoi que ce soit. &laquo;&nbsp;Le sucre, c&apos;est au
              jugé&nbsp;&raquo;, disait-elle en versant d&apos;un geste sûr.
              &laquo;&nbsp;Et les pommes, elles te diront quand c&apos;est
              prêt.&nbsp;&raquo; J&apos;avais sept ans. Je ne comprenais pas du tout
              ce que les pommes pouvaient bien me dire. Mais le parfum qui
              envahissait la cuisine &mdash; beurre, caramel, pomme chaude &mdash;
              celui-là, je le comprenais parfaitement.
            </p>
            <p>
              Il m&apos;a fallu vingt ans et un nombre embarrassant de tentatives
              ratées pour retrouver exactement ce goût. Le secret ?{" "}
              <strong>Ne pas remuer le caramel.</strong> Je sais, c&apos;est
              contre-intuitif. Chaque fibre de votre être vous dira de touiller.
              Résistez. Le caramel sait ce qu&apos;il fait. Faites-lui confiance
              comme Mamie lui faisait confiance, debout devant sa cuisinière en
              fonte, les bras croisés, un sourcil légèrement relevé.
            </p>
            <p>
              Aujourd&apos;hui, c&apos;est moi qui prépare la tarte Tatin le
              dimanche. Et quand ma fille de cinq ans grimpe sur son tabouret
              pour regarder les pommes caraméliser, je retrouve exactement le même
              émerveillement que j&apos;avais dans la cuisine de Mamie. Certaines
              recettes ne nourrissent pas seulement le corps &mdash; elles
              nourrissent la mémoire.
            </p>
          </article>

          {/* -- In-article Image ------------------------------------ */}
          <div className="px-4 pt-4 sm:px-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/demo-fr/tarte-tatin-closeup.jpg"
              alt="Gros plan d'une part de tarte Tatin avec ses pommes caramélisées et sa pâte dorée"
              className="mx-auto max-h-[280px] w-full max-w-xl rounded-lg object-cover object-center sm:max-h-[340px]"
            />
            <p className="mt-1 text-center text-xs text-gray-400">
              Pommes fondantes, caramel ambré. Exactement comme chez Mamie.
            </p>
          </div>

          {/* -- Recipe Card ----------------------------------------- */}
          <div
            id="recette"
            className="mx-4 mt-8 scroll-mt-16 rounded-xl border-2 border-rose-100 bg-rose-50/50 p-5 sm:mx-0 sm:p-6"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Tarte Tatin de Grand-Mère
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Pommes caramélisées au beurre, pâte feuilletée croustillante. La
              recette originale de Mamie Colette, transmise depuis 1962.
            </p>

            {/* Time boxes */}
            <div className="mt-4 grid grid-cols-4 gap-2 text-center">
              {[
                { label: "Prépa", value: "20 min" },
                { label: "Cuisson", value: "45 min" },
                { label: "Total", value: "1 h 05" },
                { label: "Parts", value: "8" },
              ].map((t) => (
                <div key={t.label} className="rounded-lg bg-white p-2 shadow-sm">
                  <div className="text-[11px] font-semibold tracking-wide text-gray-400 uppercase">
                    {t.label}
                  </div>
                  <div className="mt-0.5 text-sm font-bold text-gray-800">
                    {t.value}
                  </div>
                </div>
              ))}
            </div>

            {/* -- Ingredients --------------------------------------- */}
            <h3 className="mt-6 text-base font-bold text-gray-900">
              Ingrédients
            </h3>
            <ul className="mt-3 space-y-2.5">
              {[
                "6 pommes Granny Smith moyennes",
                "6 c. à soupe de beurre doux",
                "¾ tasse de sucre cristallisé",
                "1 c. à soupe de jus de citron frais",
                "1 feuille de pâte feuilletée, décongelée",
                "1 pincée de fleur de sel",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-gray-300 bg-white text-[10px] text-transparent">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* -- Instructions -------------------------------------- */}
            <h3 className="mt-6 text-base font-bold text-gray-900">
              Préparation
            </h3>
            <ol className="mt-3 space-y-4">
              {[
                "Éplucher, évider et couper les pommes en quartiers. Les arroser de jus de citron pour éviter qu'elles ne brunissent.",
                "Faire fondre le beurre dans un moule allant au four de 25 cm (ou une poêle en fonte). Ajouter le sucre et la fleur de sel, bien mélanger.",
                "Cuire à feu moyen, sans remuer, jusqu'à ce que le caramel prenne une belle couleur ambrée — environ 12 minutes. Résistez à l'envie de touiller. Le caramel sait ce qu'il fait.",
                "Disposer les quartiers de pommes bien serrés dans le caramel, côté bombé vers le bas. Cuire 5 minutes. Les pommes vont vous dire quand c'est prêt — enfin, c'est ce que disait Mamie.",
                "Draper la pâte feuilletée par-dessus les pommes en rentrant les bords à l'intérieur du moule, comme si vous bordiez les pommes pour la nuit.",
                "Enfourner à 200°C (400°F) pendant 25 à 30 minutes, jusqu'à ce que la pâte soit bien dorée et gonflée.",
                "Laisser tiédir 5 minutes dans le moule, puis poser un plat de service dessus et retourner d'un geste franc. Servir tiède, avec une boule de glace à la vanille si le cœur vous en dit.",
              ].map((step, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-gray-700"
                >
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
              <img
                src="/assets/demo-fr/tarte-tatin-baking.jpg"
                alt="Pommes caramélisées disposées en spirale dans un moule en fonte avant d'être recouvertes de pâte"
                className="mx-auto max-h-[280px] w-full max-w-xl rounded-lg object-cover object-center sm:max-h-[340px]"
              />
              <p className="mt-1 text-center text-xs text-gray-400">
                La spirale parfaite — Mamie serait fière.
              </p>
            </div>
          </div>

          {/* -- Nutrition Facts -------------------------------------- */}
          <div className="mx-4 mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5 sm:mx-0 sm:p-6">
            <h3 className="text-base font-bold text-gray-900">
              Valeurs nutritionnelles
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Par part (approximatif)
            </p>
            <div className="mt-3 divide-y divide-gray-200 text-sm">
              {[
                { label: "Calories", value: "285" },
                { label: "Matières grasses", value: "14 g" },
                { label: "Glucides", value: "39 g" },
                { label: "Protéines", value: "2 g" },
                { label: "Sucres", value: "28 g" },
                { label: "Sodium", value: "95 mg" },
              ].map((n) => (
                <div key={n.label} className="flex justify-between py-1.5">
                  <span className="text-gray-600">{n.label}</span>
                  <span className="font-medium text-gray-900">{n.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* -- Reviews --------------------------------------------- */}
          <div className="px-4 pt-8 sm:px-0">
            <h3 className="text-lg font-bold text-gray-900">Avis</h3>
            <div className="mt-4 space-y-4">
              {[
                {
                  name: "MarieduBerry",
                  rating: 5,
                  date: "12 fév. 2025",
                  text: "J'ai fait cette tarte pour le repas de Noël et ma belle-mère m'a enfin adressé un compliment culinaire. Après quinze ans. Si ce n'est pas la preuve ultime, je ne sais pas ce qu'il vous faut.",
                },
                {
                  name: "PapaGâteau_Pierre",
                  rating: 5,
                  date: "28 jan. 2025",
                  text: "Mes enfants ont demandé \"c'est quand dimanche prochain ?\" avant même d'avoir fini leur part. La plus belle critique qu'un père puisse recevoir. J'en ai mangé trois parts. Je ne regrette rien.",
                },
                {
                  name: "SansGlutenSophie",
                  rating: 4,
                  date: "3 déc. 2024",
                  text: "J'ai remplacé la pâte feuilletée par une pâte sans gluten maison. Est-ce que c'était identique ? Non. Est-ce que c'était délicieux ? Absolument. Est-ce que j'ai léché le moule ? Je plaide le cinquième amendement.",
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="rounded-lg border border-gray-100 bg-white p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">
                        {review.name.charAt(0)}
                      </div>
                      <span className="text-sm font-semibold text-gray-800">
                        {review.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                  <div className="mt-1.5">
                    <Stars rating={review.rating} />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* -- "More Recipes" teaser ------------------------------- */}
          <div className="px-4 pt-8 sm:px-0">
            <h3 className="text-lg font-bold text-gray-900">
              Vous aimerez aussi
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:max-w-md">
              {[
                { title: "Clafoutis aux cerises de Tante Marie", time: "55 min" },
                { title: "Madeleines au citron de Mamie", time: "35 min" },
              ].map((r) => (
                <div
                  key={r.title}
                  className="overflow-hidden rounded-lg border border-gray-100"
                >
                  <div
                    className="flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200"
                    style={{ aspectRatio: "4/3" }}
                  />
                  <div className="p-2.5">
                    <p className="text-sm font-semibold leading-tight text-gray-800">
                      {r.title}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">{r.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* -- Footer ------------------------------------------------ */}
        <footer className="border-t border-gray-100 px-4 py-6 text-center text-xs text-gray-400 sm:px-6">
          <p>&copy; 2024 Le Carnet de Recettes. Tous droits réservés.</p>
          <p className="mt-1">
            Ceci est une page de démonstration. Pas un vrai site de recettes.
          </p>
        </footer>
      </div>
    </>
  );
}
