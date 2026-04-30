"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Team = () => {
  return (
    <motion.section
      id="team"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-14 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-r from-transparent via-indigo-100 to-transparent" />
      <div className="absolute right-0 top-24 w-36 h-36 rounded-full bg-indigo-100/60 blur-3xl" />
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[36px] border border-brand-100 bg-white shadow-[0_20px_80px_rgba(99,102,241,0.08)] p-6 md:p-10 text-center"
        >
          <div className="absolute inset-x-10 top-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-transparent opacity-50" />
          <div className="relative">
            <div className="inline-flex items-center justify-center rounded-full bg-indigo-50 px-4 py-2 text-indigo-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
              Join the Team
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-950 mb-4">
              Ready to build with us?
            </h2>
            <p className="text-brand-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6">
              We’re keeping this section focused: one clear call to action for talented individuals who want to join the team and grow with our ecosystem.
            </p>

            <Button asChild size="lg" className="mx-auto rounded-3xl px-7 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:from-indigo-700 hover:to-cyan-600 shadow-[0_18px_40px_rgba(99,102,241,0.25)] transition-all hover:-translate-y-0.5">
              <Link href="/contact#contact">Apply Now</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Team
