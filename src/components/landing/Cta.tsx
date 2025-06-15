
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Atrae más clientes con campañas multicanal inteligentes",
  "Vende hasta 2 veces más con atención centralizada",
  "Atiende mejor con servicio posventa automatizado",
  "Nutre tu base con análisis de datos y activadores inteligentes"
];

const Cta = () => {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold">Solución integral de IA para PyMEs y Freelancers</h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl mx-auto">Activar tus IAs y a funcionar: facilitas la comunicación con tus clientes en todas las etapas, sin florituras ni complicaciones.</p>
          <ul className="mt-8 space-y-3 inline-block text-left">
            {benefits.map(benefit => (
              <li key={benefit} className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-primary-foreground/80" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl mx-auto">Contáctanos para una demostración personalizada y descubre cómo los Agentes de IA pueden transformar tu negocio.</p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta;
