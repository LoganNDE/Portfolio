"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const SECTION_COLORS: Record<string, string> = {
  projects: "#e8642a",
  about:    "#4f6ef7",
  services: "#a855f7",
  contact:  "#22c55e",
};

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [color,   setColor]   = useState("#f4f0eb");
  const [isHover, setIsHover] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only activate on mouse devices
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setMounted(true);

    const onMove = (e: MouseEvent) => {
      gsap.set(dotRef.current,  { x: e.clientX, y: e.clientY });
      gsap.to(ringRef.current,  { x: e.clientX, y: e.clientY, duration: 0.18, ease: "power2.out" });
    };

    const onEnter = () => setIsHover(true);
    const onLeave = () => setIsHover(false);

    document.addEventListener("mousemove", onMove);

    // Attach hover listeners (including future elements via event delegation)
    const attachHover = () => {
      document.querySelectorAll("a, button, [role=button], input, textarea, label").forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attachHover();

    // Section color via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setColor(SECTION_COLORS[entry.target.id] ?? "#f4f0eb");
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    Object.keys(SECTION_COLORS).forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.querySelectorAll("a, button, [role=button], input, textarea, label").forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      observer.disconnect();
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Filled dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width:           isHover ? 6  : 4,
          height:          isHover ? 6  : 4,
          backgroundColor: color,
          transition:      "width .2s, height .2s, background-color .4s",
        }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          width:       isHover ? 52  : 28,
          height:      isHover ? 52  : 28,
          borderColor: color,
          opacity:     0.55,
          transition:  "width .25s, height .25s, border-color .4s, opacity .2s",
        }}
      />
    </>
  );
}
