"use client";

/**
 * HeirloomDemoMobile
 * Snappy 3-step demo optimised for portrait/touch screens.
 * Step 1: pick a sample card (2×3 grid) or upload your own
 * Step 2: extracting animation
 * Step 3: recipe card result + sticker strip + CTA
 */

import { useState, useRef, useCallback } from "react";
import { SAMPLE_RECIPE_CARDS, SAMPLE_COOKBOOK_PAGES } from "@/lib/heirloom/sample-recipes";
import { DEMO_STICKERS } from "@/lib/heirloom/demo-stickers";

type Step = "select" | "extracting" | "result";

interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string[];
  servings?: string | null;
  prepTime?: string | null;
  cookTime?: string | null;
}

// Pick 6 representative samples for the grid (mix of cards + cookbooks)
const GRID_SAMPLES = [
  SAMPLE_RECIPE_CARDS[0],
  SAMPLE_RECIPE_CARDS[2],
  SAMPLE_RECIPE_CARDS[5],
  SAMPLE_COOKBOOK_PAGES[0],
  SAMPLE_COOKBOOK_PAGES[3],
  SAMPLE_COOKBOOK_PAGES[6],
].filter(Boolean);

// 12 stickers for the horizontal strip (one from each category)
const STRIP_STICKERS = [
  DEMO_STICKERS.find(s => s.id === "badge_grandma")!,
  DEMO_STICKERS.find(s => s.id === "badge_familyrecipe")!,
  DEMO_STICKERS.find(s => s.id === "badge_love")!,
  DEMO_STICKERS.find(s => s.id === "badge_homemade")!,
  DEMO_STICKERS.find(s => s.id === "food_garlic")!,
  DEMO_STICKERS.find(s => s.id === "food_tomato")!,
  DEMO_STICKERS.find(s => s.id === "food_herbs")!,
  DEMO_STICKERS.find(s => s.id === "annotation_moms")!,
  DEMO_STICKERS.find(s => s.id === "annotation_best")!,
  DEMO_STICKERS.find(s => s.id === "emotion_heart")!,
  DEMO_STICKERS.find(s => s.id === "seasonal_sunflower")!,
  DEMO_STICKERS.find(s => s.id === "badge_sunday")!,
].filter(Boolean);

