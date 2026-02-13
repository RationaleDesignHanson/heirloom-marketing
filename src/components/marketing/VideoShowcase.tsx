"use client";

import { useState } from "react";

export default function VideoShowcase({
  title,
  subtitle,
  demo,
}: {
  title: string;
  subtitle?: string;
  demo: { video: string; poster: string; alt: string; aspect: "16:9" | "9:16" };
}) {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 max-w-lg text-sm text-black/70">{subtitle}</p>
      )}

      {/* Compact phone — smaller than hero PhoneDemo */}
      <div className="mt-6 w-[200px] sm:w-[220px]">
        <div className="relative rounded-[2rem] border-[5px] border-[#1a1a1a] bg-[#1a1a1a] p-[2px] shadow-lg ring-1 ring-black/10">
          {/* Dynamic Island */}
          <div className="absolute top-0 left-1/2 z-10 h-[18px] w-[64px] -translate-x-1/2 rounded-b-xl bg-[#1a1a1a]" />

          {/* Screen */}
          <div className="relative overflow-hidden rounded-[1.6rem] bg-black">
            <div className="aspect-[9/16]">
              {!videoFailed ? (
                <video
                  className="h-full w-full object-cover object-top"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={demo.poster}
                  aria-label={demo.alt}
                  onError={() => setVideoFailed(true)}
                >
                  <source
                    src={demo.video}
                    type="video/mp4"
                    onError={() => setVideoFailed(true)}
                  />
                </video>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={demo.poster}
                  alt={demo.alt}
                  className="h-full w-full object-cover object-top"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
