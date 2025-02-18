import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function Footer() {
  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/c.augustofc/" },
    { icon: FaGithub, url: "https://github.com/carlosfallen" },
    { icon: FaWhatsapp, url: "https://wa.me/5589994333316" },  // WhatsApp com número
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/caugustofc/" }
  ];
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
            <img src="./assets/logo.png" alt="Descrição da imagem" className="max-w-25 max-h-10"  />
            </div>
            <p className="text-gray-400 mb-6">
              Transformando ideias em soluções tecnológicas inovadoras.
            </p>
            <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"  // Abre o link em uma nova aba
                rel="noopener noreferrer" // Segurança para links externos
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</Link></li>
              <li><Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><Link to="/servicos/web" className="text-gray-400 hover:text-white transition-colors">Desenvolvimento Web</Link></li>
              <li><Link to="/servicos/cloud" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/servicos/dados" className="text-gray-400 hover:text-white transition-colors">Gestão de Dados</Link></li>
              <li><Link to="/servicos/suporte" className="text-gray-400 hover:text-white transition-colors">Suporte Técnico</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber novidades e atualizações.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu email" 
                className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button 
                className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar
              </motion.button>
            </form>
          </motion.div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CarlosTech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}