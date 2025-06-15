
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Shield, Bot } from 'lucide-react';
import React from 'react';

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

const GlassCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <Card className="bg-white/5 border-white/10 backdrop-blur-lg transform hover:-translate-y-2 transition-transform duration-300">
    <CardHeader>
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      <CardDescription className="text-muted-foreground pt-2">{description}</CardDescription>
    </CardHeader>
  </Card>
);

const Audience = () => {
  return (
    <section id="features" className="py-20 sm:py-28 container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Los Agentes de IA potencian a todos los públicos de tu empresa</h2>
        <p className="mt-4 text-lg text-muted-foreground">En Paraiso23, una solución integral de IA, los agentes hacen el trabajo operativo mientras tú te centras en lo estratégico.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {audiences.map((item, index) => (
          <GlassCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Audience;
