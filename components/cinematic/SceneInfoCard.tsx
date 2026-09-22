"use client";
import type { Scene } from "@/data/propertyData";

export default function SceneInfoCard({ scene }: { scene: Scene }) {
  return (
    <div
      key={scene.id}
      className="scene-info-card max-w-[220px] rounded-xl border border-white/10 bg-black/35 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] md:max-w-[240px] md:p-4"
    >
      <p className="text-[9px] font-semibold uppercase tracking-[.22em] text-amber-300">
        {scene.eyebrow ?? scene.subtitle}
      </p>
      <h1 className="mt-2 text-sm font-light leading-tight text-white md:text-base">
        {scene.title}
      </h1>
      <p className="mt-2 text-[10px] leading-4 text-white/70 md:text-[11px]">
        {scene.description}
      </p>

      {scene.info && scene.info.length > 0 && (
        <div className="mt-3 grid grid-cols-2 gap-x-2 gap-y-2 border-t border-white/10 pt-2.5">
          {scene.info.slice(0, 2).map((item) => (
            <div key={item.label}>
              <p className="text-[8px] uppercase tracking-[.18em] text-white/45">
                {item.label}
              </p>
              <p className="mt-0.5 text-[10px] font-medium text-white md:text-[11px]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
