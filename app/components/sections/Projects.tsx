"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    key: "coordify",
    num: "001",
    title: "Coordify",
    image: "/coordify.svg",
    category: "Personal project",
    description:
      "Plataforma web de gestión de eventos con Laravel. Creación de eventos gratuitos y de pago, control de aforo, check-in por QR y registro público de asistentes.",
    tags: ["Laravel", "MySQL", "Google Cloud", "JS", "Stripe"],
    year: "2024",
    color: "#e8642a",
    href: "https://coordify.logannr.me/",
  },
  {
    key: "saas-dashboard",
    num: "002",
    title: "SaaS Dashboard",
    image: undefined,
    category: "Desarrollo Web",
    description:
      "Plataforma de gestión empresarial con roles, permisos, analytics en tiempo real y API REST construida con Laravel y Next.js.",
    tags: ["Next.js", "Laravel", "PostgreSQL", "Tailwind"],
    year: "2024",
    color: "#4f6ef7",
    href: "#",
  },
  {
    key: "marketplace",
    num: "003",
    title: "Marketplace Multi-Vendor",
    image: undefined,
    category: "E-Commerce",
    description:
      "Marketplace con sistema multi-vendedor, pagos con Stripe, panel de administración y SEO técnico que posicionó 200+ keywords en top 10.",
    tags: ["WooCommerce", "PHP", "Stripe", "SEO"],
    year: "2023",
    color: "#a855f7",
    href: "#",
  },
  {
    key: "corporate-seo",
    num: "004",
    title: "Corporate Website + SEO",
    image: undefined,
    category: "SEO & Marketing",
    description:
      "Web corporativa con animaciones GSAP, estrategia SEO completa y campañas SEM que aumentaron el tráfico orgánico un 340% en 6 meses.",
    tags: ["Next.js", "GSAP", "WordPress", "SEM"],
    year: "2023",
    color: "#22c55e",
    href: "#",
  },
  {
    key: "prestashop-migration",
    num: "005",
    title: "PrestaShop Migration",
    image: undefined,
    category: "E-Commerce",
    description:
      "Migración y escalado de tienda con 10k+ productos, optimización de rendimiento y configuración de campañas de Social Ads.",
    tags: ["PrestaShop", "PHP", "Meta Ads", "CRO"],
    year: "2022",
    color: "#f59e0b",
    href: "#",
  },
];

const CARD_GAP = 20;

function useCardWidth() {
  const [cardW, setCardW] = useState(480);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setCardW(w - 40);
      else if (w < 1024) setCardW(380);
      else setCardW(480);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cardW;
}

