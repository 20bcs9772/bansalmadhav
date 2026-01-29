import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import { FloatingDock } from "@/components/ui/floating-dock";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    {
      title: "Mail",
      icon: (
        <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:bansalmadhav787@gmail.com",
    },
    {
      title: "Github",
      icon: (
        <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/20bcs9772",
    },
    {
      title: "Linkedin",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/madhav-bansal-b81349200/",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <ParticleBackground />

      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              Madhav Bansal
            </span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-white">{text}</span>
            <span className="animate-pulse text-green-400 ml-1">|</span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Building production-grade web & mobile apps with 2+ years of
            experience. Specializing in React, React Native, Node.js, and AWS.
          </motion.p>

          <motion.div className="hidden md:flex gap-6 justify-center mb-16">
            <FloatingDock items={links} />
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center mb-16 md:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="https://github.com/20bcs9772"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gray-900/50 rounded-full border border-purple-500/30 hover:border-purple-400 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/madhav-bansal-b81349200/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gray-900/50 rounded-full border border-blue-500/30 hover:border-blue-400 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:bansalmadhav787@gmail.com"
              className="group relative p-4 bg-gray-900/50 rounded-full border border-green-500/30 hover:border-green-400 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </motion.button>
    </section>
  );
};

export default Hero;
