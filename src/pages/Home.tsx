import { motion } from 'framer-motion';
import NetworkBackground from '../components/NetworkBackground';
import { Newsletter } from '../components/Newsletter';
import { serviceCategories } from './Services';
import { useState, useEffect } from 'react';

export function Home({ onNavigate }) {
  const [randomServices, setRandomServices] = useState([]);

  const getRandomServices = () => {
    const allServices = [];
    
    serviceCategories.forEach(category => {
      category.services.forEach(service => {
        allServices.push({
          ...service,
          categoryTitle: category.title,
          categoryIcon: category.icon,
          categoryColor: category.color,
          categoryId: category.id,
        });
      });
    });

    const shuffled = allServices.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  useEffect(() => {
    setRandomServices(getRandomServices());
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <NetworkBackground />
        <div className="relative z-10 w-full py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center text-white max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="block sm:inline">Soluções Tecnológicas</span>
                <span className="block sm:inline"> que Impulsionam</span>
                <span className="block sm:inline"> seu Negócio</span>
              </h1>
              
              <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2 sm:px-4 leading-relaxed">
                Oferecemos serviços de TI personalizados para sua empresa crescer no mundo digital
              </p>
              
              <motion.div 
                className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full xs:w-auto"
                >
                  <button 
                    onClick={() => onNavigate('services')}
                    className="block w-full xs:w-auto bg-white text-blue-600 px-6 xs:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl"
                  >
                    Conheça Nossos Serviços
                  </button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full xs:w-auto"
                >
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="block w-full xs:w-auto bg-transparent border-2 border-white text-white px-6 xs:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
                  >
                    Fale Conosco
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Nossos Serviços
          </motion.h2>
          
          <div className="text-center mb-6 sm:mb-8">
            <motion.button
              onClick={() => setRandomServices(getRandomServices())}
              className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base font-medium shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎲 Ver Outros Serviços
            </motion.button>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {randomServices.map((service, index) => (
              <motion.div 
                key={`${service.categoryId}-${index}`}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 group"
                style={{ 
                  borderLeftColor: service.categoryColor.includes('blue') ? '#3B82F6' : 
                                   service.categoryColor.includes('green') ? '#10B981' :
                                   service.categoryColor.includes('purple') ? '#8B5CF6' : '#F59E0B' 
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <motion.div 
                    className="text-blue-600 flex items-center gap-2 text-xl sm:text-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.categoryIcon}
                    {service.icon}
                  </motion.div>
                  <span className="text-xs sm:text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                
                <div className="mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full text-white font-medium ${service.categoryColor}`}>
                    {service.categoryTitle}
                  </span>
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 leading-tight">
                  {service.name}
                </h3>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <button 
                    onClick={() => onNavigate('services')}
                    className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors text-sm group-hover:text-blue-700"
                  >
                    Saiba Mais 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base font-medium shadow-md hover:shadow-lg"
              >
                Ver Todos os Serviços 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1 space-y-4 sm:space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                Quem Somos
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                A CarlosTech é uma empresa líder em soluções tecnológicas, dedicada a transformar 
                desafios em oportunidades através da inovação digital e excelência técnica.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-2"
              >
                <button 
                  onClick={() => onNavigate('about')}
                  className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl"
                >
                  Conheça Nossa História
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Equipe CarlosTech trabalhando" 
                  className="w-full h-48 xs:h-56 sm:h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Fique por Dentro das Novidades
              </h2>
              <p className="text-blue-100 text-sm sm:text-base">
                Receba dicas exclusivas sobre tecnologia e fique sabendo dos nossos lançamentos
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Newsletter variant="standalone" className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}