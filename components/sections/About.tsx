"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Target, Users2, Building2 } from "lucide-react"

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Strategic Land Ownership",
      desc: "Invest in high-growth mushroom farming projects with 18% lifetime returns.",
      color: "bg-indigo-500/10 text-indigo-400"
    },
    {
      icon: Users2,
      title: "Community Driven",
      desc: "A platform where your skills are your currency. No upfront entry costs.",
      color: "bg-gold-500/10 text-gold-500"
    },
    {
      icon: Building2,
      title: "Portfolio Diversification",
      desc: "Access diverse business verticals from Real Estate to E-commerce.",
      color: "bg-brand-500/10 text-brand-400"
    }
  ]

  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      {/* Subtle bg decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-[120px] -mr-64 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-[100px] -ml-48 -mb-32 pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top: Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[40px] bg-white border border-brand-100/60 shadow-lg shadow-brand-500/5 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/8 hover:border-indigo-200/60 transition-all duration-500 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-brand-950 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-brand-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Middle: Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-8 mb-20"
        >
          <div className="space-y-4">
            <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm flex items-center justify-center">
              <span className="w-8 h-px bg-indigo-600 mr-4" />
              Our Vision & Mission
              <span className="w-8 h-px bg-indigo-600 ml-4" />
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950 leading-tight">
              Redefining Collaborative <br />
              <span className="text-indigo-600">Wealth Creation.</span>
            </h2>
          </div>

          <p className="text-lg text-brand-700 leading-relaxed">
            TheBrokr is not just a company; it's a movement. We bridge the gap between aspirational entrepreneurs and strategic investors by fostering a community built on trust, transparency, and shared growth.
          </p>
        </motion.div>

        {/* Bottom: Quote Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-10 md:p-16 rounded-[60px] bg-gradient-to-br from-brand-50 to-indigo-50/30 border border-brand-100/80 relative overflow-hidden group shadow-[0_4px_30px_rgba(99,102,241,0.04)] hover:shadow-[0_8px_40px_rgba(99,102,241,0.08)] transition-all duration-500">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] -mr-32 -mt-32 transition-all duration-700 group-hover:scale-150" />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-10">
              <p className="text-brand-950 font-display font-medium italic text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                "Our goal is to build a community where every individual has the opportunity to thrive through collective investment and strategic synergy."
              </p>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src="https://thebrokrs.co.in/wp-content/uploads/2025/07/1.png" 
                    alt="CMD Puneet Aggarwal" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-brand-950 font-black text-2xl tracking-tight">CMD Puneet Aggarwal</div>
                  <div className="text-indigo-600 text-xs font-black uppercase tracking-[0.3em]">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Optional Bullet Points (Simplified & Centered) */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {[
            "Skill-based Entry",
            "Lifetime Returns",
            "Transparent KYC",
            "8+ Verticals"
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-3 bg-brand-50/50 py-3 px-5 rounded-2xl border border-brand-100/50">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span className="text-brand-800 font-bold text-[10px] uppercase tracking-wider">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
