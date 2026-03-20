/**
 * Heirloom Recipe Extraction API Route
 *
 * Prompt matches AIRecipeExtractor.buildVisionExtractionPrompt() in HeirloomAI package
 * for parity with the native app's OCR behaviour.
 *
 * Route: POST /api/heirloom/extract-recipe
 */

import { NextRequest, NextResponse } from 'next/server';

// ─── Rate limiting ────────────────────────────────────────────────────────────
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10;

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(identifier);
  if (!record || now > record.resetTime) {
    requestCounts.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) return false;
  record.count++;
  return true;
}

function getClientIdentifier(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  return forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface ExtractRecipeRequest {
  image: string; // base64 encoded image
  boundingBox?: { x: number; y: number; width: number; height: number };
  expectedTitle?: string;
  ocrText?: string;
}

/** Shape Claude returns — matches app's ExtractedRecipe (snake_case keys) */
interface AppExtractedRecipe {
  title: string;
  servings?: string | null;
  prep_time?: string | null;
  cook_time?: string | null;
  /** Flat array OR grouped object {"Section": ["ingredient", ...]} */
  ingredients: string[] | Record<string, string[]>;
  instructions: string[];
  notes?: string | null;
  source?: string | null;
}

/** Shape the demo RecipeCard component expects */
interface DemoRecipe {
  title: string;
  ingredients: string[];
  instructions: string[];
  servings?: string | null;
  prepTime?: string | null;
  cookTime?: string | null;
  notes?: string | null;
  confidence: {
    title: 'high' | 'medium' | 'low';
    ingredients: 'high' | 'medium' | 'low';
    instructions: 'high' | 'medium' | 'low';
  };
}

// ─── Ingredient flattening ────────────────────────────────────────────────────

/**
 * Flatten grouped ingredients into a flat array, preserving section headers.
 * Matches IngredientStructure.flattened in the app.
 */
function flattenIngredients(raw: string[] | Record<string, string[]>): string[] {
  if (Array.isArray(raw)) return raw;

  return Object.entries(raw).flatMap(([section, items]) => {
    const header = section.endsWith(':') ? section : `${section}:`;
    return [header, ...items];
  });
}

// ─── Prompt — matches buildVisionExtractionPrompt() in HeirloomAI ────────────

function buildPrompt(opts: {
  expectedTitle?: string;
  ocrText?: string;
  boundingBox?: { x: number; y: number; width: number; height: number };
}): string {
  let prompt = 'Extract the recipe from this image into structured JSON.\n\n';

  if (opts.expectedTitle) {
    prompt += `Focus ONLY on the recipe titled "${opts.expectedTitle}". Ignore other recipes on the page.\n\n`;
  }

  if (opts.boundingBox) {
    const bb = opts.boundingBox;
    prompt += `This image contains multiple recipes. Focus ONLY on the recipe in the region at approximately ${bb.x}% from left, ${bb.y}% from top, spanning ${bb.width}% width and ${bb.height}% height.\n\n`;
  }

  if (opts.ocrText) {
    prompt += `OCR text for reference (may contain errors):\n${opts.ocrText}\n\n`;
  }

  prompt += `Return ONLY valid JSON — no markdown, no code blocks, no explanation:
{
  "title": "Recipe Name",
  "servings": "4" or null,
  "prep_time": "15 minutes" or null,
  "cook_time": "30 minutes" or null,
  "ingredients": {"For the Dough": ["1⅔ cups flour", ...], "For the Filling": [...]} OR ["2 cups flour", ...],
  "instructions": ["Preheat oven to 350°F.", "In a large bowl, cream together butter and sugar until light and fluffy.", ...],
  "notes": "Optional notes" or null,
  "source": null
}

IMPORTANT RULES:
- Be thorough. Include ALL ingredients and ALL instructions visible in the image.
- Each ingredient MUST include quantity, unit, and name.
  WRONG: "flour" / "cups flour" / "sugar"
  RIGHT: "2 cups all-purpose flour" / "1 cup sugar" / "3 large eggs"
- If ingredient amounts are partially visible or unclear, make your best estimate from context.
- If the recipe has subsections (e.g., "For the Dough", "For the Filling", "For the Whipped Cream"), return ingredients as an OBJECT with section names as keys. Otherwise return a flat array.
- INSTRUCTIONS FORMATTING: Each array element must be ONE single action or closely related actions (1–2 sentences max). NEVER combine multiple steps into one paragraph. Split long paragraphs into individual steps.
- Instructions MUST be complete. If the image shows ingredients but no visible instructions, INFER reasonable cooking steps based on the dish name and ingredients.
- For handwritten recipes, carefully interpret each word. Use recipe context to resolve ambiguity.
- If the recipe is in a non-English language, translate to English while preserving original measurements.
- Never return empty instructions or ingredients arrays.
- If you cannot find a recipe in the image, return: {"error": "Could not extract recipe from image"}`;

  return prompt;
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    // Rate limit
    const clientId = getClientIdentifier(req);
    if (!checkRateLimit(clientId)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again in a minute.' },
        { status: 429 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error('ANTHROPIC_API_KEY is not configured');
      return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 503 });
    }

    const body: ExtractRecipeRequest = await req.json();
    if (!body.image) {
      return NextResponse.json({ error: 'Image data is required' }, { status: 400 });
    }

    const base64Data = body.image.replace(/^data:image\/\w+;base64,/, '');

    // ~10 MB limit
    if ((base64Data.length * 3) / 4 > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'Image size exceeds 10 MB limit' }, { status: 413 });
    }

    const promptText = buildPrompt({
      expectedTitle: body.expectedTitle,
      ocrText: body.ocrText,
      boundingBox: body.boundingBox,
    });

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        system:
          'You are an expert at extracting recipes from images. Extract the recipe with high accuracy, preserving all quantities and units.',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image',
                source: { type: 'base64', media_type: 'image/jpeg', data: base64Data },
              },
              { type: 'text', text: promptText },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      console.error('Anthropic API error:', err);
      return NextResponse.json({ error: 'Failed to process image' }, { status: response.status });
    }

    const data = await response.json();
    const textContent = data.content?.find((c: { type: string }) => c.type === 'text')?.text;

    if (!textContent) {
      return NextResponse.json({ error: 'No text content in response' }, { status: 500 });
    }

    const cleanedText = textContent
      .replace(/```json\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();

    const parsed: AppExtractedRecipe | { error: string } = JSON.parse(cleanedText);

    if ('error' in parsed) {
      return NextResponse.json({ error: parsed.error }, { status: 422 });
    }

    // Map app snake_case → demo camelCase, flatten grouped ingredients
    const recipe: DemoRecipe = {
      title: parsed.title,
      ingredients: flattenIngredients(parsed.ingredients),
      instructions: parsed.instructions,
      servings: parsed.servings ?? null,
      prepTime: parsed.prep_time ?? null,
      cookTime: parsed.cook_time ?? null,
      notes: parsed.notes ?? null,
      // Confidence not returned by vision prompt — default to high
      confidence: { title: 'high', ingredients: 'high', instructions: 'high' },
    };

    return NextResponse.json(recipe, { status: 200 });
  } catch (error) {
    console.error('Recipe extraction error:', error);
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid response format from OCR service' },
        { status: 500 }
      );
    }
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
