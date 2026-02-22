import { motion } from "framer-motion";

const services = [
  {
    icon: "🎉",
    title: "Decoración y Diseño de Eventos",
    description: "Cumpleaños · Fiestas Sorpresa · Eventos Especiales · Detalles personalizados",
  },
  {
    icon: "🎁",
    title: "Regalos Únicos y Personalizados",
    description: "Arte hecho con amor para sorprender",
  },
  {
    icon: "👰",
    title: "Vestidos de Novia",
    description: "Diseños elegantes que representan una promesa eterna",
  },
  {
    icon: "👗",
    title: "Vestidos para 15 Años",
    description: "Estética, glamour y distinción",
  },
  {
    icon: "🤵",
    title: "Trajes de Gala para Caballeros",
    description: "Clase y presencia para momentos inolvidables",
  },
];

const ServiciosSection = () => (
  <section id="servicios" className="py-24 md:py-32 section-dark">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">💎 Nuestros Servicios</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          <span className="gold-shimmer">Creamos Experiencias Inolvidables</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative bg-card p-8 rounded-sm gold-border-subtle hover:gold-border transition-all duration-500 hover:gold-glow"
          >
            <span className="text-4xl mb-4 block">{service.icon}</span>
            <h3 className="text-xl font-display font-semibold text-primary mb-3 group-hover:gold-shimmer transition-all">
              {service.title}
            </h3>
            <p className="text-foreground/60 font-body text-sm leading-relaxed">
              {service.description}
            </p>
            {/* Gold accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 gold-shimmer-bg scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiciosSection;
