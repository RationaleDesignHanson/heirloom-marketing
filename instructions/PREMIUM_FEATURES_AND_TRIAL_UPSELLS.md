# Heirloom Premium Features, Credits & Trial System

**Document Version**: 2.0
**Last Updated**: February 2026
**Purpose**: Complete breakdown of premium features, credits system, and trial upsell strategy

---

## Overview: The Hybrid Model

Heirloom uses a **hybrid monetization model** combining:

1. **Premium Subscription** - Unlocks features (video import, cookbook scan, cloud sync)
2. **Credits System** - Pay-per-use for PDF and video imports (with daily free quota)
3. **Trial Period** - 14-day trial with daily heritage recipe unlocks

This hybrid approach allows casual users to import recipes for free (within daily quotas) while power users can subscribe for unlimited access or purchase credits for burst usage.

---

## Part 1: Credits System (Primary Economy)

### Daily Free Quota

Every user receives **25 free credits per day** that reset at midnight:

| Credit Usage | Cost | Description |
|--------------|------|-------------|
| **Text-rich PDF** | 1 credit | PDFs with >50 chars/page average (fast processing) |
| **Mixed PDF** | 3 credits | PDFs with some text, some scanned pages |
| **Scanned PDF** | 5 credits | Image-based PDFs requiring Vision API |
| **Video (Audio)** | 1 credit | Videos with speech transcription (on-device) |
| **Video (ASMR)** | 5 credits | Silent/music videos requiring Claude Vision API |

### AI Image Generation Credits (Optional Add-On)

When importing PDFs, users can enable AI-generated images instead of page screenshots:

| Recipe Count | AI Image Cost | Notes |
|--------------|---------------|-------|
| 1-10 recipes | **0 credits** | Free for small imports |
| 11-25 recipes | 5 credits | Small cookbook |
| 26-50 recipes | 10 credits | Medium cookbook |
| 51+ recipes | 15 credits | Large cookbook |

### Credit Balance

- **Daily Quota**: 25 credits (resets at midnight)
- **Purchased Credits**: Never expire, roll over indefinitely
- **Deduction Order**: Uses daily quota first, then purchased credits

### Purchasing Credits

| Package | Price | Credits | Best For |
|---------|-------|---------|----------|
| Small | $5 | 25 credits | Single cookbook import |
| Medium | $10 | 60 credits | Multiple cookbooks |
| Large | $20 | 150 credits | Heavy importer |

**Key Points**:
- Credits never expire
- Roll over to the next day
- Purchased credits only used after daily quota exhausted

---

## Part 2: Premium Subscription

### Trial Period

- **14-day free trial** (Annual plan)
- **7-day free trial** (Monthly plan)
- Trial starts automatically on first launch
- Users have full premium access during trial

### Pricing

| Plan | Price | Trial | Value |
|------|-------|-------|-------|
| **Annual** | $29.99/year | 14 days | **BEST VALUE** (50% savings) |
| **Monthly** | $4.99/month | 7 days | Flexible |
| **Lifetime** | $99 once | N/A | **FOUNDING MEMBER** |

### What Premium Unlocks

#### Core Premium Features (Hard Paywalls)

| Feature | Description | Paywall Type |
|---------|-------------|--------------|
| **Video Import** | Import from TikTok, Instagram, YouTube | Hard wall |
| **ASMR Processing** | 5-pass visual extraction for silent videos | Hard wall |
| **Cookbook Scanning** | OCR from photos, handwriting digitization | Hard wall |
| **Cloud Sync** | Sync across iPhone, iPad, Mac | Hard wall |
| **Large PDF Import** | PDFs with 50+ pages | Hard wall |

#### Additional Premium Perks

| Feature | Free Tier | Premium |
|---------|-----------|---------|
| Recipes | 25 max | Unlimited |
| Connections | 5 max | Unlimited |
| Data Export | Recipes only | Full export (recipes + profile + connections) |
| Public Publishing | No | Share recipes to Discovery feed |
| Direct Sharing Analytics | No | See who accepted your shares |
| Card Customization | Basic | All backgrounds, stickers, annotations |
| Ads | Banner ads | Ad-free |

---

## Part 3: Feature Access Matrix

### Import Features

