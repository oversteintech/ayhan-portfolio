"use client";

import { useEffect } from "react";
import StatusScreen, { useStatusMessages } from "@/components/layout/StatusScreen";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { s } = useStatusMessages();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusScreen
      title={s.errorTitle}
      body={s.errorBody}
      action={
        <button type="button" className="btn btn-primary" onClick={reset}>
          {s.retry}
        </button>
      }
    />
  );
}
