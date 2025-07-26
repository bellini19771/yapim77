import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { FaVimeo } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import logoPath from "@assets/77yapim.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const services = [
    t("services.film.title"),
    t("services.animation.title"),
    "Post-Production",
    t("services.commercial.title"),
  ];

  const company = [
    t("footer.company.about"),
    t("footer.company.careers"),
    t("footer.company.news"),
    t("footer.company.contact"),
  ];

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: FaVimeo, href: "#" },
  ];

  return (
    <footer className="bg-deep-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <img 
                src={logoPath} 
                alt="77 Yapım Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">{t("footer.services.title")}</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">{t("footer.company.title")}</h4>
            <ul className="space-y-2 text-gray-400">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">{t("footer.company.contact")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t("contact.info.address")}</li>
              <li>+90 (212) 555-0123</li>
              <li>hello@77yapim.com</li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} 77 Yapım. {t("footer.rights")} | {t("footer.privacy")} | {t("footer.terms")}</p>
        </div>
      </div>
    </footer>
  );
}
