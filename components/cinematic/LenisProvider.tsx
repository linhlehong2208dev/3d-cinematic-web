"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { getGSAP } from "@/lib/gsap";

export default function LenisProvider({
  smoothWheel = false,
  duration = 0.8,
}: {
  smoothWheel?: boolean;
  duration?: number;
}) {
  useEffect(() => {
    const { gsap, ScrollTrigger } = getGSAP();
    const lenis = new Lenis({ duration, smoothWheel, wheelMultiplier: 0.9 });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, [duration, smoothWheel]);

  return null;
}
