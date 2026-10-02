import type { SVGProps } from "react";

const paths = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  external: "M7 17 17 7M8 7h9v9",
  down: "M12 5v14M6 13l6 6 6-6",
  sun: "M12 4V2M12 22v-2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
  moon: "M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 9h16.8M3.6 15h16.8M12 3c2.3 2.5 3.5 5.5 3.5 9s-1.2 6.5-3.5 9c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3Z",
  caret: "m6 9 6 6 6-6",
  menu: "M4 7h16M4 12h16M4 17h10",
  close: "M6 6l12 12M18 6 6 18",
  copy: "M9 9h10v10H9zM5 15V5h10",
  check: "m5 12 5 5 9-10",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  file: "M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6",
  pin: "M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 1 1 13 0c0 5.4-6.5 11-6.5 11ZM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  offline: "M3 3l18 18M8.5 16.5a5 5 0 0 1 7 0M5 12.9a10 10 0 0 1 4.2-2.4M12 20h.01M16.7 10.9A10 10 0 0 1 19 12.9M2 8.8a15 15 0 0 1 4.5-2.9M10.7 5.1A15 15 0 0 1 22 8.8",
} as const;

export type IconName = keyof typeof paths;

export default function Icon({ name, size = 18, className, ...rest }: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      <path d={paths[name]} />
    </svg>
  );
}
