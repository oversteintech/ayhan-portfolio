import {
  Inter,
  Newsreader,
  Noto_Naskh_Arabic,
  Noto_Sans_Arabic,
  Noto_Sans_JP,
  Noto_Sans_KR,
  Noto_Serif_JP,
  Noto_Serif_KR,
} from "next/font/google";
import type { Locale } from "@/i18n/config";

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

// Script-specific families are only attached to their own locale, so other locales never download them.
const naskh = Noto_Naskh_Arabic({ subsets: ["arabic"], variable: "--font-script-display", display: "swap" });
const sansArabic = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-script-body", display: "swap" });
const serifJP = Noto_Serif_JP({ subsets: ["latin"], variable: "--font-script-display", display: "swap", preload: false });
const sansJP = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-script-body", display: "swap", preload: false });
const serifKR = Noto_Serif_KR({ subsets: ["latin"], variable: "--font-script-display", display: "swap", preload: false });
const sansKR = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-script-body", display: "swap", preload: false });

const scriptFonts: Partial<Record<Locale, string[]>> = {
  ar: [naskh.variable, sansArabic.variable],
  ja: [serifJP.variable, sansJP.variable],
  ko: [serifKR.variable, sansKR.variable],
};

export function fontClassNames(locale: Locale) {
  return [newsreader.variable, inter.variable, ...(scriptFonts[locale] ?? [])].join(" ");
}
