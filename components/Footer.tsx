"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Download, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-b from-slate-50 to-slate-100/80 text-brand-950 pt-24 pb-12 overflow-hidden border-t border-brand-100/50">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-200/20 blur-[120px] rounded-full" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="inline-block transform transition-transform hover:scale-105">
              <img
                src="https://thebrokrs.co.in/wp-content/uploads/2024/08/Final-brokrs-grand-sapphire-2-1024x422.png"
                alt="TheBrokr Logo"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-brand-600 text-sm leading-relaxed max-w-xs">
              TheBrokr — A Platform Where Skills, Business & Opportunity Meet. Empowerment through community and strategic investments.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-brand-200 hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all shadow-sm"
                >
                  <social.icon className="w-5 h-5 text-brand-600" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-950 font-display font-bold text-lg mb-8 relative inline-block">
              Quick Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-indigo-600 rounded-full" />
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {[
                { name: "About Company", href: "#about" },
                { name: "Our Services", href: "#services" },
                { name: "Latest Projects", href: "#projects" },
                { name: "Our Team", href: "#team" },
                { name: "Contact Hub", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-600 hover:text-indigo-600 text-sm transition-all flex items-center group"
                  >
                    <span className="w-0 h-px bg-indigo-600 mr-0 transition-all group-hover:w-4 group-hover:mr-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-1">
            <h3 className="text-brand-950 font-display font-bold text-lg mb-8 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-indigo-600 rounded-full" />
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-sm text-brand-600 leading-relaxed">
                  TheBrokr Office
                  <br />
                  Plot No. 70, 1st Floor, Udyog Vihar Phase-6,
                  <br />
                  Sector-37 Industrial Area, Gurugram, HR
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-sm text-brand-600">
                  <a href="tel:+919999900943" className="hover:text-indigo-600 transition-colors block">
                    +91 99999 00943
                  </a>
                  <a href="tel:+919811747488" className="hover:text-indigo-600 transition-colors block">
                    +91 98117 47488
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-sm text-brand-600">
                  <a href="mailto:info@thebrokrs.co.in" className="hover:text-indigo-600 transition-colors">
                    info@thebrokrs.co.in
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="text-brand-950 font-display font-bold text-lg mb-8 relative inline-block">
              Stay Updated
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-indigo-600 rounded-full" />
            </h3>
            <p className="text-brand-600 text-sm mb-6 italic">
              Download our corporate brochure to learn about our community-driven growth model.
            </p>
            <Button
              className="w-full bg-white text-brand-950 border border-brand-100 hover:bg-brand-50 rounded-xl h-14 shadow-lg transition-all duration-300 group font-bold"
              asChild
            >
              <a href="https://thebrokrs.co.in/wp-content/uploads/2025/06/Untitled-design-38-1.png" download>
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Download Brochure
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 pt-8 border-t border-brand-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-400 text-xs">
            &copy; {currentYear} TheBrokr. All rights reserved.
          </p>
          <div className="flex items-center space-x-8 text-xs text-brand-400">
            <Link href="#" className="hover:text-brand-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-900 transition-colors">Terms of Service</Link>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-950 border border-brand-100 hover:bg-brand-50 transition-all shadow-lg"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

