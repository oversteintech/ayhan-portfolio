import type { PathKey } from "./Paths";

const common = {
  viewBox: "0 0 320 260",
  className: "absolute inset-0 h-full w-full rtl:-scale-x-100",
  "aria-hidden": true,
  focusable: false,
  preserveAspectRatio: "xMidYMid meet",
} as const;

function Leadership() {
  const left = [
    [70, 70],
    [40, 120],
    [95, 135],
    [60, 175],
  ];
  const right = [
    [235, 65],
    [270, 110],
    [220, 130],
    [260, 170],
    [210, 180],
  ];
  return (
    <svg {...common}>
      <g stroke="var(--line-2)" strokeWidth="1" fill="none">
        <circle cx="70" cy="125" r="62" strokeDasharray="3 5" />
        <circle cx="240" cy="122" r="66" strokeDasharray="3 5" />
      </g>
      <g stroke="var(--line-3)" strokeWidth="1">
        {left.map(([x, y]) => (
          <line key={`l${x}${y}`} x1={x} y1={y} x2="70" y2="125" />
        ))}
        {right.map(([x, y]) => (
          <line key={`r${x}${y}`} x1={x} y1={y} x2="240" y2="122" />
        ))}
      </g>
      <path d="M70 125 C 130 95, 180 95, 240 122" stroke="var(--accent-green)" strokeWidth="1.6" fill="none" className="draw-path" pathLength={1} />
      <g fill="var(--surface-1)" stroke="var(--ink-2)" strokeWidth="1.2">
        {[...left, ...right].map(([x, y]) => (
          <circle key={`n${x}${y}`} cx={x} cy={y} r="6" />
        ))}
      </g>
      <circle cx="70" cy="125" r="9" fill="var(--accent-green)" />
      <circle cx="240" cy="122" r="9" fill="var(--accent-green)" />
      <g stroke="var(--line-3)" strokeWidth="1">
        <line x1="30" y1="228" x2="290" y2="228" />
        {[50, 95, 140, 185, 230, 275].map((x) => (
          <line key={x} x1={x} y1="222" x2={x} y2="234" />
        ))}
      </g>
      {[50, 95, 140, 185, 230, 275].map((x, i) => (
        <circle key={`t${x}`} cx={x} cy="228" r="3.5" fill={i < 5 ? "var(--accent-blue)" : "var(--surface-1)"} stroke="var(--accent-blue)" />
      ))}
    </svg>
  );
}

function Ecosystem() {
  return (
    <svg {...common}>
      <rect x="22" y="22" width="276" height="216" rx="22" fill="none" stroke="var(--line-3)" strokeDasharray="4 6" />
      <rect x="52" y="160" width="216" height="30" rx="8" fill="var(--wash-blue)" stroke="var(--accent-blue)" />
      <g fill="var(--surface-1)" stroke="var(--ink-2)" strokeWidth="1.2">
        <rect x="62" y="70" width="58" height="74" rx="10" />
        <rect x="131" y="56" width="58" height="88" rx="10" />
        <rect x="200" y="82" width="58" height="62" rx="10" strokeDasharray="4 4" />
      </g>
      <g stroke="var(--accent-blue)" strokeWidth="1.2">
        <line x1="91" y1="144" x2="91" y2="160" />
        <line x1="160" y1="144" x2="160" y2="160" />
        <line x1="229" y1="144" x2="229" y2="160" />
      </g>
      <rect x="131" y="56" width="58" height="10" rx="4" fill="#e0282e" opacity="0.85" />
      <rect x="62" y="70" width="58" height="10" rx="4" fill="#6d5bd0" opacity="0.85" />
      <g fill="var(--ink-3)">
        <rect x="72" y="92" width="30" height="4" rx="2" />
        <rect x="72" y="102" width="38" height="4" rx="2" />
        <rect x="141" y="80" width="34" height="4" rx="2" />
        <rect x="141" y="90" width="26" height="4" rx="2" />
        <rect x="141" y="100" width="38" height="4" rx="2" />
      </g>
      <circle cx="160" cy="210" r="7" fill="var(--surface-1)" stroke="var(--ink-2)" />
      <line x1="160" y1="190" x2="160" y2="203" stroke="var(--ink-2)" />
    </svg>
  );
}

function Systems() {
  const layers = [0, 1, 2, 3, 4, 5];
  return (
    <svg {...common}>
      {layers.map((i) => {
        const y = 40 + i * 30;
        const highlight = i === 2;
        return (
          <g key={i}>
            <path
              d={`M${80 - i * 2} ${y} L${240 + i * 2} ${y} L${260 + i * 2} ${y + 16} L${60 - i * 2} ${y + 16} Z`}
              fill={highlight ? "var(--wash-blue)" : "var(--surface-1)"}
              stroke={highlight ? "var(--accent-blue)" : "var(--line-3)"}
              strokeWidth="1"
            />
          </g>
        );
      })}
      <path d="M160 30 L160 222" stroke="var(--accent-amber)" strokeWidth="1.5" strokeDasharray="2 5" className="draw-path" pathLength={1} />
      <circle cx="160" cy="30" r="4" fill="var(--accent-amber)" />
      <circle cx="160" cy="222" r="4" fill="var(--accent-amber)" />
    </svg>
  );
}

export default function PathVisual({ kind }: { kind: PathKey }) {
  if (kind === "leadership") return <Leadership />;
  if (kind === "ecosystem") return <Ecosystem />;
  return <Systems />;
}
