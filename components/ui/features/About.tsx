import Container from "../shared/Container";
import { Users, Code2, Headphones, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  <h4 className="font-bold text-zinc-900">Ingeniería real</h4>
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

          <div className="grid gap-4">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 bg-blue-600 text-white flex items-center justify-center rounded-xl">
                  <Rocket size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900">
                    Soluciones listas para operar
                  </h3>
                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                    Diseñamos, desarrollamos y dejamos cada sistema preparado
                    para que puedas usarlo sin depender de tareas técnicas.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl">
                  <Headphones size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900">
                    Acompañamiento directo
                  </h3>
                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                    Te acompañamos después del lanzamiento para ajustar,
                    mejorar y mantener funcionando lo que el negocio necesita.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-zinc-900 p-6 text-white">
                <p className="text-3xl font-bold">24hs</p>
                <p className="text-sm text-zinc-300 mt-2">
                  sistemas disponibles para vender y responder
                </p>
              </div>
              <div className="rounded-2xl bg-blue-600 p-6 text-white">
                <p className="text-3xl font-bold">+2 años</p>
                <p className="text-sm text-blue-100 mt-2">
                  desarrollando software para negocios
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

