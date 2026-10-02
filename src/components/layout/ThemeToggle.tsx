"use client";

import { useCallback, useSyncExternalStore } from "react";
import Icon from "@/components/ui/Icon";

type Theme = "light" | "dark";

const STORAGE_KEY = "au-theme";

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  // Follow the system setting until the visitor makes an explicit choice.
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystem = (event: MediaQueryListEvent) => {
    if (!localStorage.getItem(STORAGE_KEY)) document.documentElement.dataset.theme = event.matches ? "dark" : "light";
  };
  media.addEventListener("change", onSystem);
  return () => {
    observer.disconnect();
    media.removeEventListener("change", onSystem);
  };
}

export default function ThemeToggle({ toLight, toDark }: { toLight: string; toDark: string }) {
  const theme = useSyncExternalStore<Theme | null>(subscribe, readTheme, () => null);

  const toggle = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {}
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rect = event.currentTarget.getBoundingClientRect();
    root.style.setProperty("--vt-x", `${rect.left + rect.width / 2}px`);
    root.style.setProperty("--vt-y", `${rect.top + rect.height / 2}px`);

    if (!reduced && typeof document.startViewTransition === "function") {
      document.startViewTransition(apply);
      return;
    }
    if (!reduced) {
      root.classList.add("theme-transition");
      window.setTimeout(() => root.classList.remove("theme-transition"), 400);
    }
    apply();
  }, []);

  const label = theme === "dark" ? toLight : toDark;

  return (
    <button type="button" className="icon-button" onClick={toggle} aria-label={label} title={label}>
      {/* Both icons render on the server; CSS shows the right one before hydration. */}
      <Icon name="moon" className="dark:hidden" />
      <Icon name="sun" className="hidden dark:block" />
    </button>
  );
}
