
const steps = [
  {
    step: '1',
    title: 'Nos cuentas cómo trabajas',
    description: 'Revisamos tus procesos y detectamos las tareas repetitivas.'
  },
  {
    step: '2',
    title: 'Creamos un agente IA adaptado a ti',
    description: 'Lo configuramos para que haga justo lo que necesitas.'
  },
  {
    step: '3',
    title: 'Lo conectamos a tus herramientas',
    description: 'Gmail, WhatsApp, Drive… todo queda integrado.'
  }
];

const HowItWorks = () => {
  return (
    <section id="como" className="section-padding relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-gradient">Cómo funciona</span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            En 3 pasos:
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.step} className="relative mb-16 last:mb-0">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-400/50 to-purple-400/50 hidden lg:block" />
              )}
              
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Step Number */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-black text-xl animate-glow">
                    {step.step}
                  </div>
                  <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-lg opacity-30" />
                </div>

                {/* Content */}
                <div className="glass hover-lift p-8 rounded-3xl flex-1 border-0 group">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient-blue transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/70 text-lg mt-12">
          Todo desde una interfaz visual y sin escribir una línea de código.
        </p>
        <p className="text-center text-white/60 text-base mt-4">
          Puedes acceder a tu sistema desde un panel visual, añadir agentes
          nuevos y ver cómo trabaja por ti.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
