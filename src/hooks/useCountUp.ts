"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

export function useCountUp(
  target: number,
  duration = 2000,
  start = false
): number {
  const [count, setCount] = useState(0);
  const reducedMotion = useReducedMotion();
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;

    if (reducedMotion) {
      setCount(target);
      return;
    }

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, start, reducedMotion]);

  return count;
}
