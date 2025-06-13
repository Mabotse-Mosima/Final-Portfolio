"use client"

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Send, X, MessageCircle, User, Bot, ExternalLink, Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

type ChatMessage = {
  text: string;
  isBot: boolean;
  timestamp?: Date;
  links?: Array<{ text: string; url?: string; type?: 'demo' | 'github' | 'social' }>;
};

// Enhanced Christinah's Information Database
const christinahInfo = {
  name: "Christinah Mmabotse Mosima",
  title: "Software Engineer & AI Enthusiast",
  description: "IT graduate and experienced software engineer with a passion for artificial intelligence. Currently on a journey to build expertise in machine learning, deep learning, and AI applications.",
  experience: "3+ years of experience developing web and mobile applications",
  education: [
    {
      institution: "Cape Peninsula University of Technology",
      qualification: "Higher Certificate in Information Communication and Technology",
      period: "2021 - 2021",
    },
    {
      institution: "Cape Peninsula University of Technology", 
      qualification: "Diploma in Information Communication and Technology Application Development",
      period: "2022 - 2024",
    },
    {
      institution: "Cape Peninsula University of Technology",
      qualification: "Advanced Diploma in Information Communication and Technology Application Development",
      period: "In Progress",
    }
  ],
  skills: ["Java", "JavaScript/TypeScript", "Python", "React & Node.js", ".Net", "UI/UX", "Machine Learning", "Deep Learning", "Natural Language Processing"],
  tools: ["Python", "HTML", "JavaScript", "Angular", "React", "Node.js", "Figma", "Bootstrap", "GitHub/Git", "SQL/NoSQL", "PHP", "TensorFlow", "PyTorch", "Scikit-learn"],
  projects: [
    {
      name: "Florist Web Application",
      description: "Built with Angular & Spring Boot, this app lets users order flowers online while admins manage products and orders through a secure dashboard.",
      technologies: ["TypeScript", "Bootstrap", "Java Spring Boot", "Postman", "MySQL"],
      link: "https://florist-enterprise.netlify.app",
      github: "https://github.com/Mabotse-Mosima/Florist-Web-Application-Client-Side"
    },
    {
      name: "UX/UI Design Portfolio",
      description: "Designed clean, modern, and user-friendly interfaces for the florist web app using Figma. Focused on intuitive user flows, responsive layouts, and consistent branding.",
      technologies: ["Figma", "Wire Frame", "UI/UX Design"],
      link: "https://www.figma.com/design/NoUzkrZyA0bV4hUCiimFfW/MY-PROJECT?node-id=151-1530&t=o726sTO8DmxnYSGI-1",
    },
    {
      name: "Chirper",
      description: "Chirper is a micro-blogging platform that allows users to post short messages (chirps) with the ability to include images, formatted text, and links.",
      technologies: ["Laravel/PHP", "MySQL", "Tailwind CSS"],
      github: "https://github.com/Mabotse-Mosima/chirper"
    },
    {
      name: "Brilliance Tutoring App",
      description: "A simple web interface that lets users choose their role Tutor, Student, or Parent to get started. Built with HTML and CSS.",
      technologies: ["HTML5", "Bootstrap", "JavaScript"],
      link: "https://luxury-alfajores-5e5439.netlify.app",
      github: "https://github.com/Mabotse-Mosima/Brilliance-Tutoring-App"
    },
    {
      name: "CAPACITI Chatbot",
      description: "Built using Dialogflow and web technologies, the CAPACITI chatbot helps users access program info, check eligibility, and get support anytime, anywhere.",
      technologies: ["Landbot", "Dialogflow", "Google Sheets"],
      link: "https://landbot.online/v3/H-2887443-EXZMG8X4EBYYN2IT/index.html",
    },
    {
      name: "JobSwipers",
      description: "A PHP and MySQL-based platform that lets job seekers explore job listings by swiping left or right just like a dating app.",
      technologies: ["HTML5", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      link: "https://tngzoccq.manus.space/welcome",
      github: "https://github.com/Mabotse-Mosima/Job-Swiper"
    }
  ],
  contact: {
    email: "mabotse.emcee@gmail.com",
    phone: "+27 851 7854",
    location: "Cape Town, SA",
    linkedin: "https://www.linkedin.com/in/christinah-mosima-1921b1221/",
    github: "https://github.com/Mabotse-Mosima?tab=repositories",
    twitter: "https://x.com/CeeEmcee",
    medium: "https://medium.com/@mabotse.emcee"
  },
  status: "Open to opportunities"
};

const quickQuestions = [
  "Tell me about her background",
  "What are her technical skills?",
  "Show me her projects",
  "What's her education?",
  "How can I contact her?",
  "What's her experience?"
];

export const ChristinahChatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
  {
    text: "👋 Hi there! I'm CMM ChatBot, your guide to learning about Christinah Mmabotse Mosima.\n\n✨ I can tell you about her:\n• Background & Experience\n• Technical Skills & Tools\n• Projects & Portfolio\n• Education & Qualifications\n• Contact Information\n\nWhat would you like to know first?",
    isBot: true,
    timestamp: new Date(),
  },
]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

