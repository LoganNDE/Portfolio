"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Proyectos",  href: "#projects" },
  { label: "Sobre mí",   href: "#about"    },
  { label: "Servicios",  href: "#services" },
  { label: "Testimonios",  href: "#testimonials" },
  { label: "Contacto",   href: "#contact"  },
];

export default function Navbar() {
  const [open, setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[92%] sm:w-[88%] lg:w-[78%] xl:w-[68%] max-w-[1000px]
        px-5 sm:px-7 py-3 flex items-center justify-between rounded-full border
        transition-all duration-300
        ${scrolled
          ? "bg-black/85 backdrop-blur-xl border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.7)]"
          : "bg-black/50 backdrop-blur-md border-white/5"
        }`}
    >
      <a href="#" className="font-unbounded text-sm tracking-[.3em] text-white uppercase">
        LNR
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-7">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-unbounded text-[10px] tracking-[.15em] uppercase text-[#8a8a8a] hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="mailto:contact@logannr.me"
        className="hidden md:flex items-center font-unbounded text-[10px] tracking-widest uppercase bg-white text-black px-5 py-2.5 rounded-full hover:bg-[#f4f0eb] transition-colors"
      >
        Hablemos
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-[#888] hover:text-white transition-colors p-1"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute top-[calc(100%+8px)] left-0 right-0 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col py-4 md:hidden shadow-xl"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-unbounded text-[10px] tracking-[.15em] uppercase text-[#777] hover:text-white transition-colors px-6 py-3"
              >
                {link.label}
              </a>
            ))}
            <div className="mx-6 mt-2 pt-4 border-t border-[#111]">
              <a
                href="mailto:contact@logannr.me"
                onClick={() => setOpen(false)}
                className="font-unbounded text-[10px] tracking-widest uppercase bg-white text-black px-5 py-2.5 rounded-full hover:bg-[#f4f0eb] transition-colors inline-block"
              >
                Hablemos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
