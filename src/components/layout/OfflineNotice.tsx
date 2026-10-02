"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Icon from "@/components/ui/Icon";

function subscribe(onChange: () => void) {
  window.addEventListener("online", onChange);
  window.addEventListener("offline", onChange);
  return () => {
    window.removeEventListener("online", onChange);
    window.removeEventListener("offline", onChange);
  };
}

export default function OfflineNotice({ offline, online }: { offline: string; online: string }) {
  const isOnline = useSyncExternalStore(subscribe, () => navigator.onLine, () => true);
  const [restored, setRestored] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    const onOnline = () => {
      setRestored(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setRestored(false), 3500);
    };
    window.addEventListener("online", onOnline);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("online", onOnline);
    };
  }, []);

  const message = !isOnline ? offline : restored ? online : null;

  return (
    <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      {message ? (
        <p className="card pointer-events-auto flex items-center gap-3 px-5 py-3 text-[0.95rem] text-ink-1">
          <Icon name={isOnline ? "check" : "offline"} />
          {message}
        </p>
      ) : null}
    </div>
  );
}
