import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { services } from './Services';
import NetworkBackground from '../components/NetworkBackground';

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-screen max-h-[800px] flex items-center">
        <NetworkBackground />
        <div className="relative z-10 w-full py-8 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center text-white max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                Soluções Tecnológicas que Impulsionam seu Negócio
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90 px-4">
                Oferecemos serviços de TI personalizados para sua empresa crescer
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button 
                  className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/servicos" className="block">Conheça Nossos Serviços</Link>
                </motion.button>
                <motion.button 
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contato" className="block">Fale Conosco</Link>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nossos Serviços
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.slice(0, 4).map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-blue-600 mb-4 text-3xl sm:text-4xl"
                  whileHover={{ scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">{service.description}</p>
                <motion.button 
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors text-sm sm:text-base"
                  whileHover={{ x: 5 }}
                >
                  <Link to={service.path}>Saiba Mais</Link> 
                  <ChevronRight className="w-4 h-4 ml-1" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1 space-y-4 sm:space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Quem Somos</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                A CarlosTech é uma empresa líder em soluções tecnológicas, dedicada a transformar desafios em oportunidades através da inovação digital.
              </p>
              <motion.button 
                className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/sobre" className="block">Conheça Nossa História</Link>
              </motion.button>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Equipe CarlosTech" 
                className="rounded-lg shadow-xl w-full h-48 sm:h-64 md:h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}