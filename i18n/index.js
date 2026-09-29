import { cookies } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_COOKIE, normalizeLocale } from "./config";

const dictionaries = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  es: () => import("./dictionaries/es").then((m) => m.default),
  fr: () => import("./dictionaries/fr").then((m) => m.default),
  de: () => import("./dictionaries/de").then((m) => m.default),
  ru: () => import("./dictionaries/ru").then((m) => m.default),
};

export async function getLocale() {
  const store = await cookies();
  return normalizeLocale(store.get(LOCALE_COOKIE)?.value);
}

// A key added to en.js ships before its translations do; without this merge
// the first render in any other locale would read undefined and crash.
function withFallback(base, over) {
  if (!over || typeof base !== "object") return over ?? base;
  const merged = { ...base };
  for (const key of Object.keys(over)) {
    merged[key] = withFallback(base[key], over[key]);
  }
  return merged;
}

export async function getDictionary(locale) {
  const base = await dictionaries[DEFAULT_LOCALE]();
  if (locale === DEFAULT_LOCALE || !dictionaries[locale]) return base;
  return withFallback(base, await dictionaries[locale]());
}
