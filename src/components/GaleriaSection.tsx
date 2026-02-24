import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Decoración con rosas", span: "row-span-2" },
  { src: gallery2, alt: "Vestido de novia", span: "row-span-2" },
  { src: gallery3, alt: "Regalos personalizados", span: "" },
  { src: gallery6, alt: "Celebración de galas", span: "" },
  { src: gallery4, alt: "Traje de gala", span: "row-span-2" },
  { src: gallery5, alt: "Vestido de 15 años", span: "row-span-2" },
];

const GaleriaSection = () => (
  <section id="galeria" className="py-24 md:py-32 section-darker">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">📸 Galería</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          <span className="gold-shimmer">Momentos que Perduran</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] gap-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative overflow-hidden rounded-sm group cursor-pointer ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-primary font-display text-sm">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GaleriaSection;
