import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header({ onNavigate, currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const isHomePage = currentPage === 'home';
  const shouldUseWhiteHeader = isScrolled || !isHomePage;

  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');
  `;
  document.head.appendChild(style);
  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsVisible(true);
  }, [currentPage]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 sm:h-20 flex items-center justify-between">
            <div className="flex-shrink-0">
              <div className="p-2 rounded-lg bg-blue-600">
                                <h1 
                  style={{ 
                    fontFamily: "'Gugi', cursive", 
                    fontWeight: 400, 
                    fontSize: '2.5rem',
                    color: '#fff'
                  }}
                >
                  KHARTECH
                </h1>
              </div>
            </div>
            <div className="md:hidden flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-5 h-5 sm:w-6 sm:h-6">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </div>
          </div>
        </div>
      </header>
    );
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  // Estrutura de navegação com submenus
  const navigationItems = [
    { key: 'home', label: 'Início' },
    { key: 'services', label: 'Serviços' },
    { key: 'about', label: 'Sobre Nós' },
    { key: 'contact', label: 'Contato' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldUseWhiteHeader ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 z-60"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div 
              onClick={() => onNavigate('home')} 
              className="cursor-pointer"
            >
              <div className={`px-3 rounded-2xl transition-all duration-300 ${
                shouldUseWhiteHeader 
                  ? 'bg-blue-600 shadow-md' 
                  : 'bg-transparent'
              }`}>
                <h1 
                  style={{ 
                    fontFamily: "'Gugi', cursive", 
                    fontWeight: 400, 
                    fontSize: '2.5rem',
                    color: '#fff'
                  }}
                >
                  KHARTECH
                </h1>
              </div>
            </div>
          </motion.div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
            <motion.div
              className="flex items-center space-x-2 lg:space-x-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navigationItems.map((item) => (
                <div key={item.key} className="relative">
                  {item.subItems ? (
                    <div className="relative group">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-3 lg:px-4 py-2 font-medium transition-all duration-200 text-sm lg:text-base ${
                          shouldUseWhiteHeader
                            ? 'text-gray-700 hover:text-blue-600'
                            : 'text-white hover:text-blue-200'
                        } after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-0.5 after:transition-all after:duration-300 ${
                          shouldUseWhiteHeader
                            ? 'after:bg-blue-600'
                            : 'after:bg-white'
                        } ${
                          ['services', 'webdev', 'techsupport', 'datamanagement', 'cloudsolutions'].includes(currentPage)
                            ? 'text-blue-600 after:bg-blue-600 after:w-full'
                            : ''
                        }`}
                      >
                        {item.label} ▼
                      </motion.button>
                      
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-1">
                          {item.subItems.map((subItem) => (
                            <button
                              key={subItem.key}
                              onClick={() => onNavigate(subItem.key)}
                              className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                                currentPage === subItem.key 
                                  ? 'bg-blue-50 text-blue-700' 
                                  : 'text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onNavigate(item.key)}
                      className={`relative px-3 lg:px-4 py-2 font-medium transition-all duration-200 text-sm lg:text-base ${
                        shouldUseWhiteHeader
                          ? 'text-gray-700 hover:text-blue-600'
                          : 'text-white hover:text-blue-200'
                      } after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-0.5 after:transition-all after:duration-300 ${
                        shouldUseWhiteHeader
                          ? 'after:bg-blue-600'
                          : 'after:bg-white'
                      } ${
                        currentPage === item.key 
                          ? 'text-blue-600 after:bg-blue-600 after:w-full' 
                          : ''
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  )}
                </div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('budget')}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-200 text-sm lg:text-base ${
                  shouldUseWhiteHeader
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                    : 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
                } ${
                  currentPage === 'budget' ? 'bg-blue-700' : ''
                }`}
              >
                Solicitar Orçamento
              </motion.button>
            </motion.div>
          </nav>

          {/* Botão Menu Mobile */}
          <motion.button 
            className={`md:hidden flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-200 relative z-60 ${
              shouldUseWhiteHeader
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                : 'bg-white text-blue-600 hover:bg-white/30 backdrop-blur-sm'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                    <line x1="4" x2="20" y1="12" y2="12"/>
                    <line x1="4" x2="20" y1="6" y2="6"/>
                    <line x1="4" x2="20" y1="18" y2="18"/>
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t z-50 max-h-[calc(100vh-4rem)] overflow-y-auto rounded-lg mt-2 mx-2"
            >
              <div className="px-4 sm:px-6 py-6 space-y-2 rounded-lg">
                {navigationItems.map((item) => (
                  <div key={item.key}>
                    <motion.div variants={itemVariants}>
                      <button
                        onClick={() => {
                          onNavigate(item.key);
                          if (!item.subItems) setIsMenuOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-4 text-lg font-medium transition-colors rounded-xl ${
                          currentPage === item.key || 
                          (item.subItems && item.subItems.some(sub => sub.key === currentPage))
                            ? 'bg-blue-100 text-blue-700 border border-blue-200'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-transparent hover:border-blue-100'
                        }`}
                      >
                        {item.label}
                      </button>
                    </motion.div>

                    {item.subItems && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <motion.div key={subItem.key} variants={itemVariants}>
                            <button
                              onClick={() => {
                                onNavigate(subItem.key);
                                setIsMenuOpen(false);
                              }}
                              className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                                currentPage === subItem.key
                                  ? 'bg-blue-50 text-blue-700 border border-blue-100'
                                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                              }`}
                            >
                              • {subItem.label}
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Botão CTA no menu mobile */}
                <motion.div variants={itemVariants} className="pt-4">
                  <button
                    onClick={() => {
                      onNavigate('budget');
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full py-4 px-6 text-center font-semibold text-white transition-all rounded-xl shadow-lg hover:shadow-xl active:scale-95 ${
                      currentPage === 'budget'
                        ? 'bg-gradient-to-r from-blue-700 to-blue-800'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                    }`}
                  >
                    Solicitar Orçamento
                  </button>
                </motion.div>
                
                {/* Informações de contato rápido */}
                <motion.div variants={itemVariants} className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 text-center mb-3">
                    Precisa de ajuda rápida?
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://wa.me/5589994333316"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"/>
                        <path d="M12 12v.01"/>
                        <path d="M8 12v.01"/>
                        <path d="M16 12v.01"/>
                      </svg>
                    </a>
                    <a
                      href="mailto:contato@carlostech.com"
                      className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}