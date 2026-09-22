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

          <div className="absolute bottom-12 left-4 z-20 md:bottom-16 md:left-8">
            <div className="pointer-events-none w-[220px] rounded-xl border border-white/10 bg-black/30 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-[1px] md:w-[240px]">
              <SceneInfoCard scene={scene} />
            </div>
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
