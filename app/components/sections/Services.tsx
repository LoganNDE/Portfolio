"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/app/data/service";
import { Serviceblock } from "../blocks/Service-block";

gsap.registerPlugin(ScrollTrigger);

export function Service() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 sm:py-28">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-px bg-[#333]" />
        <span className="font-mono text-[11px] tracking-[.3em] uppercase text-[#555]">
          03 Servicios
        </span>
      </div>

      <div className="mb-12">
        <h2 className="font-unbounded text-4xl sm:text-5xl font-bold text-white leading-tight">
          Lo que puedo<br />
          <span className="text-[#777]">hacer por ti</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <div key={service.key} className="service-card">
            <Serviceblock
              title={service.title}
              subtitle={service.subtitle}
              highlight={service.highlight}
              description={service.description}
              tags={service.tags}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
