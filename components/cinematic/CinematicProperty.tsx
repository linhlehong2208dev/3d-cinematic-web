"use client";
import { useCallback, useRef, useState } from "react";
import { MapPin, Phone, ChevronDown } from "lucide-react";
import { PROPERTY } from "@/data/propertyData";
import LenisProvider from "./LenisProvider";
import VideoScrubber from "./VideoScrubber";
import SceneInfoCard from "./SceneInfoCard";
import Header from "@/components/ui/Header";
import LeadModal from "@/components/lead/LeadModal";
import PropertySections from "@/components/property/PropertySections";
import VideoGallery from "@/components/property/VideoGallery";

export default function CinematicProperty() {
  const [sceneId, setSceneId] = useState(PROPERTY.scenes[0].id);
  const [ready, setReady] = useState(false);
  const [lead, setLead] = useState(false);
  const cinematicSectionRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const scene =
    PROPERTY.scenes.find((s) => s.id === sceneId) ?? PROPERTY.scenes[0];

  // Cập nhật progress bar trực tiếp qua DOM ref (không setState mỗi tick).
  // Chỉ setState (gây re-render) khi scene thực sự đổi.
  const onProgress = useCallback((v: number) => {
    if (barRef.current) barRef.current.style.width = `${v * 100}%`;

    const next =
      PROPERTY.scenes.find((s) => v >= s.start && v <= s.end) ??
      PROPERTY.scenes[0];

    setSceneId((current) => (current === next.id ? current : next.id));
  }, []);

  return (
    <>
      <LenisProvider smoothWheel={false} duration={0.6} />
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
            <div className="max-w-md pt-12">
              <SceneInfoCard scene={scene} />

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setLead(true)}
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
                >
                  <Phone size={16} /> Private Viewing
                </button>
                <span className="hidden items-center text-xs text-white/50 md:flex">
                  <MapPin size={14} className="mr-2" />
                  {PROPERTY.location}
                </span>
              </div>
            </div>
          </div>

          <div className="absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2 md:flex">
            {PROPERTY.scenes.map((s) => (
              <div
                key={s.id}
                title={s.title}
                className={`h-1 rounded-full transition-all ${
                  scene.id === s.id ? "w-10 bg-amber-400" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[.3em] text-white/40">
            {ready ? "Scroll to explore" : "Loading cinematic experience"}
            <ChevronDown size={15} className="animate-bounce text-amber-400" />
          </div>

          <div
            ref={barRef}
            className="absolute bottom-0 left-0 z-30 h-1 bg-amber-400"
            style={{ width: "0%" }}
          />
        </div>
      </div>

      <PropertySections />
      <VideoGallery />
      <LeadModal
        open={lead}
        onClose={() => setLead(false)}
        scene={scene.title}
      />
    </>
  );
}
