import Reveal from "@/components/ui/motion/Reveal";
import { Clock3, Headphones, MapPin, TrendingUp } from "lucide-react";

const signals = [
  {
    icon: TrendingUp,
    title: "Consultas más ordenadas",
    text: "Filtrá interesados, pedidos y turnos sin perder oportunidades.",
  },
  {
    icon: Clock3,
    title: "Atención 24hs",
    text: "Tu sistema responde, muestra opciones o toma reservas fuera de horario.",
  },
  {
    icon: Headphones,
    title: "Soporte directo",
    text: "Te acompañamos después del lanzamiento para ajustar lo que haga falta.",
  },
  {
    icon: MapPin,
    title: "Córdoba, Argentina",
    text: "Trabajo cercano para negocios que necesitan resolver sin vueltas.",
  },
];

export default function TrustSignals() {
  return (
    <section className="pb-20">
      <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {signals.map((signal) => {
            const Icon = signal.icon;

            return (
              <div
                key={signal.title}
                className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-zinc-900">
                  {signal.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {signal.text}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

