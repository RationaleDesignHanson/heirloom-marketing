import type { FeatureItem } from "@/content/content";
import CyclingImage from "./CyclingImage";

function PhoneFrame({ src, alt, images }: { src?: string; alt: string; images?: string[] }) {
  const hasCycling = images && images.length > 1;

  return (
    <div className="mx-auto w-40 sm:w-44">
      <div className="relative rounded-[1.4rem] border-[5px] border-gray-900 bg-gray-900 shadow-lg">
        {/* Notch */}
        <div className="absolute top-1.5 left-1/2 z-10 h-2.5 w-10 -translate-x-1/2 rounded-md bg-gray-800" />
        {/* Screen */}
        <div className="overflow-hidden rounded-[1rem] bg-white">
          {hasCycling ? (
            <CyclingImage
              images={images}
              alt={alt}
              className="aspect-[9/16] w-full"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              className="aspect-[9/16] w-full object-cover object-top"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function FeatureGrid({
  title,
  items,
  columns = 3,
}: {
  title: string;
  items: FeatureItem[];
  columns?: 3 | 4;
}) {
  const cols = columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className={`mt-6 grid gap-4 ${cols}`}>
        {items.map((it, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center overflow-hidden rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur"
          >
            {(it.image || it.images) && (
              <div className="mb-5">
                <PhoneFrame src={it.image} alt={it.title} images={it.images} />
              </div>
            )}
            <div className="text-center">
              <div className="text-base font-semibold">{it.title}</div>
              <div className="mt-2 text-sm text-black/70">{it.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
