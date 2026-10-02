"use client";

import { useId } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { LOCALE_COOKIE, bcp47, endonyms, locales, type Locale } from "@/i18n/config";

export default function LanguageSelect({ locale, label }: { locale: Locale; label: string }) {
  const router = useRouter();
  const id = useId();

  function change(next: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    const rest = window.location.pathname.replace(/^\/[^/]+/, "");
    router.push(`/${next}${rest}${window.location.hash}`);
  }

  return (
    <div className="select-shell">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Icon name="globe" size={16} className="select-icon" />
      <select id={id} value={locale} onChange={(event) => change(event.target.value as Locale)}>
        {locales.map((l) => (
          <option key={l} value={l} lang={bcp47[l]}>
            {endonyms[l]}
          </option>
        ))}
      </select>
      <Icon name="caret" size={14} className="select-caret" />
    </div>
  );
}
