import { motion } from 'framer-motion';
import { Database, ChevronRight } from 'lucide-react';

interface DataManagementPageProps {
  onNavigate?: (page: string) => void;
}

export function DataManagementPage({ onNavigate }: DataManagementPageProps) {
  const features = [
    {
      title: "Big Data",
      items: ["Processamento", "Armazenamento", "Análise", "Visualização"]
    },
    {
      title: "Analytics",
      items: ["Relatórios", "Dashboards", "KPIs", "Insights"]
    },
    {
      title: "Data Mining",
      items: ["Extração", "Transformação", "Classificação", "Predição"]
    },
    {
      title: "BI",
      items: ["Power BI", "Tableau", "Qlik", "Looker"]
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
            <Database className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Gestão de Dados
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Gerenciamento eficiente de dados e sistemas de informação
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