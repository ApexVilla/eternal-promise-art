import { motion } from "framer-motion";
import storyImage from "@/assets/story-image.jpg";

const animProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
} as const;

const HistoriaSection = () => {
  return (
    <section id="historia" className="py-24 md:py-32 section-darker">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div {...animProps}>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">🌟 Nuestra Historia</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              <span className="gold-shimmer">El Origen de Berit Olam</span>
            </h2>
            <p className="text-foreground/70 font-body leading-relaxed mb-6">
              El nombre Berit Olam nace de una revelación profunda basada en la palabra:
            </p>
            <blockquote className="gold-border-subtle border-l-2 pl-6 py-2 mb-6 italic text-foreground/60 font-display text-lg">
              "Conoce, pues, que Jehová tu Dios es Dios, Dios fiel, que guarda el pacto y la misericordia… hasta mil generaciones."
              <span className="block text-primary/70 text-sm mt-2 not-italic font-body">— Deuteronomio 7:9</span>
            </blockquote>
            <p className="text-foreground/70 font-body leading-relaxed">
              Esta promesa marcó nuestra visión: crear con fidelidad, amor y excelencia, dejando huella en cada detalle.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            {...animProps}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={storyImage}
                alt="Berit Olam - Arte y Elegancia"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 gold-border opacity-30 rounded-sm" />
            <div className="absolute -top-4 -left-4 w-16 h-16 gold-border opacity-20 rounded-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistoriaSection;
