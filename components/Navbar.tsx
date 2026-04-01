"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled 
          ? "py-4 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-white/20 shadow-lg" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="relative z-50 group">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://thebrokrs.co.in/wp-content/uploads/2024/08/Final-brokrs-grand-sapphire-2-1024x422.png"
              alt="TheBrokr Logo"
              className={cn(
                "transition-all duration-500",
                isScrolled ? "h-10" : "h-12"
              )}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Button
                variant="ghost"
                className={cn(
                  "px-5 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-transparent",
                  isScrolled 
                    ? "text-brand-950 hover:text-indigo-600" 
                    : "text-white hover:text-white/80"
                )}
                asChild
              >
                <Link href={link.href}>
                  {link.name}
                </Link>
              </Button>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="ml-4"
          >
            <Button 
              className={cn(
                "rounded-full px-8 py-6 text-sm font-bold uppercase tracking-[0.1em] transition-all duration-500",
                isScrolled
                  ? "bg-brand-950 text-white hover:bg-brand-800 shadow-xl border border-transparent"
                  : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-950 shadow-none"
              )}
              asChild
            >
              <Link href="#contact" className="group">
                Join Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-50 p-2 text-slate-900 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-2xl font-display font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Button 
                size="lg"
                className="bg-white text-brand-950 border border-brand-100 rounded-full px-10 hover:bg-brand-50"
                asChild
              >
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

