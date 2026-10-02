"use client";

import { useParams } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { statusMessages } from "@/i18n/status";

export function useStatusMessages() {
  const params = useParams<{ locale?: string }>();
  const locale: Locale = isLocale(params?.locale) ? params.locale : defaultLocale;
  return { locale, s: statusMessages[locale] };
}

export default function StatusScreen({
  code,
  title,
  body,
  action,
}: {
  code?: string;
  title: string;
  body: string;
  action: React.ReactNode;
}) {
  return (
    <main className="section grid min-h-[70svh] place-items-center">
      <div className="container-x grid max-w-2xl justify-items-start gap-6">
        {code ? (
          <p className="font-display text-[clamp(4rem,3rem+5vw,8rem)] leading-none text-line-3" aria-hidden="true">
            {code}
          </p>
        ) : null}
        <h1 className="t-h2">{title}</h1>
        <p className="t-lead">{body}</p>
        {action}
      </div>
    </main>
  );
}
