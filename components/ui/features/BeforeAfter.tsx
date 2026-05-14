import Reveal from "@/components/ui/motion/Reveal";
import { CheckCircle2, XCircle } from "lucide-react";

const beforeItems = [
  "Respondés consultas repetidas durante todo el día.",
  "Los pedidos llegan desordenados y se pierden oportunidades.",
  "Tus clientes preguntan precios, horarios o disponibilidad una y otra vez.",
  "Tu negocio depende de que estés conectado para vender.",
];

const afterItems = [
  "Tus clientes encuentran respuestas y opciones claras al instante.",
  "Los turnos, pedidos o consultas llegan más ordenados.",
  "Mostrás tus productos y servicios con una presencia profesional.",
  "Tu sistema trabaja por vos incluso fuera del horario comercial.",
];

export default function BeforeAfter() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
        <Reveal>
          <p className="text-blue-600 text-sm font-medium uppercase tracking-widest mb-3">
            Antes / Después
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            La diferencia no es tener una web. Es que trabaje por tu negocio.
          </h2>
          <p className="text-zinc-500 mt-4 text-sm md:text-base leading-relaxed">
            La idea es transformar tareas manuales en sistemas simples:
            responder mejor, ordenar consultas y convertir más visitas en
            clientes.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Reveal delay={80} hover="soft">
            <div className="rounded-lg border border-red-100 bg-red-50/60 p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <XCircle size={20} className="text-red-500" />
                <h3 className="font-bold text-zinc-900">Antes</h3>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-zinc-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180} hover="soft">
            <div className="rounded-lg border border-emerald-100 bg-emerald-50/70 p-6 shadow-lg shadow-emerald-100/70 h-full">
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 size={20} className="text-emerald-600" />
                <h3 className="font-bold text-zinc-900">Después</h3>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-zinc-700"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

