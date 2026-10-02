import { site } from "@/content/site";
import { bcp47, locales } from "./config";

export function languageAlternates(path = "") {
  return {
    ...Object.fromEntries(locales.map((l) => [bcp47[l], `${site.url}/${l}${path}`])),
    "x-default": `${site.url}/en${path}`,
  };
}
