import Container from "@/components/ui/shared/Container";
import Hero from "@/components/ui/features/Hero";
import ProjectCard from "@/components/ui/features/ProjectCard";
import Services from "@/components/ui/features/Services";
import BeforeAfter from "@/components/ui/features/BeforeAfter";
import About from "@/components/ui/features/About";
import Reveal from "@/components/ui/motion/Reveal";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Services />
        <BeforeAfter />
        <section id="portfolio" className="py-20">
          <Reveal className="flex flex-col mb-12">
            <h2 className="text-3xl font-bold text-zinc-900">
              Clientes satisfechos
            </h2>
            <p className="text-zinc-500 mt-2">
              Proyectos entregados y funcionando en producción.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal delay={80} hover="lift">
              <ProjectCard
                title="Ecommerce WaveArg"
                description="Tienda online completa con catálogo de productos, carrito de compras y pasarela de pagos."
                tags={["Tienda online", "Pagos integrados", "Atiende 24hs"]}
                imageUrl="/wavearg.png"
                projectUrl="https://wavearg-front.vercel.app/"
              />
            </Reveal>
            <Reveal delay={180} hover="lift">
              <ProjectCard
                title="Página web Invicto 3D"
                description="Página web profesional para estudio de impresión 3D, con presentación de servicios y llamadas a la acción."
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

