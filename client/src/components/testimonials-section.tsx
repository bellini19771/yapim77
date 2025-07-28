import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Film, Palette, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: t("team.producer.name"),
      position: t("Yapımcı"),
      specialty: t("team.Belin.specialty"),
      bio: t("team.Belin.bio"),
      avatar: "",
      icon: Film,
    },
    {
      name: t("team.Ekip1.name"),
      position: t("team.Ekip1.position"),
      specialty: t("team.Ekip1.specialty"),
      bio: t("team.Ekip1.bio"),
      avatar: "",
      icon: Palette,
    },
    {
      name: t("team.Ekip2.name"),
      position: t("team.Ekip2.position"),
      specialty: t("team.Ekip2.specialty"),
      bio: t("team.Ekip2.bio"),
      avatar: "",
      icon: Camera,
    },
  ];

  return (
    <section className="py-20 bg-deep-black" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            {t("team.title")} <span className="cinema-gold">{t("team.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("team.subtitle")}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-cinema-gold/50 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-cinema-gold/30"
                />
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-cinema-gold/20 rounded-full">
                    <member.icon className="w-6 h-6 cinema-gold" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
                <p className="text-cinema-gold font-medium mb-2">{member.position}</p>
                <p className="text-sm text-gray-400 mb-4">{member.specialty}</p>
                <p className="text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
