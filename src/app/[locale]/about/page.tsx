import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Upload, Globe, Server, Monitor, ArrowRight, ExternalLink, BookOpen, Github } from "lucide-react";
import { i18n } from "../../../../i18n.config";
import { toOgLocale } from "@/i18n/locale-map";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

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
      locale: toOgLocale(locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@betteri18n",
      creator: "@betteri18n",
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
    { name: "Next.js 15", detail: "App Router + Server Components", color: "bg-black text-white dark:bg-white dark:text-black" },
    { name: "@better-i18n/next", detail: "CDN-powered translations", color: "bg-blue-600 text-white" },
    { name: "next-intl", detail: "Type-safe translation hooks", color: "bg-violet-600 text-white" },
    { name: "Tailwind CSS 4", detail: "Utility-first styling", color: "bg-cyan-500 text-white" },
    { name: "TypeScript 5", detail: "Full type safety", color: "bg-blue-700 text-white" },
  ];

  const cdnSteps: { title: string; description: string; color: string; icon: LucideIcon }[] = [
    {
      title: "Dashboard publish",
      description: "Translations are published from the better-i18n dashboard to Cloudflare R2 storage.",
      color: "from-violet-500 to-purple-600",
      icon: Upload,
    },
    {
      title: "Edge CDN delivery",
      description: "Translation bundles are served from global edge locations with sub-50ms load times.",
      color: "from-blue-500 to-cyan-500",
      icon: Globe,
    },
    {
      title: "Server-side rendering",
      description: "Next.js server components fetch translations at request time via getMessages() for SEO-friendly HTML.",
      color: "from-emerald-500 to-teal-500",
      icon: Server,
    },
    {
      title: "Client hydration",
      description: "BetterI18nProvider hydrates translations client-side with zero layout shift. useSetLocale() enables instant switching.",
      color: "from-amber-500 to-orange-500",
      icon: Monitor,
    },
  ];

  const apis = [
    { name: "createI18n()", type: "Config", purpose: "Initialize SDK with project settings" },
    { name: "i18n.betterMiddleware()", type: "Server", purpose: "Locale detection from URL, cookie, Accept-Language" },
    { name: "i18n.getMessages(locale)", type: "Server", purpose: "Load all translations for a locale" },
    { name: "i18n.getLocales()", type: "Server", purpose: "Fetch available locales from CDN" },
    { name: "BetterI18nProvider", type: "Client", purpose: "React context for translations" },
    { name: "useTranslations(ns)", type: "Client", purpose: "Type-safe translation access" },
    { name: "useSetLocale()", type: "Client", purpose: "Instant language switching" },
    { name: "useManifestLanguages()", type: "Client", purpose: "Dynamic language discovery from CDN" },
  ];

  const typeBadgeVariant: Record<string, "default" | "secondary" | "outline"> = {
    Config: "outline",
    Server: "default",
    Client: "secondary",
  };

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <BreadcrumbSchema items={[
        { name: "Home", href: `/${locale}` },
        { name: "About", href: `/${locale}/about` },
      ]} />

      {/* Hero Introduction */}
      <section
        aria-label="Introduction"
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-violet-50 to-purple-50 px-8 py-12 dark:from-blue-950/40 dark:via-violet-950/40 dark:to-purple-950/40"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="relative">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="https://docs.better-i18n.com/frameworks/nextjs">
                <BookOpen />
                Read the docs
                <ArrowRight />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/better-i18n">
                <Github />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-20" aria-label="Tech Stack">
        <h2 className="text-2xl font-semibold">{t("stack.title")}</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((item) => (
            <Card key={item.name} className="group transition hover:shadow-md dark:hover:border-gray-700">
              <CardContent className="flex items-start gap-3">
                <span className={`inline-flex shrink-0 items-center rounded-md px-2 py-1 text-xs font-bold ${item.color}`}>
                  {item.name.split(" ")[0]}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {item.detail}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CDN Architecture */}
      <section
        className="mt-20 rounded-2xl bg-gradient-to-br from-gray-50 to-slate-100 px-8 py-10 dark:from-gray-900/60 dark:to-slate-900/60"
        aria-label="CDN Translation Architecture"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">CDN Translation Architecture</h2>
          <Button variant="link" asChild className="gap-1">
            <Link href="https://docs.better-i18n.com/frameworks/nextjs">
              Learn more
              <ArrowRight className="size-3" />
            </Link>
          </Button>
        </div>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
          better-i18n uses a CDN-first architecture. When you publish translations in the{" "}
          <Link href="https://dash.better-i18n.com" className="font-medium text-blue-600 underline decoration-blue-300 underline-offset-2 transition hover:text-blue-700 dark:text-blue-400 dark:decoration-blue-700 dark:hover:text-blue-300">
            dashboard
          </Link>
          , they are deployed to Cloudflare&apos;s global edge network for sub-50ms delivery worldwide.
        </p>

        {/* Visual Flow Diagram */}
        <div className="mt-8 flex flex-col gap-0">
          {cdnSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.title} className="flex items-stretch gap-4">
                {/* Vertical line + node */}
                <div className="flex flex-col items-center">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                    <IconComponent className="size-5" />
                  </div>
                  {index < cdnSteps.length - 1 && (
                    <div className="w-0.5 grow bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700" />
                  )}
                </div>
                {/* Content card */}
                <Card className="mb-6 flex-1 shadow-sm transition hover:shadow-md">
                  <CardContent>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          The SDK caches manifest data for 5 minutes and translation messages for 30 seconds by default. Cache invalidation happens automatically on publish.
        </p>
      </section>

      {/* SDK APIs */}
      <section className="mt-20" aria-label="SDK APIs">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">SDK APIs Used in This Starter</h2>
          <Button variant="link" asChild className="gap-1">
            <Link href="https://docs.better-i18n.com/frameworks/nextjs/api-reference">
              Full API reference
              <ExternalLink className="size-3" />
            </Link>
          </Button>
        </div>
        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 dark:bg-gray-800/50">
                <TableHead className="px-4">API</TableHead>
                <TableHead className="px-4">Type</TableHead>
                <TableHead className="px-4">Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apis.map((api) => (
                <TableRow key={api.name}>
                  <TableCell className="px-4">
                    <code className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {api.name}
                    </code>
                  </TableCell>
                  <TableCell className="px-4">
                    <Badge variant={typeBadgeVariant[api.type] ?? "default"}>
                      {api.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 text-gray-600 dark:text-gray-400">
                    {api.purpose}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <Separator className="mt-20" />

      {/* How It Works */}
      <section
        className="mt-20 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 px-8 py-10 dark:from-emerald-950/30 dark:to-teal-950/30"
        aria-label="How It Works"
      >
        <h2 className="text-2xl font-semibold">{t("howItWorks.title")}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
          {t("howItWorks.description")}
        </p>
        <div className="mt-6">
          <Button variant="link" asChild className="gap-1 px-0 text-emerald-700 dark:text-emerald-400">
            <Link href="https://docs.better-i18n.com/frameworks/nextjs">
              <BookOpen className="size-3" />
              Read the full integration guide
              <ArrowRight className="size-3" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Supported Locales */}
      <section className="mt-20" aria-label="Supported Locales">
        <h2 className="text-2xl font-semibold">{t("locales.title")}</h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {t("locales.description")}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {locales.map((loc) => (
            <Badge
              key={loc}
              variant={loc === locale ? "default" : "secondary"}
            >
              {loc}
            </Badge>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Manage locales from the{" "}
          <Link
            href="https://dash.better-i18n.com"
            className="font-medium text-blue-600 underline decoration-blue-300 underline-offset-2 transition hover:text-blue-700 dark:text-blue-400 dark:decoration-blue-700 dark:hover:text-blue-300"
          >
            better-i18n dashboard
          </Link>
          .
        </p>
      </section>

      {/* Bottom Navigation */}
      <nav className="mt-20 flex items-center justify-center gap-6 border-t border-gray-200 pt-8 dark:border-gray-800" aria-label="Explore more">
        <Button variant="link" asChild>
          <Link href={`/${locale}`}>
            &larr; Back to home
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href={`/${locale}/features`}>
            Explore all features
            <ArrowRight className="size-3" />
          </Link>
        </Button>
      </nav>
    </article>
  );
}
