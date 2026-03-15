import Link from "next/link";
import Container from "./Container";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tighter">
            MG<span className="text-blue-900">Tech</span>
          </Link>

          {/* Links de Navegación (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <Link
              href="#servicios"
              className="hover:text-blue-900 transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#portfolio"
              className="hover:text-blue-900 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#nosotros"
              className="hover:text-blue-900 transition-colors"
            >
              Nosotros
            </Link>
          </div>

          {/* CTA Principal */}
          <div className="flex items-center gap-4">
            <Button variant="default" size="sm" className="hidden sm:flex">
              Auditoría Gratis
            </Button>

            {/* Aquí iría el botón de menú móvil más adelante */}
          </div>
        </div>
      </Container>
    </nav>
  );
}
