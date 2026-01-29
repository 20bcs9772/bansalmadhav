import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Code, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '2+', color: 'purple' },
    { icon: Code, label: 'Projects Completed', value: '10+', color: 'blue' },
    { icon: Award, label: 'Technologies', value: '15+', color: 'green' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-transparent opacity-50" />
      
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

        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate Full-Stack Engineer with 2+ years of experience building and shipping 
              production-grade web and mobile applications. I specialize in creating scalable, performant 
              solutions using modern technologies like React, React Native, Node.js, and AWS.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I thrive on owning features end-to-end—from system design and implementation to cloud 
              deployment and production support. My experience spans blockchain-enabled applications, 
              real-time systems, payment gateway integrations, and building modular SDKs.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              purple: 'from-purple-500 to-purple-600 border-purple-500/30 hover:border-purple-400',
              blue: 'from-blue-500 to-blue-600 border-blue-500/30 hover:border-blue-400',
              green: 'from-green-500 to-green-600 border-green-500/30 hover:border-green-400'
            };

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border ${colorClasses[stat.color]} transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-105`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${colorClasses[stat.color].split(' ')[0]} mb-4 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;