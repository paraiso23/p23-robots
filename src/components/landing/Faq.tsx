import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion';

const faqs = [
  {
    q: '¿Qué es un agente IA?',
    a: 'Es un sistema que automatiza una función específica. Puedes usar uno o combinarlos.'
  },
  {
    q: '¿Necesito saber de tecnología?',
    a: 'No. Tú cuentas lo que haces. Nosotros lo automatizamos.'
  },
  {
    q: '¿Puedo empezar solo con uno?',
    a: 'Sí. El modelo es modular. Empiezas con lo que necesitas.'
  },
  {
    q: '¿Puedo escalar más adelante?',
    a: 'Sí. Puedes añadir agentes nuevos cuando quieras.'
  }
];

const Faq = () => (
  <section id="faq" className="section-padding relative">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
          <span className="text-gradient">Preguntas frecuentes</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="max-w-2xl mx-auto text-white/80">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-lg">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-base">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default Faq;
