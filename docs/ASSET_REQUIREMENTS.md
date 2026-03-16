# Heirloom Marketing Site — Asset Requirements

Production checklist for videos, screenshots, posters, and other assets. Use this to plan captures and screen recordings.

**Asset swap:** After capturing, drop files in `./captures/` named by REC_* ID (e.g. `REC_VIDEO_IMPORT.png`) and run `npm run swap-assets -- ./captures/`. See `scripts/asset-mapping.json` for the full mapping.

---

## REC_* Cross-Reference (Simulator Capture PDF)

Map from `heirloom_simulator_captures.pdf` asset IDs to marketing paths. Use these names when saving captures.

| REC_* ID | Marketing Path | Story Beat |
|----------|----------------|------------|
| REC_VIDEO_IMPORT | `cap_12_video_result.png` | Capture |
| REC_COOKBOOK_SCAN | `cap_18_scan_result.png` | Capture |
| REC_CARD_LOVEMARKS | `cap_18_scan_result.png` | Capture (post-scan) |
| REC_IMPORT_OPTIONS | `cap_import_sheet.png` | Capture |
| REC_RECIPE_CARD | `cap_11_saved_recipe.png` | Preserve |
| REC_KITCHEN_TABLE | `cap_kt_table_view.png` | Share |
| REC_DISCOVERY | `cap_disc_packs.png` | Discover |
| REC_VOICE_DICTATION | `reada.png` | Capture |
| REC_SHOPPING_LIST | `cap_kt_table_events.png` | Share |
| REC_ASMR_RESULT | `cap_asmr_result.png` | Capture |
| REC_MULTILINGUAL | `cap_multilingual.png` | Preserve |
| REC_LINEAGE_TREE | `cap_lineage_tree.png` | Preserve |
| REC_COLLECTION_OVERVIEW | `cap_collection.png` | Preserve |
| REC_CARD_STYLE | `cap_card_style.png` | Personalize |
| REC_THEME_PACK_OPEN | `cap_disc_pack_detail.png` | Discover |

**Videos:** Preview1_S03 → `lp-video-hero`, Preview1_S04 → `read`, Preview3_S03 → `lp-discovery-hero`, etc.

---

## Videos (Screen Recordings)

Portrait 9:16, 15–30 seconds. Record on iPhone in Heirloom app or share flow.

| Path | Aspect | Duration | Capture | Page |
|------|--------|----------|---------|------|
| `public/assets/video/lp-heritage-hero-16x9.mp4` | 9:16 | 15–30s | Preserving family recipe flow; scan or save | Home |
| `public/assets/video/CardCapture.mp4` | 9:16 | 10–20s | Share from Safari to Heirloom | How it works |
| `public/assets/video/lp-video-hero-16x9.mp4` | 9:16 | 15–30s | Video import → recipe card | Video LP |
| `public/assets/video/read.mp4` | 9:16 | 15–30s | Cookbook scan or voice dictation | Scan LP |
| `public/assets/video/lp-PDF-hero-16x9.mp4` | 9:16 | 15–30s | PDF import flow | PDF LP |
| `public/assets/video/lp-generate-hero-16x9.mp4` | 9:16 | 15–30s | AI generate → recipe | Generate LP |
| `public/assets/video/lp2-share-hero-16x9.mp4` | 9:16 | 15–30s | Share/Kitchen Table flow | Share LP |
| `public/assets/video/lp1-save-hero-16x9.mp4` | 9:16 | 15–30s | Generic save flow | Community, Tech, About |
| `public/assets/video/lp-discovery-hero-16x9.mp4` | 9:16 | 15–30s | **NEW** Browse Theme Packs, save recipe | Discovery |

---

## Posters (JPG)

One poster per hero video — same aspect (9:16). Export first or key frame from video, or screenshot.

| Path | Source | Page |
|------|--------|------|
| `public/assets/posters/lp-heritage-hero.jpg` | From lp-heritage-hero video | Home |
| `public/assets/posters/card-capture-hero.jpg` | From CardCapture video | How it works |
| `public/assets/posters/lp-video-hero.jpg` | From lp-video-hero video | Video LP |
| `public/assets/posters/read-hero.jpg` | From read video | Scan LP |
| `public/assets/posters/lp-pdf-hero.jpg` | From lp-PDF-hero video | PDF LP |
| `public/assets/posters/lp-generate-hero.jpg` | From lp-generate-hero video | Generate LP |
| `public/assets/posters/lp2-share-hero.jpg` | From lp2-share-hero video | Share LP |
| `public/assets/posters/lp1-save-hero.jpg` | From lp1-save-hero video | Community, etc. |
| `public/assets/posters/lp-discovery-hero.jpg` | **NEW** From lp-discovery-hero video | Discovery |

---

## Screenshots (App Captures)

Portrait iPhone screens (9:19.5 or 9:16). Save to `public/assets/screens/`.

| Path | Capture | Page |
|------|---------|------|
| `cap_03_share_to_heirloom.png` | Share sheet → Heirloom option | Home, How it works |
| `cap_03b_share_flow.png` | Share flow in progress | Video LP, PDF LP, Generate LP |
| `cap_04_share.png` | 1:1 share UI | Home, Share LP |
| `cap_04_shareb.png` | Share link UI | Share LP |
| `cap_04b_accept.png` | Accept recipe screen | Share LP |
| `cap_05_privacy_pills.png` | Privacy/visibility UI | Scan LP |
| `cap_10_gen_read.png` | AI generate prompt/input | How it works, Generate LP |
| `cap_10_generate_result.png` | AI-generated recipe result | How it works, Generate LP |
| `cap_11_saved_recipe.png` | Saved recipe card | Scan, PDF, Generate LP |
| `cap_12_video_result.png` | Video import result | Home, How it works, Video LP |
| `cap_13_attribution.png` | Recipe attribution/source | Home, How it works, Video LP |
| `cap_18_scan_result.png` | Scan/cookbook result | Home, How it works, Scan LP, PDF LP |
| `reada.png` | Voice/read flow (before) | Home, How it works, Generate LP |
| `readb.png` | Voice/read flow (after) | Home, How it works, Generate LP |
| `cap_kt_table_view.png` | **NEW** Kitchen Table shared view | Share LP |
| `cap_kt_table_events.png` | **NEW** Table Events / shopping list | Share LP |
| `cap_kt_invite.png` | **NEW** Invite to Table flow | Share LP |
| `cap_disc_packs.png` | **NEW** Discovery Theme Packs list | Discovery |
| `cap_disc_pack_detail.png` | **NEW** Single pack / recipe browse | Discovery |

---

## Brand, OG, Backgrounds

| Path | Spec | Capture |
|------|------|---------|
| `public/brand/icon-64.png` | 64×64 PNG | Export from app icon |
| `public/brand/icon-1024.png` | 1024×1024 PNG | App Store asset |
| `public/og/default.png` | 1200×630 | Composited hero for social share |
| `public/assets/bg/landing-hero.png` | Full-bleed background | Photo or gradient |
| `public/assets/bg/screenshot-frame.png` | Phone frame mask | Design asset |
| `public/assets/press/presskit-header.png` | Press hero | Brand composited |

---

## Demo (Optional)

For `/demo/recipe` page.

| Path | Spec | Capture |
|------|------|---------|
| `public/assets/demo/cookies-hero.jpg` | Recipe/food photo | Photo |
| `public/assets/demo/cookies-closeup.jpg` | Food closeup | Photo |
| `public/assets/demo/cookies-baking.jpg` | Cooking-in-progress | Photo |
