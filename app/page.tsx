import Container from "@/components/ui/shared/Container";
import Hero from "@/components/ui/features/Hero";
import ProjectCard from "@/components/ui/features/ProjectCard";
import Services from "@/components/ui/features/Services";
import About from "@/components/ui/features/About";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Services />
        <section id="portfolio" className="py-20">
          <div className="flex flex-col mb-12">
            <h2 className="text-3xl font-bold text-zinc-900">
              Proyectos en curso
            </h2>
            <p className="text-zinc-500 mt-2">
              Sistemas robustos desarrollados con tecnología de punta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-commerce Fullstack"
              description="Plataforma de ventas con carrito, gestión de stock y panel de administración. Frontend en Next.js y backend robusto en .NET."
              tags={["E-Commerce", "Ventas online", "SQL Server"]}
              imageUrl="/placeholder-ecommerce.jpg"
              projectUrl="https://tu-demo.vercel.app"
            />

            <div className="border-2 border-dashed border-zinc-200 rounded-xl flex items-center justify-center p-10 text-zinc-400">
              <p className="text-sm font-medium">
                Próximo proyecto: Catálogo Interactivo
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="flex flex-col mb-12">
            <h2 className="text-3xl font-bold text-zinc-900">
              Clientes satisfechos
            </h2>
            <p className="text-zinc-500 mt-2">
              Proyectos entregados y funcionando en producción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-commerce WaveArg"
              description="Tienda online completa con catálogo de productos, carrito de compras y pasarela de pagos."
              tags={["E-Commerce", "Next.js", "Vercel"]}
              imageUrl="/wavearg.png"
              projectUrl="https://wavearg-front.vercel.app/"
            />
            <ProjectCard
              title="Página web Invicto 3D"
              description="Landing page moderna para estudio de impresión 3D, con presentación de servicios y llamadas a la acción."
              tags={["Landing Page", "Next.js", "Vercel"]}
              imageUrl="/invicto.png"
              projectUrl="https://invicto-3d.vercel.app/"
            />
          </div>
        </section>
        <About />
      </Container>
    </main>
  );
}
