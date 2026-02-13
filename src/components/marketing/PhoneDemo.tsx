"use client";

import { useState } from "react";

export default function PhoneDemo({
  demo,
}: {
  demo: { video: string; poster: string; alt: string; aspect: "16:9" | "9:16" };
}) {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[280px] sm:max-w-[300px]">
      {/* iPhone frame */}
      <div className="relative rounded-[2.5rem] border-[6px] border-[#1a1a1a] bg-[#1a1a1a] p-[3px] shadow-xl ring-1 ring-black/10">
        {/* Dynamic Island notch */}
        <div className="absolute top-0 left-1/2 z-10 h-[26px] w-[100px] -translate-x-1/2 rounded-b-2xl bg-[#1a1a1a]" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2rem] bg-black">
          <div className="aspect-[9/19.5]">
            {!videoFailed ? (
              <video
                className="h-full w-full object-cover"
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
              /* Fallback: show poster image when video is unavailable */
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={demo.poster}
                alt={demo.alt}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
