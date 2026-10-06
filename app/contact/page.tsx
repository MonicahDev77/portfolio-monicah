"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter,
  FiInstagram, FiYoutube, FiFacebook, FiMessageCircle, FiMusic,
  FiSend, FiCheckCircle, FiClock, FiUser, FiAtSign, FiMessageSquare,
  FiAlertCircle
} from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

// ═══════════════════════════════════════════════════════════════
// 🔑 EMAILJS CONFIG — REPLACE THESE WITH YOUR OWN IDs
// ═══════════════════════════════════════════════════════════════
const EMAILJS_SERVICE_ID = "service_jgqngbl";
const EMAILJS_TEMPLATE_ID = "template_udvv4yo";
const EMAILJS_PUBLIC_KEY = "EGyO4xdVq95XVrvxG";
// ═══════════════════════════════════════════════════════════════

// Floating background icons
function FloatingIcons() {
  const icons = [
    { Icon: FiMail, color: "#3B82F6", x: "10%", y: "20%" },
    { Icon: FiMessageCircle, color: "#8B5CF6", x: "85%", y: "15%" },
    { Icon: FiSend, color: "#06B6D4", x: "15%", y: "75%" },
    { Icon: FiAtSign, color: "#EC4899", x: "90%", y: "70%" },
    { Icon: FiPhone, color: "#10B981", x: "50%", y: "10%" },
    { Icon: FiUser, color: "#F59E0B", x: "5%", y: "50%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, color, x, y }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.15, 0.1, 0.15, 0],
            scale: [0, 1, 0.9, 1.1, 0],
            y: [0, -30, -60, -90, -120],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{ left: x, top: y }}
        >
          <Icon style={{ color }} className="w-10 h-10" />
        </motion.div>
      ))}
    </div>
  );
}

