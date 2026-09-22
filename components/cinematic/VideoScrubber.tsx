"use client";
import { useEffect, useRef } from "react";
import { getGSAP } from "@/lib/gsap";
export default function VideoScrubber({
  videoSrc,
  poster,
  onProgress,
  onReady,
}: {
  videoSrc: string;
  poster: string;
  onProgress: (p: number) => void;
  onReady: () => void;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = video.current,
      container = wrap.current;
    if (!el || !container) return;
    const { gsap, ScrollTrigger } = getGSAP();
    let tween: any;
    const setup = () => {
      tween = gsap.to(el, {
        currentTime: el.duration || 12,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.45,
          onUpdate: (s) => onProgress(s.progress),
        },
      });
      onReady();
    };
    if (el.readyState >= 1) setup();
    else el.addEventListener("loadedmetadata", setup);
    return () => {
      el.removeEventListener("loadedmetadata", setup);
      tween?.scrollTrigger?.kill();
      tween?.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [onProgress, onReady]);
  return (
    <div ref={wrap} className="absolute inset-0">
      <video
        ref={video}
        src={videoSrc}
        poster={poster}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/55" />
      <div className="cinematic-noise pointer-events-none absolute inset-0 mix-blend-screen" />
    </div>
  );
}
