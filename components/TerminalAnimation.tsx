"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const commands = [
  { cmd: "npm run dev", result: "✓ Ready in 2.3s" },
  { cmd: "git commit -m 'portfolio'", result: "✓ 15 files changed" },
  { cmd: "npm install amazing", result: "✓ Monicah Wangari is ready" },
];

export default function TerminalAnimation() {
  const [currentCmd, setCurrentCmd] = useState(0);
  const [typing, setTyping] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowResult(false);
      setTyping("");
      
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i <= commands[currentCmd].cmd.length) {
          setTyping(commands[currentCmd].cmd.slice(0, i));
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setShowResult(true);
          }, 500);
        }
      }, 50);

      setTimeout(() => {
        setCurrentCmd((prev) => (prev + 1) % commands.length);
      }, 4000);
    }, 4500);

    return () => clearInterval(interval);
  }, [currentCmd]);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass rounded-2xl p-6 border border-white/10 font-mono text-sm"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-textSecondary text-xs ml-2">terminal</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-green-400">$</span>
          <span className="text-white">{typing}<span className="animate-pulse">|</span></span>
        </div>
        
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent pl-4"
          >
            {commands[currentCmd].result}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}