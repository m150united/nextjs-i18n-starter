import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { i18n } from "../../../../i18n.config";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://nextjs-i18n-starter.vercel.app";

  return {
    title: "About - How Next.js Internationalization Works with better-i18n",
    description:
      "Learn how better-i18n delivers translations via CDN for Next.js apps. Server-side message loading, middleware locale detection, and instant client-side switching.",
    openGraph: {
      title: "About - How Next.js i18n Works | better-i18n",
      description:
        "CDN-powered translation architecture, server-side rendering, and instant locale switching for Next.js applications.",
      url: `${baseUrl}/${locale}/about`,
      siteName: "better-i18n",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "About - How Next.js i18n Works | better-i18n",
      description:
        "CDN-powered translation architecture, server-side rendering, and instant locale switching for Next.js applications.",
    },
  };
}

export default async function AboutPage() {
  const locales = await i18n.getLocales();

  return <AboutContent locales={locales} />;
}

function AboutContent({ locales }: { locales: string[] }) {
  const t = useTranslations("about");
  const locale = useLocale();

  const stack = [
    { name: "Next.js 15", detail: "App Router + Server Components" },
    { name: "@better-i18n/next", detail: "CDN-powered translations" },
    { name: "next-intl", detail: "Type-safe translation hooks" },
    { name: "Tailwind CSS 4", detail: "Utility-first styling" },
    { name: "TypeScript 5", detail: "Full type safety" },
  ];

  const cdnSteps = [
    { title: "Dashboard publish", description: "Translations are published from the better-i18n dashboard to Cloudflare R2 storage." },
    { title: "Edge CDN delivery", description: "Translation bundles are served from global edge locations with sub-50ms load times." },
    { title: "Server-side rendering", description: "Next.js server components fetch translations at request time via getMessages() for SEO-friendly HTML." },
    { title: "Client hydration", description: "BetterI18nProvider hydrates translations client-side with zero layout shift. useSetLocale() enables instant switching." },
  ];

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <BreadcrumbSchema items={[
        { name: "Home", href: `/${locale}` },
        { name: "About", href: `/${locale}/about` },
      ]} />

      <section aria-label="Introduction">
        <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {t("description")}
        </p>
      </section>

      <section className="mt-16" aria-label="Tech Stack">
        <h2 className="text-2xl font-semibold">{t("stack.title")}</h2>
        <div className="mt-4 divide-y divide-gray-200 rounded-xl border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
          {stack.map((item) => (
            <div key={item.name} className="flex items-center justify-between px-4 py-3">
              <span className="font-medium">{item.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16" aria-label="CDN Translation Architecture">
        <h2 className="text-2xl font-semibold">CDN Translation Architecture</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          better-i18n uses a CDN-first architecture. When you publish translations in the dashboard, they are deployed to Cloudflare&apos;s global edge network for sub-50ms delivery worldwide.
        </p>
        <div className="mt-6 rounded-lg bg-gray-50 p-4 font-mono text-sm dark:bg-gray-900">
          Dashboard → Cloudflare R2 → Edge CDN → Your App → Users
        </div>
        <ol className="mt-6 space-y-4">
          {cdnSteps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          The SDK caches manifest data for 5 minutes and translation messages for 30 seconds by default. Cache invalidation happens automatically on publish.
        </p>
      </section>

      <section className="mt-16" aria-label="SDK APIs">
        <h2 className="text-2xl font-semibold">SDK APIs Used in This Starter</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="pb-2 font-semibold">API</th>
                <th className="pb-2 font-semibold">Type</th>
                <th className="pb-2 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600 dark:divide-gray-800 dark:text-gray-400">
              <tr><td className="py-2 font-mono text-xs">createI18n()</td><td className="py-2">Config</td><td className="py-2">Initialize SDK with project settings</td></tr>
              <tr><td className="py-2 font-mono text-xs">i18n.betterMiddleware()</td><td className="py-2">Server</td><td className="py-2">Locale detection from URL, cookie, Accept-Language</td></tr>
              <tr><td className="py-2 font-mono text-xs">i18n.getMessages(locale)</td><td className="py-2">Server</td><td className="py-2">Load all translations for a locale</td></tr>
              <tr><td className="py-2 font-mono text-xs">i18n.getLocales()</td><td className="py-2">Server</td><td className="py-2">Fetch available locales from CDN</td></tr>
              <tr><td className="py-2 font-mono text-xs">BetterI18nProvider</td><td className="py-2">Client</td><td className="py-2">React context for translations</td></tr>
              <tr><td className="py-2 font-mono text-xs">useTranslations(ns)</td><td className="py-2">Client</td><td className="py-2">Type-safe translation access</td></tr>
              <tr><td className="py-2 font-mono text-xs">useSetLocale()</td><td className="py-2">Client</td><td className="py-2">Instant language switching</td></tr>
              <tr><td className="py-2 font-mono text-xs">useManifestLanguages()</td><td className="py-2">Client</td><td className="py-2">Dynamic language discovery from CDN</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16" aria-label="How It Works">
        <h2 className="text-2xl font-semibold">{t("howItWorks.title")}</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          {t("howItWorks.description")}
        </p>
      </section>

      <section className="mt-16" aria-label="Supported Locales">
        <h2 className="text-2xl font-semibold">{t("locales.title")}</h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {t("locales.description")}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {locales.map((loc) => (
            <span
              key={loc}
              className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium dark:border-gray-800"
            >
              {loc}
            </span>
          ))}
        </div>
      </section>

      <nav className="mt-16 flex items-center justify-center gap-6 border-t border-gray-200 pt-8 dark:border-gray-800" aria-label="Explore more">
        <Link
          href={`/${locale}`}
          className="text-sm font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          &larr; Back to home
        </Link>
        <Link
          href={`/${locale}/features`}
          className="text-sm font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Explore all features &rarr;
        </Link>
      </nav>
    </article>
  );
}
