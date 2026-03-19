"use client";

import type { FeatureItem } from "@/content/content";
import CyclingImage from "./CyclingImage";

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

const rowBgs = ["bg-white", "bg-[#FAF7F2]"];

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
          const bg = rowBgs[idx % 2];

          return (
            <div key={idx} className={`${bg} px-6 py-10 sm:px-12 sm:py-14`}>
              <div
                className={`mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
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
                  <p className="mt-3 text-sm leading-relaxed text-black/60 sm:text-base">
                    {item.body}
                  </p>
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
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
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
