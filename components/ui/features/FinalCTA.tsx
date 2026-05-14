import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Reveal from "@/components/ui/motion/Reveal";

const points = [
  "Diagnóstico sin costo",
  "Recomendación concreta",
  "Sin compromiso de avanzar",
];

export default function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl(
    "Hola, quiero un diagnóstico gratis para saber qué parte de mi negocio conviene automatizar."
  );

  return (
    <section className="py-20">
      <Reveal>
        <div className="rounded-lg bg-zinc-950 px-6 py-10 text-center text-white md:px-10 md:py-14">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-300">
            Próximo paso
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
            Descubrí qué automatización puede darte más impacto primero.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Revisamos tu caso y te respondemos con una recomendación simple:
            qué conviene hacer, qué no hace falta todavía y por dónde empezar.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {points.map((point) => (
              <p
                key={point}
                className="flex items-center gap-1.5 text-xs text-zinc-300"
              >
                <CheckCircle2 size={14} className="text-emerald-400" />
                {point}
              </p>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100"
          >
            Pedir diagnóstico gratis
            <ArrowRight size={16} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

