import { useEffect, useRef, useState } from 'react';

const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecção de dispositivo móvel
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
      return mobile;
    };

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let frameCount = 0;
    const mobile = checkMobile();
    
    // Configurações otimizadas para mobile
    const config = {
      particleCount: mobile ? 25 : 60,
      connectionDistance: mobile ? 100 : 150,
      maxParticles: mobile ? 35 : 100,
      animationThrottle: mobile ? 2 : 1, // Pula alguns frames no mobile
      interactionDistance: mobile ? 80 : 150,
      dampening: mobile ? 0.96 : 0.99, // Menos dampening no mobile para resposta melhor ao scroll
      forceMultiplier: mobile ? 0.005 : 0.01
    };

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      // Reduz resolução no mobile para melhor performance
      const pixelRatio = mobile ? 1 : window.devicePixelRatio || 1;
      canvas.width = rect.width * pixelRatio;
      canvas.height = rect.height * pixelRatio;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(pixelRatio, pixelRatio);
    };

    class Particle {
      constructor() {
        this.x = Math.random() * (canvas.width / (mobile ? 1 : window.devicePixelRatio || 1));
        this.y = Math.random() * (canvas.height / (mobile ? 1 : window.devicePixelRatio || 1));
        this.vx = (Math.random() - 0.5) * (mobile ? 0.1 : 0.2);
        this.vy = (Math.random() - 0.5) * (mobile ? 0.1 : 0.2);
        this.radius = mobile ? 1.5 : 2;
        this.opacity = mobile ? 0.6 : 0.5;
      }

      update() {
        this.vx *= config.dampening;
        this.vy *= config.dampening;
        
        this.x += this.vx;
        this.y += this.vy;

        const canvasWidth = canvas.width / (mobile ? 1 : window.devicePixelRatio || 1);
        const canvasHeight = canvas.height / (mobile ? 1 : window.devicePixelRatio || 1);

        if (this.x < 0 || this.x > canvasWidth) {
          this.vx = -this.vx * 0.8;
          this.x = Math.max(0, Math.min(canvasWidth, this.x));
        }
        if (this.y < 0 || this.y > canvasHeight) {
          this.vy = -this.vy * 0.8;
          this.y = Math.max(0, Math.min(canvasHeight, this.y));
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const canvasWidth = canvas.width / (mobile ? 1 : window.devicePixelRatio || 1);
      const particleCount = Math.min(
        Math.floor(canvasWidth * (mobile ? 0.02 : 0.05)), 
        config.maxParticles
      );
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      // Otimização: reduz o número de conexões verificadas no mobile
      const maxConnections = mobile ? 3 : 5;
      
      for (let i = 0; i < particles.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < particles.length && connections < maxConnections; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.connectionDistance) {
            const opacity = (1 - distance / config.connectionDistance) * (mobile ? 0.2 : 0.3);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = mobile ? 0.5 : 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            connections++;
          }
        }
      }
    };

    const animate = () => {
      frameCount++;
      
      // Throttle de animação para mobile
      if (mobile && frameCount % config.animationThrottle !== 0) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const canvasWidth = canvas.width / (mobile ? 1 : window.devicePixelRatio || 1);
      const canvasHeight = canvas.height / (mobile ? 1 : window.devicePixelRatio || 1);
      
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      
      // Gradiente otimizado
      const gradient = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight);
      gradient.addColorStop(0, mobile ? '#1e293b' : '#1a365d');
      gradient.addColorStop(1, mobile ? '#1e40af' : '#2563eb');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Variáveis para controle de scroll
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let scrollDirection = 0;

    const handleInteraction = (x, y) => {
      const rect = canvas.getBoundingClientRect();
      const interactionX = x - rect.left;
      const interactionY = y - rect.top;
      
      particles.forEach(particle => {
        const dx = interactionX - particle.x;
        const dy = interactionY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < config.interactionDistance) {
          const force = (config.interactionDistance - distance) / config.interactionDistance;
          particle.vx += dx * force * config.forceMultiplier;
          particle.vy += dy * force * config.forceMultiplier;
        }
      });
    };

    const handleMouseMove = (event) => {
      if (!mobile) {
        handleInteraction(event.clientX, event.clientY);
      }
    };

    const handleScroll = () => {
      if (mobile) {
        const currentScrollY = window.scrollY;
        const deltaY = currentScrollY - lastScrollY;
        
        // Calcula velocidade do scroll (suavizada)
        scrollVelocity = scrollVelocity * 0.8 + deltaY * 0.2;
        scrollDirection = Math.sign(scrollVelocity);
        
        // Aplica força das partículas baseada no scroll
        particles.forEach(particle => {
          // Força vertical baseada na velocidade do scroll
          const scrollForce = Math.abs(scrollVelocity) * 0.02;
          const gravityForce = scrollDirection * scrollForce;
          
          // Adiciona movimento vertical
          particle.vy += gravityForce;
          
          // Adiciona um pouco de movimento horizontal aleatório para simular turbulência
          const turbulence = (Math.random() - 0.5) * scrollForce * 0.3;
          particle.vx += turbulence;
          
          // Limita a velocidade máxima
          const maxVelocity = mobile ? 3 : 5;
          particle.vx = Math.max(-maxVelocity, Math.min(maxVelocity, particle.vx));
          particle.vy = Math.max(-maxVelocity, Math.min(maxVelocity, particle.vy));
        });
        
        lastScrollY = currentScrollY;
      }
    };

    const handleResize = () => {
      const newMobile = checkMobile();
      if (newMobile !== mobile) {
        // Reinicia se mudou de mobile para desktop ou vice-versa
        cancelAnimationFrame(animationFrameId);
        setTimeout(() => {
          resizeCanvas();
          init();
          animate();
        }, 100);
      } else {
        resizeCanvas();
        init();
      }
    };

    // Event listeners otimizados
    if (!mobile) {
      document.addEventListener('mousemove', handleMouseMove, { passive: true });
    } else {
      // No mobile, usa scroll como interação principal
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    resizeCanvas();
    init();
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          touchAction: 'none',
          // Otimização de renderização
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
      />
      {isMobile && (
        <div className="absolute bottom-4 right-4 text-xs text-white/50 pointer-events-none">
          Role para interagir
        </div>
      )}
    </div>
  );
};

export default NetworkBackground;