
import {
  Users,
  Mail,
  Folder,
  CalendarDays,
  BarChart2,
  FileText,
  Bot
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'CRM Reactivo',
    description: 'Detecta clientes que no responden y les escribe'
  },
  {
    icon: Mail,
    title: 'Email Inteligente',
    description: 'Redacta respuestas frecuentes por ti'
  },
  {
    icon: Folder,
    title: 'Gestor de Propuestas',
    description: 'Envía seguimientos automáticos'
  },
  {
    icon: CalendarDays,
    title: 'Content Planner',
    description: 'Sugiere, redacta y programa publicaciones'
  },
  {
    icon: BarChart2,
    title: 'Facturación Pro',
    description: 'Controla cobros y manda recordatorios'
  },
  {
    icon: FileText,
    title: 'AutoResumen',
    description: 'Transcribe reuniones y crea lista de tareas'
  },
  {
    icon: Bot,
    title: 'Bot de WhatsApp',
    description: 'Atiende dudas comunes al instante'
  }
];

const KeyFeatures = () => {
  return (
    <section id="library" className="section-padding relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-gradient">Librería de agentes</span>
            <br />
            <span className="text-gradient-blue">disponibles</span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            Estos son algunos de los módulos más comunes:
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

        <p className="text-center text-white/70 text-lg mt-12">
          Cada agente es personalizable y puedes combinarlos como quieras.
        </p>
      </div>
    </section>
  );
};

export default KeyFeatures;
