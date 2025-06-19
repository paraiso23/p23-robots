import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table';

const plans = [
  {
    name: '🟢 1 agente',
    price: '80 €/mes',
    details: '1 asistente activo · soporte básico'
  },
  {
    name: '🟡 Hasta 3 agentes',
    price: '200 €/mes',
    details: 'Flujo coordinado entre agentes + dashboard incluido'
  },
  {
    name: '🔵 Full modular',
    price: '350 €/mes',
    details: 'Hasta 5 agentes · front-end personalizado · soporte VIP'
  }
];

const Pricing = () => (
  <section id="pricing" className="section-padding relative">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
          <span className="text-gradient">Planes simples,</span>
          <br />
          <span className="text-gradient-blue">modulares y escalables</span>
        </h2>
      </div>

      <div className="overflow-x-auto">
        <Table className="text-white/80 min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Plan</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Qué incluye</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plans.map((plan) => (
              <TableRow key={plan.name} className="hover:bg-white/5">
                <TableCell className="font-medium">{plan.name}</TableCell>
                <TableCell>{plan.price}</TableCell>
                <TableCell>{plan.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="text-center text-white/70 text-lg mt-8">
        Incluye configuración inicial · Ampliable por módulos · Soporte humano
        siempre disponible
      </p>
    </div>
  </section>
);

export default Pricing;
