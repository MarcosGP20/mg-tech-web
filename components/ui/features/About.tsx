import Container from "../shared/Container";
import { Users, Code2, ImageIcon } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Lado Izquierdo: Texto y Valor */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
              Detrás de <span className="text-blue-600">MG Tech</span>
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Somos un equipo de desarrolladores apasionados por la tecnología y
              el crecimiento de los negocios locales. Fundamos MG Tech para
              cerrar la brecha entre las PYMEs y las herramientas digitales de
              alto nivel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-blue-50 flex items-center justify-center rounded-lg text-blue-600">
                  <Code2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Ingeniería Real</h4>
                  <p className="text-sm text-zinc-500">
                    No usamos plantillas. Construimos sistemas sólidos.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-blue-50 flex items-center justify-center rounded-lg text-blue-600">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Cercanía</h4>
                  <p className="text-sm text-zinc-500">
                    Estamos en Córdoba. Soporte directo y sin vueltas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Imagen o Visual */}
          <div className="relative">
            {/* ▼ REEMPLAZÁ este bloque por tu foto cuando la tengas */}
            <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden border-2 border-dashed border-zinc-300 flex flex-col items-center justify-center gap-3">
              <ImageIcon size={48} className="text-zinc-300" />
              <p className="text-zinc-400 text-sm font-medium">Tu foto acá</p>
              <p className="text-zinc-300 text-xs">Reemplazá este bloque en About.tsx</p>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 hidden md:block">
              <p className="text-2xl font-bold text-blue-600">+2 años</p>
              <p className="text-sm text-zinc-500 font-medium">
                Desarrollando Software
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
