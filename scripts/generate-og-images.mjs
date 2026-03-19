/**
 * generate-og-images.mjs
 * Generates per-page OG images (1200×630) using Replicate Flux 1.1 Pro
 *
 * Usage:
 *   REPLICATE_API_TOKEN=r8_xxx node scripts/generate-og-images.mjs
 *
 * Output: public/og/<slug>.png
 */

import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public/og");

const REPLICATE_TOKEN = process.env.REPLICATE_API_TOKEN;
if (!REPLICATE_TOKEN) {
  console.error("❌  Set REPLICATE_API_TOKEN env var first");
  process.exit(1);
}

// ── Page definitions ──────────────────────────────────────────────────────────
const PAGES = [
  {
    slug: "default",
    headline: "Preserve Your Family's Recipes",
    subtext: "Capture, preserve, and share recipes from any source.",
    theme: "warm",
  },
  {
    slug: "home",
    headline: "Every Recipe Worth Keeping",
    subtext: "73% of family recipes are lost in one generation. Not yours.",
    theme: "warm",
  },
  {
    slug: "video",
    headline: "Save Recipes From Any Video",
    subtext: "TikTok, Instagram, YouTube — extract the recipe and keep it forever.",
    theme: "dark",
  },
  {
    slug: "scan",
    headline: "Scan Any Recipe. Save It Forever.",
    subtext: "Handwritten cards, cookbooks, PDFs — all structured and preserved.",
    theme: "warm",
  },
  {
    slug: "generate",
    headline: "Describe a Dish. Get a Recipe.",
    subtext: "AI generates a full recipe from any description or ingredient list.",
    theme: "cool",
  },
  {
    slug: "kitchen-table",
    headline: "Cook with the People Closest to You",
    subtext: "Kitchen Table — private recipe sharing for family and close friends.",
    theme: "warm",
  },
  {
    slug: "discovery",
    headline: "Discover Curated Recipe Collections",
    subtext: "Theme Packs from Heirloom and trusted creators.",
    theme: "cool",
  },
  {
    slug: "how-it-works",
    headline: "Every Capture Method. One Recipe Box.",
    subtext: "Web, video, scan, voice, PDF, or AI — all in one place.",
    theme: "warm",
  },
  {
    slug: "technology",
    headline: "Built for Privacy. Built to Last.",
    subtext: "Offline-first, CRDT sync, on-device audio, verifiable provenance.",
    theme: "dark",
  },
  {
    slug: "demo",
    headline: "See Heirloom Extract a Recipe",
    subtext: "Upload a recipe photo. Watch Claude AI preserve it in seconds.",
    theme: "warm",
  },
  {
    slug: "about",
    headline: "Made by Rationale Studio",
    subtext: "A small team building tools for things that matter.",
    theme: "warm",
  },
];

// ── Prompt builder ────────────────────────────────────────────────────────────
function buildPrompt(page) {
  const themes = {
    warm: "warm cream parchment background, soft golden hour light, rustic wooden kitchen surface, scattered fresh herbs",
    dark: "deep rich charcoal background, warm candlelight, moody kitchen atmosphere, cast iron pan",
    cool: "soft sage green background, natural linen texture, ceramic bowls, morning light",
  };

  return `Elegant marketing image for a recipe preservation app. ${themes[page.theme]}.
Large centered text overlay area (left two-thirds). Clean minimalist food photography aesthetic.
Small Heirloom logo mark in top left corner (stylized leaf/sprout icon in terracotta red).
Bold sans-serif headline text: "${page.headline}"
Smaller subtext below: "${page.subtext}"
Bottom right: tasteful App Store badge suggestion area.
Professional, warm, heritage feel. Shot on film, grain, editorial quality.
16:9 aspect ratio, 1200x630 pixels. No people. No hands.`.trim();
}

// ── Replicate API helpers ─────────────────────────────────────────────────────
async function callReplicate(endpoint, method, body) {
  return new Promise((resolve, reject) => {
    const url = new URL(`https://api.replicate.com/v1/${endpoint}`);
    const data = body ? JSON.stringify(body) : undefined;

    const req = https.request(
      {
        hostname: url.hostname,
        path: url.pathname,
        method,
        headers: {
          Authorization: `Bearer ${REPLICATE_TOKEN}`,
          "Content-Type": "application/json",
          "Prefer": "wait",
          ...(data ? { "Content-Length": Buffer.byteLength(data) } : {}),
        },
      },
      (res) => {
        let raw = "";
        res.on("data", (c) => (raw += c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(raw));
          } catch {
            reject(new Error(`Bad JSON: ${raw.slice(0, 200)}`));
          }
        });
      }
    );
    req.on("error", reject);
    if (data) req.write(data);
    req.end();
  });
}

async function pollPrediction(id) {
  for (let i = 0; i < 60; i++) {
    await new Promise((r) => setTimeout(r, 3000));
    const pred = await callReplicate(`predictions/${id}`, "GET");
    if (pred.status === "succeeded") return pred.output;
    if (pred.status === "failed" || pred.status === "canceled") {
      throw new Error(`Prediction ${id} ${pred.status}: ${pred.error}`);
    }
    process.stdout.write(".");
  }
  throw new Error("Timed out after 3 minutes");
}

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        downloadImage(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (e) => { fs.unlinkSync(dest); reject(e); });
  });
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const skip = process.argv.includes("--skip-existing");

  for (const page of PAGES) {
    const dest = path.join(OUT_DIR, `${page.slug}.png`);

    if (skip && fs.existsSync(dest)) {
      console.log(`⏭  ${page.slug}.png (exists)`);
      continue;
    }

    console.log(`\n🎨  Generating ${page.slug}.png — "${page.headline}"`);

    try {
      const prediction = await callReplicate("models/black-forest-labs/flux-1.1-pro/predictions", "POST", {
        input: {
          prompt: buildPrompt(page),
          width: 1200,
          height: 630,
          aspect_ratio: "custom",
          output_format: "png",
          output_quality: 90,
          safety_tolerance: 5,
          prompt_upsampling: false,
        },
      });

      let outputUrl;
      if (prediction.status === "succeeded") {
        outputUrl = Array.isArray(prediction.output) ? prediction.output[0] : prediction.output;
      } else {
        process.stdout.write(`  polling`);
        const output = await pollPrediction(prediction.id);
        outputUrl = Array.isArray(output) ? output[0] : output;
        console.log("");
      }

      await downloadImage(outputUrl, dest);
      console.log(`  ✓  saved to public/og/${page.slug}.png`);
    } catch (err) {
      console.error(`  ✗  ${page.slug}: ${err.message}`);
    }
  }

  console.log("\n✅  Done. Update metadata in layout.tsx / page files to reference /og/<slug>.png");
}

main();
