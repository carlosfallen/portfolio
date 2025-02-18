import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../pages/Services';

const animations = {
  menuItem: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  mobileMenu: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { type: 'spring', stiffness: 300, damping: 25 }
  }
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const servicePaths = services.map(service => service.path);
  const isWhiteHeader = isScrolled || (location.pathname !== '/' && !servicePaths.includes(location.pathname));

const linkClass = isWhiteHeader
  ? "relative text-gray-600 px-6 hover:text-blue-600 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300"
  : "relative text-white px-6 hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300";

const buttonClass = isWhiteHeader
  ? "bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-500"
  : "bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-500";

const logoContainerClass = isWhiteHeader
  ? "bg-blue-600 p-2 rounded-lg max-w-30 max-h-10 transition-all duration-500"
  : "bg-transparent p-2 rounded-lg max-w-30 max-h-10 transition-all duration-500";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
<header
  className={`fixed w-full z-50 transition-all duration-500 ${
    isScrolled ? "bg-white shadow-md" : "bg-transparent"
  }`}
>
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-20">
      <motion.div
        className="flex items-center space-x-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="./assets/logo.png"
          alt="Descrição da imagem"
          className={logoContainerClass}
        />
      </motion.div>

      <nav className="hidden md:flex items-center space-x-8">
        <motion.div
          className="flex items-center space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/" className={linkClass}>
            Início
          </Link>
          <Link to="/servicos" className={linkClass}>
            Serviços
          </Link>
          <Link to="/sobre" className={linkClass}>
            Sobre Nós
          </Link>
          <Link to="/contato" className={linkClass}>
            Contato
          </Link>
          <motion.button
            className={buttonClass}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/orcamento">Solicitar Orçamento</Link>
          </motion.button>
        </motion.div>
      </nav>

      <button 
        className={`md:hidden p-3 rounded-lg transition-colors duration-300 ${isMenuOpen ? 'bg-white' : 'bg-blue-600'} 
                    ${isMenuOpen ? 'text-blue-600' : 'text-white'} hover:bg-blue-700`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? (
          <X className="w-7 h-7 transform rotate-0 transition-transform" />
        ) : (
          <Menu className="w-7 h-7" />
        )}
      </button>

    </div>

    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-white pt-16 mt-20 overflow-y-auto shadow-xl rounded-lg w-[90vw] h-[50vh] mx-auto"
>
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-4 pb-8">
              <Link
                to="/"
                className="block px-6 py-3 text-lg font-medium text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200"
              >
                Início
              </Link>
              <Link
                to="/servicos"
                className="block px-6 py-3 text-lg font-medium text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200"
              >
                Serviços
              </Link>
              <Link
                to="/sobre"
                className="block px-6 py-3 text-lg font-medium text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200"
              >
                Sobre Nós
              </Link>
              <Link
                to="/contato"
                className="block px-6 py-3 text-lg font-medium text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200"
              >
                Contato
              </Link>

              <Link
                to="/orcamento"
                className="w-full py-4 px-8 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 active:scale-95 active:bg-blue-800 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-lg"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</header>
  );
}