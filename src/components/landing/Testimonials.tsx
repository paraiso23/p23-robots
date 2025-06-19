
import { Card, CardContent } from '@/components/ui/card';
import {
  Mail,
  Cloud,
  BookOpen,
  CreditCard,
  MessageCircle,
  Send,
  Calendar,
  BarChart2,
  CheckCircle
} from 'lucide-react';

const integrations = [
  { icon: Mail, name: 'Gmail' },
  { icon: Cloud, name: 'Google Drive' },
  { icon: BookOpen, name: 'Notion' },
  { icon: CreditCard, name: 'Stripe' },
  { icon: MessageCircle, name: 'WhatsApp' },
  { icon: Send, name: 'Telegram' },
  { icon: Calendar, name: 'Calendly' },
  { icon: BarChart2, name: 'Metricool' },
  { icon: CheckCircle, name: 'ClickUp' }
];

const Testimonials = () => {
  return (
    <section id="integrations" className="section-padding relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-gradient">Integraciones</span>
            <br />
            <span className="text-gradient-blue">sin complicaciones</span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            Conectamos con tus herramientas favoritas:
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className="glass hover-lift group border-0 relative overflow-hidden flex items-center justify-center p-6"
            >
              <div className="flex flex-col items-center">
                <integration.icon className="h-8 w-8 text-blue-400 mb-2" />
                <span className="text-white/80 text-sm">{integration.name}</span>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-white/70 text-lg mt-12">
          Todo sin tocar una línea de código.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
