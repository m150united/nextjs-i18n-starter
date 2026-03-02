/**
 * Maps short locale codes to full og:locale format (BCP 47 → Open Graph).
 * Used for og:locale meta tags which require the territory format.
 */
const LOCALE_TO_OG: Record<string, string> = {
  en: "en_US",
  de: "de_DE",
  es: "es_ES",
  tr: "tr_TR",
  fr: "fr_FR",
  pt: "pt_BR",
  ja: "ja_JP",
  ko: "ko_KR",
  "zh-hans": "zh_CN",
  ar: "ar_SA",
  ru: "ru_RU",
  it: "it_IT",
  nl: "nl_NL",
  hi: "hi_IN",
  pl: "pl_PL",
};

export function toOgLocale(locale: string): string {
  return LOCALE_TO_OG[locale] ?? locale;
}
