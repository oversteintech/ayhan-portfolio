import type { Locale } from "../config";
import type { Messages } from "./en";

const loaders: Record<Locale, () => Promise<{ default: Messages }>> = {
  en: () => import("./en"),
  tr: () => import("./tr"),
  de: () => import("./de"),
  fr: () => import("./fr"),
  es: () => import("./es"),
  pt: () => import("./pt"),
  it: () => import("./it"),
  ar: () => import("./ar"),
  ja: () => import("./ja"),
  ko: () => import("./ko"),
};

export async function getMessages(locale: Locale): Promise<Messages> {
  return (await loaders[locale]()).default;
}

export type { Messages };
