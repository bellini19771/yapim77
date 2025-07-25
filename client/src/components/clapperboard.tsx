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
        <div className="w-20 h-16 relative">
          {/* Top clapper */}
          <div className="absolute -top-2 left-0 right-0 h-2 bg-gray-800 rounded-t border border-gray-600" />
          
          {/* Main board */}
          <div
            className="w-full h-full border-2 border-gray-600 rounded-sm relative"
            style={{
              background: "linear-gradient(45deg, #333 25%, #fff 25%, #fff 50%, #333 50%, #333 75%, #fff 75%)",
              backgroundSize: "8px 8px",
            }}
          >
            {/* Scene info overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="text-white text-xs font-bold">77 YAPIM</span>
            </div>
          </div>
        </div>
        
        {/* Ladybug Animation */}
        <LadybugAnimation />
      </motion.div>
    </div>
  );
}
