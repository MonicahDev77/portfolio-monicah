"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiTwitter, 
  FiCode, FiServer, FiSmartphone, FiBriefcase, FiUsers, FiClock,
  FiInstagram, FiYoutube, FiFacebook, FiMessageCircle, FiMusic,
  FiExternalLink  // ← ADD THIS
} from "react-icons/fi";
import Navbar from "@/components/Navbar";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";
import FlipCard from "@/components/FlipCard";
import PersonalitySection from "@/components/PersonalitySection";
import TerminalAnimation from "@/components/TerminalAnimation";
import FloatingIcons from "@/components/FloatingIcons";

// ═══════════════════════════════════════════════════════════════
// 📝 FEATURED PROJECTS — Add your projects here!
// ═══════════════════════════════════════════════════════════════
// These will show on the homepage. To edit, change this array only.
// ═══════════════════════════════════════════════════════════════

const featuredProjects = [
  // 🔥 CURRENTLY WORKING ON
  {
    id: 1,
    title: "Haven Scout",
    subtitle: "Mobile App",
    description: "A mobile application that lets people easily rent and find houses directly through their phone.",
    tech: ["Flutter", "Firebase"],
    image: "🏠",
    category: "Mobile",
    status: "In Progress",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Hotel Booking Website",
    subtitle: "Full-Stack Web App",
    description: "Modern hotel website with room browsing, online booking, and admin dashboard.",
    tech: ["React", "Node.js", "MySQL"],
    image: "🏨",
    category: "Web",
    status: "In Progress",
    accent: "from-purple-500 to-pink-400",
  },
  // 🎯 COMING SOON / PLANNED
  {
    id: 3,
    title: "School Management System",
    subtitle: "Web Platform",
    description: "A comprehensive system for schools to manage students, grades, attendance, and communication.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "🎓",
    category: "System",
    status: "Coming Soon",
    accent: "from-green-500 to-emerald-400",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    subtitle: "Web Application",
    description: "Full-featured online store with payment integration, inventory, and order tracking.",
    tech: ["Next.js", "Stripe", "MongoDB"],
    image: "🛒",
    category: "Web",
    status: "Planned",
    accent: "from-orange-500 to-red-400",
  },
  {
    id: 5,
    title: "Personal Finance Tracker",
    subtitle: "Mobile App",
    description: "Track expenses, set budgets, and visualize your spending habits with beautiful charts.",
    tech: ["Flutter", "Firebase"],
    image: "💰",
    category: "Mobile",
    status: "Planned",
    accent: "from-yellow-500 to-orange-400",
  },
  {
    id: 6,
    title: "Inventory Management System",
    subtitle: "Desktop + Web",
    description: "Business inventory tracking with stock alerts, reports, and supplier management.",
    tech: ["Laravel", "MySQL", "Tailwind"],
    image: "📦",
    category: "System",
    status: "Planned",
    accent: "from-cyan-500 to-blue-400",
  },
];

