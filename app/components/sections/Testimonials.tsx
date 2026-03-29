"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Lo que Logan desarrolló no es software genérico — es una herramienta construida exactamente para nuestro negocio. Ha transformado la forma en que gestionamos pedidos y clientes.",
    author: "Andy",
    role: "COO · Beedata",
    initials: "BEE",
  },
  {
    quote:
      "Su conocimiento técnico y su capacidad para entender el negocio lo hacen único. No solo escribe código, resuelve problemas reales.",
    author: "Andy",
    role: "COO · AgenciaY",
    initials: "AR",
  },
  {
    quote:
      "Profesional, comunicativo y con criterio de diseño. El resultado final superó con creces lo que habíamos imaginado inicialmente.",
    author: "Mateo Torres",
    role: "Fundador · StartupZ",
    initials: "MT",
  },
  {
    quote:
      "El sistema de automatización que desarrolló transformó por completo nuestra operación. Cada detalle quedó impecable.",
    author: "Laura Vega",
    role: "Operations Lead · EmpresaW",
    initials: "LV",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testi-label", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.from(".testi-heading", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.from(".testi-card", {
        opacity: 0,
        y: 44,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testi-grid",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 sm:py-28 border-t border-[#111]"
    >
      {/* Label */}
      <div className="testi-label flex items-center gap-3 mb-14">
        <span className="w-8 h-px bg-[#333]" />
        <span className="font-mono text-[11px] tracking-[.3em] uppercase text-[#555]">
          04 Opiniones
        </span>
      </div>

      {/* Headline */}
      <div className="testi-heading mb-14">
        <h2 className="font-unbounded text-4xl sm:text-5xl font-bold text-white leading-tight">
          Lo que dicen
          <br />
          <span className="text-[#2a2a2a]" style={{ WebkitTextStroke: "1px #444" }}>
            mis clientes
          </span>
        </h2>
      </div>

      {/* Grid — gap via bg color trick for 1px dividers */}
      <div className="testi-grid grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1a1a1a]">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testi-card group relative bg-black p-8 sm:p-10 flex flex-col gap-5 overflow-hidden
              hover:bg-[#0a0a0a] transition-colors duration-500"
          >
            {/* Subtle corner accent */}
            <div
              className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at top right, #e8642a18 0%, transparent 70%)",
              }}
            />

            {/* Top row: large quote mark + index */}
            <div className="flex items-start justify-between">
              <span
                className="font-bebas text-[72px] leading-none select-none transition-colors duration-500"
                style={{ color: "#1a1a1a" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#e8642a")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#1a1a1a")
                }
              >
                &ldquo;
              </span>
              <span className="font-mono text-[10px] tracking-[.3em] text-[#2a2a2a] group-hover:text-[#444] transition-colors duration-300 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Quote */}
            <p className="font-montserrat text-[#666] text-[15px] leading-relaxed flex-1 group-hover:text-[#888] transition-colors duration-300">
              {t.quote}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-5 border-t border-[#111]">
              <div className="w-8 h-8 rounded-full border border-[#1f1f1f] flex items-center justify-center flex-shrink-0 group-hover:border-[#333] transition-colors duration-300">
                <span className="font-unbounded text-[8px] tracking-widest text-[#444] group-hover:text-[#666] transition-colors duration-300">
                  {t.initials}
                </span>
              </div>
              <div>
                <p className="font-unbounded text-[10px] tracking-[.12em] text-[#bbb] leading-snug">
                  {t.author}
                </p>
                <p className="font-mono text-[9px] text-[#3a3a3a] mt-0.5 group-hover:text-[#555] transition-colors duration-300">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
