export const LOCALES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
];

export const DEFAULT_LOCALE = "en";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export const LOCALE_CODES = LOCALES.map((l) => l.code);

export function normalizeLocale(value) {
  return LOCALE_CODES.includes(value) ? value : DEFAULT_LOCALE;
}
