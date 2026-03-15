import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* 1. Decoración de fondo (Sutil) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="flex flex-col items-center text-center">
        {/* 2. Badge de especialidad */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-medium mb-8 animate-fade-in">
          <Terminal size={14} />
          <span>Ingeniería de Software para PYMEs</span>
        </div>

        {/* 3. El Título (H1) - El GANCHO */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-zinc-900 max-w-4xl mb-6">
          Sistemas web que <br />
          <span className="text-blue-900">venden por vos.</span>
        </h1>

        {/* 4. Subtítulo - El alivio al dolor */}
        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mb-10 leading-relaxed">
          Más clientes, menos trabajo manual. Sistemas web que trabajan por vos
          las 24hs.
        </p>

        {/* 5. Acciones */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
          <Button
            size="lg"
            className="h-12 px-8 text-md font-semibold gap-2 shadow-lg shadow-blue-200"
          >
            Hace tu consulta Gratis <ArrowRight size={18} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 text-md font-semibold"
          >
            Ver casos de éxito
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2">
          <p className="text-xs text-zinc-500 flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emerald-500" />
            100% sin compromiso
          </p>
          <p className="text-xs text-zinc-500 flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emerald-500" />
            Respuesta en menos de 24hs
          </p>
        </div>
      </div>
    </section>
  );
}
