import { motion } from "framer-motion";

const words = ["Elegancia", "Distinción", "Estética", "Arte con Amor"];

const FilosofiaSection = () => (
  <section id="filosofia" className="py-24 md:py-32 section-dark relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/10" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">✨ Nuestra Esencia</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
          <span className="gold-shimmer">Filosofía de Marca</span>
        </h2>
        <p className="text-foreground/60 font-body text-lg md:text-xl leading-relaxed mb-12 italic">
          "Cada diseño es una obra de arte. Cada detalle es una expresión de amor. Cada evento es una promesa que perdura."
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="px-6 py-3 gold-border-subtle rounded-full text-primary font-display text-sm tracking-wider hover:gold-border hover:gold-glow transition-all duration-300 cursor-default"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default FilosofiaSection;
