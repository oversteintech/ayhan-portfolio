import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { fontClassNames } from "../fonts";
import { bcp47, dirOf, isLocale, locales, ogLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { languageAlternates } from "@/i18n/seo";
import { site } from "@/content/site";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import OfflineNotice from "@/components/layout/OfflineNotice";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getMessages(locale);
  return {
    metadataBase: new URL(site.url),
    title: { default: t.meta.title, template: `%s — ${site.name}` },
    description: t.meta.description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    alternates: { canonical: `${site.url}/${locale}`, languages: languageAlternates() },
    openGraph: {
      type: "profile",
      firstName: "Ayhan",
      lastName: "Uzundal",
      url: `${site.url}/${locale}`,
      siteName: site.name,
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
    },
    twitter: { card: "summary_large_image", title: t.meta.ogTitle, description: t.meta.ogDescription },
    robots: { index: true, follow: true },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f1e8" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f13" },
  ],
  colorScheme: "light dark",
};

const themeScript = `(function(){try{var s=localStorage.getItem('au-theme');var t=s==='dark'||s==='light'?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}})();`;

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const t = await getMessages(locale);

  return (
    <html lang={bcp47[locale]} dir={dirOf(locale)} data-theme="light" className={fontClassNames(locale)} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          {t.a11y.skip}
        </a>
        <SiteHeader locale={locale} nav={t.nav} a11y={t.a11y} />
        <div id="main" tabIndex={-1} className="outline-none">
          {children}
        </div>
        <SiteFooter locale={locale} t={t} />
        <OfflineNotice offline={t.status.offline} online={t.status.online} />
      </body>
    </html>
  );
}
