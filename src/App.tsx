import { Routes, Route } from 'react-router-dom';
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
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/orcamento" element={<Budget />} />
        <Route path="/servicos/web" element={<WebDevPage />} />
        <Route path="/servicos/suporte" element={<TechSupportPage />} />
        <Route path="/servicos/dados" element={<DataManagementPage />} />
        <Route path="/servicos/cloud" element={<CloudSolutionsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;