import type { Metadata } from "next";
import Link from "next/link";
import { useLocale } from "next-intl";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

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
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
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
  },
  {
    title: "Server-Side Rendering",
    description:
      "Messages are loaded server-side in your layout using getMessages(). No flash of untranslated content, fully SEO-friendly with pre-rendered translations.",
    icon: "server",
  },
  {
    title: "Instant Locale Switching",
    description:
      "Switch languages client-side with useSetLocale() — no full page reload. The BetterI18nProvider fetches new translations from CDN and re-renders instantly.",
    icon: "switch",
  },
  {
    title: "Dynamic Language Discovery",
    description:
      "useManifestLanguages() fetches available languages from CDN manifest. Add a language in the dashboard and it appears in your app automatically.",
    icon: "discover",
  },
  {
    title: "Type-Safe Translation Keys",
    description:
      "Built on next-intl with full TypeScript support. useTranslations() provides compile-time checking for translation keys — catch errors before runtime.",
    icon: "type",
  },
  {
    title: "AI-Powered Translation",
    description:
      "Get AI translation suggestions in the better-i18n dashboard. Human approval workflow ensures quality. Translate entire projects in minutes, not days.",
    icon: "ai",
  },
  {
    title: "Middleware Locale Detection",
    description:
      "betterMiddleware() detects user locale from URL path, cookie, or Accept-Language header. Clerk-style callback pattern for easy auth integration.",
    icon: "middleware",
  },
  {
    title: "Dashboard Management",
    description:
      "Manage translations, languages, and namespaces from dash.better-i18n.com. Real-time collaboration, version history, and GitHub integration.",
    icon: "dashboard",
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

export default function FeaturesPage() {
  const locale = useLocale();

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <BreadcrumbSchema items={[
        { name: "Home", href: `/${locale}` },
        { name: "Features", href: `/${locale}/features` },
      ]} />
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Next.js Internationalization Features
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          Everything you need to build multilingual Next.js applications.
          CDN-powered translations, server-side rendering, and instant locale switching.
        </p>
      </header>

      <section className="mt-20 grid gap-8 sm:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.icon}
            className="rounded-xl border border-gray-200 p-6 transition hover:border-blue-300 hover:shadow-sm dark:border-gray-800 dark:hover:border-blue-800"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <FeatureIcon type={feature.icon} />
            </div>
            <h2 className="text-lg font-semibold">{feature.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-20">
        <h2 className="text-center text-2xl font-bold">Quick Integration</h2>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
          Add internationalization to your Next.js app in under 5 minutes.
        </p>
        <div className="mt-8 overflow-x-auto rounded-xl bg-gray-950 p-6 text-sm text-gray-100">
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
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-2xl font-bold">Ready to go multilingual?</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Create a free account, add your languages, and start translating.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://docs.better-i18n.com/frameworks/nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Read the Docs
          </a>
          <a
            href="https://dash.better-i18n.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
          >
            Open Dashboard
          </a>
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
          href={`/${locale}/about`}
          className="text-sm font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          How it works &rarr;
        </Link>
      </nav>
    </div>
  );
}
