import Icon from "@/components/ui/Icon";
import CopyEmail from "./CopyEmail";
import { workingLanguages } from "@/content/career";
import { sectionIds, site } from "@/content/site";
import { interpolate, type Formatter } from "@/i18n/format";
import type { Messages } from "@/i18n/messages/en";

export default function Contact({ t, fmt, index }: { t: Messages; fmt: Formatter; index: string }) {
  const c = t.contact;
  const fluent = workingLanguages.filter((l) => l.level === "fluent").map((l) => fmt.languageName(l.code));

  const routes = [
    { href: site.linkedin, label: c.linkedin, meta: "linkedin.com/in/ayhan-uzundal", external: true },
    { href: site.github, label: c.github, meta: "github.com/auzundal", external: true },
    { href: site.cv, label: c.cv, meta: c.cvMeta, external: false, download: true },
  ];

  return (
    <section id={sectionIds.contact} className="section overflow-hidden" aria-labelledby="contact-title">
      <div className="container-x">
        <div className="reveal grid gap-5">
          <p className="eyebrow">
            <span className="eyebrow-index">{index}</span>
            {c.eyebrow}
          </p>
          <h2 id="contact-title" className="t-display max-w-[16ch] text-[clamp(2.6rem,1.6rem+4.4vw,5.6rem)]">
            {c.title}
          </h2>
          <p className="t-lead">{c.lead}</p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20">
          <div className="reveal grid content-start gap-6">
            <p className="eyebrow">{c.emailLabel}</p>
            <a
              href={`mailto:${site.email}`}
              className="w-fit break-all font-display text-[clamp(1.6rem,1.1rem+2.2vw,3rem)] leading-tight text-ink-1 underline decoration-line-3 decoration-1 underline-offset-[0.2em] transition-colors hover:decoration-ink-1"
              dir="ltr"
            >
              {site.email}
            </a>
            <CopyEmail email={site.email} labels={{ copy: c.copy, copied: c.copied, copyFailed: c.copyFailed }} />
          </div>

          <div className="reveal grid content-start gap-4">
            <p className="eyebrow">{c.elsewhere}</p>
            <ul className="grid border-t border-line-2">
              {routes.map((route) => (
                <li key={route.href} className="border-b border-line-2">
                  <a
                    href={route.href}
                    {...(route.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    {...(route.download ? { download: "Ayhan-Uzundal-CV.pdf" } : {})}
                    className="group flex items-center justify-between gap-4 py-5 no-underline"
                  >
                    <span className="grid gap-0.5">
                      <span className="font-display text-[1.35rem] text-ink-1">{route.label}</span>
                      <span className="text-[0.9rem] text-ink-2" dir={route.external ? "ltr" : undefined}>
                        {route.meta}
                      </span>
                    </span>
                    <Icon
                      name={route.download ? "file" : "external"}
                      size={20}
                      className="arrow shrink-0 text-ink-2 transition-transform group-hover:-translate-y-0.5"
                    />
                    {route.external ? <span className="sr-only">{t.a11y.newTab}</span> : null}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-2 text-ink-2">
              <Icon name="pin" size={16} />
              {c.location}
            </p>
            <p className="text-ink-2">{interpolate(c.languages, { list: fmt.list(fluent) })}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
