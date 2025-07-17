import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useFirebase } from '../hooks/useFirebase';

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const services = [
  'Desenvolvimento Web',
  'Desenvolvimento Mobile',
  'Cloud Solutions',
  'Gestão de Dados',
  'Segurança Digital',
  'Infraestrutura',
  'Suporte Técnico',
  'Consultoria'
];

export const AppointmentScheduler: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<AppointmentData>>({});
  
  const { bookAppointment, getAvailableSlots, loading, error } = useFirebase();

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Get maximum date (3 months from now)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    return maxDate.toISOString().split('T')[0];
  };

  // Load available slots when date changes
  useEffect(() => {
    if (formData.date) {
      loadAvailableSlots(formData.date);
    }
  }, [formData.date]);

  const loadAvailableSlots = async (date: string) => {
    const slots = await getAvailableSlots(date);
    setAvailableSlots(slots);
    
    // Clear selected time if it's no longer available
    if (formData.time && !slots.includes(formData.time)) {
      setFormData(prev => ({ ...prev, time: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<AppointmentData> = {};

    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.service) newErrors.service = 'Selecione um serviço';
    if (!formData.date) newErrors.date = 'Selecione uma data';
    if (!formData.time) newErrors.time = 'Selecione um horário';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof AppointmentData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const success = await bookAppointment(formData);
    
    if (success) {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
      setAvailableSlots([]);
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const formatTimeSlot = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${period}`;
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Agendar Consulta</h2>
        <p className="text-gray-600">
          Escolha o melhor horário para conversarmos sobre seu projeto
        </p>
      </div>

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
              <p className="text-green-800 font-medium">Agendamento realizado com sucesso!</p>
              <p className="text-green-700 text-sm">Entraremos em contato para confirmar.</p>
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
            <p className="text-red-800">{error || 'Erro ao processar agendamento'}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <label className="block text-gray-700 font-medium mb-2">
              Serviço de Interesse
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                errors.service ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
              } focus:ring-2 focus:ring-blue-200`}
            >
              <option value="">Selecione um serviço</option>
              {services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
            {errors.service && <p className="mt-1 text-red-500 text-sm">{errors.service}</p>}
          </div>
        </div>

        {/* Date and Time Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Data Preferida
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              min={getMinDate()}
              max={getMaxDate()}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                errors.date ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
              } focus:ring-2 focus:ring-blue-200`}
            />
            {errors.date && <p className="mt-1 text-red-500 text-sm">{errors.date}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Horário Disponível
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              disabled={!formData.date || availableSlots.length === 0}
              className={`w-full px-4 py-3 rounded-lg border transition-colors disabled:opacity-50 ${
                errors.time ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
              } focus:ring-2 focus:ring-blue-200`}
            >
              <option value="">
                {!formData.date ? 'Selecione uma data primeiro' : 
                 availableSlots.length === 0 ? 'Nenhum horário disponível' : 
                 'Selecione um horário'}
              </option>
              {availableSlots.map(slot => (
                <option key={slot} value={slot}>
                  {formatTimeSlot(slot)}
                </option>
              ))}
            </select>
            {errors.time && <p className="mt-1 text-red-500 text-sm">{errors.time}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Mensagem (Opcional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            placeholder="Conte-nos mais sobre seu projeto ou necessidades específicas..."
          />
        </div>

        {/* Submit Button */}
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
              Agendando...
            </>
          ) : (
            <>
              <Calendar className="w-5 h-5" />
              Confirmar Agendamento
            </>
          )}
        </motion.button>
      </form>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-medium text-blue-800 mb-2">Informações Importantes:</h4>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>• Horário de atendimento: Segunda a Sexta, 9h às 18h</li>
          <li>• Confirmaremos seu agendamento por email ou telefone</li>
          <li>• Consultas podem ser presenciais ou remotas</li>
          <li>• Cancelamentos devem ser feitos com 24h de antecedência</li>
        </ul>
      </div>
    </div>
  );
};