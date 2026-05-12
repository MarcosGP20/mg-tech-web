import { Star } from "lucide-react";

// ▼ REEMPLAZÁ estos datos con testimonios reales de tus clientes
const testimonials = [
  {
    name: "Nombre del cliente",
    business: "Nombre del negocio",
    avatar: "NC",
    quote:
      "Acá va la frase real del cliente. Algo concreto como: 'Desde que lanzamos la tienda online, duplicamos las ventas en dos meses. El equipo estuvo siempre disponible.'",
    rating: 5,
  },
  {
    name: "Nombre del cliente",
    business: "Nombre del negocio",
    avatar: "NC",
    quote:
      "Acá va la frase real del cliente. Algo concreto como: 'El sistema de turnos nos ahorró horas de llamadas por semana. Nuestros clientes reservan solos y nosotros gestionamos todo desde el panel.'",
    rating: 5,
  },
  {
    name: "Nombre del cliente",
    business: "Nombre del negocio",
    avatar: "NC",
    quote:
      "Acá va la frase real del cliente. Algo concreto como: 'Pensé que iba a ser complicado pero el proceso fue simple. En menos de un mes ya teníamos el sistema funcionando.'",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-blue-600 text-sm font-medium uppercase tracking-widest mb-3">
          Testimonios
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-zinc-500 mt-4 max-w-md text-sm leading-relaxed">
          Negocios reales que crecieron con tecnología a medida.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow"
          >
            <Stars count={t.rating} />

            <p className="text-zinc-600 text-sm leading-relaxed flex-1 italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-2 border-t border-zinc-100">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0">
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                <p className="text-xs text-zinc-500">{t.business}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
