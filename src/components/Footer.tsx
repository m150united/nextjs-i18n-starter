import Image from "next/image";
import { useTranslations } from "next-intl";
import { Github, BookOpen, ExternalLink, ArrowUpRight, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

function FooterLink({
  href,
  children,
  icon,
  external = true,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-sm text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {external && (
        <ArrowUpRight className="ml-0.5 h-3 w-3 flex-shrink-0 opacity-50" />
      )}
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
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/better-i18n"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-gray-700 dark:hover:text-gray-200"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product column */}
          <FooterColumn title="Product">
            <FooterLink
              href="https://better-i18n.com"
              icon={<ExternalLink className="h-3.5 w-3.5" />}
            >
              better-i18n.com
            </FooterLink>
            <FooterLink
              href="https://dash.better-i18n.com"
              icon={<ExternalLink className="h-3.5 w-3.5" />}
            >
              Dashboard
            </FooterLink>
            <FooterLink
              href="https://better-i18n.com/#pricing"
              icon={<ExternalLink className="h-3.5 w-3.5" />}
            >
              Pricing
            </FooterLink>
          </FooterColumn>

          {/* Developers column */}
          <FooterColumn title="Developers">
            <FooterLink
              href="https://docs.better-i18n.com"
              icon={<BookOpen className="h-3.5 w-3.5" />}
            >
              {t("docs")}
            </FooterLink>
            <FooterLink
              href="https://docs.better-i18n.com/frameworks/nextjs"
              icon={<BookOpen className="h-3.5 w-3.5" />}
            >
              Next.js Guide
            </FooterLink>
            <FooterLink
              href="https://docs.better-i18n.com/frameworks/nextjs/api-reference"
              icon={<BookOpen className="h-3.5 w-3.5" />}
            >
              API Reference
            </FooterLink>
            <FooterLink
              href="https://github.com/better-i18n"
              icon={<Github className="h-3.5 w-3.5" />}
            >
              GitHub
            </FooterLink>
          </FooterColumn>

          {/* Resources column */}
          <FooterColumn title="Resources">
            <FooterLink
              href="https://better-i18n.com/blog"
              icon={<ExternalLink className="h-3.5 w-3.5" />}
            >
              Blog
            </FooterLink>
            <FooterLink
              href="https://better-i18n.com/changelog"
              icon={<ExternalLink className="h-3.5 w-3.5" />}
            >
              Changelog
            </FooterLink>
          </FooterColumn>
        </div>

        <Separator className="my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
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
