"use client";

import { motion } from "framer-motion";

interface HeroBackgroundProps {
  imagePath: string;
  children: React.ReactNode;
}

export default function HeroBackground({ imagePath, children }: HeroBackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            // Try local image first, if it fails use the fallback
            backgroundImage: `url(${imagePath}), url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80)`,
          }}
        >
          {/* Dark Overlay - Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
          
          {/* Subtle Gradient Overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Floating Particles/Glow Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accentSecondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}