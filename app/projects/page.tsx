"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  FiGithub, FiExternalLink, FiCheckCircle, FiSearch, 
  FiLayout, FiCode, FiServer, FiSmartphone
} from "react-icons/fi";

// ═══════════════════════════════════════════════════════════════
// 📝 PROJECTS — Edit here!
// ═══════════════════════════════════════════════════════════════
// Status options:
//   "In Progress"  → 🟢 Green badge
//   "Coming Soon"  → 🔵 Blue badge
//   "Planned"      → ⚪ Gray badge
//   ""             → No badge (for completed projects)
// ═══════════════════════════════════════════════════════════════

const projects: any[] = [
  // ═══════════════════════════════════════════════════════════════
  // 🔥 CURRENTLY WORKING ON
  // ═══════════════════════════════════════════════════════════════
  {
    id: 1,
    title: "Haven Scout",
    subtitle: "House Rental Mobile App",
    description: "A mobile application that allows people to easily rent and look for houses directly through their phone. Built with a clean UX for browsing listings, viewing property details, and connecting with landlords.",
    features: ["House Listings", "Search & Filters", "Landlord Contact", "User Profiles"],
    tech: ["Flutter", "Firebase", "Node.js"],
    image: "🏠",
    category: "Mobile",
    live: "#",
    github: "#",
    challenge: "Building a smooth house-hunting experience on mobile with real-time listings",
    accent: "from-blue-500 to-cyan-400",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Hotel Booking Website",
    subtitle: "Full-Stack Web Application",
    description: "A modern hotel website that lets guests browse rooms, check availability, and make reservations online. Currently in active development with a focus on smooth booking flow and admin dashboard.",
    features: ["Room Browsing", "Online Booking", "Admin Dashboard", "Payment Integration"],
    tech: ["React", "Node.js", "MySQL", "Tailwind"],
    image: "🏨",
    category: "Web",
    live: "#",
    github: "#",
    challenge: "Creating an intuitive booking system with real-time availability",
    accent: "from-purple-500 to-pink-400",
    status: "In Progress",
  },

  // ═══════════════════════════════════════════════════════════════
  // 🎯 COMING SOON
  // ═══════════════════════════════════════════════════════════════
  {
    id: 3,
    title: "School Management System",
    subtitle: "Web Platform",
    description: "A comprehensive system for schools to manage students, grades, attendance, and parent communication in one unified platform.",
    features: ["Student Records", "Grade Management", "Attendance Tracking", "Parent Portal"],
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "🎓",
    category: "Web",
    live: "#",
    github: "#",
    challenge: "Designing a system flexible enough for different school sizes",
    accent: "from-green-500 to-emerald-400",
    status: "Coming Soon",
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    subtitle: "Mobile App",
    description: "Track daily expenses, set monthly budgets, and visualize spending habits with beautiful charts and insights.",
    features: ["Expense Tracking", "Budget Setting", "Visual Charts", "Categories"],
    tech: ["Flutter", "Firebase"],
    image: "💰",
    category: "Mobile",
    live: "#",
    github: "#",
    challenge: "Making finance tracking feel effortless",
    accent: "from-yellow-500 to-orange-400",
    status: "Coming Soon",
  },
  {
    id: 5,
    title: "Church Management System",
    subtitle: "Web + Desktop",
    description: "Manage members, donations, events, and communication for churches of all sizes with a friendly, easy-to-use interface.",
    features: ["Member Directory", "Donation Tracking", "Event Calendar", "Announcements"],
    tech: ["Laravel", "MySQL", "Tailwind"],
    image: "⛪",
    category: "Web",
    live: "#",
    github: "#",
    challenge: "Making tech simple enough for non-technical church staff",
    accent: "from-indigo-500 to-purple-400",
    status: "Coming Soon",
  },
  {
    id: 6,
    title: "Local Services Finder",
    subtitle: "Mobile App",
    description: "Connect users with trusted local service providers — plumbers, electricians, cleaners, and more.",
    features: ["Service Search", "Provider Profiles", "Reviews & Ratings", "Booking"],
    tech: ["Flutter", "Node.js", "MongoDB"],
    image: "🔧",
    category: "Mobile",
    live: "#",
    github: "#",
    challenge: "Ensuring trust and quality through verified providers",
    accent: "from-teal-500 to-green-400",
    status: "Coming Soon",
  },

  // ═══════════════════════════════════════════════════════════════
  // ⚪ PLANNED
  // ═══════════════════════════════════════════════════════════════
  {
    id: 7,
    title: "E-Commerce Platform",
    subtitle: "Web Application",
    description: "Full-featured online store with payment integration, inventory management, and order tracking for small businesses.",
    features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Tracking"],
    tech: ["Next.js", "Stripe", "MongoDB"],
    image: "🛒",
    category: "Web",
    live: "#",
    github: "#",
    challenge: "Optimizing checkout flow for conversions",
    accent: "from-orange-500 to-red-400",
    status: "Planned",
  },
  {
    id: 8,
    title: "Inventory Management System",
    subtitle: "Desktop + Web",
    description: "Business inventory tracking system with stock alerts, reports, supplier management, and barcode scanning.",
    features: ["Stock Tracking", "Low Stock Alerts", "Reports", "Supplier Management"],
    tech: ["Laravel", "MySQL", "Tailwind"],
    image: "📦",
    category: "Backend",
    live: "#",
    github: "#",
    challenge: "Handling real-time stock updates across multiple devices",
    accent: "from-cyan-500 to-blue-400",
    status: "Planned",
  },
  {
    id: 9,
    title: "Task Manager App",
    subtitle: "Mobile App",
    description: "A productivity app for managing daily tasks with priorities, reminders, and progress tracking.",
    features: ["Task Lists", "Priorities", "Reminders", "Progress Tracking"],
    tech: ["Flutter", "Firebase"],
    image: "✅",
    category: "Mobile",
    live: "#",
    github: "#",
    challenge: "Making task management simple yet powerful",
    accent: "from-teal-500 to-cyan-400",
    status: "Planned",
  },
  {
    id: 10,
    title: "Fitness Tracker",
    subtitle: "Mobile App",
    description: "Track workouts, calories, and progress with personalized fitness goals and daily motivation.",
    features: ["Workout Logs", "Calorie Tracking", "Progress Charts", "Goals"],
    tech: ["Flutter", "Firebase"],
    image: "💪",
    category: "Mobile",
    live: "#",
    github: "#",
    challenge: "Creating motivating visuals that keep users engaged",
    accent: "from-red-500 to-orange-400",
    status: "Planned",
  },
  {
    id: 11,
    title: "Recipe Sharing Platform",
    subtitle: "Web + Mobile",
    description: "A community platform where users can share, discover, and save their favorite recipes.",
    features: ["Recipe Sharing", "Search & Filters", "Save Favorites", "User Profiles"],
    tech: ["Next.js", "MongoDB", "Node.js"],
    image: "🍳",
    category: "Web",
    live: "#",
    github: "#",
    challenge: "Building an engaging, community-driven platform",
    accent: "from-orange-500 to-yellow-400",
    status: "Planned",
  },
  {
    id: 12,
    title: "Blog & Content Platform",
    subtitle: "Web Application",
    description: "A modern blog platform with rich text editing, categories, comments, and SEO optimization.",
    features: ["Rich Editor", "Categories", "Comments", "SEO Optimized"],
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    image: "✍️",
    category: "Web",
    live: "#",
    github: "#",
    challenge: "Balancing editor simplicity with powerful features",
    accent: "from-pink-500 to-purple-400",
    status: "Planned",
  },
  {
    id: 13,
    title: "Event Ticketing System",
    subtitle: "Web Platform",
    description: "Platform for event organizers to create events, sell tickets, and manage attendees with QR check-in.",
    features: ["Event Creation", "Ticket Sales", "QR Check-in", "Analytics"],
    tech: ["React", "Node.js", "MySQL", "Stripe"],
    image: "🎟️",
    category: "Backend",
    live: "#",
    github: "#",
    challenge: "Preventing ticket fraud with secure QR codes",
    accent: "from-purple-500 to-indigo-400",
    status: "Planned",
  },
  {
    id: 14,
    title: "Weather Dashboard",
    subtitle: "Web Application",
    description: "Beautiful weather dashboard showing forecasts, historical data, and visual alerts for any location.",
    features: ["7-Day Forecast", "Hourly Data", "Location Search", "Weather Alerts"],
    tech: ["React", "OpenWeather API", "Tailwind"],
    image: "🌤️",
    category: "Web",
    live: "#",
    github: "#",
    challenge: "Presenting complex weather data beautifully",
    accent: "from-sky-500 to-blue-400",
    status: "Planned",
  },
  {
    id: 15,
    title: "Learning Management System",
    subtitle: "Web Platform",
    description: "A platform for online courses with video lessons, quizzes, progress tracking, and certificates.",
    features: ["Video Lessons", "Quizzes", "Progress Tracking", "Certificates"],
    tech: ["Next.js", "PostgreSQL", "AWS S3"],
    image: "📚",
    category: "Web",
    live: "#",
    github: "#",
    challenge: "Delivering smooth video streaming at scale",
    accent: "from-emerald-500 to-green-400",
    status: "Planned",
  },
  // 👇 ADD YOUR COMPLETED PROJECTS BELOW
  // Copy this template and adjust:
  //
  // {
  //   id: 16,
  //   title: "Your Completed Project",
  //   subtitle: "Type",
  //   description: "Description...",
  //   features: ["Feature 1", "Feature 2"],
  //   tech: ["React", "Node.js"],
  //   image: "🚀",
  //   category: "Web",
  //   live: "https://your-live-demo.com",
  //   github: "https://github.com/MonicahDev77/repo",
  //   challenge: "Challenge solved",
  //   accent: "from-blue-500 to-purple-400",
  //   status: "",
  // },
];

