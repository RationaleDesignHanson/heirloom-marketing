"use client";

import { useState } from "react";

const PASSCODE = "123456";

export default function DeckPage() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim().toLowerCase() === PASSCODE) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!unlocked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--cream)] px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-2xl border border-black/10 bg-white/80 p-8 shadow-lg backdrop-blur"
        >
          <h1 className="text-xl font-semibold tracking-tight text-[var(--ink)]">
            Heirloom Deck
          </h1>
          <p className="mt-2 text-sm text-black/60">
            Enter the passcode to view.
          </p>
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Passcode"
            className="mt-4 w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-[var(--ink)] placeholder:text-black/30 focus:border-[var(--terracotta)] focus:outline-none focus:ring-1 focus:ring-[var(--terracotta)]"
            autoFocus
          />
          {error && (
            <p className="mt-2 text-xs text-red-600">Incorrect passcode.</p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-[var(--ink)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black"
          >
            View Deck
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--cream)] px-4 py-10">
      <div className="w-full max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-[var(--ink)]">
            Heirloom Deck
          </h1>
          <button
            onClick={() => {
              setUnlocked(false);
              setInput("");
            }}
            className="text-xs text-black/40 transition-colors hover:text-black/70"
          >
            Lock
          </button>
        </div>
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
          <iframe
            src="https://gamma.app/embed/e1i2abjti94v38t"
            style={{ width: "100%", height: "min(80vh, 600px)" }}
            allow="fullscreen"
            title="Heirloom"
          />
        </div>
      </div>
    </div>
  );
}
