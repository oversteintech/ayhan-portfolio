import { bcp47, type Locale } from "./config";

/** Plural message: `other` is required; add the CLDR categories a language needs (e.g. Arabic uses all six). */
export type Plural = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };

export type YearMonth = { year: number; month: number };

type DurationFormatCtor = new (
  locale: string,
  options: { style: "long" | "short" | "narrow" },
) => { format(duration: { years?: number; months?: number }): string };

export function interpolate(template: string, values: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

/** Splits a template into literal text and placeholder names, so values can be emphasised in JSX. */
export function tokenize(template: string): Array<{ text: string } | { key: string }> {
  const parts: Array<{ text: string } | { key: string }> = [];
  const pattern = /\{(\w+)\}/g;
  let last = 0;
  for (const match of template.matchAll(pattern)) {
    if (match.index > last) parts.push({ text: template.slice(last, match.index) });
    parts.push({ key: match[1] });
    last = match.index + match[0].length;
  }
  if (last < template.length) parts.push({ text: template.slice(last) });
  return parts;
}

export function createFormatter(locale: Locale) {
  const tag = bcp47[locale];

  const number = (value: number) => new Intl.NumberFormat(tag).format(value);

  const index = (value: number) => new Intl.NumberFormat(tag, { minimumIntegerDigits: 2 }).format(value);

  const currency = (value: number, code: string) =>
    new Intl.NumberFormat(tag, {
      style: "currency",
      currency: code,
      notation: "compact",
      maximumFractionDigits: 0,
    }).format(value);

  const percent = (value: number) => new Intl.NumberFormat(tag, { style: "percent" }).format(value);

  const monthYear = ({ year, month }: YearMonth) =>
    new Intl.DateTimeFormat(tag, { year: "numeric", month: "short", timeZone: "UTC" }).format(
      new Date(Date.UTC(year, month - 1, 1)),
    );

  const year = (value: number) =>
    new Intl.DateTimeFormat(tag, { year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(value, 6, 1)));

  const date = (iso: string) =>
    new Intl.DateTimeFormat(tag, { dateStyle: "long", timeZone: "UTC" }).format(new Date(iso));

  const relativeYears = (from: YearMonth, now = new Date()) => {
    const months = (now.getUTCFullYear() - from.year) * 12 + (now.getUTCMonth() + 1 - from.month);
    const years = Math.floor(months / 12);
    return new Intl.RelativeTimeFormat(tag, { numeric: "auto" }).format(-years, "year");
  };

  const relativeDate = (iso: string, now = new Date()) => {
    const days = Math.round((new Date(iso).getTime() - now.getTime()) / 86_400_000);
    const rtf = new Intl.RelativeTimeFormat(tag, { numeric: "auto" });
    if (Math.abs(days) < 31) return rtf.format(days, "day");
    if (Math.abs(days) < 365) return rtf.format(Math.round(days / 30), "month");
    return rtf.format(Math.round(days / 365), "year");
  };

  const duration = (start: YearMonth, end: YearMonth) => {
    const total = (end.year - start.year) * 12 + (end.month - start.month);
    const years = Math.floor(total / 12);
    const months = total % 12;
    const parts = { ...(years ? { years } : {}), ...(months ? { months } : {}) };
    const DurationFormat = (Intl as unknown as { DurationFormat?: DurationFormatCtor }).DurationFormat;
    if (DurationFormat) return new DurationFormat(tag, { style: "short" }).format(parts);
    const unit = (value: number, u: "year" | "month") =>
      new Intl.NumberFormat(tag, { style: "unit", unit: u, unitDisplay: "short" }).format(value);
    const list = [years ? unit(years, "year") : null, months ? unit(months, "month") : null].filter(
      (p): p is string => p !== null,
    );
    return new Intl.ListFormat(tag, { style: "narrow", type: "unit" }).format(list);
  };

  const list = (items: string[]) => new Intl.ListFormat(tag, { style: "long", type: "conjunction" }).format(items);

  const languageName = (code: string) => new Intl.DisplayNames([tag], { type: "language" }).of(code) ?? code;

  const plural = (forms: Plural, count: number, values: Record<string, string | number> = {}) => {
    const rule = new Intl.PluralRules(tag).select(count);
    return interpolate(forms[rule] ?? forms.other, { count: number(count), ...values });
  };

  return { tag, number, index, currency, percent, monthYear, year, date, relativeYears, relativeDate, duration, list, languageName, plural };
}

export type Formatter = ReturnType<typeof createFormatter>;