const getResponse = (message: string): { text: string; links?: Array<{ text: string; url?: string; type?: 'demo' | 'github' | 'social' }> } => {  const lowerMessage = message.toLowerCase();

    // Greeting responses
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey") || lowerMessage.includes("good")) {
      const greetings = [
        `Hello! 😊 I'm excited to tell you about ${christinahInfo.name}. She's a talented software engineer with a passion for AI.\n\nWhat aspect of her profile interests you most?`,
        `Hi there! 👋 Welcome to Christinah's interactive profile. I can share details about her technical expertise, projects, or background.\n\nWhat would you like to explore?`,
        `Hey! 🌟 Great to meet you! I'm here to showcase Christinah's amazing journey in software engineering and AI.\n\nFeel free to ask me anything about her!`,
      ];
      return { text: greetings[Math.floor(Math.random() * greetings.length)] };
    }

    // About/Background responses
    if (lowerMessage.includes("about") || lowerMessage.includes("who is") || lowerMessage.includes("background") || lowerMessage.includes("tell me about")) {
      return {
        text: `🌟 Meet ${christinahInfo.name}\n\n${christinahInfo.title}\n\n${christinahInfo.description}\n\n💼 ${christinahInfo.experience}\n🎯 ${christinahInfo.status}\n📍 Based in ${christinahInfo.contact.location}\n\nShe's passionate about leveraging technology to solve real-world problems and is particularly excited about the potential of AI to transform industries.`,
        links: [
          { text: "View LinkedIn Profile", url: christinahInfo.contact.linkedin, type: "social" },
          { text: "Check GitHub", url: christinahInfo.contact.github, type: "social" }
        ]
      };
    }

    // Skills responses
    if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("tech stack") || lowerMessage.includes("technical")) {
      return {
        text: `💻 Christinah's Technical Arsenal\n\n🔧 Core Programming Languages:\n${christinahInfo.skills.slice(0, 5).map(skill => `• ${skill}`).join('\n')}\n\n🤖 AI & Machine Learning:\n• Machine Learning\n• Deep Learning\n• Natural Language Processing\n• TensorFlow & PyTorch\n\n🎨 Design & Frontend:\n• UI/UX Design\n• React & Angular\n• Bootstrap & Tailwind CSS\n\nShe's constantly learning and staying up-to-date with the latest technologies in software development and AI!`
      };
    }

    // Tools responses
    if (lowerMessage.includes("tools") || lowerMessage.includes("software") || lowerMessage.includes("frameworks")) {
      return {
        text: `🛠️ Development Tools & Frameworks\n\n${christinahInfo.tools.map(tool => `• ${tool}`).join('\n')}\n\nChristinah is proficient with modern development workflows, version control, and collaborative development practices. She believes in using the right tool for the job and is always eager to learn new technologies.`
      };
    }

    // Experience responses
    if (lowerMessage.includes("experience") || lowerMessage.includes("work") || lowerMessage.includes("career") || lowerMessage.includes("professional")) {
      return {
        text: `💼 Professional Experience\n\n${christinahInfo.experience}\n\n🚀 Key Highlights:\n• Developed multiple full-stack web applications\n• Created user-friendly mobile interfaces\n• Implemented secure backend systems\n• Designed intuitive UI/UX experiences\n• Built AI-powered chatbot solutions\n\n🎯 Current Focus:\nTransitioning into AI and machine learning, combining her solid software engineering foundation with cutting-edge AI technologies to create innovative solutions.`
      };
    }

    // Education responses
    if (lowerMessage.includes("education") || lowerMessage.includes("study") || lowerMessage.includes("university") || lowerMessage.includes("qualification") || lowerMessage.includes("degree")) {
      let educationText = `🎓 Educational Journey\n\n`;
      christinahInfo.education.forEach((edu, index) => {
        const status = edu.period.includes("Progress") ? "🔄" : "✅";
        educationText += `${status} ${edu.qualification}\n📍 ${edu.institution}\n📅 ${edu.period}\n\n`;
      });
      educationText += `Christinah's educational path demonstrates her commitment to continuous learning and professional development in the rapidly evolving field of technology.`;
      
      return { text: educationText };
    }

    // Projects responses
