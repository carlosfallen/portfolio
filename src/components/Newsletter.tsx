import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useFirebase } from '../hooks/useFirebase';

interface NewsletterProps {
  variant?: 'footer' | 'standalone';
  className?: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({ 
  variant = 'footer', 
  className = '' 
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { subscribeToNewsletter, loading, error } = useFirebase();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;

    const success = await subscribeToNewsletter(email);
    
    if (success) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const isFooterVariant = variant === 'footer';

  return (
    <div className={`${className}`}>
      <div className={`${isFooterVariant ? 'mb-4' : 'mb-6'}`}>
        <h3 className={`font-semibold mb-2 flex items-center gap-2 ${
          isFooterVariant ? 'text-lg text-white' : 'text-2xl text-gray-800'
        }`}>
          <Mail className={`${isFooterVariant ? 'w-5 h-5' : 'w-6 h-6'}`} />
          Newsletter
        </h3>
        <p className={`text-sm leading-relaxed ${
          isFooterVariant ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {isFooterVariant 
            ? 'Inscreva-se para receber novidades e atualizações.'
            : 'Receba as últimas novidades sobre tecnologia e nossos serviços diretamente em seu email.'
          }
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor email" 
            required
            disabled={loading}
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
              isFooterVariant 
                ? 'bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:border-blue-500' 
                : 'bg-white text-gray-800 placeholder-gray-500 border-gray-300 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50`}
          />
          {loading && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Loader className="w-5 h-5 animate-spin text-blue-500" />
            </div>
          )}
        </div>

        <motion.button 
          type="submit"
          disabled={loading || !email.trim()}
          className={`w-full py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
            isFooterVariant
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
          }`}
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
        >
          {loading ? 'Cadastrando...' : 'Inscrever-se'}
        </motion.button>
      </form>

      <AnimatePresence>
        {status !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-3 p-3 rounded-lg flex items-center gap-2 text-sm ${
              status === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}
          >
            {status === 'success' ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Inscrição realizada com sucesso!</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-4 h-4" />
                <span>{error || 'Erro ao processar inscrição'}</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};