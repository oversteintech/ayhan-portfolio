export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8" role="contentinfo">
      <div className="container-max flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-silver">
          &copy; {year} Ayhan Uzundal. Founder of AfterArtificial · Engineering
          via Overstein Labs
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-silver/70">
          <a
            href="https://www.afterartificial.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            AfterArtificial
          </a>
          <a
            href="https://www.afterframework.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            After Framework
          </a>
          <a
            href="https://www.overstein.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Overstein Labs
          </a>
        </div>
      </div>
    </footer>
  );
}
