import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Budget } from './pages/Budget';
import { WebDevPage } from './pages/WebDevPage';
import { CloudSolutionsPage } from './pages/CloudSolutionsPage';
import { DataManagementPage } from './pages/DataManagement';
import { TechSupportPage } from './pages/TechSupportPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    
    // Update URL for better UX (optional - maintains URL state without routing)
    const urls: { [key: string]: string } = {
      home: '/',
      contact: '/contato',
      services: '/servicos',
      about: '/sobre',
      budget: '/orcamento',
      webdev: '/servicos/web',
      techsupport: '/servicos/suporte',
      datamanagement: '/servicos/dados',
      cloudsolutions: '/servicos/cloud'
    };
    
    window.history.pushState({}, '', urls[page]);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const pageMap: { [key: string]: string } = {
        '/': 'home',
        '/contato': 'contact',
        '/servicos': 'services',
        '/sobre': 'about',
        '/orcamento': 'budget',
        '/servicos/web': 'webdev',
        '/servicos/suporte': 'techsupport',
        '/servicos/dados': 'datamanagement',
        '/servicos/cloud': 'cloudsolutions'
      };
      
      const page = pageMap[path] || 'home';
      setCurrentPage(page);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Set initial page based on URL

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const pages: { [key: string]: JSX.Element } = {
    home: <Home onNavigate={navigateTo} />,
    contact: <Contact onNavigate={navigateTo} />,
    services: <Services onNavigate={navigateTo} />,
    about: <About onNavigate={navigateTo} />,
    budget: <Budget onNavigate={navigateTo} />,
    webdev: <WebDevPage onNavigate={navigateTo} />,
    techsupport: <TechSupportPage onNavigate={navigateTo} />,
    datamanagement: <DataManagementPage onNavigate={navigateTo} />,
    cloudsolutions: <CloudSolutionsPage onNavigate={navigateTo} />
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      <main key={currentPage}>
        {pages[currentPage]}
      </main>
      <Footer />
    </div>
  );
}

export default App;