export function HeirloomDemoMobile() {
  const [step, setStep] = useState<Step>("select");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [appliedSticker, setAppliedSticker] = useState<string | null>(null);
  const [showAllIngredients, setShowAllIngredients] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const runExtraction = useCallback(async (imageData: string, preview: string) => {
    setImagePreview(preview);
    setStep("extracting");
    setError(null);
    setAppliedSticker(null);
    setShowAllIngredients(false);

    try {
      const res = await fetch("/api/heirloom/extract-recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: imageData }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Extraction failed");
      }

      const data = await res.json();
      setRecipe(data);
      setStep("result");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setStep("select");
    }
  }, []);

  const handleSample = useCallback(async (sample: typeof GRID_SAMPLES[0]) => {
    // Fetch the image and convert to base64
    try {
      const res = await fetch(sample.imagePath);
      const blob = await res.blob();
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = (reader.result as string).split(",")[1];
        runExtraction(base64, sample.imagePath);
      };
      reader.readAsDataURL(blob);
    } catch {
      setError("Couldn't load that image. Try another.");
    }
  }, [runExtraction]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const base64 = dataUrl.split(",")[1];
      runExtraction(base64, dataUrl);
    };
    reader.readAsDataURL(file);
  }, [runExtraction]);

  // ── Step 1: Select ──────────────────────────────────────────────────────────
  if (step === "select") {
    return (
      <div className="rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur">
        <p className="mb-3 text-center text-sm font-medium text-black/60">
          Pick a recipe to extract
        </p>

        {error && (
          <p className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-center text-xs text-red-600">
            {error}
          </p>
        )}

        {/* 2×3 sample grid */}
        <div className="grid grid-cols-3 gap-2">
          {GRID_SAMPLES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => handleSample(sample)}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl border-2 border-black/8 transition-all hover:border-[var(--tomato)] active:scale-95"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sample.imagePath}
                alt={sample.name}
                className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          ))}
        </div>

        {/* Upload own */}
        <div className="mt-3">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-black/20 bg-[var(--cream)] px-4 py-3 text-sm font-medium text-black/60 transition-colors hover:border-[var(--tomato)] hover:text-[var(--tomato)] active:scale-95"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Use your own photo
          </button>
        </div>
      </div>
    );
  }

  // ── Step 2: Extracting ──────────────────────────────────────────────────────
  if (step === "extracting") {
    return (
      <div className="rounded-2xl border border-black/10 bg-white/80 shadow-sm backdrop-blur overflow-hidden">
        {/* Image preview */}
        {imagePreview && (
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imagePreview}
              alt="Extracting"
              className="h-52 w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
          </div>
        )}

        {/* Status */}
        <div className="p-5 text-center">
          {/* Spinner */}
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-[3px] border-[var(--terracotta)] border-t-[var(--tomato)]" />
          <p className="font-display text-lg font-semibold text-black">Reading your recipe…</p>
          <p className="mt-1 text-sm text-black/50">Claude is extracting every detail</p>

          {/* Animated steps */}
          <div className="mt-5 space-y-2 text-left">
            {[
              { label: "Analysing handwriting", done: true },
              { label: "Identifying ingredients", done: true },
              { label: "Structuring recipe card", done: false },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2.5 text-sm">
                <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${
                  s.done ? "bg-green-100 text-green-600" : "bg-[var(--terracotta)] text-[var(--tomato)] animate-pulse"
                }`}>
                  {s.done ? "✓" : "…"}
                </span>
                <span className={s.done ? "text-black/50 line-through" : "text-black/80"}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Step 3: Result ──────────────────────────────────────────────────────────
  const visibleIngredients = showAllIngredients
    ? recipe!.ingredients
    : recipe!.ingredients.slice(0, 5);

  return (
    <div className="space-y-3">
      {/* Recipe card */}
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
        {/* Source photo thumbnail */}
        {imagePreview && (
          <div className="relative h-28">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imagePreview} alt="Source" className="h-full w-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
            <div className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-black/60 shadow-sm backdrop-blur">
              Original · Grandma Kay · 1987
            </div>
          </div>
        )}

        <div className="p-4">
          {/* Applied sticker */}
          {appliedSticker && (
            <div className="mb-2 flex justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={appliedSticker} alt="sticker" className="h-10 w-10 object-contain drop-shadow" />
            </div>
          )}

          {/* Title */}
          <h2 className="font-display text-xl font-semibold leading-tight text-black">
            {recipe!.title}
          </h2>

          {/* Meta pills */}
          {(recipe!.prepTime || recipe!.cookTime || recipe!.servings) && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {recipe!.prepTime && (
                <span className="rounded-full bg-[var(--cream)] px-2.5 py-0.5 text-xs text-black/60">
                  Prep {recipe!.prepTime}
                </span>
              )}
              {recipe!.cookTime && (
                <span className="rounded-full bg-[var(--cream)] px-2.5 py-0.5 text-xs text-black/60">
                  Cook {recipe!.cookTime}
                </span>
              )}
              {recipe!.servings && (
                <span className="rounded-full bg-[var(--cream)] px-2.5 py-0.5 text-xs text-black/60">
                  {recipe!.servings}
                </span>
              )}
            </div>
          )}

          {/* Ingredients */}
          <div className="mt-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-black/40">
              Ingredients
            </p>
            <ul className="mt-1.5 space-y-1">
              {visibleIngredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-black/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--tomato)]" />
                  {ing}
                </li>
              ))}
            </ul>
            {recipe!.ingredients.length > 5 && (
              <button
                onClick={() => setShowAllIngredients(!showAllIngredients)}
                className="mt-1.5 text-xs font-medium text-[var(--tomato)]"
              >
                {showAllIngredients
                  ? "Show less"
                  : `+${recipe!.ingredients.length - 5} more`}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sticker strip */}
      <div className="rounded-2xl border border-black/10 bg-white/80 px-4 py-3 backdrop-blur">
        <p className="mb-2 text-xs font-medium text-black/50">Add a sticker</p>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {STRIP_STICKERS.map((sticker) => (
            <button
              key={sticker.id}
              onClick={() => setAppliedSticker(
                appliedSticker === sticker.imagePath ? null : sticker.imagePath
              )}
              className={`relative shrink-0 rounded-xl p-1.5 transition-all active:scale-90 ${
                appliedSticker === sticker.imagePath
                  ? "bg-[var(--terracotta)] ring-2 ring-[var(--tomato)]"
                  : "bg-[var(--cream)] hover:bg-[var(--terracotta)]/50"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sticker.imagePath}
                alt={sticker.label}
                className="h-9 w-9 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).nextElementSibling?.removeAttribute("hidden");
                }}
              />
              <span hidden className="flex h-9 w-9 items-center justify-center text-xl">
                {sticker.fallbackEmoji}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* CTA + try another */}
      <div className="flex gap-2">
        <a
          href="#"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[var(--tomato)] px-4 py-3 text-sm font-semibold text-white shadow-sm active:opacity-90"
        >
          Save in Heirloom
        </a>
        <button
          onClick={() => {
            setStep("select");
            setRecipe(null);
            setImagePreview(null);
          }}
          className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black/60 active:bg-black/5"
        >
          Try another
        </button>
      </div>
    </div>
  );
}
