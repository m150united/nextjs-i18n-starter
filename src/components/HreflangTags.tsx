import { i18n } from "../../i18n.config";

interface HreflangTagsProps {
  locale: string;
  path: string;
}

export async function HreflangTags({ locale, path }: HreflangTagsProps) {
  const locales = await i18n.getLocales();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://nextjs-i18n-starter.vercel.app";

  return (
    <>
      {locales.map((loc) => (
        <link
          key={loc}
          rel="alternate"
          hrefLang={loc}
          href={`${baseUrl}/${loc}${path}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}/${i18n.config.defaultLocale}${path}`}
      />
    </>
  );
}
