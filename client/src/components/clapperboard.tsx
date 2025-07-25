import { motion } from "framer-motion";
import LadybugAnimation from "./ladybug-animation";

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
            {/* Clapper stripes */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-black to-white" 
                 style={{
                   background: "repeating-linear-gradient(90deg, #fff 0%, #fff 15%, #000 15%, #000 30%)",
                 }}
            />
          </div>
          
          {/* Main board */}
          <div
            className="w-full h-full border-2 border-gray-600 rounded-sm relative bg-slate-200"
          >
            {/* 77 Yapım logo on clapperboard */}
            <div className="absolute inset-2 flex items-center justify-center">
              <img 
                src="/attached_assets/77yapim_1753430498708.png" 
                alt="77 Yapım" 
                className="w-16 h-auto opacity-80"
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
        
        {/* Ladybug Animation */}
        <LadybugAnimation />
      </motion.div>
    </div>
  );
}
