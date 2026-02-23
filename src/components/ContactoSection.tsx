import { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5511999999999"; // ← Actualiza con tu número real

const ContactoSection = () => {
  const [formData, setFormData] = useState({ nombre: "", telefono: "", evento: "", mensaje: "" });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hola Berit Olam! Me llamo ${formData.nombre}. Tipo de evento: ${formData.evento}. ${formData.mensaje}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 md:py-32 section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">📩 Contacto</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            <span className="gold-shimmer">Hagamos Realidad Tu Sueño</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-5"
        >
          {[
            { name: "nombre", label: "Nombre", type: "text", placeholder: "Tu nombre completo" },
            { name: "telefono", label: "Teléfono", type: "tel", placeholder: "Tu número de contacto" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-body text-foreground/70 mb-2 tracking-wider uppercase">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className="w-full bg-card gold-border-subtle rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all duration-300"
                required
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-body text-foreground/70 mb-2 tracking-wider uppercase">Tipo de Evento</label>
            <select
              value={formData.evento}
              onChange={(e) => setFormData({ ...formData, evento: e.target.value })}
              className="w-full bg-card gold-border-subtle rounded-sm px-4 py-3 text-foreground font-body outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all duration-300"
              required
            >
              <option value="">Seleccionar...</option>
              <option value="Boda">Boda</option>
              <option value="Quinceañera">Quinceañera</option>
              <option value="Cumpleaños">Cumpleaños</option>
              <option value="Evento Corporativo">Evento Corporativo</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-body text-foreground/70 mb-2 tracking-wider uppercase">Mensaje</label>
            <textarea
              placeholder="Cuéntanos sobre tu evento soñado..."
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              rows={4}
              className="w-full bg-card gold-border-subtle rounded-sm px-4 py-3 text-foreground font-body placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full gold-shimmer-bg text-primary-foreground font-body font-bold text-sm tracking-widest uppercase py-4 rounded-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            ✨ Solicitar Cotización
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactoSection;
