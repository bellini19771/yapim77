import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full p-2 border border-gray-700">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('en')}
        className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-300 ${
          language === 'en' ? 'border-cinema-gold shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'
        }`}
        title="English"
      >
        <img
          src="https://flagcdn.com/w40/gb.png"
          alt="English"
          className="w-full h-full object-cover"
        />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('tr')}
        className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-300 ${
          language === 'tr' ? 'border-cinema-gold shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'
        }`}
        title="Türkçe"
      >
        <img
          src="https://flagcdn.com/w40/tr.png"
          alt="Türkçe"
          className="w-full h-full object-cover"
        />
      </motion.button>
    </div>
  );
}