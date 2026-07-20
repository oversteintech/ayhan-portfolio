export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-8" role="contentinfo">
      <div className="container-max flex flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted">© {year} Ayhan Uzundal. All rights reserved.</p>
        <p className="text-xs text-muted-2">Technology business leader · Istanbul</p>
      </div>
    </footer>
  );
}