// ═══════════════════════════════════════════════════════════════

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/MonicahDev77", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/monicah-wangari-5a838b380", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://x.com/TancyMinah", label: "Twitter" },
  { icon: FiInstagram, href: "https://instagram.com/tancy_minah", label: "Instagram" },
  { icon: FiYoutube, href: "https://youtube.com/@tancyminah", label: "YouTube" },
  { icon: FiFacebook, href: "https://www.facebook.com/share/1F7kZrsELR/", label: "Facebook" },
  { icon: FiMusic, href: "https://www.tiktok.com/@tancy_minah77", label: "TikTok" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <HeroBackground imagePath="/hero-bg.jpg">
        <FloatingIcons />
        <div className="min-h-screen flex items-center relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-white/90 animate-float">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  🚀 Available for freelance work
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-accent via-accentSecondary to-accent bg-[length:200%] animate-gradient bg-clip-text text-transparent">
                    Monicah Wangari
                  </span>
                </h1>

                <div className="text-xl md:text-2xl text-white/80">
                  <span className="gradient-text text-2xl md:text-3xl font-bold">Software Developer</span>
                  <span className="text-white/60 mx-2">•</span>
                  <span className="text-white/70">Full-Stack Developer</span>
                  <span className="text-white/60 mx-2">•</span>
                  <span className="text-white/70">ICT Support</span>
                </div>

                <p className="text-white/70 text-lg max-w-lg leading-relaxed">
                  I'm a passionate Software Developer and ICT professional with hands-on experience 
                  in full-stack web development, mobile application development, networking, and ICT support.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/projects">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-accent to-accentSecondary text-white rounded-full font-medium hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 flex items-center gap-2"
                    >
                      View My Work <FiArrowRight />
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 glass text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                  >
                    <FiDownload /> Download CV
                  </motion.button>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="p-2 glass rounded-full hover:bg-white/10 transition-all hover:border-accent/30 group relative"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] text-white/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 glass text-xs rounded-full text-white/80 border border-white/10 hover:border-accent/30 transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Right Content - Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: 10, label: "Projects", suffix: "+", icon: FiBriefcase },
                    { number: 1, label: "Experience", suffix: "+ year", icon: FiClock },
                    { number: 5, label: "Clients", suffix: "+", icon: FiUsers },
                    { number: 10, label: "Technologies", suffix: "+", icon: FiCode },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="glass backdrop-blur-xl rounded-2xl p-5 text-center border border-white/20 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 bg-white/5"
                    >
                      <stat.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                      <div className="text-3xl md:text-4xl font-bold text-white">
                        <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                      </div>
                      <p className="text-white/80 text-sm mt-1 font-medium">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: FiCode, label: "Web Dev", desc: "React, Node.js" },
                    { icon: FiServer, label: "Backend", desc: "Python, PHP" },
                    { icon: FiSmartphone, label: "Mobile", desc: "Flutter" },
                  ].map((service, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="glass backdrop-blur-md p-3 rounded-xl text-center border border-white/20 hover:border-accent/40 transition-all duration-300"
                    >
                      <service.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                      <p className="text-white/90 text-xs font-medium">{service.label}</p>
                      <p className="text-white/60 text-[10px]">{service.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </HeroBackground>

            {/* ═══════════════════════════════════════════════════════════ */}
      {/* 📁 FEATURED PROJECTS SECTION */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-primary relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-white/80 mb-3"
                >
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  What I'm Building
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-white/70">
                  A glimpse of what I'm working on and planning to build
                </p>
              </div>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="text-accent hover:text-accentSecondary transition-colors flex items-center gap-2 group"
                >
                  View All Projects
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-transparent transition-all duration-500 bg-surface/60 backdrop-blur-md h-full flex flex-col"
                >
                  {/* Animated gradient border */}
                  <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                  {/* Top - Image + status */}
                  <div className="relative h-40 bg-gradient-to-br from-white/5 via-transparent to-white/5 flex items-center justify-center overflow-hidden">
                    {/* Blurred blobs */}
                    <motion.div
                      animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-4 left-4 w-20 h-20 bg-accent/20 rounded-full blur-3xl"
                    />
                    <motion.div
                      animate={{ x: [0, -20, 20, 0], y: [0, 10, -10, 0] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-4 right-4 w-24 h-24 bg-accentSecondary/20 rounded-full blur-3xl"
                    />

                    {/* Icon */}
                    <motion.span
                      className="relative z-10 text-6xl"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                    >
                      {project.image}
                    </motion.span>

                    {/* Status badge */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-3 right-3 z-20"
                    >
                      <span className={`text-[10px] px-2.5 py-1 rounded-full border font-medium ${
                        project.status === "In Progress"
                          ? "bg-green-500/20 text-green-300 border-green-500/40"
                          : project.status === "Coming Soon"
                          ? "bg-blue-500/20 text-blue-300 border-blue-500/40"
                          : "bg-white/10 text-white/60 border-white/20"
                      }`}>
                        {project.status === "In Progress" ? "🟢 " : project.status === "Coming Soon" ? "🔵 " : "⚪ "}
                        {project.status}
                      </span>
                    </motion.div>

                    {/* Category tag */}
                    <div className="absolute bottom-3 left-3 z-20">
                      <span className={`text-[10px] px-2.5 py-1 rounded-full bg-gradient-to-r ${project.accent} text-white font-medium shadow-lg`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Shimmer */}
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
                      className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative p-5 z-10 flex-1 flex flex-col">
                    <div className="mb-3">
                      <p className="text-xs text-accent/80 mb-1">{project.subtitle}</p>
                      <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-white/60 text-sm mb-4 line-clamp-2 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-2 py-0.5 bg-primary/60 text-white/70 text-xs rounded-full border border-white/5 hover:border-accent/40 transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Personality Section */}
      <PersonalitySection />

      {/* Personality Section */}
      <PersonalitySection />

      {/* Quote Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Words I Live <span className="gradient-text">By</span>
              </h2>
              <p className="text-textSecondary">Tap the refresh button for more inspiration</p>
            </div>
            <FlipCard />
          </ScrollReveal>
        </div>
      </section>

      {/* Terminal */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Behind the <span className="gradient-text">Scenes</span>
              </h2>
              <p className="text-textSecondary">A glimpse into my workflow</p>
            </div>
            <TerminalAnimation />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden rounded-3xl p-12 border border-white/5 bg-gradient-to-r from-accent/10 via-accentSecondary/10 to-accent/10"
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Let's Build Something <span className="gradient-text">Meaningful</span>
                </h2>
                <p className="text-textSecondary text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Whether you're looking for a developer, collaborator, or freelancer, 
                  I'd love to hear about your project.
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group px-8 py-4 bg-gradient-to-r from-accent to-accentSecondary text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2 mx-auto"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Tell Me About Your Project <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}