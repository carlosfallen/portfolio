import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useFirebase } from '../hooks/useFirebase';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  variant?: 'page' | 'modal';
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  variant = 'page',
  onSuccess 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { submitContactForm, loading, error } = useFirebase();

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const success = await submitContactForm(formData);
    
    if (success) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      onSuccess?.();
      
      if (variant === 'page') {
        setTimeout(() => setStatus('idle'), 5000);
      }
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const isPageVariant = variant === 'page';

  return (
    <div className={`${isPageVariant ? 'bg-white rounded-2xl shadow-xl p-8' : ''}`}>
      {isPageVariant && (
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Entre em Contato</h2>
          <p className="text-gray-600">
            Envie sua mensagem e responderemos o mais breve possível
          </p>
        </div>
      )}

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-green-800 font-medium">Mensagem enviada com sucesso!</p>
              <p className="text-green-700 text-sm">Responderemos em até 24 horas.</p>
            </div>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-800">{error || 'Erro ao enviar mensagem'}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <User className="w-4 h-4" />
              Nome Completo
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
              } focus:ring-2 focus:ring-blue-200`}
              placeholder="Seu nome completo"
            />
            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
              } focus:ring-2 focus:ring-blue-200`}
              placeholder="seu@email.com"
            />
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Telefone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
            } focus:ring-2 focus:ring-blue-200`}
            placeholder="(00) 00000-0000"
          />
          {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Mensagem
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={isPageVariant ? 6 : 4}
            className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
              errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
            } focus:ring-2 focus:ring-blue-200`}
            placeholder="Descreva como podemos ajudá-lo..."
          />
          {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
          <p className="mt-1 text-gray-500 text-sm">
            {formData.message.length}/500 caracteres
          </p>
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
        >
          {loading ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar Mensagem
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
};