"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useSetLocale, useManifestLanguages } from "@better-i18n/next/client";
import { i18n } from "../../i18n.config";

export function LanguageSwitcher() {
  const locale = useLocale();
  const setLocale = useSetLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { languages, isLoading } = useManifestLanguages(i18n.config);

  function handleLocaleChange(newLocale: string) {
    setLocale(newLocale);
    const newPath = pathname.replace(/^\/[^/]+/, `/${newLocale}`);
    router.replace(newPath);
  }

  if (isLoading) {
    return (
      <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-100 dark:bg-gray-800" />
    );
  }

  return (
    <select
      value={locale}
      onChange={(e) => handleLocaleChange(e.target.value)}
      className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium dark:border-gray-700 dark:bg-gray-900"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.nativeName || lang.name || lang.code}
        </option>
      ))}
    </select>
  );
}
