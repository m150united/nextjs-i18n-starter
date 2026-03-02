import type { MetadataRoute } from "next";
import { i18n } from "../../i18n.config";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://nextjs-i18n-starter.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = await i18n.getLocales();
  const pages = ["", "/about", "/features"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: "2026-03-02",
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}${page}`])
          ),
        },
      });
    }
  }

  return entries;
}
