
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white/90">v1.0.0</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="block text-gradient mb-2">Agentes de IA</span>
            <span className="block text-gradient-blue">para PyMEs</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Transforma tu negocio con Agentes de IA
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Automatiza tareas, mejora la atención al cliente y haz crecer tu negocio con asistentes virtuales que nunca descansan.
          </p>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group"
            >
              Análisis gratuito
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Floating Cards */}
          <div className="absolute top-20 left-10 glass p-4 rounded-xl animate-float hidden lg:block">
            <div className="text-sm text-white/80">24/7 Available</div>
          </div>
          <div className="absolute top-40 right-10 glass p-4 rounded-xl animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
            <div className="text-sm text-white/80">AI Powered</div>
          </div>
          <div className="absolute bottom-40 left-20 glass p-4 rounded-xl animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
            <div className="text-sm text-white/80">Cost Effective</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
