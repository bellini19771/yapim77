import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const stats = [
    { number: "50+", label: t("about.projects") },
    { number: "15+", label: t("about.awards") },
    { number: "8", label: t("about.experience") },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-deep-black" ref={ref} key={t("about.title")}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8">
              <span className="cinema-gold">{t("about.title")}</span> {t("about.titleHighlight")}
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {t("about.subtitle")}
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {t("about.description")}
            </p>
            
            <div className="grid grid-cols-3 gap-8 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold cinema-gold mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <Button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
              Meet Our Team
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000"
              alt="Professional film production team collaborating on set"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-xl flex items-center justify-center">
              <Award className="text-primary-foreground text-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
