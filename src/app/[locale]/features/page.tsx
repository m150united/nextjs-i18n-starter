import type { Metadata } from "next";
import Link from "next/link";
import { useLocale } from "next-intl";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { toOgLocale } from "@/i18n/locale-map";

interface FeaturesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: FeaturesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://nextjs-i18n-starter.vercel.app";

  return {
    title:
      "Features - Next.js Internationalization with CDN-Powered Translations",
    description:
      "Explore better-i18n features: server-side rendering, instant locale switching, dynamic language discovery, type-safe translations, and AI-powered localization for Next.js.",
    openGraph: {
      title:
        "Features - Next.js i18n & Internationalization Platform | better-i18n",
      description:
        "CDN-powered translations, SSR support, type-safe hooks, AI translation, and more for Next.js internationalization.",
      url: `${baseUrl}/${locale}/features`,
      siteName: "better-i18n",
      locale: toOgLocale(locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@betteri18n",
      creator: "@betteri18n",
      title:
        "Features - Next.js i18n & Internationalization Platform | better-i18n",
      description:
        "CDN-powered translations, SSR support, type-safe hooks, and more for Next.js internationalization.",
    },
  };
}

const features = [
  {
    title: "CDN-Powered Delivery",
    description:
      "Translations are served from edge locations worldwide via Cloudflare CDN. Sub-50ms load times with automatic cache invalidation on publish.",
    icon: "globe",
    docUrl: "https://docs.better-i18n.com/frameworks/nextjs",
    docLabel: "Learn about CDN delivery",
  },
  {
    title: "Server-Side Rendering",
    description:
      "Messages are loaded server-side in your layout using getMessages(). No flash of untranslated content, fully SEO-friendly with pre-rendered translations.",
    icon: "server",
    docUrl: "https://docs.better-i18n.com/frameworks/nextjs/api-reference",
    docLabel: "View API reference",
  },
  {
    title: "Instant Locale Switching",
    description:
      "Switch languages client-side with useSetLocale() — no full page reload. The BetterI18nProvider fetches new translations from CDN and re-renders instantly.",
    icon: "switch",
    docUrl: "https://docs.better-i18n.com/frameworks/nextjs/client",
    docLabel: "Client-side docs",
  },
  {
    title: "Dynamic Language Discovery",
    description:
      "useManifestLanguages() fetches available languages from CDN manifest. Add a language in the dashboard and it appears in your app automatically.",
    icon: "discover",
    docUrl: "https://docs.better-i18n.com/frameworks/nextjs/client",
    docLabel: "Explore hooks",
  },
  {
    title: "Type-Safe Translation Keys",
    description:
      "Built on next-intl with full TypeScript support. useTranslations() provides compile-time checking for translation keys — catch errors before runtime.",
    icon: "type",
    docUrl: "https://docs.better-i18n.com/frameworks/nextjs/api-reference",
    docLabel: "Type-safe API docs",
  },
  {
    title: "AI-Powered Translation",
    description:
      "Get AI translation suggestions in the better-i18n dashboard. Human approval workflow ensures quality. Translate entire projects in minutes, not days.",
    icon: "ai",
    docUrl: "https://dash.better-i18n.com",
    docLabel: "Try the dashboard",
  },
  {
    title: "Middleware Locale Detection",
    description:
      "betterMiddleware() detects user locale from URL path, cookie, or Accept-Language header. Clerk-style callback pattern for easy auth integration.",
    icon: "middleware",
    docUrl: "https://docs.better-i18n.com/frameworks/nextjs/middleware",
    docLabel: "Middleware setup guide",
  },
  {
    title: "Dashboard Management",
    description:
      "Manage translations, languages, and namespaces from dash.better-i18n.com. Real-time collaboration, version history, and GitHub integration.",
    icon: "dashboard",
    docUrl: "https://dash.better-i18n.com",
    docLabel: "Open dashboard",
  },
];

function FeatureIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    globe: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    server: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    switch: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
    ),
    discover: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    type: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    ai: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    middleware: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    dashboard: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
  };

  return icons[type] || icons.globe;
}

function TerminalCodeBlock() {
  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-gray-800 bg-gray-950 shadow-2xl">
      {/* Terminal header bar */}
      <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-900 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-2 text-xs text-gray-400">i18n.config.ts</span>
      </div>
      {/* Code content */}
      <div className="overflow-x-auto p-6 text-sm leading-relaxed text-gray-100">
        <pre><code>{`// i18n.config.ts
import { createI18n } from "@better-i18n/next";

export const i18n = createI18n({
  project: "your-org/your-project",
  defaultLocale: "en",
});

// middleware.ts
import { i18n } from "./i18n.config";
export default i18n.betterMiddleware();

// app/[locale]/layout.tsx
const messages = await i18n.getMessages(locale);
<BetterI18nProvider config={i18n.config} locale={locale} messages={messages}>
  {children}
</BetterI18nProvider>

// Any component
const t = useTranslations("namespace");
return <h1>{t("title")}</h1>;`}</code></pre>
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  const locale = useLocale();

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <BreadcrumbSchema items={[
        { name: "Home", href: `/${locale}` },
        { name: "Features", href: `/${locale}/features` },
      ]} />

      {/* Hero header with gradient */}
      <header className="relative text-center">
        <div className="absolute inset-0 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 opacity-60 blur-3xl dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 dark:opacity-40" />
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          Platform Features
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Next.js Internationalization{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
            Features
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Everything you need to build multilingual Next.js applications.
          CDN-powered translations, server-side rendering, and instant locale switching.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://docs.better-i18n.com/frameworks/nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:shadow-blue-500/40 dark:shadow-blue-500/10 dark:hover:shadow-blue-500/20"
          >
            Get Started
          </a>
          <a
            href="https://dash.better-i18n.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
          >
            Open Dashboard
          </a>
        </div>
      </header>

      {/* Feature cards grid */}
      <section className="mt-24 grid gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.icon}
            className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-blue-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-blue-900"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 shadow-sm transition-transform duration-200 group-hover:scale-110 dark:from-blue-900/40 dark:to-blue-800/20 dark:text-blue-400">
              <FeatureIcon type={feature.icon} />
            </div>
            <h2 className="text-lg font-semibold">{feature.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
            <a
              href={feature.docUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {feature.docLabel}
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </article>
        ))}
      </section>

      {/* Code integration section */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Quick Integration</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Add internationalization to your Next.js app in under 5 minutes.{" "}
            <a
              href="https://docs.better-i18n.com/frameworks/nextjs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 underline decoration-blue-600/30 underline-offset-2 transition hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400"
            >
              Follow the full guide
            </a>
          </p>
        </div>
        <TerminalCodeBlock />
      </section>

      {/* CTA section with gradient */}
      <section className="mt-24 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-10 text-center text-white shadow-xl sm:p-14">
        <h2 className="text-2xl font-bold sm:text-3xl">Ready to go multilingual?</h2>
        <p className="mx-auto mt-4 max-w-lg text-blue-100">
          Create a free account, add your languages, and start translating.
          Join thousands of developers building for a global audience.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="https://docs.better-i18n.com/frameworks/nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-lg transition hover:bg-blue-50 sm:w-auto"
          >
            Read the Docs
          </a>
          <a
            href="https://dash.better-i18n.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10 sm:w-auto"
          >
            Open Dashboard
          </a>
        </div>
      </section>

      {/* Bottom navigation */}
      <nav className="mt-16 flex items-center justify-center gap-6 border-t border-gray-200 pt-8 dark:border-gray-800" aria-label="Explore more">
        <Link
          href={`/${locale}`}
          className="text-sm font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          &larr; Back to home
        </Link>
        <Link
          href={`/${locale}/about`}
          className="text-sm font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          How it works &rarr;
        </Link>
      </nav>
    </div>
  );
}
