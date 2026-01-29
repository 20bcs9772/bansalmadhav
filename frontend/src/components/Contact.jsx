import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bansalmadhav787@gmail.com',
      link: 'mailto:bansalmadhav787@gmail.com',
      color: 'green'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'madhav-bansal',
      link: 'https://linkedin.com/in/madhav-bansal',
      color: 'blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '20bcs9772',
      link: 'https://github.com/20bcs9772',
      color: 'purple'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      value: 'bansalmadhav.vercel.app',
      link: 'https://bansalmadhav.vercel.app',
      color: 'green'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#0f0f0f] relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 50 }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: mousePosition.x - 100,
            y: mousePosition.y + 100,
          }}
          transition={{ type: 'spring', damping: 40, stiffness: 50 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              const colorClasses = {
                purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]',
                blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]',
                green: 'from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]'
              };

              const iconColors = {
                purple: 'text-purple-400',
                blue: 'text-blue-400',
                green: 'text-green-400'
              };

              return (
                <motion.a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-gradient-to-br ${colorClasses[contact.color]} backdrop-blur-sm rounded-xl p-6 border transition-all hover:scale-105 block`}
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gray-900/50 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${iconColors[contact.color]}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{contact.label}</h3>
                      <p className="text-gray-400 text-sm break-all">{contact.value}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="mailto:bansalmadhav787@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
            >
              <Send className="w-5 h-5" />
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;