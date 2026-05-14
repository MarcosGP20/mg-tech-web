import Reveal from "@/components/ui/motion/Reveal";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";

const services = [
  {
    title: "Automatización de consultas",
    subtitle:
      "Para responder preguntas frecuentes, filtrar interesados y derivar solo los casos importantes.",
    icon: Bot,
    price: "Desde $35.000/mes",
    badge: "Más elegido",
    tone: "dark",
    message: "Hola, me interesa automatizar mi negocio por WhatsApp.",
    outcome: "Menos mensajes repetidos, más consultas atendidas a tiempo.",
    features: [
      "Respuestas automáticas",
      "Derivación a atención humana",
      "Mensajes preparados para vender",
    ],
  },
  {
    title: "Reservas online",
    subtitle:
      "Tus clientes eligen día y horario sin escribirte todo el día por WhatsApp.",
    icon: CalendarDays,
    price: "Desde $30.000/mes",
    badge: "Nuevo",
    tone: "blue",
    message: "Hola, me interesa implementar reservas online para mi negocio.",
    outcome: "Turnos ordenados y menos ida y vuelta por WhatsApp.",
    features: [
      "Reservas online 24hs",
      "Panel simple de gestión",
      "Confirmaciones y consultas más claras",
    ],
  },
  {
    title: "Tienda o catálogo online",
    subtitle:
      "Para mostrar productos, recibir pedidos por WhatsApp o sumar pagos online cuando el negocio lo necesite.",
    icon: ShoppingBag,
    price: "Desde $45.000/mes",
    badge: "Ventas online",
    tone: "light",
    message: "Hola, me interesa una tienda o catálogo online para mi negocio.",
    outcome: "Tu negocio visible, ordenado y listo para vender todos los días.",
    features: [
      "Catálogo de productos",
      "Pedidos por WhatsApp o pagos online",
      "Diseño responsive y profesional",
    ],
  },
];

const styles = {
  dark: {
    card: "bg-zinc-950 text-white border-zinc-950 shadow-2xl shadow-zinc-300/70",
    badge: "bg-white text-zinc-950",
    icon: "bg-white/10 text-white",
    subtitle: "text-zinc-300",
    outcome: "bg-white/10 text-zinc-100",
    feature: "text-zinc-300",
    price: "text-white",
    button: "bg-white text-zinc-950 hover:bg-zinc-100",
  },
  blue: {
    card: "bg-blue-600 text-white border-blue-600 shadow-2xl shadow-blue-200/80",
    badge: "bg-white text-blue-700",
    icon: "bg-white/15 text-white",
    subtitle: "text-blue-50",
    outcome: "bg-white/15 text-white",
    feature: "text-blue-50",
    price: "text-white",
    button: "bg-white text-blue-700 hover:bg-blue-50",
  },
  light: {
    card: "bg-white text-zinc-950 border-zinc-200 shadow-xl shadow-zinc-200/80",
    badge: "bg-emerald-100 text-emerald-700",
    icon: "bg-emerald-50 text-emerald-600",
    subtitle: "text-zinc-600",
    outcome: "bg-zinc-50 text-zinc-700",
    feature: "text-zinc-600",
    price: "text-zinc-950",
    button: "bg-zinc-950 text-white hover:bg-zinc-800",
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-zinc-50">
      <Reveal className="flex flex-col items-center text-center mb-12">
        <p className="text-blue-600 text-sm font-medium uppercase tracking-widest mb-3">
          Nuestros servicios
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
          Soluciones concretas para vender y atender mejor
        </h2>
        <p className="text-zinc-500 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
          Elegí un punto de partida claro para ordenar consultas, recibir
          pedidos o dejar de responder todo manualmente.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const s = styles[service.tone as keyof typeof styles];
          const Icon = service.icon;

          return (
            <Reveal key={service.title} delay={index * 120} hover="lift">
              <article
                className={`relative border rounded-lg p-7 md:p-8 flex flex-col min-h-[520px] transition-shadow duration-300 hover:shadow-2xl ${s.card}`}
              >
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${s.icon}`}
                  >
                    <Icon size={24} />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${s.badge}`}
                  >
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${s.subtitle}`}>
                    {service.subtitle}
                  </p>
                </div>

                <div className={`mt-6 rounded-lg p-4 text-sm ${s.outcome}`}>
                  {service.outcome}
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${s.feature}`}
                    >
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-current/10">
                  <p className={`text-xl md:text-2xl font-bold ${s.price}`}>
                    {service.price}
                  </p>
                  <a
                    href={getWhatsAppUrl(service.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${s.button}`}
                  >
                    Quiero esta solución
                    <ArrowRight size={17} />
                  </a>
                  <p className={`mt-3 text-xs leading-relaxed ${s.feature}`}>
                    Primero revisamos si aplica a tu negocio.
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="flex flex-col items-center mt-12 text-center">
        <p className="text-zinc-500 text-sm mb-5">
          ¿No sabés cuál elegir? Revisamos tu caso y te recomendamos por dónde
          empezar.
        </p>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-zinc-900 text-white px-7 py-3.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all hover:-translate-y-0.5"
        >
          Diagnosticar mi negocio gratis
          <ArrowRight size={15} />
        </a>
        <p className="text-zinc-400 text-xs mt-3">
          Sin compromiso · Respondemos en menos de 24hs
        </p>
      </Reveal>
    </section>
  );
}
