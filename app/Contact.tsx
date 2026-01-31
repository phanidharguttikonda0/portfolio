"use client"
import { useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    if (!formRef.current) return

    emailjs
      .sendForm(
        "service_hslfvlj",     // replace with your actual EmailJS service ID
        "template_rwokhf8",    // replace with your template ID
        formRef.current,
        "zQrQxGsqlki6EOCfU"      // replace with your public key
      )
      .then(() => {
        setStatus("success")
        formRef.current?.reset()
      })
      .catch(() => {
        setStatus("error")
      })
  }

  return (
    <section id="contact" className="relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientShift">
            Get In Touch
          </h2>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-black/40 border-purple-500/30 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 group">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <form ref={formRef} onSubmit={sendEmail} className="space-y-5 sm:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-black/30 border-purple-500/40 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all py-5 sm:py-6 text-base sm:text-lg"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-black/30 border-purple-500/40 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all py-5 sm:py-6 text-base sm:text-lg"
                    />
                  </div>
                  <Input
                    name="title"
                    placeholder="Subject"
                    className="bg-black/30 border-purple-500/40 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all py-5 sm:py-6 text-base sm:text-lg"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    className="bg-black/30 border-purple-500/40 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all text-base sm:text-lg resize-none"
                  />
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold text-base sm:text-lg py-6 sm:py-7 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {status === "success" && (
                  <p className="text-green-400 mt-5 text-center text-base sm:text-lg font-semibold">✅ Your message has been sent!</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 mt-5 text-center text-base sm:text-lg font-semibold">❌ Failed to send. Try again later.</p>
                )}

                <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-purple-500/40">
                  <p className="text-gray-300 mb-5 text-base sm:text-lg font-medium text-center">Or reach out directly:</p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                    <a
                      href="mailto:phanidharguttikonda0@gmail.com"
                      className="flex items-center gap-2.5 text-cyan-400 hover:text-cyan-300 transition-all hover:scale-105 text-sm sm:text-base font-medium group"
                    >
                      <Mail className="w-5 h-5 group-hover:animate-pulse" />
                      <span className="truncate max-w-[280px]">phanidharguttikonda0@gmail.com</span>
                    </a>
                    <a
                      href="tel:+918885858760"
                      className="flex items-center gap-2.5 text-purple-400 hover:text-purple-300 transition-all hover:scale-105 text-sm sm:text-base font-medium group"
                    >
                      <Phone className="w-5 h-5 group-hover:animate-pulse" />
                      +91 88858 58760
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
