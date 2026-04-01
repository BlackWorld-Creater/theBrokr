"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Globe } from "lucide-react"
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

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
    alert("Thank you! Your message has been sent.")
  }

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-24 relative overflow-hidden border-b border-brand-100">
        <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] pointer-events-none" />
        <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-display font-medium text-brand-950 leading-tight">
              Let's Start a <br />
              <span className="text-indigo-600 font-light italic">Conversation.</span>
            </h1>
            <p className="text-brand-600 text-lg max-w-2xl mx-auto">
              Ready to explore strategic land clusters or join our community? Our team is available to assist you with every detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
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
                <h2 className="text-4xl font-display font-bold text-brand-950 leading-tight">
                  Contact <br /><span className="text-indigo-600">Headquarters.</span>
                </h2>
                <p className="text-brand-600 text-lg leading-relaxed">
                  Visit us at our main office in Gurugram or reach out through our digital channels. We aim to respond to all inquiries within 24 business hours.
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-[40px] bg-brand-50 border border-brand-100 group hover:bg-brand-900 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-xl shadow-indigo-600/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-950 group-hover:text-white transition-colors">Call/WhatsApp</h4>
                  <p className="text-brand-500 text-sm mt-2 group-hover:text-brand-300 transition-colors">Direct line for support</p>
                  <p className="text-brand-900 font-bold mt-4 group-hover:text-gold-400 transition-colors">+91 99999 00943</p>
                </div>
                <div className="p-8 rounded-[40px] bg-brand-50 border border-brand-100 group hover:bg-brand-900 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-xl shadow-indigo-600/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-950 group-hover:text-white transition-colors">Email Us</h4>
                  <p className="text-brand-500 text-sm mt-2 group-hover:text-brand-300 transition-colors">Official inquiries</p>
                  <p className="text-brand-900 font-bold mt-4 group-hover:text-gold-400 transition-colors underline">info@thebrokrs.co.in</p>
                </div>
              </div>

              {/* Full Address */}
              <div className="p-10 rounded-[40px] border border-brand-100 bg-white shadow-xl flex items-start space-x-6 group hover:border-indigo-200 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                   <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-brand-950">TheBrokr HQ</h4>
                  <p className="text-brand-600 text-sm leading-relaxed">
                    Plot No. 70, 1st Floor, Udyog Vihar Phase - 6, <br />
                    Sector - 37 Industrial Area, Near Hero Honda Chowk, <br />
                    Gurugram, Haryana, India
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center space-x-4 text-brand-500 text-sm">
                <Clock className="w-5 h-5 text-indigo-400" />
                <span>Mon - Sat: 10:00 AM - 07:00 PM (IST)</span>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-10 lg:p-16 rounded-[60px] bg-white border border-brand-100 shadow-2xl relative overflow-hidden"
            >
              {/* Form Backdrop */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[40px] rounded-full -mr-16 -mt-16" />
              
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
                        className={errors.name ? "border-red-500 h-14 rounded-xl" : "h-14 rounded-xl"} 
                      />
                      {errors.name && <span className="text-red-500 text-[10px] uppercase font-bold">{errors.name.message as string}</span>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-400 pl-1">Email Address</label>
                      <Input 
                        placeholder="john@example.com" 
                        {...register("email")}
                        className={errors.email ? "border-red-500 h-14 rounded-xl" : "h-14 rounded-xl"} 
                      />
                      {errors.email && <span className="text-red-500 text-[10px] uppercase font-bold">{errors.email.message as string}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-400 pl-1">Phone Number</label>
                      <Input 
                        placeholder="+91 000 000 0000" 
                        {...register("phone")}
                        className={errors.phone ? "border-red-500 h-14 rounded-xl" : "h-14 rounded-xl"} 
                      />
                      {errors.phone && <span className="text-red-500 text-[10px] uppercase font-bold">{errors.phone.message as string}</span>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-400 pl-1">Subject</label>
                      <Input 
                        placeholder="Topic of interest" 
                        {...register("subject")}
                        className={errors.subject ? "border-red-500 h-14 rounded-xl" : "h-14 rounded-xl"} 
                      />
                      {errors.subject && <span className="text-red-500 text-[10px] uppercase font-bold">{errors.subject.message as string}</span>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-400 pl-1">Your Message</label>
                    <Textarea 
                      placeholder="How can we help you?" 
                      rows={6}
                      {...register("message")}
                      className={errors.message ? "border-red-500 rounded-2xl resize-none" : "rounded-2xl resize-none"} 
                    />
                    {errors.message && <span className="text-red-500 text-[10px] uppercase font-bold">{errors.message.message as string}</span>}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full h-16 bg-brand-950 hover:bg-brand-800 text-white font-bold rounded-2xl shadow-xl transition-all duration-300 group"
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

      {/* Map Section Placeholder */}
      <section className="bg-brand-50 py-12 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="aspect-video w-full rounded-[60px] bg-brand-200 overflow-hidden relative shadow-2xl">
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center space-y-4">
                 <Globe className="w-12 h-12 text-brand-400 mx-auto animate-spin-slow" />
                 <p className="text-brand-600 font-bold uppercase tracking-widest text-xs">Interactive Google Map Integration Placeholder</p>
                 <p className="text-brand-400 text-[10px] max-w-xs mx-auto">TheBrokr HQ. Plot No. 70, Udyog Vihar Phase - 6, Gurugram</p>
               </div>
             </div>
             {/* Note: In a real environment, paste the iframe here */}
          </div>
        </div>
      </section>
    </main>
  )
}
