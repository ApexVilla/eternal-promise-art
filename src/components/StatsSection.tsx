import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    // Extract number from string (e.g., "10+" -> 10, "100%" -> 100)
    const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
    const suffix = value.replace(/[0-9]/g, "");

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, numericValue, {
                duration: duration,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [isInView, numericValue, count, duration]);

    return (
        <span ref={nodeRef} className="gold-shimmer">
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

const stats = [
    {
        value: "10+",
        label: "Años de Experiencia",
        description: "Creando momentos mágicos",
    },
    {
        value: "500+",
        label: "Eventos Realizados",
        description: "Sueños hechos realidade",
    },
    {
        value: "100%",
        label: "Satisfacción",
        description: "Compromiso con la excelencia",
    },
    {
        value: "24/7",
        label: "Atención",
        description: "Siempre a tu lado",
    },
];

const StatsSection = () => {
    return (
        <section className="py-24 relative overflow-hidden section-dark">
            {/* Background Decorative Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(184,146,64,0.08)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                ease: [0.21, 0.45, 0.32, 0.9]
                            }}
                            className="relative group h-full"
                        >
                            <div className="h-full bg-card/40 backdrop-blur-md gold-border-subtle hover:gold-border p-8 rounded-sm text-center transition-all duration-700 hover:gold-glow hover:-translate-y-2 flex flex-col justify-center items-center overflow-hidden">
                                {/* Internal Hover Light Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <span className="text-4xl md:text-5xl font-display font-bold block mb-3 relative z-10">
                                    <Counter value={stat.value} duration={2 + index * 0.2} />
                                </span>

                                <h3 className="text-foreground font-body text-sm md:text-base tracking-widest uppercase mb-4 relative z-10">
                                    {stat.label}
                                </h3>

                                <div className="w-8 h-[1px] bg-primary/30 mx-auto group-hover:w-16 group-hover:bg-primary transition-all duration-700 relative z-10" />

                                <p className="mt-6 text-foreground/40 text-[10px] md:text-xs font-body italic group-hover:text-foreground/70 transition-all duration-700 leading-relaxed relative z-10 max-w-[160px]">
                                    {stat.description}
                                </p>

                                {/* Animated corner border */}
                                <div className="absolute top-0 right-0 w-0 h-0 border-t border-r border-primary/0 group-hover:w-4 group-hover:h-4 group-hover:border-primary/40 transition-all duration-700" />
                                <div className="absolute bottom-0 left-0 w-0 h-0 border-b border-l border-primary/0 group-hover:w-4 group-hover:h-4 group-hover:border-primary/40 transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
