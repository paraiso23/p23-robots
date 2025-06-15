
const steps = [
  {
    step: 1,
    title: "Conectamos tu conocimiento",
    description: "Extraeremos todo el conocimiento de tu empresa. Desde lo que está en tu cabeza, mediante audios y texto, hasta las publicación de tus RRSS, pasando por tus documentos importantes."
  },
  {
    step: 2,
    title: "Configuramos tus Agentes",
    description: "Personalizaremos los agentes según tus necesidades: atención al cliente, marketing, ventas o análisis de datos."
  },
  {
    step: 3,
    title: "Escalamos los bots",
    description: "Despliega en tu negocio y escala según crezcas. Los agentes trabajan 24/7 mientras tú te enfocas en lo importante."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 sm:py-28 container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">¿Por qué están en auge los Agentes de IA?</h2>
        <p className="mt-4 text-lg text-muted-foreground">Son los refuerzos que tu empresa necesita para que la experiencia del cliente sea más fluida.</p>
      </div>
      <div className="mt-16 relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-white/10 hidden md:block" />
        {steps.map((step, index) => (
          <div key={step.step} className={`flex md:items-center flex-col md:flex-row mb-16 md:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-5/12" />
            <div className="relative md:w-2/12 flex justify-center">
              <div className="h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold z-10">
                {step.step}
              </div>
            </div>
            <div className="md:w-5/12 mt-4 md:mt-0">
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
