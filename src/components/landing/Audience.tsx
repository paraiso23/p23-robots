
import { CheckCircle } from 'lucide-react';

const tasks = [
  'Seguimiento de leads olvidados',
  'Redacción de propuestas',
  'Recordatorios automáticos',
  'Ideas y programación de redes',
  'Gestión de documentos',
  'Facturación y cobros',
  'Resumen de reuniones'
];

const Audience = () => {
  return (
    <section id="modular" className="section-padding relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-gradient">¿Qué es un sistema</span>
            <br />
            <span className="text-gradient-blue">modular de asistentes IA?</span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed mb-4">
            Creamos agentes que automatizan partes específicas de tu negocio
            (responder correos, seguir propuestas, generar contenido…)
          </p>
          <p className="text-xl text-white/70 leading-relaxed">
            Los puedes usar por separado o conectarlos entre sí como piezas de
            LEGO. Empiezas con uno. Si lo necesitas, añades más. Sin
            instalaciones ni líos técnicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {tasks.map((task) => (
            <div key={task} className="flex items-start gap-3">
              <span className="mt-1">
                <CheckCircle className="h-5 w-5 text-blue-400" />
              </span>
              <span className="text-white/80">{task}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-white/70 text-lg mt-12">
          “Cada agente tiene una misión. Juntos forman tu equipo invisible.”
        </p>
      </div>
    </section>
  );
};

export default Audience;
