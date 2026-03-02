"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useSetLocale, useManifestLanguages } from "@better-i18n/next/client";
import { i18n } from "../../i18n.config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

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
      <div className="h-9 w-24 animate-pulse rounded-md bg-muted" />
    );
  }

  return (
    <Select value={locale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-auto gap-2">
        <Globe className="h-4 w-4" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.nativeName || lang.name || lang.code}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
