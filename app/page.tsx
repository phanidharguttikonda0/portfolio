"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactSection from "./Contact.tsx"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Zap,
  Twitter,
  BookOpen,
  Trophy,
} from "lucide-react"
import { Poppins } from "next/font/google"

const poppinsFont = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const socialLinks = [
    { icon: Github, href: "https://github.com/phanidharguttikonda0", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/phanidhar-reddy-guttikonda-321817233/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/phanidharreddy_", label: "X (Twitter)" },
    { icon: BookOpen, href: "https://medium.com/@guttikondaphanidharreddy", label: "Medium" },
    { icon: Trophy, href: "https://leetcode.com/u/phanidharguttikonda/", label: "LeetCode" },
  ]

  const skills = [
    { category: "Languages", items: ["Rust", "JavaScript", "TypeScript", "Java"] },
    { category: "Frameworks", items: ["Axum", "Express.js", "Node.js", "React.js"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "GitHub Actions", "EC2", "Lambda"] },
    { category: "Tools & Specialization", items: ["Razorpay API", "WebRTC", "gRPC", "Postman", "Git"] },
  ]

  const projects = [
    {
      id: 1,
      title: "SnipSight",
      description: "Secure URL Shortener & File Sharing Platform",
      tech: [
        "Rust (Axum)",
        "JavaScript",
        "AWS (Lambda, EC2, SQS, ECR)",
        "Docker",
        "GitHub Actions",
        "Event Driven Architecture",
      ],
      features: [
        "Modular Microservice Architecture",
        "Secure URL Shortening",
        "gRPC Inter-service Communication",
        "Real-time Analytics",
        "Asynchronous Operations",
      ],
      link: "https://web.snipsight.phani.services/",
      github: "https://github.com/phanidharguttikonda0/SnipSight",
      status: "Live",
    },
    {
      id: 2,
      title: "IPL Auction",
      description:
        "Real-Time Multiplayer Bidding System - An Live IPL Auction you can play with ur friends by creating rooms",
      tech: ["React", "Rust (Axum)", "PostgreSQL", "Redis", "WebSockets", "Job Queue", "WebRTC"],
      features: [
        "Designed and built a real-time auction platform supporting private bidding rooms and live participation",
        "Integrated Axum WebSockets for real-time bidding synchronization, team updates, and user interactions",
        "Added WebRTC audio communication for live team coordination with future video broadcasting capabilities",
        "Used Redis for fast in-memory state management and PostgreSQL for reliable data storage with Redis subscriber model for automated bidding responses",
      ],
      link: "https://ipl-auction.phani.services",
      github: "https://github.com/phanidharguttikonda0/ipl_auction",
      status: "Live",
    },
  ]

  useEffect(() => {
    const removeV0Button = () => {
      const divs = document.querySelectorAll('div[id^="v0-built-with-button"]')

      divs.forEach((el) => {
        const textMatch = el.textContent?.toLowerCase().includes("built with")
        const svgLogo = el.querySelector("svg")
        const hasV0Styles = el.style.position === "fixed" && el.style.bottom === "24px"

        if (textMatch && hasV0Styles && svgLogo) {
          el.remove()
        }
      })
    }

    removeV0Button()

    const observer = new MutationObserver(() => {
      removeV0Button()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden font-sans`}
    >
      {/* Animated Background */}
      <motion.div className="fixed inset-0 opacity-20 pointer-events-none" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-repeat opacity-10"></div>
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent truncate"
            >
              {"<Phani/>"}
            </motion.div>
            <div className="hidden md:flex space-x-4 lg:space-x-8 text-sm lg:text-base">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-3 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 sm:mb-8"
          >
            <div className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 mx-auto mb-6 sm:mb-8 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent p-0.5 sm:p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-0.5 sm:p-1">
                  <img
                    src="/profile.png"
                    alt="Phanidhar Reddy"
                    className="w-full h-full rounded-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl animate-pulse"></div>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
              {"<Phanidhar/>"}
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 px-2">
              <span className="text-cyan-400">const</span> <span className="text-purple-400">role</span> ={" "}
              <span className="text-green-400">"Backend Developer & Systems Engineer"</span>
              <span className="text-cyan-400">;</span>
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-gray-400 justify-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Ongole, AP, India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 justify-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>+91 88858 58760</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 justify-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="truncate">guttikonda...@gmail.com</span>
              </div>
            </div>

            <div className="flex justify-center flex-wrap gap-3 sm:gap-6 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300 border border-cyan-500/30"
                >
                  <social.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-3 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Professional Summary
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-md">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                    Creative and performance-driven{" "}
                    <span className="text-cyan-400 font-semibold">Backend Developer</span> with hands-on expertise in
                    building real-time, event-driven, and microservice-based systems using{" "}
                    <span className="text-purple-400 font-semibold">Rust (Axum) and Node.js</span>. Skilled in{" "}
                    <span className="text-cyan-400 font-semibold">AWS services</span> (EC2, Lambda, SQS, SNS, DynamoDB,
                    RDS),
                    <span className="text-purple-400 font-semibold">CI/CD automation using GitHub Actions</span>, and
                    Docker-based deployments. Strong understanding of concurrency, asynchronous runtimes, API design,
                    and performance-driven backend architecture. Known for{" "}
                    <span className="text-cyan-400 font-semibold">
                      problem solving, accountability, and strong team collaboration
                    </span>
                    .
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-3 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-md">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                    <div>
                      <CardTitle className="text-lg sm:text-xl md:text-2xl text-cyan-400">
                        Software Engineer – Part Time Remote
                      </CardTitle>
                      <CardDescription className="text-base sm:text-lg text-purple-400">Tiny Pal</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 text-xs sm:text-sm whitespace-nowrap"
                    >
                      July 2025 – Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-gray-300">
                    <li className="flex items-start gap-3">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Developing cloud-hosted backend services using{" "}
                        <strong>Rust/Node.js, AWS EC2, RDS, and Docker</strong>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Built automated <strong>CI/CD pipelines using GitHub Actions</strong>, improving deployment
                        reliability and reducing manual intervention.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Integrated subscription billing and payment automation using <strong>Razorpay APIs</strong>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Database className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Designed scalable <strong>REST APIs</strong> and optimized data models for performance and
                        maintainability.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-md">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                    <div>
                      <CardTitle className="text-lg sm:text-xl md:text-2xl text-cyan-400">
                        Software Engineer – Intern Remote
                      </CardTitle>
                      <CardDescription className="text-base sm:text-lg text-purple-400">TeCell</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 text-xs sm:text-sm whitespace-nowrap"
                    >
                      June – July 2025
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-gray-300">
                    <li className="flex items-start gap-3">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Built serverless event-driven workflows using{" "}
                        <strong>AWS Lambda, SQS, SNS, EventBridge, and DynamoDB</strong>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Implemented <strong>DynamoDB Stream triggers</strong> for real-time workflow automation and data
                        synchronization.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Database className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Designed efficient <strong>DynamoDB tables and indexing strategies</strong> for high-throughput
                        applications.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Containerized backend services using <strong>Docker</strong> and integrated{" "}
                        <strong>AWS CloudWatch</strong> for monitoring and log analysis.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-3 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Key Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="bg-black/40 border-purple-500/30 backdrop-blur-md h-full">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
                        <CardTitle className="text-base sm:text-lg md:text-xl text-cyan-400">{project.title}</CardTitle>
                        <Badge
                          variant={project.status === "Live" ? "default" : "secondary"}
                          className={
                            project.status === "Live"
                              ? "bg-green-500/20 text-green-400 border-green-500/30 text-xs"
                              : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-xs sm:text-sm md:text-base text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-400 mb-2">Technologies:</p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="outline" className="border-cyan-500/30 text-cyan-300 text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-gray-400 mb-2">Key Features:</p>
                          <ul className="space-y-1">
                            {project.features.map((feature) => (
                              <li key={feature} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
                                <div className="w-1 h-1 bg-purple-400 rounded-full mt-1 flex-shrink-0"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 pt-4">
                          <Button
                            asChild
                            className="w-full sm:flex-1 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-xs sm:text-sm"
                          >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="w-full sm:flex-1 border-purple-500 text-purple-400 hover:bg-purple-500/10 text-xs sm:text-sm bg-transparent"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-3 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-black/40 border-purple-500/30 backdrop-blur-md h-full">
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-sm sm:text-base md:text-lg text-cyan-400">{skill.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <Badge key={item} variant="outline" className="border-purple-500/30 text-purple-300 text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 relative">
        <ContactSection />
      </section>
    </div>
  )
}
