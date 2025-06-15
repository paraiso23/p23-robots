
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, ShoppingCart, Heart, Users, BarChart, Zap } from 'lucide-react';
import React from 'react';

const useCases = [
  { icon: Rocket, title: "Para atraer clientes potenciales", description: "Deja que el agente cree contenido de activación, segmente tus clientes potenciales y analice los resultados de la campaña." },
  { icon: ShoppingCart, title: "Convertir y vender más", description: "Utiliza el agente para crear chatbots en minutos, priorizar mensajes, optimizar anuncios y hacer seguimiento de clientes." },
  { icon: Heart, title: "Para atender mejor a tus clientes", description: "Haz que el agente trabaje en respuestas rápidas y precisas, además de analizar el servicio según el sentimiento del cliente." },
  { icon: Users, title: "Para captar y retener tu base", description: "Configura al agente para controlar constantemente tu base de clientes y actuar para fomentar la recompra y recaptar inactivos." },
  { icon: BarChart, title: "Análisis inteligente de datos", description: "Procesan grandes volúmenes de datos para detectar patrones, anticiparse a problemas y apoyar decisiones estratégicas." },
  { icon: Zap, title: "Aumento de la productividad", description: "Al hacerse cargo de actividades operativas, liberan a los empleados para centrarse en retos más estratégicos y creativos." },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 sm:py-28 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Use Cases</h2>
          <p className="mt-4 text-lg text-muted-foreground">Desde la automatización de tareas y creación de chatbots hasta la generación de insights para fidelizar clientes.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="bg-transparent border-0 shadow-none">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <useCase.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{useCase.title}</h3>
                    <p className="mt-1 text-muted-foreground">{useCase.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
