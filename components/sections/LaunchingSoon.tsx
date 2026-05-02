"use client"

import { motion } from "framer-motion"
import { Building2, Code2, Landmark, ShieldCheck, PieChart, Plane, ShoppingBag, Stethoscope, Rocket, Users } from "lucide-react"

const categories = [
  {
    title: "Grocery",
    description: "Fresh, fast, and to your door — our grocery vertical brings quality essentials straight to your home at everyday affordable prices.",
    icon: ShoppingBag,
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    title: "Software",
    description: "Powering the future — we're building cutting-edge software solutions that streamline business operations and unlock new digital possibilities.",
    icon: Code2,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    title: "Loan",
    description: "Making dreams possible — our loan services will offer quick approvals, low interest, and stress-free support when you need it most.",
    icon: Landmark,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Insurance",
    description: "Peace of mind starts here — our upcoming insurance plans protect what most, from health to home and everything between.",
    icon: ShieldCheck,
    color: "text-rose-600",
    bg: "bg-rose-50"
  },
  {
    title: "Investment",
    description: "Grow your wealth smartly — our new investment plans are designed to be simple, safe, and rewarding for every kind of investor.",
    icon: PieChart,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    title: "Travel",
    description: "Explore more, worry less — upcoming travel services for hassle-free holidays, group tours, and amazing deals you’ll love to book.",
    icon: Plane,
    color: "text-sky-600",
    bg: "bg-sky-50"
  },
  {
    title: "Ecommerce",
    description: "Your shop, your way — our platform connects buyers and sellers, making online selling smooth, fast, and hassle-free for everyone.",
    icon: ShoppingBag,
    color: "text-violet-600",
    bg: "bg-violet-50"
  },
  {
    title: "Medicine",
    description: "Health at your doorstep — we’re working to bring reliable, and timely medicines and health services to every home soon.",
    icon: Stethoscope,
    color: "text-teal-600",
    bg: "bg-teal-50"
  },
  {
    title: "Man Power",
    description: "Empowering your business with the right talent — our upcoming manpower solutions connect skilled professionals with top-tier opportunities.",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50"
  }
]

const LaunchingSoon = () => {
  return (
    <section className="pt-12 pb-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/30 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-50/30 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold uppercase tracking-widest mb-4"
          >
            <Rocket className="w-4 h-4" />
            <span>Horizon 2026</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950">Launching Soon.</h2>
          <p className="text-brand-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We are expanding our ecosystem to provide a seamless, all-in-one experience for your personal and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[40px] bg-white/80 backdrop-blur-sm border border-brand-100/60 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/8 transition-all duration-500 relative flex flex-col h-full hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-3 shadow-sm`}>
                <item.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-brand-950 mb-3 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-brand-600 text-sm leading-relaxed font-medium">
                {item.description}
              </p>

              {/* Status Badge */}
              <div className="mt-auto pt-6">
                <span className="badge-launching group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <span className="glow-dot !w-1.5 !h-1.5 group-hover:!bg-white" />
                  Expanding Soon
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LaunchingSoon
