import { motion } from 'framer-motion';
import { 
  Monitor, Wifi, ShoppingCart, Smartphone, Clock, Package,
  Wrench, Network, Store, Phone, AlertCircle, Star,
  MapPin, CreditCard, CheckCircle, Server, Database,
  Shield, Code, Cloud, Cpu, HardDrive, Printer,
  Camera, Headphones, Globe, Lock, Settings,
  Zap, FileText, Users, TrendingUp, Video,
  Mail, MessageSquare, Layers, Terminal, GitBranch,
  Play, Mic, Radio, Tv, Volume2, Gauge, Bot,
  Blocks, Container, Workflow, Binary, Cog, Laptop
} from 'lucide-react';

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

export const serviceCategories = [
  {
    id: 'manutencao',
    title: 'Manutenção e Suporte Técnico',
    icon: <Monitor className="w-6 h-6" />,
    color: 'bg-blue-500',
    services: [
      { name: 'Formatação completa com backup de dados', price: 'R$ 70', icon: <HardDrive className="w-4 h-4" /> },
      { name: 'Formatação básica sem backup', price: 'R$ 50', icon: <HardDrive className="w-4 h-4" /> },
      // { name: 'Instalação PXE boot com múltiplas ISOs', price: 'R$ 80', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Instalação de programas e otimização', price: 'R$ 30', icon: <Settings className="w-4 h-4" /> },
      { name: 'Remoção de vírus e malware', price: 'R$ 45', icon: <Shield className="w-4 h-4" /> },
      { name: 'Troca de HD/SSD com clonagem', price: 'R$ 45', icon: <HardDrive className="w-4 h-4" /> },
      { name: 'Upgrade de memória RAM', price: 'R$ 25', icon: <Cpu className="w-4 h-4" /> },
      { name: 'Troca de fonte de alimentação', price: 'R$ 30', icon: <Zap className="w-4 h-4" /> },
      { name: 'Limpeza física e preventiva', price: 'R$ 25', icon: <Wrench className="w-4 h-4" /> },
      { name: 'Aplicação de pasta térmica', price: 'R$ 30', icon: <Cpu className="w-4 h-4" /> },
      { name: 'Montagem de PC completa', price: 'R$ 80', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Diagnóstico de hardware', price: 'R$ 35', icon: <Gauge className="w-4 h-4" /> },
      // { name: 'Recuperação de dados deletados', price: 'R$ 120', icon: <Database className="w-4 h-4" /> },
      // { name: 'Backup completo em nuvem', price: 'R$ 60', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Configuração de dual boot', price: 'R$ 60', icon: <Layers className="w-4 h-4" /> },
      { name: 'Instalação de drivers específicos', price: 'R$ 25', icon: <Settings className="w-4 h-4" /> },
      // { name: 'Instalação de SO via pendrive bootável', price: 'R$ 40', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Configuração de BIOS/UEFI', price: 'R$ 35', icon: <Settings className="w-4 h-4" /> },
      { name: 'Particionamento de disco', price: 'R$ 40', icon: <HardDrive className="w-4 h-4" /> },
      { name: 'Help Desk remoto', price: 'R$ 40/hora', icon: <Phone className="w-4 h-4" /> },
      { name: 'Help Desk presencial', price: 'R$ 50/hora', icon: <Users className="w-4 h-4" /> },
      { name: 'Consultoria técnica especializada', price: 'R$ 80/hora', icon: <TrendingUp className="w-4 h-4" /> },
      { name: 'Manutenção de notebook (limpeza interna)', price: 'R$ 60', icon: <Laptop className="w-4 h-4" /> },
      { name: 'Troca de tela de notebook', price: 'R$ 100', icon: <Laptop className="w-4 h-4" /> },
      // { name: 'Troca de teclado de notebook', price: 'R$ 70', icon: <Laptop className="w-4 h-4" /> }
    ]
  },
  {
    id: 'redes',
    title: 'Redes, Internet e Infraestrutura',
    icon: <Network className="w-6 h-6" />,
    color: 'bg-green-500',
    services: [
      { name: 'Configuração de roteador WiFi', price: 'R$ 40', icon: <Wifi className="w-4 h-4" /> },
      { name: 'Configuração de switch gerenciável', price: 'R$ 60', icon: <Network className="w-4 h-4" /> },
      { name: 'Instalação de Access Point', price: 'R$ 50', icon: <Wifi className="w-4 h-4" /> },
      { name: 'Configuração de Mesh Network', price: 'R$ 80', icon: <Globe className="w-4 h-4" /> },
      { name: 'Crimpagem de cabo de rede', price: 'R$ 8/ponta', icon: <Network className="w-4 h-4" /> },
      // { name: 'Certificação de ponto de rede', price: 'R$ 15/ponto', icon: <CheckCircle className="w-4 h-4" /> },
      { name: 'Passagem de cabo estruturado (até 30m)', price: 'R$ 120', icon: <Network className="w-4 h-4" /> },
      { name: 'Passagem de cabo estruturado (30-100m)', price: 'R$ 250', icon: <Network className="w-4 h-4" /> },
      { name: 'Projeto de rede (até 10 pontos)', price: 'R$ 150', icon: <FileText className="w-4 h-4" /> },
      { name: 'Projeto de rede (11-30 pontos)', price: 'R$ 300', icon: <FileText className="w-4 h-4" /> },
      { name: 'Projeto de rede (31+ pontos)', price: 'R$ 500', icon: <FileText className="w-4 h-4" /> },
      { name: 'Organização de rack 6U', price: 'R$ 100', icon: <Server className="w-4 h-4" /> },
      { name: 'Organização de rack 12U+', price: 'R$ 180', icon: <Server className="w-4 h-4" /> },
      { name: 'Configuração de VLAN', price: 'R$ 80', icon: <Layers className="w-4 h-4" /> },
      // { name: 'Configuração de VPN', price: 'R$ 100', icon: <Lock className="w-4 h-4" /> },
      // { name: 'Balanceamento de link', price: 'R$ 120', icon: <TrendingUp className="w-4 h-4" /> },
      // { name: 'Configuração de QoS', price: 'R$ 60', icon: <Gauge className="w-4 h-4" /> },
      // { name: 'Firewall básico', price: 'R$ 80', icon: <Shield className="w-4 h-4" /> },
      // { name: 'Firewall avançado (pfSense/OPNsense)', price: 'R$ 200', icon: <Shield className="w-4 h-4" /> },
      // { name: 'Diagnóstico de rede completo', price: 'R$ 100', icon: <Gauge className="w-4 h-4" /> },
      // { name: 'Site Survey WiFi', price: 'R$ 150', icon: <Wifi className="w-4 h-4" /> },
      // { name: 'Configuração de Mikrotik', price: 'R$ 120', icon: <Network className="w-4 h-4" /> },
      // { name: 'Configuração de Ubiquiti UniFi', price: 'R$ 100', icon: <Wifi className="w-4 h-4" /> },
      { name: 'Hotspot WiFi com portal captivo', price: 'R$ 150', icon: <Wifi className="w-4 h-4" /> },
      { name: 'Troubleshooting de problemas de rede', price: 'R$ 60', icon: <Wrench className="w-4 h-4" /> }
    ]
  },
/*   {
    id: 'cameras',
    title: 'Câmeras e Sistemas de Segurança',
    icon: <Camera className="w-6 h-6" />,
    color: 'bg-red-500',
    services: [
      { name: 'Instalação de câmera IP', price: 'R$ 80/un', icon: <Camera className="w-4 h-4" /> },
      { name: 'Instalação de câmera analógica', price: 'R$ 60/un', icon: <Camera className="w-4 h-4" /> },
      { name: 'Configuração de câmera PTZ', price: 'R$ 120/un', icon: <Camera className="w-4 h-4" /> },
      { name: 'Instalação de DVR/NVR', price: 'R$ 100', icon: <Server className="w-4 h-4" /> },
      { name: 'Configuração de acesso remoto', price: 'R$ 60', icon: <Globe className="w-4 h-4" /> },
      { name: 'Sistema de detecção facial (Python)', price: 'R$ 200', icon: <Users className="w-4 h-4" /> },
      { name: 'Detecção de movimento avançada', price: 'R$ 80', icon: <Zap className="w-4 h-4" /> },
      { name: 'Integração com alarme', price: 'R$ 100', icon: <AlertCircle className="w-4 h-4" /> },
      { name: 'Backup em nuvem de gravações', price: 'R$ 150', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Análise de vídeo com IA', price: 'R$ 300', icon: <Cpu className="w-4 h-4" /> },
      { name: 'Sistema de reconhecimento de placas', price: 'R$ 250', icon: <Camera className="w-4 h-4" /> },
      { name: 'Câmera térmica (configuração)', price: 'R$ 180', icon: <Camera className="w-4 h-4" /> },
      { name: 'Sistema de contagem de pessoas', price: 'R$ 200', icon: <Users className="w-4 h-4" /> },
      { name: 'Manutenção preventiva (4 câmeras)', price: 'R$ 80', icon: <Wrench className="w-4 h-4" /> },
      { name: 'Projeto CCTV completo', price: 'R$ 200', icon: <FileText className="w-4 h-4" /> },
      { name: 'Configuração de alarme residencial', price: 'R$ 100', icon: <AlertCircle className="w-4 h-4" /> },
      { name: 'Sensor de presença/movimento', price: 'R$ 40/un', icon: <Zap className="w-4 h-4" /> }
    ]
  }, */
  {
    id: 'desenvolvimento',
    title: 'Desenvolvimento de Software',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-purple-500',
    services: [
      { name: 'App Android modo quiosque', price: 'R$ 300', icon: <Smartphone className="w-4 h-4" /> },
      // { name: 'App React Native básico', price: 'R$ 500', icon: <Smartphone className="w-4 h-4" /> },
      // { name: 'App React Native avançado', price: 'R$ 1200', icon: <Smartphone className="w-4 h-4" /> },
      { name: 'Site React + Vite', price: 'R$ 400', icon: <Globe className="w-4 h-4" /> },
      { name: 'Dashboard com gráficos (Recharts)', price: 'R$ 350', icon: <TrendingUp className="w-4 h-4" /> },
      { name: 'Sistema de login (Firebase/Auth0)', price: 'R$ 200', icon: <Lock className="w-4 h-4" /> },
      { name: 'API REST em Node.js', price: 'R$ 400', icon: <Terminal className="w-4 h-4" /> },
      // { name: 'API GraphQL', price: 'R$ 500', icon: <Terminal className="w-4 h-4" /> },
      { name: 'Integração com API externa', price: 'R$ 150', icon: <GitBranch className="w-4 h-4" /> },
      { name: 'Site institucional básico', price: 'R$ 300', icon: <Globe className="w-4 h-4" /> },
      { name: 'Landing page otimizada', price: 'R$ 250', icon: <Globe className="w-4 h-4" /> },
      // { name: 'E-commerce básico', price: 'R$ 800', icon: <ShoppingCart className="w-4 h-4" /> },
      // { name: 'E-commerce avançado (checkout completo)', price: 'R$ 1500', icon: <ShoppingCart className="w-4 h-4" /> },
      { name: 'Sistema de agendamento', price: 'R$ 450', icon: <Clock className="w-4 h-4" /> },
      { name: 'Chatbot WhatsApp', price: 'R$ 350', icon: <MessageSquare className="w-4 h-4" /> },
      // { name: 'Automação Python', price: 'R$ 200', icon: <Terminal className="w-4 h-4" /> },
      { name: 'Web scraping', price: 'R$ 180', icon: <Globe className="w-4 h-4" /> },
      { name: 'Bot Discord/Telegram', price: 'R$ 250', icon: <Bot className="w-4 h-4" /> },
      // { name: 'Extensão Chrome/Firefox', price: 'R$ 300', icon: <Globe className="w-4 h-4" /> },
      { name: 'PWA (Progressive Web App)', price: 'R$ 500', icon: <Smartphone className="w-4 h-4" /> },
      { name: 'Migração de sistema legado', price: 'R$ 600', icon: <Database className="w-4 h-4" /> },
      { name: 'Sistema de gestão customizado', price: 'R$ 1500', icon: <Package className="w-4 h-4" /> },
      { name: 'Portal de notícias/blog', price: 'R$ 400', icon: <FileText className="w-4 h-4" /> },
      { name: 'Sistema de tickets/helpdesk', price: 'R$ 600', icon: <Phone className="w-4 h-4" /> },
      { name: 'Aplicativo desktop (C++)', price: 'R$ 700', icon: <Laptop className="w-4 h-4" /> }
    ]
  },
/*   {
    id: 'servidores',
    title: 'Servidores e Banco de Dados',
    icon: <Server className="w-6 h-6" />,
    color: 'bg-orange-500',
    services: [
      { name: 'Servidor Linux (Ubuntu/Debian)', price: 'R$ 120', icon: <Server className="w-4 h-4" /> },
      { name: 'Servidor Windows Server', price: 'R$ 150', icon: <Server className="w-4 h-4" /> },
      { name: 'Configuração Docker', price: 'R$ 100', icon: <Container className="w-4 h-4" /> },
      { name: 'Docker Compose multi-container', price: 'R$ 150', icon: <Layers className="w-4 h-4" /> },
      { name: 'Kubernetes básico (K3s/Microk8s)', price: 'R$ 250', icon: <Network className="w-4 h-4" /> },
      { name: 'Servidor Umbrel', price: 'R$ 120', icon: <Server className="w-4 h-4" /> },
      { name: 'PostgreSQL (instalação/config)', price: 'R$ 100', icon: <Database className="w-4 h-4" /> },
      { name: 'MySQL/MariaDB', price: 'R$ 80', icon: <Database className="w-4 h-4" /> },
      { name: 'MongoDB', price: 'R$ 100', icon: <Database className="w-4 h-4" /> },
      { name: 'Redis cache', price: 'R$ 80', icon: <Zap className="w-4 h-4" /> },
      { name: 'Backup automatizado de servidor', price: 'R$ 120', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Replicação de banco de dados', price: 'R$ 200', icon: <Database className="w-4 h-4" /> },
      { name: 'Servidor Jellyfin/Plex', price: 'R$ 80', icon: <Tv className="w-4 h-4" /> },
      { name: 'Servidor Minecraft', price: 'R$ 60', icon: <Play className="w-4 h-4" /> },
      { name: 'Servidor de jogos diversos', price: 'R$ 80', icon: <Play className="w-4 h-4" /> },
      { name: 'NAS (Network Attached Storage)', price: 'R$ 150', icon: <HardDrive className="w-4 h-4" /> },
      { name: 'Servidor de email (Postfix/Dovecot)', price: 'R$ 180', icon: <Mail className="w-4 h-4" /> },
      { name: 'Nginx/Apache config', price: 'R$ 60', icon: <Globe className="w-4 h-4" /> },
      { name: 'Proxy reverso', price: 'R$ 80', icon: <Shield className="w-4 h-4" /> },
      { name: 'Load balancer', price: 'R$ 120', icon: <TrendingUp className="w-4 h-4" /> },
      { name: 'Monitoramento (Grafana/Prometheus)', price: 'R$ 150', icon: <Gauge className="w-4 h-4" /> },
      { name: 'Servidor GitLab/Gitea', price: 'R$ 150', icon: <GitBranch className="w-4 h-4" /> },
      { name: 'Servidor FTP/SFTP', price: 'R$ 80', icon: <Server className="w-4 h-4" /> },
      { name: 'Hardening de servidor', price: 'R$ 150', icon: <Shield className="w-4 h-4" /> },
      { name: 'Servidor de VPN (OpenVPN/WireGuard)', price: 'R$ 120', icon: <Lock className="w-4 h-4" /> }
    ]
  }, */
/*   {
    id: 'automacao',
    title: 'Automação e Integração',
    icon: <Workflow className="w-6 h-6" />,
    color: 'bg-yellow-500',
    services: [
      { name: 'Automação n8n básica', price: 'R$ 150', icon: <Workflow className="w-4 h-4" /> },
      { name: 'Automação n8n avançada', price: 'R$ 300', icon: <Workflow className="w-4 h-4" /> },
      { name: 'Zapier/Make (Integromat)', price: 'R$ 120', icon: <GitBranch className="w-4 h-4" /> },
      { name: 'Integração WhatsApp Business API', price: 'R$ 200', icon: <MessageSquare className="w-4 h-4" /> },
      { name: 'Integração com CRM', price: 'R$ 250', icon: <Users className="w-4 h-4" /> },
      { name: 'Automação de email marketing', price: 'R$ 180', icon: <Mail className="w-4 h-4" /> },
      { name: 'Integração com planilhas Google', price: 'R$ 100', icon: <FileText className="w-4 h-4" /> },
      { name: 'Webhook personalizado', price: 'R$ 80', icon: <Globe className="w-4 h-4" /> },
      { name: 'Automação de redes sociais', price: 'R$ 200', icon: <MessageSquare className="w-4 h-4" /> },
      { name: 'Pipeline CI/CD básico', price: 'R$ 250', icon: <GitBranch className="w-4 h-4" /> },
      { name: 'GitHub Actions', price: 'R$ 150', icon: <GitBranch className="w-4 h-4" /> },
      { name: 'Automação de deploy', price: 'R$ 200', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Scripts de automação Shell/Bash', price: 'R$ 100', icon: <Terminal className="w-4 h-4" /> },
      { name: 'Scripts PowerShell', price: 'R$ 100', icon: <Terminal className="w-4 h-4" /> },
      { name: 'Automação com Python', price: 'R$ 150', icon: <Code className="w-4 h-4" /> },
      { name: 'RPA (Robotic Process Automation)', price: 'R$ 400', icon: <Bot className="w-4 h-4" /> },
      { name: 'Integração de pagamento (Stripe/PagSeguro)', price: 'R$ 250', icon: <CreditCard className="w-4 h-4" /> },
      { name: 'Automação de backup', price: 'R$ 120', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Sincronização de dados entre sistemas', price: 'R$ 200', icon: <Blocks className="w-4 h-4" /> },
      { name: 'Notificações automáticas (Telegram/Discord)', price: 'R$ 100', icon: <MessageSquare className="w-4 h-4" /> }
    ]
  }, */
/*   {
    id: 'empresas',
    title: 'Suporte Empresarial e PDV',
    icon: <Store className="w-6 h-6" />,
    color: 'bg-indigo-500',
    services: [
      { name: 'Configuração de balanças Toledo/Filizola', price: 'R$ 60/un', icon: <ShoppingCart className="w-4 h-4" /> },
      { name: 'Impressora fiscal (ECF/SAT)', price: 'R$ 80', icon: <Printer className="w-4 h-4" /> },
      { name: 'Impressora não fiscal', price: 'R$ 40', icon: <Printer className="w-4 h-4" /> },
      { name: 'Impressora de etiquetas', price: 'R$ 50', icon: <Printer className="w-4 h-4" /> },
      { name: 'Impressora térmica', price: 'R$ 45', icon: <Printer className="w-4 h-4" /> },
      { name: 'Configuração de PDV completo', price: 'R$ 120', icon: <Store className="w-4 h-4" /> },
      { name: 'Sistema ERP (instalação)', price: 'R$ 200', icon: <Package className="w-4 h-4" /> },
      { name: 'Sistema de NFe/NFCe', price: 'R$ 150', icon: <FileText className="w-4 h-4" /> },
      { name: 'Treinamento de sistema', price: 'R$ 80/hora', icon: <Users className="w-4 h-4" /> },
      { name: 'Leitor de código de barras', price: 'R$ 30', icon: <ShoppingCart className="w-4 h-4" /> },
      { name: 'Terminal de consulta', price: 'R$ 60', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Sistema de senhas', price: 'R$ 100', icon: <Clock className="w-4 h-4" /> },
      { name: 'Relógio ponto biométrico', price: 'R$ 120', icon: <Clock className="w-4 h-4" /> },
      { name: 'Central telefônica PABX IP', price: 'R$ 180', icon: <Phone className="w-4 h-4" /> },
      { name: 'Configuração de VOIP', price: 'R$ 100', icon: <Phone className="w-4 h-4" /> },
      { name: 'Sistema antifurto', price: 'R$ 150', icon: <Shield className="w-4 h-4" /> },
      { name: 'Totem de autoatendimento', price: 'R$ 200', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Check-up preventivo empresarial', price: 'R$ 150', icon: <CheckCircle className="w-4 h-4" /> },
      { name: 'Auditoria de TI', price: 'R$ 300', icon: <FileText className="w-4 h-4" /> },
      { name: 'Plano de contingência', price: 'R$ 250', icon: <Shield className="w-4 h-4" /> },
      { name: 'Inventário de equipamentos', price: 'R$ 150', icon: <FileText className="w-4 h-4" /> },
      { name: 'Sistema de gestão de estoque', price: 'R$ 400', icon: <Package className="w-4 h-4" /> },
      { name: 'Integração de e-commerce com loja física', price: 'R$ 350', icon: <ShoppingCart className="w-4 h-4" /> }
    ]
  }, */
  {
    id: 'audio-video',
    title: 'Áudio, Vídeo e Streaming',
    icon: <Video className="w-6 h-6" />,
    color: 'bg-pink-500',
    services: [
      { name: 'Transmissão ao vivo (setup)', price: 'R$ 150', icon: <Radio className="w-4 h-4" /> },
      { name: 'Configuração OBS Studio', price: 'R$ 80', icon: <Video className="w-4 h-4" /> },
      { name: 'Streaming multi-plataforma', price: 'R$ 120', icon: <Tv className="w-4 h-4" /> },
      { name: 'Sistema de som para Live', price: 'R$ 200', icon: <Volume2 className="w-4 h-4" /> },
      // { name: 'Sistema de som para evento', price: 'R$ 250', icon: <Volume2 className="w-4 h-4" /> },
      // { name: 'Mesa de som digital', price: 'R$ 100', icon: <Volume2 className="w-4 h-4" /> },
      { name: 'Projetor e tela', price: 'R$ 60', icon: <Tv className="w-4 h-4" /> },
      // { name: 'Sistema de TV corporativa', price: 'R$ 150', icon: <Tv className="w-4 h-4" /> },
      { name: 'Videowall configuração', price: 'R$ 250', icon: <Monitor className="w-4 h-4" /> },
      // { name: 'Captura de vídeo HDMI', price: 'R$ 60', icon: <Video className="w-4 h-4" /> },
      { name: 'Edição de vídeo básica', price: 'R$ 100', icon: <Video className="w-4 h-4" /> },
      { name: 'Conversão de formatos de vídeo', price: 'R$ 30', icon: <Video className="w-4 h-4" /> },
      // { name: 'Digitalização de VHS/DVD', price: 'R$ 50', icon: <Video className="w-4 h-4" /> },
      // { name: 'Sistema de videoconferência', price: 'R$ 120', icon: <Video className="w-4 h-4" /> },
      // { name: 'Automação YouTube/Facebook', price: 'R$ 200', icon: <Play className="w-4 h-4" /> },
      // { name: 'Podcast setup completo', price: 'R$ 180', icon: <Mic className="w-4 h-4" /> },
      // { name: 'Tratamento acústico básico', price: 'R$ 150', icon: <Headphones className="w-4 h-4" /> },
      // { name: 'Sistema de som ambiente', price: 'R$ 120', icon: <Volume2 className="w-4 h-4" /> },
      // { name: 'Configuração de microfone profissional', price: 'R$ 60', icon: <Mic className="w-4 h-4" /> },
      // { name: 'Conversão de áudio para diferentes formatos', price: 'R$ 25', icon: <Headphones className="w-4 h-4" /> },
      // { name: 'Sistema de sinalização digital', price: 'R$ 100', icon: <Tv className="w-4 h-4" /> }
    ]
  },
  /* {
    id: 'cloud',
    title: 'Cloud e Serviços Online',
    icon: <Cloud className="w-6 h-6" />,
    color: 'bg-cyan-500',
    services: [
      { name: 'Migração para nuvem', price: 'R$ 200', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Google Workspace setup', price: 'R$ 150', icon: <Mail className="w-4 h-4" /> },
      { name: 'Microsoft 365 setup', price: 'R$ 150', icon: <Mail className="w-4 h-4" /> },
      { name: 'AWS EC2 básico', price: 'R$ 180', icon: <Server className="w-4 h-4" /> },
      { name: 'Google Cloud Platform', price: 'R$ 180', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Azure básico', price: 'R$ 180', icon: <Cloud className="w-4 h-4" /> },
      { name: 'DigitalOcean Droplet', price: 'R$ 120', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Cloudflare CDN e proteção', price: 'R$ 80', icon: <Globe className="w-4 h-4" /> },
      { name: 'Backup em nuvem automatizado', price: 'R$ 100', icon: <Cloud className="w-4 h-4" /> },
      { name: 'NextCloud/OwnCloud', price: 'R$ 120', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Domínio e DNS', price: 'R$ 60', icon: <Globe className="w-4 h-4" /> },
      { name: 'Certificado SSL/TLS', price: 'R$ 50', icon: <Lock className="w-4 h-4" /> },
      { name: 'Email corporativo', price: 'R$ 80', icon: <Mail className="w-4 h-4" /> },
      { name: 'VPS configuração', price: 'R$ 150', icon: <Server className="w-4 h-4" /> },
      { name: 'cPanel/Plesk setup', price: 'R$ 100', icon: <Settings className="w-4 h-4" /> },
      { name: 'Migração de hospedagem', price: 'R$ 120', icon: <Cloud className="w-4 h-4" /> },
      { name: 'S3/Object Storage', price: 'R$ 100', icon: <Database className="w-4 h-4" /> },
      { name: 'CDN + Cache otimizado', price: 'R$ 120', icon: <Zap className="w-4 h-4" /> },
      { name: 'Serverless Functions', price: 'R$ 150', icon: <Cloud className="w-4 h-4" /> }
    ]
  }, */
/*   {
    id: 'seguranca',
    title: 'Segurança e Compliance',
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-red-600',
    services: [
      { name: 'Antivírus empresarial', price: 'R$ 60', icon: <Shield className="w-4 h-4" /> },
      { name: 'Teste de penetração básico', price: 'R$ 300', icon: <Lock className="w-4 h-4" /> },
      { name: 'Auditoria de segurança', price: 'R$ 400', icon: <FileText className="w-4 h-4" /> },
      { name: 'LGPD adequação básica', price: 'R$ 250', icon: <Shield className="w-4 h-4" /> },
      { name: 'Política de segurança da informação', price: 'R$ 200', icon: <FileText className="w-4 h-4" /> },
      { name: 'Criptografia de dados', price: 'R$ 100', icon: <Lock className="w-4 h-4" /> },
      { name: 'Autenticação 2FA/MFA', price: 'R$ 80', icon: <Lock className="w-4 h-4" /> },
      { name: 'Gestão de senhas empresarial', price: 'R$ 120', icon: <Lock className="w-4 h-4" /> },
      { name: 'Backup criptografado', price: 'R$ 150', icon: <Shield className="w-4 h-4" /> },
      { name: 'Recuperação de ransomware', price: 'R$ 500', icon: <AlertCircle className="w-4 h-4" /> },
      { name: 'Forense digital básica', price: 'R$ 400', icon: <Shield className="w-4 h-4" /> },
      { name: 'Monitoramento de segurança', price: 'R$ 200/mês', icon: <Gauge className="w-4 h-4" /> },
      { name: 'WAF (Web Application Firewall)', price: 'R$ 150', icon: <Shield className="w-4 h-4" /> },
      { name: 'IDS/IPS (Detecção de intrusão)', price: 'R$ 200', icon: <Shield className="w-4 h-4" /> },
      { name: 'Scan de vulnerabilidades', price: 'R$ 180', icon: <Gauge className="w-4 h-4" /> },
      { name: 'Hardening de sistema', price: 'R$ 150', icon: <Lock className="w-4 h-4" /> }
    ]
  }, */
  {
    id: 'treinamento',
    title: 'Treinamento e Capacitação',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-teal-500',
    services: [
      { name: 'Informática básica', price: 'R$ 60/hora', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Excel básico ao avançado', price: 'R$ 80/hora', icon: <FileText className="w-4 h-4" /> },
      { name: 'Pacote Office completo', price: 'R$ 70/hora', icon: <FileText className="w-4 h-4" /> },
      { name: 'Linux para iniciantes', price: 'R$ 90/hora', icon: <Terminal className="w-4 h-4" /> },
      { name: 'Programação básica (Python/JavaScript)', price: 'R$ 100/hora', icon: <Code className="w-4 h-4" /> },
      { name: 'Git e versionamento', price: 'R$ 80/hora', icon: <GitBranch className="w-4 h-4" /> },
      { name: 'Docker para desenvolvedores', price: 'R$ 120/hora', icon: <Container className="w-4 h-4" /> },
      { name: 'Segurança digital pessoal', price: 'R$ 60/hora', icon: <Shield className="w-4 h-4" /> },
      { name: 'Redes sociais para negócios', price: 'R$ 70/hora', icon: <MessageSquare className="w-4 h-4" /> },
      { name: 'Marketing digital básico', price: 'R$ 80/hora', icon: <TrendingUp className="w-4 h-4" /> },
      // { name: 'Wordpress do zero', price: 'R$ 90/hora', icon: <Globe className="w-4 h-4" /> },
      // { name: 'Treinamento de sistema customizado', price: 'R$ 100/hora', icon: <Settings className="w-4 h-4" /> },
      { name: 'React/React Native', price: 'R$ 120/hora', icon: <Code className="w-4 h-4" /> },
      { name: 'Node.js e APIs', price: 'R$ 120/hora', icon: <Terminal className="w-4 h-4" /> },
      { name: 'SQL e bancos de dados', price: 'R$ 100/hora', icon: <Database className="w-4 h-4" /> },
      { name: 'Photoshop/Design gráfico', price: 'R$ 80/hora', icon: <Monitor className="w-4 h-4" /> }
    ]
  },
  {
    id: 'microservicos',
    title: 'Microserviços e Soluções Personalizadas',
    icon: <Blocks className="w-6 h-6" />,
    color: 'bg-violet-500',
    services: [
      { name: 'Conversão de documentos (PDF, Word, etc)', price: 'R$ 20', icon: <FileText className="w-4 h-4" /> },
      { name: 'Extração de dados de PDFs', price: 'R$ 20', icon: <FileText className="w-4 h-4" /> },
      { name: 'Geração automática de relatórios', price: 'R$ 150', icon: <FileText className="w-4 h-4" /> },
      { name: 'Validação de CPF/CNPJ em massa', price: 'R$ 50', icon: <CheckCircle className="w-4 h-4" /> },
      { name: 'Geração de QR Codes personalizados', price: 'R$ 40', icon: <Binary className="w-4 h-4" /> },
      // { name: 'Envio de SMS em massa', price: 'R$ 120', icon: <MessageSquare className="w-4 h-4" /> },
      // { name: 'Assinatura digital de documentos', price: 'R$ 100', icon: <FileText className="w-4 h-4" /> },
      // { name: 'OCR (reconhecimento de texto em imagens)', price: 'R$ 80', icon: <Camera className="w-4 h-4" /> },
      // { name: 'Compressão de imagens em lote', price: 'R$ 50', icon: <Camera className="w-4 h-4" /> },
      // { name: 'Conversão de moedas/câmbio API', price: 'R$ 60', icon: <TrendingUp className="w-4 h-4" /> },
      // { name: 'Encurtador de URLs personalizado', price: 'R$ 100', icon: <Globe className="w-4 h-4" /> },
      // { name: 'Sistema de cupons/vouchers', price: 'R$ 150', icon: <ShoppingCart className="w-4 h-4" /> },
      // { name: 'Calculadora personalizada', price: 'R$ 80', icon: <Cog className="w-4 h-4" /> },
      // { name: 'Gerador de certificados', price: 'R$ 120', icon: <FileText className="w-4 h-4" /> },
      // { name: 'Sistema de avaliações/reviews', price: 'R$ 150', icon: <Star className="w-4 h-4" /> },
      // { name: 'Painel de controle IoT', price: 'R$ 300', icon: <Zap className="w-4 h-4" /> },
      // { name: 'Monitor de uptime/disponibilidade', price: 'R$ 120', icon: <Gauge className="w-4 h-4" /> },
      // { name: 'Sistema de log centralizado', price: 'R$ 180', icon: <FileText className="w-4 h-4" /> },
      // { name: 'API Gateway customizada', price: 'R$ 250', icon: <Network className="w-4 h-4" /> },
      // { name: 'Middleware personalizado', price: 'R$ 150', icon: <Layers className="w-4 h-4" /> }
    ]
  }
];

const emergencyService = {
  title: 'Atendimento Emergencial / Fora de Horário',
  description: 'Atendimento após as 22h, finais de semana ou urgências',
  surcharge: '+30% sobre o valor do serviço'
};

const monthlyPackages = [
  {
    name: 'Básico',
    price: 'R$ 250',
    description: 'até 4 chamados presenciais ou remotos/mês',
    features: ['4 chamados/mês', 'Suporte remoto', 'Suporte presencial', 'Prioridade normal', 'Resposta em até 24h']
  },
  {
    name: 'Intermediário',
    price: 'R$ 450',
    description: 'até 8 chamados',
    features: ['8 chamados/mês', 'Suporte remoto', 'Suporte presencial', 'Prioridade alta', 'Resposta em até 12h', 'Relatório mensal']
  },
  {
    name: 'Avançado',
    price: 'R$ 650',
    description: 'ilimitado remoto + até 12 presenciais',
    features: ['Chamados ilimitados remotos', '12 chamados presenciais/mês', 'Prioridade máxima', 'Resposta em até 4h', 'Desconto em serviços extras', 'Relatório detalhado mensal']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="pt-20 bg-gray-50">
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Catálogo Completo de Serviços de TI
            </h1>
            <p className="text-xl mb-2">
              Suporte Técnico, Desenvolvimento, Redes, Infraestrutura e Soluções Empresariais
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-lg">Técnico formado com anos de experiência</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {serviceCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`${category.color} p-6`}>
                  <div className="flex items-center gap-4 text-white">
                    <div className="p-3 bg-white/20 rounded-xl">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white rounded-lg text-gray-600">
                            {service.icon}
                          </div>
                          <span className="font-medium text-gray-800">{service.name}</span>
                        </div>
                        <span className="font-bold text-lg text-green-600 whitespace-nowrap ml-2">{service.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-red-100 rounded-xl">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-600">{emergencyService.title}</h3>
                <p className="text-gray-600">{emergencyService.description}</p>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-xl">
              <span className="text-lg font-bold text-red-700">{emergencyService.surcharge}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Pacotes Mensais para Empresas</h2>
            <p className="text-gray-600">Planos sob medida para manter sua empresa sempre funcionando</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {monthlyPackages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${
                  index === 1 ? 'border-blue-500 transform scale-105' : 'border-gray-200'
                }`}
              >
                {index === 1 && (
                  <div className="bg-blue-500 text-white text-center py-2 px-4 rounded-full text-sm font-bold mb-4">
                    MAIS POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 py-3 rounded-xl font-bold transition-colors ${
                    index === 1
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Contratar Plano
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Nossos Diferenciais</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Experiência Comprovada</h3>
                <p className="text-gray-600">
                  Técnico formado em Informática com anos de experiência em supermercados, empresas e restaurantes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Soluções Rápidas</h3>
                <p className="text-gray-600">
                  Atendemos com soluções rápidas e eficientes, sempre buscando o melhor custo-benefício.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Qualidade Garantida</h3>
                <p className="text-gray-600">
                  Trabalhos realizados com profissionalismo, compromisso e qualidade garantida.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                Forma de Atendimento
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <strong>Presencial:</strong> Floriano e região
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <strong>Remoto:</strong> Todo Brasil (via WhatsApp, AnyDesk ou TeamViewer)
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-green-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-green-600" />
                Formas de Pagamento
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Pix</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Dinheiro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Boleto</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Transferência</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                Precisa de suporte técnico profissional?
              </h3>
              <p className="text-lg mb-6">
                Entre em contato e solicite um orçamento personalizado para suas necessidades
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Solicitar Orçamento
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}