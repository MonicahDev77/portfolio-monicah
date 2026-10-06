"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiRefreshCw } from "react-icons/fi";

const quotes = [
  {
    quote: "Building software isn't just about writing code. It's about solving problems and making people's lives easier.",
    author: "Monicah Wangari",
    emoji: "💡"
  },
  {
    quote: "The best way to predict the future is to build it yourself.",
    author: "Monicah Wangari",
    emoji: "🚀"
  },
  {
    quote: "Great software is not built by chance. It's built by passion, persistence, and attention to detail.",
    author: "Monicah Wangari",
    emoji: "✨"
  }
];

export default function FlipCard() {
  const [index, setIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextQuote = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
      setIsFlipping(false);
    }, 300);
  };

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`glass rounded-3xl p-12 border border-white/10 transition-all duration-300 hover:border-accent/30 ${isFlipping ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
        <div className="text-6xl mb-6">{quotes[index].emoji}</div>
        <blockquote className="text-2xl md:text-3xl font-light text-foreground leading-relaxed">
          "{quotes[index].quote}"
        </blockquote>
        <div className="flex items-center justify-between mt-6">
          <p className="text-textSecondary">— {quotes[index].author}</p>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextQuote}
            className="p-3 glass rounded-full hover:bg-white/10 transition-colors"
            aria-label="Next quote"
          >
            <FiRefreshCw className="w-5 h-5 text-accent" />
          </motion.button>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {quotes.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? 'bg-accent w-6' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}