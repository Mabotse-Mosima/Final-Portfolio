"use client"

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Send, X, MessageCircle } from "lucide-react";
import Image from "next/image";

type ChatMessage = {
  text: string;
  isBot: boolean;
};

// Christinah's Information Database
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
      qualification: "Advance Diploma in Information Communication and Technology Application Development",
      period: "in Progress",
    }
  ],
  skills: ["Java", "JavaScript/TypeScript", "Python", "React & Node.js", ".Net", "UI/UX", "Machine Learning", "Deep Learning", "Natural Language Processing"],
  tools: ["Python", "HTML", "JavaScript", "Angular", "React", "Node.js", "Figma", "Bootstrap", "GitHub/Git", "SQL/NoSQL", "PHP", "TensorFlow", "PyTorch", "Scikit-learn"],
  projects: [
    {
      name: "Florist Web Application",
      description: "Built with Angular & Spring Boot, this app lets users order flowers online while admins manage products and orders through a secure dashboard.",
      technologies: ["TypeScript", "Bootstrap", "Java Spring Boot", "Postman", "MySQL"],
      link: "florist-enterprise.netlify.app",
      github: "https://github.com/Mabotse-Mosima/Florist-Web-Application-Client-Side"
    },
    {
      name: "UX/UI Design",
      description: "Designed clean, modern, and user-friendly interfaces for the florist web app using Figma. Focused on intuitive user flows, responsive layouts, and consistent branding.",
      technologies: ["Figma", "Wire Frame", "UI/UX Design"],
      link: "https://www.figma.com/design/NoUzkrZyA0bV4hUCiimFfW/MY-PROJECT?node-id=151-1530&t=o726sTO8DmxnYSGI-1"
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
      link: "luxury-alfajores-5e5439.netlify.app",
      github: "https://github.com/Mabotse-Mosima/Brilliance-Tutoring-App"
    },
    {
      name: "CAPACITI Chatbot",
      description: "Built using Dialogflow and web technologies, the CAPACITI chatbot helps users access program info, check eligibility, and get support anytime, anywhere.",
      technologies: ["Landbot", "Dialogflow", "Google Sheets"],
      link: "https://landbot.online/v3/H-2887443-EXZMG8X4EBYYN2IT/index.html"
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

export const ChristinahChatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      text: "Hi! I'm here to help you learn more about Christinah Mmabotse Mosima. Feel free to ask me about her background, skills, experience, or projects!",
      isBot: true,
    },
  ]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Chatbot Response System
