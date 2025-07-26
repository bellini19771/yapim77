import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Palette, Scissors } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const services = [
    {
      icon: Video,
      title: t("services.film.title"),
      description: t("services.film.desc"),
      image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Palette,
      title: t("services.animation.title"),
      description: t("services.animation.desc"),
      image: "/assets/3d-character.png",
    },
    {
      icon: Scissors,
      title: t("services.commercial.title"),
      description: t("services.commercial.desc"),
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-deep-black to-gray-900" ref={ref} key={t("services.sectionTitle")}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            <span className="cinema-gold">{t("services.sectionTitle")}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("services.sectionDesc")}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group hover-lift bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700"
            >
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} hizmeti`}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mb-4">
                <service.icon className="h-10 w-10 text-cinema-gold mx-auto" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-2 text-off-white">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
