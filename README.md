# CarlosTech - Sistema Web Completo com Firebase

## 🚀 Visão Geral

Sistema web moderno e responsivo desenvolvido em React com integração completa ao Firebase, oferecendo funcionalidades avançadas de newsletter, agendamento e contato.

## ✨ Funcionalidades Implementadas

### 🔥 Integração Firebase
- **Firestore Database**: Armazenamento de dados em tempo real
- **Authentication**: Sistema de autenticação (preparado)
- **Cloud Functions**: Funções serverless (preparado)
- **Security Rules**: Regras de segurança configuradas

### 📧 Sistema de Newsletter
- Validação de email em tempo real
- Verificação de duplicatas
- Feedback visual de sucesso/erro
- Integração com Firestore
- Interface responsiva

### 📅 Agendamento de Consultas
- Seleção de data e horário
- Verificação de disponibilidade
- Validação de formulário completa
- Confirmação por email/telefone
- Interface intuitiva com calendário

### 💬 Sistema de Contato
- Formulário completo com validação
- Múltiplos canais de contato
- Armazenamento seguro de mensagens
- Feedback imediato ao usuário
- Design responsivo

## 🛠️ Tecnologias Utilizadas

- **React 18** com TypeScript
- **Firebase v9+** (Firestore, Auth, Functions)
- **Framer Motion** para animações
- **Tailwind CSS** para estilização
- **React Hook Form** para formulários
- **Lucide React** para ícones

## 📦 Instalação e Configuração

### 1. Configuração do Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Ative o Firestore Database
3. Configure as regras de segurança (arquivo `firestore.rules` incluído)
4. Obtenha as credenciais do projeto

### 2. Configuração do Projeto

```bash
# Instalar dependências
npm install

# Configurar Firebase
# Edite src/config/firebase.ts com suas credenciais
```

### 3. Configuração do Firebase

Edite o arquivo `src/config/firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: "sua-api-key",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-project-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "seu-app-id"
};
```

### 4. Executar o Projeto

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🔧 Estrutura do Projeto

```
src/
├── components/
│   ├── Newsletter.tsx          # Sistema de newsletter
│   ├── AppointmentScheduler.tsx # Agendamento
│   ├── ContactForm.tsx         # Formulário de contato
│   ├── LoadingSpinner.tsx      # Componente de loading
│   └── ...
├── hooks/
│   ├── useFirebase.ts          # Hook principal do Firebase
│   └── useLocalStorage.ts      # Hook para localStorage
├── config/
│   └── firebase.ts             # Configuração do Firebase
├── utils/
│   └── validation.ts           # Utilitários de validação
└── pages/
    └── ...
```

## 🎨 Componentes Principais

### Newsletter
```tsx
<Newsletter variant="footer" />
<Newsletter variant="standalone" />
```

### Agendamento
```tsx
<AppointmentScheduler />
```

### Formulário de Contato
```tsx
<ContactForm variant="page" />
<ContactForm variant="modal" onSuccess={() => {}} />
```

## 🔒 Segurança

- Regras do Firestore configuradas
- Validação client-side e server-side
- Sanitização de inputs
- Rate limiting (preparado)

## 📱 Responsividade

- Design mobile-first
- Breakpoints otimizados
- Componentes adaptativos
- Performance otimizada

## 🚀 Deploy

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Netlify/Vercel
- Build command: `npm run build`
- Publish directory: `dist`

## 📊 Funcionalidades Avançadas

### Validação de Formulários
- Validação em tempo real
- Mensagens de erro personalizadas
- Feedback visual imediato

### Animações
- Transições suaves com Framer Motion
- Loading states animados
- Micro-interações

### UX/UI
- Design system consistente
- Estados de loading
- Feedback de sucesso/erro
- Acessibilidade

## 🔄 Próximos Passos

- [ ] Implementar autenticação de usuários
- [ ] Dashboard administrativo
- [ ] Notificações push
- [ ] Integração com calendário
- [ ] Sistema de pagamentos
- [ ] Analytics avançado

## 📞 Suporte

Para dúvidas ou suporte:
- Email: ca88321499@gmail.com
- WhatsApp: (89) 99433-3316

---

**Desenvolvido com ❤️ pela CarlosTech**