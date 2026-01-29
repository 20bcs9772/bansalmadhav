import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Database, Cloud, Terminal, Boxes, Layers } from 'lucide-react';

const SkillsNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCode, setActiveCode] = useState(0);

  const codeSnippets = [
    { lang: 'JavaScript', code: 'const app = () => {\n  return <div>Hello</div>;\n};', color: 'from-yellow-400 to-yellow-600' },
    { lang: 'Python', code: 'def hello_world():\n    print("Hello, World!")\n    return True', color: 'from-blue-400 to-blue-600' },
    { lang: 'TypeScript', code: 'interface User {\n  name: string;\n  id: number;\n}', color: 'from-blue-500 to-cyan-500' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCode((prev) => (prev + 1) % codeSnippets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    {
      category: 'Frontend Mastery',
      icon: Code2,
      skills: ['React', 'Next.js', 'React Native', 'TypeScript'],
      level: 95,
      projects: 15,
      color: 'purple'
    },
    {
      category: 'Backend Engineering',
      icon: Terminal,
      skills: ['Node.js', 'Express', 'Hono', 'FastAPI'],
      level: 90,
      projects: 12,
      color: 'blue'
    },
    {
      category: 'Database Systems',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Prisma', 'Firestore'],
      level: 88,
      projects: 10,
      color: 'green'
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Docker', 'CI/CD', 'Vercel'],
      level: 85,
      projects: 8,
      color: 'cyan'
    },
    {
      category: 'Architecture',
      icon: Boxes,
      skills: ['REST APIs', 'WebSockets', 'Microservices'],
      level: 92,
      projects: 14,
      color: 'pink'
    },
    {
      category: 'Tools & Integration',
      icon: Layers,
      skills: ['Git', 'Payment Gateways', 'AI SDKs'],
      level: 87,
      projects: 11,
      color: 'orange'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
              Technical Arsenal
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">Mastering the tools that power modern web development</p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Large Code Editor Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Live Code Editor</h3>
              </div>
              
              {/* Tabs */}
              <div className="flex gap-2 mb-4">
                {codeSnippets.map((snippet, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCode(idx)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeCode === idx
                        ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50'
                        : 'bg-gray-800/50 text-gray-400 hover:text-white'
                    }`}
                  >
                    {snippet.lang}
                  </button>
                ))}
              </div>

              {/* Code Display */}
              <div className="bg-black/50 rounded-xl p-6 font-mono text-sm border border-gray-700">
                <motion.pre
                  key={activeCode}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${codeSnippets[activeCode].color}`}
                >
                  {codeSnippets[activeCode].code}
                </motion.pre>
              </div>

              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">2+ Years</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">15+ Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-500/60 transition-all group relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/30 to-transparent" />
            
            <div className="relative z-10">
              <Terminal className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">10,000+</h3>
              <p className="text-gray-400 mb-6">Lines of Code Written</p>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Production Code</span>
                    <span className="text-blue-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '95%' } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skill Categories Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const colorClasses = {
              purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-400',
              blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-400',
              green: 'from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-400',
              cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 hover:border-cyan-400',
              pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/30 hover:border-pink-400',
              orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30 hover:border-orange-400'
            };

            const iconColors = {
              purple: 'text-purple-400',
              blue: 'text-blue-400',
              green: 'text-green-400',
              cyan: 'text-cyan-400',
              pink: 'text-pink-400',
              orange: 'text-orange-400'
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`group bg-gradient-to-br ${colorClasses[skill.color]} backdrop-blur-sm rounded-xl p-6 border transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]`}
                whileHover={{ rotateY: 5, rotateX: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`w-8 h-8 ${iconColors[skill.color]} group-hover:scale-110 transition-transform`} />
                  <span className="text-2xl font-bold text-white">{skill.level}%</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{skill.category}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.skills.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-black/30 rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{skill.projects} projects</span>
                  <div className="w-24 bg-gray-700 rounded-full h-1.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.2 * index }}
                      className={`bg-gradient-to-r ${colorClasses[skill.color].split(' ')[0].replace('/20', '')} h-1.5 rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsNew;