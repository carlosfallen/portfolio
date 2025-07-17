import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Newsletter } from './Newsletter';

export function Footer() {
  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/c.augustofc/", label: "Instagram" },
    { icon: FaGithub, url: "https://github.com/carlosfallen", label: "GitHub" },
    { icon: FaWhatsapp, url: "https://wa.me/5589994333316", label: "WhatsApp" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/caugustofc/", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto ">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="./assets/logo.png" 
                alt="Logo CarlosTech" 
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Transformando ideias em soluções tecnológicas inovadoras.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, url, label }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <Newsletter variant="footer" />
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CarlosTech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}