| Feature | Free | Premium | Credits |
|---------|------|---------|---------|
| Web URL Import | Limited (25 recipes) | Unlimited | N/A |
| PDF Import (small) | Within daily quota | Unlimited | Uses credits |
| PDF Import (large 50+ pages) | No | Yes | Uses credits |
| Video Import (audio mode) | No | Yes | 1 credit |
| Video Import (ASMR mode) | No | Yes | 5 credits |
| Cookbook Scan (photos) | No | Yes | N/A |
| AI Image Generation | Within quota | Yes | Tiered (0-15 credits) |

### Organization Features

| Feature | Free | Premium |
|---------|------|---------|
| Collections | Yes | Yes |
| Tags | Yes | Yes |
| Recipe Scaling | Yes | Yes |
| Shopping Lists | Yes | Yes |
| Recipe Editor | Yes | Yes |

### Social Features

| Feature | Free | Premium |
|---------|------|---------|
| User Search | Yes | Yes |
| Connection Requests | 5 connections max | Unlimited |
| Recipe Sharing (links) | Yes | Yes |
| Direct Sharing (to connections) | Yes | Yes + analytics |
| Public Publishing | No | Yes |
| Discovery Feed | Browse only | Browse + publish |

### Heritage Features

| Feature | Free (Trial) | Free (Expired) | Premium |
|---------|--------------|----------------|---------|
| Heritage Recipe Unlocks | 7 recipes/day for 14 days | Recipes already unlocked | All recipes instantly |
| Recipe Lineage | Yes | Yes | Yes |
| Contributor Profiles | Yes | Yes | Yes |

---

## Part 4: Trial Period Upsell Strategy

### Paywall Types

#### Hard Walls (Must Subscribe or Cancel)
Cannot be dismissed. Block access to premium features.

**Triggers**:
- Video Import (any mode)
- Cookbook Scan
- Cloud Sync
- Large PDF Import (50+ pages)

**User Experience**:
```
User tries premium feature → Paywall appears
Options:
  - Subscribe now (starts trial or purchase)
  - Cancel (returns to previous screen)
```

#### Soft Walls (Dismissible Reminders)
Can be dismissed. Gentle nudges during trial.

**Trigger Points**:

| Trigger | When | Cooldown | Notes |
|---------|------|----------|-------|
| First Recipe | After 1st import | 48 hours | Shows once |
| Five Recipes OR Day 7 | Whichever first | 72 hours | Shows once |
| Day 13 Urgency | 1 day before trial ends | None | Final reminder |

**3-Strike Rule**:
- If user dismisses 3 soft walls, no more soft walls shown
- Hard walls still show (feature-gated)
- Prevents annoying power users

### Trial Progress Banner

**Location**: Collections/Recipe list screens (top)

```
╔══════════════════════════════════════╗
║  ⭕ 7   Day 7 of 14                 ║
║        7 days left in discovery trial ║
╚══════════════════════════════════════╝
```

**Messaging by Phase**:
- Early: "New recipes unlock every few days"
- Last 3 days: "X days left in your discovery trial"
- Last day: "Last day! Final recipes unlock tomorrow."

### Heritage Collections (Daily Unlocks)

During trial, heritage recipes unlock progressively:

| Day | Cumulative Recipes | Collection |
|-----|-------------------|------------|
| Day 1 | ~4 recipes | First theme unlocks |
| Day 2 | ~6 recipes | More recipes added |
| Day 3 | ~10 recipes | New theme starts |
| Day 7 | ~35 recipes | Half unlocked |
| Day 14 | ~100 recipes | All recipes unlocked |

**After Trial Expires**: User keeps all recipes that were unlocked during trial.

---

## Part 5: Credits Cost Sheet UI

When importing PDFs, users see a cost confirmation sheet:

