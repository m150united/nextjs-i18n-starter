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
    url: `${baseUrl}/${locale}`,
    inLanguage: locale,
    description:
      "A production-ready Next.js 15 starter with better-i18n for internationalization.",
    publisher: {
      "@type": "Organization",
      name: "better-i18n",
      url: "https://better-i18n.com",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    sameAs: [
      "https://github.com/better-i18n",
      "https://better-i18n.com",
      "https://docs.better-i18n.com",
    ],
  };

  return <JsonLd data={websiteSchema} />;
}
