"use client";

import type { FeatureItem } from "@/content/content";
import CyclingImage from "./CyclingImage";
import FeatureInfographic from "./FeatureInfographic";

function ShowcaseImage({
  src,
  images,
  alt,
}: {
  src?: string;
  images?: string[];
  alt: string;
}) {
  const hasCycling = images && images.length > 1;
  const wrapClass =
    "mx-auto w-full max-w-[220px] sm:max-w-[260px] drop-shadow-2xl";

  if (hasCycling) {
    return (
      <div className={wrapClass}>
        <CyclingImage
          images={images}
          alt={alt}
          className="aspect-[9/19.5] w-full overflow-hidden rounded-2xl"
        />
      </div>
    );
  }

  return (
    <div className={wrapClass}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="aspect-[9/19.5] w-full rounded-2xl object-cover object-top"
        loading="lazy"
      />
    </div>
  );
}

const rowStyles = [
  { bg: "bg-[#FBF6EF]", texture: true },
  { bg: "bg-white", texture: false },
  { bg: "bg-[#FDF4EE]", texture: true },
  { bg: "bg-[#FAFAF8]", texture: false },
];

export default function FeatureShowcaseRow({
  item,
  index,
  /** Deck/export: always show bullets + infographic (homepage hides some until `sm`) */
  exportMode = false,
}: {
  item: FeatureItem;
  index: number;
  exportMode?: boolean;
}) {
  const isFlipped = index % 2 === 1;
  const style = rowStyles[index % rowStyles.length];

  return (
    <div className={`relative ${style.bg} px-6 py-10 sm:px-12 sm:py-14 ${exportMode ? "md:px-14 md:py-16" : ""}`}>
      {style.texture && (
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.04]"
          style={{ backgroundImage: "url(/assets/bg/landing-hero.png)" }}
        />
      )}

      <div
        className={`relative mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          isFlipped ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex justify-center">
          {(item.image || item.images) && (
            <ShowcaseImage src={item.image} images={item.images} alt={item.title} />
          )}
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</h3>
          {exportMode ? (
            <p className="mt-3 text-base leading-relaxed text-black/65">{item.body}</p>
          ) : (
            <>
              {item.bodyShort && (
                <p className="mt-3 text-sm leading-relaxed text-black/60 sm:hidden">{item.bodyShort}</p>
              )}
              <p
                className={`mt-3 text-sm leading-relaxed text-black/60 sm:text-base ${
                  item.bodyShort ? "hidden sm:block" : ""
                }`}
              >
                {item.body}
              </p>
            </>
          )}
          {item.bullets && item.bullets.length > 0 && (
            <ul className={`mt-4 space-y-2 ${exportMode ? "" : "hidden sm:block"}`}>
              {item.bullets.map((bullet, bi) => (
                <li key={bi} className="flex items-start gap-2 text-sm text-black/60">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--terracotta)]" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          {item.infographic && (
            <div className={exportMode ? "mt-5 block" : "mt-5 hidden sm:block"}>
              <FeatureInfographic id={item.infographic} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
