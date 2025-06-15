
import { Clock, Target, Zap, DollarSign, BrainCircuit, CheckCircle } from 'lucide-react';

const features = [
  { 
    icon: Clock, 
    title: "Funcionamiento 24/7",
    description: "Trabajan sin pausa, garantizando disponibilidad completa para ofrecer asistencia continua y respuestas rápidas."
  },
  { 
    icon: Target, 
    title: "Precisión en las Decisiones",
    description: "Eliminan el error humano en tareas repetitivas, ofreciendo información más precisa para decisiones eficientes."
  },
  { 
    icon: Zap, 
    title: "Automatización de Tareas",
    description: "Realizan tareas repetitivas automáticamente para una experiencia más rápida, eliminando fricciones en los procesos."
  },
  { 
    icon: DollarSign, 
    title: "Reducción de Costos",
    description: "Automatizan procesos y optimizan operaciones, ayudando a reducir gastos y minimizar errores costosos."
  },
  { 
    icon: BrainCircuit, 
    title: "Personalización Inteligente",
    description: "Analizan historiales y preferencias para crear campañas altamente segmentadas y experiencias personalizadas."
  },
  { 
    icon: CheckCircle, 
    title: "Aumento de la productividad",
    description: "Al hacerse cargo de actividades operativas, liberan a los empleados para centrarse en retos más estratégicos y creativos."
  }
];

const KeyFeatures = () => {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-gradient">Key Features</span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            Los Agentes de IA potencian a todos los públicos de tu empresa. En Paraiso23, una solución integral de IA, los agentes hacen el trabajo operativo mientras tú te centras en lo estratégico.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass hover-lift group p-8 rounded-3xl border-0 relative overflow-hidden cursor-pointer"
            >
              {/* Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-blue-400" />
                  </div>
                  <div className="absolute inset-0 bg-blue-400 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient-blue transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
