"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-3 shadow-lg"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
 <Link href="/" className="group relative">
  <span className="text-2xl font-bold font-heading text-white">
    MW
    <motion.span 
      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accentSecondary group-hover:w-full transition-all duration-300"
    />
  </span>
</Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors relative group font-medium"
            >
              {item.name}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accentSecondary"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 glass rounded-lg"
          >
            {isOpen ? <FiX className="w-6 h-6 text-white" /> : <FiMenu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mx-4 mt-3 rounded-2xl overflow-hidden"
        >
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-white/5 transition-colors text-white/80 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}