import SectionReveal from "./SectionReveal";

const contactLinks = [
  {
    label: "Email",
    value: "ayhanuzundal@gmail.com",
    href: "mailto:ayhanuzundal@gmail.com",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Website",
    value: "ayhanuzundal.com.tr",
    href: "https://www.ayhanuzundal.com.tr",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ayhan-uzundal",
    href: "https://www.linkedin.com/in/ayhan-uzundal",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Istanbul, Türkiye",
    href: null,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative"
      aria-labelledby="contact-heading"
    >
      <div className="container-max">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-electric-blue uppercase">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Let&apos;s{" "}
              <span className="text-gradient">connect</span>
            </h2>
            <p className="mb-12 text-lg text-silver">
              Open to conversations around engineering leadership, software delivery,
              QA transformation, automation strategy, product execution, and ambitious
              technology ventures.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="gradient-border mx-auto max-w-xl rounded-3xl p-px">
            <div className="glass-panel rounded-3xl p-8 sm:p-10">
              <div className="space-y-6">
                {contactLinks.map((link) => (
                  <div key={link.label} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/3 text-electric-blue-bright">
                      {link.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium tracking-wider text-silver uppercase">
                        {link.label}
                      </p>
                      {link.href ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block truncate text-sm font-medium text-foreground transition-colors hover:text-electric-blue-bright"
                        >
                          {link.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">
                          {link.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/5 pt-8 text-center">
                <a
                  href="mailto:ayhanuzundal@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-electric-blue px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-electric-blue-bright hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                >
                  Let&apos;s build something ambitious
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
