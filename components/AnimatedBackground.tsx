"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-primary overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a0f1f]" />

      {/* Floating blobs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-20 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[140px]"
      />
      <motion.div
        animate={{
          x: [0, 50, -40, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 left-1/4 w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-[130px]"
      />
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-20 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]"
      />

      {/* Subtle dots */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full"
            style={{
              left: `${(i % 6) * 18 + 5}%`,
              top: `${Math.floor(i / 6) * 20 + 5}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + (i % 4),
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(15,23,42,0.6)_100%)]" />
    </div>
  );
}