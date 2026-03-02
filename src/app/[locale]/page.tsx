import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { i18n } from "../../../i18n.config";
import { toOgLocale } from "@/i18n/locale-map";
import { Server, Code, Languages, ArrowRight, BookOpen, LayoutDashboard, Github, Zap, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

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
      icon: <Server className="h-6 w-6" />,
    },
    {
      key: "typesafe" as const,
      icon: <Code className="h-6 w-6" />,
    },
    {
      key: "switcher" as const,
      icon: <Languages className="h-6 w-6" />,
    },
  ];

  const whyReasons = [
    {
      title: "CDN-Powered Delivery",
      description: "Translations served from the edge for instant load times worldwide.",
      href: "https://docs.better-i18n.com",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "Framework Integrations",
      description: "First-class support for Next.js, React, and more with dedicated SDKs.",
      href: "https://docs.better-i18n.com/frameworks/nextjs",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      title: "Visual Dashboard",
      description: "Manage translations, invite collaborators, and track progress in one place.",
      href: "https://dash.better-i18n.com",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Open Source",
      description: "Community-driven development with full transparency on GitHub.",
      href: "https://github.com/better-i18n",
      icon: <Github className="h-5 w-5" />,
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
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
            <Sparkles className="h-3.5 w-3.5" />
            {t("badge")}
          </Badge>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {locales.map((loc) => (
              <Badge key={loc} variant="outline" className="font-mono text-xs">
                {loc}
              </Badge>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <Button asChild size="lg">
              <a
                href="https://docs.better-i18n.com/frameworks/nextjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="h-4 w-4" />
                {t("cta.docs")}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://dash.better-i18n.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LayoutDashboard className="h-4 w-4" />
                {t("cta.dashboard")}
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <Link href={`/${locale}/features`} className="underline decoration-gray-300 underline-offset-4 transition hover:text-foreground hover:decoration-gray-500 dark:decoration-gray-600">
              Explore all features
            </Link>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <Link href={`/${locale}/about`} className="underline decoration-gray-300 underline-offset-4 transition hover:text-foreground hover:decoration-gray-500 dark:decoration-gray-600">
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
            <Card key={feature.key} className="group transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/20">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">
                  {t(`features.${feature.key}.title`)}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {t(`features.${feature.key}.description`)}
                </CardDescription>
              </CardHeader>
            </Card>
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
            <Card key={reason.title} className="group transition-all hover:border-blue-200 hover:shadow-lg dark:hover:border-blue-800">
              <a
                href={reason.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-4 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  {reason.icon}
                </div>
                <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {reason.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {reason.description}
                </CardDescription>
                <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </Card>
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
            <Button asChild size="lg" className="bg-white text-blue-700 shadow-lg hover:bg-blue-50 hover:shadow-xl">
              <a
                href="https://docs.better-i18n.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="h-4 w-4" />
                Read the Docs
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a
                href="https://dash.better-i18n.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LayoutDashboard className="h-4 w-4" />
                Open Dashboard
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a
                href="https://github.com/better-i18n"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
