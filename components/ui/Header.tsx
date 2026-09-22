"use client";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/config/site";
export default function Header({ onLead }: { onLead: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-40 px-5 py-5 md:px-10 md:py-8">
      <div className="flex items-center justify-between">
        <div className="tracking-[.3em] text-sm font-semibold uppercase">
          CINEMATIC<span className="text-amber-400">3D</span>
        </div>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[.2em] text-white/70 md:flex">
          <button
            onClick={onLead}
            className="rounded-full border border-amber-400/50 bg-amber-400/10 px-5 py-2.5 text-amber-300"
          >
            Private Viewing
          </button>
        </nav>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <Menu />
        </button>
      </div>
      {open && (
        <div className="glass mt-4 rounded-2xl p-5 md:hidden">
          <div className="grid gap-4 text-sm">
            <a href="#overview" onClick={() => setOpen(false)}>
              Overview
            </a>
            <a href="#amenities" onClick={() => setOpen(false)}>
              Amenities
            </a>
            <a href="#specs" onClick={() => setOpen(false)}>
              Specs
            </a>
            <button
              onClick={() => {
                setOpen(false);
                onLead();
              }}
              className="flex items-center justify-center gap-2 rounded-full bg-amber-400 px-4 py-3 font-semibold text-black"
            >
              <Phone size={16} /> Private Viewing
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
