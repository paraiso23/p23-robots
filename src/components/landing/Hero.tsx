
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-24 sm:py-32 text-center container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Agentes de IA para PyMEs
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-primary">Transforma tu negocio con Agentes de IA</h2>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Automatiza, personaliza y optimiza tu empresa usando empleados virtuales que trabajan las 24 horas del día.
        </p>
        <div className="mt-10">
          <Button size="lg" className="bg-primary-foreground text-background hover:bg-primary-foreground/90">Análisis gratuito</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
