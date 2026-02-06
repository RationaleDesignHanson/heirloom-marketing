# Heirloom Premium Features, Credits & Trial System

**Document Version**: 2.1
**App Version**: 2.4.0 (Build 80+)
**Last Updated**: February 2026
**Purpose**: Complete breakdown of premium features, credits system, and trial upsell strategy

---

## Changes from V2.0

- **Credit packages corrected**: Actual StoreKit products are 25 credits ($5) and 100 credits ($15) — not the 3-tier model from V2.0
- **Free tier limits corrected**: No 25-recipe limit or 5-connection limit exists in code — removed
- **URL import gating removed**: URL/web import is **not** paywalled (aligns with Share Extension as the hero feature)
- **3-strike rule corrected**: When active, blocks ALL paywalls (soft AND hard), not just soft walls
- **Ads removed**: No ad system exists in the codebase — removed from free tier
- **Recipe Scaling removed**: Not yet implemented — removed from feature matrix
- **Debug mode documented**: Fake payments and auto-premium defaults for TestFlight
- **Demo Social noted**: Demo social behaviors work regardless of premium status

---

## Overview: The Hybrid Model

Heirloom uses a **hybrid monetization model** combining:

1. **Premium Subscription** — Unlocks features (video ASMR import, cookbook scan, cloud sync)
2. **Credits System** — Pay-per-use for PDF and video imports (using included credits + purchasable credits)
3. **Trial Period** — 14-day trial with daily heritage recipe unlocks

This hybrid approach gives new users a starter set of credits during the trial, gives Premium users a monthly credit allotment, and lets anyone buy additional credits for burst usage.

---

## Part 1: Credits System (Primary Economy)

### Included credits (Trial + Premium)

Credits can come from three sources:

- **Trial credits**: **50 credits once** granted at trial start (no daily reset)
- **Premium credits**: **100 credits/month** (monthly reset)
- **Purchased credits**: Never expire, roll over indefinitely

Credits are then spent on imports:

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

- **Trial credits**: 50 credits once (granted at trial start)
- **Premium credits**: 100 credits/month (monthly reset)
- **Purchased Credits**: Never expire, roll over indefinitely
- **Deduction Order**: Uses included credits first, then purchased credits

### Purchasing Credits

| Package | Price | Credits | Product ID |
|---------|-------|---------|------------|
| Standard | $5 | 25 credits | `com.rationalestudio.heirloom.credits.25` |
| Bulk | $15 | 100 credits | `com.rationalestudio.heirloom.credits.100` |

**Key Points**:
- Credits never expire
- Purchased credits only used after included credits are exhausted
- Credits are persisted via SwiftData (`UserCredits` model)
- `canAfford(credits:)` checks availability before import
- `deductCredits(_:)` handles deduction with quota prioritization

---

## Part 2: Premium Subscription

### Trial Period

- **14-day free trial** (Annual plan)
- **7-day free trial** (Monthly plan)
- Trial starts on first launch via `SubscriptionManager.initializeTrialIfNeeded()`
- Users have full premium access during trial
- Trial dates stored in UserDefaults: `trial_expiry_date`, `first_launch_date`

### Pricing

| Plan | Price | Trial | Product ID |
|------|-------|-------|------------|
| **Annual** | $29.99/year | 14 days | `com.rationalestudio.heirloom.annual` |
| **Monthly** | $4.99/month | 7 days | `com.rationalestudio.heirloom.monthly` |
| **Lifetime** | $99 once | N/A | `com.rationalestudio.heirloom.lifetime` |

**Implementation**: StoreKit 2 (RevenueCat stub exists but disabled: `isRevenueCatEnabled = false`)

### What Premium Unlocks

#### Core Premium Features (Hard Paywalls)

| Feature | Description | Paywall Trigger |
|---------|-------------|-----------------|
| **Video Import (ASMR)** | 5-pass visual extraction for silent videos | `visualVideoExtraction` |
| **Cookbook Scanning** | OCR from photos, handwriting digitization | `cookbookScan` |
| **Cloud Sync** | Sync across iPhone, iPad, Mac | `sync` |
| **Large PDF Import** | PDFs with 50+ pages | `largePDFImport(pageCount)` |

#### Additional Premium Perks

| Feature | Free Tier | Premium |
|---------|-----------|---------|
| Recipe Sharing | No | Direct sharing to connections |
| Public Publishing | No | Share recipes to Discovery feed |
| Share Analytics | No | See who accepted your shares |

### Premium Status Check

```swift
// SubscriptionManager.swift
var isPremium: Bool {
    return status.isPremium || isAutoPremiumEnabled
}
```

Premium statuses: `.trial`, `.monthly`, `.annual`, `.lifetime`, `.grace`

---

## Part 3: Feature Access Matrix

### Import Features

