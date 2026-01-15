"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, Phone, Shield, LogOut, Send } from "lucide-react";
import SocialLinks from "@/components/shared/SocialLinks";
import AdminLoginModal from "@/components/ui/AdminLoginModal";
import { useAuth } from "@/contexts/AuthContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const { isAdmin, logout } = useAuth();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubscribed(true);
        setEmail("");
        setTimeout(() => setIsSubscribed(false), 3000);
      } else {
        console.error("Newsletter subscription error:", result.error);
        alert("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      alert("Failed to subscribe. Please try again.");
    }
  };

  const handleAdminClick = () => {
    if (isAdmin) {
      // If already logged in, go to admin panel
      window.location.href = "/admin";
    } else {
      // If not logged in, show login modal
      setShowAdminModal(true);
    }
  };

  const handleLogout = () => {
    logout();
  };

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const itServices = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/mobile-app-development", label: "Mobile App Dev" },
    { href: "/services/ui-ux-design-solutions", label: "UI/UX Design" },
    { href: "/services/ai-machine-learning", label: "AI & ML" },
    { href: "/services/api-integration-automation", label: "API Integration" },
    { href: "/services/erp-crm-solutions", label: "ERP & CRM" },
    { href: "/services/seo-services", label: "SEO Services" },
    { href: "/services/digital-marketing", label: "Digital Marketing" },
    { href: "/services/social-media-management", label: "Social Media" },
    { href: "/services/import-export-it", label: "IT Import/Export" },
  ];

  return (
    <>
      <footer className="bg-slate-800 text-white w-full">
        {/* Newsletter Section */}
        <div className="border-b border-slate-700 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                Stay Updated with STARSYNX (PVT) LTD.
              </h3>
              <p className="text-slate-300 mb-6 text-sm sm:text-base">
                Subscribe to our newsletter for the latest technology insights,
                digital innovation updates, and industry trends.
              </p>

              {isSubscribed ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-green-400 font-semibold"
                >
                  ✓ Successfully subscribed to our newsletter!
                </motion.div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-4 py-2.5 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300"
              >
                STARSYNX
              </Link>
              <p className="text-slate-300 mt-3 leading-relaxed text-sm">
                Synchronizing Technology, Accelerating Results. STARSYNX (PVT)
                LTD. delivers comprehensive digital solutions including Digital
                Experience, Intelligent Automation, Digital Marketing, and IT
                Hardware Trade across Pakistan (Head Office), UAE, and
                Australia.
              </p>
              <div className="mt-4">
                <SocialLinks iconSize={20} />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 text-cyan-400">
                Quick Links
              </h4>
              <ul className="space-y-1.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Digital Services */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 text-cyan-400">
                Digital Services
              </h4>
              <ul className="space-y-1.5">
                {itServices.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 text-cyan-400">
                Contact Info
              </h4>
              <div className="space-y-2.5">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div className="text-slate-300 text-sm">
                    <p>Pakistan (Head Office)</p>
                    <p>UAE & Australia (Regional)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <a
                    href="tel:+923030735555"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    +92 303 073 5555
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <a
                    href="mailto:contact@starsynx.com"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    contact@starsynx.com
                  </a>
                </div>
              </div>

              {/* Admin Section */}
              <div className="mt-4 pt-4 border-t border-slate-700">
                <h5 className="text-xs font-semibold mb-2 text-cyan-400">
                  Admin Access
                </h5>
                {isAdmin ? (
                  <div className="space-y-1.5">
                    <button
                      onClick={handleAdminClick}
                      className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-300 text-xs"
                    >
                      <Shield className="w-3 h-3" />
                      <span>Admin Panel</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 text-slate-400 hover:text-slate-300 transition-colors duration-300 text-xs"
                    >
                      <LogOut className="w-3 h-3" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleAdminClick}
                    className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-xs"
                  >
                    <Shield className="w-3 h-3" />
                    <span>Admin Login</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0 gap-3">
              <p className="text-slate-400 text-xs sm:text-sm text-center lg:text-left">
                © 2025 STARSYNX (PVT) LTD. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Link
                    href="/privacy"
                    className="hover:text-cyan-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="hover:text-cyan-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3 h-3" />
                    <span>+92 303 073 5555</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3 h-3" />
                    <span>contact@starsynx.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={showAdminModal}
        onClose={() => setShowAdminModal(false)}
      />
    </>
  );
}
