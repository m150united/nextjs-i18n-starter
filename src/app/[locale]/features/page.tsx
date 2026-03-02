import type { LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  Code,
  ExternalLink,
  Globe,
  Languages,
  LayoutDashboard,
  Server,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  docUrl: string;
  docLabel: string;
}

const features: Feature[] = [
  {
    title: "CDN-Powered Delivery",
    description:
      "Translations are served from edge locations worldwide via Cloudflare CDN. Sub-50ms load times with automatic cache invalidation on publish.",
    icon: Globe,
    docUrl: "https://docs.better-i18n.com/frameworks/nextjs",
    docLabel: "Learn about CDN delivery",
  },
  {
    title: "Server-Side Rendering",
    description:
      "Messages are loaded server-side in your layout using getMessages(). No flash of untranslated content, fully SEO-friendly with pre-rendered translations.",
    icon: Server,
    docUrl: "https://docs.better-i18n.com/frameworks/nextjs/api-reference",
    docLabel: "View API reference",
  },
  {
    title: "Instant Locale Switching",
    description:
      "Switch languages client-side with useSetLocale() — no full page reload. The BetterI18nProvider fetches new translations from CDN and re-renders instantly.",
    icon: Languages,
    docUrl: "https://docs.better-i18n.com/frameworks/nextjs/client",
    docLabel: "Client-side docs",
  },
  {
    title: "Dynamic Language Discovery",
    description:
      "useManifestLanguages() fetches available languages from CDN manifest. Add a language in the dashboard and it appears in your app automatically.",
    icon: Zap,
    docUrl: "https://docs.better-i18n.com/frameworks/nextjs/client",
    docLabel: "Explore hooks",
  },
  {
    title: "Type-Safe Translation Keys",
    description:
      "Built on next-intl with full TypeScript support. useTranslations() provides compile-time checking for translation keys — catch errors before runtime.",
    icon: Code,
    docUrl: "https://docs.better-i18n.com/frameworks/nextjs/api-reference",
    docLabel: "Type-safe API docs",
  },
  {
    title: "AI-Powered Translation",
    description:
      "Get AI translation suggestions in the better-i18n dashboard. Human approval workflow ensures quality. Translate entire projects in minutes, not days.",
    icon: Sparkles,
    docUrl: "https://dash.better-i18n.com",
    docLabel: "Try the dashboard",
  },
  {
    title: "Middleware Locale Detection",
    description:
      "betterMiddleware() detects user locale from URL path, cookie, or Accept-Language header. Clerk-style callback pattern for easy auth integration.",
    icon: Shield,
    docUrl: "https://docs.better-i18n.com/frameworks/nextjs/middleware",
    docLabel: "Middleware setup guide",
  },
  {
    title: "Dashboard Management",
    description:
      "Manage translations, languages, and namespaces from dash.better-i18n.com. Real-time collaboration, version history, and GitHub integration.",
    icon: LayoutDashboard,
    docUrl: "https://dash.better-i18n.com",
    docLabel: "Open dashboard",
  },
];

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
        <Badge variant="secondary" className="rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          Platform Features
        </Badge>
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
          <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/25 transition hover:shadow-blue-500/40 dark:shadow-blue-500/10 dark:hover:shadow-blue-500/20">
            <a
              href="https://docs.better-i18n.com/frameworks/nextjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://dash.better-i18n.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Dashboard
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      {/* Feature cards grid */}
      <section className="mt-24 grid gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="group transition-all duration-200 hover:border-blue-200 hover:shadow-lg dark:hover:border-blue-900"
          >
            <CardContent className="p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 shadow-sm transition-transform duration-200 group-hover:scale-110 dark:from-blue-900/40 dark:to-blue-800/20 dark:text-blue-400">
                <feature.icon className="h-6 w-6" />
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
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </CardContent>
          </Card>
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
          <Button asChild className="w-full bg-white text-blue-700 shadow-lg hover:bg-blue-50 sm:w-auto">
            <a
              href="https://docs.better-i18n.com/frameworks/nextjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the Docs
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" asChild className="w-full border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 sm:w-auto">
            <a
              href="https://dash.better-i18n.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Dashboard
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
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
