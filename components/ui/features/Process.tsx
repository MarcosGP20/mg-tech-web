import Reveal from "@/components/ui/motion/Reveal";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const steps = [
  {
    number: "01",
    title: "Entendemos tu negocio",
    text: "Revisamos cómo llegan hoy tus consultas, turnos o pedidos.",
  },
  {
    number: "02",
    title: "Priorizamos impacto",
    text: "Te decimos qué conviene automatizar primero y qué puede esperar.",
  },
  {
    number: "03",
    title: "Implementamos y ajustamos",
    text: "Dejamos la solución funcionando y acompañamos los primeros cambios.",
  },
];

export default function Process() {
  const whatsappUrl = getWhatsAppUrl(
    "Hola, quiero un diagnóstico gratis para saber qué parte de mi negocio conviene automatizar."
  );

  return (
    <section id="proceso" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
        <Reveal>
          <p className="text-blue-600 text-sm font-medium uppercase tracking-widest mb-3">
            Cómo trabajamos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            Primero diagnosticamos. Después construimos.
          </h2>
          <p className="text-zinc-500 mt-4 text-sm md:text-base leading-relaxed">
            No arrancamos vendiendo una herramienta cerrada. Buscamos la mejora
            más concreta para que el sistema tenga sentido en tu operación.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {steps.map((step) => (
                <div key={step.number} className="rounded-lg bg-white p-5">
                  <p className="text-xs font-bold text-blue-700">
                    {step.number}
                  </p>
                  <h3 className="mt-3 text-base font-bold text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-lg bg-zinc-950 p-5 text-white sm:flex-row sm:items-center">
              <div>
                <h3 className="font-bold">
                  ¿Querés saber qué automatizar primero?
                </h3>
                <p className="mt-1 text-sm text-zinc-300">
                  Te damos una recomendación concreta según tu negocio actual.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100"
              >
                Pedir diagnóstico
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
