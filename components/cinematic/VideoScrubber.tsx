"use client";
import { useEffect, useRef, useState } from "react";
import { getGSAP } from "@/lib/gsap";

export default function VideoScrubber({
  triggerRef,
  videoSrc,
  poster,
  onProgress,
  onReady,
}: {
  triggerRef?: React.RefObject<HTMLElement | null>;
  videoSrc: string;
  poster: string;
  onProgress: (p: number) => void;
  onReady: () => void;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const el = video.current;
    const container = wrap.current;
    if (!el || !container) return;
    const { gsap, ScrollTrigger } = getGSAP();
    let tween: any;

    const trigger = triggerRef?.current ?? container.parentElement ?? container;

    const onError = () => {
      setError(
        `Video load failed (code ${el.error?.code}). Kiểm tra lại URL video.`,
      );
      console.error("[VideoScrubber] video error", el.error);
    };

    const setup = () => {
      const duration = el.duration || 12;
      tween = gsap.to(el, {
        currentTime: duration,
        ease: "none",
        scrollTrigger: {
          trigger,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
          invalidateOnRefresh: true,
          onUpdate: (s) => onProgress(Math.min(1, Math.max(0, s.progress))),
        },
      });
      onReady();
      ScrollTrigger.refresh();
    };

    el.addEventListener("error", onError);
    if (el.readyState >= 1) setup();
    else el.addEventListener("loadedmetadata", setup);

    const onWindowLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onWindowLoad);

    return () => {
      el.removeEventListener("error", onError);
      el.removeEventListener("loadedmetadata", setup);
      window.removeEventListener("load", onWindowLoad);
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, [onProgress, onReady, triggerRef]);

  return (
    <div ref={wrap} className="absolute inset-0">
      <video
        ref={video}
        src={videoSrc}
        poster={poster}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/55" />
      <div className="cinematic-noise pointer-events-none absolute inset-0 mix-blend-screen" />
      {error && (
        <div className="absolute inset-x-0 top-20 z-50 mx-auto max-w-md rounded-xl bg-red-950/90 p-4 text-center text-xs text-red-200">
          {error}
        </div>
      )}
    </div>
  );
}
