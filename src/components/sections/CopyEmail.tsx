"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";

type State = "idle" | "copied" | "failed";

export default function CopyEmail({ email, labels }: { email: string; labels: { copy: string; copied: string; copyFailed: string } }) {
  const [state, setState] = useState<State>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 3000);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" className="btn btn-ghost" onClick={copy}>
        <Icon name={state === "copied" ? "check" : "copy"} size={16} />
        {labels.copy}
      </button>
      <span role="status" aria-live="polite" className="text-[0.92rem] text-ink-2">
        {state === "copied" ? labels.copied : state === "failed" ? labels.copyFailed : ""}
      </span>
    </div>
  );
}
