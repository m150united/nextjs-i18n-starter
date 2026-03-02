import Image from "next/image";
import { useTranslations } from "next-intl";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    >
      {children}
    </a>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="better-i18n"
                width={20}
                height={20}
                className="dark:hidden"
              />
              <Image
                src="/logo-dark.png"
                alt="better-i18n"
                width={20}
                height={20}
                className="hidden dark:block"
              />
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                better-i18n
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              {t("powered")}
            </p>
          </div>

          {/* Product column */}
          <FooterColumn title="Product">
            <FooterLink href="https://better-i18n.com">
              better-i18n.com
            </FooterLink>
            <FooterLink href="https://dash.better-i18n.com">
              Dashboard
            </FooterLink>
            <FooterLink href="https://better-i18n.com/#pricing">
              Pricing
            </FooterLink>
          </FooterColumn>

          {/* Developers column */}
          <FooterColumn title="Developers">
            <FooterLink href="https://docs.better-i18n.com">
              {t("docs")}
            </FooterLink>
            <FooterLink href="https://docs.better-i18n.com/frameworks/nextjs">
              Next.js Guide
            </FooterLink>
            <FooterLink href="https://docs.better-i18n.com/frameworks/nextjs/api-reference">
              API Reference
            </FooterLink>
            <FooterLink href="https://github.com/better-i18n">
              GitHub
            </FooterLink>
          </FooterColumn>

          {/* Resources column */}
          <FooterColumn title="Resources">
            <FooterLink href="https://better-i18n.com/blog">Blog</FooterLink>
            <FooterLink href="https://better-i18n.com/changelog">
              Changelog
            </FooterLink>
          </FooterColumn>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-gray-200 pt-6 dark:border-gray-800 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; 2025 better-i18n. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <Image
              src="/logo.png"
              alt="better-i18n"
              width={14}
              height={14}
              className="dark:hidden"
            />
            <Image
              src="/logo-dark.png"
              alt="better-i18n"
              width={14}
              height={14}
              className="hidden dark:block"
            />
            Built with better-i18n
          </div>
        </div>
      </div>
    </footer>
  );
}
