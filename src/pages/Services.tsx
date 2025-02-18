import { motion } from 'framer-motion';
import { Monitor, Cloud, Database, Laptop, Shield, Code, Server, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export const services = [
  {
    icon: <Monitor />,
    title: "Desenvolvimento Web",
    description: "Criamos websites modernos e responsivos que impulsionam seu negócio.",
    features: ["Sites Responsivos", "E-commerce", "Landing Pages", "Portais Corporativos"],
    path: "/servicos/web"
  },
  {
    icon: <Cloud />,
    title: "Cloud Solutions",
    description: "Soluções em nuvem escaláveis e seguras para sua empresa.",
    features: ["AWS", "Azure", "Google Cloud", "Migração Cloud"],
    path: "/servicos/cloud"
  },
  {
    icon: <Database />,
    title: "Gestão de Dados",
    description: "Gerenciamento eficiente de dados e sistemas de informação.",
    features: ["Big Data", "Analytics", "Data Mining", "BI"],
    path: "/servicos/dados"
  },
  {
    icon: <Laptop />,
    title: "Suporte Técnico",
    description: "Suporte especializado 24/7 para manter sua operação funcionando.",
    features: ["Help Desk", "Manutenção", "Monitoramento", "Backup"],
    path: "/servicos/suporte"
  },
  {
    icon: <Shield />,
    title: "Segurança Digital",
    description: "Proteção completa para seus dados e sistemas.",
    features: ["Firewall", "Antivírus", "Backup", "Auditoria"],
    path: "/servicos/seguranca"
  },
  {
    icon: <Code />,
    title: "Dev Mobile",
    description: "Apps nativos e híbridos para iOS e Android.",
    features: ["iOS", "Android", "React Native", "Flutter"],
    path: "/servicos/mobile"
  },
  {
    icon: <Server />,
    title: "Infraestrutura",
    description: "Soluções completas de infraestrutura de TI.",
    features: ["Redes", "Servidores", "Storage", "Virtualização"],
    path: "/servicos/infraestrutura"
  },
  {
    icon: <Headphones />,
    title: "Consultoria",
    description: "Consultoria especializada em tecnologia.",
    features: ["Planejamento", "Gestão", "Processos", "Inovação"],
    path: "/servicos/consultoria"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Services() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções tecnológicas completas para impulsionar seu negócio
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.path}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Saiba Mais
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}