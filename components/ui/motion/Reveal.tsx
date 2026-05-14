"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type HoverEffect = "none" | "lift" | "soft";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: HoverEffect;
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const hoverEffects = {
  none: {},
  lift: { y: -8, scale: 1.01 },
  soft: { y: -4 },
};

export default function Reveal({
  children,
  className,
  delay = 0,
  hover = "none",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={revealVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -80px 0px" }}
      transition={{ delay: delay / 1000 }}
      whileHover={reduceMotion ? undefined : hoverEffects[hover]}
    >
      {children}
    </motion.div>
  );
}

