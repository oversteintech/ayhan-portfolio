export default function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  lead,
  className = "",
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <header className={`reveal grid gap-5 ${className}`}>
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        {eyebrow}
      </p>
      <h2 id={id} className="t-h2 max-w-[22ch]">
        {title}
      </h2>
      {lead ? <p className="t-lead">{lead}</p> : null}
    </header>
  );
}
