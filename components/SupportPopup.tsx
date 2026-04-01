"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Phone, X, MessageCircle } from "lucide-react"

const SupportPopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  const phoneNumber = "+919999900943"
  const whatsappUrl = `https://wa.me/919999900943`

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end space-y-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 w-72 rounded-[32px] bg-white border border-brand-100 shadow-2xl overflow-hidden"
          >
            <div className="p-6 bg-indigo-600 text-white flex items-center justify-between">
              <div>
                <h4 className="font-bold">Contact Support</h4>
                <p className="text-[10px] text-indigo-100 uppercase tracking-widest font-medium">We respond in minutes</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-2">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-brand-50 hover:bg-green-500 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500 text-white flex items-center justify-center group-hover:bg-white group-hover:text-green-500 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-sm">WhatsApp</div>
                  <div className="text-[10px] opacity-70">Instant Chat</div>
                </div>
              </a>
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-brand-50 hover:bg-brand-900 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-900 text-white flex items-center justify-center group-hover:bg-white group-hover:text-brand-950 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm">Call Now</div>
                  <div className="text-[10px] opacity-70">Direct Voice Call</div>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl shadow-green-500/20 relative group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              className="relative"
            >
              <MessageCircle className="w-10 h-10" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-green-500 rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Subtle Pulse Effect */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none" />
        )}
      </motion.button>
    </div>
  )
}

export default SupportPopup
