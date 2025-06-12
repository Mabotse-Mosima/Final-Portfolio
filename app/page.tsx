"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { FaPython, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { ChristinahChatbot } from "@/components/ChristinahChatbot";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Menu,
  X,
  Sun,
  Moon,
  ChevronRight,
  Code,
  Palette,
  Database,
  Brain,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Send,
  Twitter,
  FileText,
  Trophy,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiGit,
  SiFigma,
  SiBootstrap,
  SiTensorflow,
  SiLaravel,
} from "react-icons/si"; 

const skill = [
  { name: "Python", icon: SiPython, level: "Intermediate" },
  { name: "JavaScript", icon: SiJavascript, level: "Advanced" },
  { name: "React", icon: SiReact, level: "Advanced" },
  { name: "Angular", icon: SiAngular, level: "Advanced" },
  { name: "Node.js", icon: SiNodedotjs, level: "Advanced" },
  { name: "PHP", icon: SiPhp, level: "Intermediate" },
  { name: "MySQL", icon: SiMysql, level: "Advanced" },
  { name: "Git", icon: SiGit, level: "Advanced" },
  { name: "Figma", icon: SiFigma, level: "Advanced" },
  { name: "Bootstrap", icon: SiBootstrap, level: "Advanced" },
  { name: "TensorFlow", icon: SiTensorflow, level: "Intermediate" },
  { name: "Laravel", icon: SiLaravel, level: "Intermediate" },
]

const skills = [
  { name: "Java", level: 40, category: "backend" },
  { name: "JavaScript/TypeScript", level: 40, category: "frontend" },
  { name: "Python", level: 25, category: "ai" },
  { name: "React & Node.js", level: 40, category: "fullstack" },
  { name: ".NET", level: 30, category: "backend" },
  { name: "UI/UX Design", level: 40, category: "design" },
  { name: "Machine Learning", level: 15, category: "ai" },
  { name: "Deep Learning", level: 10, category: "ai" },
]

const projects = [
  {
    id: 1,
    title: "Florist Web Application",
    description:
      "Built with Angular & Spring Boot, this app lets users order flowers online while admins manage products and orders through a secure dashboard.",
    image: "/images/florist-app.png",
    tags: ["TypeScript", "Bootstrap", "Java Spring Boot", "MySQL"],
    liveUrl: "https://florist-enterprise.netlify.app/",
    githubUrl: "https://github.com/natheerShade13/Florist-Web-Application-Back-End",
    featured: true,
  },
  {
    id: 2,
    title: "UX/UI Design Portfolio",
    description:
      "Designed clean, modern, and user-friendly interfaces using Figma. Focused on intuitive user flows, responsive layouts, and consistent branding.",
    image: "/images/ux-ui-design.jpg",
    tags: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
    liveUrl: "https://www.figma.com/design/NoUzkrZyA0bV4hUCiimFfW/MY-PROJECT",
    // featured: true,
  },
  {
    id: 3,
    title: "Chirper - Micro-blogging Platform",
    description:
      "A Laravel-based micro-blogging platform that allows users to post short messages with images, formatted text, and links.",
    image: "/images/chirper-app.jpg",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Mabotse-Mosima/chirper",
    // featured: true,
  },
  {
    id: 4,
    title: "Brilliance Tutoring App",
    description:
      "A clean web interface that lets users choose their role (Tutor, Student, or Parent) for a personalized tutoring experience.",
    image: "/images/brilliance-app-updated.jpeg",
    tags: ["HTML5", "Bootstrap", "JavaScript"],
    liveUrl: "https://brilliance-tutoring.netlify.app/",
    githubUrl: "https://github.com/Mabotse-Mosima/Brilliance-Tutoring-App",
    featured: true,
  },
  {
    id: 5,
    title: "CAPACITI Chatbot",
    description:
      "Built using Dialogflow, helps users access program info, check eligibility, and get support anytime, anywhere.",
    image: "/images/chatbot.png",
    tags: ["Dialogflow", "Landbot", "Google Sheets"],
    liveUrl: "https://landbot.online/v3/H-2887443-EXZMG8X4EBYYN2IT/index.html",
    featured: true,
  },
  {
    id: 6,
    title: "JobSwipers",
    description:
      "A PHP and MySQL-based platform that lets job seekers explore job listings by swiping left or right like a dating app.",
    image: "/images/Logo.png",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    liveUrl: "https://tngzoccq.manus.space/welcome",
    githubUrl: "https://github.com/Mabotse-Mosima/Job-Swiper",
    featured: true,
  },
  {
    id: 7,
    title: "CAPACITI Digital Sign-In System",
    description:
      "A web-based solution that replaces manual attendance with real-time, secure digital sign-ins. Features dashboards, face capturing, and reliable data storage.",
    image: "/images/capaciti-digital-attendance.jpeg",
    tags: ["HTML5", "CSS", "JavaScript", "Supabase", "MySQL"],
    liveUrl: "https://cnrngmyt.manus.space/Login-page",
    githubUrl: "https://github.com/Mabotse-Mosima/Capatici-SignIn-System",
    featured: true,
  },
  {
    id: 7,
    title: "StackSubChatBot",
    description:
      "he platform promotes a free 15-day trial with no credit card required, making it easy for users to get started. With a modern, user-friendly interface and a focus on simplifying communication, StackSubstitute helps businesses improve customer support through intelligent, automated interactions.",
    image: "/images/stack.png",
    tags: ["HTML5", "CSS", "JavaScript", "bootstrap"],
    liveUrl: "https://sage-capybara-70004a.netlify.app/",
    githubUrl: "https://github.com/Mabotse-Mosima/StackSubChatBot",
    // featured: false,
  },
]

