# Web Creative Appendix (Runtime Assets + Specs)
**Last updated:** Feb 6, 2026  
**Purpose:** Bridge the capture/creative system in `04-manual-tasks-and-creative.md` + `05-video-creative-production.md` to **what the marketing website actually needs at runtime** (`/public/...`), including filenames, specs, and performance constraints.

This appendix assumes the **visual direction** defined in `05-video-creative-production.md`:
**Warm Ceramic Calm** (cozy/heritage, tactile, minimal, premium).

---

## 1) Two asset systems: “Library” vs “Runtime”

### A) Creative library (source of truth for production)
Use the folder structure defined in `05-video-creative-production.md` Section E:

`/marketing/...` (captures, ads, app-store, landing, ai-generated, templates)

### B) Website runtime (what gets deployed)
Everything the website serves must live under:

`/public/...`

**Current runtime convention in this repo**
- Videos: `public/assets/video/*`
- Posters: `public/assets/posters/*`

---

## 2) Web runtime “drop-in” filenames (what the site expects)

These are referenced in `src/content/content.ts` today.

### A) Homepage (and reused by most landing pages)
- **Hero video (16:9)**: `public/assets/video/lp1-save-hero-16x9.mp4`
- **Hero poster (16:9)**: `public/assets/posters/lp1-save-hero.jpg`

### B) Sharing landing page `/lp/share`
- **Hero video (16:9)**: `public/assets/video/lp2-share-hero-16x9.mp4`
- **Hero poster (16:9)**: `public/assets/posters/lp2-share-hero.jpg`

### C) Recommended additions (not yet wired)
If you generate these now, we can wire them in once ready:
- Per-variant hero videos/posters:
  - `public/assets/video/lp-video-hero-16x9.mp4`
  - `public/assets/video/lp-scan-hero-16x9.mp4`
  - `public/assets/video/lp-generate-hero-16x9.mp4`
  - (and matching posters under `public/assets/posters/`)

---

## 3) Source → runtime mapping (how to export for web)

You can keep producing in `/marketing/...` (as the library), then export/copy into `/public/...` for deployment.

### A) Suggested mapping table

| Web page | Best capture(s) (source) | Library output (example) | Runtime filename |
|---------|---------------------------|--------------------------|------------------|
| `/` hero | `CAP_03` → `CAP_03B` → `CAP_11` | `marketing/landing/proof/lp_home_hero_16x9.mp4` | `public/assets/video/lp1-save-hero-16x9.mp4` |
| `/` poster | still from hero video | `marketing/landing/proof/lp_home_hero_poster.jpg` | `public/assets/posters/lp1-save-hero.jpg` |
| `/lp/video` hero | `CAP_12` (+ attribution moment) | `marketing/landing/proof/lp_video_proof_16x9.mp4` | (optional) `public/assets/video/lp-video-hero-16x9.mp4` |
| `/lp/scan` hero | `CAP_17` → `CAP_18` | `marketing/landing/proof/lp_scan_proof_16x9.mp4` | (optional) `public/assets/video/lp-scan-hero-16x9.mp4` |
| `/lp/generate` hero | `CAP_20` → `CAP_10` | `marketing/landing/proof/lp_generate_proof_16x9.mp4` | (optional) `public/assets/video/lp-generate-hero-16x9.mp4` |
| `/lp/share` hero | `CAP_04` → `CAP_04B` | `marketing/landing/proof/lp_share_proof_16x9.mp4` | `public/assets/video/lp2-share-hero-16x9.mp4` |

**Note:** Your docs’ “Master Capture Map” already defines which CAPs power each landing variant. This table is just the runtime glue.

---

## 4) Web encoding specs (performance + quality)

### A) Videos (MP4)
- **Codec**: H.264
- **Resolution**: 1920×1080 preferred (or 1600×900)
- **Aspect**: 16:9 for website hero
- **Duration**: 10–20s loop
- **Audio**: none (muted)
- **Target size**: ≤ 6–10MB per hero video
- **Bitrate guidance**: 6–12 Mbps (depends on UI readability)

### B) Posters (JPG)
- **Dimensions**: 1920×1080 (or 1600×900)
- **Quality**: ~75–85
- **Goal**: crisp text in UI, balanced contrast, no muddy gradients

### C) Screenshots for feature sections
- Prefer **WebP** for photos/illustrations when possible
- Prefer **PNG** for UI screenshots where text sharpness matters

---

## 5) “Cozy/heritage” web visual system (what to capture/produce)

For web, the best “world-class” assets are not 23 random screenshots — it’s a small set of **hero moments** + **proof moments**.

### A) Web-first priority list (minimum that makes pages feel premium)
1. **Share → Heirloom → saved** (captures: `CAP_03`, `CAP_03B`, `CAP_11`)
2. **Video import result with attribution** (`CAP_12`, `CAP_13`)
3. **Scan UI + scan result** (`CAP_17`, `CAP_18`)
4. **Generator input + generated recipe badge** (`CAP_20`, `CAP_10`)
5. **Privacy pills** (`CAP_05`)
6. **Share/accept flow** (`CAP_04`, `CAP_04B`)
7. **Voice** (if feature is ready): `CAP_V_VOICE_ENTRY`, `CAP_V_VOICE_RECORDING`, `CAP_V_VOICE_RESULT`

### B) Heritage b‑roll (optional but high impact)
From `05-video-creative-production.md` Role 1 prompts:
- hands holding old handwritten recipe card
- flipping cookbook pages
- writing on a recipe card

Use this b‑roll behind/around UI (subtle) to sell “heirloom” without feeling like a stock ad.

---

## 6) OG images & favicon (web + App Store links)

Recommended minimum:
- **OG default**: 1200×630 PNG/JPG (warm background + logo + tagline + subtle UI)
- **Variant OGs** (optional): one per `/lp/*`
- **Favicon source**: 1024×1024 (we derive sizes)

**Status:** not wired to a formal OG asset pipeline yet. We can add:
- `public/og/default.png`
- `public/og/lp-video.png`, etc.

---

## 7) Pricing capture alignment (source of truth)

Your creative docs include pricing references (e.g., `CAP_21_PREMIUM_PAYWALL.png` and pricing table in `04-manual-tasks-and-creative.md`).

**Source of truth:** `PREMIUM_FEATURES_AND_TRIAL_UPSELLSv2.md` (v2.1, Feb 2026)

- Monthly: **$4.99/month** (7‑day trial)
- Annual: **$29.99/year** (14‑day trial)
- Lifetime: **$99 once**
- Daily credits: **25/day**
- Credit packs: **$5 for 25** and **$15 for 100**

**Action:** ensure:
- `CAP_21` (paywall capture) matches the above pricing
- website pricing section matches the above pricing
- any on-site credit pack mentions match $5/25 and $15/100

**Owner:** web + app store copy must stay in sync with the monetization doc above.

