import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Rocket, Users, Award, Briefcase, Heart } from 'lucide-react';

const TooltipCard = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ 
      x: rect.left + rect.width / 2, 
      y: rect.top - 10 
    });
    setIsVisible(true);
  };

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-gradient-to-r from-gray-900 via-purple-900/50 to-gray-900 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 text-sm text-white shadow-2xl"
          >
            {content}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-gray-900 border-r border-b border-white/10" />
          </motion.div>
        </div>
      )}
    </div>
  );
};

const AboutNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Code,
      label: 'Clean Code',
      value: '10K+ Lines',
      tooltip: 'Writing maintainable, scalable code is my passion',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      label: 'Fast Delivery',
      value: '2-3 Weeks',
      tooltip: 'Quick turnaround without compromising quality',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      label: 'Team Player',
      value: '5+ Teams',
      tooltip: 'Collaborated with designers, PMs, and developers',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      label: 'Production Apps',
      value: '15+ Projects',
      tooltip: 'Live applications serving thousands of users',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Briefcase,
      label: 'Experience',
      value: '2+ Years',
      tooltip: 'Full-stack development across multiple domains',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Heart,
      label: 'Passion',
      value: '100%',
      tooltip: 'Love what I do, and it shows in my work',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0f0f0f] relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main description card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/20 hover:border-purple-500/40 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
                  I'm a <span className="text-purple-400 font-semibold">Full-Stack Engineer</span> with <span className="text-blue-400 font-semibold">2+ years</span> of hands-on experience 
                  building and shipping production-grade web and mobile applications. I specialize in creating <span className="text-green-400 font-semibold">scalable, performant solutions</span> using 
                  modern technologies like React, React Native, Node.js, and AWS.
                </p>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  I thrive on owning features end-to-end—from <span className="text-purple-400 font-semibold">system design</span> and implementation to <span className="text-blue-400 font-semibold">cloud deployment</span> and 
                  production support. My experience spans blockchain-enabled applications, real-time systems, payment gateway integrations, and building modular SDKs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlight cards with tooltips */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <TooltipCard key={index} content={item.tooltip}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`group bg-gradient-to-br ${item.color} p-6 rounded-2xl text-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="relative z-10">
                      <Icon className="w-8 h-8 text-white mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-bold text-white mb-1">{item.value}</h3>
                      <p className="text-white/80 text-xs font-medium">{item.label}</p>
                    </div>
                  </motion.div>
                </TooltipCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutNew;