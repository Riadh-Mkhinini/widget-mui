import * as locales from "date-fns/locale";
import { type Locale } from "date-fns";

export type Language = keyof typeof locales;

const normalizeLang = (lang: Language): string => {
  return lang.toLowerCase().replace(/[-_].*$/, "");
};

export const getLocale = (language?: Language): Locale => {
  if (!language) return locales.enUS;

  const normalized = normalizeLang(language);

  // Try exact match first (e.g., 'en-US')
  if (language in locales) {
    return (locales as Record<string, Locale>)[language];
  }

  // Then try normalized base language code (e.g., 'en')
  if (normalized in locales) {
    return (locales as Record<string, Locale>)[normalized];
  }

  // Fallback to en-US
  return locales.enUS;
};

const rtlLanguages = new Set([
  "ar", // Arabic
  "fa", // Persian (Farsi)
  "he", // Hebrew
  "ur", // Urdu
  "ps", // Pashto
  "dv", // Divehi
  "ku", // Kurdish (Sorani)
  "sd", // Sindhi
]);

export const isRtlLanguage = (language?: Language): boolean => {
  if (!language) return false;

  const normalized = normalizeLang(language);
  return rtlLanguages.has(normalized);
};
