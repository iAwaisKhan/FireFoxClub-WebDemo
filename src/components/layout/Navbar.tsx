"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-dark shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="relative w-12 h-12 flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(255,113,57,0.5)]"
          >
            <Image
              src="/firefox-logo.svg"
              alt="Firefox Logo"
              fill
              className="object-contain"
            />
          </motion.div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-yellow transition-colors duration-300">
            Mozilla <span className="text-brand-orange">Firefox</span> Club
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link key={link.name} href={link.path} className="relative group overflow-hidden">
                <span className={`text-sm font-medium transition-colors ${isActive ? "text-brand-orange" : "text-gray-300 group-hover:text-white"}`}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div layoutId="underline" className="absolute left-0 -bottom-1 w-full h-0.5 bg-brand-orange rounded-full" />
                )}
                <div className="absolute left-0 -bottom-1 w-full h-0.5 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </Link>
            );
          })}
          <Link href="/join">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-brand-red to-brand-orange text-white font-semibold shadow-lg hover:shadow-brand-orange/50 transition-shadow"
            >
              Join Us
            </motion.button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button aria-label={isOpen ? "Close menu" : "Open menu"} className="md:hidden text-white hover:text-brand-orange transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 border-b border-white/10 ${pathname === link.path ? "text-brand-orange" : "text-gray-300 hover:text-white"}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link href="/join" onClick={() => setIsOpen(false)} className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-brand-red to-brand-orange text-white font-semibold shadow-lg">
                  Join Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