// Contact info card with hover animations
function ContactCard({ icon: Icon, label, value, color, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ x: 8, scale: 1.02 }}
      className="group relative bg-surface/60 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-accent/40 transition-all duration-300 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"
        style={{ background: `radial-gradient(circle at left, ${color}, transparent 70%)` }}
      />

      <div className="relative z-10 flex items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.15, rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="p-3 rounded-xl flex-shrink-0"
          style={{ backgroundColor: `${color}20`, color }}
        >
          <Icon className="w-5 h-5" />
        </motion.div>
        <div>
          <p className="text-sm text-white/60 mb-0.5">{label}</p>
          <p className="text-white font-medium break-all">{value}</p>
        </div>
      </div>

      <div
        className="absolute top-0 right-0 w-1 h-full opacity-50"
        style={{ background: `linear-gradient(to bottom, ${color}, transparent)` }}
      />
    </motion.div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setStatus("sending");
    setError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: "devminah30@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      reset();
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (err) {
      console.error("Email send failed:", err);
      setStatus("error");
      setError("Failed to send message. Please try again or email me directly at devminah30@gmail.com");
    }
  };

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/MonicahDev77", label: "GitHub", color: "#FFFFFF" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/monicah-wangari-5a838b380", label: "LinkedIn", color: "#0A66C2" },
    { icon: FiTwitter, href: "https://x.com/TancyMinah", label: "Twitter", color: "#1DA1F2" },
    { icon: FiInstagram, href: "https://instagram.com/tancy_minah", label: "Instagram", color: "#E4405F" },
    { icon: FiYoutube, href: "https://youtube.com/@tancyminah", label: "YouTube", color: "#FF0000" },
    { icon: FiFacebook, href: "https://www.facebook.com/share/1F7kZrsELR/", label: "Facebook", color: "#1877F2" },
    { icon: FiMusic, href: "https://www.tiktok.com/@tancy_minah77", label: "TikTok", color: "#FFFFFF" },
    { icon: FiMessageCircle, href: "https://wa.me/254758292238", label: "WhatsApp", color: "#25D366" },
  ];

  const contactInfo = [
    { icon: FiMail, label: "Email", value: "devminah30@gmail.com", color: "#3B82F6" },
    { icon: FiMapPin, label: "Location", value: "Embakasi, Nairobi, Kenya", color: "#EF4444" },
    { icon: FiPhone, label: "Phone", value: "+254 758 292 238", color: "#10B981" },
    { icon: FiClock, label: "Response Time", value: "Within 24 hours", color: "#F59E0B" },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <HeroBackground imagePath="/hero-bg.jpg">
        <FloatingIcons />
        <section className="relative pt-32 pb-16 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-white/80 mb-6 animate-float"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for freelance work
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-white mb-4"
              >
                Contact{" "}
                <span className="bg-gradient-to-r from-accent via-accentSecondary to-accent bg-[length:200%] animate-gradient bg-clip-text text-transparent">
                  Me
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/80 text-lg max-w-2xl mx-auto"
              >
                Have a question or want to work together? Let's get in touch!
              </motion.p>
            </motion.div>
          </div>
        </section>
      </HeroBackground>

      {/* Contact Content */}
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left - Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((item, i) => (
                <ContactCard key={i} {...item} delay={i * 0.1} />
              ))}

              {/* Social Links */}
              <ScrollReveal delay={0.4}>
                <div className="bg-surface/60 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <p className="text-white/60 text-sm mb-4">Connect with me:</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05, type: "spring" }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          y: -6, 
                          scale: 1.15,
                          boxShadow: `0 10px 30px -10px ${social.color}`,
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-primary/50 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group relative"
                        aria-label={social.label}
                      >
                        <social.icon 
                          className="w-5 h-5 text-white/70 group-hover:text-white transition-colors"
                        />
                        <span
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          style={{ backgroundColor: social.color }}
                        />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-primary/90 px-2 py-1 rounded">
                          {social.label}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <motion.div
                  whileHover={{ scale: 1.005 }}
                  className="relative bg-surface/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 overflow-hidden"
                >
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-accent via-accentSecondary to-accent opacity-30 blur-md" />

                  <div className="relative z-10">
                    <AnimatePresence mode="wait">
                      {status === "success" ? (
                        <motion.div
                          key="success"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="flex flex-col items-center justify-center py-16"
                        >
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                            className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 relative"
                          >
                            <motion.div
                              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute inset-0 rounded-full bg-green-500/30"
                            />
                            <FiCheckCircle className="w-10 h-10 text-green-500 relative z-10" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-white mb-2">Message Sent! 🎉</h3>
                          <p className="text-white/60 text-center max-w-md">
                            Thank you for reaching out! I'll get back to you within 24 hours.
                          </p>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmit(onSubmit)}
                          className="space-y-5"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-white/70 mb-2">
                                Your Name <span className="text-accent">*</span>
                              </label>
                              <div className="relative">
                                <FiUser className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === "name" ? "text-accent" : "text-white/30"}`} />
                                <input
                                  {...register("name")}
                                  onFocus={() => setFocusedField("name")}
                                  onBlur={() => setFocusedField(null)}
                                  type="text"
                                  className="w-full pl-12 pr-4 py-3 bg-primary/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent transition-all duration-300 focus:ring-2 focus:ring-accent/20"
                                />
                              </div>
                              {errors.name && (
                                <motion.p
                                  initial={{ opacity: 0, y: -5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="text-red-400 text-xs mt-1"
                                >
                                  {errors.name.message}
                                </motion.p>
                              )}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-white/70 mb-2">
                                Email Address <span className="text-accent">*</span>
                              </label>
                              <div className="relative">
                                <FiAtSign className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === "email" ? "text-accent" : "text-white/30"}`} />
                                <input
                                  {...register("email")}
                                  onFocus={() => setFocusedField("email")}
                                  onBlur={() => setFocusedField(null)}
                                  type="email"
                                  className="w-full pl-12 pr-4 py-3 bg-primary/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent transition-all duration-300 focus:ring-2 focus:ring-accent/20"
                                />
                              </div>
                              {errors.email && (
                                <motion.p
                                  initial={{ opacity: 0, y: -5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="text-red-400 text-xs mt-1"
                                >
                                  {errors.email.message}
                                </motion.p>
                              )}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Subject <span className="text-accent">*</span>
                            </label>
                            <div className="relative">
                              <FiMessageSquare className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focusedField === "subject" ? "text-accent" : "text-white/30"}`} />
                              <input
                                {...register("subject")}
                                onFocus={() => setFocusedField("subject")}
                                onBlur={() => setFocusedField(null)}
                                type="text"
                                className="w-full pl-12 pr-4 py-3 bg-primary/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent transition-all duration-300 focus:ring-2 focus:ring-accent/20"
                              />
                            </div>
                            {errors.subject && (
                              <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-400 text-xs mt-1"
                              >
                                {errors.subject.message}
                              </motion.p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                              Message <span className="text-accent">*</span>
                            </label>
                            <textarea
                              {...register("message")}
                              onFocus={() => setFocusedField("message")}
                              onBlur={() => setFocusedField(null)}
                              rows={5}
                              className="w-full px-4 py-3 bg-primary/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent transition-all duration-300 focus:ring-2 focus:ring-accent/20 resize-none"
                            />
                            {errors.message && (
                              <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-400 text-xs mt-1"
                              >
                                {errors.message.message}
                              </motion.p>
                            )}
                          </div>

                          {/* Error message */}
                          {error && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl p-3"
                            >
                              <FiAlertCircle className="flex-shrink-0" />
                              <span>{error}</span>
                            </motion.div>
                          )}

                          <motion.button
                            type="submit"
                            disabled={status === "sending"}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full relative px-8 py-4 bg-gradient-to-r from-accent to-accentSecondary text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group disabled:opacity-50"
                          >
                            <motion.span
                              animate={{ x: ["-100%", "200%"] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                            />
                            {status === "sending" ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <FiSend className="group-hover:translate-x-1 transition-transform" />
                                Send Message
                              </>
                            )}
                          </motion.button>

                          <p className="text-white/50 text-xs text-center">
                            I'll respond within 24 hours. Your information is safe with me. 🔒
                          </p>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring" }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-white/80 mb-4"
              >
                <FiMapPin className="text-accent" />
                Find Me Here
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Based in <span className="gradient-text">Embakasi, Nairobi</span>
              </h2>
              <p className="text-white/60">Open to remote work and in-person meetings</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-accent/5 group"
            >
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/50 rounded-tl-3xl z-10 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accentSecondary/50 rounded-br-3xl z-10 pointer-events-none" />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.93667318871!2d36.81894595!3d-1.31922195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sEmbakasi%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                width="100%"
                height="450"
                style={{ 
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Embakasi, Nairobi Location"
                className="w-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}