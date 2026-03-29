"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Serviceblock({ title, subtitle, highlight, description, tags }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="relative rounded-2xl h-full"
    >
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <motion.div
          className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
          style={{
            background: hovered
              ? "conic-gradient(from 0deg, transparent 0%, transparent 30%, #533483 45%, #a8a8b3 48%, #ffffff 50%, #a8a8b3 52%, #533483 55%, transparent 70%, transparent 100%)"
              : "transparent",
          }}
          animate={hovered ? { rotate: 360 } : { rotate: 0 }}
          transition={
            hovered
              ? { duration: 3.5, repeat: Infinity, ease: "linear" }
              : { duration: 0.4 }
          }
        />
      </div>

      <div className="relative bg-[#0d0d0d] rounded-[18px] m-[1.5px] p-7 sm:p-8 border border-[#1a1a1a] overflow-hidden h-full flex flex-col">
        {/* Ambient glow */}
        <motion.div
          className="absolute w-40 h-40 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%)",
          }}
          animate={
            hovered
              ? { top: "-8%", left: "0%", opacity: 1 }
              : { top: "-60%", left: "-40%", opacity: 0 }
          }
          transition={{ duration: 0.5 }}
        />

        {/* Title */}
        <motion.div
          className="font-unbounded text-xl sm:text-2xl tracking-wide mb-2"
          animate={{ color: hovered ? "#ff7a3d" : "#e8642a" }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.div>

        {/* Subtitle */}
        <div className="font-roboto text-sm sm:text-base font-medium text-white mb-4 leading-snug">
          {subtitle}{" "}
          <motion.span
            animate={{ color: hovered ? "#7b96ff" : "#4f6ef7" }}
            transition={{ duration: 0.3 }}
          >
            {highlight}
          </motion.span>
        </div>

        {/* Description */}
        <motion.p
          className="font-roboto text-xs sm:text-sm leading-relaxed mb-6 flex-1"
          animate={{ color: hovered ? "#999" : "#777" }}
          transition={{ duration: 0.4 }}
        >
          {description}
        </motion.p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {(tags ?? []).map((tag, i) => (
            <motion.span
              key={tag}
              animate={{ opacity: hovered ? 1 : 0.5 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className="font-mono text-[9px] tracking-[.12em] uppercase text-[#666] border border-[#222] px-2.5 py-1 rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Arrow */}
        <motion.div
          className="absolute bottom-5 right-5 w-8 h-8 rounded-full border flex items-center justify-center"
          animate={
            hovered
              ? { borderColor: "#555", color: "#f4f0eb", backgroundColor: "rgba(255,255,255,0.05)" }
              : { borderColor: "#222", color: "#444", backgroundColor: "transparent" }
          }
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <ArrowUpRight size={13} />
        </motion.div>
      </div>
    </motion.div>
  );
}
