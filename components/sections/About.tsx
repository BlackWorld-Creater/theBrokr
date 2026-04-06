"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Target, Globe, Zap, Users2, Building2 } from "lucide-react"

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
    <section id="about" className="section-padding bg-white overflow-hidden relative">
      {/* Subtle bg decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-[120px] -mr-64 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-[100px] -ml-48 -mb-32 pointer-events-none" />
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm flex items-center">
                <span className="w-8 h-px bg-indigo-600 mr-4" />
                Our Vision & Mission
              </h3>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950 leading-tight">
                Redefining Collaborative <br />
                <span className="text-indigo-600">Wealth Creation.</span>
              </h2>
            </div>

            <p className="text-lg text-brand-700 leading-relaxed max-w-xl">
              TheBrokr is not just a company; it's a movement. We bridge the gap between aspirational entrepreneurs and strategic investors by fostering a community built on trust, transparency, and shared growth.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "No upfront payments required for skill-based entry.",
                "Lifetime returns through strategic asset management.",
                "Transparent KYC and legally binding agreements.",
                "A diverse ecosystem of 8+ booming business verticals."
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-brand-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <div className="p-10 md:p-12 rounded-[50px] bg-gradient-to-br from-brand-50 to-indigo-50/30 border border-brand-100/80 relative overflow-hidden group shadow-[0_4px_30px_rgba(99,102,241,0.04)] hover:shadow-[0_8px_40px_rgba(99,102,241,0.08)] transition-all duration-500">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 blur-[60px] -mr-24 -mt-24 transition-all duration-700 group-hover:scale-150" />
                
                <div className="relative z-10 space-y-8">
                  <p className="text-brand-950 font-display font-medium italic text-2xl md:text-3xl leading-relaxed">
                    "Our goal is to build a community where every individual has the opportunity to thrive through collective investment and strategic synergy."
                  </p>
                  
                  <div className="flex items-center space-x-5 pt-4">
                    <div className="w-16 h-16 rounded-full border-4 border-white shadow-xl overflow-hidden shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <img 
                        src="https://thebrokrs.co.in/wp-content/uploads/2025/07/1.png" 
                        alt="CMD Puneet Aggarwal" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
                        }}
                      />
                    </div>
                    <div>
                      <div className="text-brand-950 font-bold text-lg leading-tight">CMD Puneet Aggarwal</div>
                      <div className="text-indigo-600 text-xs font-bold uppercase tracking-[0.2em] mt-1">Founder & CEO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature Grid */}
          <div className="relative group">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-transparent blur-3xl opacity-50 transform -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
            
            <div className="relative grid grid-cols-1 gap-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[40px] bg-white/90 backdrop-blur-sm border border-brand-100/60 shadow-lg shadow-brand-500/5 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/8 hover:border-indigo-200/60 transition-all duration-500 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-brand-950 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-brand-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
