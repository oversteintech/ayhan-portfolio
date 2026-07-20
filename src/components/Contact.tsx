import SectionReveal from "./SectionReveal";

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative" aria-labelledby="contact-heading">
      <div className="container-max">
        <SectionReveal>
          <div className="panel relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
            <div className="relative mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-4">Contact</p>
              <h2 id="contact-heading" className="font-display mb-4 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                Let’s build something ambitious.
              </h2>
              <p className="mb-10 text-muted">
                Open to conversations with enterprise leaders, partners,
                investors, and executive search — on ICT transformation,
                leadership, and technology ventures.
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="mailto:ayhanuzundal@gmail.com"
                  className="inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-background transition hover:bg-accent-bright"
                >
                  ayhanuzundal@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/ayhan-uzundal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-white/25"
                >
                  LinkedIn
                </a>
              </div>

              <p className="mt-8 text-sm text-muted">Istanbul, Türkiye</p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
