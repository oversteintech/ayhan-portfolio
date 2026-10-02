"use client";

import { useStatusMessages } from "@/components/layout/StatusScreen";

export default function Loading() {
  const { s } = useStatusMessages();
  return (
    <main className="section grid min-h-[60svh] place-items-center" aria-busy="true">
      <p role="status" className="flex items-center gap-3 text-ink-2">
        <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-accent-amber" />
        {s.loading}
      </p>
    </main>
  );
}
