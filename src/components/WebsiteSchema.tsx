import { JsonLd } from "./JsonLd";

interface WebsiteSchemaProps {
  locale: string;
  baseUrl?: string;
}

export function WebsiteSchema({
  locale,
  baseUrl = "https://nextjs-i18n-starter.vercel.app",
}: WebsiteSchemaProps) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "better-i18n Next.js Starter",
    url: baseUrl,
    inLanguage: locale,
    description:
      "A production-ready Next.js 15 starter with better-i18n for internationalization.",
    publisher: {
      "@type": "Organization",
      name: "better-i18n",
      url: "https://better-i18n.com",
    },
  };

  return <JsonLd data={websiteSchema} />;
}
