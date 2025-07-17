import { motion } from 'framer-motion';
import { Award, Users, Target, Rocket } from 'lucide-react';

interface AboutProps {
  onNavigate?: (page: string) => void;
}

const stats = [
  { icon: <Users />, value: "500+", label: "Clientes Satisfeitos" },
  { icon: <Award />, value: "50+", label: "Prêmios Conquistados" },
  { icon: <Target />, value: "98%", label: "Taxa de Sucesso" },
  { icon: <Rocket />, value: "1000+", label: "Projetos Entregues" }
];

const team = [
  {
    name: "Carlos Augusto",
    role: "CEO & Fundador",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Taiza Viana",
    role: "CFO & CSO (Diretora de Planejamento e Finanças)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  }
];

export function About({ onNavigate }: AboutProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa História</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Desde 2023, a CarlosTech tem focado em soluções tecnológicas inovadoras,
              ajudando empresas a transformar seus desafios em oportunidades de crescimento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center"
                >
                  {stat.icon}
                </motion.div>
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl font-bold mb-2"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-gray-600 leading-relaxed">
                Transformar o mundo através da tecnologia, oferecendo soluções inovadoras
                que impulsionam o sucesso de nossos clientes e contribuem para um futuro
                mais digital e conectado.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como referência global em soluções tecnológicas,
                mantendo sempre nosso compromisso com a inovação, qualidade e
                satisfação do cliente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Nossa Equipe
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}