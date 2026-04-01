"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
    alert("Thank you! Your message has been sent.")
  }

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Header Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-100 to-transparent" />
      
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm flex items-center">
                <span className="w-8 h-px bg-indigo-600 mr-4" />
                Connect With Us
              </h3>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-950 leading-tight">
                Contact <br /><span className="text-indigo-600 font-light italic">Headquarters.</span>
              </h2>
              <p className="text-brand-600 text-lg leading-relaxed max-w-md">
                Ready to explore strategic land clusters or join our community? Our team is available to assist you via WhatsApp, Phone, or Email.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a 
                href="https://wa.me/919999900943" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-8 rounded-[40px] bg-brand-50 border border-brand-100 group hover:bg-white hover:border-indigo-300 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-xl shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-950 group-hover:text-indigo-600 transition-colors">WhatsApp</h4>
                <p className="text-brand-500 text-sm mt-2 transition-colors">Chat with us instantly</p>
                <p className="text-brand-900 font-bold mt-4 transition-colors">+91 99999 00943</p>
              </a>
              <a 
                href="tel:+919999900943"
                className="p-8 rounded-[40px] bg-brand-50 border border-brand-100 group hover:bg-white hover:border-indigo-300 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-xl shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-950 group-hover:text-indigo-600 transition-colors">Call Representative</h4>
                <p className="text-brand-500 text-sm mt-2 transition-colors">Speak with our experts</p>
                <p className="text-brand-900 font-bold mt-4 transition-colors">+91 99999 00943</p>
              </a>
            </div>

            {/* Address */}
            <div className="p-10 rounded-[40px] border border-brand-100 bg-white shadow-xl flex items-start space-x-6 group hover:border-indigo-200 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                 <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-brand-950">Location</h4>
                <p className="text-brand-600 text-sm leading-relaxed">
                  Plot No. 70, 1st Floor, Udyog Vihar Phase - 6, <br />
                  Sector - 37 Industrial Area, Near Hero Honda Chowk, <br />
                  Gurugram, Haryana
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <a href="mailto:info@thebrokrs.co.in" className="flex items-center space-x-3 text-brand-600 hover:text-indigo-600 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-bold">info@thebrokrs.co.in</span>
              </a>
              <div className="h-4 w-px bg-brand-200" />
              <div className="flex items-center space-x-3 text-brand-400 text-xs font-bold uppercase tracking-widest">
                <Clock className="w-5 h-5 text-indigo-400" />
                <span>Mon - Sat: 10AM - 7PM</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 lg:p-16 h-fit rounded-[60px] bg-slate-50 border border-brand-100 shadow-2xl relative overflow-hidden"
          >
            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-bold text-brand-950">Send a Message</h3>
                <p className="text-brand-500 text-sm">Fill out the form below and an expert will get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-400 pl-1">Full Name</label>
                    <Input 
                      placeholder="John Doe" 
                      {...register("name")}
                      className={errors.name ? "border-red-500 h-14 rounded-xl" : "h-14 rounded-xl border-brand-100"} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-400 pl-1">Email Address</label>
                    <Input 
                      placeholder="john@example.com" 
                      {...register("email")}
                      className={errors.email ? "border-red-500 h-14 rounded-xl" : "h-14 rounded-xl border-brand-100"} 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-400 pl-1">Message</label>
                  <Textarea 
                    placeholder="How can we help you?" 
                    rows={6}
                    {...register("message")}
                    className={errors.message ? "border-red-500 rounded-2xl" : "rounded-2xl border-brand-100"} 
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full h-16 bg-white text-brand-950 border border-brand-100 hover:bg-brand-50 font-bold rounded-2xl shadow-xl transition-all duration-300 group"
                >
                  Send Information
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
