"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Linkedin, Mail, Twitter, ChevronRight, ChevronLeft, User, X, Upload, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  // Auto-scroll logic
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (scrollRef.current && !isHovered) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 1000); // Scrolls every 1 second
    return () => clearInterval(autoScroll);
  }, [isHovered]);

  const teamMembers = [
    {
      name: "Dr. Puneet Aggarwal",
      role: "CMD",
      image: "https://thebrokrs.co.in/wp-content/uploads/2025/07/1.png"
    },
    {
      name: "Akshay",
      role: "CEO",
      image: "https://thebrokrs.co.in/wp-content/uploads/2025/07/2.png"
    },
    {
      name: "Ravinder Singh",
      role: "VP",
      image: "https://thebrokrs.co.in/wp-content/uploads/2025/07/3.png"
    },
    {
      name: "Shubham Mangla",
      role: "HOD-GROCERY",
      image: "https://thebrokrs.co.in/wp-content/uploads/2025/07/4.png"
    },
    {
      name: "Suman Kumari",
      role: "HOD-CLIENT RELATION",
      image: "https://thebrokrs.co.in/wp-content/uploads/2025/06/51e014dc-81a1-4410-8ba6-b08f180bcd28-e1752666418556.jpeg"
    },
    {
      name: "Divya Singh",
      role: "CMO NETWORK MARKETING",
      image: "https://thebrokrs.co.in/wp-content/uploads/2025/06/faa8e71d-0e7a-4d06-b9bc-4b8680551c62-e1752666449430.jpeg"
    },
    {
      name: "Manju Yadav",
      role: "Strategy & Growth",
      image: "https://thebrokrs.co.in/wp-content/uploads/2025/06/3bb1aa58-de83-4f8b-ae8b-b420467916fc-e1752666467923.jpeg"
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated submission logic here
    setIsSubmitted(true)
    setTimeout(() => {
      setIsModalOpen(false)
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section id="team" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm flex items-center">
              <span className="w-8 h-px bg-indigo-600 mr-4" />
              Leadership
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950 leading-tight">
              Our Visionary <br />
              <span className="text-indigo-600">Core Team.</span>
            </h2>
          </div>
          
          <div className="flex-1 max-w-xl">
            <p className="text-brand-600 text-lg leading-relaxed border-l-2 border-indigo-100 pl-8 italic">
              "Our leadership team brings together decades of expertise in real estate, sustainable farming, and strategic growth, committed to building a legacy of excellence and community-driven wealth."
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => scroll('left')} className="p-3 rounded-full border border-brand-200 text-brand-950 hover:bg-brand-950 hover:text-white transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full border border-brand-200 text-brand-950 hover:bg-brand-950 hover:text-white transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div
        className="container max-w-7xl mx-auto px-6 relative py-10 scroll-smooth"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-8 pt-4 snap-x snap-mandatory gap-6 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative shrink-0 w-[80vw] sm:w-[260px] snap-start group"
            >
              <div className="relative h-[340px] rounded-[20px] overflow-hidden bg-brand-50 shadow-lg transition-all duration-600 cursor-pointer">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-1200 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                  }}
                />

                {/* Premium Card Overlay exactly mapped */}
                <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-brand-950/90 to-transparent text-white transition-all duration-500">
                  <h3 className="font-bold text-lg leading-tight mb-1">{member.name}</h3>
                  <span className="text-xs opacity-80 uppercase tracking-widest font-bold text-indigo-300">{member.role}</span>
                </div>

                {/* Optional Socials Hover Overlay */}
                <div className="absolute top-4 right-4 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 translate-x-4 group-hover:translate-x-0">
                  {[Linkedin, Mail, Twitter].map((Icon, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.1, backgroundColor: "#6366f1" }}
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Join Us Full Width Card Below */}
      <div className="container max-w-7xl mx-auto px-6 mt-4 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl group"
        >
          <div
            onClick={() => setIsModalOpen(true)}
            className="w-full rounded-[30px] border-2 border-dashed border-indigo-200 bg-indigo-50/50 flex flex-col sm:flex-row items-center justify-between p-8 sm:p-10 text-center sm:text-left hover:bg-indigo-100/50 hover:border-indigo-400 transition-all duration-500 cursor-pointer shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 block"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 shadow-lg group-hover:bg-indigo-600 transition-all duration-500">
                <User className="w-8 h-8 text-indigo-400 group-hover:text-white" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-brand-950 group-hover:text-indigo-700 transition-colors">Join the Team</h4>
                <p className="text-brand-600 text-sm leading-relaxed max-w-[300px]">We are looking for visionary leaders to join our core. Be a part of the future.</p>
              </div>
            </div>
            <button className="mt-6 sm:mt-0 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest text-indigo-600 bg-white border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white shadow-md transition-all">
              Submit Info
            </button>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

      {/* Submit CV Modal */}
      <AnimatePresence>
        {isModalOpen && (
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
              className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-brand-400 hover:text-brand-950 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-10 space-y-8">
                <div>
                  <h3 className="text-3xl font-display font-bold text-brand-950">Join Our Core</h3>
                  <p className="text-brand-600 mt-2">Submit your details to explore opportunities.</p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 space-y-4 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-brand-950">Application Received!</h4>
                    <p className="text-brand-600">We'll review your CV and get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-950 px-1">Full Name</label>
                        <input required type="text" className="w-full h-12 px-4 rounded-xl border border-brand-200 bg-brand-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium text-brand-950" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-950 px-1">Email Address</label>
                        <input required type="email" className="w-full h-12 px-4 rounded-xl border border-brand-200 bg-brand-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium text-brand-950" placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-950 px-1">Resume / CV (PDF)</label>
                      <div className="relative group">
                        <input required type="file" accept=".pdf,.doc,.docx" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                        <div className="w-full h-12 px-4 rounded-xl border border-dashed border-indigo-300 bg-indigo-50 group-hover:bg-indigo-100 flex items-center text-indigo-700 font-medium transition-colors">
                          <Upload className="w-4 h-4 mr-2" />
                          <span>Upload File</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-950 px-1">Passport Size Photo</label>
                      <div className="relative group">
                        <input required type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                        <div className="w-full h-12 px-4 rounded-xl border border-dashed border-indigo-300 bg-indigo-50 group-hover:bg-indigo-100 flex items-center text-indigo-700 font-medium transition-colors">
                          <Upload className="w-4 h-4 mr-2" />
                          <span>Upload Photo</span>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full h-14 rounded-xl bg-brand-950 text-white font-bold hover:bg-indigo-600 transition-colors shadow-lg mt-4">
                      Submit Information
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

export default Team
