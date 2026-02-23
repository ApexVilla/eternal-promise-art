import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "María González",
    event: "Boda",
    text: "Berit Olam transformó nuestra boda en un sueño hecho realidad. Cada detalle fue perfecto, desde la decoración hasta los arreglos florales.",
    stars: 5,
  },
  {
    name: "Carlos Mendoza",
    event: "Evento Corporativo",
    text: "La elegancia y profesionalismo de Berit Olam superó todas nuestras expectativas. Un servicio verdaderamente premium.",
    stars: 5,
  },
  {
    name: "Ana Lucía Ramírez",
    event: "Quinceañera",
    text: "Mi hija se sintió como una princesa. El vestido, la decoración, todo fue absolutamente mágico. ¡Gracias Berit Olam!",
    stars: 5,
  },
];

const TestimoniosSection = () => {
  const [current, setCurrent] = useState(0);
  const isPaused = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused.current) {
        setCurrent((c) => (c + 1) % testimonials.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonios" className="py-24 md:py-32 section-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">💬 Testimonios</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            <span className="gold-shimmer">Lo que Dicen Nuestros Clientes</span>
          </h2>
        </motion.div>

        <div
          className="max-w-2xl mx-auto text-center relative min-h-[250px]"
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-foreground/70 font-body text-lg italic leading-relaxed mb-6">
                "{testimonials[current].text}"
              </p>
              <p className="text-primary font-display font-semibold">{testimonials[current].name}</p>
              <p className="text-muted-foreground font-body text-sm">{testimonials[current].event}</p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30 w-2"
                  }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;
