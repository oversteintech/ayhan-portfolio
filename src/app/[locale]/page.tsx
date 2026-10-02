import { notFound } from "next/navigation";
import Hero from "@/components/hero/Hero";
import Statement from "@/components/sections/Statement";
import Work from "@/components/sections/Work";
import Leadership from "@/components/sections/Leadership";
import Ecosystem from "@/components/sections/Ecosystem";
import Systems from "@/components/sections/Systems";
import Capabilities from "@/components/sections/Capabilities";
import Notes from "@/components/sections/Notes";
import Contact from "@/components/sections/Contact";
import { brands } from "@/content/ecosystem";
import { site } from "@/content/site";
import { bcp47, isLocale } from "@/i18n/config";
import { createFormatter } from "@/i18n/format";
import { getMessages } from "@/i18n/messages";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getMessages(locale);
  const fmt = createFormatter(locale);
  const n = (i: number) => fmt.index(i);

  const url = `${site.url}/${locale}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${url}#page`,
        url,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: bcp47[locale],
        mainEntity: { "@id": `${site.url}#person` },
      },
      {
        "@type": "Person",
        "@id": `${site.url}#person`,
        name: site.name,
        url: site.url,
        image: `${site.url}/profile.jpg`,
        email: `mailto:${site.email}`,
        jobTitle: t.meta.jobTitle,
        description: t.meta.ogDescription,
        address: { "@type": "PostalAddress", addressLocality: site.location.city, addressCountry: site.location.country },
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "Istanbul University" },
          { "@type": "CollegeOrUniversity", name: "Düzce University" },
        ],
        hasCredential: ["PMP", "CSPO", "PSM I", "ISTQB Advanced Level Test Automation Engineer", "ISTQB Foundation Level"].map((name) => ({
          "@type": "EducationalOccupationalCredential",
          name,
        })),
        knowsLanguage: ["en", "tr", "de"],
        sameAs: [site.linkedin, site.github],
        affiliation: [brands.afterArtificial, brands.labs].map((b) => ({ "@type": "Organization", name: b.name, url: b.href })),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}#website`,
        url: site.url,
        name: site.name,
        inLanguage: bcp47[locale],
        publisher: { "@id": `${site.url}#person` },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main>
        <Hero t={t} />
        <Statement t={t} fmt={fmt} />
        <Work t={t} fmt={fmt} index={n(1)} />
        <Leadership t={t} fmt={fmt} index={n(2)} />
        <Ecosystem t={t} fmt={fmt} index={n(3)} />
        <Systems t={t} fmt={fmt} index={n(4)} />
        <Capabilities t={t} fmt={fmt} index={n(5)} />
        <Notes t={t} fmt={fmt} locale={locale} index={n(6)} />
        <Contact t={t} fmt={fmt} index={n(7)} />
      </main>
    </>
  );
}
