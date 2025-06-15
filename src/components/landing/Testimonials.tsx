
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Los agentes de IA de Paraiso23 han transformado completamente nuestra atención al cliente. Ahora podemos responder 24/7 y nuestros clientes están mucho más satisfechos.",
    name: "María González",
    initials: "MG",
    title: "Fundadora, Boutique Online"
  },
  {
    quote: "Como freelancer, necesitaba automatizar muchas tareas repetitivas. Los agentes de IA me han permitido enfocarme en lo creativo mientras ellos manejan la comunicación con clientes.",
    name: "Carlos Ruiz",
    initials: "CR",
    title: "Consultor Digital Independiente"
  },
  {
    quote: "Hemos visto un aumento del 40% en nuestras ventas desde que implementamos los chatbots inteligentes. La personalización automática es increíble.",
    name: "Ana Martínez",
    initials: "AM",
    title: "Gerente, Tienda de Deportes"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Confiado por PyMEs y Freelancers</h2>
        <p className="mt-4 text-lg text-muted-foreground">Descubre cómo nuestros agentes de IA están transformando pequeños negocios y profesionales independientes.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-lg h-full flex flex-col">
            <CardContent className="pt-6 flex-grow flex flex-col">
              <p className="text-muted-foreground flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-6">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
