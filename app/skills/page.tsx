"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit,
  FaGithub, FaPython, FaPhp, FaLaravel, FaNetworkWired,
  FaTools, FaMobileAlt, FaAndroid
} from "react-icons/fa";
import {
  SiMysql, SiFlutter, SiAndroidstudio, SiCisco,
} from "react-icons/si";

const skillsData = {
  Frontend: [
    { name: "HTML", icon: FaHtml5, color: "#E34F26", level: 90 },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6", level: 88 },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 85 },
    { name: "React", icon: FaReact, color: "#61DAFB", level: 82 },
  ],
  Backend: [
    { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 78 },
    { name: "Python", icon: FaPython, color: "#3776AB", level: 75 },
    { name: "PHP", icon: FaPhp, color: "#777BB4", level: 80 },
    { name: "Laravel", icon: FaLaravel, color: "#FF2D20", level: 78 },
  ],
  Mobile: [
    { name: "Flutter", icon: SiFlutter, color: "#02569B", level: 75 },
    { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84", level: 70 },
  ],
  Database: [
    { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 85 },
  ],
  "Networking & ICT": [
    { name: "Networking", icon: FaNetworkWired, color: "#0EA5E9", level: 80 },
    { name: "ICT Support", icon: FaTools, color: "#F59E0B", level: 85 },
  ],
  "Tools & Version Control": [
    { name: "Git", icon: FaGit, color: "#F05032", level: 85 },
    { name: "GitHub", icon: FaGithub, color: "#FFFFFF", level: 88 },
  ],
};

const expertiseData = [
  { label: "Frontend", level: 88, color: "from-blue-500 to-cyan-400" },
  { label: "Backend", level: 78, color: "from-purple-500 to-pink-400" },
  { label: "Mobile", level: 72, color: "from-green-500 to-emerald-400" },
];

// 3D Tilt Card Component
function SkillCard({ skill, index }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
  };

  const handleMouseLeave = () => setTransform("");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 150 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      className="relative bg-surface/60 backdrop-blur-md rounded-xl p-4 text-center border border-white/10 hover:border-accent/50 transition-colors duration-300 group cursor-pointer overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-2xl"
        style={{ background: `radial-gradient(circle, ${skill.color}, transparent 70%)` }}
      />

      <div className="relative z-10">
        <skill.icon
          className="w-10 h-10 mx-auto mb-2 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-[360deg]"
          style={{ color: skill.color }}
        />
        <p className="text-white text-xs font-medium mb-1">{skill.name}</p>
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="h-full rounded-full"
            style={{ background: skill.color }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// Animated Progress Bar
function AnimatedBar({ level, color }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start: number;
    const animate = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / 1500, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * level));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, level]);

  return (
    <div ref={ref} className="flex justify-between items-center mb-3">
      <span className="text-white font-medium">{color.label}</span>
      <span className="text-accent font-bold">{count}%</span>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
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
                  className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-white/80 mb-6"
                >
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  My Tech Arsenal
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                  My <span className="gradient-text">Skills</span>
                </h1>
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                  Technologies and tools I use to build amazing applications.
                </p>
              </div>

              <div className="space-y-12">
                {Object.entries(skillsData).map(([category, items], categoryIndex) => (
                  <ScrollReveal key={category} delay={categoryIndex * 0.1}>
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                        <span className="w-1 h-8 rounded-full bg-gradient-to-b from-accent to-accentSecondary" />
                        {category}
                        <span className="text-sm text-white/50 font-normal">
                          ({items.length})
                        </span>
                      </h2>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {items.map((skill, skillIndex) => (
                          <SkillCard key={skill.name} skill={skill} index={skillIndex} />
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </HeroBackground>

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-primary relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                My <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-white/70">A breakdown of my primary skill areas</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertiseData.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-surface rounded-2xl p-6 border border-white/5 hover:border-accent/30 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <div className="relative z-10">
                    <AnimatedBar level={item.level} color={item} />
                    <div className="w-full h-2 bg-primary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${item.color} relative`}
                      >
                        <motion.div
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Learning Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Currently <span className="gradient-text">Learning</span>
              </h2>
              <p className="text-white/70">Always growing, always curious</p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3">
            {["Networking", "System Design", "Cloud Computing", "Advanced React", "Mobile Development"].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="px-5 py-2 glass rounded-full text-white text-sm border border-white/10 hover:border-accent/50 cursor-pointer"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}