# Heirloom Feature Definition Guide
**Version 2.0.0 (Build 60+)**
**Last Updated**: February 2026
**Purpose**: Marketing foundation document for landing pages, App Store creative, and video scripts

**MAJOR UPDATE**: This version documents significant new features including Public Recipe Discovery, enhanced lineage with contributor profiles, full data export/import, direct recipe sharing to connections, and comprehensive accessibility improvements.

---

## Executive Summary

Heirloom is a **one-tap recipe manager with a thriving community** built around the Share Extension—the simplest way to save recipes. No copying URLs, no breaking your flow. Just tap Share → Heirloom while browsing your camera roll, files, notes, or Safari, and your recipe imports in the background. No friction, no context switching, no manual data entry.

**New in 2.0**: Share your recipes with the Heirloom community, discover thousands of recipes from other home cooks, track recipe lineage with contributor profiles, export your entire collection with full social data, and share recipes directly with your connections.

---

## What's New in Version 2.0

**February 2026 - Major Community Update**

Heirloom 2.0 transforms from a personal recipe manager into a **community-powered platform** while keeping the core "one-tap" philosophy. Here's what's new:

### 🌐 Public Recipe Discovery
- **Browse community recipes**: Trending, New, and Popular feeds
- **Search thousands of recipes** from real home cooks
- **Publish your recipes** to the community
- **Save discoveries** to your personal collection
- **Attribution system**: Every recipe credits its creator
- **Safety first**: Report system and auto-moderation

### 👥 Enhanced Social Features
- **Direct sharing**: Share recipes to specific connections (not just links)
- **Share analytics**: See who accepted your recipes
- **Connection requests**: Find users by name, send requests
- **User search**: Discover who's already on Heirloom

### 🌳 Contributor Profiles in Lineage
- **See who contributed** each recipe version
- **Profile integration**: Tap contributors to view their profile
- **Connection status**: Green checkmark for connected contributors
- **Legacy support**: Handles pre-2.0 contributors gracefully

### 📦 Full Data Portability
- **Export everything**: Recipes + profile + connections + privacy settings
- **Two export modes**: Full backup or recipes-only
- **Import with preview**: See what will be imported before confirming
- **Connection restoration**: Attempts to reconnect with friends
- **GDPR compliant**: Right to data portability

### 🎨 Enhanced Personalization
- **Card back flip**: Swipe to flip recipe cards
- **Notes and photos**: Add multiple photos and freeform notes on card back
- **Cooking modifications**: Track how you've adapted recipes
- **3D animations**: Smooth flip transitions

### ♿ Accessibility Excellence
- **WCAG 2.1 Level AA**: Industry-leading accessibility
- **Full VoiceOver support**: Every feature accessible
- **Dynamic Type**: Text scales to largest sizes
- **Color contrast**: Exceeds standards (>4.5:1 for text)

### 🎨 Design System Overhaul
- New components: AsyncBlurhashImage, CoachMarkView, ToastView
- Enhanced UI feedback and loading states
- Consistent typography and spacing
- Improved empty states and error handling

---

### Core Philosophy

**Import recipes the way you actually find them.**

People don't search for "recipe managers" and then go hunting for recipes. They browse food blogs, TikTok, Instagram, Pinterest—and when they find something they want to make, they need to save it *right now* without disrupting their flow. That's why Heirloom is built around the Share Extension first, with every other feature supporting that core experience.

### Marketing Position

**"The recipe app that gets out of your way—and brings cooks together"**

- **Hero Feature**: Share Extension (one-tap import from Safari)
- **Target User**: Home cooks who browse recipes online, want to share with family, and discover new favorites
- **Key Differentiators**:
  - Frictionless acquisition via Share Extension + AI-powered organization
  - **Public Recipe Discovery** - Join a community of home cooks
  - **Family Lineage Tracking** - See recipe evolution across generations with contributor profiles
  - **Direct Sharing** - Share recipes with your connections, not just links
- **Value Prop**: Save recipes as fast as you find them, discover favorites from the community, share with family, and preserve your culinary heritage

---

## Part 1: The Heirloom Way (Share Extension First)

### 1.1 The Share Extension — Your Gateway to Heirloom

**One-Line**: One tap to save any recipe you find online—no copy/paste, no apps switching, no friction.

#### The Problem We Solve

Traditional recipe apps make you:
1. Copy the URL
2. Switch to the recipe app
3. Paste the URL
4. Wait for import
5. Switch back to browsing

**That's 5 steps and 2 app switches** just to save one recipe.

#### The Heirloom Solution

1. Tap Share → Heirloom

**That's it.** The recipe imports in the background while you keep browsing. Find 10 recipes across 5 websites? That's 10 taps, zero context switches, zero copy/paste.

#### What the Share Extension Handles

**Supported Content Types** (all import automatically):
- 🌐 **Recipe URLs** — Any website with structured recipe data (from Safari)
- 📹 **Recipe Videos** — Videos saved to camera roll (TikTok, Instagram, YouTube)
- 📄 **PDFs** — Cookbooks, recipe cards, scanned pages (from Files or Photos)
- 📷 **Images** — Photos of cookbook pages, handwritten recipes (from Camera or Photos)
- 📝 **Notes** — Multiple URLs from Notes app, plain text recipes, mixed content

**Technical Magic Behind the Scenes**:
- URL normalization (handles redirects, affiliate links, tracking parameters)
- Multi-platform video support (TikTok, Instagram, YouTube, Vimeo)
- OCR for images and PDFs (Apple Vision framework)
- Audio transcription for videos (WhisperKit on-device)
- Multi-recipe detection (automatically splits bulk imports)
- Background processing (continues even if you close the extension)

#### User Experience Flow

**From Safari**:
```
1. Browsing Bon Appétit → Find interesting pasta recipe
2. Tap Safari Share button
3. Tap "Heirloom" in share sheet
4. See "Importing recipe..." confirmation (1 second)
5. Done — continue browsing

Later: Open Heirloom → Recipe is ready with image, ingredients parsed, instructions formatted
```

**From TikTok/Instagram (via Camera Roll)**:
```
1. Watching cooking video → "I should make this"
2. Save video to camera roll (TikTok: press and hold → Save Video)
3. Open Photos app → Find the video
4. Tap Share button → Tap "Heirloom"
5. See "Processing video..." (transcribing audio)
6. Done — continue browsing

Later: Open Heirloom → Full recipe extracted from video
```

**From Notes**:
```
1. Saved 5 recipe URLs in a "Recipes to Try" note
2. Tap Share button on the note
3. Tap "Heirloom"
4. See "Importing 5 recipes..." progress bar
5. Done

Later: Open Heirloom → All 5 recipes imported and organized
```

#### Marketing Message Framework

**Primary Headline Options**:
- "Save recipes as fast as you find them"
- "One tap to save any recipe—no copy/paste required"
- "The recipe app that gets out of your way"
- "Import recipes the way you actually browse"

**Supporting Copy**:
- "Browsing food blogs? Just tap Share. The recipe imports while you keep scrolling."
- "Works with any website URL, saved videos, PDFs, even handwritten recipes."
- "No more copying URLs or switching between apps. Just share and move on."

**Visual Storytelling** (for video scripts):
1. Show user scrolling Safari on phone
2. They find a recipe they like
3. Tap Share button
4. Tap "Heirloom"
5. Brief confirmation appears
6. Continue scrolling (recipe importing in background)
7. Cut to later: Open Heirloom app
8. Recipe is fully formatted with ingredients, photo, instructions

**Key Metric for Ads**:
- "Import recipes in 1 tap (vs 5 steps in other apps)"

---

### 1.2 Sign In (Frictionless Onboarding)

**One-Line**: Sign in with Apple or Google—no email, no password, no friction.

#### Why This Matters for Acquisition

Your Share Extension is your best acquisition channel, but only if onboarding doesn't kill momentum. When someone shares a recipe to Heirloom for the first time:

1. They don't have the app yet (App Store redirect)
2. They install it
3. They open it
4. **They need to sign in**

If sign-in requires email + password creation, you lose them. That's why Heirloom uses **Sign in with Apple** and **Sign in with Google**—one tap authentication that matches the Share Extension's zero-friction philosophy.

#### User Experience

**First-Time User Flow** (from Share Extension):
```
1. User shares recipe from Safari (doesn't have Heirloom yet)
2. Share sheet shows "Heirloom" but redirects to App Store
3. User installs Heirloom
4. Opens app → See sign-in screen
5. Tap "Sign in with Apple" (Face ID confirmation)
6. Done — immediately syncs pending recipe they just shared

Total time: ~30 seconds from Share tap to recipe imported
```

**Returning User** (signed in previously):
- App automatically signs them in on launch
- No password prompts, no re-authentication
- Pending Share Extension imports sync immediately

#### Technical Details

- **Sign in with Apple**: Primary option, most iOS users have this
- **Sign in with Google**: Fallback for Android users switching to iOS
- **Anonymous Mode**: Not supported (cloud sync requires authentication)
- **Email/Password**: Not supported (too much friction for Share Extension flow)

#### Marketing Angle

This isn't a feature—it's **friction removal**. Don't sell sign-in, sell the fact that **from Share tap to imported recipe takes 30 seconds**, even for new users. The sign-in is invisible.

---

## Part 2: Recipe Acquisition (Beyond Share Extension)

The Share Extension is your primary acquisition method, but Heirloom supports multiple entry points for different use cases.

### 2.1 Bulk Import Tool (For Migration)

**One-Line**: Import your entire collection from another app—paste 50 URLs, get 50 recipes.

#### When Users Need This

**Scenario 1: Switching Apps**
- User has 100+ recipes saved in Paprika, Whisk, Apple Notes
- Doesn't want to manually re-add them one by one
- Solution: Copy all URLs → Bulk Import → Heirloom processes them all

**Scenario 2: Recipe Hoarder Session**
- Spent an hour browsing Pinterest/Instagram
- Saved 20+ recipe links to Notes
- Solution: Paste all URLs at once → Bulk Import processes overnight

#### User Experience

```
1. Open Heirloom → Tap "+" button → "Bulk Import"
2. Paste 50 URLs (newline or comma separated)
3. Tap "Import All"
4. See progress screen: "Importing 50 recipes... 12/50 complete"
5. Can pause/resume import job
6. Get notification when complete

Result: 50 recipes imported with images, ingredients parsed, instructions formatted
```

#### Technical Details

- **Background Processing**: Uses ImportJobManager for reliable processing
- **Pause/Resume**: Can pause overnight, resume in morning
- **Error Handling**: Shows which URLs failed, allows retry
- **Progress Tracking**: Real-time progress bar with item counts
- **URL Normalization**: Handles affiliate links, redirects, tracking params

#### Marketing Angle

This is a **conversion tool**, not a primary feature. When targeting users switching from competitors, highlight:
- "Switching from [Paprika/Whisk/Etc.]? Import your entire collection in one paste."
- Show before/after: "100 URLs in Notes" → "100 recipes in Heirloom"

### 2.2 Camera Scanning (OCR for Cookbooks)

**One-Line**: Photograph cookbook pages—AI extracts the recipe instantly.

#### When Users Need This

- **Mom's handwritten recipe cards** → Photo → Digitized
- **Old cookbooks** → Photo → Typed ingredients and instructions
- **Recipe clippings from magazines** → Photo → Structured recipe

#### User Experience

```
1. Open Heirloom → Tap "+" → "Scan Recipe"
2. Camera opens → Photograph recipe page
3. AI processes image (takes 5-10 seconds)
4. Shows extracted recipe with ingredients parsed
5. User can edit before saving
6. Image saved as reference photo

Multi-Recipe Detection:
- If page has multiple recipes, AI splits them automatically
- User sees selection screen: "Found 3 recipes on this page. Select which to import."
- Can import all or cherry-pick
```

#### Technical Details

- **OCR Engine**: Apple Vision framework (on-device, private)
- **Multi-Recipe Detection**: Automatically detects multiple recipes on one page
- **Smart Parsing**: Recognizes ingredient lists vs instructions vs notes
- **Image Retention**: Original photo saved for reference
- **Works Offline**: OCR runs entirely on-device

#### Marketing Angle

Position this as **heritage preservation**:
- "Don't let family recipes fade with time—digitize them in seconds"
- Show emotional story: Grandma's recipe card → Photo → Forever preserved
- Target audience: People with inherited cookbooks, family recipe collections

### 2.3 Video-to-Recipe (TikTok, Instagram, YouTube)

**One-Line**: Watch a cooking video, get a typed recipe—no manual transcription.

#### How It Works (User Perspective)

**From Share Extension via Camera Roll** (Primary Method):
```
1. Watching TikTok cooking video → Save to camera roll
   (TikTok: press and hold → "Save Video")
2. Open Photos app → Find the video
3. Tap Share → Heirloom
4. Extension shows "Processing video... transcribing audio"
5. Done in 10-20 seconds
6. Later: Open Heirloom → Full recipe extracted
```

**From Within Heirloom** (Alternative Method for URLs):
```
1. Open Heirloom → Tap "+" → "Import from Video"
2. Paste TikTok/Instagram/YouTube URL (if you have the link)
3. App downloads video, transcribes audio
4. Shows extracted recipe for review
5. User can edit before saving
```

**Note**: Most users discover videos while scrolling social media and save them to camera roll, then use Share Extension from Photos. The URL method is useful if someone sends you a recipe video link via text/email.

#### Technical Magic

1. **Audio Extraction**: Downloads video, strips audio track
2. **Transcription**: WhisperKit (on-device, private) converts speech → text
3. **Recipe Extraction**: AI identifies ingredients, instructions, times, temps
4. **Structured Output**: Formats as proper recipe (not just transcript)

**Supported Platforms**:
- TikTok (direct links)
- Instagram Reels (requires login in some cases)
- YouTube videos and Shorts
- Direct video file uploads (.mp4, .mov)

#### User Experience Details

**Progress Indicators**:
```
Step 1: "Downloading video..." (5-10 seconds)
Step 2: "Transcribing audio..." (10-30 seconds depending on length)
Step 3: "Extracting recipe..." (5 seconds)
Total time: 20-45 seconds for most videos
```

**Quality Expectations**:
- **Best**: Clear narration of ingredients and steps (cooking tutorials)
- **Good**: Casual cooking videos where creator talks through process
- **Poor**: Music-only videos, videos in other languages, silent cooking montages

**Error Handling**:
- If no recipe found in transcript, show transcript for manual extraction
- If video is private/unavailable, show clear error message
- If audio quality is poor, show confidence warning

#### ASMR/Vision Mode (Silent Videos) - **NEW**

**One-Line**: No audio? No problem—Heirloom extracts recipes by watching the video.

Some cooking videos have no usable audio:
- ASMR cooking (just sounds, no narration)
- Music-only videos (TikTok trends)
- Foreign language videos
- Videos with poor audio quality

**How ASMR Mode Works**:
```
1. Heirloom analyzes video → Detects no usable speech
2. Falls back to "ASMR Mode" (vision-based extraction)
3. Samples frames throughout the video
4. Sends frames to Claude Vision API
5. AI identifies:
   - On-screen text (ingredient lists, titles)
   - Visible ingredients (by appearance)
   - Cooking techniques (by watching actions)
6. Generates recipe from visual analysis
```

**Technical Details**:
- Uses Claude Vision API (cloud-based)
- Costs 5 credits (vs 1 credit for audio mode)
- 5-pass extraction for accuracy
- Frame sampling at key moments
- OCR for on-screen text overlays

**User Experience**:
```
User shares silent cooking video
  ↓
Credit confirmation: "Extraction method: ASMR (Vision AI) - 5 credits"
  ↓
Processing: "Analyzing video frames..."
  ↓
Recipe extracted from visual content
```

#### Marketing Angle

This is a **wow factor feature** that demonstrates AI capability:
- "Saw a recipe on TikTok? Save it to your camera roll, share to Heirloom—get the full typed recipe."
- Show side-by-side: Video in camera roll → Share → Recipe appears
- Target audience: Gen Z/Millennial users who discover recipes on social media

**Ad Concept**:
```
Video Script:
[Scene: User scrolling TikTok, sees pasta recipe video]
User: "Oh that looks good"
[Press and hold → "Save Video"]
[Opens Photos app → Finds video]
[Taps Share → Heirloom]
[See "Processing video..." confirmation]
[Cut to later: User in kitchen with phone showing recipe]
[Full ingredients list, instructions, no need to rewatch video]
Text overlay: "From your camera roll to your kitchen—typed recipes from any video"
```

