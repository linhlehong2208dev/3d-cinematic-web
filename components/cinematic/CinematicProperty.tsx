"use client";
import { useCallback, useMemo, useRef, useState } from "react";
import { MapPin, Phone, ChevronDown } from "lucide-react";
import { PROPERTY } from "@/data/propertyData";
import LenisProvider from "./LenisProvider";
import VideoScrubber from "./VideoScrubber";
import Header from "@/components/ui/Header";
import LeadModal from "@/components/lead/LeadModal";
import PropertySections from "@/components/property/PropertySections";
export default function CinematicProperty() {
  const [p, setP] = useState(0);
  const [ready, setReady] = useState(false);
  const [lead, setLead] = useState(false);
  const cinematicSectionRef = useRef<HTMLDivElement>(null);
  const scene = useMemo(
    () =>
      PROPERTY.scenes.find((s) => p >= s.start && p <= s.end) ??
      PROPERTY.scenes[0],
    [p],
  );
  const onProgress = useCallback((v: number) => setP(v), []);
  return (
    <>
      <LenisProvider />
      <div
        ref={cinematicSectionRef}
        className="relative h-[700vh]"
        data-cinematic-section
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <VideoScrubber
            triggerRef={cinematicSectionRef}
            videoSrc={PROPERTY.video}
            poster={PROPERTY.heroPoster}
            onProgress={onProgress}
            onReady={() => setReady(true)}
          />
          <Header onLead={() => setLead(true)} />
          <div className="relative z-20 flex h-full items-center px-6 md:px-14">
            <div className="max-w-4xl pt-12 transition-all duration-500">
              <p className="text-xs font-semibold tracking-[.3em] text-amber-300">
                {scene.eyebrow ?? scene.subtitle}
              </p>
              <h1 className="mt-5 max-w-4xl font-display text-5xl font-light leading-[.95] md:text-8xl">
                {scene.title}
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
                {scene.description}
              </p>
              {p < 0.16 && (
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <span className="text-3xl font-light text-amber-300 md:text-5xl">
                    {PROPERTY.price}
                  </span>
                  <span className="text-sm text-white/50">
                    {PROPERTY.details}
                  </span>
                </div>
              )}
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => setLead(true)}
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
                >
                  <Phone size={16} /> Private Viewing
                </button>
                <span className="hidden items-center text-xs text-white/40 md:flex">
                  <MapPin size={14} className="mr-2" />
                  {PROPERTY.location}
                </span>
              </div>
            </div>
          </div>
          <div className="absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2 md:flex">
            {PROPERTY.scenes.map((s, i) => (
              <div
                key={s.id}
                title={s.title}
                className={`h-1 rounded-full transition-all ${scene.id === s.id ? "w-10 bg-amber-400" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
          <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[.3em] text-white/40">
            {ready ? "Scroll to explore" : "Loading cinematic experience"}
            <ChevronDown size={15} className="animate-bounce text-amber-400" />
          </div>
          <div
            className="absolute bottom-0 left-0 z-30 h-1 bg-amber-400 transition-[width] duration-100"
            style={{ width: `${p * 100}%` }}
          />
        </div>
      </div>
      <PropertySections />
      <LeadModal
        open={lead}
        onClose={() => setLead(false)}
        scene={scene.title}
      />
    </>
  );
}
