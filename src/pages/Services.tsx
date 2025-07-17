import { motion } from 'framer-motion';
import { 
  Monitor, 
  Wifi, 
  ShoppingCart, 
  Smartphone, 
  Clock, 
  Package,
  Wrench,
  Network,
  Store,
  Phone,
  AlertCircle,
  Star,
  MapPin,
  CreditCard,
  CheckCircle
} from 'lucide-react';

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

export const serviceCategories = [
  {
    id: 'manutencao',
    title: 'Manutenção',
    icon: <Monitor className="w-6 h-6" />,
    color: 'bg-blue-500',
    services: [
      { name: 'Formatação (com backup)', price: 'R$ 80', icon: <Wrench className="w-4 h-4" /> },
      { name: 'Formatação (sem backup)', price: 'R$ 60', icon: <Wrench className="w-4 h-4" /> },
      { name: 'Instalação de programas e otimização', price: 'R$ 50', icon: <CheckCircle className="w-4 h-4" /> },
      { name: 'Troca de HD/SSD + Clonagem de sistema', price: 'R$ 70', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Limpeza interna (física e preventiva)', price: 'R$ 50', icon: <Wrench className="w-4 h-4" /> },
      { name: 'Montagem de PC', price: 'R$ 90', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Configuração de periféricos', price: 'R$ 40', icon: <CheckCircle className="w-4 h-4" /> }
    ]
  },
  {
    id: 'redes',
    title: 'Redes e Infraestrutura',
    icon: <Network className="w-6 h-6" />,
    color: 'bg-green-500',
    services: [
      { name: 'Configuração de roteador/switch/AP Wi-Fi', price: 'R$ 60', icon: <Wifi className="w-4 h-4" /> },
      { name: 'Crimpagem de cabo de rede (por ponta)', price: 'R$ 15', icon: <Network className="w-4 h-4" /> },
      { name: 'Teste e reparo básico de ponto de rede', price: 'R$ 40', icon: <Network className="w-4 h-4" /> },
      { name: 'Projeto de rede simples (até 5 pontos)', price: 'R$ 150', icon: <Network className="w-4 h-4" /> },
      { name: 'Projeto de rede intermediária (6 a 15 pontos)', price: 'R$ 300', icon: <Network className="w-4 h-4" /> },
      { name: 'Instalação de Access Point (até 10m)', price: 'R$ 100/un', icon: <Wifi className="w-4 h-4" /> },
      { name: 'Organização de rack pequeno (até 12U)', price: 'R$ 180', icon: <Network className="w-4 h-4" /> }
    ]
  },
  {
    id: 'empresas',
    title: 'Suporte a Empresas e PDV',
    icon: <Store className="w-6 h-6" />,
    color: 'bg-purple-500',
    services: [
      { name: 'Configuração de balanças Toledo', price: 'R$ 100/un', icon: <ShoppingCart className="w-4 h-4" /> },
      { name: 'Suporte a impressoras fiscais e não fiscais', price: 'R$ 60', icon: <Store className="w-4 h-4" /> },
      { name: 'Manutenção de gavetas de dinheiro', price: 'R$ 50', icon: <ShoppingCart className="w-4 h-4" /> },
      { name: 'Configuração de displays e TVs digitais', price: 'R$ 80', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Suporte a sistema de restaurante/PDV', price: 'R$ 80/hora', icon: <Store className="w-4 h-4" /> },
      { name: 'Visita técnica preventiva (check-up geral)', price: 'R$ 150', icon: <CheckCircle className="w-4 h-4" /> }
    ]
  },
  {
    id: 'mobile',
    title: 'Dispositivos e Mobilidade',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'bg-orange-500',
    services: [
      { name: 'Configuração de celulares corporativos', price: 'R$ 50/aparelho', icon: <Smartphone className="w-4 h-4" /> },
      { name: 'Backup e transferência de dados celular-PC', price: 'R$ 60', icon: <Smartphone className="w-4 h-4" /> },
      { name: 'Suporte remoto (até 1 hora)', price: 'R$ 60', icon: <Phone className="w-4 h-4" /> }
    ]
  }
];

const emergencyService = {
  title: 'Atendimento Emergencial / Fora de Horário',
  description: 'Atendimento após as 18h, finais de semana ou urgências',
  surcharge: '+30% sobre o valor do serviço'
};

const monthlyPackages = [
  {
    name: 'Básico',
    price: 'R$ 250',
    description: 'até 4 chamados presenciais ou remotos/mês',
    features: ['4 chamados/mês', 'Suporte remoto', 'Suporte presencial', 'Prioridade normal']
  },
  {
    name: 'Intermediário',
    price: 'R$ 450',
    description: 'até 8 chamados',
    features: ['8 chamados/mês', 'Suporte remoto', 'Suporte presencial', 'Prioridade alta']
  },
  {
    name: 'Avançado',
    price: 'R$ 650',
    description: 'ilimitado remoto + até 12 presenciais',
    features: ['Chamados ilimitados remotos', '12 chamados presenciais/mês', 'Prioridade máxima', 'Desconto em serviços extras']
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

export function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Header Section */}
      <section className="py-16 bg-gray-50 text-blue">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🛠️ Catálogo de Serviços Técnicos de TI
            </h1>
            <p className="text-xl mb-2">
              Suporte Técnico, Redes, Manutenção e Soluções Tecnológicas
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-900">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-lg">Técnico formado com anos de experiência</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-5">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`${category.color} p-6`}>
                  <div className="flex items-center gap-4 text-white">
                    <div className="p-3 bg-white/20 rounded-xl">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white rounded-lg text-gray-600">
                            {service.icon}
                          </div>
                          <span className="font-medium text-gray-800">{service.name}</span>
                        </div>
                        <span className="font-bold text-lg text-green-600">{service.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-red-100 rounded-xl">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-600">{emergencyService.title}</h3>
                <p className="text-gray-600">{emergencyService.description}</p>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-xl">
              <span className="text-lg font-bold text-red-700">{emergencyService.surcharge}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Monthly Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">📦 Pacotes Mensais para Empresas</h2>
            <p className="text-gray-600">Planos sob medida para manter sua empresa sempre funcionando</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {monthlyPackages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${
                  index === 1 ? 'border-blue-500 transform scale-105' : 'border-gray-200'
                }`}
              >
                {index === 1 && (
                  <div className="bg-blue-500 text-white text-center py-2 px-4 rounded-full text-sm font-bold mb-4">
                    MAIS POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 py-3 rounded-xl font-bold transition-colors ${
                    index === 1
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Contratar Plano
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">💼 Nossos Diferenciais</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Experiência Comprovada</h3>
                <p className="text-gray-600">
                  Técnico formado em Informática com anos de experiência em supermercados, empresas e restaurantes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Soluções Rápidas</h3>
                <p className="text-gray-600">
                  Atendemos com soluções rápidas e eficientes, sempre buscando o melhor custo-benefício.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Qualidade Garantida</h3>
                <p className="text-gray-600">
                  Trabalhos realizados com profissionalismo, compromisso e qualidade garantida.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                Forma de Atendimento
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <strong>Presencial:</strong> Floriano e região
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <strong>Remoto:</strong> Todo Brasil (via WhatsApp, AnyDesk ou TeamViewer)
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-green-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-green-600" />
                Formas de Pagamento
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Pix</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Dinheiro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Boleto</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Transferência</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                Precisa de suporte técnico profissional?
              </h3>
              <p className="text-lg mb-6">
                Entre em contato e solicite um orçamento personalizado para suas necessidades
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                📱 Solicitar Orçamento
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}