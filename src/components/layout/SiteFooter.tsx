import Icon from "@/components/ui/Icon";
import { brandOrder, brands } from "@/content/ecosystem";
import { sectionIds, site, type SectionKey } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { createFormatter, interpolate } from "@/i18n/format";
import type { Messages } from "@/i18n/messages/en";

const sectionOrder: SectionKey[] = ["work", "leadership", "ecosystem", "systems", "capabilities", "notes", "contact"];

export default function SiteFooter({ locale, t }: { locale: Locale; t: Messages }) {
  const fmt = createFormatter(locale);
  const year = fmt.year(new Date().getUTCFullYear());

  return (
    <footer className="border-t border-line-1 bg-surface-2">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="grid content-start gap-4">
          <p className="font-display text-2xl leading-tight text-ink-1" dir="ltr">
            Ayhan Uzundal
          </p>
          <p className="max-w-sm text-ink-2">{t.footer.tagline}</p>
          <p className="flex items-center gap-2 text-[0.95rem] text-ink-2">
            <Icon name="pin" size={16} />
            {t.contact.location}
          </p>
        </div>

        <nav aria-labelledby="footer-sections">
          <h2 id="footer-sections" className="eyebrow mb-5">
            {t.footer.sections}
          </h2>
          <ul className="grid gap-2">
            {sectionOrder.map((key) => (
              <li key={key}>
                <a className="text-ink-2 no-underline hover:text-ink-1 hover:underline" href={`#${sectionIds[key]}`}>
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-ecosystem">
          <h2 id="footer-ecosystem" className="eyebrow mb-5">
            {t.footer.ecosystem}
          </h2>
          <ul className="grid gap-2">
            {brandOrder
              .filter((id) => id !== "labs")
              .map((id) => (
                <li key={id}>
                  <a
                    className="inline-flex items-center gap-1.5 text-ink-2 no-underline hover:text-ink-1 hover:underline"
                    href={brands[id].href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span dir="ltr">{brands[id].name}</span>
                    <Icon name="external" size={14} className="arrow" />
                    <span className="sr-only">{t.a11y.newTab}</span>
                  </a>
                </li>
              ))}
            <li>
              <a className="inline-flex items-center gap-1.5 text-ink-2 no-underline hover:text-ink-1 hover:underline" href={site.github} target="_blank" rel="noopener noreferrer">
                {t.contact.github}
                <Icon name="external" size={14} className="arrow" />
                <span className="sr-only">{t.a11y.newTab}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line-1">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-6 text-[0.9rem] text-ink-2">
          <p>{interpolate(t.footer.copyright, { year })}</p>
          <a href="#main" className="link-arrow text-[0.9rem]">
            {t.a11y.backToTop}
            <Icon name="down" size={14} className="rotate-180" />
          </a>
        </div>
      </div>
    </footer>
  );
}
