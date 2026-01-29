import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Briefcase, TrendingUp } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const ProfessionalProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Assist-AI',
      company: 'Personal Project (Production)',
      description: 'Full-stack multi-agent AI support system with intelligent routing and real-time streaming.',
      longDescription: 'Assist-AI is a sophisticated multi-agent AI support system that leverages cutting-edge technologies to provide intelligent, context-aware assistance. The system features real-time streaming responses, intelligent query routing between multiple AI agents, and a scalable PostgreSQL database architecture with Prisma ORM.',
      tech: ['Hono', 'Vercel AI SDK', 'PostgreSQL', 'Prisma', 'TypeScript'],
      metrics: { users: '1000+', uptime: '99.9%' },
      liveLink: 'https://assist-ai-chat.vercel.app',
      githubLink: 'https://github.com/20bcs9772/assist-ai',
      impact: 'Reduced support response time by 80%'
    },
    {
      title: 'Hap',
      company: 'Personal Project (Production)',
      description: 'Comprehensive event management platform with React Native app and Node.js backend.',
      longDescription: 'Hap is a powerful real-time event management platform designed to streamline event organization and attendee engagement. Key features include real-time schedule updates, role-based access control, integrated maps for venue navigation, and push notifications.',
      tech: ['React Native', 'Node.js', 'Firebase', 'Google Maps API'],
      metrics: { events: '50+', attendees: '5000+' },
      liveLink: null,
      githubLink: 'https://github.com/20bcs9772/eventflow',
      impact: 'Managed 50+ events with 5000+ attendees'
    },
    {
      title: 'E-commerce Platform',
      company: 'Oceaniek Technologies',
      description: 'Complete e-commerce platform with payment integration and AWS deployment.',
      longDescription: 'Developed a production-ready e-commerce platform from scratch, featuring secure payment gateway integration, real-time inventory management, and advanced product filtering. Implemented AWS S3 for image storage, Route 53 for DNS management, and EC2 for scalable hosting.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
      metrics: { transactions: '10K+', uptime: '99.9%' },
      liveLink: null,
      githubLink: null,
      impact: 'Processed $500K+ in transactions'
    },
  ];

  return (
    <section id="professional-projects" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Work
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">Production applications deployed at scale</p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ y: -3 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-purple-500/50 transition-all cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="w-8 h-8 text-purple-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400">{project.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 md:text-right">Click for details</span>
                  </div>

                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-lg">
                        <span className="text-sm font-bold text-white">{value}</span>
                        <span className="text-xs text-gray-400 capitalize">{key}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="flex items-center gap-2 text-sm text-green-400 mb-4">
                    <TrendingUp className="w-4 h-4" />
                    <span>{project.impact}</span>
                  </div>

                  {/* Tech & Links */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-400">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 text-xs text-gray-500">+{project.tech.length - 4}</span>
                      )}
                    </div>

                    <div className="flex gap-2 ml-auto">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-purple-400" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-gray-800/50 hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          <Github className="w-4 h-4 text-gray-400" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Simplified Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-gray-900 border-purple-500/30 text-white">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </DialogTitle>
                <p className="text-gray-400 text-sm mt-1">{selectedProject.company}</p>
              </DialogHeader>
              
              <div className="mt-4 space-y-4">
                <p className="text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>

                <div className="flex gap-4 p-4 bg-gray-800/50 rounded-lg">
                  {Object.entries(selectedProject.metrics).map(([key, value], i) => (
                    <div key={i}>
                      <div className="text-xl font-bold text-white">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-green-400">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">{selectedProject.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-lg text-sm text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
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

export default ProfessionalProjects;
