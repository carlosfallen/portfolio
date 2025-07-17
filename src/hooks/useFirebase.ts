import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  Timestamp,
  DocumentData 
} from 'firebase/firestore';
import { db } from '../config/firebase';

export interface NewsletterSubscriber {
  id?: string;
  email: string;
  subscribedAt: Timestamp;
  isActive: boolean;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Timestamp;
  status: 'new' | 'read' | 'replied';
}

export interface Appointment {
  id?: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Timestamp;
}

export const useFirebase = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Newsletter functions
  const subscribeToNewsletter = async (email: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      // Check if email already exists
      const q = query(
        collection(db, 'newsletter_subscribers'),
        where('email', '==', email)
      );
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        setError('Este email já está cadastrado em nossa newsletter');
        return false;
      }

      // Add new subscriber
      await addDoc(collection(db, 'newsletter_subscribers'), {
        email,
        subscribedAt: Timestamp.now(),
        isActive: true
      });

      return true;
    } catch (err) {
      setError('Erro ao cadastrar email. Tente novamente.');
      console.error('Newsletter subscription error:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Contact form functions
  const submitContactForm = async (contactData: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      await addDoc(collection(db, 'contact_messages'), {
        ...contactData,
        createdAt: Timestamp.now(),
        status: 'new'
      });

      return true;
    } catch (err) {
      setError('Erro ao enviar mensagem. Tente novamente.');
      console.error('Contact form error:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Appointment functions
  const bookAppointment = async (appointmentData: Omit<Appointment, 'id' | 'createdAt' | 'status'>): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      // Check for existing appointments at the same date/time
      const q = query(
        collection(db, 'appointments'),
        where('date', '==', appointmentData.date),
        where('time', '==', appointmentData.time),
        where('status', '!=', 'cancelled')
      );
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        setError('Este horário já está ocupado. Escolha outro horário.');
        return false;
      }

      await addDoc(collection(db, 'appointments'), {
        ...appointmentData,
        createdAt: Timestamp.now(),
        status: 'pending'
      });

      return true;
    } catch (err) {
      setError('Erro ao agendar. Tente novamente.');
      console.error('Appointment booking error:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const getAvailableSlots = async (date: string): Promise<string[]> => {
    try {
      const q = query(
        collection(db, 'appointments'),
        where('date', '==', date),
        where('status', '!=', 'cancelled')
      );
      const querySnapshot = await getDocs(q);
      
      const bookedTimes = querySnapshot.docs.map(doc => doc.data().time);
      
      // Available time slots (9 AM to 6 PM)
      const allSlots = [
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
      ];
      
      return allSlots.filter(slot => !bookedTimes.includes(slot));
    } catch (err) {
      console.error('Error fetching available slots:', err);
      return [];
    }
  };

  return {
    loading,
    error,
    subscribeToNewsletter,
    submitContactForm,
    bookAppointment,
    getAvailableSlots
  };
};