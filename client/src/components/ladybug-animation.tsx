import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LadybugAnimation() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="absolute w-6 h-6 -top-12 -left-32"
      initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
      animate={hasAnimated ? {
        x: [0, 150, 300, 450, 520],
        y: [0, -40, -20, 10, 15],
        rotate: [0, 25, -15, 10, 0],
        opacity: [0, 1, 1, 1, 1],
      } : {}}
      transition={{
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <div className="relative w-full h-full">
        {/* Ladybug body - more realistic design */}
        <div className="relative w-6 h-6">
          {/* Main body */}
          <div
            className="w-6 h-6 relative"
            style={{
              background: "linear-gradient(135deg, #ff4444 0%, #cc0000 50%, #990000 100%)",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              border: "1px solid #000",
              boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.3), inset 2px 2px 4px rgba(255,255,255,0.2)",
            }}
          >
            {/* Head area */}
            <div
              className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-black rounded-full"
              style={{
                background: "linear-gradient(135deg, #333 0%, #000 100%)",
              }}
            />
            
            {/* Center line dividing wings */}
            <div className="absolute w-0.5 h-4 bg-black top-1 left-1/2 transform -translate-x-1/2 rounded-sm" />
            
            {/* Realistic spots */}
            <div className="absolute w-1.5 h-1.5 bg-black rounded-full top-1.5 left-1" />
            <div className="absolute w-1.5 h-1.5 bg-black rounded-full top-1.5 right-1" />
            <div className="absolute w-1 h-1 bg-black rounded-full top-3 left-1.5" />
            <div className="absolute w-1 h-1 bg-black rounded-full top-3 right-1.5" />
            
            {/* Antennae */}
            <div className="absolute -top-0.5 left-2 w-0.5 h-1 bg-black rounded-full transform rotate-12" />
            <div className="absolute -top-0.5 right-2 w-0.5 h-1 bg-black rounded-full transform -rotate-12" />
            
            {/* Wing detail lines */}
            <div className="absolute top-2 left-1.5 w-1 h-0.5 bg-black/30 rounded-full transform rotate-45" />
            <div className="absolute top-2 right-1.5 w-1 h-0.5 bg-black/30 rounded-full transform -rotate-45" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
