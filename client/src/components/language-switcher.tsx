import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <section className="py-16 bg-deep-black border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div className="flex items-center space-x-2 bg-gray-800/80 rounded-lg p-2 border border-gray-600">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage('en')}
              className={`px-6 py-3 rounded-md font-bold text-base transition-all duration-300 ${
                language === 'en' 
                  ? 'bg-cinema-gold text-black shadow-lg scale-105' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/70'
              }`}
            >
              EN
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage('tr')}
              className={`px-6 py-3 rounded-md font-bold text-base transition-all duration-300 ${
                language === 'tr' 
                  ? 'bg-cinema-gold text-black shadow-lg scale-105' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/70'
              }`}
            >
              TR
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}