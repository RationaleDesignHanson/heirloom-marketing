import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PREFIX = "/internal";
const LOGIN_PATH = "/internal/login";
const COOKIE_NAME = "heirloom_dash_auth";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith(PROTECTED_PREFIX)) return NextResponse.next();
  if (pathname === LOGIN_PATH) return NextResponse.next();

  const auth = req.cookies.get(COOKIE_NAME)?.value;
  const expected = process.env.INTERNAL_DASH_PASSWORD;

  if (auth && expected && auth === expected) return NextResponse.next();

  const loginUrl = req.nextUrl.clone();
  loginUrl.pathname = LOGIN_PATH;
  loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/internal/:path*"],
};
