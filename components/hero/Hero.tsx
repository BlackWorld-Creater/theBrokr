"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Play, X, Target, Building2, Users2, ShieldCheck, TrendingUp, Gem } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

const Hero = () => {
  const [showOverview, setShowOverview] = useState(false)

  const overviewSlides = [
    {
      title: "Strategic Vision",
      desc: "Democratizing high-growth investment through community synergy and strategic land clusters. We bridge human potential and capital.",
      icon: Target,
      color: "bg-indigo-500",
      stats: "10k+ Members"
    },
    {
      title: "Business Verticals",
      desc: "From sustainable mushroom farming to real estate & E-commerce, we manage 8+ recession-proof, high-yield business units.",
      icon: Building2,
      color: "bg-gold-500",
      stats: "8+ Verticals"
    },
    {
      title: "Lifetime Returns",
      desc: "Our unique 18% lifetime ROI model ensures long-term wealth creation backed by tangible, professionally managed assets.",
      icon: TrendingUp,
      color: "bg-emerald-500",
      stats: "18% ROI"
    },
    {
      title: "Skill + Capital",
      desc: "A revolutionary portal where your skills are your currency. No upfront entry costs for talent-driven participation.",
      icon: Gem,
      color: "bg-purple-500",
      stats: "Zero Entry Cost"
    }
  ]

  return (
    <section id="home" className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/assets/WhatsApp-Video-2025-06-23-at-1.57.47-PM.mp4" type="video/mp4" />
        </video>
        {/* Gradient only on bottom-left where text sits */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[1.1] tracking-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
              Where Skills, Business <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200 italic font-light">
                & Opportunity Meet.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}>
              Join the future of collaborative wealth. We bridge the gap between human potential and high-growth investment clusters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-6 pt-4"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto h-16 px-10 rounded-2xl bg-white text-brand-950 font-bold text-lg shadow-2xl hover:bg-brand-50 transition-all duration-500 group"
              asChild
            >
              <Link href="#contact">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => setShowOverview(true)}
              className="w-full sm:w-auto h-16 px-10 rounded-2xl border-white/30 bg-white/10 backdrop-blur-md text-white font-bold text-lg hover:bg-white/20 transition-all group"
            >
              <Play className="mr-2 h-5 w-5 fill-white group-hover:scale-110 transition-transform" />
              Watch Overview
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Overview Modal */}
      <AnimatePresence>
        {showOverview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-brand-950/40 backdrop-blur-3xl"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-6xl bg-white/95 rounded-[3rem] shadow-2xl overflow-hidden relative border border-white/20 p-8 md:p-16 max-h-[90vh] overflow-y-auto hide-scrollbar"
            >
              <button 
                onClick={() => setShowOverview(false)}
                className="absolute top-8 right-8 p-3 text-brand-950/40 hover:text-brand-950 hover:bg-brand-50 rounded-full transition-all z-20"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="space-y-12">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                  <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Business Ecosystem</h3>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950">Architecting Infinite Growth.</h2>
                  <p className="text-brand-600">Discover how TheBrokr combines skill-based entry with strategic asset management to deliver unmatched returns.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {overviewSlides.map((slide, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="p-8 rounded-[2.5rem] bg-white border border-brand-100 space-y-6 group hover:border-indigo-200 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                    >
                      {/* Color Glow Overlay */}
                      <div className={cn("absolute -top-10 -right-10 w-24 h-24 blur-[40px] opacity-10 transition-all duration-700 group-hover:scale-150 group-hover:opacity-20", slide.color)} />
                      
                      <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3", slide.color)}>
                        <slide.icon className="w-8 h-8" />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold text-brand-950">{slide.title}</h4>
                          <span className="text-[10px] font-black uppercase tracking-tighter text-indigo-600/40">{slide.stats}</span>
                        </div>
                        <p className="text-brand-600 text-sm leading-relaxed">{slide.desc}</p>
                      </div>

                      {/* Detail Line Overlay */}
                      <div className="h-[1px] w-0 bg-gradient-to-r from-indigo-500/50 to-transparent group-hover:w-full transition-all duration-700" />
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
                  <Button 
                    size="lg"
                    onClick={() => setShowOverview(false)}
                    className="rounded-2xl px-12 h-16 bg-brand-950 text-white shadow-xl font-bold hover:bg-brand-800 transition-colors w-full md:w-auto"
                  >
                    Close Overview
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    asChild
                    className="rounded-2xl px-12 h-16 border-2 border-indigo-100 text-indigo-600 font-bold hover:bg-indigo-50 transition-colors w-full md:w-auto"
                  >
                    <Link href="#contact" onClick={() => setShowOverview(false)}>
                      Join Our Community
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2 opacity-50"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white" />
        <span className="text-[10px] text-white uppercase tracking-[0.2em] font-bold">Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
