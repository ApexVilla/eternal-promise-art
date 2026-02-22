import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const GoldParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; size: number; speedY: number; opacity: number; pulse: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedY: -(Math.random() * 0.3 + 0.1),
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y += p.speedY;
        p.pulse += 0.02;
        const currentOpacity = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(43, 72%, 55%, ${currentOpacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", handleResize);
    return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", handleResize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />;
};

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/80" />
    </div>

    <GoldParticles />

    <div className="relative z-20 container mx-auto px-4 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6"
      >
        ✨ Berit Olam — Promesa Eterna
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
      >
        <span className="gold-shimmer">Donde el Arte, la Elegancia</span>
        <br />
        <span className="gold-shimmer">y la Promesa se Encuentran</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-foreground/60 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        Berit Olam nace de una promesa eterna. Creamos momentos inolvidables con elegancia, distinción y amor.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#servicios"
          className="group relative px-8 py-4 gold-shimmer-bg text-primary-foreground font-body font-bold text-sm tracking-widest uppercase rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
        >
          Ver Servicios
        </a>
        <a
          href="#contacto"
          className="px-8 py-4 gold-border text-primary font-body font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-primary/10 transition-all duration-300"
        >
          Cotizar Ahora
        </a>
      </motion.div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
  </section>
);

export default HeroSection;
