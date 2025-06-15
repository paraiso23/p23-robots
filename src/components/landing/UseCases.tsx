
import { Rocket, ShoppingCart, Heart, Users, BarChart, Zap } from 'lucide-react';

const useCases = [
  { 
    icon: Rocket, 
    title: "Para atraer clientes potenciales", 
    description: "Deja que el agente cree contenido de activación, segmente tus clientes potenciales y analice los resultados de la campaña." 
  },
  { 
    icon: ShoppingCart, 
    title: "Convertir y vender más", 
    description: "Utiliza el agente para crear chatbots en minutos, priorizar mensajes, optimizar anuncios y hacer seguimiento de clientes." 
  },
  { 
    icon: Heart, 
    title: "Para atender mejor a tus clientes", 
    description: "Haz que el agente trabaje en respuestas rápidas y precisas, además de analizar el servicio según el sentimiento del cliente." 
  },
  { 
    icon: Users, 
    title: "Para captar y retener tu base", 
    description: "Configura al agente para controlar constantemente tu base de clientes y actuar para fomentar la recompra y recaptar inactivos." 
  },
  { 
    icon: BarChart, 
    title: "Análisis inteligente de datos", 
    description: "Procesan grandes volúmenes de datos para detectar patrones, anticiparse a problemas y apoyar decisiones estratégicas." 
  },
  { 
    icon: Zap, 
    title: "Aumento de la productividad", 
    description: "Al hacerse cargo de actividades operativas, liberan a los empleados para centrarse en retos más estratégicos y creativos." 
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="section-padding relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-gradient">Use Cases</span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed mb-4">
            Los Agentes de IA trabajan en todo el recorrido del cliente
          </p>
          <p className="text-lg text-white/60 leading-relaxed">
            Desde la automatización de tareas y creación de chatbots hasta la generación de insights para fidelizar clientes.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
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
                    <useCase.icon className="h-7 w-7 text-blue-400" />
                  </div>
                  <div className="absolute inset-0 bg-blue-400 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gradient-blue transition-all duration-300">
                  {useCase.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
