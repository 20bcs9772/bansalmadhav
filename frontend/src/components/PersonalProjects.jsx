import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Code, Sparkles } from 'lucide-react';

const PersonalProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'AI Chat Assistant',
      description: 'Real-time AI chat with streaming responses',
      tech: ['React', 'WebSockets', 'OpenAI'],
      github: 'https://github.com/20bcs9772',
      size: 'large', // spans 2 columns
      visual: 'gradient',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Task Manager Pro',
      description: 'Kanban board with drag & drop',
      tech: ['Next.js', 'Prisma'],
      github: 'https://github.com/20bcs9772',
      size: 'medium',
      visual: 'code',
      code: 'const task = {\n  title: "Build",\n  status: "Done"\n}'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather data',
      tech: ['React', 'API'],
      github: 'https://github.com/20bcs9772',
      size: 'small',
      visual: 'icon'
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Analytics and sales tracking',
      tech: ['React', 'Charts.js', 'MongoDB'],
      github: 'https://github.com/20bcs9772',
      size: 'medium',
      visual: 'stats'
    },
    {
      title: 'Notes App',
      description: 'Quick note taking',
      tech: ['React Native'],
      github: 'https://github.com/20bcs9772',
      size: 'small',
      visual: 'icon'
    },
    {
      title: 'Blog Platform',
      description: 'Markdown editor with live preview',
      tech: ['Next.js', 'MDX', 'Tailwind'],
      github: 'https://github.com/20bcs9772',
      size: 'large',
      visual: 'gradient',
      gradient: 'from-blue-500 to-cyan-500'
    },
  ];

  return (
    <section id="personal-projects" className="py-20 bg-[#0f0f0f] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Personal Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">Side projects and experiments that fuel my creativity</p>
        </motion.div>

        {/* Bento Grid with different sizes */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {projects.map((project, index) => {
            const sizeClasses = {
              large: 'col-span-2 row-span-2',
              medium: 'col-span-2 md:col-span-1 row-span-2',
              small: 'col-span-1 row-span-1'
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all overflow-hidden ${sizeClasses[project.size]}`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Visual Elements */}
                {project.visual === 'gradient' && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                )}
                
                {project.visual === 'code' && project.size === 'medium' && (
                  <div className="absolute top-4 right-4 bg-black/50 rounded-lg p-3 font-mono text-xs text-green-400 opacity-30 group-hover:opacity-60 transition-opacity">
                    {project.code}
                  </div>
                )}

                {project.visual === 'stats' && project.size === 'medium' && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30 group-hover:opacity-50 transition-opacity">
                    <div className="flex items-end justify-around h-full px-4 pb-4">
                      <div className="w-8 bg-blue-500 rounded-t" style={{ height: '60%' }} />
                      <div className="w-8 bg-purple-500 rounded-t" style={{ height: '80%' }} />
                      <div className="w-8 bg-pink-500 rounded-t" style={{ height: '50%' }} />
                      <div className="w-8 bg-green-500 rounded-t" style={{ height: '90%' }} />
                    </div>
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      {project.visual === 'icon' ? <Sparkles className="w-5 h-5 text-purple-400" /> : <Code className="w-5 h-5 text-purple-400" />}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4 text-gray-400" />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, project.size === 'small' ? 1 : 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
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

export default PersonalProjects;