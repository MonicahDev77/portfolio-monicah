"use client";

import { motion } from "framer-motion";
import { FiHeart, FiCode, FiBookOpen, FiCoffee } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

export default function PersonalitySection() {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass rounded-3xl p-12 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <FiHeart className="w-8 h-8 text-accent animate-pulse-slow" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                More Than Just <span className="gradient-text">Code</span>
              </h2>
            </div>

            <p className="text-textSecondary text-lg leading-relaxed mb-6">
              I enjoy solving real-world problems through technology. When I'm not coding, 
              you'll probably find me learning something new, creating content, or exploring 
              ways technology can make everyday life easier.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { icon: FiCode, label: "Problem Solver", color: "from-blue-500/20 to-blue-600/20" },
                { icon: FiBookOpen, label: "Lifelong Learner", color: "from-purple-500/20 to-purple-600/20" },
                { icon: FiHeart, label: "Passionate Builder", color: "from-red-500/20 to-red-600/20" },
                { icon: FiCoffee, label: "Coffee Enthusiast", color: "from-amber-500/20 to-amber-600/20" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`bg-gradient-to-br ${item.color} p-4 rounded-xl text-center border border-white/5`}
                >
                  <item.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-textSecondary text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}