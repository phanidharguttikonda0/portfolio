"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactSection from "./Contact"
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
    { category: "Languages", items: ["Rust", "JavaScript (Node.js)", "Java"] },
    { category: "Frameworks and Libraries", items: ["Axum", "Express.js", "React"] },
    { category: "Databases", items: ["PostgreSQL", "Redis", "MongoDB", "DynamoDB"] },
    { category: "Cloud and DevOps", items: ["AWS (EC2, Lambda, SQS, SNS, RDS, ECR)", "Docker", "GitHub Actions"] },
    { category: "Other Technologies", items: ["gRPC (Microservices)", "WebRTC", "Razorpay API"] },
  ]

  const projects = [
    {
      id: 1,
      title: "IPL Auction Replica App",
      description: "Real-time IPL auction platform with live bidding, concurrent participants, and full-room auctions",
      tech: [
        "React (Axum)",
        "PostgreSQL",
        "Redis",
        "WebSockets",
        "WebRTC",
      ],
      features: [
        "Designed and developed a production-grade real-time IPL auction platform supporting private bidding rooms, concurrent live participants, and full-room auctions using Rust (Axum), WebSockets, and React",
        "Implemented Axum WebSocket-based bid synchronization and authorization server-side logic, enabling real-time broadcasting, ensuring consistent auction state, real-time updates, and seamless client reconnects under network disruptions",
        "Engineered a timer-driven auction engine using Redis key expiry events to automate bid closure, Right-To-Match (RTM) workflows, skip handling, and player transitions without blocking application threads",
        "Architected Redis-backed distributed auction state management for participants, current players, bids, timers, and skip states, enabling crash recovery and race-condition-resistant coordination across concurrent bidders",
        "Developed financial-grade bidding logic with strict-mode enforcement, per-segment budget buffers, foreign player limits, RTM validation, and deadlock prevention to guarantee auction fairness and correctness",
        "Built race-resistant bid placement using atomic Redis operations and TTL-based coordination to prevent double bids, overspending, invalid RTM execution, and inconsistent state after high concurrency",
        "Integrated WebRTC-based audio communication and implemented channel-based inter-task messaging by spawning background worker tasks to safely handle asynchronous and CPU/IO-intensive operations without impacting real-time bid processing",
        "Designed asynchronous, event-style persistence using background task executors to decouple real-time auction flow from PostgreSQL writes for sold/unsold players, balance updates, and room state transitions",
        "Implemented a stateless backend architecture with Redis as the coordination backbone, enabling horizontal scalability and reliable multi-instance deployment of auction backend services",
      ],
      link: "https://ipl-auction.phani.services",
      github: "https://github.com/phanidharguttikonda0/ipl_auction",
      status: "Live",
    },
    {
      id: 2,
      title: "SnipSight – Secure File & URL Management Platform",
      description: "Designed and built a secure file sharing and URL management platform with role-based access control and analytics",
      tech: [
        "Rust",
        "Axum",
        "gRPC",
        "AWS",
        "Docker",
        "DynamoDB",
      ],
      features: [
        "Designed and built a secure file sharing and URL management platform with role-based access control and analytics using Rust, gRPC, REST APIs, and MongoDB",
        "Implemented gRPC-based inter-service communication to enable low-latency, efficient service-to-service operations within a microservices architecture",
        "Built event-driven backend workflows using AWS SQS and Lambda for analytics ingestion, background processing, and automated email notifications",
        "Containerized backend services using Docker and deployed via AWS ECR and EC2 with automated CI/CD pipelines using GitHub Actions",
      ],
      link: "https://web.snipsight.phani.services/",
      github: "https://github.com/phanidharguttikonda0/SnipSight",
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-purple-500/30 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
            >
              {"<Phani/>"}
            </motion.div>
            <div className="hidden md:flex space-x-6 lg:space-x-10 text-sm lg:text-base">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`relative transition-all duration-300 hover:text-cyan-400 font-medium group ${activeSection === item.toLowerCase() ? "text-cyan-400" : "text-gray-300"
                    }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 sm:mb-8"
          >
            <motion.div
              className="w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 mx-auto mb-8 sm:mb-12 relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-1 animate-gradientShift">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-1">
                  <img
                    src="/profile.png"
                    alt="Phanidhar Reddy"
                    className="w-full h-full rounded-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-400/30 blur-2xl animate-pulse"></div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight animate-gradientShift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {"<Phanidhar/>"}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-10 px-4 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <span className="text-cyan-400 font-semibold">const</span> <span className="text-purple-400 font-semibold">role</span> ={" "}
              <span className="text-green-400 font-medium">"Backend Developer & Systems Engineer"</span>
              <span className="text-cyan-400">;</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-gray-300 justify-center hover:text-cyan-400 transition-colors duration-300">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Ongole, AP, India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 justify-center hover:text-purple-400 transition-colors duration-300">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">+91 88858 58760</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 justify-center hover:text-pink-400 transition-colors duration-300">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="truncate font-medium">phanidharguttikonda0@gmail.com</span>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center flex-wrap gap-4 sm:gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/50 hover:to-purple-500/50 transition-all duration-300 border border-cyan-500/40 hover:border-purple-400 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientShift">
              Professional Summary
            </h2>
            <div className="max-w-5xl mx-auto">
              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 group">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                    <span className="text-cyan-400 font-semibold">Backend Developer</span> with hands-on experience in
                    building scalable microservices, real-time communication systems, and cloud-native applications
                    using <span className="text-purple-400 font-semibold">Rust (Axum)</span> and{" "}
                    <span className="text-purple-400 font-semibold">Node.js</span>. Proficient in{" "}
                    <span className="text-cyan-400 font-semibold">AWS services</span> including EC2, Lambda, SQS, SNS,
                    DynamoDB, and RDS, with strong experience in{" "}
                    <span className="text-purple-400 font-semibold">CI/CD automation</span> using GitHub Actions and
                    Docker-based deployments. Solid understanding of{" "}
                    <span className="text-cyan-400 font-semibold">
                      asynchronous programming, concurrency, API design (REST and gRPC)
                    </span>
                    , and performance-oriented backend architecture. Recognized for strong{" "}
                    <span className="text-purple-400 font-semibold">
                      problem-solving skills, ownership mindset, and effective team collaboration
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
      <section id="experience" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientShift">
              Professional Experience
            </h2>
            <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02] group">
                <CardHeader className="p-5 sm:p-7">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                    <div>
                      <CardTitle className="text-xl sm:text-2xl md:text-3xl text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        Software Engineer – Part Time
                      </CardTitle>
                      <CardDescription className="text-lg sm:text-xl text-purple-400 font-medium group-hover:text-purple-300 transition-colors">Tiny Pal</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 text-sm sm:text-base whitespace-nowrap font-semibold"
                    >
                      07/2025 – 11/2025
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-5 sm:p-7 pt-0">
                  <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-gray-200 group-hover:text-gray-100 transition-colors">
                    <li className="flex items-start gap-3">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Developing cloud-hosted backend services using{" "}
                        <strong>Node.js, deployed on AWS EC2 and RDS</strong> with Docker-based containerization.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Designed and implemented automated <strong>CI/CD pipelines using GitHub Actions</strong>,
                        improving deployment reliability and reducing manual operational effort.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Integrated subscription billing and payment automation using <strong>Razorpay APIs</strong>,
                        ensuring secure and reliable transaction handling.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Database className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Designed scalable <strong>REST APIs</strong> and optimized relational data models to improve
                        performance, maintainability, and scalability.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02] group">
                <CardHeader className="p-5 sm:p-7">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                    <div>
                      <CardTitle className="text-xl sm:text-2xl md:text-3xl text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        Software Engineer – Intern
                      </CardTitle>
                      <CardDescription className="text-lg sm:text-xl text-purple-400 font-medium group-hover:text-purple-300 transition-colors">TeCell</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 text-sm sm:text-base whitespace-nowrap font-semibold"
                    >
                      06/2025 – 07/2025
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-5 sm:p-7 pt-0">
                  <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-gray-200 group-hover:text-gray-100 transition-colors">
                    <li className="flex items-start gap-3">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Built serverless, event-driven backend workflows using{" "}
                        <strong>AWS Lambda, SQS, SNS, and DynamoDB</strong>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Implemented <strong>DynamoDB Streams triggers</strong> to enable real-time workflow automation
                        and near real-time data synchronization.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Database className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Designed <strong>DynamoDB table schemas and indexing strategies</strong> optimized for
                        high-throughput and low-latency access patterns.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Containerized backend services using <strong>Docker</strong> and integrated{" "}
                        <strong>AWS CloudWatch</strong> for centralized logging, monitoring, and observability.
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
      <section id="projects" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientShift">
              Key Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="bg-black/40 border-purple-500/30 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.01] group flex flex-col h-full">
                    <CardHeader className="p-5 sm:p-6 lg:p-7">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                        <CardTitle className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-cyan-400 group-hover:text-cyan-300 transition-colors leading-tight">{project.title}</CardTitle>
                        <Badge
                          variant={project.status === "Live" ? "default" : "secondary"}
                          className={
                            project.status === "Live"
                              ? "bg-green-500/20 text-green-400 border-green-500/40 text-xs sm:text-sm font-semibold whitespace-nowrap"
                              : "bg-yellow-500/20 text-yellow-400 border-yellow-500/40 text-xs sm:text-sm font-semibold whitespace-nowrap"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm sm:text-base md:text-lg text-gray-200 group-hover:text-gray-100 transition-colors leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-5 sm:p-6 lg:p-7 pt-0 flex-1 flex flex-col">
                      <div className="space-y-5 sm:space-y-6 flex-1">
                        <div>
                          <p className="text-sm sm:text-base font-semibold text-gray-300 mb-3">Technologies:</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="outline" className="border-cyan-500/40 text-cyan-300 text-xs sm:text-sm hover:bg-cyan-500/10 transition-colors">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                          <p className="text-sm sm:text-base font-semibold text-gray-300 mb-3">Key Features:</p>
                          <ul className="space-y-2 sm:space-y-2.5 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
                            {project.features.map((feature) => (
                              <li key={feature} className="text-xs sm:text-sm md:text-base text-gray-200 group-hover:text-gray-100 flex items-start gap-2.5 leading-relaxed transition-colors">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-cyan-400 transition-colors"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-auto">
                          <Button
                            asChild
                            className="w-full sm:flex-1 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-black font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
                          >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="w-full sm:flex-1 border-purple-500 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400 text-sm sm:text-base font-semibold bg-transparent shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all"
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
      <section id="skills" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 sm:mb-14 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientShift">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 lg:gap-7">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-black/40 border-purple-500/30 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 group h-full overflow-hidden">
                    <CardHeader className="p-5 sm:p-6">
                      <CardTitle className="text-base sm:text-lg md:text-xl text-cyan-400 group-hover:text-cyan-300 transition-colors break-words">{skill.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-5 sm:p-6 pt-0 overflow-hidden">
                      <div className="flex flex-wrap gap-2 w-full">
                        {skill.items.map((item) => (
                          <Badge key={item} variant="outline" className="border-purple-500/40 text-purple-300 text-xs hover:bg-purple-500/10 transition-colors whitespace-normal break-words max-w-full">
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
      <section id="contact" className="py-16 sm:py-24 lg:py-32 relative">
        <ContactSection />
      </section>
    </div>
  )
}
