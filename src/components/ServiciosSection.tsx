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
  <section id="servicios" className="py-24 md:py-32 section-dark relative overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="inline-block text-primary font-body text-xs tracking-[0.4em] uppercase mb-4 border-b border-primary/30 pb-2">
          Nuestros Servicios
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
          <span className="gold-shimmer">Excelencia en Cada Detalle</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative h-full"
          >
            <div className="h-full bg-card/40 backdrop-blur-md p-10 rounded-sm border border-white/5 hover:border-primary/30 transition-all duration-700 hover:gold-glow flex flex-col items-start overflow-hidden">
              {/* Icon Background Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors duration-700" />

              <span className="text-4xl mb-6 block transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                {service.icon}
              </span>

              <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:gold-shimmer transition-all duration-500">
                {service.title}
              </h3>

              <p className="text-foreground/50 font-body text-sm leading-relaxed mb-6 group-hover:text-foreground/70 transition-colors duration-500">
                {service.description}
              </p>

              {/* Bottom Decorative Line */}
              <div className="mt-auto w-12 h-[1px] bg-primary/20 group-hover:w-full group-hover:bg-primary/50 transition-all duration-700" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiciosSection;
