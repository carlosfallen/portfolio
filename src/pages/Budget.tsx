import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Check, AlertCircle, Calendar } from 'lucide-react';
import { AppointmentScheduler } from '../components/AppointmentScheduler';

interface BudgetProps {
  onNavigate?: (page: string) => void;
}

type FormData = {
  company: string;
  name: string;
  email: string;
  phone: string;
  budget: string;
  deadline: string;
  services: string[];
  description: string;
};

const services = [
  "Desenvolvimento Web",
  "Desenvolvimento Mobile",
  "Cloud Solutions",
  "Gestão de Dados",
  "Segurança Digital",
  "Infraestrutura",
  "Suporte Técnico",
  "Consultoria"
];

export function Budget({ onNavigate }: BudgetProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showScheduler, setShowScheduler] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Solicite um Orçamento</h1>
            <p className="text-xl text-gray-600">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas
            </p>
            
            {/* Toggle Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={() => setShowScheduler(false)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  !showScheduler 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
              </motion.button>
              <motion.button
                onClick={() => setShowScheduler(true)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  showScheduler 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-4 h-4" />
                Agendar Consulta
              </motion.button>
            </div>
          </motion.div>

          {showScheduler ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AppointmentScheduler />
            </motion.div>
          ) : (
            <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-gray-50 p-8 rounded-xl"
          >
            {/* Company Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Empresa</label>
                <input
                  {...register("company", { required: "Nome da empresa é obrigatório" })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.company ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
                  placeholder="Nome da sua empresa"
                />
                {errors.company && (
                  <p className="mt-1 text-red-500 text-sm">{errors.company.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Seu Nome</label>
                <input
                  {...register("name", { required: "Seu nome é obrigatório" })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  {...register("email", {
                    required: "Email é obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido"
                    }
                  })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Telefone</label>
                <input
                  {...register("phone", {
                    required: "Telefone é obrigatório",
                    pattern: {
                      value: /^\(\d{2}\) \d{5}-\d{4}$/,
                      message: "Formato: (00) 00000-0000"
                    }
                  })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
                  placeholder="(00) 00000-0000"
                />
                {errors.phone && (
                  <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Orçamento Previsto</label>
                <select
                  {...register("budget", { required: "Selecione uma faixa de orçamento" })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.budget ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
                >
                  <option value="">Selecione uma faixa</option>
                  <option value="ate-5k">Até R$ 5.000</option>
                  <option value="5k-15k">R$ 5.000 - R$ 15.000</option>
                  <option value="15k-30k">R$ 15.000 - R$ 30.000</option>
                  <option value="30k-50k">R$ 30.000 - R$ 50.000</option>
                  <option value="acima-50k">Acima de R$ 50.000</option>
                </select>
                {errors.budget && (
                  <p className="mt-1 text-red-500 text-sm">{errors.budget.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Prazo Desejado</label>
                <select
                  {...register("deadline", { required: "Selecione um prazo" })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.deadline ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
                >
                  <option value="">Selecione um prazo</option>
                  <option value="urgente">Urgente (até 1 mês)</option>
                  <option value="curto">Curto (1-3 meses)</option>
                  <option value="medio">Médio (3-6 meses)</option>
                  <option value="longo">Longo (6+ meses)</option>
                </select>
                {errors.deadline && (
                  <p className="mt-1 text-red-500 text-sm">{errors.deadline.message}</p>
                )}
              </div>
            </div>

            {/* Services */}
            <div>
              <label className="block text-gray-700 mb-2">Serviços de Interesse</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <label key={service} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      {...register("services", { required: "Selecione pelo menos um serviço" })}
                      value={service}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
              {errors.services && (
                <p className="mt-1 text-red-500 text-sm">{errors.services.message}</p>
              )}
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-gray-700 mb-2">Descrição do Projeto</label>
              <textarea
                {...register("description", { required: "Descreva seu projeto" })}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border ${errors.description ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors`}
                placeholder="Descreva os detalhes do seu projeto..."
              />
              {errors.description && (
                <p className="mt-1 text-red-500 text-sm">{errors.description.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                'Enviar Solicitação'
              )}
            </motion.button>

            {/* Status Messages */}
            <AnimatedStatusMessage status={submitStatus} />
          </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}

function AnimatedStatusMessage({ status }: { status: 'idle' | 'success' | 'error' }) {
  if (status === 'idle') return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={`p-4 rounded-lg ${
        status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}
    >
      <div className="flex items-center">
        {status === 'success' ? (
          <Check className="w-5 h-5 mr-2" />
        ) : (
          <AlertCircle className="w-5 h-5 mr-2" />
        )}
        <span>
          {status === 'success'
            ? 'Solicitação enviada com sucesso! Entraremos em contato em breve.'
            : 'Erro ao enviar solicitação. Por favor, tente novamente.'}
        </span>
      </div>
    </motion.div>
  );
}