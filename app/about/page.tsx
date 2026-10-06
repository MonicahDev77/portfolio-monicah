"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  FiBriefcase, FiCalendar, FiBookOpen, 
  FiCode, FiUsers, FiHeart, FiMapPin, FiTrendingUp,
  FiZap, FiTarget, FiStar, FiArrowRight
} from "react-icons/fi";
import ScrollReveal from "@/components/ScrollReveal";

const journey = [
  {
    year: "2026 – Present",
    title: "ICT / Software Development",
    company: "Ministry of ICT",
    desc: "Contributing to national digital transformation projects and government technology solutions.",
    icon: FiBriefcase,
    color: "from-purple-500 to-purple-600",
    current: true,
  },
  {
    year: "Sep 2025 – Dec 2025",
    title: "Software Development Attachment",
    company: "Oracom Software Company",
    desc: "Worked on full-stack websites and mobile applications, gaining hands-on industry experience.",
    icon: FiCode,
    color: "from-blue-500 to-blue-600",
    current: false,
  },
  {
    year: "2025 – 2027",
    title: "Diploma in Software Development",
    company: "Nyeri National Polytechnic",
    desc: "Building a strong foundation in software engineering through hands-on projects and coursework.",
    icon: FiBookOpen,
    color: "from-cyan-500 to-cyan-600",
    current: true,
  },
];

const values = [
  {
    icon: FiCode,
    title: "Clean Code",
    desc: "Writing maintainable, well-documented code that stands the test of time.",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: FiUsers,
    title: "User Experience",
    desc: "Creating intuitive interfaces that users love to interact with.",
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    icon: FiHeart,
    title: "Problem Solving",
    desc: "Finding elegant solutions to complex real-world challenges.",
    color: "from-red-500/20 to-red-600/20",
  },
];

