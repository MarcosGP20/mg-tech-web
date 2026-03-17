import {
  ShoppingBag,
  Layout,
  Smartphone,
  Bot,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

const cardStyles = {
  dark: {
    wrapper: "bg-zinc-900 border-zinc-900 shadow-xl",
    icon: "bg-white/10 text-white",
    title: "text-white",
    desc: "text-zinc-400",
    divider: "border-white/10",
    price: "text-blue-400",
    cta: "text-blue-400 hover:text-blue-300",
  },
  accent: {
    wrapper: "bg-white border-blue-600 border-2 shadow-md",
    icon: "bg-blue-600 text-white",
    title: "text-zinc-900",
    desc: "text-zinc-600",
    divider: "border-zinc-100",
    price: "text-blue-600",
    cta: "text-blue-600 hover:text-blue-700",
  },
  default: {
    wrapper: "bg-white border-zinc-100 shadow-sm hover:shadow-md",
    icon: "bg-blue-50 text-blue-600",
    title: "text-zinc-900",
    desc: "text-zinc-600",
    divider: "border-zinc-100",
    price: "text-blue-600",
    cta: "text-blue-600 hover:text-blue-700",
  },
};

const services = [
  {
    title: "Automatizá tu negocio por WhatsApp",
    description:
      "Respondé clientes, agendá turnos y cerrá ventas solo, las 24hs. Un asistente que trabaja por vos mientras descansás.",
    icon: <Bot size={24} />,
    price: "Desde $35.000/mes",
    cta: "Quiero esto",
    variant: "dark" as const,
    badge: "Más popular",
  },
  {
    title: "Agenda digital para tu negocio",
    description:
      "Tus clientes reservan turnos online cuando quieren, sin llamadas ni mensajes. Vos gestionás todo desde un panel simple.",
    icon: <CalendarDays size={24} />,
    price: "Desde $30.000/mes",
    cta: "Quiero esto",
    variant: "accent" as const,
    badge: "Nuevo",
  },
  {
    title: "Tienda online simple",
    description:
      "Tu local abierto las 24hs. Un sistema fácil de usar para vos y para tus clientes, sin vueltas.",
    icon: <ShoppingBag size={24} />,
    price: "Desde $45.000/mes",
    cta: "Quiero esto",
    variant: "default" as const,
    badge: null,
  },
  {
    title: "Catálogo profesional por WhatsApp",
    description:
      "Dejá de mandar fotos sueltas. Enviá un link profesional con todos tus productos siempre actualizados.",
    icon: <Layout size={24} />,
    price: "Desde $20.000/mes",
    cta: "Ver ejemplo",
    variant: "default" as const,
    badge: null,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-zinc-50/50">
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-blue-600 text-sm font-medium uppercase tracking-widest mb-3">
          Nuestros servicios
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
          Elegí cómo querés vender más
        </h2>
        <p className="text-zinc-500 mt-4 max-w-md text-sm leading-relaxed">
          Cada solución está pensada para pymes que quieren crecer sin
          complicarse con tecnología.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const s = cardStyles[service.variant];
          return (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border flex flex-col transition-all hover:-translate-y-1 ${s.wrapper}`}
            >
              {service.badge && (
                <span className="absolute top-5 right-5 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {service.badge}
                </span>
              )}

              <div
                className={`mb-6 w-10 h-10 rounded-xl flex items-center justify-center ${s.icon}`}
              >
                {service.icon}
              </div>

              <h3 className={`text-lg font-bold mb-3 leading-snug ${s.title}`}>
                {service.title}
              </h3>

              <p className={`text-sm leading-relaxed flex-1 ${s.desc}`}>
                {service.description}
              </p>

              <div
                className={`mt-6 pt-5 border-t flex flex-col gap-3 ${s.divider}`}
              >
                <span className={`text-xs font-medium ${s.price}`}>
                  {service.price}
                </span>
                <button
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors group ${s.cta}`}
                >
                  {service.cta}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col items-center mt-14 text-center">
        <p className="text-zinc-500 text-sm mb-5">
          ¿No sabés cuál elegir? Te ayudamos a decidir en una llamada de 15
          minutos.
        </p>
        <button className="inline-flex items-center gap-2 bg-zinc-900 text-white px-7 py-3.5 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-all hover:-translate-y-0.5">
          Consulta Gratis
          <ArrowRight size={15} />
        </button>
        <p className="text-zinc-400 text-xs mt-3">
          Sin compromiso · Respondemos en menos de 24hs
        </p>
      </div>
    </section>
  );
}
