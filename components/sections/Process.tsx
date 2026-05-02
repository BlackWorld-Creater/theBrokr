"use client"

import { motion } from "framer-motion"
import { UserPlus, ShieldCheck, Gift, ArrowRight } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Register",
    description: "Begin your journey by signing up. Access strategic investment clusters and tailored business services.",
    highlight: "Quick & Secure",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    accent: "bg-indigo-600"
  },
  {
    step: "02",
    icon: ShieldCheck,
    title: "Complete KYC",
    description: "Verify your identity through our transparent process to ensure legal compliance and ownership confidence.",
    highlight: "Safe & Documented",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=800",
    accent: "bg-emerald-600"
  },
  {
    step: "03",
    icon: Gift,
    title: "Refer & Earn",
    description: "Share the vision with your network. Grow your community and earn rewards as you help others build their legacy.",
    highlight: "Collective Growth",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=800",
    accent: "bg-rose-600"
  }
]

const Process = () => {
  return (
    <section id="process" className="pt-10 pb-16 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            <span>The Journey</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950">How It Works</h2>
          <p className="text-brand-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A streamlined, three-step path designed to help you build, verify, and grow your wealth within our community.
          </p>
        </div>

        <div className="relative">
          {/* Main Path Line (Visible & Clean) */}
          <div className="hidden lg:block absolute top-[180px] left-[15%] right-[15%] h-1 bg-slate-100 rounded-full z-0 overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: '100%' }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-gradient-to-r from-indigo-500 via-emerald-500 to-rose-500" 
             />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="relative group">
                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col bg-white rounded-[40px] border border-brand-100 shadow-xl shadow-brand-500/5 h-full group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 relative"
                  >
                    {/* Image Area (Overflow hidden here) */}
                    <div className="relative h-48 overflow-hidden rounded-t-[40px]">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-brand-950/20 group-hover:bg-transparent transition-colors duration-500" />
                      
                      {/* Floating Step Badge */}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl text-brand-950 font-black text-sm shadow-xl">
                        STEP {item.step}
                      </div>
                    </div>

                    {/* Icon Circle (Now outside/overlapping safely) */}
                    <div className={`absolute top-[160px] right-8 w-16 h-16 rounded-2xl ${item.accent} text-white flex items-center justify-center shadow-2xl shadow-indigo-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 z-30`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <div className="p-10 pt-12 space-y-6 flex-1 flex flex-col relative z-10">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-brand-950 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-brand-600 leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-6">
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-xl bg-slate-50 border border-brand-100 text-brand-400 text-[10px] font-bold uppercase tracking-widest group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-all">
                          <span>{item.highlight}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Enhanced Connecting Arrows (Visible & Clean) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[180px] -right-10 w-16 h-16 items-center justify-center z-30">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center animate-bounce-x">
                        <ArrowRight className="w-6 h-6 text-indigo-600" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  )
}

export default Process