```
╔══════════════════════════════════════╗
║         📄 Import Cost              ║
║  Here's what this import will cost  ║
╠══════════════════════════════════════╣
║ 📄 3 text-rich PDFs          3 ✓Fast║
║ 📄 1 scanned PDF             5 ⭐    ║
║ ✨ AI image generation       0 Free ║
║──────────────────────────────────────║
║ Total                        8 credits║
║ ⏱️ Estimated time: ~2 minutes       ║
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

**If quota exceeded**:
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

---

## Part 6: Video Import Credits Flow

Video imports also use the credits system:

### Pre-Import Analysis

Before processing, Heirloom analyzes the video:
1. **Check for audio** - Can we use audio transcription? (1 credit)
2. **Check for on-screen text** - Can we use OCR? (1 credit)
3. **Fallback to ASMR** - Requires Claude Vision API (5 credits)

### Credit Confirmation Sheet

```
╔══════════════════════════════════════╗
║        🎬 Video Import Cost         ║
╠══════════════════════════════════════╣
║ Extraction method: Audio            ║
║ Cost: 1 credit                      ║
║                                      ║
║ 🎁 Your quota: 24 credits remaining ║
╠══════════════════════════════════════╣
║      [   Import Video   ]           ║
║           Cancel                     ║
╚══════════════════════════════════════╝
```

**For ASMR videos** (silent/music only):
```
╔══════════════════════════════════════╗
║        🎬 Video Import Cost         ║
╠══════════════════════════════════════╣
║ Extraction method: ASMR (Vision AI) ║
║ Cost: 5 credits                     ║
║                                      ║
║ ℹ️ This video has no usable audio   ║
║   Using AI vision analysis instead   ║
╠══════════════════════════════════════╣
║      [   Import Video   ]           ║
║           Cancel                     ║
╚══════════════════════════════════════╝
```

---

## Part 7: Settings & Subscription Display

### Subscription Section in Settings

**During Trial**:
```
╔══════════════════════════════════════╗
║ 💎 Premium Trial                     ║
║    7 days remaining                  ║
║    [Upgrade Now] button              ║
╚══════════════════════════════════════╝
```

**After Trial (Free)**:
```
╔══════════════════════════════════════╗
║ 🔒 Free Plan                         ║
║    [Upgrade to Premium] button       ║
╚══════════════════════════════════════╝
```

**Premium Active**:
```
╔══════════════════════════════════════╗
║ ⭐ Premium (Annual)                  ║
║    Renews Jan 15, 2027               ║
║    [Manage Subscription]             ║
╚══════════════════════════════════════╝
```

### Credits Balance Display

Shown in Settings and import sheets:

```
╔══════════════════════════════════════╗
║ 🎁 Credits                           ║
║    Daily quota: 18/25 remaining      ║
║    Purchased: 50 credits             ║
║    [Buy More Credits]                ║
╚══════════════════════════════════════╝
```

---

## Part 8: Conversion Optimization

### Best Practices

**Do:**
- Show progress ("Day 7 of 14") to create urgency
- Respect 3-strike rule (don't annoy users)
- Use hard walls for high-value features
- Default to Annual plan (better value, higher LTV)
- Show feature list (clear value prop)
- Let users import within daily quota for free

**Don't:**
- Show too many soft walls (max 3 dismissals)
- Block basic features (recipe editing, organization)
- Hide quota information (transparency builds trust)
- Use dark patterns (make "Maybe later" easy to find)
- Force purchases for small imports (daily quota covers most users)

### Conversion Funnel

```
App Install
    ↓
Trial Started (Day 0)
    ↓
First Import (uses free quota)
    ↓
Soft Wall Shown (Day 1, 5, 7, or 13)
    ↓
User Explores Heritage Recipes (daily unlocks)
    ↓
User Hits Premium Feature Wall (video/scan)
    OR
User Exceeds Daily Quota (needs credits)
    ↓
Conversion Decision:
  - Subscribe for unlimited access
  - Buy credits for burst usage
  - Wait for quota reset (free)
```

---

## Summary

**Credits System**:
- 25 free credits/day (resets at midnight)
- PDF: 1-5 credits based on type
- Video: 1-5 credits based on mode
- AI images: 0-15 credits based on recipe count
- Purchased credits never expire

**Premium Subscription**:
- $29.99/year (Annual, 14-day trial)
- $4.99/month (Monthly, 7-day trial)
- $99 once (Lifetime)
- Unlocks: Video import, cookbook scan, cloud sync, unlimited everything

**Trial Strategy**:
- 14-day trial with progressive heritage unlocks
- Soft walls at strategic points (3-strike rule)
- Hard walls protect premium features
- Users keep unlocked recipes after trial

---

**End of Document**