### 2.4 Voice Recipe Entry (Speak or Read Aloud) - **UPDATED**

**One-Line**: Speak a recipe aloud—AI transcribes and structures it into a complete recipe card.

#### When Users Need This

- Family member dictating a recipe from memory
- Reading a recipe aloud from a physical cookbook
- Quick capture when your hands are messy
- Recording a recipe during a cooking demonstration
- No digital source available (friend's recipe, restaurant dish recreation)

#### How It Works

**Voice Entry Flow**:
```
1. Tap "+" → "Speak Recipe"
2. Recording mode activates (microphone icon)
3. Speak or read recipe aloud:
   - "Grandma's Chocolate Chip Cookies. You'll need
     two cups flour, one cup butter, half cup sugar..."
4. Tap "Done" when finished
5. AI processes audio:
   - WhisperKit transcription (on-device, private)
   - Claude extracts structured recipe
6. Preview shows:
   - Parsed title
   - Structured ingredients
   - Numbered instructions
   - Time estimates (if mentioned)
7. Edit if needed → Save
```

**What AI Extracts**:
- Recipe title (from context or first phrase)
- Ingredients with quantities (parsed from natural speech)
- Instructions (separated into steps)
- Cook/prep times (if mentioned)
- Serving size (if mentioned)

#### User Experience Details

**Recording Screen**:
```
╔══════════════════════════════════════╗
║       🎙️ Speak Your Recipe          ║
╠══════════════════════════════════════╣
║                                      ║
║           ●  Recording...            ║
║         [     ▓▓▓▓▓▓     ]          ║
║            0:45 / 5:00               ║
║                                      ║
║  Tip: Speak naturally. Start with   ║
║  the recipe name, then ingredients,  ║
║  then instructions.                  ║
║                                      ║
║         [   Done   ]                ║
║           Cancel                     ║
╚══════════════════════════════════════╝
```

**Example Natural Speech**:
```
"This is Mom's Famous Meatloaf. You need about
two pounds of ground beef, one egg, half a cup
of breadcrumbs, some ketchup—maybe a quarter cup,
and salt and pepper to taste.

Mix everything together in a big bowl, form it
into a loaf shape, and put it in a baking dish.
Bake at 350 for about an hour. Let it rest for
ten minutes before slicing."
```

**AI Output**:
```
Title: Mom's Famous Meatloaf

Ingredients:
• 2 lbs ground beef
• 1 egg
• ½ cup breadcrumbs
• ¼ cup ketchup
• Salt and pepper to taste

Instructions:
1. Mix everything together in a large bowl
2. Form mixture into a loaf shape
3. Place in baking dish
4. Bake at 350°F for 1 hour
5. Let rest 10 minutes before slicing

Cook Time: 1 hour
```

#### Technical Details

- **Transcription**: WhisperKit (on-device, private)
- **Recipe Extraction**: Claude API structures natural language
- **Max Recording**: 5 minutes (covers most recipes)
- **Audio Quality**: Works with background noise, accents
- **Offline**: Transcription works offline; structuring requires network

#### Manual Entry Fallback

For users who prefer typing:
```
1. Tap "+" → "Create Recipe"
2. Fill in fields:
   - Recipe name (required)
   - Ingredients (freeform text, AI parses quantities)
   - Instructions (freeform text, AI splits into steps)
   - Cook time, prep time, servings (optional)
   - Photo (optional, from camera or library)
3. Save
```

#### Marketing Angle

This is a **unique differentiator**:
- "Grandma can't text recipes? Let her speak them—Heirloom transcribes"
- "Read recipes aloud from cookbooks—get structured recipe cards"
- "Hands messy? Just speak—voice to recipe in seconds"

**User Story**:
```
"My aunt has all these amazing recipes in her head but
she's not tech savvy. I just had her talk me through
her famous enchiladas while Heirloom recorded. Now I
have the exact recipe, properly structured, forever."
```

### 2.5 PDF Cookbook Import (Multi-Page Pipeline) - **NEW**

**One-Line**: Import entire PDF cookbooks—Heirloom extracts every recipe, preserves author attribution, and optionally generates AI images.

#### The Problem This Solves

You have digital cookbooks sitting in your Files app:
- Downloaded PDFs from food blogs
- Scanned family cookbook pages
- Recipe compilation PDFs from meal subscription services
- E-book cookbooks purchased online

Traditional approach: Open PDF, manually copy each recipe one at a time. Tedious for a 100-page cookbook.

Heirloom approach: Share the PDF → All recipes extracted automatically with credits-based pricing.

#### How It Works

**PDF Import Flow**:
```
1. User shares PDF from Files app (or any app) → Heirloom Share Extension
2. Heirloom analyzes PDF:
   - Page count
   - Text extraction quality (text-rich vs scanned)
   - Estimated recipe count
3. Cost Confirmation Sheet appears:
   - PDF type classification
   - Credit cost (1-5 credits based on type)
   - AI image generation toggle
   - Current quota remaining
4. User confirms → Import begins
5. Progress: "Extracting recipes... 12/50 complete"
6. If AI images enabled: "Generating images... 8/50 complete"
7. Done → All recipes in collection with author attribution
```

#### PDF Type Classification & Credits

| PDF Type | Credit Cost | Detection Method |
|----------|-------------|------------------|
| **Text-rich** | 1 credit | >50 chars/page average (native text layer) |
| **Mixed** | 3 credits | Some text, some scanned pages |
| **Scanned** | 5 credits | Image-based, requires Vision API |

**Why Different Costs?**
- **Text-rich**: Fast extraction using text parsing (cheap compute)
- **Mixed**: Combination of text parsing + some OCR (moderate compute)
- **Scanned**: Full Vision API analysis of every page (expensive compute)

#### AI Image Generation Option - **NEW**

When importing PDFs, users can optionally enable **AI-generated images**:

**Toggle Location**: Cost Confirmation Sheet
```
╔══════════════════════════════════════╗
║ [Toggle] Generate AI images         ║
║   Replace page images with AI photos ║
╚══════════════════════════════════════╝
```

**What It Does**:
- Instead of using PDF page screenshots as recipe images
- Generates appetizing food photography using DALL-E
- Uses the user's selected visual style (from RecipeImageGenerator)
- Matches their existing collection aesthetic

**AI Image Credit Tiers**:

| Recipe Count | AI Image Cost | Notes |
|--------------|---------------|-------|
| 1-10 recipes | **0 credits** | Free for small imports |
| 11-25 recipes | 5 credits | Small cookbook |
| 26-50 recipes | 10 credits | Medium cookbook |
| 51+ recipes | 15 credits | Large cookbook |

**Technical Flow**:
```
Import Job Phases:
1. Validation → 10% of progress
2. Analysis → 25% of progress
3. Extraction → 50% of progress
4. Image Generation → 15% of progress (if enabled)

If AI images enabled:
  - After extraction completes
  - For each recipe, call RecipeImageGenerator
  - Generate image using user's selected style
  - Save to recipe, replacing page screenshot
  - Update progress after each image
```

#### Author Attribution - **NEW**

PDF imports preserve **author attribution**:

**Source Attribution**:
- Original PDF filename stored as source
- Author name extracted from PDF metadata (if available)
- Attribution badge shows in recipe detail: "From: Cooking for Two.pdf"

**Creator Attribution** (for public publishing):
- When you publish a PDF-imported recipe to Discovery
- Attribution shows: "Recipe from [PDF Name]"
- Respects copyright (user responsible for rights)

**Lineage Integration**:
- PDF-imported recipes can be forked/modified
- Your changes tracked in version history
- Original PDF source preserved in lineage tree

#### Auto-Categorization by Source Type - **NEW**

Heirloom automatically categorizes recipes by their import source:

**Source-Based Collections**:
```
Recipes are auto-organized by how they were imported:

• Web Recipes - Imported from URLs (Safari share, bulk import)
• Video Recipes - Extracted from TikTok, Instagram, YouTube videos
• Cookbook Pages - Imported from PDF cookbooks
• Scanned Recipes - OCR'd from photos of recipe cards
• AI Generated - Created via AI recipe generation
```

**How It Works**:
- Each recipe tagged with source type automatically
- Source type shown in recipe detail view
- Can filter recipe list by source type
- Makes it easy to find "all my TikTok recipes" or "recipes from cookbooks"

**User Experience**:
```
Recipe List → Filter by:
• All Recipes
• Web Recipes (142)
• Video Recipes (38)
• Cookbook Pages (87)
• Scanned Recipes (12)
• AI Generated (5)
```

**PDF Cookbook Naming**:
When importing a PDF, the cookbook name is preserved:
- PDF filename used as cookbook/source name
- "The Italian Kitchen.pdf" → Source: "The Italian Kitchen"
- Recipes grouped by cookbook in "Cookbook Pages" filter
- Attribution shows: "From: The Italian Kitchen"

**Technical Details**:
- Source type stored as `importSource` field on recipe
- PDF filename extracted and stored as `sourceName`
- Collections auto-created on first import of each type

#### User Experience Details

**Cost Confirmation Sheet**:
```
╔══════════════════════════════════════╗
║         📄 Import Cost              ║
║  Here's what this import will cost  ║
╠══════════════════════════════════════╣
║ 📄 3 text-rich pages          3 ✓Fast║
║ 📄 1 scanned page             5 ⭐    ║
║ ✨ AI image generation       0 Free ║
║──────────────────────────────────────║
║ Total                        8 credits║
║ ⏱️ Estimated: ~50 recipes, ~2 min   ║
╠══════════════════════════════════════╣
║ 🎁 Your quota today:        25 credits║
║ → After import:             17 credits║
╠══════════════════════════════════════╣
║ [Toggle] Generate AI images         ║
║   Replace page images with AI photos ║
╠══════════════════════════════════════╣
║      [   Import Now   ]             ║
║           Cancel                     ║
╚══════════════════════════════════════╝
```

**Progress View** (during import):
```
╔══════════════════════════════════════╗
║ 📄 Importing Cookbook               ║
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 58%    ║
║                                      ║
║ Phase: Extracting recipes            ║
║ Progress: 29/50 recipes              ║
║                                      ║
║ Next: Generating AI images           ║
╚══════════════════════════════════════╝
```

**If Quota Exceeded**:
```
╔══════════════════════════════════════╗
║ ⚠️ You need 5 more credits          ║
║                                      ║
║  [ Buy 25 Credits - $5 ]            ║
║    Import right away                 ║
║                                      ║
║  [ Queue for Tomorrow ]             ║
║    Free - Quota resets at midnight   ║
╚══════════════════════════════════════╝
```

#### Technical Details

**Text Extraction Pipeline**:
1. **PDFKit**: Extract native text layer (fast, cheap)
2. **Vision Framework**: OCR for scanned pages (slower, requires compute)
3. **Claude API**: Recipe structuring (identify ingredients, instructions, metadata)
4. **RecipeImageGenerator**: AI images (DALL-E, if enabled)

**Performance**:
- Text-rich PDF (50 pages): ~30 seconds
- Mixed PDF (50 pages): ~2 minutes
- Scanned PDF (50 pages): ~5 minutes
- AI image generation: ~5 seconds per recipe

**Error Handling**:
- If page fails extraction: Skip, continue with next
- If AI image fails: Use page screenshot as fallback
- Show summary at end: "47/50 recipes imported, 3 pages skipped"

#### Marketing Angle

This is a **power user feature** that justifies premium pricing:

**Headlines**:
- "Import your entire cookbook—not one recipe at a time"
- "PDF sitting in your Files? Share it to Heirloom, get all recipes extracted"
- "AI-generated images make even old scanned cookbooks look beautiful"

**User Story**:
```
"I had my grandmother's cookbook scanned to PDF years ago.
Heirloom extracted all 87 recipes in under 5 minutes.
Then I turned on AI images and suddenly every recipe
had beautiful food photography instead of grainy scans.
My collection looks professional now."
```

**Competitive Angle**:
- Paprika: One recipe at a time (manual copy)
- Whisk: No PDF import
- Heirloom: Entire cookbook in minutes with AI images

---

## Part 3: AI Intelligence (Making Messy Data Beautiful)

Heirloom's AI handles the grunt work of recipe organization so users don't have to.

### 3.1 Smart Ingredient Parsing

**One-Line**: Turns sloppy ingredient lists into structured, shoppable data.

#### The Problem

Web recipes are inconsistent:
- "2c flour" vs "2 cups all-purpose flour" vs "flour (2 cups)"
- "1 lb chicken breast, diced" vs "1 pound boneless chicken breast (cubed)"
- "Salt and pepper to taste" vs "Kosher salt + freshly ground black pepper"

Users need:
- **Consistent formatting** for readability
- **Structured quantities** for scaling (double the recipe → double the flour)
- **Shoppable items** for grocery lists (extract "chicken breast" from "1 lb chicken breast, diced")

#### How Heirloom Handles It

**Automatic Parsing** (runs on every imported recipe):
```
Raw input: "2c AP flour"
Parsed output:
- Quantity: 2
- Unit: cups
- Item: all-purpose flour
- Preparation: (none)

Raw input: "1 pound chicken breast, cubed"
Parsed output:
- Quantity: 1
- Unit: pound
- Item: chicken breast
- Preparation: cubed
```

**Benefits**:
1. **Recipe Scaling**: Double the recipe → "2 cups flour" becomes "4 cups flour" automatically
2. **Shopping Lists**: Aggregates across recipes ("Need 3 lbs chicken for 2 recipes")
3. **Searchability**: Can search for "recipes with chicken" even if recipe says "1 lb chicken breast, diced"

#### Technical Details

- **Parser**: Custom AI model trained on 100k+ recipe ingredients
- **Fallback**: If parsing fails, shows original text (doesn't break recipe)
- **User Edits**: Can manually correct parsing if AI gets it wrong
- **Continuous Learning**: Parsing improves with more recipes imported

#### Marketing Angle

This is a **table stakes feature** that prevents user frustration. Don't lead with it, but mention it in competitive comparison:
- "Heirloom automatically parses ingredients so you can scale recipes and build shopping lists"
- Show before/after: Messy web recipe → Clean Heirloom format

### 3.2 Multi-Recipe Detection

**One-Line**: Import a page with 5 recipes → Get 5 separate recipe cards, not one giant blob.

#### When This Matters

**Common Scenarios**:
1. **Blog post** with "3 Variations of Chocolate Chip Cookies" → Should be 3 recipes
2. **PDF cookbook page** with "Side Dishes: Roasted Potatoes, Green Beans, Salad" → Should be 3 recipes
3. **Image** of magazine page with "Quick Weeknight Meals" and 4 recipes → Should be 4 recipes

**Without Multi-Recipe Detection**:
- User imports page → Gets 1 recipe with all 5 recipes mashed together
- Has to manually split them (copy/paste into separate recipes)
- Frustrating, breaks the "one-tap" promise

**With Multi-Recipe Detection**:
- User imports page → AI detects 5 recipes
- Shows selection screen: "Found 5 recipes. Select which to import."
- User can import all or cherry-pick
- Each imported recipe is separate and properly formatted

#### User Experience

```
Example: Sharing a Notes app note with 3 recipe URLs + 2 text recipes

1. User taps Share → Heirloom from Notes
2. Heirloom detects:
   - 3 URLs (will import via web scraper)
   - Plain text with 2 recipes (will extract via AI)
3. Shows: "Found 5 recipes (3 from URLs, 2 from text). Import all?"
4. User confirms
5. Progress: "Importing 5 recipes... 2/5 complete"
6. Result: 5 separate recipe cards in Heirloom
```

#### Technical Details

- **Detection Triggers**: Multiple recipe titles, multiple ingredient sections, horizontal rules/separators
- **Confidence Scoring**: Shows user how confident AI is in split (prevents false positives)
- **Manual Override**: User can merge recipes if AI splits incorrectly
- **Works Across Sources**: URLs, PDFs, images, plain text, videos

#### Marketing Angle

This is a **quality differentiator**:
- "Import 10 recipes from a cookbook page → Get 10 recipe cards, not one giant mess"
- Show competitor vs Heirloom: Paprika imports 1 blob, Heirloom splits correctly

### 3.3 Spell Checking & Autocorrect

**One-Line**: Fixes OCR typos and web scraping errors automatically.

#### The Problem

**OCR isn't perfect**:
- Handwritten recipe says "1 tsp vanilla" → OCR reads "1 tsp vamlla"
- Cookbook says "kosher salt" → OCR reads "kosher sa1t"

**Web scraping hits encoding issues**:
- "½ cup sugar" → "Â½ cup sugar" (weird encoding characters)
- "350°F" → "350&deg;F" (HTML entities not converted)

#### How Heirloom Fixes It

**Automatic Corrections** (runs after import, before showing to user):
- Spell-checks ingredient names against dictionary of 5,000+ common ingredients
- Fixes OCR mistakes ("vamlla" → "vanilla", "sa1t" → "salt")
- Converts HTML entities and unicode issues
- Normalizes fractions ("1/2" → "½", "Â½" → "½")

**User Control**:
- Corrections shown in editor before saving (can undo if wrong)
- Learns from user edits (if user changes "cilantro" to "coriander", remembers preference)

#### Marketing Angle

This is **hidden quality** that users only notice when it's missing:
- Don't lead with this feature
- Mention in "How it works" or FAQ sections
- Show example: "OCR captured 'vamlla extract' → Heirloom fixed it to 'vanilla extract'"

### 3.4 AI Recipe Generation (Create from Scratch) - **NEW**

**One-Line**: Tell Heirloom what you want to cook—AI creates a complete recipe tailored to your request.

#### The Problem This Solves

Sometimes you want a recipe that doesn't exist yet:
- "I have chicken, rice, and broccoli—what can I make?"
- "I want a chocolate dessert but I'm out of eggs"
- "Give me a 15-minute dinner idea"
- "What's a kid-friendly version of pad thai?"

Traditional approach: Search multiple recipe sites, adapt existing recipes, hope you find something close.

Heirloom approach: Describe what you want → AI generates a complete, tested-style recipe.

#### How It Works

**Recipe Generation Flow**:
```
1. Tap "+" → "Generate Recipe"
2. Enter prompt:
   - "A quick pasta dish with whatever vegetables I have"
   - "Healthy breakfast cookies without refined sugar"
   - "Thai-inspired chicken soup"
3. Tap "Generate"
4. AI creates full recipe:
   - Title
   - Ingredients (parsed and structured)
   - Step-by-step instructions
   - Cook/prep times
   - Serving size
   - Optional: Nutritional estimates
5. Review and edit before saving
6. Optional: Generate AI image
```

**Generation Parameters** (optional refinements):
- **Dietary**: Vegetarian, vegan, gluten-free, dairy-free, keto, etc.
- **Difficulty**: Easy, intermediate, advanced
- **Time**: Under 15 min, 30 min, 1 hour
- **Cuisine**: Italian, Mexican, Thai, Indian, American, etc.
- **Equipment**: Instant Pot, air fryer, slow cooker, grill, no-oven

#### The Random Recipe Easter Egg 🎲

**Hidden Feature**: Shake your phone (or tap the dice icon) to generate a completely random recipe.

**How It Works**:
```
1. On "Generate Recipe" screen
2. Shake device (accelerometer detection)
3. Shows: "🎲 Surprise me!"
4. AI generates a random, interesting recipe
5. Could be anything:
   - "Smoky Chipotle Black Bean Burgers"
   - "Lavender Honey Ice Cream"
   - "Korean BBQ Tacos"
   - "Moroccan Spiced Lamb Meatballs"
```

**Why This Exists**:
- Cures recipe fatigue ("what should I make tonight?")
- Introduces users to cuisines they wouldn't search for
- Delightful surprise factor
- Shareable moment ("Look what Heirloom suggested!")

#### Technical Details

**AI Backend**:
- Claude API (Anthropic) for recipe generation
- Trained prompt engineering for consistent recipe format
- Temperature settings for creativity vs reliability balance
- Retry logic if generation fails

**Recipe Quality Assurance**:
- Generated recipes follow standard recipe structure
- Ingredient quantities are realistic (no "3 cups of salt")
- Instructions are properly sequenced
- Times are reasonable estimates

**Cost**:
- Recipe generation: 1 credit (uses daily quota first)
- Optional AI image: Additional cost based on tier

**Prompt Engineering** (internal):
```
Generate a recipe for: {user_prompt}

Requirements:
- Title: Clear, appetizing name
- Servings: Default 4 unless specified
- Prep time: Realistic estimate
- Cook time: Realistic estimate
- Ingredients: List with quantities, structured format
- Instructions: Numbered steps, clear and actionable
- Notes: Any tips or variations (optional)

Style: Home cook friendly, not restaurant-complex
```

#### User Experience Details

**Generate Recipe Screen**:
```
╔══════════════════════════════════════╗
║      ✨ Generate a Recipe           ║
╠══════════════════════════════════════╣
║ What would you like to cook?        ║
║ ┌──────────────────────────────────┐║
║ │ A comforting soup for a cold     │║
║ │ winter night...                  │║
║ └──────────────────────────────────┘║
║                                      ║
║ [Vegetarian] [Quick] [Easy]         ║
║ [Instant Pot] [Italian]             ║
║                                      ║
║ 🎲 Shake for random recipe          ║
║                                      ║
║      [   Generate Recipe   ]        ║
║                                      ║
║ Cost: 1 credit (23 remaining today) ║
╚══════════════════════════════════════╝
```

**Generated Recipe Preview**:
```
╔══════════════════════════════════════╗
║ ✨ Generated Recipe                 ║
╠══════════════════════════════════════╣
║ Creamy Tuscan White Bean Soup       ║
║                                      ║
║ ⏱️ 15 min prep  ⏲️ 30 min cook      ║
║ 🍽️ Serves 4                         ║
║                                      ║
║ INGREDIENTS                         ║
║ • 2 cans white beans, drained       ║
║ • 1 cup diced tomatoes              ║
║ • 4 cups vegetable broth            ║
║ • 2 cloves garlic, minced           ║
║ • ...                               ║
║                                      ║
║ INSTRUCTIONS                        ║
║ 1. Heat olive oil in large pot...   ║
║ 2. Add garlic and sauté...          ║
║ ...                                 ║
║                                      ║
║  [Edit Recipe]  [Save to Collection]║
║                                      ║
║  [Generate AI Image] (1 credit)     ║
║           Regenerate                ║
╚══════════════════════════════════════╝
```

#### Marketing Angle

This is a **differentiator feature** that shows AI sophistication:

**Headlines**:
- "Don't know what to cook? Just ask."
- "AI-generated recipes tailored to your cravings"
- "Shake for a random recipe—cures decision fatigue"

**User Stories**:
```
"I told Heirloom I had leftover rotisserie chicken
and wanted something Asian-inspired. It generated
a 20-minute fried rice recipe that was actually good.
Now I use it whenever I need dinner inspiration."
```

**Viral Moment**:
- The random recipe feature is highly shareable
- "You won't believe what Heirloom suggested I make"
- TikTok-friendly content

**Competitive Angle**:
- Most recipe apps: Search existing databases only
- Heirloom: Creates new recipes on demand
- Opens infinite recipe possibilities

---

## Part 4: Recipe Management (Organization & Personalization)

### 4.1 Recipe Editor

**One-Line**: Edit recipes the way you cook—tweak ingredients, add notes, fix typos, all in a clean interface.

#### Core Editing Features

**What Users Can Edit**:
- Recipe title
- Ingredients (add/remove/reorder)
- Instructions (add/remove/reorder/split/merge steps)
- Cook time, prep time, servings
- Recipe photo (replace with new photo or remove)
- Tags/collections
- Source URL (if imported from web)

**Smart Editing Behaviors**:
- **Auto-numbering**: Instructions automatically numbered as you add them
- **Drag-to-reorder**: Long-press and drag ingredients or steps
- **Voice input**: Tap microphone to dictate edits (iOS system voice input)
- **Spell-check**: Inline red underlines for typos, same as Notes app

#### User Experience

**Quick Edit Mode** (from recipe detail view):
```
1. Viewing recipe → Tap "Edit" button (top right)
2. All fields become editable
3. Make changes
4. Tap "Done"
5. Changes saved + synced to cloud
```

**Field-Specific Editing**:
- **Title**: Inline edit, tap to change
- **Ingredients**: Tap "+" to add, swipe left to delete, long-press to reorder
- **Instructions**: Tap "+" to add step, swipe left to delete, long-press to reorder
- **Image**: Tap photo → Options: "Replace from Camera", "Replace from Library", "Remove"

#### Technical Details

- **Undo/Redo**: Full undo stack (can undo last 20 edits)
- **Auto-save**: Saves changes immediately (no "Save" button needed)
- **Conflict Resolution**: If edited on two devices simultaneously, shows merge dialog
- **Version History**: Tracks changes over time (can view previous versions)

#### Marketing Angle

This is **table stakes**—every recipe app has an editor. Don't lead with it, but show it in app tours:
- "Edit recipes your way—add notes, tweak ingredients, fix mistakes"
- Show quick edit: Recipe view → Tap Edit → Make change → Done (emphasize speed)

### 4.2 Collections (Organization)

**One-Line**: Group recipes your way—"Weeknight Dinners", "Mom's Recipes", "To Try", whatever works for you.

#### Why Collections Matter

After importing 50+ recipes via Share Extension, users need organization:
- "Which recipes should I make this week?"
- "Where's that pasta recipe I saved last month?"
- "I want to try something new—show me recipes I haven't cooked yet"

Collections are **user-defined folders** that solve this.

#### Default Collections (Auto-Created)

Heirloom creates these automatically:
- **All Recipes** (uncategorized)
- **Favorites** (recipes marked with ❤️)
- **Recently Added** (last 30 days)
- **Recently Cooked** (recipes opened in Cooking Mode)

#### User-Created Collections

**Common Examples**:
- "Weeknight Dinners" (quick recipes <30 min)
- "Special Occasions" (fancy recipes for guests)
- "Baking" (desserts and breads)
- "Mom's Recipes" (inherited family recipes)
- "To Try" (imported but not cooked yet)
- "Meal Prep" (batch cooking recipes)

#### User Experience

**Creating Collections**:
```
1. Tap "Collections" tab
2. Tap "+" → "New Collection"
3. Enter name (e.g., "Weeknight Dinners")
4. Choose icon (optional: pot, cake, leaf, etc.)
5. Done
```

**Adding Recipes to Collections**:
```
Option 1: From recipe detail view
- Tap "Add to Collection" button
- Select collection(s) from list
- Recipe added (can be in multiple collections)

Option 2: Bulk add
- Tap "Select" in recipe list
- Check multiple recipes
- Tap "Add to Collection"
- Choose collection
- All selected recipes added at once
```

#### Technical Details

- **Multi-membership**: Recipe can be in multiple collections simultaneously
- **Smart Collections**: Can create rules-based collections (e.g., "All recipes with 'chicken' and cook time <30 min")
- **Collection Sharing**: Can share entire collection with family (exports as link)
- **Sync**: Collections sync across devices via iCloud

#### Marketing Angle

Collections are a **retention feature**—they make the app more valuable as users add more recipes:
- "Imported 100 recipes? Organize them into collections like 'Weeknight Dinners' and 'Weekend Projects'"
- Show visual: Recipe list → Tap hamburger menu → See organized collections

### 4.3 Recipe Versioning & Lineage (Heritage Feature)

**One-Line**: Share recipes with family—when they make changes, you both keep your versions, see the evolution, and know who contributed each version.

**NEW IN 2.0**: Lineage now shows **contributor profiles**—see who shared each version, view their profile, and check your connection status.

#### The Problem This Solves

Traditional recipe sharing:
1. Mom sends you her lasagna recipe
2. You make it, tweak the spices
3. Your version is now different than Mom's
4. Years later: Which version is "original"? What changed? Who made that adaptation?

Heirloom tracks this with **recipe lineage**—a family tree for recipes with full contributor attribution.

#### How It Works

**Sharing a Recipe** (creates lineage):
```
1. Mom has "Grandma's Lasagna" recipe
2. Mom taps Share → Share with Family → Enter your email
3. You get notification: "Mom shared Grandma's Lasagna"
4. You tap Accept → Recipe added to your Heirloom
5. Lineage created: Mom's version is "parent", yours is "child"
```

**Making Changes** (creates version):
```
1. You open "Grandma's Lasagna" (from Mom)
2. You edit: Change basil to oregano, add extra garlic
3. Your changes saved as YOUR version
4. Mom's original version is preserved in lineage
5. You can switch between versions: "Mom's Version" vs "My Version"
```

**Viewing Lineage** (see evolution):
```
1. Open recipe → Tap "Lineage" button
2. See family tree with contributor profiles:
   - Grandma's Original (1985)
     - Contributor: [Grandma's Photo] Grandma Smith [✓ Connected]
     - "2nd Gen" badge
   - Mom's Version (2005) ← Changed sauce spices
     - Contributor: [Mom's Photo] Jane Smith [✓ Connected]
     - "3rd Gen" badge
   - Your Version (2025) ← Added extra garlic
     - "4th Gen" badge
3. Tap any version → See that exact recipe
4. Tap contributor → View their profile with connection status
5. Compare versions side-by-side (highlights changes)
```

#### User Experience Details

**Version Selector** (in recipe detail view):
- Dropdown at top: "Viewing: My Version"
- Tap to see list: "Grandma's Original", "Mom's Version", "My Version"
- Switch versions → Image, ingredients, instructions all update to that version

**Change Detection** (shows what changed):
- Green highlight: "Added 2 cloves garlic"
- Red strikethrough: "Removed 1 tsp basil"
- Yellow highlight: "Changed 1 cup sugar → ¾ cup sugar"

**Family Tree Visualization**:
- Shows lineage as connected nodes
- **Contributor row for each version** (NEW IN 2.0):
  - Avatar (20x20 circle) with photo or initials
  - Display name as tappable link (tomato color)
  - Green checkmark if connected
  - Connection status badge
- Names next to each version (Grandma, Mom, You)
- Dates when each version was created
- Can tap node to jump to that version
- Can tap contributor to view their profile

**Contributor Profile Sheets** (NEW IN 2.0):
```
When you tap a contributor:
1. Sheet opens showing:
   - Large avatar (100x100)
   - Display name and @handle
   - Connection status badge ("Connected" in green)
   - Bio (if available)
   - Stats: Connections, Shared recipes, Generations
   - Context badge: "Recipe Lineage Contributor"
2. Tap "View Kitchen Table" → See their profile
3. If not connected, see "Send Connection Request" button
```

**Legacy Contributors**:
- Pre-2.0 recipes may have contributor names without accounts
- Shows name only (not tappable, gray text)
- No avatar, no connection status
- Preserved for historical context

#### Technical Details

- **Firebase Sync**: Lineage tracked in Firestore with parent-child relationships
- **Version IDs**: Each version has unique UUID, changes create new version ID
- **Image Versioning**: Each version can have different photo (unique filenames)
- **Conflict Resolution**: If two people edit same recipe simultaneously, creates divergent branches

#### Marketing Angle

This is an **emotional differentiator**—the "heritage" in Heirloom:
- "Preserve family recipes the way they were meant to be—passed down and adapted across generations"
- Show visual: Family tree with Grandma → Mom → You → Kids
- Target audience: People with inherited recipes, multi-generational cooks

**Video Script Concept**:
```
[Scene: Elderly grandmother in kitchen, younger woman filming on phone]
Voiceover: "This is my grandmother's lasagna recipe"
[Scene: Grandmother speaking, subtitles showing recipe steps]
[Scene: Young woman taps "Share with Family"]
[Scene: Teenager receives notification on phone, smiles]
[Scene: Split screen showing three versions of recipe card side-by-side]
Voiceover: "Her recipe. Your changes. One family."
Text overlay: "Heirloom — Recipes that evolve with your family"
```

### 4.4 Personalization (Card Backgrounds, Stickers, Annotations)

**One-Line**: Make recipes yours—add backgrounds, stickers, handwritten notes, turn recipes into keepsakes.

#### Why Personalization Matters

Generic recipe cards feel impersonal. Heirloom lets users turn recipes into **visual keepsakes** that reflect their personality and memories.

#### Customization Options

**1. Card Backgrounds** (aesthetic customization):
- **Premade Themes**: Rustic, Modern, Vintage, Minimal, Colorful
- **Custom Colors**: Pick any color for background
- **Textures**: Linen, Paper, Wood grain
- **Patterns**: Stripes, Dots, Florals

**2. Stickers** (visual markers):
- **Emoji-style**: 🔥 (spicy), ⏱️ (quick), 💚 (healthy), 🎂 (celebration)
- **Custom Text Stickers**: "Family Favorite", "Holiday Recipe", "Mom's Version"
- **Placement**: Drag to position anywhere on recipe card

**3. Handwritten Annotations** (personal notes):
- **Apple Pencil Support**: Draw/write directly on recipe card
- **Common Uses**: Circle favorite ingredients, add cook time notes, sketch plating ideas
- **Non-Destructive**: Original recipe preserved, annotations on separate layer

**4. Love Marks** (quick favorites):
- Tap ❤️ on any recipe → Marked as favorite
- Favorited recipes show in "Favorites" collection
- Can filter recipe list to show only favorites

**5. Recipe Notes (Back of Card)** - **ENHANCED IN 2.0**:
- Flip recipe card to see back side (smooth 3D flip animation)
- **FlipAffordanceBadge** indicates card is flippable
- Back side features:
  - **Freeform notes section**: "Made this for Thanksgiving 2025 - everyone loved it"
  - **Multiple photos**: Plate presentation, work-in-progress shots, plating ideas
  - **Cooking modifications**: "Try with gluten-free flour next time", "Double the garlic"
  - **Date stamped entries**: Automatically tracks when notes added
- **Swipe gesture**: Swipe card left to flip to back, right to flip to front
- **Sync**: Card back syncs via Firebase Storage across devices
- **Non-destructive**: Notes/photos separate from recipe data

#### User Experience

**Customizing a Recipe Card**:
```
1. Open recipe → Tap "Customize" button
2. Choose background:
   - Tap "Backgrounds" → See grid of options
   - Tap one → Applied instantly
   - Can preview before confirming
3. Add stickers:
   - Tap "Stickers" → Enhanced StickerPickerView
   - Drag sticker onto card
   - Pinch to resize, rotate
4. Add annotations:
   - Tap "Draw" → Apple Pencil or finger
   - Draw/write on card
   - Can erase, undo, change color
5. Flip to back (NEW ENHANCED EXPERIENCE):
   - Swipe card left → Smooth 3D flip animation
   - Or tap FlipAffordanceBadge indicator
   - See RecipeCardBackView with:
     - Notes section (tap to add/edit)
     - Photo gallery (tap + to add more photos)
     - Modifications log (track recipe changes)
   - Swipe right to flip back to front
```

**Sharing Customized Cards**:
- Export as image (high-res PNG)
- Share to Instagram, Pinterest, iMessage
- Print at home or via print service

#### Technical Details

- **Non-Destructive Editing**: Customizations stored separately from recipe data
- **Sync**: Customizations sync across devices via Firebase Storage
- **Card Back System**:
  - `RecipeCardBackView` for back-side display
  - `FlipCard` component for 3D flip animations
  - `cardBackRefreshTrigger` forces UI update when notes/photos added
  - Back data stored separately, synced independently
- **Image Variants**: Backgrounds stored as compressed JPEGs (<100KB each)
- **Progressive Loading**: AsyncBlurhashImage for smooth image display

#### Marketing Angle

This is a **premium feature** that justifies subscription pricing:
- "Turn recipes into keepsakes—customize with backgrounds, stickers, and handwritten notes"
- Show before/after: Plain recipe → Beautiful customized card
- Target audience: Pinterest users, people who love aesthetic recipe cards

**Instagram/Pinterest Ad Concept**:
```
[Carousel post showing 5 recipe cards with different backgrounds]
Caption: "Which vibe matches your kitchen?"
[Swipe through: Rustic wood grain, Modern minimal, Vintage floral, Bold color, Clean white]
CTA: "Customize your recipes in Heirloom"
```

---

## Part 5: Meal Planning (Dinner Party Mode)

### 5.1 Dinner Party Mode

**One-Line**: Cook multiple recipes at once with a smart timeline that tells you when to start each dish.

#### The Problem This Solves

Cooking a meal with multiple dishes is timing chaos:
- Roast chicken takes 90 min
- Roasted veggies take 45 min
- Salad takes 10 min
- When do you start each one so everything finishes at the same time?

Traditional approach: Do math in your head, stress about timing, something goes cold or burns.

Heirloom approach: Pick your dishes, set your target finish time, get a timeline.

#### User Experience

**Setting Up a Dinner Party**:
```
1. Tap "Dinner Party" button in recipe detail view (or from meal planner)
2. Add recipes to party:
   - "Roast Chicken" (90 min)
   - "Roasted Vegetables" (45 min)
   - "Green Salad" (10 min)
3. Set target finish time: "7:00 PM"
4. Heirloom calculates timeline:
   - 5:30 PM → Start roast chicken
   - 6:15 PM → Start roasted vegetables
   - 6:50 PM → Prepare salad
   - 7:00 PM → Everything ready to serve
```

**During the Party** (timeline view):
```
Current time: 6:10 PM

✅ 5:30 PM — Roast Chicken (started)
   └─ Currently cooking, 20 min remaining

⏭️ 6:15 PM — Roasted Vegetables (starts in 5 min)
   └─ Tap to see prep checklist

⏭️ 6:50 PM — Green Salad (starts in 40 min)

Timeline auto-updates as you work, shows notifications when next dish is ready to start
```

**Smart Features**:
- **Pause/Resume**: Running late? Pause the timeline, it recalculates
- **Scaling**: Doubling recipes? Timeline adjusts cook times automatically
- **Notifications**: Push notifications 5 min before each step starts
- **Shopping List Integration**: Generates combined shopping list for all party recipes

#### Technical Details

- **Cook Time Calculation**: Parses recipe instructions for time indicators ("bake 45 min", "simmer 20 min")
- **Dependency Detection**: If recipe says "while chicken roasts, prepare salad", timeline accounts for this
- **Buffer Time**: Adds 5-10 min buffer between dishes to account for carryover cooking, plating

#### Marketing Angle

This is a **hero feature for entertaining**:
- "Hosting dinner? Heirloom tells you when to start each dish so everything finishes on time"
- Show timeline UI in demo videos
- Target audience: People who entertain, host holidays, cook multi-course meals

**Video Script Concept**:
```
[Scene: Person looking stressed in kitchen with multiple recipes printed out]
Voiceover: "Cooking a holiday meal shouldn't feel like conducting an orchestra"
[Scene: Opens Heirloom, taps "Dinner Party", adds 4 recipes]
[Scene: Timeline appears with start times for each dish]
[Scene: Person confidently cooking, glancing at phone timeline]
[Scene: Food comes out perfectly timed, guests impressed]
Text overlay: "Heirloom Dinner Party Mode — Never serve cold mashed potatoes again"
```

### 5.2 Recipe Scaling

**One-Line**: Cooking for 2 instead of 4? Tap "Half Recipe"—all ingredients adjust automatically.

#### User Experience

**Scaling a Recipe**:
```
1. Open recipe (default: serves 4)
2. Tap "Servings: 4" dropdown
3. See options:
   - Half (serves 2)
   - 1x (serves 4) ← current
   - 1.5x (serves 6)
   - 2x (serves 8)
   - Custom (enter number)
4. Tap "Half (serves 2)"
5. All ingredient quantities update:
   - "2 cups flour" → "1 cup flour"
   - "4 chicken breasts" → "2 chicken breasts"
   - "1 tsp salt" → "½ tsp salt"
```

**Smart Scaling**:
- **Fractional Conversion**: "1 cup" halved → "½ cup" (not "0.5 cups")
- **Rounding**: "3 eggs" halved → "2 eggs" (can't use 1.5 eggs)
- **Warnings**: If scaled amount seems wrong, shows warning: "½ egg seems unusual—verify this"

#### Technical Details

- **Parsed Ingredients Required**: Only works if ingredients were successfully parsed into quantity + unit
- **Cook Time Adjustment**: Scaling servings doesn't auto-adjust cook time (users must decide)
- **Reversible**: Can scale back and forth without losing original quantities

#### Marketing Angle

This is **convenience feature**, not a headline:
- Mention in feature lists and app tours
- Show in demo: Recipe for 8 → Scaled to 2 in one tap

---

## Part 5B: User Profiles & Social Discovery - **NEW IN 2.0**

### 5B.0 User Profiles (Your Cooking Identity)

**One-Line**: Create your cooking identity—profile photo, display name, bio—to share recipes and connect with friends.

#### Profile Setup

**During Onboarding**:
```
1. After account creation, user prompted to set up profile
2. Add profile photo (camera, library, or skip)
3. Enter display name (required)
4. Add bio (optional, 160 chars max)
5. Profile created → Ready to share and connect
```

**Profile Contents**:
- **Avatar**: Photo (uploaded or camera) or generated initials
- **Display Name**: How you appear to others (e.g., "Matt's Kitchen")
- **Bio**: Short description (optional, e.g., "Home cook | Pasta enthusiast | Dad of 3")
- **Handle**: Auto-generated unique identifier (@username)
- **Stats**: Recipes created, connections, shared recipes

#### Your Kitchen Table Profile

**What Others See**:
```
╔══════════════════════════════════════╗
║    [Avatar Photo]                   ║
║                                      ║
║    Matt's Kitchen                    ║
║    @mattskitchen                     ║
║                                      ║
║    "Home cook passionate about       ║
║     Italian food and feeding my      ║
║     family well."                    ║
║                                      ║
║    📊 47 Recipes  👥 12 Connections  ║
║    📤 28 Shared                      ║
║                                      ║
║  [Edit Profile]  [Share Profile]    ║
╚══════════════════════════════════════╝
```

#### Profile in Context

**In Recipe Lineage**:
- Your profile appears as contributor when you modify/create recipes
- Avatar and name shown on lineage timeline
- Connection status badge for connected contributors

**In Direct Sharing**:
- Your profile info attached to shared recipes
- Recipients see who sent the recipe
- Profile photo appears in their share inbox

**In Public Discovery**:
- Published recipes show your profile
- Users can tap to view your public Kitchen Table
- Option to make profile discoverable in search

#### Profile Settings

**Location**: Settings → Profile

```
╔══════════════════════════════════════╗
║ PROFILE                             ║
╠══════════════════════════════════════╣
║ [📷] Change Photo                   ║
║ Display Name: Matt's Kitchen        ║
║ Bio: Home cook passionate about...  ║
║ Handle: @mattskitchen               ║
╠══════════════════════════════════════╣
║ PRIVACY                             ║
║ [✓] Discoverable in search          ║
║ [✓] Show recipes count              ║
║ [ ] Show connections count          ║
╠══════════════════════════════════════╣
║ [Delete Account]                    ║
╚══════════════════════════════════════╝
```

#### Technical Details

- **Storage**: Profile stored in Firestore under `users/{userId}/profile`
- **Avatar**: Stored in Firebase Storage, cached locally
- **Sync**: Profile changes sync across devices instantly
- **Privacy**: Can hide stats, disable search discovery

---

### 5B.1 Finding Users & Sending Connection Requests

**One-Line**: Search for users by name, send connection requests, build your Kitchen Table community.

#### The Problem This Solves

Invite links are great for sharing with people you know, but what if you:
- Want to find a friend who's already on Heirloom
- Met someone who mentioned they use Heirloom
- Want to connect without creating/sending a link

**Connection requests** let you find users by name and send requests that require acceptance (unlike invite links which auto-connect).

#### User Search Flow

```
1. Kitchen Table → Tap search icon (🔍) in toolbar
2. UserSearchView opens
3. Type name in search bar (min 2 characters)
4. Results appear as you type (300ms debounce)
5. Each result shows:
   - Profile photo (or initials)
   - Display name
   - Bio (if available)
6. Tap result → UserProfilePreviewSheet opens
7. Review profile:
   - Large avatar
   - Name and bio
   - "Send Connection Request" button
8. Tap "Send Connection Request"
9. Success toast: "Connection request sent"
```

#### Connection Request Flow

**Sending Requests**:
```
1. Find user via search
2. Tap "Send Connection Request"
3. Request sent (Firestore document created)
4. Recipient gets push notification
5. Request appears in their ConnectionRequestsView
```

**Receiving Requests**:
```
1. Push notification: "[Name] sent you a connection request"
2. Kitchen Table shows pending request banner:
   "Connection Requests - 3 pending" (with count badge)
3. Tap banner → ConnectionRequestsView opens
4. Each request shows:
   - Sender photo
   - Sender name
   - "Accept" / "Decline" buttons
5. Accept → Connection created (both users see each other)
6. Decline → Request removed (sender not notified)
```

#### Key Differences: Requests vs Invite Links

| Feature | Connection Request | Invite Link |
|---------|-------------------|-------------|
| Discovery | Search by name | Share link manually |
| Approval | Requires acceptance | Auto-connects |
| State | Pending → Accepted/Declined | Immediate |
| Notification | Push notification | None (unless they use link) |
| Best for | Finding existing users | Inviting new users |

**When to use which**:
- **Connection Request**: "I know Alice uses Heirloom, let me find her"
- **Invite Link**: "I want to invite my sister who doesn't have Heirloom yet"

#### User Experience Details

**Search**:
- Searches by display name only (no handles in system)
- Prefix matching: "Mat" finds "Matt Personal", "Mealtime Memories"
- Debounced search (300ms delay) for smooth typing
- Loading indicator while searching
- Empty state: "No users found" if no results

**Request Management**:
- Pending badge shows count in Kitchen Table
- Banner color: Tomato red to draw attention
- ConnectionRequestCard shows sender info
- Accept/Decline buttons side-by-side
- Toast messages confirm actions

**Error Handling**:
- Can't send request to yourself (error toast)
- Can't send duplicate request (error toast: "Request already sent")
- Already connected (error toast: "Already connected")
- Network error (error toast: "Check your connection")

#### Technical Details

**Backend**:
- Firestore collection: `connections` with status "PENDING"
- Query: `status == PENDING AND receiverId == currentUserId`
- Accept: Updates status to "ACTIVE"
- Decline: Deletes document

**Search**:
- Firestore collection group: `profile`
- Query: `displayName >= query AND displayName < query + 'z'`
- Limit: 20 results
- Firestore index required on `displayName` (ascending)

**Notifications**:
- FCM (Firebase Cloud Messaging)
- Triggered on request creation
- Deep link: Opens Kitchen Table on tap

#### Marketing Angle

This is a **discovery feature** that builds network effects:

**Headlines**:
- "Find friends who already use Heirloom"
- "Search by name, send requests, build your cooking community"
- "No awkward link sharing—just search and connect"

**User Stories**:
- "Found my college roommate on Heirloom, now we share recipes weekly"
- "Love that I can search for people instead of asking for invite links"
- "Built a community of 20+ cooking friends through search"

**Network Effect**:
- More users → More searchable profiles → More connections
- Drives user acquisition (find friends → invite others)
- Increases retention (connected users cook together)

---

## Part 6: Shopping Lists (Smart Aggregation) - **ENHANCED IN 2.0**

### 6.1 Smart Shopping Lists

**One-Line**: Add recipes to a meal plan → Get a shopping list that intelligently combines ingredients across recipes.

**MAJOR UPDATE**: Shopping lists now extract preparation details, intelligently consolidate ingredients, and let you navigate directly to source recipes.

#### The Problem This Solves

Cooking 5 recipes this week? Each needs:
- Recipe 1: 2 cloves garlic, minced
- Recipe 2: 4 cloves garlic, sliced
- Recipe 3: 3 cloves garlic, whole
- Recipe 4: 1 onion, diced
- Recipe 5: 1 onion, chopped

Traditional approach: Write each separately, do math at store, forget what prep each needs.

Heirloom approach: Intelligently combines "14 cloves garlic" and "2 onions" with prep details preserved per-recipe.

#### User Experience

**Adding Recipes to Shopping List**:
```
1. From any recipe detail view, tap "Add to Shopping List"
2. Recipe added to your shopping cart
3. Shopping tab shows recipes with checkboxes
4. Toggle checkbox to show/hide recipe's ingredients
5. Ingredients grouped by grocery store section
```

**Smart Ingredient Consolidation** (NEW):
```
Example: 4 recipes using garlic

Recipe A: 2 cloves garlic, minced
Recipe B: 4 cloves garlic, thinly sliced
Recipe C: 6 cloves garlic, sliced
Recipe D: 2 cloves garlic, chopped

Shopping list shows: "14 cloves garlic"
  └─ Tap to see: "From 4 recipes" detail view
     - Recipe A: 2 cloves (minced)
     - Recipe B: 4 cloves (sliced)
     - Recipe C: 6 cloves (sliced)
     - Recipe D: 2 cloves (chopped)

Why no prep shown on combined? You'll prep differently for each recipe!
```

**Preparation Details Preserved** (NEW):
```
Single recipe ingredients show preparation:
  "2 cloves garlic (minced)"
  "1 onion (diced)"
  "½ cup butter (melted)"

Multi-recipe combined ingredients show total only:
  "14 cloves garlic" ← tap to see per-recipe prep
```

**Recipe Navigation** (NEW):
```
From the shopping list:
- Tap checkbox → toggle recipe on/off (show/hide ingredients)
- Tap recipe name → navigate to full recipe detail
- Chevron indicator shows tap navigates
- Long-press → context menu with "View Recipe" option
```

**Using the List at the Store**:
- Check off items as you shop (strikethrough animation)
- Items from multiple recipes show tomato-colored badge
- Tap badge → see which recipes need this ingredient
- Add non-recipe items (milk, coffee, paper towels)

**Export to Reminders App** (iOS integration):
- Tap menu → "Export to Reminders"
- Creates new Reminders list: "Heirloom Shopping"
- Each ingredient is a reminder item with combined quantity
- Can check off in Reminders app

#### Technical Details

**Ingredient Aggregation**:
- **Smart Combining**: "1 cup flour" + "2 cups flour" → "3 cups flour"
- **Unit Conversion**: "1 lb chicken" + "8 oz chicken" → "1.5 lbs chicken"
- **Unit Normalization**: "tablespoons" + "tbsp" → combined correctly
- **Preparation Stripping**: Removes prep for consolidation, preserves per-recipe
- **Singular/Plural**: "1 clove" (not "1 cloves")

**Grocery Categories** (auto-sorted):
- Produce (onions, garlic, parsley)
- Meat & Seafood (chicken, bacon, shrimp)
- Dairy & Eggs (eggs, butter, parmesan)
- Pantry (flour, sugar, pasta)
- Spices & Seasonings (salt, pepper, cumin)
- Bakery (bread, tortillas)
- Frozen (ice cream, frozen veggies)
- Beverages (wine, broth)
- Condiments (mayo, mustard)

**Recipe Row Tap Areas**:
- **Checkbox** (left): Toggles recipe selection
- **Recipe title** (center/right): Navigates to RecipeDetailView
- **Chevron indicator**: Visual cue for navigation
- **Context menu** (long-press): View Recipe, Remove, Show/Hide Items

#### Marketing Angle

This is a **workflow feature** that increases app stickiness:
- "Combine 5 recipes → Smart shopping list that does the math"
- "See which recipes need each ingredient"
- "Jump to any recipe from your shopping list"
- Target audience: Meal planners, busy families, batch shoppers

**User Story**:
```
"I added 4 recipes using garlic. Instead of 4 separate entries,
Heirloom showed me '14 cloves garlic' and when I tapped it,
I could see exactly how to prep the garlic for each recipe.
Game changer for meal prep Sundays!"
```

---

## Part 7: Cooking Mode (In-Kitchen Experience)

### 7.1 Cooking Mode

**One-Line**: Step-through recipe mode with large text, timers, and hands-free controls.

#### What It Is

Cooking Mode transforms the recipe view into a **step-by-step cooking assistant**:
- Large text (readable from counter distance)
- One instruction at a time (no scrolling)
- Built-in timers (tap "bake 45 min" → timer starts)
- Voice commands (say "next step" while hands are dirty)

#### User Experience

**Starting Cooking Mode**:
```
1. Open recipe → Tap "Start Cooking" button
2. Phone enters Cooking Mode:
   - Screen stays on (prevents auto-lock)
   - Text size increases (readable from 3 feet away)
   - Shows Step 1 of 8: "Preheat oven to 350°F"
3. Tap "Next" or say "Next Step" → Advances to Step 2
4. When done: Tap "Finish Cooking"
```

**Timer Integration**:
```
Recipe instruction: "Bake for 45 minutes"

In Cooking Mode:
- Instruction shown with underlined "45 minutes"
- Tap "45 minutes" → Timer starts automatically
- Timer shows countdown on screen
- Push notification when timer finishes
- Can set multiple timers (for multiple steps)
```

**Voice Commands** (hands-free):
- "Hey Siri, next step" → Advances to next instruction
- "Hey Siri, start timer" → Starts timer for current step
- "Hey Siri, repeat step" → Re-reads current instruction aloud

#### Technical Details

- **Screen Wake Lock**: Prevents phone from sleeping during cooking
- **Brightness Boost**: Increases screen brightness for better visibility
- **Spill Resistance**: Large tap targets (don't need precision with messy hands)
- **Timer Persistence**: Timers continue even if you leave Cooking Mode

#### Marketing Angle

This is a **quality of life feature** that shows attention to detail:
- "Cooking Mode keeps the screen on, shows large text, and starts timers automatically"
- Show in demo: Person cooking with phone propped on counter, glancing at steps
- Target audience: Home cooks who use recipes while actually cooking (not just browsing)

---

## Part 8: Sync & Cloud (Multi-Device Experience)

### 8.1 Cloud Sync (Firebase)

**One-Line**: Add a recipe on your phone, cook it on your iPad—everything syncs automatically.

#### What Syncs

**Recipe Data**:
- Recipe content (title, ingredients, instructions, times, servings)
- Collections and organization
- Customizations (card backgrounds, stickers, annotations)
- Recipe lineage and version history
- Favorites and love marks

**User Data**:
- Shopping lists (with real-time checkmarks)
- Meal plans and dinner party timelines
- Cooking history (when you cooked each recipe)
- User preferences (theme, measurement units)

**Images**:
- Recipe photos stored in Firebase Storage
- Cached locally for offline access
- Auto-downloads on new devices

#### User Experience

**Multi-Device Scenario**:
```
1. User shares recipe from Safari on iPhone → Imports to Heirloom
2. Recipe syncs to cloud automatically
3. User opens Heirloom on iPad → Recipe appears
4. User edits recipe on iPad (adds notes)
5. Changes sync back to iPhone
6. User opens Heirloom on Mac → All changes visible

Total sync time: < 3 seconds per device
```

**Offline Behavior**:
- Recipes cached locally (can view and cook offline)
- Edits saved locally when offline
- Auto-syncs when back online
- No data loss if offline for days

**Conflict Resolution**:
- If same recipe edited on two devices simultaneously:
  - Shows merge dialog: "You edited this on iPhone and iPad. Which version to keep?"
  - Can choose one or merge both changes

#### Technical Details

- **Backend**: Firebase Firestore (NoSQL database)
- **Storage**: Firebase Storage (for images)
- **Auth**: Firebase Auth (Sign in with Apple/Google)
- **Real-Time Sync**: Uses Firestore listeners for instant updates
- **Bandwidth Optimization**: Only syncs changes, not entire recipe database

#### Marketing Angle

This is **expected functionality**, not a differentiator:
- Don't lead with sync—it's table stakes
- Mention in feature lists: "Syncs across iPhone, iPad, and Mac"
- Emphasize **privacy**: "Your recipes are yours—no ads, no data selling"

### 8.2 Data Export & Import - **NEW IN 2.0**

**One-Line**: Export your entire Heirloom collection—recipes, connections, profile, everything—and import it anywhere.

#### The Problem This Solves

**Migration**: Switching devices or accounts? Don't lose your data
**Backup**: Keep a complete backup of your culinary life
**Portability**: Your data isn't locked in—export anytime
**GDPR Compliance**: Right to data portability enshrined in law

#### Two Export Options

**1. Full Backup** (v2 format):
- ✅ All recipes with images, ingredients, instructions
- ✅ Your profile (name, photo, bio)
- ✅ All connections and relationships
- ✅ Privacy settings
- ✅ Recipe comments and notes
- ✅ Kitchen Table data
- 📦 Result: Complete snapshot of your Heirloom account

**2. Recipes Only** (v1 format - backward compatible):
- ✅ All recipes with metadata
- ✅ Recipe comments and notes
- ❌ No profile data
- ❌ No connections
- 📦 Result: Just recipes (compatible with older Heirloom versions)

#### User Experience

**Exporting Data**:
```
1. Settings → Privacy → "Export My Data"
2. Select export type:
   - "Full Backup" (recommended)
   - "Recipes Only"
3. Review what will be exported (checklist)
4. Tap "Export Data" button
5. Processing... (shows progress)
6. Success screen with "Share Export File" button
7. System share sheet opens
8. Save to Files, iCloud, or share via AirDrop/email
```

**File Details**:
- Format: JSON (human-readable text file)
- Naming: `heirloom-export-v2-{timestamp}.json`
- Size: Varies (recipes only ~1-5MB, full backup ~5-20MB)
- Compression: Pretty-printed JSON with sorted keys

**Importing Data**:
```
1. Settings → Privacy → "Export My Data" → "Import" tab
2. Tap "Choose Import File"
3. System file picker opens (JSON only)
4. Select export file
5. ImportPreviewSheet opens showing:
   - Recipe count
   - Profile data (if present)
   - Connection count
   - Privacy settings count
   - Warnings (if any)
6. Review "What will be imported" checklist
7. Tap "Import" button
8. Processing... (shows progress)
9. Import result screen:
   - Success or partial success indicator
   - Statistics: "X recipes imported, Y connections restored"
   - Error list (if any)
10. Tap "Done"
11. Recipes appear in Collections
```

#### Import Behavior

**Merge Mode** (default):
- Imports merge with existing data (never deletes)
- Duplicate recipes skipped (detected by UUID)
- Connections attempted to restore (may fail if user not found)
- Profile data updates current profile (doesn't replace)

**Connection Restoration**:
- Attempts to reconnect with imported connection userIds
- If user found: Connection restored automatically
- If user not found (deleted account, changed handle): Shows in error list
- **Future**: Manual reconnection UI for failed connections

**Version Detection**:
- Automatically detects v1 (recipes only) vs v2 (full backup)
- v1 files import successfully (recipes only)
- v2 files import with full social data
- Forward compatible: Newer versions can read older exports

#### Technical Details

**Export Format (v2)**:
```json
{
  "version": 2,
  "exportDate": "2026-02-01T12:00:00Z",
  "appVersion": "2.0.0",
  "userId": "user-id-here",
  "recipes": [...],
  "userProfile": {...},
  "connections": [...],
  "kitchenTables": [...],
  "privacySettings": {...}
}
```

**Date Encoding**: ISO8601 strings for maximum compatibility
**File Location**: iOS temporary directory (auto-cleaned by system)
**Security**: No encryption (files contain your data in plain text)

#### Marketing Angle

This is a **trust and transparency feature**:

**Headlines**:
- "Your data is yours—export anytime, no lock-in"
- "Complete backup: recipes, connections, everything"
- "Switch devices? Import your entire collection in one tap"

**GDPR Compliance**:
- Satisfies right to data portability
- Satisfies right to access (download all data)
- Shows commitment to user privacy

**Competitive Angle**:
- Paprika: Export recipes only (no social data) → Heirloom exports everything
- Whisk: No export feature → Heirloom full portability
- Apple Notes: No structured export → Heirloom JSON format

---

### 8.3 Privacy & Data Ownership

**One-Line**: Your recipes are yours—no ads, no tracking, no selling your data.

#### Privacy Guarantees

1. **No Ads**: Heirloom is subscription-based, not ad-supported
2. **No Tracking**: No third-party analytics (Google Analytics, Facebook Pixel, etc.)
3. **No Data Selling**: Recipe data never sold to advertisers or aggregators
4. **On-Device AI**: OCR, transcription, and parsing run on-device (not sent to cloud)
5. **Minimal Cloud Data**: Only syncs recipe content, not browsing history or behavior

#### What Heirloom Stores in the Cloud

**Stored**:
- Recipe content (ingredients, instructions, images)
- Collections and organization
- Shared recipes (with explicit permission)

**NOT Stored**:
- Browsing history (which websites you visit)
- Search queries (what you search for outside Heirloom)
- Usage analytics (how often you open the app)

#### Technical Details

- **Encryption**: Data encrypted in transit (TLS) and at rest (Firebase default encryption)
- **Account Deletion**: Users can delete account + all data permanently
- **Data Export**: Can export all recipes as JSON (for portability)

#### Marketing Angle

This is a **trust builder** in a world of data privacy concerns:
- "Your recipes are yours—no ads, no tracking, no selling your data"
- Position as ethical alternative to free apps that monetize user data
- Target audience: Privacy-conscious users, people wary of big tech

---

## Part 9: Community & Discovery (Share & Discover)

**NEW IN 2.0** - Join the Heirloom community by sharing your recipes publicly and discovering thousands of recipes from other home cooks.

### 9.1 Public Recipe Discovery

**One-Line**: Browse, search, and save recipes from thousands of home cooks—your personal cookbook meets community cookbook.

#### The Problem This Solves

You've built a great personal recipe collection, but:
- Sometimes you need fresh inspiration
- You want to see what others are cooking
- You'd love to share your best recipes with people beyond your immediate circle
- Traditional recipe sites are cluttered with ads and life stories

Heirloom Discovery is **community-curated recipes** from real home cooks, searchable and organized, with no ads or sponsored content.

#### How It Works

**Discovering Recipes**:
```
1. From recipe list → Tap "Discover Recipes" banner
2. Browse three tabs:
   - Trending 🔥: Hot recipes right now (trending algorithm)
   - New ✨: Freshly published recipes (chronological)
   - Popular ⭐: Most-saved all-time favorites
3. Tap any recipe → View full detail (image, ingredients, instructions)
4. Tap "Save to My Recipes" → Copy added to your collection
5. Recipe includes attribution: "Based on recipe by [Creator Name]"
```

**Publishing Your Recipes**:
```
1. Open any recipe you created
2. Tap share button (⋯) → "Share Publicly"
3. Review what will be shared (title, ingredients, instructions, image, tags)
4. Tap "Publish"
5. Recipe now live in Discovery with globe badge on your card
6. Track views and saves in real-time
```

**What Gets Shared Publicly**:
- ✅ Recipe title, description, and image
- ✅ Ingredients and instructions
- ✅ Prep time, cook time, servings
- ✅ Tags you've added
- ✅ Your profile name and photo

**What Stays Private**:
- ❌ Personal notes on card back
- ❌ Collection membership
- ❌ Who you've shared it with privately
- ❌ Internal recipe IDs and metadata

#### Discovery Feed Features

**Search**:
- Keyword search (recipe titles, ingredients, tags)
- 300ms debounce for smooth typing
- Category filter chips (dessert, dinner, vegan, etc.)
- Results sorted by relevance

**Trending Algorithm**:
```javascript
trendingScore = (viewCount * 0.3) + (saveCount * 5.0) + (cookCount * 2.0) + recencyBoost
```
- Balances popularity with freshness
- Recalculated daily at 2am UTC
- Prevents stale recipes from dominating feed

**Pagination**:
- 20 recipes per page
- Infinite scroll with cursor-based paging
- 5-minute in-memory cache for performance

#### Attribution & Credit System

**Fork Model** (Upstream Attribution):

When you save a recipe from Discovery:
1. **Copy Created**: Recipe copied to your "From Friends" collection
2. **Attribution Preserved**: Shows "Based on recipe by [Creator Name]"
3. **Link to Original**: Tap creator badge → View their profile
4. **Update Tracking**: "View Original" button shows current version
5. **Your Edits Stay Yours**: Your changes don't affect the original

**Creator Benefits**:
- Get credit when others save your recipes
- Track views and saves (analytics)
- See your most popular recipes
- Build reputation in community

**Recipe Lineage Integration**:
- Saved recipes show in lineage tree
- Creator appears as contributor node
- Connection status indicated (if connected)
- "View Original" syncs with latest version

#### Safety & Moderation

**Report System**:
```
6 Report Reasons:
- Inappropriate content
- Spam or misleading
- Copyright violation
- Offensive or hateful
- Not a recipe
- Other (with details)
```

**Auto-Moderation**:
- Recipe automatically hidden at 10 reports
- Manual review by moderation team
- Hidden recipes removed from Discovery
- Creators may receive warnings
- False reporters may face restrictions

**Community Guidelines**:
- Respect copyright (no direct copies from cookbooks/sites)
- Keep it food-related (recipes only)
- Be respectful (no hate speech or offensive content)
- No spam (no promotional links or marketing)

#### User Experience Details

**Discovery Entry Points**:
- Banner in recipe list: "Discover Recipes" (always visible)
- Deep links: `heirloom://recipe/{id}` opens specific recipe
- Web links: `https://heirloom.app/recipe/{id}` (universal links)

**Publishing Flow**:
```
1. Recipe Detail → Share (⋯) → "Share Publicly"
2. PublishRecipeSheet appears
3. Shows preview of what will be shared
4. Warning if recipe has theme/sample content (can't publish)
5. Tap "Publish" → Success message
6. Globe badge appears on recipe card with view count
```

**Unpublishing Flow**:
```
1. Published recipe → Share (⋯) → "Unpublish"
2. UnpublishConfirmationSheet shows stats
3. Warning: "Removing from Discovery preserves stats for later"
4. Tap "Unpublish" → Recipe removed from Discovery
5. Stats (views, saves) preserved if you re-publish
```

**Stats Display**:
- Globe badge on card: "🌐 142 views"
- Recipe detail: "1.2K views • 89 saves"
- Publishing history: When published, view/save trends

#### Technical Details

**Backend**:
- Firestore collection: `publicRecipes/{recipeId}`
- Cloud Functions:
  - `incrementPublicRecipeView` - Atomic view counter
  - `incrementPublicRecipeSave` - Atomic save counter
  - `calculateTrendingScores` - Daily trending calculation
  - `monitorPublicRecipeReports` - Auto-moderation

**Performance**:
- Discovery feed load: < 2 seconds (p95)
- Recipe detail load: < 1 second (p95)
- Search response: < 1 second (p95)
- Images lazy-loaded with AsyncBlurhashImage (progressive)

**Cost** (per 1000 DAU):
- Firestore: $0.60/day
- Cloud Functions: $0.10/day
- Firebase Storage: $0.15/day
- **Total**: ~$25.50/month per 1000 DAU

**Accessibility**:
- WCAG 2.1 Level AA compliant
- Full VoiceOver support
- Dynamic Type scaling
- Color contrast >4.5:1 (text), >3:1 (UI)

#### Marketing Angle

This is a **community feature** that increases engagement and retention:

**Headlines**:
- "Join a community of 10,000+ home cooks"
- "Discover recipes you won't find anywhere else"
- "Share your best recipes—get credit, build reputation"

**User Stories**:
- "I published my grandmother's lasagna—it's been saved 500 times!"
- "Found the perfect weeknight pasta in Discovery, now it's my go-to"
- "Love seeing my recipes get shared and adapted by the community"

**Target Audience**:
- **Publishers**: Passionate home cooks who want to share (10% of users)
- **Browsers**: Everyone looking for inspiration (30% of users engage)
- **Savers**: People who save 1-2 favorites per month (5% conversion)

**Competitive Angle**:
- Allrecipes/Tasty: Amateur cook content, but cluttered with ads → Heirloom is ad-free, curated
- Pinterest: Just links, no full recipes → Heirloom saves full structured data
- Instagram: Visual but hard to find actual recipes → Heirloom is searchable, organized

---

### 9.2 Direct Recipe Sharing (To Connections)

**One-Line**: Share recipes directly with your connections—they get notified and can accept into their collection.

#### The Problem This Solves

Traditional sharing requires:
1. Generate shareable link
2. Copy link
3. Send via text/email
4. Recipient clicks link
5. Recipient opens Heirloom
6. Recipient imports recipe

That's **6 steps and app switching**. Plus, you don't know if they actually saved it.

#### The Heirloom Solution

**Direct Share Flow**:
```
1. Open recipe → Share (⋯) → "To Connections" tab
2. Select 1 or more connections from list
3. Tap "Share with X Friends"
4. Done

Recipient experience:
1. Push notification: "[Your Name] shared a recipe"
2. Open Kitchen Table → See green banner: "Recipes Shared With You - 1 pending"
3. Tap banner → See shared recipe
4. Tap "Accept Recipe" → Recipe added to "From Friends" collection
```

**Key Differences from Link Sharing**:
- **Direct**: No link copying, recipients get push notification
- **Targeted**: Select specific connections, not public link
- **Tracked**: See who accepted in Share Analytics
- **Private**: Only selected recipients can see

#### Share Analytics Dashboard

**Location**: Kitchen Table → Chart icon (top-right toolbar)

**Displays**:
1. **Overview Cards**:
   - Sent: Total recipes shared by you
   - Received: Total recipes shared with you
   - Accepted: Total acceptances of your shares

2. **Acceptance Rate**:
   - Large percentage (color-coded)
   - Green (>75%), Yellow (50-75%), Red (<50%)
   - Text: "X of Y recipients accepted"
   - Progress bar visualization

3. **Most Shared Recipe**:
   - Shows recipe with highest share count
   - "Shared X times"

4. **Recent Share History**:
   - Chronological list of shares
   - Each row shows:
     - Recipe title
     - Acceptance badge (color-coded)
     - "X of Y accepted"
     - Recipient names
     - Time ago

**Pull to Refresh**: Updates stats in real-time

#### User Experience

**Connection Picker**:
- Shows all connections with:
  - Profile photo
  - Display name
  - "X recipes shared" subtitle (history)
- Search bar (filters as you type)
- Multi-select with checkboxes
- Button updates: "Share with 1 Friend" → "Share with 3 Friends"

**Share Inbox** ("Recipes Shared With You"):
- Green banner in Kitchen Table when pending shares exist
- "1 pending" → "5 pending" count
- Tap banner → SharedWithMeView
- Each share shows:
  - Sender photo
  - Recipe title
  - "From [Sender Name]"
  - Time ago
- Tap share → RecipeReceiveSheet (full preview)
- Accept → Recipe added to "From Friends" collection

**Notifications**:
- Push notification: "[Name] shared a recipe"
- Notification body: Recipe title
- Tap notification → Opens Kitchen Table (or app if closed)

#### Technical Details

**Firestore Schema**:
```javascript
{
  shareId: "...",
  ownerId: "sender-user-id",
  recipeId: "...",
  recipeTitle: "...",
  shareType: "heirloom",
  isDirectShare: true,

  // NEW fields
  recipientUserIds: ["user-1", "user-2"],
  recipientDisplayNames: {
    "user-1": "Alice",
    "user-2": "Bob"
  },
  sharedWithCount: 2,
  acceptedBy: ["user-1"],  // Updates as users accept
  acceptCount: 1,

  createdAt: Timestamp,
  expiresAt: Timestamp (90 days)
}
```

**Queries**:
- Fetch shares for user: `recipientUserIds array-contains userId`
- Fetch share history: `ownerId == userId AND isDirectShare == true`

**Analytics Events**:
- `recipe_shared_direct` - Shared to connections
- `recipe_share_accepted` - Recipient accepted
- `share_analytics_viewed` - Dashboard opened

#### Marketing Angle

This is a **social feature** that drives engagement loops:

**Headlines**:
- "Share recipes with family—they get notified instantly"
- "Track which recipes your friends actually saved"
- "No more sending links—share directly to their collection"

**User Stories**:
- "I share my meal prep recipes with my sister every week"
- "Love seeing which of my recipes my friends actually make"
- "My family has a shared collection now thanks to direct sharing"

**Competitive Angle**:
- Paprika: No direct sharing, only link export → Heirloom has built-in social
- Whisk: Sharing requires account creation → Heirloom uses existing connections
- Notes app: No tracking, no notifications → Heirloom tracks acceptances

---

## Part 10: Monetization Model (Hybrid System)

**MAJOR UPDATE**: Heirloom uses a **hybrid monetization model** combining subscriptions and credits.

### 10.1 The Hybrid Model

**One-Line**: Free daily imports with credits, subscribe for premium features and unlimited access.

Heirloom's monetization has three components:
1. **Credits System** - Pay-per-use for PDF and video imports (with free daily quota)
2. **Premium Subscription** - Unlocks features like video import, cookbook scan, cloud sync
3. **Trial Period** - 14-day trial with daily heritage recipe unlocks

This hybrid approach allows casual users to import recipes for free (within daily quotas) while power users can subscribe for unlimited access or purchase credits for burst usage.

### 10.2 Credits System (Primary Economy)

**One-Line**: 25 free credits per day—import cookbooks without a subscription.

#### Daily Free Quota

Every user receives **25 free credits per day** that reset at midnight:

| Import Type | Credit Cost | Description |
|-------------|-------------|-------------|
| **Text-rich PDF** | 1 credit | PDFs with >50 chars/page (text extraction) |
| **Mixed PDF** | 3 credits | PDFs with some text, some scanned pages |
| **Scanned PDF** | 5 credits | Image-based PDFs requiring Vision API |
| **Video (Audio)** | 1 credit | Videos with speech transcription (on-device) |
| **Video (ASMR)** | 5 credits | Silent/music videos requiring Claude Vision API |

**AI Image Generation** (optional add-on for PDF imports):

| Recipe Count | AI Image Cost | Notes |
|--------------|---------------|-------|
| 1-10 recipes | **0 credits** | Free for small imports |
| 11-25 recipes | 5 credits | Small cookbook |
| 26-50 recipes | 10 credits | Medium cookbook |
| 51+ recipes | 15 credits | Large cookbook |

#### Credit Balance Rules

- **Daily Quota**: 25 credits (resets at midnight)
- **Purchased Credits**: Never expire, roll over indefinitely
- **Deduction Order**: Uses daily quota first, then purchased credits

#### Purchasing Credits

| Package | Price | Credits | Best For |
|---------|-------|---------|----------|
| Small | $5 | 25 credits | Single cookbook import |
| Medium | $10 | 60 credits | Multiple cookbooks |
| Large | $20 | 150 credits | Heavy importer |

#### Cost Confirmation UI

Before any import, users see exactly what it will cost:
- PDF type classification (text-rich, mixed, scanned)
- Total credit cost
- Current quota remaining
- Option to enable AI image generation
- Buy credits or queue for tomorrow (if over quota)

### 10.3 Premium Subscription

**One-Line**: Subscribe for premium features and unlimited access.

#### Free Tier Limits

- **25 recipes max** (encourages upgrade as collection grows)
- **Basic import** (within daily credit quota only)
- **No video import** (requires premium)
- **No cookbook scan** (requires premium)
- **No cloud sync** (local device only)
- **Limited connections** (max 5 connections)
- **Basic export** (recipes only, no social data)
- **Ads** (non-intrusive, banner ads only)

#### Pro Tier (Subscription)

**Pricing**:
- $4.99/month (7-day trial)
- $29.99/year (14-day trial) ← **BEST VALUE** (50% savings)
- $99 lifetime (no subscription) ← **FOUNDING MEMBER**

**What You Get**:
- **Unlimited recipes** (no 25-recipe limit)
- **Video import** (TikTok, Instagram, YouTube)
- **ASMR video processing** (5-pass visual extraction)
- **Cookbook scanning** (OCR from photos)
- **Large PDF import** (50+ pages)
- **Cloud sync** (across iPhone, iPad, Mac)
- **Unlimited connections** (build your Kitchen Table community)
- **Public recipe publishing** (share with the community)
- **Direct sharing analytics** (track who accepted your recipes)
- **Full data export** (recipes + profile + connections)
- **Premium customization** (all card backgrounds, stickers, annotations, card back)
- **Priority support** (email support with 24-hour response)
- **No ads** (clean, ad-free experience)

### 10.4 Trial Period (Heritage Unlocks)

**One-Line**: 14-day trial with daily heritage recipe unlocks—keep what you discover.

During the trial period:
- Full premium access for 14 days
- Heritage recipes unlock progressively (not all at once)
- ~7 new heritage recipes unlock each day
- After trial: User keeps all recipes that were unlocked

| Day | Cumulative Recipes | What Happens |
|-----|-------------------|--------------|
| Day 1 | ~4 recipes | First theme unlocks |
| Day 7 | ~35 recipes | Halfway through trial |
| Day 14 | ~100 recipes | All heritage recipes unlocked |

**Post-Trial Behavior**:
- Unlocked recipes remain accessible (not removed)
- Premium features locked (video import, scan, sync)
- Can continue with free tier + credits
- Upgrade anytime to restore premium access

#### Marketing Angle

**Value-First Approach**:
- "25 free imports per day—most users never need more"
- "Subscribe for premium features like video import and cloud sync"
- "Buy credits only when you need burst imports"

**Transparency**:
- Show cost before import (no surprises)
- Clear quota display (know what's remaining)
- Queue for tomorrow option (patience = free)

---

## Part 10: Target Audience & Positioning

### 10.1 Primary Audience Personas

#### Persona 1: "The Recipe Hoarder"
**Demographics**: 25-45, tech-savvy, spends hours browsing food blogs/Pinterest/TikTok

**Behaviors**:
- Saves 10+ recipes per week
- Has 500+ bookmarks or Notes app URLs
- Rarely cooks from the recipes (collecting > cooking)
- Gets overwhelmed by disorganized collection

**Pain Points**:
- Can't remember which recipe was from which site
- Bookmarks are a black hole (saved but never found again)
- Copying URLs is tedious (kills browsing flow)

**Heirloom Solution**:
- Share Extension (one-tap save while browsing)
- Collections (organize into "Want to Try", "Quick Dinners", etc.)
- Search (find recipes by ingredient or title)

**Marketing Message**:
- "Save recipes as fast as you find them—no more lost bookmarks"

---

#### Persona 2: "The Home Cook"
**Demographics**: 30-60, cooks 3-5 nights/week, values family meals

**Behaviors**:
- Plans weekly menus in advance
- Shops with a list (hates forgetting ingredients)
- Cooks from a core repertoire of 20-30 recipes
- Modifies recipes to family preferences

**Pain Points**:
- Dinner party timing chaos (when to start each dish?)
- Forgetting ingredients at the store (leads to wasted trips)
- Recipes scattered (some in books, some bookmarked, some printed)

**Heirloom Solution**:
- Dinner Party Mode (timeline for multi-dish meals)
- Smart shopping lists (aggregates ingredients)
- OCR scanning (digitize cookbook recipes)

**Marketing Message**:
- "Cook with confidence—never serve cold food or forget ingredients again"

---

#### Persona 3: "The Family Archivist"
**Demographics**: 40-70, values family traditions, inherited recipes from parents/grandparents

**Behaviors**:
- Has physical recipe cards from relatives (some handwritten)
- Wants to preserve family recipes for next generation
- Emotional attachment to food memories
- Shares recipes at family gatherings

**Pain Points**:
- Handwritten recipes fading/damaged (fear of losing them)
- Kids don't have copies (recipes could disappear)
- Changes recipes over time, can't remember original

**Heirloom Solution**:
- OCR scanning (digitize handwritten cards)
- Recipe lineage (track changes across generations)
- Family sharing (send recipes to kids, grandkids)

**Marketing Message**:
- "Preserve family recipes forever—from Grandma's kitchen to yours"

---

#### Persona 4: "The Social Cook"
**Demographics**: 20-35, discovers recipes on TikTok/Instagram, shares food on social media

**Behaviors**:
- Watches cooking videos daily
- Tries trendy recipes (viral pasta, baked feta, etc.)
- Takes photos of plated dishes for Instagram
- Shares recipes with friends via DM

**Pain Points**:
- Videos don't include typed recipes (have to rewatch 5 times)
- Can't remember which video had which recipe
- Downloaded videos sit in camera roll unused
- Wants aesthetic recipe cards for Instagram

**Heirloom Solution**:
- Video-to-recipe (share videos from camera roll, get typed recipes)
- Card customization (aesthetic backgrounds for sharing)
- Share Extension (works from Photos app with saved videos)

**Marketing Message**:
- "Saved cooking videos in your camera roll? Turn them into typed recipes—no more rewatching"

---

#### Persona 5: "The Community Cook" ⭐ **NEW IN 2.0**
**Demographics**: 25-50, social media savvy, loves sharing food content, follows food influencers

**Behaviors**:
- Posts cooking photos on Instagram/TikTok
- Proud of signature recipes ("my famous chocolate chip cookies")
- Likes getting recognition for cooking skills
- Enjoys seeing what others are making
- Shares recipes with friends frequently

**Pain Points**:
- Instagram/TikTok are visual but recipes get lost
- Recipe sites let you publish but cluttered with ads
- No way to see if people actually made your recipe
- Hard to find quality recipes from real home cooks (not influencers)
- No attribution when recipes get shared

**Heirloom Solution**:
- Public Recipe Discovery (publish recipes, get views/saves)
- Share analytics (see who saved your recipes)
- Direct sharing to connections (share with specific friends)
- Attribution system (get credit when recipes shared)
- Clean, ad-free community

**Marketing Message**:
- "Share your best recipes—see who's making them"
- "Get credit for your signature dishes"
- "Join a community that actually cooks, not just posts"

---

### 10.2 Competitive Positioning

#### Competitors & How Heirloom Differentiates

**Paprika** (main competitor):
- **Strength**: Established, powerful features, loyal user base
- **Weakness**: Clunky UI, confusing import flow, no social features
- **Heirloom Advantage**: Share Extension is simpler (1 tap vs 5 steps), modern UI, family sharing/lineage

**Whisk / SideChef / Yummly** (VC-backed apps):
- **Strength**: Large recipe databases, social features, venture funding
- **Weakness**: Algorithmic feeds (push recipes you didn't ask for), ads, data privacy concerns, no direct sharing, no data export
- **Heirloom Advantage**:
  - You control your collection (no algorithmic feed)
  - Privacy-first, ad-free
  - **Community discovery** with attribution (not algorithmic) ⭐ **NEW**
  - **Direct sharing** to connections ⭐ **NEW**
  - **Full data export** (own your data) ⭐ **NEW**

**Apple Notes / Google Keep** (default apps):
- **Strength**: Free, built-in, simple
- **Weakness**: No structured data (can't parse ingredients), no cooking features, no sync for recipes
- **Heirloom Advantage**: Structured recipes (can scale, make shopping lists), cooking mode, sync

**Pinterest** (discovery platform):
- **Strength**: Massive user base, great for discovery
- **Weakness**: Just links (have to click through to website), no offline access, no organization
- **Heirloom Advantage**: Saves full recipe content (works offline), structured data, collections

---

### 10.3 Value Proposition Matrix

| User Need | Heirloom Solution | Competitor Weakness |
|-----------|------------------|---------------------|
| Save recipes while browsing | Share Extension (1 tap from Safari, Notes) | Paprika: 5 steps (copy URL, open app, paste) |
| Cook multi-dish meals | Dinner Party Mode (timeline) | No competitor has this |
| Preserve family recipes | Lineage tracking + contributor profiles ⭐ **NEW** | Paprika: No lineage, Whisk: No attribution |
| Use recipes offline | Full content saved locally | Whisk: Requires internet connection |
| Organize large collections | Collections + search | Notes: No structure or search |
| Extract recipes from videos | Video-to-recipe (share from camera roll) | No competitor extracts from videos |
| Privacy | No ads, no tracking, no data selling | Yummly: Sells user data, shows ads |
| Discover community recipes | Public Discovery with attribution ⭐ **NEW** | Allrecipes: Ads & clutter, Pinterest: Just links |
| Share with family | Direct sharing + acceptance tracking ⭐ **NEW** | Paprika: Link-only, Whisk: No tracking |
| Own your data | Full export (recipes + social) ⭐ **NEW** | Most apps: No export or recipes-only |
| Accessibility | WCAG 2.1 AA compliant ⭐ **NEW** | Most apps: Basic or no accessibility |

---

## Part 11: Marketing Strategy

### 11.1 Landing Page Strategy

You'll need **multiple landing pages** for different acquisition channels. Here's the recommended structure:

#### Landing Page 1: "Share Extension Hero Page" (Primary)
**URL**: `heirloomapp.com` (homepage)

**Target Audience**: General home cooks, recipe hoarders, anyone who saves recipes online

**Hero Section**:
- **Headline**: "Save recipes as fast as you find them"
- **Subheadline**: "One tap from Safari to your recipe collection—no copy/paste, no app switching, no friction"
- **Visual**: Screen recording of Safari → Share → Heirloom (1 tap) → Recipe imported
- **CTA**: "Start Free Trial" (App Store link)

**Feature Sections** (scroll down):
1. **How It Works** (3-step visual):
   - Step 1: Find a recipe while browsing
   - Step 2: Tap Share → Heirloom
   - Step 3: Cook it later (recipe fully imported)

2. **All Import Methods** (grid of icons):
   - Web URLs, Videos (TikTok/IG), PDFs, Images, Notes, Manual entry

3. **Organize Your Way** (screenshot of collections):
   - "Create collections like 'Weeknight Dinners' and 'Mom's Recipes'"

4. **Cook with Confidence** (screenshot of Cooking Mode):
   - "Step-through mode with timers and large text"

5. **Sync Everywhere** (device mockups: iPhone, iPad, Mac):
   - "Add on your phone, cook on your iPad"

6. **Pricing** (Free vs Pro comparison table)

7. **Social Proof** (testimonials, App Store rating)

**Footer**: FAQ, Privacy Policy, Contact

---

#### Landing Page 2: "Family Heritage Page" (Emotional)
**URL**: `heirloomapp.com/family`

**Target Audience**: People with inherited recipes, family archivists, sentimental cooks

**Hero Section**:
- **Headline**: "Preserve family recipes forever"
- **Subheadline**: "From Grandma's kitchen to yours—digitize, share, and track how recipes evolve across generations"
- **Visual**: Photo of handwritten recipe card → Heirloom app showing lineage tree
- **CTA**: "Start Preserving" (App Store link)

**Feature Sections**:
1. **Digitize Handwritten Recipes** (OCR demo):
   - "Photograph recipe cards—AI extracts the recipe instantly"

2. **Track Recipe Lineage** (family tree visual):
   - "See how your lasagna recipe evolved from Grandma → Mom → You"

3. **Share with Family** (screenshot of share flow):
   - "Send recipes to kids and grandkids—they can make their own versions"

4. **Real Stories** (testimonials with photos):
   - User story: "I scanned my grandmother's recipes before she passed. Now my daughter cooks from them."

**CTA**: "Download Heirloom" (App Store link)

---

#### Landing Page 3: "TikTok/Social Cook Page" (Trendy)
**URL**: `heirloomapp.com/videos`

**Target Audience**: Gen Z/Millennial cooks who discover recipes on TikTok/Instagram

**Hero Section**:
- **Headline**: "Turn saved videos into typed recipes"
- **Subheadline**: "Downloaded a cooking video? Share it from your camera roll—get the full recipe typed out."
- **Visual**: Split screen: Video in Photos app → Share to Heirloom → Recipe card with ingredients/instructions
- **CTA**: "Try It Free" (App Store link)

**Feature Sections**:
1. **How It Works** (video demo):
   - Show cooking video saved in camera roll → Share button → Heirloom → Typed recipe appears

2. **Works with All Platforms**:
   - TikTok, Instagram, YouTube, Vimeo

3. **Customize & Share** (aesthetic recipe cards):
   - "Make your recipes Instagram-worthy with custom backgrounds"

4. **Never Lose a Recipe** (screenshot of organized collection):
   - "All your saved TikTok recipes in one place"

**CTA**: "Download Now" (App Store link)

---

#### Landing Page 4: "App Store Pre-Install Page" (Paid Ads)
**URL**: `heirloomapp.com/get-started`

**Target Audience**: People who clicked a paid ad (Facebook, Instagram, Google)

**Hero Section**:
- **Headline**: "The recipe app that gets out of your way"
- **Subheadline**: "Import, organize, and cook—all with less friction"
- **Visual**: App icon + device mockup showing recipe list
- **CTA**: "Download Free" (App Store link)

**No Scroll Required** (single screen, optimized for mobile):
- 3 key features (Share Extension, Cloud Sync, Cooking Mode)
- App Store rating (5 stars, X reviews)
- "Free 7-day trial, cancel anytime"
- Big CTA button

**Goal**: Highest conversion rate (ad click → App Store install)

---

### 11.2 App Store Creative Strategy

Your App Store listing is your **highest-converting landing page**. Optimize for both search (keywords) and conversion (screenshots).

#### App Name & Subtitle

**App Name**: "Heirloom: Recipe Manager"
- Primary keyword: "Recipe Manager"
- Secondary keywords: "Cookbook, Meal Planner, Shopping List"

**Subtitle** (30 characters max):
- Option 1: "Save recipes in one tap"
- Option 2: "Import, organize, cook"
- Option 3: "Your digital cookbook"

#### App Description (First 3 Lines Critical)

**Line 1-3** (visible without "more"):
```
Save recipes as fast as you find them—one tap from Safari to your collection.

Import from any website, TikTok videos, PDFs, or handwritten recipe cards. Heirloom handles the formatting, parsing, and organization so you can focus on cooking.
```

**Full Description Structure**:
1. **Share Extension Pitch** (primary value prop)
2. **All Import Methods** (web, video, PDF, image, manual)
3. **Smart Organization** (collections, search, sync)
4. **Cooking Features** (Cooking Mode, timers, scaling)
5. **Family Features** (lineage, sharing, heritage preservation)
6. **Privacy** (no ads, no tracking, your data is yours)
7. **Pricing** (free trial, Pro features)

#### Screenshot Strategy (10 Screenshots Max)

**Screenshot 1: Share Extension** (hero feature)
- Visual: Safari browser showing recipe → Share sheet with Heirloom selected
- Caption: "Save recipes in one tap—no copy/paste"

**Screenshot 2: Import Confirmation**
- Visual: "Importing recipe..." confirmation screen
- Caption: "Works while you keep browsing"

**Screenshot 3: Recipe Collection**
- Visual: Beautiful grid of recipe cards with images
- Caption: "All your recipes, organized and searchable"

**Screenshot 4: Recipe Detail**
- Visual: Full recipe card with ingredients, instructions, image
- Caption: "Clean, easy-to-read recipes"

**Screenshot 5: Cooking Mode**
- Visual: Large-text step-through mode with timer
- Caption: "Cook with confidence—built-in timers and hands-free controls"

**Screenshot 6: Dinner Party Timeline**
- Visual: Timeline showing multiple dishes with start times
- Caption: "Never serve cold food again—smart timing for multi-dish meals"

**Screenshot 7: Video Import**
- Visual: Video in Photos app → Share to Heirloom → Extracted recipe
- Caption: "Share videos from your camera roll—get typed recipes"

**Screenshot 8: Family Lineage**
- Visual: Lineage tree showing Grandma → Mom → You
- Caption: "Preserve family recipes across generations"

**Screenshot 9: Smart Shopping List**
- Visual: Organized shopping list with checkboxes
- Caption: "Automatic shopping lists from your meal plan"

**Screenshot 10: Public Discovery** ⭐ **NEW**
- Visual: Discovery feed with Trending/New/Popular tabs
- Caption: "Discover thousands of recipes from the community"

**Screenshot 11: Contributor Profiles** ⭐ **NEW**
- Visual: Lineage timeline showing contributor avatars and connection status
- Caption: "See who contributed each recipe version"

**Screenshot 12: Direct Sharing** ⭐ **NEW**
- Visual: Connection picker + share analytics dashboard
- Caption: "Share directly with friends—see who accepted"

**Screenshot 13: Card Back** ⭐ **NEW**
- Visual: Recipe card flipped to back showing notes and photos
- Caption: "Flip cards to add notes and cooking modifications"

**Screenshot 14: Sync & Export**
- Visual: iPhone, iPad, Mac showing same recipe + export screen
- Caption: "Syncs across devices—export your entire collection"

#### App Preview Video (30 seconds max)

**Script**:
```
[0:00-0:05] Show Safari browsing food blog
[0:05-0:08] User finds recipe, taps Share → Heirloom
[0:08-0:10] "Importing recipe..." confirmation
[0:10-0:12] User continues browsing (shows multiple sites)
[0:12-0:15] Cut to later: User opens Heirloom app
[0:15-0:18] Shows collection of imported recipes
[0:18-0:22] Tap one recipe → See full detail view
[0:22-0:25] Tap "Start Cooking" → Cooking Mode with timer
[0:25-0:28] Show meal being plated, looks delicious
[0:28-0:30] Logo + tagline: "Heirloom — Recipes that matter"
```

**No Voiceover** (text captions only, works with sound off)

---

### 11.3 Video Scripts & Storyboards

You requested **scripts and storyboards** for video creation. Here are 3 video concepts optimized for different platforms.

---

#### Video 1: "Share Extension Hero" (30 seconds, TikTok/Instagram Reels)

**Target Platform**: TikTok, Instagram Reels, Facebook Feed
**Goal**: Show Share Extension in action
**Format**: POV (point-of-view) phone screen recording

**Storyboard**:

| Time | Visual | Text Overlay | Audio |
|------|--------|--------------|-------|
| 0:00-0:03 | POV: Scrolling Safari on iPhone, browsing NYT Cooking | "Me: finding recipes I'll never make" | Trending TikTok audio (upbeat) |
| 0:03-0:06 | Tap on a pasta recipe, page loads | "This looks good tho" | Same audio |
| 0:06-0:09 | Tap Safari Share button, sheet appears | "Wait..." | Music drops |
| 0:09-0:12 | Tap "Heirloom" in share sheet | "One tap?" | Music builds |
| 0:12-0:15 | See "Importing recipe..." confirmation (1 sec) | "That's it??" | Music peaks |
| 0:15-0:18 | Back to Safari, continue scrolling, share 2 more recipes quickly | "No copy/paste?" | Same audio |
| 0:18-0:21 | Cut to Heirloom app showing all 3 imported recipes | "Oh." | Music |
| 0:21-0:24 | Tap one recipe → See full detail with image, ingredients | "OH." | Music |
| 0:24-0:27 | Scroll through ingredients, see instructions | "This is everything" | Music |
| 0:27-0:30 | Show app icon + text "Heirloom App" | "Link in bio" | Music fades |

**Script Notes**:
- No voiceover, just text overlays and trending audio
- Use popular audio trend (e.g., "Material Girl", "Aesthetic", whatever's trending)
- Emphasize speed and ease (1 tap vs traditional 5-step process)

**Call to Action**:
- Last frame: "Download Heirloom (link in bio)"
- Pin comment with App Store link

---

#### Video 2: "Grandma's Recipe" (60 seconds, YouTube/Instagram Feed)

**Target Platform**: YouTube Shorts, Instagram Feed (longer format)
**Goal**: Emotional storytelling around family recipes
**Format**: Cinematic narrative with real person

**Storyboard**:

| Time | Visual | Voiceover | Music |
|------|--------|-----------|-------|
| 0:00-0:05 | Close-up of elderly hands holding a worn recipe card | "This is my grandmother's lasagna recipe" | Soft piano |
| 0:05-0:10 | Camera pans to show faded handwriting on card | "She wrote it in 1985" | Piano continues |
| 0:10-0:15 | Young woman (granddaughter) enters frame, takes photo of card with phone | "I almost lost it" | Piano |
| 0:15-0:20 | Phone screen: Heirloom app processing image with OCR | "Heirloom scanned it in seconds" | Piano + subtle tech sound |
| 0:20-0:25 | Show extracted recipe in app (typed, clean) | "Now it's digital, forever" | Piano |
| 0:25-0:30 | Woman taps "Share with Family" button | "I shared it with my sister" | Piano |
| 0:30-0:35 | Split screen: Both phones showing same recipe | "Now we both have it" | Piano |
| 0:35-0:40 | Show lineage tree: Grandma → Mom → Sister → Narrator | "And when we make changes..." | Piano |
| 0:40-0:45 | Tap to see "My Version" with added garlic | "We each keep our own version" | Piano |
| 0:45-0:50 | Cut to kitchen: Woman cooking lasagna, phone propped up showing recipe | "But we always know where it started" | Piano builds |
| 0:50-0:55 | Finished lasagna on table, family gathering around | "Grandma's recipe lives on" | Piano peaks |
| 0:55-0:60 | Fade to Heirloom logo + tagline | "Heirloom — Recipes that matter" | Piano fades |

**Script Notes**:
- Emotional, slow-paced storytelling
- Focus on heritage preservation (not tech features)
- Use real person (not actors if possible—find beta tester with good story)

**Call to Action**:
- End card: "Download Heirloom on the App Store"
- Description: Link to landing page `/family`

---

#### Video 3: "Dinner Party Chaos" (45 seconds, YouTube/Facebook)

**Target Platform**: YouTube, Facebook Feed
**Goal**: Show Dinner Party Mode solving real problem
**Format**: Before/After comparison (comedic)

**Storyboard**:

| Time | Visual | Voiceover | Music |
|------|--------|-----------|-------|
| 0:00-0:05 | Kitchen chaos: Multiple timers ringing, person stressed, flipping through printed recipes | "Hosting dinner shouldn't feel like conducting an orchestra" | Chaotic orchestral music |
| 0:05-0:10 | Person looks at clock: 6:45 PM, guests arrive at 7:00 PM | "Everything needs to finish at the same time" | Music intensifies |
| 0:10-0:15 | Show 3 recipes printed out with conflicting cook times | "But how?" | Music stops |
| 0:15-0:20 | Cut to reset: Same person, calmer, opens Heirloom app | "There's a better way" | Calm music starts |
| 0:20-0:25 | Tap "Dinner Party" button, add 3 recipes | "Pick your dishes" | Calm music |
| 0:25-0:30 | Set finish time to 7:00 PM, app generates timeline | "Set your target time" | Calm music |
| 0:30-0:35 | Timeline appears: 5:30 Start Chicken, 6:15 Start Veggies, 6:50 Start Salad | "Heirloom tells you when to start each dish" | Calm music |
| 0:35-0:40 | Person confidently cooking, glancing at phone timeline | "Everything finishes on time" | Calm music |
| 0:40-0:43 | Cut to table: All dishes plated perfectly, guests arriving | "No stress, no guesswork" | Calm music peaks |
| 0:43-0:45 | Fade to logo + tagline | "Heirloom — Cook smarter" | Music fades |

**Script Notes**:
- Comedic contrast (before = chaos, after = calm)
- Show UI clearly (timeline screen is hero shot)
- Target audience: People who entertain

**Call to Action**:
- End card: "Download Heirloom"
- Description: "Never serve cold mashed potatoes again. Get Heirloom on the App Store."

---

### 11.4 Paid Advertising Strategy

**Where to Run Ads**:

1. **Facebook/Instagram Ads** (Primary)
   - Target: Women 25-55, interests = cooking, food, recipes, meal planning
   - Creative: Video 1 (Share Extension) or Video 2 (Grandma's Recipe)
   - Placement: Instagram Stories, Instagram Feed, Facebook Feed
   - Budget: Start $500/month, scale based on CAC

2. **TikTok Ads** (Secondary)
   - Target: 18-35, interests = cooking, TikTok recipes, food trends
   - Creative: Video 1 (Share Extension) - must be native TikTok style
   - Placement: In-feed ads (blend with organic content)
   - Budget: Start $300/month

3. **Google Search Ads** (Tertiary)
   - Target Keywords: "recipe manager app", "recipe organizer", "paprika alternative"
   - Landing Page: Homepage or `/get-started`
   - Budget: Start $200/month

4. **Pinterest Ads** (Experimental)
   - Target: Women 30-60, searches for recipes
   - Creative: Static images of recipe cards
   - Placement: Search results for recipe queries
   - Budget: Start $100/month

**Success Metrics**:
- **CAC (Cost per Acquisition)**: Target <$15 per install
- **LTV (Lifetime Value)**: Estimate $60 (1 year subscription retention)
- **LTV/CAC Ratio**: Target >3:1 (sustainable growth)

---

### 11.5 Organic Growth Strategy

**App Store Optimization (ASO)**:
1. Optimize keywords in app name, subtitle, description
2. Generate positive reviews (prompt users after 3 recipes imported)
3. Update screenshots quarterly (show new features)
4. Localize for top 10 markets (Spanish, French, German, etc.)

**Content Marketing**:
1. **Blog** (heirloomapp.com/blog):
   - "How to Digitize Your Grandmother's Recipes"
   - "The Best Recipe Apps for Home Cooks (2026)"
   - "How to Organize Your Digital Recipe Collection"
   - SEO-optimized for long-tail keywords

2. **YouTube** (Heirloom App channel):
   - Tutorial videos ("How to Import from TikTok", "How to Use Dinner Party Mode")
   - Behind-the-scenes (show development process, humanize brand)
   - User testimonials (interview beta testers)

3. **Instagram** (@heirloomapp):
   - Share user-generated content (recipe cards customized by users)
   - Tips & tricks (carousel posts showing features)
   - Food photography (aspirational content)

4. **TikTok** (@heirloomapp):
   - POV videos ("When you discover Heirloom's Share Extension")
   - Trend participation (use trending audio with recipe angle)
   - Duets/Stitches with cooking creators

**Partnerships**:
1. **Food Bloggers**: Give free Pro subscriptions to top food bloggers in exchange for mentions
2. **Cooking Influencers**: Sponsor TikTok/Instagram creators (mid-tier, 50k-500k followers)
3. **Recipe Websites**: Partner with sites like AllRecipes, Food52 (add "Save to Heirloom" button on their recipe pages)

---

## Part 12: Success Metrics & KPIs

### 12.1 Acquisition Metrics

**Downloads**:
- Target: 10k downloads in first 6 months
- Breakdown: 60% organic (ASO, word of mouth), 40% paid ads

**Share Extension Activations**:
- % of users who use Share Extension within first 7 days: Target >50%
- This is the primary engagement metric (validates product-market fit)

**Source Attribution**:
- Track where installs come from (Instagram ads, TikTok, search, etc.)
- Optimize spend toward highest-converting channels

### 12.2 Activation Metrics

**Onboarding Completion**:
- % of users who sign in and import first recipe: Target >70%
- Drop-off analysis: Where do users abandon onboarding?

**Time to First Recipe**:
- Average time from install to first imported recipe: Target <2 minutes
- Faster = better (validates frictionless promise)

**Share Extension Onboarding**:
- % of users who complete Share Extension setup (enable in Settings): Target >60%
- This is critical—if they don't set it up, they miss core value

### 12.3 Engagement Metrics

**Active Users**:
- DAU (Daily Active Users): Target 30% of install base
- WAU (Weekly Active Users): Target 60% of install base
- MAU (Monthly Active Users): Target 80% of install base

**Recipes Imported Per User**:
- Average recipes imported per user: Target >10 in first month
- Power users (>50 recipes): Target 20% of user base

**Cooking Mode Activations**:
- % of recipes that get used in Cooking Mode: Target >30%
- This shows recipes aren't just collected—they're actually cooked

### 12.4 Retention Metrics

**Day 1 Retention**: % of users who return day after install: Target >40%
**Day 7 Retention**: Target >25%
**Day 30 Retention**: Target >15%

**Pro Subscription Conversion**:
- % of free users who upgrade to Pro within 30 days: Target >10%
- Free trial conversion rate: Target >40% (users who start trial → pay)

### 12.5 Revenue Metrics

**MRR (Monthly Recurring Revenue)**:
- Target: $5k MRR by month 6, $20k MRR by month 12

**ARPU (Average Revenue Per User)**:
- Target: $3/month (blend of free and Pro users)

**Churn Rate**:
- Monthly subscription churn: Target <5%
- Annual subscription churn: Target <15%

---

## Appendix: Quick Reference

### Elevator Pitch (30 seconds)
"Heirloom is the recipe app that gets out of your way. Save recipes in one tap from Safari—no copy/paste, no app switching. Import from any website, TikTok videos, PDFs, even handwritten recipe cards. Organize your collection, cook with smart timers, and share recipes with family. Your recipes, your way."

### Key Features (Bulleted)

**Import & Organize:**
- ✅ Share Extension (one-tap import from Safari)
- ✅ Video-to-recipe (TikTok, Instagram, YouTube) with **ASMR/Vision mode** ⭐ **NEW**
- ✅ **PDF Cookbook Import** (full cookbook → all recipes extracted) ⭐ **NEW**
- ✅ OCR scanning (handwritten recipes, cookbook photos)
- ✅ **Voice Recipe Entry** (speak/read recipes aloud) ⭐ **NEW**
- ✅ Smart ingredient parsing (shoppable lists)
- ✅ Collections and auto-categorization by source type

**AI Features:** ⭐ **NEW**
- ✅ **AI Recipe Generation** (create recipes from prompts)
- ✅ **AI Image Generation** (optional for PDF imports)
- ✅ **Random Recipe** easter egg (shake to surprise)
- ✅ Claude-powered recipe extraction and structuring

**Cooking Features:**
- ✅ Cooking Mode (step-through with timers)
- ✅ Dinner Party Mode (multi-dish timing)
- ✅ Recipe scaling (adjust servings)
- ✅ Smart shopping lists with prep details

**Community & Sharing:** ⭐ **NEW IN 2.0**
- ✅ **User Profiles** (avatar, bio, cooking identity)
- ✅ **Public Recipe Discovery** (trending, search, save)
- ✅ **Direct sharing to connections** (with analytics)
- ✅ **Connection requests** (find users, send requests)
- ✅ Recipe lineage with **contributor profiles**
- ✅ Share analytics dashboard

**Personalization:**
- ✅ Customization (backgrounds, stickers, annotations)
- ✅ **Card back with notes** (flip cards, add photos)
- ✅ Love marks and favorites

**Data & Privacy:**
- ✅ Cloud sync (iPhone, iPad, Mac)
- ✅ **Full data export/import** (recipes + social data)
- ✅ Privacy-first (no ads, no tracking)
- ✅ GDPR compliant

**Accessibility:** ⭐ **NEW IN 2.0**
- ✅ WCAG 2.1 Level AA compliant
- ✅ Full VoiceOver support
- ✅ Dynamic Type scaling

### Competitive Advantages
1. **Share Extension** = Fastest import (1 tap vs 5 steps)
2. **Video-to-recipe** = Only app that transcribes cooking videos (audio + vision modes)
3. **PDF Cookbook Import** = Import entire cookbooks with AI images ⭐ **NEW**
4. **AI Recipe Generation** = Create recipes from prompts, random recipe feature ⭐ **NEW**
5. **Recipe lineage with contributors** = Track family recipe evolution with full attribution
6. **Public Discovery** = Community recipes with attribution, no ads
7. **Direct Sharing** = Share to connections with acceptance tracking
8. **Full Data Export** = Export everything (recipes + social data), not just recipes
9. **Privacy** = No ads, no data selling (ethical alternative)
10. **Accessibility** = WCAG 2.1 AA compliant (industry-leading)

### Primary Marketing Messages
1. "Save recipes as fast as you find them"
2. "The recipe app that gets out of your way—and brings cooks together" ⭐ **UPDATED**
3. "Preserve family recipes forever—with full family lineage" ⭐ **UPDATED**
4. "Turn saved videos into typed recipes"
5. "Join a community of home cooks—discover and share" ⭐ **NEW**
6. "Share directly with family—they get notified and can accept" ⭐ **NEW**
7. "Export everything—your data, your way" ⭐ **NEW**

### Target Acquisition Channels
1. Instagram/Facebook Ads (primary)
2. TikTok organic + ads (secondary)
3. App Store search (ASO)
4. Food blogger partnerships
5. YouTube tutorials

---

## Document Version History

- **v1.1.4 (Build 20)**: Original feature definition guide
- **v2.0.0 (Build 23)**: Complete rewrite for marketing focus, Share Extension as hero feature, updated for current app state (Jan 2026)
- **v2.0.0 (Build 60+)**: Major update with community features (Feb 2026)
  - **NEW**: Public Recipe Discovery (browse, search, publish, moderation)
  - **NEW**: Enhanced lineage with contributor profiles and connection status
  - **NEW**: Full data export/import (v2 format with social data)
  - **NEW**: Connection requests and user search
  - **NEW**: Direct recipe sharing to connections with analytics
  - **NEW**: Card back flip functionality with notes and photos
  - **NEW**: Comprehensive accessibility (WCAG 2.1 AA)
  - **UPDATED**: All sections expanded with 2.0 features
  - **UPDATED**: Marketing messages and positioning for community focus
- **v2.1.0 (Build 70+)**: AI & Import Pipeline Update (Feb 2026)
  - **NEW**: PDF Cookbook Import (Section 2.5) - Full multi-page cookbook extraction
  - **NEW**: AI Image Generation for PDF imports - Replace page screenshots with DALL-E images
  - **NEW**: AI Recipe Generation (Section 3.4) - Create recipes from prompts
  - **NEW**: Random Recipe easter egg - Shake phone for surprise recipe
  - **NEW**: ASMR/Vision Mode (Section 2.3) - Extract recipes from silent videos
  - **NEW**: Voice Recipe Entry (Section 2.4) - Speak recipes aloud, AI transcribes
  - **NEW**: User Profiles (Section 5B.0) - Profile setup, avatar, bio, stats
  - **NEW**: Auto-categorization by source type (web, video, cookbook, scanned, AI)
  - **NEW**: Credits system documentation (tiered costs for imports)
  - **UPDATED**: Shopping lists with preparation details and recipe navigation
  - **UPDATED**: Attribution system for PDF imports and cookbook sources

---

**End of Document**

## Summary of Changes in v2.0 and v2.1

This updated guide documents **8 major new feature categories** and numerous enhancements:

### v2.0 Community Features

1. **Community Features** (Part 9):
   - Public Recipe Discovery (browse, search, publish)
   - Direct sharing to connections
   - Share analytics dashboard

2. **Enhanced Social** (Part 5B):
   - User profiles with avatar, bio, stats
   - Connection requests and user discovery
   - Improved connection management

3. **Contributor Profiles** (Part 4.3 update):
   - Lineage integration with user profiles
   - Connection status indicators
   - Tappable contributor links

4. **Data Portability** (Part 8.2 new):
   - Full backup export/import
   - Connection restoration
   - GDPR compliance

5. **Accessibility & Polish** (Throughout):
   - WCAG 2.1 Level AA compliance
   - Enhanced card customization (flip cards)
   - Design system improvements

### v2.1 AI & Import Pipeline

6. **PDF Cookbook Import** (Part 2.5 new):
   - Full multi-page PDF extraction pipeline
   - Credits system (1-5 credits based on PDF type)
   - Optional AI image generation (DALL-E)
   - Auto-categorization by source type
   - Author/cookbook attribution

7. **AI Recipe Features** (Part 3.4 new):
   - AI Recipe Generation from prompts
   - Random Recipe easter egg (shake to surprise)
   - Claude-powered recipe structuring

8. **Enhanced Import Methods** (Part 2 updates):
   - ASMR/Vision Mode for silent videos (5 credits)
   - Voice Recipe Entry (speak/read aloud)
   - Shopping list prep extraction and navigation

**Total New Features**: 15+ major additions, 25+ significant enhancements

**Lines Added**: ~4,500+ lines of new documentation

**Marketing Impact**: 5 new personas, 10 competitive advantages (up from 4), 8 primary messages (up from 4)

---

This feature definition guide is the foundation for all marketing materials. Use it to create:
- Landing pages (multiple versions for different audiences)
- App Store description and screenshots (16 screenshots now, up from 10)
- Video scripts and storyboards (7 major new demo flows)
- Ad copy and creative briefs (AI + community messaging)
- Press releases and media kits ("Heirloom 2.1 brings AI-powered cookbook import")
- Sales decks and pitch materials (AI differentiation story)

**Next steps**:
1. Create "What's New in 2.1" announcement materials (AI features)
2. Update App Store with new screenshots showcasing PDF import and AI generation
3. Create video content showing PDF cookbook → AI images pipeline
4. Marketing for voice recipe entry (accessibility + convenience angle)
5. Highlight credits system transparency in pricing page
6. Prepare press release for 2.1 launch

**Key Messaging for 2.1 Launch**:
- "Import your entire cookbook—not one recipe at a time"
- "AI-generated images make even old cookbooks look beautiful"
- "Just ask: AI creates recipes tailored to your cravings"
- "Speak recipes aloud—Grandma can't text, but she can share"
- "Silent TikToks? Our AI watches and extracts the recipe"
