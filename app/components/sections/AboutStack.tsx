"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { MapPin, Clock, Briefcase } from "lucide-react";
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
  SiLaravel, SiPhp, SiNodedotjs, SiMysql, SiPostgresql,
  SiShopify, SiWordpress, SiPrestashop, SiStripe,
  SiGit, SiGoogleanalytics, SiGooglesearchconsole,
  SiGoogle,
  SiMeta,
} from "react-icons/si";
import { stackCategories, statsData } from "@/app/data/stack";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  "Next.js":      SiNextdotjs,
  "React":        SiReact,
  "TypeScript":   SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Laravel":      SiLaravel,
  "PHP":          SiPhp,
  "Node.js":      SiNodedotjs,
  "MySQL":        SiMysql,
  "PostgreSQL":   SiPostgresql,
  "Shopify":      SiShopify,
  "WooCommerce":  SiWordpress,
  "PrestaShop":   SiPrestashop,
  "Stripe":       SiStripe,
  "Git":          SiGit,
  "Meta Ads":         SiMeta,
  "Google Ads":   SiGoogle,
  "Analytics":    SiGoogle,
  "SEO Técnico":  SiGooglesearchconsole,
};

export function AboutStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Bidirectional reveal
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 36,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".stack-cat", {
        opacity: 0,
        x: 24,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stack-grid",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Counter animation for stats (once only)
      document.querySelectorAll<HTMLElement>(".stat-counter").forEach((el) => {
        const target  = parseInt(el.dataset.value ?? "0", 10);
        const suffix  = el.dataset.suffix ?? "";
        const obj     = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          onUpdate() {
            el.textContent = Math.round(obj.val) + suffix;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 sm:py-28">
      <div className="about-reveal flex items-center gap-3 mb-14">
        <span className="w-8 h-px bg-[#333]" />
        <span className="font-mono text-[11px] tracking-[.3em] uppercase text-[#555]">
          02 Sobre mí & Stack
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-28">
        {/* ── Left: Bio ── */}
        <div className="flex flex-col">
          <h2 className="about-reveal font-unbounded text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-8">
            No solo<br />
            <span className="text-[#e8642a]">escribo código.</span>
          </h2>

          <div className="about-reveal space-y-5 mb-10">
            <p className="font-montserrat text-[#aaa] leading-relaxed text-base">
              Soy <strong className="text-white font-semibold">Full Stack Developer</strong> con más de{" "}
              <strong className="text-white font-semibold">2 años</strong> transformando ideas en productos
              digitales que generan impacto real. Combino ingeniería sólida con pensamiento
              estratégico de negocio.
            </p>
            <p className="font-montserrat text-[#aaa] leading-relaxed text-base">
              Desde aplicaciones con <strong className="text-white font-semibold">Next.js y Laravel</strong>{" "}
              hasta tiendas de alto volumen en{" "}
              <strong className="text-white font-semibold">Shopify o WooCommerce</strong>, entrego soluciones
              diseñadas para <strong className="text-white font-semibold">vender, escalar y retener</strong>.
            </p>
          </div>

          {/* Stats with counter */}
          <div className="about-reveal grid grid-cols-3 gap-3 mb-10">
            {statsData.map(({ value, label }) => {
              const num    = parseInt(value, 10);
              const suffix = value.replace(String(num), "");
              return (
                <div key={label} className="border border-[#1a1a1a] rounded-2xl p-4 sm:p-5 text-center bg-[#0a0a0a]">
                  <div
                    className="stat-counter font-bebas text-4xl sm:text-5xl text-white tracking-wider leading-none mb-1"
                    data-value={num}
                    data-suffix={suffix}
                  >
                    0{suffix}
                  </div>
                  <div className="font-montserrat text-[10px] text-[#666] uppercase tracking-[.12em] leading-tight">
                    {label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info */}
          <div className="about-reveal space-y-3">
            {[
              { icon: MapPin,    text: "España · Remoto"             },
              { icon: Clock,     text: "Disponible para proyectos"   },
              { icon: Briefcase, text: "Freelance · Tiempo completo" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-[#888]">
                <Icon size={13} className="shrink-0 text-[#555]" />
                <span className="font-montserrat text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Stack ── */}
        <div className="stack-grid space-y-7">
          {stackCategories.map((cat) => (
            <div key={cat.label} className="stack-cat">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                <span className="font-mono text-[10px] tracking-[.25em] uppercase" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((name) => {
                  const Icon = iconMap[name];
                  return (
                    <motion.div
                      key={name}
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="flex items-center gap-2 border border-[#1a1a1a] rounded-full px-3 py-1.5 text-[#999] text-sm cursor-default hover:border-[#333] hover:text-white transition-colors"
                    >
                      {Icon && <Icon size={12} style={{ color: cat.color, opacity: 0.85 }} />}
                      <span className="font-montserrat">{name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
