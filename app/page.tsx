import Container from "@/components/ui/shared/Container";
import Hero from "@/components/ui/features/Hero";
import ProjectCard from "@/components/ui/features/ProjectCard";
import Services from "@/components/ui/features/Services";
import BeforeAfter from "@/components/ui/features/BeforeAfter";
import About from "@/components/ui/features/About";
import Process from "@/components/ui/features/Process";
import TrustSignals from "@/components/ui/features/TrustSignals";
import Reveal from "@/components/ui/motion/Reveal";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <TrustSignals />
        <Services />
        <BeforeAfter />
        <Process />
        <section id="portfolio" className="py-20">
          <Reveal className="flex flex-col mb-12">
            <h2 className="text-3xl font-bold text-zinc-900">
              Proyectos reales en producción
            </h2>
            <p className="text-zinc-500 mt-2">
              Casos implementados para negocios que necesitaban vender,
              atender o presentarse mejor.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal delay={80} hover="lift">
              <ProjectCard
                title="Ecommerce WaveArg"
                description="Tienda online con catálogo, carrito y pagos integrados para ordenar la venta digital."
                tags={["Tienda online", "Pagos integrados", "Atiende 24hs"]}
                imageUrl="/wavearg.png"
                projectUrl="https://wavearg-front.vercel.app/"
              />
            </Reveal>
            <Reveal delay={180} hover="lift">
              <ProjectCard
                title="Página web Invicto 3D"
                description="Sitio profesional para presentar servicios de impresión 3D y generar consultas comerciales."
                tags={["Página web", "Diseño profesional", "Genera consultas"]}
                imageUrl="/invicto.png"
                projectUrl="https://invicto-3d.vercel.app/"
              />
            </Reveal>
          </div>
        </section>
        <About />
      </Container>
    </main>
  );
}
