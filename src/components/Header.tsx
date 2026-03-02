"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/features`, label: t("features") },
    { href: `/${locale}/about`, label: t("about") },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 text-lg font-bold"
          >
            <Image
              src="/logo.png"
              alt="better-i18n"
              width={24}
              height={24}
              className="dark:hidden"
            />
            <Image
              src="/logo-dark.png"
              alt="better-i18n"
              width={24}
              height={24}
              className="hidden dark:block"
            />
            better-i18n
          </Link>
          <nav className="hidden gap-6 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition hover:underline hover:underline-offset-4 ${
                  isActive(link.href)
                    ? "font-medium text-gray-900 dark:text-gray-100"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
