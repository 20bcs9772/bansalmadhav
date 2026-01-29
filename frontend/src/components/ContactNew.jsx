import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink, Send, MapPin, Calendar, MessageSquare } from 'lucide-react';

const ContactNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState(null);

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bansalmadhav787@gmail.com',
      link: 'mailto:bansalmadhav787@gmail.com',
      color: 'from-green-500 to-emerald-600',
      description: 'Best way to reach me'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'madhav-bansal',
      link: 'https://linkedin.com/in/madhav-bansal',
      color: 'from-blue-500 to-blue-600',
      description: 'Let\'s connect professionally'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '20bcs9772',
      link: 'https://github.com/20bcs9772',
      color: 'from-purple-500 to-purple-600',
      description: 'Check out my code'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      value: 'bansalmadhav.vercel.app',
      link: 'https://bansalmadhav.vercel.app',
      color: 'from-pink-500 to-rose-600',
      description: 'View my work'
    }
  ];

  const availability = [
    { icon: MapPin, text: 'Based in India', color: 'text-green-400' },
    { icon: Calendar, text: 'Available for work', color: 'text-blue-400' },
    { icon: MessageSquare, text: 'Response within 24h', color: 'text-purple-400' }
  ];

  return (
    <section id="contact" className="py-20 bg-[#0f0f0f] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
              Let's Work Together
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Got a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-green-500/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/30 hover:border-purple-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-500/5 via-transparent to-green-500/5 group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start a Project?
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  I'm currently available for freelance work and full-time opportunities.
                </p>
                
                {/* Availability badges */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {availability.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/10"
                      >
                        <Icon className={`w-4 h-4 ${item.color}`} />
                        <span className="text-sm text-gray-300">{item.text}</span>
                      </motion.div>
                    );
                  })}
                </div>

                <a
                  href="mailto:bansalmadhav787@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send me an email
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact cards grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + 0.1 * index }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className={`block group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-transparent transition-all relative overflow-hidden`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${contact.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <motion.div
                        animate={{ rotate: hoveredCard === index ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                      </motion.div>
                    </div>
                    
                    <h3 className="text-white font-bold text-lg mb-1">{contact.label}</h3>
                    <p className="text-gray-400 text-sm mb-2">{contact.description}</p>
                    <p className="text-gray-300 font-medium text-sm break-all">{contact.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactNew;