import Container from "./Container";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Columna 1: Branding */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold tracking-tighter">
              MG<span className="text-blue-500">Tech</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Potenciamos negocios locales con tecnología de alto nivel.
              Sistemas que trabajan para vos.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
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
                  href="#portfolio"
                  className="hover:text-blue-400 transition-colors"
                >
                  Portfolio
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

          {/* Columna 3: Contacto & Redes */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Contacto</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/tu-cuenta"
                className="p-2 bg-zinc-900 rounded-full hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-zinc-900 rounded-full hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/tu-numero"
                className="p-2 bg-zinc-900 rounded-full hover:text-blue-400 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
            <p className="text-xs">Ubicados en Córdoba, Argentina 🇦🇷</p>
          </div>
        </div>

        {/* Línea final */}
        <div className="pt-8 border-t border-zinc-900 text-center text-xs">
          <p>© {currentYear} MG Tech. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
