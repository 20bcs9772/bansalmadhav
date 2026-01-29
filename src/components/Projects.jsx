import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Assist-AI',
      subtitle: 'AI-Powered Multi-Agent Support System',
      description: 'Built a full-stack multi-agent AI support system with intelligent routing, real-time streaming, and scalable architecture.',
      longDescription: 'Assist-AI is a sophisticated multi-agent AI support system that leverages cutting-edge technologies to provide intelligent, context-aware assistance. The system features real-time streaming responses, intelligent query routing between multiple AI agents, and a scalable PostgreSQL database architecture with Prisma ORM. Built with modern web technologies, it provides a seamless user experience with server-sent events for real-time communication.',
      tech: ['Hono', 'Vercel AI SDK', 'SSE', 'PostgreSQL', 'Prisma', 'TypeScript'],
      image: '/placeholder-project-1.jpg',
      liveLink: 'https://assist-ai-chat.vercel.app',
      githubLink: 'https://github.com/20bcs9772/assist-ai',
      color: 'purple'
    },
    {
      title: 'Hap',
      subtitle: 'Real-Time Event Management Platform',
      description: 'Developed a comprehensive event management platform with React Native app and Node.js backend featuring live schedules and push notifications.',
      longDescription: 'Hap is a powerful real-time event management platform designed to streamline event organization and attendee engagement. The platform includes a mobile app built with React Native and a robust Node.js backend. Key features include real-time schedule updates, role-based access control for different user types, integrated maps for venue navigation, and push notifications to keep attendees informed. The system handles concurrent users efficiently and provides a smooth experience across different devices.',
      tech: ['React Native', 'Node.js', 'Firebase', 'Google Maps API', 'FCM', 'Express.js'],
      image: '/placeholder-project-2.jpg',
      liveLink: null,
      githubLink: 'https://github.com/20bcs9772/eventflow',
      color: 'blue'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => {
            const colorClasses = {
              purple: 'border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]',
              blue: 'border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]',
              green: 'border-green-500/30 hover:border-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]'
            };

            const gradientClasses = {
              purple: 'from-purple-500/10 to-transparent',
              blue: 'from-blue-500/10 to-transparent',
              green: 'from-green-500/10 to-transparent'
            };

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border ${colorClasses[project.color]} transition-all hover:scale-105 cursor-pointer h-full flex flex-col`}
                  whileHover={{ rotateY: 3, rotateX: 3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image Placeholder */}
                  <div className={`relative h-64 bg-gradient-to-br ${gradientClasses[project.color]} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50" />
                    <div className="relative z-10 text-6xl font-bold text-white/10">{project.title}</div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                      Click to view details
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 font-semibold">{project.subtitle}</p>
                    <p className="text-gray-300 mb-6 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300 border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-400 border border-gray-700">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-4">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 rounded-lg text-purple-400 transition-all hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg text-gray-300 transition-all hover:scale-105"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-gray-900 border-purple-500/30 text-white">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400 text-lg">
                  {selectedProject.subtitle}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/10">{selectedProject.title}</div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <h4 className="text-lg font-semibold mb-3 text-white">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 rounded-lg text-sm text-purple-300 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg text-white transition-all hover:scale-105 font-medium"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-white transition-all hover:scale-105 font-medium"
                    >
                      <Github className="w-5 h-5" />
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;