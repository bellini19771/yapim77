import { motion } from "framer-motion";

export default function LadybugAnimation() {
  return (
    <motion.div
      className="absolute w-5 h-5 -top-8 -left-20"
      animate={{
        x: [0, 200, 400, 500, 580],
        y: [0, -30, 20, 60, 70],
        rotate: [0, 15, -10, 5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative w-full h-full">
        {/* Ladybug body */}
        <div
          className="w-5 h-5 rounded-full relative"
          style={{
            background: "radial-gradient(circle at 30% 30%, #ff6b6b, #cc0000)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          }}
        >
          {/* Center line */}
          <div
            className="absolute w-0.5 h-3 bg-black top-1 left-1/2 transform -translate-x-1/2 rounded-sm"
          />
          {/* Spots */}
          <div className="absolute w-1 h-1 bg-black rounded-full top-1 left-1" />
          <div className="absolute w-1 h-1 bg-black rounded-full top-1 right-1" />
          <div className="absolute w-1 h-1 bg-black rounded-full top-2 left-1.5" />
          <div className="absolute w-1 h-1 bg-black rounded-full top-2 right-1.5" />
        </div>
      </div>
    </motion.div>
  );
}
