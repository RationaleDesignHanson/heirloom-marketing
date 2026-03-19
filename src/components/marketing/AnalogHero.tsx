"use client";

/**
 * AnalogHero — Option A emotional before/after visual for the homepage hero
 * Shows real analog recipe card photos arranged on a table, fading into the app
 * Replaces the phone+video visual on the hero right column
 */

import { useState, useEffect } from "react";

// The 3 most evocative recipe card photos from our analog library
const ANALOG_CARDS = [
  { src: "/assets/heirloom-demo/cards/RecipeCard_01.jpg", rotate: "-rotate-3", z: "z-10", offset: "translate-x-4 -translate-y-2" },
  { src: "/assets/heirloom-demo/cards/RecipeCard_05.jpg", rotate: "rotate-2",  z: "z-20", offset: "translate-x-0 translate-y-0" },
  { src: "/assets/heirloom-demo/cards/RecipeCard_09.jpg", rotate: "rotate-6",  z: "z-10", offset: "-translate-x-4 translate-y-3" },
];

export default function AnalogHero() {
  const [revealed, setRevealed] = useState(false);

  // Animate in after mount
  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative flex flex-col items-center gap-5">

      {/* ── Analog cards cluster ─────────────────────────── */}
      <div className="relative h-52 w-64 sm:h-60 sm:w-72">
        {ANALOG_CARDS.map((card, i) => (
          <div
            key={i}
            className={`absolute inset-0 transform transition-all duration-700
              ${card.rotate} ${card.offset} ${card.z}
              ${revealed ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.src}
              alt="Family recipe card"
              className="h-full w-full rounded-xl border border-black/10 object-cover shadow-md"
            />
          </div>
        ))}
      </div>

      {/* ── Arrow / bridge ───────────────────────────────── */}
      <div
        className={`flex flex-col items-center gap-1 transition-all duration-500
          ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        style={{ transitionDelay: "480ms" }}
      >
        <div className="text-xs font-medium tracking-wide text-black/40 uppercase">Preserved in</div>
        <svg className="h-4 w-4 text-[var(--tomato)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* ── App card preview ─────────────────────────────── */}
      <div
        className={`w-64 sm:w-72 rounded-2xl border border-black/10 bg-white p-4 shadow-lg transition-all duration-700
          ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{ transitionDelay: "600ms" }}
      >
        {/* Card header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-black/40">Grandma Kay · 1987 · Gen 1</div>
            <div className="mt-0.5 font-display text-base font-semibold leading-tight text-black">
              Nana's Sunday Gravy
            </div>
          </div>
          <div className="rounded-full bg-[var(--terracotta)] px-2 py-0.5 text-[10px] font-semibold text-[var(--tomato)]">
            Original
          </div>
        </div>

        {/* Divider */}
        <div className="my-3 h-px bg-black/6" />

        {/* Ingredients preview */}
        <div className="text-[10px] font-semibold uppercase tracking-wider text-black/40">Ingredients</div>
        <ul className="mt-1.5 space-y-1">
          {["2 lbs Italian sausage", "1 can San Marzano tomatoes", "Fresh basil, torn"].map((ing) => (
            <li key={ing} className="flex items-center gap-1.5 text-xs text-black/70">
              <span className="h-1 w-1 rounded-full bg-[var(--tomato)]" />
              {ing}
            </li>
          ))}
        </ul>

        {/* Footer badges */}
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full bg-[var(--cream)] px-2 py-0.5 text-[10px] text-black/50">2h 30m</span>
          <span className="rounded-full bg-[var(--cream)] px-2 py-0.5 text-[10px] text-black/50">Serves 6</span>
          <span className="ml-auto text-[10px] text-black/30">3 generations</span>
        </div>
      </div>

    </div>
  );
}
