import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Database, Cloud, Smartphone, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3'],
      color: 'purple',
      size: 'large'
    },
    {
      icon: Smartphone,
      title: 'Frontend & Mobile',
      skills: ['React', 'Next.js', 'React Native'],
      color: 'blue',
      size: 'medium'
    },
    {
      icon: Server,
      title: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'Hono', 'REST APIs', 'WebSockets', 'FastAPI'],
      color: 'green',
      size: 'large'
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firestore', 'Prisma'],
      color: 'purple',
      size: 'medium'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Vercel', 'Git', 'CI/CD', 'Nginx', 'Docker'],
      color: 'blue',
      size: 'large'
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['Payload CMS', 'Payment Gateways', 'Google Maps API', 'FCM', 'Vercel AI SDK'],
      color: 'green',
      size: 'medium'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-20 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
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
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group bg-gradient-to-br ${colorClasses[category.color]} backdrop-blur-sm rounded-xl p-6 border transition-all hover:scale-105 ${
                  category.size === 'large' ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gray-900/50 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${iconColors[category.color]}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-900/50 rounded-full text-sm text-gray-300 border border-gray-700 hover:border-gray-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;