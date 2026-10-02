"use client";

import Link from "next/link";
import StatusScreen, { useStatusMessages } from "@/components/layout/StatusScreen";
import { createFormatter } from "@/i18n/format";

export default function NotFound() {
  const { locale, s } = useStatusMessages();
  return (
    <StatusScreen
      code={createFormatter(locale).number(404)}
      title={s.notFoundTitle}
      body={s.notFoundBody}
      action={
        <Link href={`/${locale}`} className="btn btn-primary">
          {s.home}
        </Link>
      }
    />
  );
}
