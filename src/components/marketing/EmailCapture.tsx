"use client";

import { useMemo, useState } from "react";

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

export default function EmailCapture({
  formName,
  placeholder = "you@domain.com",
  buttonLabel = "Notify me",
}: {
  formName: string;
  placeholder?: string;
  buttonLabel?: string;
}) {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const isValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()), [email]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    if (!isValid) return;
    if (hp) return; // spam bot

    setStatus("loading");
    try {
      const body = encode({
        "form-name": formName,
        email: email.trim(),
        "bot-field": hp,
      });

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) throw new Error(`Bad response: ${res.status}`);

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="w-full max-w-xl"
    >
      <input type="hidden" name="form-name" value={formName} />

      {/* honeypot */}
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" value={hp} onChange={(e) => setHp(e.target.value)} />
        </label>
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          autoComplete="email"
          required
          className="h-11 flex-1 rounded-xl border border-black/10 bg-white px-4 text-sm text-black shadow-sm outline-none placeholder:text-black/40 focus:border-black/20"
        />
        <button
          type="submit"
          disabled={!isValid || status === "loading"}
          className="h-11 rounded-xl bg-black px-5 text-sm font-semibold text-white shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? "Sending…" : buttonLabel}
        </button>
      </div>

      {status === "success" ? (
        <p className="mt-3 text-sm text-black/70">Thanks—you're on the list.</p>
      ) : status === "error" ? (
        <p className="mt-3 text-sm text-black/70">
          Something went wrong. Please try again (or email us at <span className="font-medium">admin@rationale.work</span>).
        </p>
      ) : (
        <p className="mt-3 text-xs text-black/50">We’ll only email you about Heirloom. Unsubscribe anytime.</p>
      )}
    </form>
  );
}

