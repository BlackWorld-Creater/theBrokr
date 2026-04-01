"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero/Hero"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import UpcomingProject from "@/components/sections/UpcomingProject"
import LaunchingSoon from "@/components/sections/LaunchingSoon"
import Process from "@/components/sections/Process"
import Services from "@/components/sections/Services"
import Team from "@/components/sections/Team"
import Contact from "@/components/sections/Contact"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Dynamic Sections */}
      <Hero />
      <About />
      <Projects />
      <UpcomingProject />
      <LaunchingSoon />
      <Process />
      <Services />
      <Team />
      <Contact />
    </main>
  )
}
