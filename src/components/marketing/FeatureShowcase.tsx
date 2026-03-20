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

// Alternating warm row backgrounds using brand palette
const rowStyles = [
  // Row 0: warm parchment with subtle texture overlay
  {
    bg: "bg-[#FBF6EF]",
    texture: true,
  },
  // Row 1: soft cream white
  {
    bg: "bg-white",
    texture: false,
  },
  // Row 2: warm terracotta tint
  {
    bg: "bg-[#FDF4EE]",
    texture: true,
  },
  // Row 3: lightest warm white
  {
    bg: "bg-[#FAFAF8]",
    texture: false,
  },
];

export default function FeatureShowcase({
  title,
  items,
}: {
  title: string;
  items: FeatureItem[];
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h2>

      <div className="mt-6 overflow-hidden rounded-3xl border border-black/10">
        {items.map((item, idx) => {
          const isFlipped = idx % 2 === 1;
          const style = rowStyles[idx % rowStyles.length];

          return (
            <div
              key={idx}
              className={`relative ${style.bg} px-6 py-10 sm:px-12 sm:py-14`}
            >
              {/* Subtle landing-hero texture overlay on warm rows */}
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
                {/* Screenshot */}
                <div className="flex justify-center">
                  {(item.image || item.images) && (
                    <ShowcaseImage
                      src={item.image}
                      images={item.images}
                      alt={item.title}
                    />
                  )}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {item.title}
                  </h3>
                  {/* Short copy on mobile, full copy on sm+ */}
                  {item.bodyShort && (
                    <p className="mt-3 text-sm leading-relaxed text-black/60 sm:hidden">
                      {item.bodyShort}
                    </p>
                  )}
                  <p className={`mt-3 text-sm leading-relaxed text-black/60 sm:text-base ${item.bodyShort ? "hidden sm:block" : ""}`}>
                    {item.body}
                  </p>
                  {/* Bullets — desktop only */}
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-4 hidden space-y-2 sm:block">
                      {item.bullets.map((bullet, bi) => (
                        <li
                          key={bi}
                          className="flex items-start gap-2 text-sm text-black/60"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--terracotta)]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* Infographic — desktop only */}
                  {item.infographic && (
                    <div className="hidden sm:block">
                      <FeatureInfographic id={item.infographic} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
