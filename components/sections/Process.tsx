"use client"

import { motion } from "framer-motion"
import { UserPlus, ShieldCheck, Gift, ArrowRight } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Register",
    subtitle: "Begin Your Journey",
    description: "Sign up quickly to unlock access to strategic investment clusters and essential services designed for steady, long-term growth.",
    highlight: "Fast onboarding · Secure verification",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    accent: "from-indigo-500 to-violet-500",
    accentLight: "bg-indigo-50",
    accentText: "text-indigo-600",
    accentBorder: "border-indigo-100",
  },
  {
    step: "02",
    icon: ShieldCheck,
    title: "Complete KYC",
    subtitle: "Verify & Secure",
    description: "Verify your identity with a smooth, transparent KYC process that protects your investment and gives you legal land ownership confidence.",
    highlight: "Safe · Compliant · Documented",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=800",
    accent: "from-emerald-500 to-cyan-500",
    accentLight: "bg-emerald-50",
    accentText: "text-emerald-600",
    accentBorder: "border-emerald-100",
  },
  {
    step: "03",
    icon: Gift,
    title: "Refer & Earn",
    subtitle: "Grow Together",
    description: "Share the opportunity with your network and earn referral rewards while helping others join a trusted business ecosystem.",
    highlight: "Grow your circle · Increase returns",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=800",
    accent: "from-rose-500 to-orange-400",
    accentLight: "bg-rose-50",
    accentText: "text-rose-600",
    accentBorder: "border-rose-100",
  }
]

const Process = () => {
  return (
    <section
      id="process"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 mx-0 md:mx-6 rounded-[40px] shadow-2xl my-16 border border-brand-100/60"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-violet-400 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950 tracking-tight mb-4">
            Our Process
          </h2>
          <p className="text-brand-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A streamlined, transparent three-step journey designed to help you register, verify, and start building your legacy with ease.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-[88px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px bg-gradient-to-r from-indigo-200 via-violet-200 to-rose-200 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="relative flex flex-col items-center px-4 lg:px-6">
                {/* Step Number Badge + Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="relative z-10 mb-8 flex flex-col items-center"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-xl shadow-indigo-500/20 mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-brand-400">
                    Step {step.step}
                  </span>
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.1 }}
                  viewport={{ once: true }}
                  className={`group w-full h-[380px] flex flex-col rounded-[32px] bg-white border-2 ${step.accentBorder} shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden relative`}
                >
                  {/* Top image strip */}
                  <div className="relative h-[160px] overflow-hidden shrink-0">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${step.accent} opacity-40`} />
                    {/* Subtitle chip */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${step.accentLight} ${step.accentText} shadow-sm`}>
                        <span className="w-1 h-1 rounded-full bg-current" />
                        {step.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 justify-between">
                    <div>
                      <h3 className={`text-xl font-display font-bold text-brand-950 mb-2 group-hover:${step.accentText} transition-colors`}>
                        {step.title}
                      </h3>
                      <p className="text-brand-600 text-[13px] leading-relaxed line-clamp-3">
                        {step.description}
                      </p>
                    </div>

                    {/* Highlight pill */}
                    <div className={`mt-4 flex items-center gap-2 text-[11px] font-bold ${step.accentText} ${step.accentLight} rounded-xl px-3 py-2`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                      {step.highlight}
                    </div>
                  </div>

                  {/* Accent corner line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.accent} opacity-60`} />
                </motion.div>

                {/* Arrow between cards (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-[88px] -right-5 z-20 items-center justify-center w-10 h-10 rounded-full bg-white border border-brand-100 shadow-md">
                    <ArrowRight className="w-4 h-4 text-indigo-400" />
                  </div>
                )}

                {/* Arrow between cards (mobile) */}
                {i < steps.length - 1 && (
                  <div className="flex lg:hidden items-center justify-center my-4">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-6 bg-indigo-200" />
                      <div className="w-6 h-6 rounded-full bg-white border border-brand-100 shadow flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-indigo-400 rotate-90" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Process
