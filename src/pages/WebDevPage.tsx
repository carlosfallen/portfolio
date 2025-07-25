import { motion } from 'framer-motion';
import { Monitor, ChevronRight } from 'lucide-react';

interface WebDevPageProps {
  onNavigate?: (page: string) => void;
}

export function WebDevPage({ onNavigate }: WebDevPageProps) {
  const features = [
    {
      title: "Sites Responsivos",
      items: ["Design adaptável", "Performance otimizada", "SEO amigável", "UX/UI moderno"]
    },
    {
      title: "E-commerce",
      items: ["Integração com pagamentos", "Gestão de estoque", "Carrinho de compras", "Painel administrativo"]
    },
    {
      title: "Landing Pages",
      items: ["Alta conversão", "A/B testing", "Formulários otimizados", "Analytics"]
    },
    {
      title: "Portais Corporativos",
      items: ["Área administrativa", "Gestão de conteúdo", "Intranet", "Customização"]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Monitor className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Desenvolvimento Web
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Criamos websites modernos e responsivos que impulsionam seu negócio
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}