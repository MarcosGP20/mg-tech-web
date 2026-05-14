import Container from "./Container";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold tracking-tighter">
              MG<span className="text-blue-500">Tech</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Automatizamos consultas, turnos y ventas para que tu negocio
              trabaje mejor sin sumar tareas manuales.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#servicios"
                  className="hover:text-blue-400 transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#proceso"
                  className="hover:text-blue-400 transition-colors"
                >
                  Proceso
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-blue-400 transition-colors"
                >
                  Casos reales
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="hover:text-blue-400 transition-colors"
                >
                  Sobre nosotros
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Contacto</h4>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-200 hover:text-blue-400 transition-colors"
            >
              <MessageCircle size={18} />
              Diagnóstico gratis
            </a>
            <p className="text-xs">Ubicados en Córdoba, Argentina</p>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 text-center text-xs">
          <p>© {currentYear} MG Tech. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}