function ProjectCard({
  project,
  active,
  cardW,
  onClick,
}: {
  project: (typeof projects)[0];
  active: boolean;
  cardW: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const dragDelta = useRef(0);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        scale: active ? 1 : 0.92,
        opacity: active ? 1 : 0.3,
        filter: active ? "blur(0px)" : "blur(1px)",
      }}
      transition={{ type: "spring", stiffness: 280, damping: 26 }}
      className="relative flex-shrink-0 rounded-2xl"
      style={{ width: cardW }}
      onMouseDown={() => { dragDelta.current = 0; }}
      onMouseMove={(e) => { dragDelta.current += Math.abs(e.movementX); }}
      onMouseUp={() => { if (dragDelta.current < 6) onClick(); }}
      onTouchEnd={() => { if (dragDelta.current < 6) onClick(); }}
    >
      <motion.div
        className="relative bg-[#0d0d0d] rounded-2xl overflow-hidden border cursor-pointer"
        animate={{ borderColor: hovered && active ? `${project.color}50` : "#1a1a1a" }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: hovered && active ? `0 0 50px ${project.color}12` : "none",
        }}
      >
        {/* Image area */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-[#0a0a0a]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105 p-8"
              draggable={false}
            />
          ) : (
            <>
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, #0d0d0d 0%, ${project.color}12 50%, #0d0d0d 100%)`,
                }}
              />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              />
            </>
          )}

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span
              className="font-mono text-[9px] tracking-[.2em] uppercase px-3 py-1 rounded-full border"
              style={{
                color: project.color,
                borderColor: `${project.color}40`,
                background: `${project.color}10`,
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Year */}
          <div className="absolute top-3 right-3 font-mono text-[10px] text-[#444] tracking-widest">
            {project.year}
          </div>

          {/* Watermark */}
          <div
            className="absolute bottom-2 right-3 font-bebas text-5xl leading-none pointer-events-none select-none"
            style={{ color: `${project.color}12` }}
          >
            {project.num}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 pb-14">
          <motion.h3
            className="font-unbounded text-2xl sm:text-3xl tracking-wide mb-3 leading-tight"
            animate={{ color: hovered && active ? project.color : "#f4f0eb" }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="font-roboto text-sm leading-relaxed mb-5"
            animate={{ color: hovered && active ? "#999" : "#777" }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                animate={{ opacity: hovered && active ? 1 : 0.5 }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
                className="font-mono text-[9px] tracking-[.15em] uppercase text-[#666] border border-[#222] px-3 py-1 rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* CTA arrow */}
        <motion.div
          className="absolute bottom-5 right-5 w-9 h-9 rounded-full border flex items-center justify-center"
          animate={
            hovered && active
              ? { borderColor: "#666", color: "#f4f0eb", backgroundColor: "rgba(255,255,255,0.05)" }
              : { borderColor: "#222", color: "#444", backgroundColor: "transparent" }
          }
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <ExternalLink size={13} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);
  const cardW = useCardWidth();
  const stepRef = useRef(cardW + CARD_GAP);
  stepRef.current = cardW + CARD_GAP;

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, projects.length - 1));
      setActive(clamped);
      animate(x, -clamped * stepRef.current, {
        type: "spring",
        stiffness: 280,
        damping: 30,
      });
    },
    [x]
  );

  useEffect(() => {
    animate(x, -active * stepRef.current, { duration: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardW]);

  function handleDragEnd(
    _: never,
    info: { offset: { x: number }; velocity: { x: number } }
  ) {
    const threshold = 40;
    if (info.offset.x < -threshold || info.velocity.x < -400) goTo(active + 1);
    else if (info.offset.x > threshold || info.velocity.x > 400) goTo(active - 1);
    else goTo(active);
  }

  function handleCardClick(index: number) {
    if (index === active) {
      if (projects[index].href !== "#") window.open(projects[index].href, "_blank");
    } else {
      goTo(index);
    }
  }

  return (
    <section id="projects" className="py-20 sm:py-28 w-full">
      {/* Header */}
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex items-end justify-between mb-10 sm:mb-14">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#333]" />
            <span className="font-mono text-[11px] tracking-[.3em] uppercase text-[#555]">
              01 Proyectos
            </span>
          </div>
          <h2 className="font-bebas text-[clamp(48px,8vw,96px)] leading-none text-white tracking-wide">
            TRABAJO<br />
            <span style={{ color: "#1e1e1e", WebkitTextStroke: "1px #777" }}>SELECTO</span>
          </h2>
        </div>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-widest text-[#444]">
            {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <motion.button
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full border border-[#222] flex items-center justify-center text-[#666] disabled:opacity-20 hover:border-[#555] hover:text-white transition-colors"
              aria-label="Proyecto anterior"
            >
              <ArrowLeft size={15} />
            </motion.button>
            <motion.button
              onClick={() => goTo(active + 1)}
              disabled={active === projects.length - 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full border border-[#222] flex items-center justify-center text-[#666] disabled:opacity-20 hover:border-[#555] hover:text-white transition-colors"
              aria-label="Proyecto siguiente"
            >
              <ArrowRight size={15} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden px-5 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          className="flex"
          style={{ x, gap: CARD_GAP }}
          drag="x"
          dragConstraints={{
            left: -(projects.length - 1) * stepRef.current,
            right: 0,
          }}
          dragElastic={0.06}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.key}
              project={project}
              active={index === active}
              cardW={cardW}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom: dots + mobile arrows */}
      <div className="mt-8 sm:mt-10 flex items-center justify-center gap-5">
        <motion.button
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          whileTap={{ scale: 0.9 }}
          className="sm:hidden w-11 h-11 rounded-full border border-[#222] flex items-center justify-center text-[#666] disabled:opacity-20"
          aria-label="Proyecto anterior"
        >
          <ArrowLeft size={15} />
        </motion.button>

        <div className="flex gap-2 items-center">
          {projects.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              animate={{
                width: i === active ? 22 : 6,
                backgroundColor: i === active ? "#f4f0eb" : "#333",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="h-[6px] rounded-full"
              aria-label={`Ir al proyecto ${i + 1}`}
            />
          ))}
        </div>

        <motion.button
          onClick={() => goTo(active + 1)}
          disabled={active === projects.length - 1}
          whileTap={{ scale: 0.9 }}
          className="sm:hidden w-11 h-11 rounded-full border border-[#222] flex items-center justify-center text-[#666] disabled:opacity-20"
          aria-label="Proyecto siguiente"
        >
          <ArrowRight size={15} />
        </motion.button>
      </div>

      <p className="sm:hidden text-center font-mono text-[9px] tracking-[.2em] uppercase text-[#333] mt-3">
        Desliza para explorar
      </p>
    </section>
  );
}
