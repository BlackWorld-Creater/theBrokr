"use client"

import { motion } from "framer-motion"
import { Building, Home, GraduationCap, HeartPulse, Factory, Sparkles, Layout, Store, ArrowUpRight } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Commercial Spaces",
      description: "Functional and prestigious business environments tailored for high-growth enterprises.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Home,
      title: "Residential Design",
      description: "Modern luxury homes that combine aesthetics with sustainable living standards.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Layout,
      title: "Workspace Innovation",
      description: "Productivity-focused workspace designs that inspire teams and foster collaboration.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Factory,
      title: "Industrial Logic",
      description: "Optimized industrial layouts for maximum efficiency and logistical excellence.",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Sparkles,
      title: "Vastu & Consulting",
      description: "Harmonizing tradition with modern architecture for prosperity and balance.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: HeartPulse,
      title: "Healthcare Facades",
      description: "Sterile, efficient, and calming environments for the medical care sector.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
    }
  ]

  return (
    <section id="services" className="section-padding bg-section-alt relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm flex items-center">
              <span className="w-8 h-px bg-indigo-600 mr-4" />
              What We Do
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950 leading-tight">
              Architecting the <br />
              <span className="text-indigo-600">Future of Business.</span>
            </h2>
          </div>
          <p className="text-brand-600 max-w-md italic">
            "Our design philosophy merges industrial efficiency with luxury aesthetics, ensuring every space we create is an asset for generations."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[380px] rounded-[30px] overflow-hidden bg-brand-900 transition-all duration-700 hover:-translate-y-4 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 shadow-brand-500/10 cursor-pointer"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/20 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:bg-indigo-600 group-hover:border-indigo-500/50 group-hover:scale-110 group-hover:-translate-y-2">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-2xl font-display font-bold text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-brand-100 text-sm leading-relaxed max-w-xs group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                  
                  <div className="pt-2 flex items-center text-white/50 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-all">
                    <span>Explore Scope</span>
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>

              {/* Border Decor */}
              <div className="absolute inset-0 border-[1px] border-white/5 rounded-[30px] pointer-events-none group-hover:border-indigo-500/20 transition-colors duration-700" />

              {/* Launching Soon Badge */}
              <div className="absolute top-5 right-5 z-10">
                <div className="badge-launching">
                  <span className="glow-dot !w-1.5 !h-1.5" />
                  Launching Soon
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
