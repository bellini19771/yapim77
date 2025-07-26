import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logoPath from "@assets/77yapim.webp";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "portfolio", label: t("nav.portfolio") },
    { id: "services", label: t("nav.services") },
    { id: "about", label: t("nav.about") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect border-b border-gray-800" : ""
      }`}
    >
      <div className="container mx-auto px-0 py-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <div className="flex items-center relative">
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-deep-black/30 to-deep-black/60 blur-xl scale-200 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-deep-black/80 blur-2xl scale-175 pointer-events-none"></div>
              <img
                src={logoPath}
                alt="77 Yapım Logo"
                className="relative h-40 w-auto logo-elegant logo-blend filter brightness-0 invert opacity-85 hover:opacity-100"
              />
            </div>
          </motion.div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </motion.button>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 bg-gray-800/90 rounded-lg p-2 border border-cinema-gold/30 ml-4">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-md font-bold text-sm transition-all duration-300 ${
                  language === "en"
                    ? "bg-cinema-gold text-black shadow-lg"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("tr")}
                className={`px-3 py-1 rounded-md font-bold text-sm transition-all duration-300 ${
                  language === "tr"
                    ? "bg-cinema-gold text-black shadow-lg"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                TR
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass-effect rounded-lg border border-gray-800"
            >
              <div className="p-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Language Switcher for Mobile */}
                <div className="flex items-center justify-center space-x-2 bg-gray-800/90 rounded-lg p-3 border border-cinema-gold/30 mt-4">
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-4 py-2 rounded-md font-bold text-sm transition-all duration-300 ${
                      language === "en"
                        ? "bg-cinema-gold text-black shadow-lg"
                        : "bg-gray-700 text-white hover:bg-gray-600"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage("tr")}
                    className={`px-4 py-2 rounded-md font-bold text-sm transition-all duration-300 ${
                      language === "tr"
                        ? "bg-cinema-gold text-black shadow-lg"
                        : "bg-gray-700 text-white hover:bg-gray-600"
                    }`}
                  >
                    TR
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
