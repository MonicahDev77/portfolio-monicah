"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiYoutube, 
  FiFacebook, FiMessageCircle, FiMusic, FiMail, FiMapPin, FiPhone 
} from "react-icons/fi";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/MonicahDev77", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/monicah-wangari-5a838b380", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://x.com/TancyMinah", label: "Twitter" },
  { icon: FiInstagram, href: "https://instagram.com/tancy_minah", label: "Instagram" },
  { icon: FiYoutube, href: "https://youtube.com/@tancyminah", label: "YouTube" },
  { icon: FiFacebook, href: "https://www.facebook.com/share/1F7kZrsELR/", label: "Facebook" },
  { icon: FiMessageCircle, href: "https://wa.me/254758292238", label: "WhatsApp" },
  { icon: FiMusic, href: "https://www.tiktok.com/@tancy_minah77", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="section-premium border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="text-2xl font-bold font-heading">
              <span className="gradient-text">MW</span>
            </Link>
            <p className="text-textSecondary text-sm">
              Building software that solves real-world problems.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-textSecondary hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-textSecondary hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-textSecondary text-sm">
                <FiMail className="text-accent flex-shrink-0" />
                <span className="break-all">monicahwangarinjuguna05@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-textSecondary text-sm">
                <FiMapPin className="text-accent flex-shrink-0" />
                Embakasi, Nairobi, Kenya
              </li>
              <li className="flex items-center gap-2 text-textSecondary text-sm">
                <FiPhone className="text-accent flex-shrink-0" />
                +254 758 292 238
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "Python", "PHP", "Laravel", "Flutter", "MySQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 glass text-xs rounded-full text-textSecondary border border-white/5"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p className="text-textSecondary text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Monicah Wangari</span>. 
            Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}