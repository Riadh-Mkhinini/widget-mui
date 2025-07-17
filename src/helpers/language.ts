import * as locales from "date-fns/locale";
import { type Locale } from "date-fns";

export type Language = keyof typeof locales;

const normalizeLang = (lang: Language): string => {
  return lang.toLowerCase().split(/[-_]/)[0];
};

export const getLocale = (language?: Language): Locale => {
  if (!language) return locales.enUS;

  const exactLocale = (locales as Record<string, Locale>)[language];
  if (exactLocale) return exactLocale;

  const baseLang = normalizeLang(language);
  const baseLocale = (locales as Record<string, Locale>)[baseLang];
  return baseLocale || locales.enUS;
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

export const formatNumber = (value: number, language?: string): string => {
  try {
    return new Intl.NumberFormat(language || "en-US").format(value);
  } catch {
    return new Intl.NumberFormat("en-US").format(value);
  }
};

export const languageSupported = [
  "af", // Afrikaans
  "ar", // Arabic
  "ar-DZ", // Arabic (Algeria)
  "ar-MA", // Arabic (Morocco)
  "ar-SA", // Arabic (Saudi Arabia)
  "az", // Azerbaijani
  "be", // Belarusian
  "bg", // Bulgarian
  "bn", // Bengali
  "bs", // Bosnian
  "ca", // Catalan
  "cs", // Czech
  "cy", // Welsh
  "da", // Danish
  "de", // German
  "de-AT", // German (Austria)
  "el", // Greek
  "en-AU", // English (Australia)
  "en-CA", // English (Canada)
  "en-GB", // English (UK)
  "en-IN", // English (India)
  "en-NZ", // English (New Zealand)
  "en-US", // English (US)
  "en-ZA", // English (South Africa)
  "eo", // Esperanto
  "es", // Spanish
  "es-AR", // Spanish (Argentina)
  "es-DO", // Spanish (Dominican Republic)
  "es-MX", // Spanish (Mexico)
  "es-US", // Spanish (US)
  "et", // Estonian
  "eu", // Basque
  "fa-IR", // Persian (Iran)
  "fi", // Finnish
  "fr", // French
  "fr-CA", // French (Canada)
  "fr-CH", // French (Switzerland)
  "gd", // Scottish Gaelic
  "gl", // Galician
  "gu", // Gujarati
  "he", // Hebrew
  "hi", // Hindi
  "hr", // Croatian
  "ht", // Haitian Creole
  "hu", // Hungarian
  "hy", // Armenian
  "id", // Indonesian
  "is", // Icelandic
  "it", // Italian
  "ja", // Japanese
  "ja-Hira", // Japanese (Hiragana)
  "ka", // Georgian
  "kk", // Kazakh
  "km", // Khmer
  "kn", // Kannada
  "ko", // Korean
  "lb", // Luxembourgish
  "lt", // Lithuanian
  "lv", // Latvian
  "mk", // Macedonian
  "mn", // Mongolian
  "ms", // Malay
  "mt", // Maltese
  "nb", // Norwegian Bokmål
  "nl", // Dutch
  "nl-BE", // Dutch (Belgium)
  "nn", // Norwegian Nynorsk
  "pl", // Polish
  "pt", // Portuguese
  "pt-BR", // Portuguese (Brazil)
  "ro", // Romanian
  "ru", // Russian
  "sk", // Slovak
  "sl", // Slovenian
  "sq", // Albanian
  "sr", // Serbian (Cyrillic)
  "sr-Latn", // Serbian (Latin)
  "sv", // Swedish
  "ta", // Tamil
  "te", // Telugu
  "th", // Thai
  "tr", // Turkish
  "ug", // Uyghur
  "uk", // Ukrainian
  "uz", // Uzbek
  "vi", // Vietnamese
  "zh-CN", // Chinese (Simplified)
  "zh-HK", // Chinese (Hong Kong)
  "zh-TW", // Chinese (Traditional)
];
