"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { getGSAP } from "@/lib/gsap";

export default function LenisProvider() {
  useEffect(() => {
    const { gsap, ScrollTrigger } = getGSAP();
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Ép tính lại chiều cao trigger sau khi layout ổn định
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return null;
}