const certificates = [
  {
    title: "Generative AI: Introduction and Applications",
    category: "ai",
    image: "/images/cert-ai-intro-ibm.png",
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    category: "ai",
    image: "/images/cert-prompt-engineering-ibm.png",
  },
  {
    title: "Introduction to HTML, CSS, & JavaScript",
    category: "dev",
    image: "/images/cert-html-css-js-ibm.png",
  },
  {
    title: "Introduction to Git and GitHub",
    category: "dev",
    image: "/images/cert-git-github-google.png",
  },
  {
    title: "Introduction to Software Engineering",
    category: "dev",
    image: "/images/cert-software-engineering-ibm.png",
  },
  {
    title: "Active Listening: Enhancing Communication Skills",
    category: "professional",
    image: "/images/prof-cert-8.png",
  },
  {
    title: "Developing Interpersonal Skills",
    category: "professional",
    image: "/images/prof-cert-7.png",
  },
  {
    title: "Emotional Intelligence",
    category: "professional",
    image: "/images/prof-cert-4.png",
  },
  {
    title: "Work Smarter, Not Harder: Time Management",
    category: "professional",
    image: "/images/prof-cert-5.png",
  },
  {
    title: "Finding Your Professional Voice: Confidence & Impact",
    category: "professional",
    image: "/images/prof-cert-6.png",
  },
  {
    title: "Introduction to Personal Branding",
    category: "professional",
    image: "/images/prof-cert-9.png",
  },
  {
    title: "Financial Planning for Young Adults",
    category: "professional",
    image: "/images/prof-cert-10.png",
  },
  {
    title: "Preparation for Job Interviews",
    category: "professional",
    image: "/images/prof-cert-11.png",
  },
  {
    title: "Leading with Impact: Team Dynamics, Strategy and Ethics",
    category: "professional",
    image: "/images/prof-cert-12.png",
  },
  {
    title: "Verbal Communications and Presentation Skills",
    category: "professional",
    image: "/images/prof-cert-13.png",
  },
  {
    title: "Write Professional Emails in English",
    category: "professional",
    image: "/images/prof-cert-14.png",
  },
]

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      text: "Hi! I'm here to help you learn more about Christinah. Feel free to ask me about her background, skills, experience, or projects!",
      isBot: true,
    },
  ])
  const [chatInput, setChatInput] = useState("")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "resume", "certificates", "contact"]
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileMenuOpen(false)
  }

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatInput.trim()) return

    const userMessage = chatInput.trim()
    setChatMessages((prev) => [...prev, { text: userMessage, isBot: false }])
    setChatInput("")

    // Simple bot response logic
    setTimeout(() => {
      let botResponse =
        "Thanks for your question! I can tell you about Christinah's background, skills, experience, or projects. What would you like to know?"

      const lowerInput = userMessage.toLowerCase()
      if (lowerInput.includes("skill")) {
        botResponse =
          "Christinah's technical skills include Java, JavaScript/TypeScript, Python, React & Node.js, .NET, and UI/UX design. She's also learning AI and machine learning!"
      } else if (lowerInput.includes("project")) {
        botResponse =
          "She has worked on several projects including a Florist Web Application, UX/UI designs, Chirper micro-blogging platform, and more. Check out the projects section for details!"
      } else if (lowerInput.includes("experience")) {
        botResponse =
          "Christinah has 3+ years of experience in software development and is currently pursuing an Advanced Diploma in ICT Application Development."
      } else if (lowerInput.includes("contact")) {
        botResponse =
          "You can reach Christinah at mabotse.emcee@gmail.com or connect with her on LinkedIn. She's currently open to opportunities!"
      }

      setChatMessages((prev) => [...prev, { text: botResponse, isBot: true }])
    }, 1000)
  }

  if (!mounted) return null

  const displayedProjects = showAllProjects ? projects : projects.filter((p) => p.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              {/* <Image
                src="/images/cmm-logo-sun.png"
                alt="Christinah Mosima Logo"
                width={32}
                height={32}
                className="rounded-full"
              /> */}
              <span className="font-bold text-lg">Christinah Mmabotse Mosima</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "skills", "projects", "resume", "certificates", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {section}
                </button>
              ))}
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {["home", "about", "skills", "projects", "resume", "certificates", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left py-2 px-4 rounded-md hover:bg-accent capitalize"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge variant="secondary" className="mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Open to opportunities
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-primary">Christinah Mmabotse Mosima</span>
                <br />
                Software Engineer & AI Enthusiast
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                IT graduate and experienced software engineer with a passion for artificial intelligence. Currently on a
                journey to build expertise in machine learning, deep learning, and AI applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection("contact")}>
                  Get in touch
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection("projects")}>
                  View projects
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <Image
                    src="/images/graduation-photo.jpeg"
                    alt="Christinah Mmabotse Mosima - Graduation Photo"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full">
                  <Code className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech Stack */}
{/* Tech Stack */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="mt-16 flex justify-center"
>
  <div className="flex items-center space-x-8">
    <FaPython className="h-10 w-10 text-gray-400 hover:text-primary transition-colors" />
    <FaJsSquare className="h-10 w-10 text-gray-400 hover:text-primary transition-colors" />
    <FaReact className="h-10 w-10 text-gray-400 hover:text-primary transition-colors" />
    <FaNodeJs className="h-10 w-10 text-gray-400 hover:text-primary transition-colors" />
  </div>
</motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a Software Engineer with a diploma in Information Technology Application Development, now venturing
              into the exciting world of artificial intelligence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground mb-6">
                I'm a 23-year-old IT graduate from Cape Town, Western Cape, with expertise in multiple programming
                languages including Java, Python, React, and Angular. I'm fluent in English, Sepedi, Sotho, and Setswana, and
                hold a valid driver's license.
              </p>
              <p className="text-muted-foreground mb-6">
                My technical proficiencies span across full-stack development, UI/UX design, and database management.
                I'm particularly passionate about problem-solving and creative solutions, with interests in gaming,
                coding, and writing.
              </p>
              <p className="text-muted-foreground">
                I've participated in notable projects including the Celo Farcaster MiniApps Hackathon and developed
                various applications from florist e-commerce platforms to AI chatbots.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Cape Peninsula University of Technology</h4>
                    <p className="text-sm text-muted-foreground">Advanced Diploma in ICT Application Development</p>
                    <p className="text-xs text-muted-foreground">In Progress</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cape Peninsula University of Technology</h4>
                    <p className="text-sm text-muted-foreground">Diploma in ICT Application Development</p>
                    <p className="text-xs text-muted-foreground">2022 - 2024</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cape Peninsula University of Technology</h4>
                    <p className="text-sm text-muted-foreground">Higher Certificate in ICT Application Development</p>
                    <p className="text-xs text-muted-foreground">2021 - 2021</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Software Engineer - Intern</h4>
                    <p className="text-sm text-muted-foreground">Briiliware</p>
                    <p className="text-xs text-muted-foreground">2023 - 2024</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Volunteer in Project Building</h4>
                    <p className="text-sm text-muted-foreground">Mosopi Technologies</p>
                    <p className="text-xs text-muted-foreground">2022</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="mr-2 h-5 w-5" />
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <h4 className="font-semibold">Florist Web Application</h4>
                    <p className="text-sm text-muted-foreground">Full-stack e-commerce platform</p>
                  </div>
                  {/* <div>
                    <h4 className="font-semibold">Celo Farcaster MiniApps Hackathon</h4>
                    <p className="text-sm text-muted-foreground">Blockchain development competition</p>
                  </div> */}
                  <div>
                    <h4 className="font-semibold">CAPACITI Chatbot</h4>
                    <p className="text-sm text-muted-foreground">AI-powered support system</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My technical skills and the areas I'm currently developing in AI and programming.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">Tools & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
  {skill.map((skill, index) => {
    const Icon = skill.icon;
    return (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        viewport={{ once: true }}
      >
        <Card className="text-center p-4 hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <p className="font-semibold text-sm">{skill.name}</p>
            <p className="text-xs text-muted-foreground">{skill.level}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  })}
</div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A selection of my recent work combining software engineering and artificial intelligence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <div className="relative overflow-hidden rounded-t-lg bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className={`w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ${
                        project.title === "JobSwipers" ? "dark:invert" : ""
                      }`}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAAcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    {project.featured && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{project.description}</CardDescription>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {project.liveUrl && (
                          <Button size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Live
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {!showAllProjects && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button onClick={() => setShowAllProjects(true)} size="lg">
                View All Projects
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A passionate and detail-oriented professional with a strong foundation in software engineering, UI/UX
              design, and modern web technologies. Proven ability to learn quickly, adapt to new tools, and deliver
              high-quality solutions.
            </p>
            <Button size="lg" asChild>
<a href="/images/Christinah-Mosima-Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download My Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Certificates</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning and professional development achievements.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ai">AI & ML</TabsTrigger>
              <TabsTrigger value="dev">Development</TabsTrigger>
              <TabsTrigger value="professional">Professional</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-sm">{cert.title}</CardTitle>
                        <Badge variant="outline" className="w-fit">
                          {cert.category}
                        </Badge>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {["ai", "dev", "professional"].map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates
                    .filter((cert) => cert.category === category)
                    .map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="hover:shadow-lg transition-shadow">
                          <div className="relative overflow-hidden rounded-t-lg">
                            <Image
                              src={cert.image || "/placeholder.svg"}
                              alt={cert.title}
                              width={400}
                              height={300}
                              className="w-full h-48 object-cover"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle className="text-sm">{cert.title}</CardTitle>
                          </CardHeader>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interested in collaborating or have questions about my work? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" action="https://formspree.io/f/mrbqdybd" method="POST">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:mabotse.emcee@gmail.com" className="text-muted-foreground hover:text-primary">
                        mabotse.emcee@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+27851785" className="text-muted-foreground hover:text-primary">
                        +27 851 7854
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Cape Town, SA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button size="icon" variant="outline" asChild>
                      <a
                        href="https://www.linkedin.com/in/christinah-mosima-1921b1221/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <a
                        href="https://github.com/Mabotse-Mosima?tab=repositories"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <a href="https://x.com/CeeEmcee" target="_blank" rel="noreferrer noopener">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <a href="https://medium.com/@mabotse.emcee" target="_blank" rel="noreferrer noopener">
                        <FileText className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {/* <Image
                  src="/images/cmm-logo-sun.png"
                  alt="Christinah Mosima Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                /> */}
                <span className="font-bold text-lg">Christinah Mosima</span>
              </div>
              <p className="text-muted-foreground">Software Engineer & AI Enthusiast</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                {["About", "Skills", "Projects", "Resume", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Resume
                </a>
                <a
                  href="https://github.com/Mabotse-Mosima?tab=repositories"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/christinah-mosima-1921b1221/"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2025 Christinah Mosima. All rights reserved.</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mt-4 md:mt-0"
            >
              Switch to {theme === "dark" ? "Light" : "Dark"} Mode
            </Button>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
<ChristinahChatbot />
    </div>
  )
}
