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
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-black/40 border-purple-500/30 backdrop-blur-md">
              <CardContent className="p-8">
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-black/20 border-purple-500/30 text-white placeholder:text-gray-400"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-black/20 border-purple-500/30 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Input
                    name="title"
                    placeholder="Subject"
                    className="bg-black/20 border-purple-500/30 text-white placeholder:text-gray-400"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    className="bg-black/20 border-purple-500/30 text-white placeholder:text-gray-400"
                  />
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {status === "success" && (
                  <p className="text-green-400 mt-4 text-center">✅ Your message has been sent!</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 mt-4 text-center">❌ Failed to send. Try again later.</p>
                )}

                <div className="mt-8 pt-8 border-t border-purple-500/30">
                  <p className="text-gray-400 mb-4">Or reach out directly:</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:phanidharguttikonda0@gmail.com"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors truncate"
                    >
                      <Mail className="w-4 h-4" />
                      phanidharguttikonda0@gmail.com
                    </a>
                    <a
                      href="tel:+918885858760"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
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