const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();

    // Address/Location responses
    if (lowerMessage.includes("location") || lowerMessage.includes("address")) {
      return `Christinah is based in:\n
📍 ${christinahInfo.contact.location}\n
Contact:\n
📧 ${christinahInfo.contact.email}
📱 ${christinahInfo.contact.phone}`;
    }
    // Greeting responses
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      const greetings = [
        `Hi! I'm here to tell you about ${christinahInfo.name}. What would you like to know?`,
        `Hello! I can share information about Christinah's background, skills, and experience. How can I help?`,
        `Welcome! I'm here to help you learn more about ${christinahInfo.name}. What interests you?`,
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // About responses
    if (lowerMessage.includes("about") || lowerMessage.includes("who is") || lowerMessage.includes("tell me about")) {
      const aboutResponses = [
        `${christinahInfo.name} is a ${christinahInfo.title.toLowerCase()}. ${christinahInfo.description}`,
        `Christinah is an experienced software engineer with ${christinahInfo.experience.toLowerCase()}. She's passionate about AI and currently building expertise in machine learning and deep learning.`,
      ];
      return aboutResponses[Math.floor(Math.random() * aboutResponses.length)];
    }

    // Skills responses
    if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("tech stack")) {
      return `Christinah's technical skills include: ${christinahInfo.skills.join(", ")}. She's particularly focused on AI and machine learning technologies.`;
    }

    // Tools responses
    if (lowerMessage.includes("tools") || lowerMessage.includes("software")) {
      return `She works with various tools and technologies including: ${christinahInfo.tools.join(", ")}.`;
    }

    // Experience responses
    if (lowerMessage.includes("experience") || lowerMessage.includes("work") || lowerMessage.includes("career")) {
      return `Christinah has ${christinahInfo.experience.toLowerCase()} building web and mobile applications. She's built a strong technical foundation and is now leveraging it to explore AI.`;
    }

    // Education responses
    if (lowerMessage.includes("education") || lowerMessage.includes("study") || lowerMessage.includes("university") || lowerMessage.includes("qualification")) {
      let educationText = "Christinah's educational background:\n\n";
      christinahInfo.education.forEach(edu => {
        educationText += `• ${edu.qualification} from ${edu.institution} (${edu.period})\n`;
      });
      return educationText;
    }

    // Projects responses
    if (lowerMessage.includes("project") || lowerMessage.includes("portfolio") || lowerMessage.includes("work samples")) {
      if (lowerMessage.includes("florist")) {
        const project = christinahInfo.projects.find(p => p.name.toLowerCase().includes("florist"));
        return `${project?.name}: ${project?.description}\n\nTechnologies: ${project?.technologies.join(", ")}\n\n🌐 Live Demo: ${project?.link}\n📁 GitHub: ${project?.github}`;
      }
      if (lowerMessage.includes("ui") || lowerMessage.includes("ux") || lowerMessage.includes("design")) {
        const project = christinahInfo.projects.find(p => p.name.toLowerCase().includes("ux"));
        return `${project?.name}: ${project?.description}\n\nTechnologies: ${project?.technologies.join(", ")}\n\n🌐 View Design: ${project?.link}`;
      }
      if (lowerMessage.includes("chirper") || lowerMessage.includes("blog")) {
        const project = christinahInfo.projects.find(p => p.name.toLowerCase().includes("chirper"));
        return `${project?.name}: ${project?.description}\n\nTechnologies: ${project?.technologies.join(", ")}\n\n📁 GitHub: ${project?.github}`;
      }
      if (lowerMessage.includes("tutoring") || lowerMessage.includes("brilliance")) {
        const project = christinahInfo.projects.find(p => p.name.toLowerCase().includes("brilliance"));
        return `${project?.name}: ${project?.description}\n\nTechnologies: ${project?.technologies.join(", ")}\n\n🌐 Live Demo: ${project?.link}\n📁 GitHub: ${project?.github}`;
      }
      if (lowerMessage.includes("chatbot") || lowerMessage.includes("capaciti")) {
        const project = christinahInfo.projects.find(p => p.name.toLowerCase().includes("capaciti"));
        return `${project?.name}: ${project?.description}\n\nTechnologies: ${project?.technologies.join(", ")}\n\n🌐 Try it: ${project?.link}`;
      }
      if (lowerMessage.includes("job") || lowerMessage.includes("swiper")) {
        const project = christinahInfo.projects.find(p => p.name.toLowerCase().includes("job"));
        return `${project?.name}: ${project?.description}\n\nTechnologies: ${project?.technologies.join(", ")}\n\n🌐 Live Demo: ${project?.link}\n📁 GitHub: ${project?.github}`;
      }
      
      return `Christinah has worked on several impressive projects:\n\n1. Florist Web Application - Angular & Spring Boot e-commerce platform\n2. UX/UI Design - Modern interface designs using Figma\n3. Chirper - Micro-blogging platform with Laravel\n4. Brilliance Tutoring App - Educational platform interface\n5. CAPACITI Chatbot - AI-powered support bot\n6. JobSwipers - Tinder-style job matching platform\n\nAsk about any specific project for more details!`;
    }

    // Contact responses
    if (lowerMessage.includes("contact") || lowerMessage.includes("hire") || lowerMessage.includes("opportunity") || lowerMessage.includes("available")) {
      return `Christinah is currently ${christinahInfo.status.toLowerCase()}! You can reach out to her:\n\n📧 Email: ${christinahInfo.contact.email}\n📱 Phone: ${christinahInfo.contact.phone}\n📍 Location: ${christinahInfo.contact.location}\n\n💼 LinkedIn: ${christinahInfo.contact.linkedin}\n🐙 GitHub: ${christinahInfo.contact.github}`;
    }

    // Social media responses
    if (lowerMessage.includes("social") || lowerMessage.includes("media")) {
      return `Connect with Christinah:\n
      LinkedIn: ${christinahInfo.contact.linkedin}
      GitHub: ${christinahInfo.contact.github}
      Twitter: ${christinahInfo.contact.twitter}
      Medium: ${christinahInfo.contact.medium}`;
          }

    // Default responses
    const defaultResponses = [
      `I can tell you about Christinah's background, skills, experience, education, or projects. What would you like to know?`,
      `Feel free to ask me about her technical skills, work experience, education, or current projects!`,
      `I'm here to help you learn more about Christinah. You can ask about her background, skills, or experience.`,
    ];
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    // Add user message
    const newUserMessage: ChatMessage = {
      text: chatInput,
      isBot: false
    };
    setChatMessages(prev => [...prev, newUserMessage]);
    setChatInput('');

    // Show typing indicator
    const typingIndicator: ChatMessage = {
      text: '...',
      isBot: true
    };
    setChatMessages(prev => [...prev, typingIndicator]);

    // Simulate response delay
    setTimeout(() => {
      // Remove typing indicator
      setChatMessages(prev => prev.filter(msg => msg.text !== '...'));
      
      // Add bot response
      const response = getResponse(chatInput);
      const botMessage: ChatMessage = {
        text: response,
        isBot: true
      };
      setChatMessages(prev => [...prev, botMessage]);
    }, 1000 + Math.random() * 1000);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 h-[28rem] bg-background border rounded-lg shadow-lg flex flex-col"
          >
            <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/images/cmm-chatbot-logo.png" 
                  alt="CMM ChatBot" 
                  width={24} 
                  height={24}
                  className="filter brightness-0 invert"
                />
                <span className="font-medium">CMM ChatBot</span>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setChatOpen(false)}
                className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {chatMessages.map((message, index) => (
                <div key={index} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm flex items-start gap-2 ${
                      message.isBot ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {message.isBot && (
                      <Image 
                        src="/images/cmm-chatbot-logo.png" 
                        alt="Bot" 
                        width={20} 
                        height={20}
                        className="flex-shrink-0 mt-0.5 filter brightness-0 invert"
                      />
                    )}
                    <div className="whitespace-pre-line">
                      {message.text === '...' ? (
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 rounded-full bg-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 rounded-full bg-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      ) : (
                        message.text.split('\n').map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleChatSubmit} className="p-4 border-t flex space-x-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about Christinah..."
                className="flex-1 px-3 py-2 border border-input rounded-md bg-background text-sm"
              />
              <Button type="submit" size="icon" disabled={!chatInput.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <Button 
        size="icon" 
        onClick={() => setChatOpen(!chatOpen)} 
        className="h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90"
      >
        {chatOpen ? (
          <X className="h-5 w-5 text-primary-foreground" />
        ) : (
          <Image 
            src="/images/cmm-chatbot-logo.png" 
            alt="Chatbot" 
            width={24} 
            height={24}
            className="filter brightness-0 invert"
          />
        )}
      </Button>
    </div>
  );
};