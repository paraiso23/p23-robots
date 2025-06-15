
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Shield, Bot } from 'lucide-react';

const audiences = [
  {
    icon: Users,
    title: "Agentes de IA para Usuarios",
    description: "Automatiza la creación de contenidos, respuestas rápidas y optimización de textos para campañas de marketing y atención al cliente."
  },
  {
    icon: Shield,
    title: "Agentes de IA para Directivos",
    description: "Analiza datos operativos, supervisa métricas y sugiere acciones para optimizar la eficiencia y resultados de tu negocio."
  },
  {
    icon: Bot,
    title: "Agentes de IA para Consumidores",
    description: "Chatbots inteligentes que se comunican directamente con tus clientes finales de forma autónoma y eficiente las 24/7."
  }
];

const Audience = () => {
  return (
    <section id="features" className="section-padding relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-gradient">Los Agentes de IA potencian a todos</span>
            <br />
            <span className="text-gradient-blue">los públicos de tu empresa</span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            En Paraiso23, una solución integral de IA, los agentes hacen el trabajo operativo mientras tú te centras en lo estratégico.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {audiences.map((item, index) => (
            <Card 
              key={index} 
              className="glass hover-lift group cursor-pointer border-0 relative overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <CardHeader className="relative z-10 p-8">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <CardTitle className="text-2xl font-bold text-white mb-4 group-hover:text-gradient-blue transition-all duration-300">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
