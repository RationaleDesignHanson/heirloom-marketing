# Web Asset Manifest (Website Runtime)

**Last updated:** Feb 6, 2026  
**Source:** `instructions/06-web-creative-appendix.md`  
**How to use:** When you deliver an asset, place it at the **exact Runtime path** below. Then run `npm run audit:assets` to verify file presence + basic constraints.

## Status legend
- `needed`: not delivered yet
- `delivered`: file exists in `public/` (awaiting audit)
- `approved`: audited + looks good, safe to ship
- `revise`: delivered but needs a fix (size, crop, readability, etc.)

## A) Hero videos + posters (critical)

| ID | Route | Moment | CAP source | Runtime path | Format | Target | Status |
|---:|---|---|---|---|---|---|---|
| H1V | `/` | Share → Heirloom → saved (hero loop) | `CAP_03 → CAP_03B → CAP_11` | `public/assets/video/lp1-save-hero-16x9.mp4` | MP4 (H.264) | 16:9, 10–20s, muted, ≤10MB | needed |
| H1P | `/` | Poster still for hero | still from H1V | `public/assets/posters/lp1-save-hero.jpg` | JPG | 1920×1080 (or 1600×900), Q 75–85 | needed |
| H2V | `/lp/share` | Share/accept flow (hero loop) | `CAP_04 → CAP_04B` | `public/assets/video/lp2-share-hero-16x9.mp4` | MP4 (H.264) | 16:9, 10–20s, muted, ≤10MB | needed |
| H2P | `/lp/share` | Poster still for hero | still from H2V | `public/assets/posters/lp2-share-hero.jpg` | JPG | 1920×1080 (or 1600×900), Q 75–85 | needed |

## B) Per-variant hero videos + posters (recommended)

| ID | Route | Moment | CAP source | Runtime path | Format | Target | Status |
|---:|---|---|---|---|---|---|---|
| HVV | `/lp/video` | Video import result + attribution | `CAP_12 (+ CAP_13)` | `public/assets/video/lp-video-hero-16x9.mp4` | MP4 (H.264) | 16:9, 10–20s, muted, ≤10MB | needed |
| HVP | `/lp/video` | Poster still for hero | still from HVV | `public/assets/posters/lp-video-hero.jpg` | JPG | 1920×1080 (or 1600×900) | needed |
| HSV | `/lp/scan` | Scan UI + scan result | `CAP_17 → CAP_18` | `public/assets/video/lp-scan-hero-16x9.mp4` | MP4 (H.264) | 16:9, 10–20s, muted, ≤10MB | needed |
| HSP | `/lp/scan` | Poster still for hero | still from HSV | `public/assets/posters/lp-scan-hero.jpg` | JPG | 1920×1080 (or 1600×900) | needed |
| HGV | `/lp/generate` | Generator input → generated recipe badge | `CAP_20 → CAP_10` | `public/assets/video/lp-generate-hero-16x9.mp4` | MP4 (H.264) | 16:9, 10–20s, muted, ≤10MB | needed |
| HGP | `/lp/generate` | Poster still for hero | still from HGV | `public/assets/posters/lp-generate-hero.jpg` | JPG | 1920×1080 (or 1600×900) | needed |

## C) Key screenshots (proof moments)

**Note:** these aren’t wired everywhere yet; we’ll use them to upgrade feature sections + social proof once delivered.

| ID | CAP | What it proves | Runtime path (proposed) | Format | Target | Status |
|---:|---|---|---|---|---|---|
| S05 | `CAP_05` | Privacy pills / ownership | `public/assets/screens/cap_05_privacy_pills.png` | PNG | UI text crisp; no personal data | needed |
| S12 | `CAP_12` | Video import result | `public/assets/screens/cap_12_video_result.png` | PNG | attribution visible | needed |
| S13 | `CAP_13` | Attribution detail | `public/assets/screens/cap_13_attribution.png` | PNG | clean + legible | needed |
| S17 | `CAP_17` | Scan UI | `public/assets/screens/cap_17_scan_ui.png` | PNG | legible | needed |
| S18 | `CAP_18` | Scan result | `public/assets/screens/cap_18_scan_result.png` | PNG | legible | needed |
| S20 | `CAP_20` | Generator input | `public/assets/screens/cap_20_generate_input.png` | PNG | legible | needed |
| S10 | `CAP_10` | Generated recipe result | `public/assets/screens/cap_10_generate_result.png` | PNG | badge visible | needed |
| S03 | `CAP_03` | Share to Heirloom entry point | `public/assets/screens/cap_03_share_to_heirloom.png` | PNG | legible | needed |
| S03B | `CAP_03B` | Share flow continuation | `public/assets/screens/cap_03b_share_flow.png` | PNG | legible | needed |
| S11 | `CAP_11` | Saved recipe card | `public/assets/screens/cap_11_saved_recipe.png` | PNG | clean recipe card | needed |
| S04 | `CAP_04` | Direct share | `public/assets/screens/cap_04_share.png` | PNG | legible | needed |
| S04B | `CAP_04B` | Accept share | `public/assets/screens/cap_04b_accept.png` | PNG | legible | needed |

## D) OG + favicon sources

| ID | Use | Runtime path | Format | Target | Status |
|---:|---|---|---|---|---|
| OG0 | Default OG | `public/og/default.png` | PNG | 1200×630 | needed |
| OGV | OG `/lp/video` | `public/og/lp-video.png` | PNG | 1200×630 | needed |
| OGS | OG `/lp/scan` | `public/og/lp-scan.png` | PNG | 1200×630 | needed |
| OGG | OG `/lp/generate` | `public/og/lp-generate.png` | PNG | 1200×630 | needed |
| OGH | OG `/lp/share` | `public/og/lp-share.png` | PNG | 1200×630 | needed |
| ICO | Favicon source | `public/brand/icon-1024.png` | PNG | 1024×1024 | needed |

