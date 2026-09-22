"use client";
import { useEffect, useRef, useState } from "react";
import { PROPERTY, type RoomVideo } from "@/data/propertyData";

function RoomCard({ room }: { room: RoomVideo }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // chỉ cần trigger 1 lần
        }
      },
      { rootMargin: "300px" }, // bắt đầu load trước khi vào khung nhìn ~300px
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm transition-shadow hover:shadow-md"
    >
      {inView ? (
        <video
          src={room.video}
          poster={room.poster}
          controls
          muted
          playsInline
          preload="metadata"
          className="aspect-video w-full bg-zinc-200 object-cover"
        />
      ) : (
        <div className="aspect-video w-full animate-pulse bg-zinc-200" />
      )}
      <div className="p-4">
        <h3 className="text-base font-medium text-zinc-900">{room.name}</h3>
      </div>
    </div>
  );
}

export default function VideoGallery() {
  return null;
}
