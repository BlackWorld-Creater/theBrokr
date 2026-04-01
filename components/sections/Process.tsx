"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"

const Process = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const steps = [
    {
      title: "Register",
      description: "Start by signing up with us. It’s quick, simple, and sets you up to explore exciting investment opportunities in farmland and beyond — opening doors to secure, long-term growth and financial freedom.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Complete KYC",
      description: "To ensure a secure and transparent investment, complete your KYC (Know Your Customer). It’s a one-time process that verifies your identity and enables legal ownership of your land.",
      image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Refer & Earn",
      description: "Invite your friends or family to invest and earn referral rewards. With every successful registration through your link, you enjoy added benefits while they start their investment journey.",
      image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=800"
    }
  ]

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-slate-50 mx-0 md:mx-6 rounded-[40px] shadow-2xl my-24 border border-brand-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-500 rounded-full blur-[100px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950 tracking-tight">
            Our Process
          </h2>
          <p className="mt-4 text-brand-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A streamlined, transparent three-step journey designed to help you register, verify, and start building your legacy with ease.
          </p>
        </div>

        {/* Scroll Controls (Desktop) */}
        <div className="hidden lg:flex absolute top-[60%] -translate-y-1/2 left-0 right-0 justify-between px-2 z-20 pointer-events-none">
          <button onClick={() => scroll('left')} className="pointer-events-auto p-2 text-brand-400 hover:text-brand-950 transition-colors bg-white rounded-full backdrop-blur-sm border border-brand-100 ml-6 hover:bg-brand-50 shadow-md">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={() => scroll('right')} className="pointer-events-auto p-2 text-brand-400 hover:text-brand-950 transition-colors bg-white rounded-full backdrop-blur-sm border border-brand-100 mr-6 hover:bg-brand-50 shadow-md">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Horizontal Scrolling Timeline */}
        <div className="relative">
          {/* Top connecting line */}
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-px bg-brand-200 z-0" />
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-12 pt-8 snap-x snap-mandatory gap-8 px-4 md:px-10 hide-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative shrink-0 w-[85vw] md:w-[350px] lg:w-[400px] snap-center flex flex-col items-center group"
              >
                {/* Timeline Square Marker */}
                <div className="w-4 h-4 bg-indigo-600 mb-10 z-10 rotate-45 shadow-sm" />
                
                {/* Connecting Triangle pointing from card to marker */}
                <div className="absolute top-[49px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-white z-20 group-hover:-translate-y-2 transition-transform duration-500" />

                {/* Card Content */}
                <div className="w-full bg-white rounded-2xl overflow-hidden shadow-xl border border-brand-100 flex flex-col transition-transform group-hover:-translate-y-2 duration-500 group-hover:shadow-2xl relative">
                  <div className="h-[220px] relative overflow-hidden bg-brand-100 shrink-0">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col text-center bg-white justify-center">
                    <h3 className="text-2xl font-display font-bold text-brand-950 mb-3">{step.title}</h3>
                    <p className="text-brand-600 text-[15px] leading-relaxed font-medium line-clamp-4">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  )
}

export default Process