| Feature | Free | Premium | Credits |
|---------|------|---------|---------|
| Manual Recipe Entry | Yes | Yes | N/A |
| Web URL Import | Yes | Yes | N/A |
| PDF Import (< 50 pages) | Yes | Yes | Uses credits |
| PDF Import (50+ pages) | **No** (hard paywall) | Yes | Uses credits |
| Video Import (audio mode) | Yes | Yes | 1 credit |
| Video Import (ASMR mode) | **No** (hard paywall) | Yes | 5 credits |
| Cookbook Scan (photos) | **No** (hard paywall) | Yes | N/A |
| AI Image Generation | Within quota | Yes | Tiered (0-15 credits) |
| AI Recipe Generation | Yes (with API key) | Yes | N/A |
| Voice Recipe Entry | Yes | Yes | N/A |

### Organization Features

| Feature | Free | Premium |
|---------|------|---------|
| Collections | Yes | Yes |
| Tags | Yes | Yes |
| Shopping Lists | Yes | Yes |
| Recipe Editor | Yes | Yes |
| Cloud Sync | **No** | Yes |

### Social Features

| Feature | Free | Premium |
|---------|------|---------|
| User Profile | Yes | Yes |
| User Search | Yes | Yes |
| Connection Requests | Yes | Yes |
| Demo Social Interactions | Yes | Yes |
| Recipe Sharing (direct) | **No** | Yes |
| Public Publishing | **No** | Yes |
| Discovery Feed (browse) | Yes | Yes |
| Discovery Feed (publish) | **No** | Yes |
| Share Analytics | **No** | Yes |

### Heritage Features

| Feature | Free (Trial) | Free (Expired) | Premium |
|---------|--------------|----------------|---------|
| Heritage Recipe Unlocks | ~7 recipes/day for 14 days | Recipes already unlocked kept | All recipes instantly |
| Recipe Lineage | Yes | Yes | Yes |
| Contributor Profiles | Yes | Yes | Yes |
| Card Back (flip) | Yes | Yes | Yes |

---

## Part 4: Trial Period Upsell Strategy

### Paywall Types

#### Hard Walls (Must Subscribe or Cancel)
Cannot be dismissed. Block access to premium features.

**Triggers**:
- `cookbookScan` — OCR scanning
- `sync` — Cloud sync
- `largePDFImport(pageCount)` — PDFs 50+ pages
- `visualVideoExtraction` — ASMR video mode

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
| `firstRecipeAdded` | After 1st import | 48 hours | Shows once |
| `fiveRecipesOrDay7` | Whichever comes first | 72 hours | Shows once |
| `day13Urgency` | 1 day before trial ends | None | Final reminder |

#### 3-Strike Rule

**Implementation** (PaywallManager):
- Tracks `softWallDismissCount`
- After 3 dismissals: `isStrikeRuleActive = true`
- **When active: ALL paywalls are blocked** (both soft AND hard)
- This prevents annoying power users who clearly don't want to subscribe
- Hard paywall features become accessible without subscription

**Note**: This is aggressive — consider whether hard walls should remain enforced even after 3 strikes. Current behavior means determined free users can access all features by dismissing 3 soft walls.

### Trial Progress Banner

**Location**: Collections/Recipe list screens (top)
**Component**: `TrialProgressBanner`

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

During trial, heritage recipes unlock progressively via `ThemeUnlockTracker`:

| Day | Cumulative Recipes | What Happens |
|-----|-------------------|-------------|
| Day 1 | ~4 recipes | First theme unlocks |
| Day 2 | ~6 recipes | More recipes added |
| Day 3 | ~10 recipes | New theme starts |
| Day 7 | ~35 recipes | Half unlocked |
| Day 14 | ~100 recipes | All recipes unlocked |

**Unlock Logic**:
```swift
func isUnlocked(_ recipe: Recipe) -> Bool {
    guard let unlockDay = recipe.unlockDay else { return true }
    return unlockDay <= currentTrialDay
}
```

- Day change timer runs hourly to check for new unlocks
- Trial state tracked: `currentTrialDay`, `daysRemaining`, `isTrialComplete`
- **After Trial Expires**: User keeps all recipes that were unlocked during trial

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
║    Wait (if you expect more included credits later) ║
╚══════════════════════════════════════╝
```

---

## Part 6: Video Import Credits Flow

Video imports also use the credits system:

### Pre-Import Analysis

Before processing, Heirloom analyzes the video:
1. **Check for audio** — Can we use audio transcription? (1 credit)
2. **Check for on-screen text** — Can we use OCR? (1 credit)
3. **Fallback to ASMR** — Requires Claude Vision API (5 credits)

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
║    Included credits: 18 remaining     ║
║    Purchased: 50 credits             ║
║    [Buy More Credits]                ║
╚══════════════════════════════════════╝
```

---

## Part 8: Debug & TestFlight Configuration

### Debug Modes (Active in Development)

These flags control premium behavior during development and TestFlight testing:

| Flag | Default (DEBUG) | Effect |
|------|----------------|--------|
| **Fake Payments** | ON | Grants premium without real StoreKit transactions |
| **Auto Premium** | ON | Shows paywalls but doesn't block access |
| **Force Non-Premium** | OFF | Test free tier without affecting subscription |

