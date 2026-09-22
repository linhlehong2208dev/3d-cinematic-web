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
  return (
    <section id="rooms" className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[.3em] text-amber-600">
          KHÔNG GIAN CHI TIẾT
        </p>
        <h2 className="mt-4 text-4xl font-light text-zinc-900 md:text-6xl">
          Từng góc nhìn,
          <br />
          từng không gian.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTY.rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
