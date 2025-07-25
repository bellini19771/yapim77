import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <section className="py-16 bg-red-900 border-t-4 border-red-600" style={{ minHeight: '200px' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-center text-white text-2xl mb-8">Language Switcher</h2>
        <div className="flex justify-center">
          <div className="flex items-center space-x-2 bg-white/20 rounded-lg p-4 border-2 border-yellow-400">
            <button
              onClick={() => {
                console.log('EN clicked');
                setLanguage('en');
              }}
              className={`px-8 py-4 rounded-md font-bold text-xl border-2 transition-all duration-300 ${
                language === 'en' 
                  ? 'bg-yellow-500 text-black border-yellow-600 shadow-lg' 
                  : 'text-white border-white hover:bg-white/20'
              }`}
            >
              EN
            </button>
            
            <button
              onClick={() => {
                console.log('TR clicked');
                setLanguage('tr');
              }}
              className={`px-8 py-4 rounded-md font-bold text-xl border-2 transition-all duration-300 ${
                language === 'tr' 
                  ? 'bg-yellow-500 text-black border-yellow-600 shadow-lg' 
                  : 'text-white border-white hover:bg-white/20'
              }`}
            >
              TR
            </button>
          </div>
        </div>
        <p className="text-center text-white mt-4">Current language: {language}</p>
      </div>
    </section>
  );
}