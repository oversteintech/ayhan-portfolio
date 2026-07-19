export interface Metric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export const metrics: Metric[] = [
  { value: 20, suffix: "+", label: "Engineers led" },
  { value: 8, suffix: "M+", prefix: "$", label: "Program scale delivered" },
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 100, suffix: "+", label: "Product issues found" },
  { value: 50, suffix: "+", label: "Technical interviews conducted" },
  { value: 11, suffix: "", label: "Languages in AI validation framework" },
  { value: 50, suffix: "%", label: "Release efficiency improvement at Siemens" },
];
