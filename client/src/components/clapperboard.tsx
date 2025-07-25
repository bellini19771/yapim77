import { motion } from "framer-motion";
import logoPath from "@assets/77yapim.png";

export default function Clapperboard() {
  return (
    <div className="relative inline-block">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative"
      >
        {/* Clapperboard */}
        <div className="w-32 h-24 relative">
          {/* Top clapper */}
          <div className="absolute -top-3 left-0 right-0 h-3 bg-gray-800 rounded-t border border-gray-600 relative">
          </div>
          
          {/* Main board */}
          <div
            className="w-full h-full border-2 border-gray-600 rounded-sm relative bg-gradient-to-br from-slate-100 to-slate-300"
          >
            {/* 77 Yapım logo on clapperboard */}
            <div className="absolute inset-2 flex items-center justify-center">
              <img 
                src={logoPath} 
                alt="77 Yapım" 
                className="w-10 h-auto logo-cinematic filter brightness-0 opacity-80"
              />
            </div>
            
            {/* Film slate lines */}
            <div className="absolute bottom-1 left-1 right-1 space-y-0.5">
              <div className="h-0.5 bg-black/20"></div>
              <div className="h-0.5 bg-black/20"></div>
              <div className="h-0.5 bg-black/20"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