const categories = [
  { name: "All", icon: FiLayout, color: "from-blue-500 to-cyan-400" },
  { name: "Web", icon: FiCode, color: "from-purple-500 to-pink-400" },
  { name: "Mobile", icon: FiSmartphone, color: "from-green-500 to-emerald-400" },
  { name: "Backend", icon: FiServer, color: "from-orange-500 to-red-400" },
];

// Project Card
function ProjectCard({ project, index }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
    setMousePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform("");
    setMousePos({ x: 50, y: 50 });
  };

  const hasLive = project.live && project.live !== "#";
  const hasGithub = project.github && project.github !== "#";

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.2s ease-out" }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-transparent transition-all duration-500 h-full bg-surface/40 backdrop-blur-md flex flex-col"
    >
      <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />

      <div className="relative h-48 bg-gradient-to-br from-white/5 via-transparent to-white/5 flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 left-4 w-24 h-24 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 right-4 w-32 h-32 bg-accentSecondary/20 rounded-full blur-3xl"
        />

        <motion.span
          className="relative z-10 text-7xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
          whileHover={{ scale: 1.4, rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
        >
          {project.image}
        </motion.span>

        {/* Status badge */}
        {project.status && (
          <motion.div whileHover={{ scale: 1.1 }} className="absolute top-4 right-4 z-20">
            <span className={`text-[10px] px-2.5 py-1 rounded-full border font-medium backdrop-blur-md ${
              project.status === "In Progress"
                ? "bg-green-500/20 text-green-300 border-green-500/40"
                : project.status === "Coming Soon"
                ? "bg-blue-500/20 text-blue-300 border-blue-500/40"
                : project.status === "Planned"
                ? "bg-white/10 text-white/70 border-white/20"
                : ""
            }`}>
              {project.status === "In Progress" && "🟢 "}
              {project.status === "Coming Soon" && "🔵 "}
              {project.status === "Planned" && "⚪ "}
              {project.status}
            </span>
          </motion.div>
        )}

        {/* Category badge */}
        <motion.div whileHover={{ scale: 1.1 }} className="absolute top-4 left-4 z-20">
          <span className={`text-xs px-3 py-1 rounded-full border border-white/20 text-white backdrop-blur-md bg-gradient-to-r ${project.accent} shadow-lg`}>
            {project.category}
          </span>
        </motion.div>

        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
        />
      </div>

      <div className="relative p-6 z-10 flex-1 flex flex-col">
        <div className="mb-3">
          {project.subtitle && (
            <p className="text-xs text-accent/80 mb-1">{project.subtitle}</p>
          )}
          <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>
        <p className="text-white/60 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <motion.div
          whileHover={{ scale: 1.02, x: 5 }}
          className="relative bg-primary/50 backdrop-blur-sm rounded-lg p-3 mb-4 border border-white/5 overflow-hidden"
        >
          <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${project.accent}`} />
          <p className="text-white/70 text-xs pl-2">
            <span className="text-accent font-medium">⚡ Challenge:</span> {project.challenge}
          </p>
        </motion.div>

        <div className="space-y-1.5 mb-4">
          {project.features.slice(0, 3).map((feature: string, i: number) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-white/60 text-xs cursor-default"
            >
              <FiCheckCircle className="text-accent w-3 h-3 flex-shrink-0" />
              {feature}
            </motion.div>
          ))}
          {project.features.length > 3 && (
            <p className="text-white/40 text-xs pl-5">+{project.features.length - 3} more</p>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech: string) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.15, y: -3, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
              className="px-2 py-0.5 bg-primary/60 text-white/70 text-xs rounded-full border border-white/5 hover:border-accent/40 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-3 pt-3 border-t border-white/5 mt-auto">
          {hasLive ? (
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(59,130,246,0.5)" }}
              whileTap={{ scale: 0.97 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 px-4 py-2 bg-gradient-to-r ${project.accent} text-white text-sm rounded-lg transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group/btn`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <FiExternalLink /> Live Demo
              </span>
              <motion.span
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
            </motion.a>
          ) : (
            <div className="flex-1 px-4 py-2 bg-primary/40 text-white/40 text-sm rounded-lg border border-white/5 flex items-center justify-center gap-2 cursor-not-allowed">
              <FiExternalLink /> Coming Soon
            </div>
          )}
          {hasGithub ? (
            <motion.a
              whileHover={{ scale: 1.1, rotate: 12, borderColor: "rgba(59,130,246,0.5)" }}
              whileTap={{ scale: 0.9 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white/20 text-white/70 text-sm rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center"
            >
              <FiGithub />
            </motion.a>
          ) : (
            <div className="px-4 py-2 border border-white/5 text-white/20 text-sm rounded-lg flex items-center cursor-not-allowed">
              <FiGithub />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "All" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
                          project.description.toLowerCase().includes(search.toLowerCase()) ||
                          project.tech.some((t: string) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <HeroBackground imagePath="/hero-bg.jpg">
        <section className="relative pt-32 pb-16 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-white/80 mb-6 animate-float"
                >
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  {projects.length} Projects & Growing
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-7xl font-bold text-white mb-4"
                >
                  My{" "}
                  <span className="bg-gradient-to-r from-accent via-accentSecondary to-accent bg-[length:200%] animate-gradient bg-clip-text text-transparent">
                    Projects
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white/80 text-lg max-w-2xl mx-auto mb-8"
                >
                  A showcase of what I'm building and planning to create.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto"
                >
                  <div className="relative w-full md:w-72">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 glass border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {categories.map((category) => (
                      <motion.button
                        key={category.name}
                        onClick={() => setFilter(category.name)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-4 py-2.5 rounded-full transition-all duration-300 text-sm flex items-center gap-2 ${
                          filter === category.name
                            ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                            : "glass text-white/70 hover:text-white border border-white/10 hover:border-accent/40"
                        }`}
                      >
                        {filter === category.name && (
                          <motion.span
                            layoutId="filterBg"
                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color} -z-10`}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        <category.icon className="w-4 h-4" />
                        {category.name}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                <motion.p
                  key={filteredProjects.length}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white/60 text-sm mt-6"
                >
                  Showing <span className="text-accent font-semibold">{filteredProjects.length}</span> of {projects.length} projects
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>
      </HeroBackground>

      {/* Projects Grid */}
      <section className="py-16 px-4 bg-primary relative overflow-hidden">
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
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                key="empty-filter"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-20"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-4"
                >
                  🔍
                </motion.div>
                <p className="text-white text-lg mb-2">No projects found</p>
                <p className="text-white/60 text-sm">Try a different filter or search term</p>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden rounded-3xl p-12 border border-white/5 bg-gradient-to-r from-accent/10 via-accentSecondary/10 to-accent/10"
            >
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/60 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                />
              ))}

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
                Have a Project in <span className="gradient-text">Mind?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                Let's turn your idea into reality. I'm available for freelance work and collaborations.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accentSecondary text-white rounded-full font-medium hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 relative z-10 group"
              >
                Start a Conversation
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}