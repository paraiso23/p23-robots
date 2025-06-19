
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from 'lucide-react';

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
                <span className="text-gradient">
                  Tu equipo invisible de IA empieza con una conversación
                </span>
              </h2>

              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Te ayudamos a detectar qué puedes delegar ya mismo.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group"
                >
                  Habla con nosotros
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white">
                  Explorar casos de uso
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
