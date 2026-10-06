"use client";

import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 glass rounded-full hover:bg-white/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FiSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <FiMoon className="w-5 h-5 text-blue-400" />
      )}
    </motion.button>
  );
}