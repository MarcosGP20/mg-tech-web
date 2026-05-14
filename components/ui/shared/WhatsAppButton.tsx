"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { motion, useReducedMotion } from "framer-motion";

export default function WhatsAppButton() {
  const whatsappUrl = getWhatsAppUrl();
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-colors group"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.75, y: 16 }}
      animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 360, damping: 22, delay: 0.7 }}
      whileHover={reduceMotion ? undefined : { scale: 1.06, y: -4 }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
    >
      <MessageCircle size={22} className="shrink-0" />
      <span className="text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Diagnóstico gratis
      </span>
    </motion.a>
  );
}
