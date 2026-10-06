"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const icons = [
  { icon: FaReact, color: "#61DAFB", delay: 0 },
  { icon: SiNextdotjs, color: "#FFFFFF", delay: 0.5 },
  { icon: FaNodeJs, color: "#339933", delay: 1 },
  { icon: SiTypescript, color: "#3178C6", delay: 1.5 },
  { icon: FaPython, color: "#3776AB", delay: 2 },
  { icon: SiTailwindcss, color: "#06B6D4", delay: 2.5 },
  { icon: FaDocker, color: "#2496ED", delay: 3 },
  { icon: FaAws, color: "#FF9900", delay: 3.5 },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50, scale: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0.3, 0.5, 0],
            y: [50, -100, -200, -300, -400],
            x: [0, 20, -20, 30, -30],
            scale: [0, 1, 0.8, 1.2, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + i * 8}%`,
          }}
        >
          <item.icon 
            className="w-8 h-8 md:w-10 md:h-10" 
            style={{ color: item.color }}
          />
        </motion.div>
      ))}
    </div>
  );
}