
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Los agentes de IA de Paraiso23 han cambiado completamente nuestra atención al cliente. Ahora podemos atender las 24 horas y nuestros clientes están mucho más contentos.",
    name: "María González",
    initials: "MG",
    title: "Fundadora, Boutique Online"
  },
  {
    quote: "Como freelancer, tenía muchas tareas repetitivas que me quitaban tiempo. Los agentes de IA me permiten concentrarme en lo creativo mientras ellos se encargan de hablar con los clientes.",
    name: "Carlos Ruiz",
    initials: "CR",
    title: "Consultor Digital Independiente"
  },
  {
    quote: "Hemos vendido 40% más desde que pusimos los chatbots inteligentes. Me sorprende cómo personalizan automáticamente cada conversación.",
    name: "Ana Martínez",
    initials: "AM",
    title: "Gerente, Tienda de Deportes"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-gradient">Confiado por PyMEs</span>
            <br />
            <span className="text-gradient-blue">y Freelancers</span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            Descubre cómo nuestros agentes de IA están ayudando a pequeños negocios y profesionales independientes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="glass hover-lift group border-0 relative overflow-hidden"
            >
              {/* Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="p-8 relative z-10">
                {/* Quote Icon */}
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-blue-400 opacity-70" />
                </div>

                {/* Quote Text */}
                <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar className="h-12 w-12 border-2 border-blue-400/30">
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}&backgroundColor=1e293b&textColor=94a3b8`} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  </div>
                  <div>
                    <p className="font-bold text-white group-hover:text-gradient-blue transition-all duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-white/60">
                      {testimonial.title}
                    </p>
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

export default Testimonials;