// Animated typing for the intro
function TypingHeading() {
  const words = ["About Me", "My Story", "Who I Am"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentWord.length) {
            setText(currentWord.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (text.length > 0) {
            setText(currentWord.slice(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <span className="gradient-text">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// Fun fact card that reveals info on hover/tap
function FunFactCard({ emoji, label, value, reveal, index }: any) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => setIsRevealed(!isRevealed)}
      onHoverStart={() => setIsRevealed(true)}
      onHoverEnd={() => setIsRevealed(false)}
      whileHover={{ y: -8, scale: 1.03 }}
      className="relative glass rounded-2xl p-6 border border-white/10 hover:border-accent/40 transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accentSecondary/0 group-hover:from-accent/10 group-hover:to-accentSecondary/10 transition-all duration-500" />

      <div className="relative z-10 text-center">
        <div className="text-4xl mb-2">{emoji}</div>
        <p className="text-2xl font-bold text-white mb-1">{value}</p>
        <p className="text-white/60 text-xs uppercase tracking-wider mb-2">{label}</p>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isRevealed ? 1 : 0, height: isRevealed ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-accent text-xs italic">✨ {reveal}</p>
        </motion.div>

        {!isRevealed && (
          <p className="text-[10px] text-white/30 mt-1">tap to reveal</p>
        )}
      </div>
    </motion.div>
  );
}

const funFacts = [
  { emoji: "☕", label: "Coffee Cups", value: "1,247+", reveal: "Fuel for late-night coding" },
  { emoji: "🎵", label: "Lo-Fi Hours", value: "500+", reveal: "Music = Focus mode ON" },
  { emoji: "📚", label: "Tech Articles", value: "200+", reveal: "Always learning something new" },
  { emoji: "🌍", label: "Time Zones", value: "Global", reveal: "Ready to collaborate anywhere" },
];

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section with background */}
      <HeroBackground imagePath="/hero-bg.jpg">
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-white/80 mb-6 animate-float"
                >
                  <FiMapPin className="text-accent" />
                  Embakasi, Nairobi, Kenya
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-1" />
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                  <TypingHeading />
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-white/80 text-lg max-w-2xl mx-auto"
                >
                  Get to know the person behind the code — my journey, my passion, and what drives me.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left - Story */}
                <div className="space-y-6">
                  <ScrollReveal>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="glass rounded-2xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 relative overflow-hidden group"
                    >
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-all duration-500" />

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accentSecondary flex items-center justify-center"
                          >
                            <FiZap className="w-6 h-6 text-white" />
                          </motion.div>
                          <h2 className="text-2xl font-bold text-white">
                            My <span className="gradient-text">Story</span>
                          </h2>
                        </div>

                        <p className="text-white/80 text-lg leading-relaxed mb-6">
                          I'm a passionate <span className="text-white font-medium">Software Developer and ICT professional</span> based 
                          in Nairobi, Kenya. My journey in tech is driven by curiosity and a genuine love for solving 
                          technical problems.
                        </p>

                        <p className="text-white/80 text-lg leading-relaxed mb-6">
                          I have hands-on experience in <span className="text-accent font-medium">full-stack web development</span>,{" "}
                          <span className="text-accent font-medium">mobile application development</span>,{" "}
                          <span className="text-accent font-medium">networking</span>, and <span className="text-accent font-medium">ICT support</span>. 
                          I enjoy building practical digital solutions that make a difference.
                        </p>

                        <p className="text-white/80 text-lg leading-relaxed">
                          Currently, I'm pursuing a <span className="text-white font-medium">Diploma in Software Development</span> at{" "}
                          Nyeri National Polytechnic while gaining real-world experience through attachments and 
                          professional roles.
                        </p>
                      </div>
                    </motion.div>
                  </ScrollReveal>

                  {/* Fun Facts Grid */}
                  <ScrollReveal delay={0.2}>
                    <div className="grid grid-cols-2 gap-4">
                      {funFacts.map((fact, i) => (
                        <FunFactCard key={i} {...fact} index={i} />
                      ))}
                    </div>
                  </ScrollReveal>
                </div>

                {/* Right - Timeline */}
                <div>
                  <ScrollReveal>
                    <div className="flex items-center gap-3 mb-8">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-accentSecondary to-accent flex items-center justify-center"
                      >
                        <FiTrendingUp className="w-6 h-6 text-white" />
                      </motion.div>
                      <h2 className="text-2xl font-bold text-white">
                        My <span className="gradient-text">Journey</span>
                      </h2>
                    </div>
                  </ScrollReveal>

                  <div className="relative space-y-6 pl-4">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 1.5 }}
                      viewport={{ once: true }}
                      className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent via-accentSecondary to-transparent origin-top"
                    />

                    {journey.map((item, i) => (
                      <ScrollReveal key={i} delay={i * 0.15}>
                        <motion.div
                          whileHover={{ x: 8 }}
                          className="relative flex gap-6 group"
                        >
                          <div className="relative z-10 flex-shrink-0">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center border-4 border-primary shadow-lg ${
                                item.current ? "animate-pulse-slow" : ""
                              }`}
                            >
                              <item.icon className="w-5 h-5 text-white" />
                            </motion.div>
                            {item.current && (
                              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-primary animate-pulse" />
                            )}
                          </div>

                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex-1 glass rounded-2xl p-5 border border-white/10 hover:border-accent/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/5"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-accent text-sm font-semibold">{item.year}</span>
                              {item.current && (
                                <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                                  CURRENT
                                </span>
                              )}
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                            <p className="text-accent/80 text-sm mb-2">{item.company}</p>
                            <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                          </motion.div>
                        </motion.div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </HeroBackground>

      {/* What Drives Me Section */}
      <section className="py-20 px-4 bg-primary relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-white/70 mb-4">
                <FiTarget className="text-accent" />
                My Core Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                What <span className="gradient-text">Drives</span> Me
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                These principles guide every line of code I write and every project I build.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`relative bg-gradient-to-br ${item.color} rounded-2xl p-8 border border-white/5 hover:border-accent/30 transition-all duration-300 overflow-hidden group h-full backdrop-blur-sm`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl bg-primary/50 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/10"
                    >
                      <item.icon className="w-8 h-8 text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm text-center leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden rounded-3xl p-12 border border-white/5 bg-gradient-to-r from-accent/10 via-accentSecondary/10 to-accent/10 text-center"
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Let's Build Something <span className="gradient-text">Together</span>
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                  I'm always open to new opportunities, collaborations, and interesting projects. 
                  Let's connect and create something amazing.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accentSecondary text-white rounded-full font-medium hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                >
                  Get In Touch
                  <FiArrowRight />
                </motion.a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}