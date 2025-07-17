import * as locales from "date-fns/locale";
import { type Locale } from "date-fns";

export type Language =
  | "ar" // Arabic
  | "de" // German
  | "enUS" // English (US)
  | "enGB" // English (UK)
  | "es" // Spanish
  | "fr" // French
  | "it" // Italian
  | "ja" // Japanese
  | "ko" // Korean
  | "ptBR" // Portuguese (Brazil)
  | "ru" // Russian
  | "tr" // Turkish
  | "zhCN" // Chinese (Simplified)
  | "zhTW" // Chinese (Traditional - Taiwan)
  | "zhHK"; // Chinese (Traditional - Hong Kong)

// Map your Language codes to available locale keys from date-fns
const languageToLocaleMap: Partial<Record<Language, keyof typeof locales>> = {
  ar: "ar",
  de: "de",
  enUS: "enUS",
  enGB: "enGB",
  es: "es",
  fr: "fr",
  it: "it",
  ja: "ja",
  ko: "ko",
  ptBR: "ptBR",
  ru: "ru",
  tr: "tr",
  zhCN: "zhCN",
  zhTW: "zhTW",
  zhHK: "zhHK", // May not exist in date-fns; fallback will handle it
};

export const getLocale = (language?: Language): Locale => {
  const fallback = locales.enUS;

  if (!language) return fallback;

  const localeKey = languageToLocaleMap[language];
  const locale = localeKey ? locales[localeKey] : undefined;

  return locale || fallback;
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
  return rtlLanguages.has(language);
};

export const formatNumber = (value: number, language?: string): string => {
  try {
    return new Intl.NumberFormat(language || "en-US").format(value);
  } catch {
    return new Intl.NumberFormat("en-US").format(value);
  }
};
