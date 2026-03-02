import { createI18n } from "@better-i18n/next";

export const i18nConfig = {
  project:
    process.env.NEXT_PUBLIC_BETTER_I18N_PROJECT || "better-i18n/demo",
  defaultLocale: "en",
};

export const i18n = createI18n({
  ...i18nConfig,
  localePrefix: "as-needed",
  messagesRevalidateSeconds: 30,
  manifestRevalidateSeconds: 3600,
  timeZone: "UTC",
});
