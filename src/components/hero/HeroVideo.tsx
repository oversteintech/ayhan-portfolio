"use client";

import { useEffect, useRef } from "react";

/**
 * Looping ambient background for the hero. The poster frame is the fallback for
 * reduced motion, Save-Data, blocked autoplay, and no-JS; the clip only downloads
 * once playback is allowed and the hero is on screen.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    const saveData = nav.connection?.saveData === true;
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;

    video.muted = true;

    const sync = () => {
      const allowed = !saveData && !reducedQuery.matches && visible && !document.hidden;
      if (allowed) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(video);

    document.addEventListener("visibilitychange", sync);
    reducedQuery.addEventListener("change", sync);
    sync();

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      reducedQuery.removeEventListener("change", sync);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video"
      poster="/media/hero-field-poster.jpg"
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/media/hero-field.mp4" type="video/mp4" />
    </video>
  );
}