**Fake Payments** (`StoreManager`):
- Grants premium by setting UserDefaults keys directly
- No StoreKit transaction required
- Toggle: Settings → Developer Testing → Fake Payments

**Auto Premium** (`SubscriptionManager`):
- `isPremium` returns true, but paywalls still display
- "Continue Anyway (Debug)" button appears on paywall
- Useful for testing paywall UI without being blocked
- Toggle: Settings → Developer Testing → Auto Premium

**Cancel Fake Subscription**:
- Resets to 14-day trial state
- Useful for testing trial flows

**Trial Debug Tools**:
- Inspect detailed trial state
- Manually advance trial day
- Test progressive unlock behavior

**Credits System Test**:
- Test credit purchases
- Inspect and modify quota

### TestFlight Considerations

For TestFlight builds:
- Fake Payments defaults ON — testers have premium access
- Auto Premium defaults ON — paywalls show but don't block
- To test free tier: Settings → Developer Testing → Force Non-Premium Mode
- Demo Social features work regardless of premium status

---

## Part 9: Conversion Optimization

### Best Practices

**Do:**
- Show progress ("Day 7 of 14") to create urgency
- Respect 3-strike rule (don't annoy users)
- Use hard walls for high-value features (ASMR video, scan, sync, large PDFs)
- Use hard walls for high-value features (ASMR video, scan, sync, large PDFs)
- Default to Annual plan (better value, higher LTV)
- Show feature list (clear value prop)
- Let users import within daily credit quota for free
- Include trust line: "Your recipes are always yours. Export anytime"

**Don't:**
- Show too many soft walls (max 3 dismissals)
- Block basic features (manual entry, recipe editing, collections, shopping lists)
- Hide quota information (transparency builds trust)
- Use dark patterns (make "Maybe later" easy to find)
- Force purchases too early (starter credits + included monthly credits should cover most casual users)

### Conversion Funnel

```
App Install
    ↓
Trial Started (Day 0) — Full premium for 14 days
    ↓
First Import (uses free quota or premium feature)
    ↓
Soft Wall Shown (Day 1, 5/7, or 13)
    ↓
User Explores Heritage Recipes (daily unlocks via ThemeUnlockTracker)
    ↓
Trial Expires (Day 14)
    ↓
User Hits Premium Feature Wall (ASMR video, scan, sync, large PDF)
    OR
User Exceeds Daily Credit Quota (needs more credits)
    ↓
Conversion Decision:
  - Subscribe for unlimited access ($29.99/yr or $4.99/mo)
  - Buy credits for burst usage ($5 for 25 or $15 for 100)
  - Wait (if you expect more included credits later)
  - Hit 3-strike → all gates open (current behavior — review this)
```

### Open Questions / Action Items

1. **3-Strike Rule Scope**: Currently blocks ALL paywalls including hard walls. Should hard walls remain enforced after 3 strikes? This means a determined free user can access every feature by dismissing 3 soft walls.

2. **Free Tier Recipe Limit**: V2.0 documented a 25-recipe limit for free users, but this is **not enforced in code**. Should this be implemented?

3. **Free Tier Connection Limit**: V2.0 documented a 5-connection limit, but this is **not enforced in code**. Should this be implemented?

4. **URL Import Gating**: Web URL import is not paywalled. Keep it free to align with acquisition strategy (Share Extension is the primary marketing message).

5. **RevenueCat**: Integration stub exists but is disabled (`isRevenueCatEnabled = false`). Decide whether to ship with StoreKit 2 only or enable RevenueCat for analytics.

---

## Summary

**Credits System**:
- Trial includes **50 credits once** (at trial start)
- Premium includes **100 credits/month** (monthly reset)
- PDF: 1-5 credits based on type
- Video: 1-5 credits based on mode
- AI images: 0-15 credits based on recipe count
- Purchase: 25 credits ($5) or 100 credits ($15)
- Purchased credits never expire

**Premium Subscription**:
- $29.99/year (Annual, 14-day trial) — BEST VALUE
- $4.99/month (Monthly, 7-day trial)
- $99 once (Lifetime) — FOUNDING MEMBER
- Unlocks: Video ASMR, cookbook scan, cloud sync, sharing, publishing

**Actual Free Tier** (what's enforced in code):
- Manual recipe entry — unlimited
- Collections, tags, shopping lists — unlimited
- Video import (audio mode only) — 1 credit
- PDF import (< 50 pages) — within daily credit quota
- AI recipe generation — with API key
- Voice recipe entry — unlimited
- Discovery browsing — unlimited
- Demo social interactions — unlimited
- No recipe count cap (not enforced)
- No connection count cap (not enforced)

**Trial Strategy**:
- 14-day trial with progressive heritage unlocks (~7 recipes/day)
- Soft walls at strategic points (3-strike rule)
- Hard walls protect premium features
- Users keep unlocked recipes after trial
- 3-strike rule currently opens all gates (review needed)

---

**End of Document**
