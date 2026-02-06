import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { email?: string; formName?: string };
    const email = (body.email ?? "").trim();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    // Intentionally minimal for now: this unblocks deploy without depending on
    // Netlify Forms migration. Later we can persist to a provider (ConvertKit,
    // Resend audience, etc.) or re-enable Netlify Forms once migrated.
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
}

