"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { icon: SiGithub,    label: "GitHub",      href: "https://github.com/"       },
  { icon: FaLinkedinIn,label: "LinkedIn",     href: "https://linkedin.com/in/"  },
  { icon: SiX,         label: "Twitter / X",  href: "https://x.com/"            },
];

function ContactDecor() {
  return (
    <div className="hidden lg:flex items-center justify-center flex-shrink-0 self-start mt-4">
      <div className="relative w-52 h-52">
        {/* Rotating text ring */}
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        >
          <defs>
            <path
              id="textRing"
              d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
            />
          </defs>
          <text fill="#fff" fontSize="14.5" letterSpacing="6.5" fontFamily="monospace">
            <textPath href="#textRing">
              DISPONIBLE · PARA · TRABAJAR · DISPONIBLE ·
            </textPath>
          </text>
        </motion.svg>

        {/* Center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center">
            <Mail size={22} className="text-white" />
          </div>
          <span className="font-mono text-[10px] tracking-[.25em] text-white uppercase">
            Escríbeme
          </span>
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 44,
        stagger: 0.1,
        duration: 0.9,
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
    <section ref={sectionRef} id="contact" className="py-20 sm:py-28 border-t border-[#111]">
      {/* Label */}
      <div className="contact-reveal flex items-center gap-3 mb-14">
        <span className="w-8 h-px bg-[#333]" />
        <span className="font-mono text-[11px] tracking-[.3em] uppercase text-[#555]">
          05 Contacto
        </span>
      </div>

      {/* Headline row */}
      <div className="contact-reveal flex items-start justify-between gap-8 mb-8">
        <div>
          <h2 className="font-bebas text-[clamp(52px,8vw,100px)] text-white leading-none tracking-wide">
            ¿TIENES UN
          </h2>
          <h2
            className="font-bebas text-[clamp(52px,8vw,100px)] leading-none tracking-wide"
            style={{ color: "#2a2a2a", WebkitTextStroke: "1px #666" }}
          >
            PROYECTO?
          </h2>
        </div>
        <ContactDecor />
      </div>

      <p className="contact-reveal font-montserrat text-[#999] text-base leading-relaxed max-w-md mb-10">
        Siempre estoy abierto a nuevas oportunidades, colaboraciones o simplemente
        una buena conversación sobre tecnología y estrategia digital.
      </p>

      {/* CTA */}
      <motion.a
        href="mailto:contact@logannr.me"
        className="contact-reveal inline-flex items-center gap-3 font-unbounded text-[10px] tracking-widest uppercase bg-white text-black px-8 py-4 rounded-full hover:bg-[#f4f0eb] transition-colors group mb-5"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Mail size={14} />
        Envíame un correo
        <ArrowUpRight
          size={13}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </motion.a>

      <p className="contact-reveal font-mono text-[#555] text-xs tracking-wide mb-12">
        contact@logannr.me
      </p>

      {/* Socials */}
      <div className="contact-reveal flex flex-wrap gap-6 sm:gap-8 mb-20">
        {socials.map(({ icon: Icon, label, href }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#666] hover:text-[#bbb] transition-colors"
            whileHover={{ y: -2 }}
          >
            <Icon size={15} />
            <span className="font-montserrat text-sm">{label}</span>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-[#111] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-unbounded text-sm tracking-[.2em] text-white">LNR</span>
        <span className="font-mono text-[10px] text-[#333] tracking-wider text-center">
          © {new Date().getFullYear()} Logan N.R. — Diseñado y desarrollado con Next.js & Tailwind
        </span>
        <a
          href="#"
          className="font-mono text-[10px] tracking-widest uppercase text-[#333] hover:text-[#777] transition-colors"
        >
          Volver arriba ↑
        </a>
      </div>
    </section>
  );
}
