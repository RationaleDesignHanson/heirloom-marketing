import type { FeatureItem } from "@/content/content";
import CyclingImage from "./CyclingImage";
import FeatureShowcase from "./FeatureShowcase";

function PhoneFrame({ src, alt, images }: { src?: string; alt: string; images?: string[] }) {
  const hasCycling = images && images.length > 1;

  return (
    <div className="mx-auto w-full max-w-[160px] sm:max-w-[190px]">
      <div className="relative rounded-[1.4rem] border-[5px] border-gray-900 bg-gray-900 shadow-lg">
        <div className="absolute top-1.5 left-1/2 z-10 h-2.5 w-10 -translate-x-1/2 rounded-md bg-gray-800" />
        <div className="relative overflow-hidden rounded-[1rem] bg-white">
          {hasCycling ? (
            <CyclingImage images={images} alt={alt} className="aspect-[9/19.5] w-full" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt} className="aspect-[9/19.5] w-full object-cover object-top" loading="lazy" />
          )}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-black/25 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-2 z-10 flex justify-center">
            <div className="h-1 w-1/3 rounded-full bg-black/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

function NakedImage({ src, alt, images }: { src?: string; alt: string; images?: string[] }) {
  const hasCycling = images && images.length > 1;
  const cls = "aspect-[9/19.5] w-full rounded-2xl object-cover object-top shadow-lg";

  if (hasCycling) {
    return (
      <div className="mx-auto w-full max-w-[160px] sm:max-w-[190px]">
        <CyclingImage images={images} alt={alt} className="aspect-[9/19.5] w-full overflow-hidden rounded-2xl shadow-lg" />
      </div>
    );
  }
  return (
    <div className="mx-auto w-full max-w-[160px] sm:max-w-[190px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={cls} loading="lazy" />
    </div>
  );
}

export default function FeatureGrid({
  title,
  items,
  columns = 3,
  layout = "grid",
}: {
  title: string;
  items: FeatureItem[];
  columns?: 3 | 4;
  layout?: "grid" | "showcase";
}) {
  if (layout === "showcase") {
    return <FeatureShowcase title={title} items={items} />;
  }

  const cols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      <div className={`mt-6 grid gap-4 ${cols}`}>
        {items.map((it, idx) => {
          const cardBg = it.cardBg ?? "bg-white/80";
          const frameStyle = it.frameStyle ?? "phone";
          const isDark = it.dark ?? false;

          return (
            <div
              key={idx}
              className={`flex flex-col items-center overflow-hidden rounded-2xl border p-4 shadow-sm sm:p-6 ${cardBg} ${
                isDark ? "border-white/10" : "border-black/10"
              }`}
            >
              {(it.image || it.images) && frameStyle !== "none" && (
                <div className="mb-5">
                  {frameStyle === "naked" ? (
                    <NakedImage src={it.image} alt={it.title} images={it.images} />
                  ) : (
                    <PhoneFrame src={it.image} alt={it.title} images={it.images} />
                  )}
                </div>
              )}
              <div className="text-center">
                <div className={`font-display text-base font-semibold ${isDark ? "text-white" : ""}`}>
                  {it.title}
                </div>
                <div className={`mt-2 text-sm ${isDark ? "text-white/70" : "text-black/70"}`}>
                  {it.body}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
