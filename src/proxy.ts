import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale, negotiateLocale } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname, search, hash } = request.nextUrl;
  const segment = pathname.split("/")[1];
  if (isLocale(segment)) return NextResponse.next();

  // A saved choice from the language selector always wins over the browser language.
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(saved) ? saved : negotiateLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  url.search = search;
  url.hash = hash;
  const response = NextResponse.redirect(url, 307);
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/|api/|brands/|icon|apple-icon|opengraph-image|twitter-image|robots.txt|sitemap.xml|manifest.webmanifest|cv.pdf|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