if (lowerMessage.includes("project") || lowerMessage.includes("portfolio") || lowerMessage.includes("work samples")) {
  // Specific project queries
  if (lowerMessage.includes("florist")) {
    const project = christinahInfo.projects[0];
    const links = [];
    
    if (project.link) {
      links.push({ text: "View Live Demo", url: project.link, type: "demo" as const });
    }
    if (project.github) {
      links.push({ text: "View Code", url: project.github, type: "github" as const });
    }

    return {
      text: `🌸 ${project.name}\n\n${project.description}\n\n💻 Technologies Used:\n${project.technologies.map(tech => `• ${tech}`).join('\n')}`,
      links: links.length > 0 ? links : undefined
    };
  }
  
  if (lowerMessage.includes("ui") || lowerMessage.includes("ux") || lowerMessage.includes("design")) {
    const project = christinahInfo.projects[1];
    const links = [];
    
    if (project.link) {
      links.push({ text: "View Design Portfolio", url: project.link, type: "demo" as const });
    }

    return {
      text: `🎨 ${project.name}\n\n${project.description}\n\n🛠️ Design Tools:\n${project.technologies.map(tech => `• ${tech}`).join('\n')}`,
      links: links.length > 0 ? links : undefined
    };
  }

  if (lowerMessage.includes("chirper") || lowerMessage.includes("blog") || lowerMessage.includes("social")) {
    const project = christinahInfo.projects[2];
    const links = [];
    
    if (project.github) {
      links.push({ text: "View Source Code", url: project.github, type: "github" as const });
    }

    return {
      text: `🐦 ${project.name}\n\n${project.description}\n\n⚡ Built With:\n${project.technologies.map(tech => `• ${tech}`).join('\n')}`,
      links: links.length > 0 ? links : undefined
    };
  }

  // General projects overview
  return {
    text: `🚀 Project Portfolio\n\nChristinah has built an impressive collection of projects:\n\n${christinahInfo.projects.map((project, index) => 
      `${index + 1}. ${project.name}\n   ${project.description.substring(0, 80)}...`
    ).join('\n\n')}\n\n💡 Each project demonstrates different aspects of her technical skills, from full-stack development to UI/UX design and AI implementation.\n\nAsk about any specific project for detailed information!`
  };
}

    // Contact responses
    if (lowerMessage.includes("contact") || lowerMessage.includes("hire") || lowerMessage.includes("opportunity") || lowerMessage.includes("available") || lowerMessage.includes("reach")) {
      return {
        text: `📞 Get In Touch with Christinah\n\nChristinah is currently ${christinahInfo.status.toLowerCase()} and would love to hear from you!\n\n📧 Email: ${christinahInfo.contact.email}\n📱 Phone: ${christinahInfo.contact.phone}\n📍 Location: ${christinahInfo.contact.location}\n\n🤝 Whether you're looking for a talented developer, AI enthusiast, or collaborator on exciting projects, don't hesitate to reach out!`,
        links: [
          { text: "Send Email", url: `mailto:${christinahInfo.contact.email}`, type: "social" },
          { text: "LinkedIn", url: christinahInfo.contact.linkedin, type: "social" },
          { text: "GitHub", url: christinahInfo.contact.github, type: "social" }
        ]
      };
    }

    // Social media responses
    if (lowerMessage.includes("social") || lowerMessage.includes("media") || lowerMessage.includes("linkedin") || lowerMessage.includes("github") || lowerMessage.includes("twitter")) {
      return {
        text: `🌐 Connect with Christinah\n\nStay updated with her latest projects and insights:\n\n💼 Professional networking and career updates\n🔧 Code repositories and open-source contributions\n💭 Thoughts on tech trends and AI developments\n📝 Technical articles and tutorials`,
        links: [
          { text: "LinkedIn", url: christinahInfo.contact.linkedin, type: "social" },
          { text: "GitHub", url: christinahInfo.contact.github, type: "social" },
          { text: "Twitter", url: christinahInfo.contact.twitter, type: "social" },
          { text: "Medium", url: christinahInfo.contact.medium, type: "social" }
        ]
      };
    }

    // Location responses
    if (lowerMessage.includes("location") || lowerMessage.includes("address") || lowerMessage.includes("where") || lowerMessage.includes("based")) {
      return {
        text: `📍 Location & Availability\n\nChristinah is based in ${christinahInfo.contact.location}\n\n🌍 She's open to:\n• Remote work opportunities\n• Local Cape Town positions\n• Hybrid work arrangements\n• International collaborations\n\n✈️ Available for relocation for the right opportunity!`,
        links: [
          { text: "Contact for Opportunities", url: `mailto:${christinahInfo.contact.email}`, type: "social" }
        ]
      };
    }

    // AI/Machine Learning specific responses
    if (lowerMessage.includes("ai") || lowerMessage.includes("machine learning") || lowerMessage.includes("deep learning") || lowerMessage.includes("artificial intelligence")) {
      return {
        text: `🤖 AI & Machine Learning Journey\n\nChristinah is passionate about artificial intelligence and is actively building expertise in:\n\n🧠 Machine Learning\n• Supervised & Unsupervised Learning\n• Model Training & Evaluation\n• Data Analysis & Preprocessing\n\n🔬 Deep Learning\n• Neural Networks\n• TensorFlow & PyTorch\n• Computer Vision & NLP\n\n💡 Current AI Projects:\n• Natural Language Processing applications\n• Chatbot development (like this one!)\n• Exploring AI integration in web applications\n\nShe believes AI will revolutionize how we solve problems and is excited to be part of this transformation!`
      };
    }

    // Status responses
    if (lowerMessage.includes("status") || lowerMessage.includes("availability") || lowerMessage.includes("job") || lowerMessage.includes("work")) {
      return {
        text: `💼 Current Status: ${christinahInfo.status}\n\n🎯 What she's looking for:\n• Software Engineering roles\n• AI/ML positions\n• Full-stack development opportunities\n• Remote or Cape Town-based positions\n• Challenging projects that make an impact\n\n🚀 Ready to contribute to innovative teams and exciting projects!\n\nInterested in working together? Get in touch!`,
        links: [
          { text: "Contact Christinah", url: `mailto:${christinahInfo.contact.email}`, type: "social" }
        ]
      };
    }

    // Default helpful response
    const helpfulResponses = [
      `🤔 I'd love to help you learn more about Christinah!\n\nTry asking about:\n• Her background and experience\n• Technical skills and tools\n• Project portfolio\n• Education and qualifications\n• Contact information\n• AI and machine learning interests\n\nWhat interests you most?`,
      `💡 Here are some things I can tell you about Christinah:\n\n👩‍💻 Professional background\n🛠️ Technical expertise\n🚀 Project showcase\n🎓 Educational journey\n📞 How to get in touch\n\nWhat would you like to explore?`,
    ];
    return { text: helpfulResponses[Math.floor(Math.random() * helpfulResponses.length)] };
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = {
      text: chatInput,
      isBot: false,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(chatInput);
      const botMessage: ChatMessage = {
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        links: response.links
      };
      
      setChatMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setChatInput(question);
    setTimeout(() => handleSendMessage(), 100);
  };

 const renderLinks = (links: Array<{ text: string; url?: string; type?: 'demo' | 'github' | 'social' }>) => {
  if (!links?.length) return null;
  
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {links.map((link, index) => (
        link.url && (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 bg-muted hover:bg-muted/80 text-foreground rounded-full text-xs font-medium transition-colors"
          >
            {link.type === 'github' && <Github className="w-3 h-3" />}
            {link.type === 'social' && <ExternalLink className="w-3 h-3" />}
            {link.type === 'demo' && <ExternalLink className="w-3 h-3" />}
            {!link.type && <ExternalLink className="w-3 h-3" />}
            {link.text}
          </a>
        )
      ))}
    </div>
  );
};

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="mb-4 w-96 h-[32rem] bg-background rounded-xl shadow-xl border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative h-10 w-10">
                    <Image 
                      src="/images/cmm-chatbot-logo.png" 
                      alt="CMM ChatBot" 
                      layout="fill"
                      objectFit="contain"
                      className="filter brightness-0 invert"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">CMM ChatBot</h3>
                    <p className="text-primary-foreground/80 text-sm">Ask me about Christinah!</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setChatOpen(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/20 rounded-full"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Questions */}
            {chatMessages.length === 1 && (
              <div className="p-3 bg-muted/30 border-b">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1">
                  {quickQuestions.slice(0, 3).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="px-2 py-1 bg-background border border-border rounded-full text-xs text-foreground hover:bg-primary/10 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-muted/10">
              {chatMessages.map((message, index) => (
                <div key={index} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] ${message.isBot ? 'order-2' : 'order-1'}`}>
                    <div className="flex items-start space-x-2">
                      {message.isBot && (
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot className="w-4 h-4 text-primary-foreground" />
                        </div>
                      )}
                      <div
                        className={`px-4 py-3 rounded-xl ${
                          message.isBot
                            ? 'bg-background text-foreground border border-border'
                            : 'bg-primary text-primary-foreground'
                        }`}
                      >
                        <div className="whitespace-pre-line text-sm leading-relaxed">
                          {message.text}
                        </div>
                        {message.isBot && renderLinks(message.links || [])}
                        <div className={`text-xs mt-2 ${message.isBot ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
                          {message.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                      {!message.isBot && (
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <User className="w-4 h-4 text-foreground" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="bg-background px-4 py-3 rounded-xl border border-border">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-background border-t border-border">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about Christinah..."
                  className="flex-1 px-4 py-2 border border-input rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-sm"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!chatInput.trim() || isTyping}
                  size="sm"
                  className="rounded-full px-4 bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <Button
        onClick={() => setChatOpen(!chatOpen)}
        className="w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300"
      >
        {chatOpen ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <div className="relative h-6 w-6">
            <Image 
              src="/images/cmm-chatbot-logo.png" 
              alt="Chatbot" 
              layout="fill"
              objectFit="contain"
              className="filter brightness-0 invert"
            />
          </div>
        )}
      </Button>
    </div>
  );
};