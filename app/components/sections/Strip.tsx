"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const items = [
  "NEXT.JS", "LARAVEL", "REACT", "TYPESCRIPT", "SHOPIFY",
  "TAILWIND CSS", "SEO & SEM", "FULL STACK", "PHP",
  "GOOGLE ADS", "STRIPE", "POSTGRESQL", "E-COMMERCE",
];

export function Strip() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 28,
      ease: "none",
      repeat: -1,
    });

    return () => { tween.kill(); };
  }, []);

  return (
<div className="w-full overflow-hidden border-y border-white/30 py-3 bg-black/10 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.15)] ring-1 ring-black/10">      <div ref={trackRef} className="flex w-max">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 font-unbounded text-[14px] tracking-[.35em] uppercase text-white flex-shrink-0"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-[#e8642a]" />
          </span>
        ))}
      </div>
    </div>
  );
}
