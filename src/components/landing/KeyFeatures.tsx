
import { Clock, Target, Zap, DollarSign, BrainCircuit, CheckCircle } from 'lucide-react';
import React from 'react';

const features = [
  { icon: Clock, text: "Funcionamiento 24/7" },
  { icon: Target, text: "Precisión en las Decisiones" },
  { icon: Zap, text: "Automatización de Tareas" },
  { icon: DollarSign, text: "Reducción de Costos" },
  { icon: BrainCircuit, text: "Personalización Inteligente" },
  { icon: CheckCircle, text: "Aumento de la productividad" }
];

const KeyFeatures = () => {
  return (
    <section className="py-20 sm:py-28 bg-white/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Key Features</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Nuestros agentes trabajan sin descanso para automatizar, optimizar y personalizar tu negocio, liberándote para que te enfoques en lo estratégico.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <span className="font-medium text-center">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
