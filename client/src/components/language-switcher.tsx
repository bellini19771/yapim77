import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex justify-center mb-12">
      <div className="flex items-center space-x-1 bg-gray-800/50 rounded-lg p-1 border border-gray-700">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 ${
            language === 'en' 
              ? 'bg-cinema-gold text-black shadow-lg' 
              : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
          }`}
        >
          EN
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage('tr')}
          className={`px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 ${
            language === 'tr' 
              ? 'bg-cinema-gold text-black shadow-lg' 
              : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
          }`}
        >
          TR
        </motion.button>
      </div>
    </div>
  );
}