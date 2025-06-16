
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const benefits = [
  "Consigue más clientes con campañas inteligentes en varios canales",
  "Vende hasta 2 veces más con atención centralizada",
  "Atiende mejor con servicio posventa automatizado",
  "Cuida tu base de clientes con análisis de datos y recordatorios inteligentes"
];

const Cta = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative max-w-6xl mx-auto">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
          <div className="absolute top-4 left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-4 right-4 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
          
          {/* Main Card */}
          <div className="glass-strong p-8 lg:p-12 rounded-3xl relative overflow-hidden">
            {/* Sparkle Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center animate-glow">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
                <span className="text-gradient">Solución integral de IA</span>
                <br />
                <span className="text-gradient-blue">para PyMEs y Freelancers</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Activa tus IAs y a funcionar: mejora la comunicación con tus clientes en todas las etapas, de forma sencilla y sin complicaciones.
              </p>

              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 text-left max-w-3xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Contáctanos para una demostración personalizada y descubre cómo los Agentes de IA pueden ayudar a tu negocio.
              </p>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
