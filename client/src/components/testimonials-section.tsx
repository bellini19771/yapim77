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
      name: t("team.ahmet.name"),
      position: t("team.ahmet.position"),
      specialty: t("team.ahmet.specialty"),
      bio: t("team.ahmet.bio"),
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      icon: Film,
    },
    {
      name: t("team.zeynep.name"),
      position: t("team.zeynep.position"),
      specialty: t("team.zeynep.specialty"),
      bio: t("team.zeynep.bio"),
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      icon: Palette,
    },
    {
      name: t("team.emre.name"),
      position: t("team.emre.position"),
      specialty: t("team.emre.specialty"),
      bio: t("team.emre.bio"),
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
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
