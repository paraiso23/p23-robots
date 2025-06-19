
import { Briefcase, Hospital, School } from 'lucide-react';

const useCases = [
  {
    icon: Briefcase,
    title: 'Claudia — Freelance creativa',
    description:
      'Agente de seguimiento de propuestas + respuestas automáticas = 3 contratos recuperados en un mes.'
  },
  {
    icon: Hospital,
    title: 'Clínica dental — Redes externalizadas',
    description:
      'Content planner + bot de WhatsApp + recordatorio de citas = ahorro de 12 horas semanales.'
  },
  {
    icon: School,
    title: 'Escuela de idiomas — Leads sin conversión',
    description:
      'Gestor de leads + CRM IA + embudos automáticos → más reservas, menos pérdida.'
  }
];

const UseCases = () => {
  return (
    <section id="cases" className="section-padding relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-gradient">Casos reales</span>
          </h2>
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
