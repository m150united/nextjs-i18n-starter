import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { i18n } from "../../../i18n.config";
import { toOgLocale } from "@/i18n/locale-map";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://nextjs-i18n-starter.vercel.app";

  return {
    title: "Next.js i18n Starter - Internationalization Made Easy",
    description:
      "Build multilingual Next.js applications with better-i18n. CDN-powered translations, server-side rendering, instant locale switching, and type-safe translation keys.",
    openGraph: {
      title: "Next.js i18n Starter - Internationalization Made Easy",
      description:
        "Build multilingual Next.js applications with better-i18n. CDN-powered translations, server-side rendering, instant locale switching, and type-safe translation keys.",
      url: `${baseUrl}/${locale}`,
      siteName: "better-i18n",
      locale: toOgLocale(locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@betteri18n",
      creator: "@betteri18n",
      title: "Next.js i18n Starter - Internationalization Made Easy",
      description:
        "Build multilingual Next.js applications with better-i18n. CDN-powered translations, server-side rendering, instant locale switching, and type-safe translation keys.",
    },
  };
}

export default async function HomePage() {
  const locales = await i18n.getLocales();

  return <HomeContent locales={locales} />;
}

function HomeContent({ locales }: { locales: string[] }) {
  const t = useTranslations("home");
  const locale = useLocale();

  const features = [
    {
      key: "ssr" as const,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
        </svg>
      ),
    },
    {
      key: "typesafe" as const,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
    },
    {
      key: "switcher" as const,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
        </svg>
      ),
    },
  ];

  const whyReasons = [
    {
      title: "CDN-Powered Delivery",
      description: "Translations served from the edge for instant load times worldwide.",
      href: "https://docs.better-i18n.com",
    },
    {
      title: "Framework Integrations",
      description: "First-class support for Next.js, React, and more with dedicated SDKs.",
      href: "https://docs.better-i18n.com/frameworks/nextjs",
    },
    {
      title: "Visual Dashboard",
      description: "Manage translations, invite collaborators, and track progress in one place.",
      href: "https://dash.better-i18n.com",
    },
    {
      title: "Open Source",
      description: "Community-driven development with full transparency on GitHub.",
      href: "https://github.com/better-i18n",
    },
  ];

  return (
    <article>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950"
        aria-label="Introduction"
      >
        <div className="mx-auto max-w-4xl px-6 pb-20 pt-24 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {t("badge")}
          </span>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {locales.map((loc) => (
              <span
                key={loc}
                className="rounded-md bg-white/80 px-2.5 py-1 text-xs font-mono text-gray-600 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800/80 dark:text-gray-400 dark:ring-gray-700"
              >
                {loc}
              </span>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <a
              href="https://docs.better-i18n.com/frameworks/nextjs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
            >
              {t("cta.docs")}
            </a>
            <a
              href="https://dash.better-i18n.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold transition hover:bg-gray-50 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
            >
              {t("cta.dashboard")}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <Link href={`/${locale}/features`} className="underline decoration-gray-300 underline-offset-4 transition hover:text-gray-700 hover:decoration-gray-500 dark:decoration-gray-600 dark:hover:text-gray-200">
              Explore all features
            </Link>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <Link href={`/${locale}/about`} className="underline decoration-gray-300 underline-offset-4 transition hover:text-gray-700 hover:decoration-gray-500 dark:decoration-gray-600 dark:hover:text-gray-200">
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-4xl px-6 py-24" aria-label="Features">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Key Features</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.key}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/20">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">
                {t(`features.${feature.key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {t(`features.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="mx-auto max-w-4xl px-6 pb-24" aria-label="Quick Start">
        <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-100 px-4 py-3 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("quickstart.title")}</h2>
          </div>
          <div className="overflow-x-auto bg-gray-950 p-6 text-sm leading-relaxed text-gray-100">
            <pre>
              <code>{`npm install @better-i18n/next

# i18n.config.ts
import { createI18n } from "@better-i18n/next";

export const i18n = createI18n({
  project: "your-org/your-project",
  defaultLocale: "en",
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Why better-i18n Section */}
      <section className="mx-auto max-w-4xl px-6 pb-24" aria-label="Why better-i18n">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Why better-i18n?</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {whyReasons.map((reason) => (
            <a
              key={reason.title}
              href={reason.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-blue-800"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {reason.description}
              </p>
              <span className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                Learn more
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="mx-auto max-w-4xl px-6 pb-24" aria-label="Call to action">
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-16 text-center shadow-xl shadow-blue-600/15 dark:from-blue-700 dark:to-blue-800">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Start building multilingual apps today
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-blue-100">
            Get up and running in minutes with better-i18n. Free to start, scales with your project.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://docs.better-i18n.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-blue-700 shadow-lg transition hover:bg-blue-50 hover:shadow-xl"
            >
              Read the Docs
            </a>
            <a
              href="https://dash.better-i18n.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Open Dashboard
            </a>
            <a
              href="https://github.com/better-i18n"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
