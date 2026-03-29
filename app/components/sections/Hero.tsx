"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import { ScrambleText } from "../effects/Scramble";

export function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(scrollRef.current, {
      y: 8,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden w-full">
      <video
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-6 text-center">
        <span className="font-mono text-[12px] tracking-[.4em] uppercase text-[#e8642a] mb-6">
          Full Stack Developer & Marketing
        </span>

        <h1 className="font-unbounded text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight w-full max-w-4xl mb-6">
          <ScrambleText text="Código que vende. Estrategia que escala." />
        </h1>

        <p className="font-montserrat text-[#aaa] text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed mb-10">
          Transformo ideas en productos digitales funcionales combinando ingeniería sólida, diseño y marketing con un enfoque en resultados reales.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#projects"
            className="font-unbounded text-xs tracking-widest uppercase bg-white text-black px-7 py-3 rounded-full hover:bg-[#f4f0eb] transition-colors"
          >
            Ver proyectos
          </a>
          <a
            href="mailto:contact@logannr.me"
            className="font-unbounded text-xs tracking-widest uppercase border border-[#444] text-[#bbb] px-7 py-3 rounded-full hover:border-white hover:text-white transition-colors"
          >
            Contáctame
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#444]"
      >
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
