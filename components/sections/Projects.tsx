"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, CheckCircle2, TrendingUp, MapPin, X, Building, ShoppingCart, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Projects = () => {
  const [selectedSector, setSelectedSector] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setSelectedSector(null)
      setIsSubmitted(false)
    }, 3000)
  }

  const projects = [
    {
      title: "Sustainable Mushroom Farming",
      location: "Northern Region Cluster",
      returns: "18% Lifetime ROI",
      status: "Active - Limited slots",
      image: "/assets/mushroom.jpg",
      stats: [
        { label: "Land Area", value: "50+ Acres" },
        { label: "Investors", value: "200+" },
        { label: "Phase", value: "Launch v2" }
      ],
      description: "A community-owned organic mushroom farm leveraging automated climate control for maximum yield and consistent returns."
    }
  ]

  const upcomingSectors = [
    {
      title: "Real Estate",
      icon: Building,
      desc: "Commercial & Residential layouts.",
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      title: "Ecommerce Hubs",
      icon: ShoppingCart,
      desc: "Logistics & warehouse sectors.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      title: "IT & Software",
      icon: Code2,
      desc: "Custom tech solutions & digital platforms.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-200"
    }
  ]

  return (
    <section id="projects" className="pt-8 pb-16 bg-brand-50/30">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Centered Layout Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 space-y-6">
          <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm flex items-center justify-center">
            <span className="w-8 h-px bg-indigo-600 mr-4" />
            Strategic Portfolios
            <span className="w-8 h-px bg-indigo-600 ml-4" />
          </h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950 leading-tight">
            Our Active <br />
            <span className="text-indigo-600">Investment Clusters.</span>
          </h2>
          <p className="text-brand-600 text-lg leading-relaxed pt-2">
            Discover carefully curated land and business projects where community ownership meets industrial efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative rounded-[40px] overflow-hidden bg-white border border-brand-100 shadow-2xl shadow-brand-500/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-[400px] lg:h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating ROI Badge */}
                  <div className="absolute top-8 left-8 p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 text-white z-10 transition-transform group-hover:-translate-y-2">
                    <div className="flex items-center space-x-2 text-gold-400 mb-1">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-widest">High Yield</span>
                    </div>
                    <div className="text-3xl font-display font-bold">{project.returns}</div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10 lg:p-16 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>
                      <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">{project.status}</span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-950 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-brand-600 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6 pt-4">
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="text-brand-900 font-bold text-lg">{stat.value}</div>
                          <div className="text-brand-400 text-[10px] font-bold uppercase tracking-widest">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 pt-6">
                      {["Government Approved KYC", "Legally Insured Land Portions", "Transparent Monthly Reporting"].map((p, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-900" />
                          <span className="text-sm font-medium text-brand-700">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-10 flex items-center justify-between">
                    <Button 
                      size="lg" 
                      className="h-14 px-8 rounded-2xl bg-white text-brand-950 border border-brand-100 font-bold hover:bg-brand-50 transition-all duration-300 group/btn shadow-xl"
                      asChild
                    >
                      <Link href="#contact">
                        Invest Now
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </Link>
                    </Button>
                    <div className="flex items-center -space-x-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-brand-200 overflow-hidden ring-4 ring-transparent group-hover:ring-indigo-100 transition-all duration-300">
                          <div className="w-full h-full bg-gradient-to-tr from-brand-300 to-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-900">U{i}</div>
                        </div>
                      ))}
                      <div className="pl-6 text-xs font-bold text-brand-400 uppercase tracking-widest">+500 joining</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Other Sectors Cards */}
        <div className="mt-12 pt-20 border-t border-brand-100 pb-10">
          <div className="text-center mb-10 space-y-3">
            <h3 className="text-3xl font-display font-bold text-brand-950">Interested in other sectors?</h3>
            <p className="text-brand-600 max-w-lg mx-auto italic">We have more clusters launching soon. Select a sector below to submit an early query.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingSectors.map((sector) => (
              <motion.div
                key={sector.title}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedSector(sector.title)}
                className={`flex flex-col items-center justify-center p-8 rounded-[30px] border-2 border-dashed bg-white cursor-pointer hover:shadow-xl transition-all duration-300 ${sector.color}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${sector.color.replace('border-', '')}`}>
                  <sector.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-brand-950">{sector.title}</h4>
                <p className="text-sm font-medium opacity-80 text-center">{sector.desc}</p>
                <div className="mt-6 text-[10px] font-bold uppercase tracking-widest opacity-60">
                  Click to Query
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Query Modal */}
      <AnimatePresence>
        {selectedSector && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedSector(null)}
                className="absolute top-6 right-6 text-brand-400 hover:text-brand-950 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-10 space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-brand-950">Query: {selectedSector}</h3>
                  <p className="text-brand-600 mt-2 text-sm">Register your early interest for this upcoming cluster.</p>
                </div>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 space-y-4 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-brand-950">Query Submitted</h4>
                    <p className="text-brand-600 text-sm">Our team will reach out with early bird details.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleQuerySubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-950 px-1">Full Name</label>
                      <input required type="text" className="w-full h-12 px-4 rounded-xl border border-brand-200 bg-brand-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium text-brand-950" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-950 px-1">Email or Phone</label>
                      <input required type="text" className="w-full h-12 px-4 rounded-xl border border-brand-200 bg-brand-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium text-brand-950" placeholder="+91 99999 00000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-950 px-1">Investment Range (Optional)</label>
                      <select className="w-full h-12 px-4 rounded-xl border border-brand-200 bg-brand-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium text-brand-950 text-sm">
                        <option>Curious / Exploring</option>
                        <option>10L - 50L</option>
                        <option>50L - 1Cr</option>
                        <option>1Cr+</option>
                      </select>
                    </div>

                    <Button type="submit" size="lg" className="w-full h-14 rounded-xl bg-indigo-600 text-white font-bold hover:bg-brand-950 transition-colors shadow-lg mt-2">
                      Submit Query
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
