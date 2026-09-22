"use client";
import type { Scene } from "@/data/propertyData";

export default function SceneInfoCard({ scene }: { scene: Scene }) {
  return (
    <div
      key={scene.id}
      className="scene-info-card max-w-md rounded-2xl border border-white/15 bg-black/25 p-6 backdrop-blur-xl md:p-8"
    >
      <p className="text-xs font-semibold tracking-[.3em] text-amber-300">
        {scene.eyebrow ?? scene.subtitle}
      </p>
      <h1 className="mt-4 font-display text-3xl font-light leading-[1.05] text-white md:text-5xl">
        {scene.title}
      </h1>
      <p className="mt-4 text-sm leading-6 text-white/70 md:text-base">
        {scene.description}
      </p>

      {scene.info && scene.info.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/15 pt-5">
          {scene.info.map((item) => (
            <div key={item.label}>
              <p className="text-[10px] uppercase tracking-widest text-white/45">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-white md:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
