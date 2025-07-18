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
  | "zhHK" // Chinese (Traditional - Hong Kong)
  | "pt" // Portuguese (Portugal)
  | "fi" // Finnish
  | "sv" // Swedish
  | "cs" // Czech
  | "hu" // Hungarian
  | "ro" // Romanian
  | "pl" // Polish
  | "bg" // Bulgarian
  | "lv" // Latvian
  | "uk" // Ukrainian
  | "kk" // Kazakh
  | "ka" // Georgian
  | "hy" // Armenian
  | "az" // Azerbaijani
  | "el" // Greek
  | "uz" // Uzbek
  | "id" // Indonesian
  | "ms" // Malay
  | "th" // Thai
  | "et" // Estonian
  | "lt" // Lithuanian
  | "sr" // Serbian (Cyrillic)
  | "vi" // Vietnamese
  | "fil" // Filipino
  | "hi" // Hindi
  | "mk" // Macedonian
  | "si" // Sinhala
  | "km" // Khmer
  | "ne" // Nepali
  | "sq" // Albanian
  | "srLatn"; // Serbian (Latin)

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
  zhHK: "zhTW",
  pt: "pt",
  fi: "fi",
  sv: "sv",
  cs: "cs",
  hu: "hu",
  ro: "ro",
  pl: "pl",
  bg: "bg",
  lv: "lv",
  uk: "uk",
  el: "el",
  id: "id",
  ms: "ms",
  th: "th",
  et: "et",
  lt: "lt",
  sr: "sr",
  vi: "vi",
  hi: "hi",
  kk: "kk",
  ka: "ka",
  hy: "hy",
  az: "az",
  uz: "uz",
  fil: "enUS",
  mk: "mk",
  si: "enUS",
  km: "km",
  ne: "enUS",
  sq: "sq",
  srLatn: "srLatn",
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
