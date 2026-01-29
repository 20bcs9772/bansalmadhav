import React, { useRef, useState } from 'react';\nimport { motion, useInView } from 'framer-motion';\nimport { ExternalLink, Github, Briefcase, TrendingUp } from 'lucide-react';\nimport { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';\n\nconst ProfessionalProjects = () => {\n  const ref = useRef(null);\n  const isInView = useInView(ref, { once: true, margin: '-100px' });\n  const [selectedProject, setSelectedProject] = useState(null);\n\n  const projects = [\n    {\n      title: 'Assist-AI',\n      company: 'Personal Project (Production)',\n      description: 'Full-stack multi-agent AI support system with intelligent routing and real-time streaming.',\n      longDescription: 'Assist-AI is a sophisticated multi-agent AI support system that leverages cutting-edge technologies to provide intelligent, context-aware assistance. The system features real-time streaming responses, intelligent query routing between multiple AI agents, and a scalable PostgreSQL database architecture with Prisma ORM.',\n      tech: ['Hono', 'Vercel AI SDK', 'PostgreSQL', 'Prisma', 'TypeScript'],\n      metrics: { users: '1000+', uptime: '99.9%' },\n      liveLink: 'https://assist-ai-chat.vercel.app',\n      githubLink: 'https://github.com/20bcs9772/assist-ai',\n      impact: 'Reduced support response time by 80%'\n    },\n    {\n      title: 'Hap',\n      company: 'Personal Project (Production)',\n      description: 'Comprehensive event management platform with React Native app and Node.js backend.',\n      longDescription: 'Hap is a powerful real-time event management platform designed to streamline event organization and attendee engagement. Key features include real-time schedule updates, role-based access control, integrated maps for venue navigation, and push notifications.',\n      tech: ['React Native', 'Node.js', 'Firebase', 'Google Maps API'],\n      metrics: { events: '50+', attendees: '5000+' },\n      liveLink: null,\n      githubLink: 'https://github.com/20bcs9772/eventflow',\n      impact: 'Managed 50+ events with 5000+ attendees'\n    },\n    {\n      title: 'E-commerce Platform',\n      company: 'Oceaniek Technologies',\n      description: 'Complete e-commerce platform with payment integration and AWS deployment.',\n      longDescription: 'Developed a production-ready e-commerce platform from scratch, featuring secure payment gateway integration, real-time inventory management, and advanced product filtering. Implemented AWS S3 for image storage, Route 53 for DNS management, and EC2 for scalable hosting.',\n      tech: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],\n      metrics: { transactions: '10K+', uptime: '99.9%' },\n      liveLink: null,\n      githubLink: null,\n      impact: 'Processed $500K+ in transactions'\n    },\n  ];\n\n  return (\n    <section id=\"professional-projects\" className=\"py-20 bg-[#0a0a0a] relative overflow-hidden\">\n      <div className=\"container mx-auto px-6 relative z-10\" ref={ref}>\n        <motion.div\n          initial={{ opacity: 0, y: 30 }}\n          animate={isInView ? { opacity: 1, y: 0 } : {}}\n          transition={{ duration: 0.6 }}\n          className=\"text-center mb-16\"\n        >\n          <h2 className=\"text-4xl md:text-5xl font-bold mb-4\">\n            <span className=\"bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent\">\n              Professional Work\n            </span>\n          </h2>\n          <div className=\"w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full\" />\n          <p className=\"text-gray-400 mt-4 text-lg\">Production applications deployed at scale</p>\n        </motion.div>\n\n        <div className=\"max-w-5xl mx-auto space-y-6\">\n          {projects.map((project, index) => (\n            <motion.div\n              key={index}\n              initial={{ opacity: 0, y: 30 }}\n              animate={isInView ? { opacity: 1, y: 0 } : {}}\n              transition={{ duration: 0.5, delay: 0.2 * index }}\n              whileHover={{ y: -3 }}\n              onClick={() => setSelectedProject(project)}\n              className=\"group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-purple-500/50 transition-all cursor-pointer\"\n            >\n              <div className=\"flex flex-col md:flex-row gap-6\">\n                {/* Icon */}\n                <div className=\"flex-shrink-0\">\n                  <div className=\"w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform\">\n                    <Briefcase className=\"w-8 h-8 text-purple-400\" />\n                  </div>\n                </div>\n\n                {/* Content */}\n                <div className=\"flex-1\">\n                  <div className=\"flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3\">\n                    <div>\n                      <h3 className=\"text-2xl font-bold text-white group-hover:text-purple-400 transition-colors\">\n                        {project.title}\n                      </h3>\n                      <p className=\"text-sm text-gray-400\">{project.company}</p>\n                    </div>\n                    <span className=\"text-sm text-gray-500 md:text-right\">Click for details</span>\n                  </div>\n\n                  <p className=\"text-gray-300 mb-4\">{project.description}</p>\n\n                  {/* Metrics */}\n                  <div className=\"flex flex-wrap gap-3 mb-4\">\n                    {Object.entries(project.metrics).map(([key, value], i) => (\n                      <div key={i} className=\"flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-lg\">\n                        <span className=\"text-sm font-bold text-white\">{value}</span>\n                        <span className=\"text-xs text-gray-400 capitalize\">{key}</span>\n                      </div>\n                    ))}\n                  </div>\n\n                  {/* Impact */}\n                  <div className=\"flex items-center gap-2 text-sm text-green-400 mb-4\">\n                    <TrendingUp className=\"w-4 h-4\" />\n                    <span>{project.impact}</span>\n                  </div>\n\n                  {/* Tech & Links */}\n                  <div className=\"flex flex-wrap items-center gap-3\">\n                    <div className=\"flex flex-wrap gap-2\">\n                      {project.tech.slice(0, 4).map((tech, i) => (\n                        <span key={i} className=\"px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-400\">\n                          {tech}\n                        </span>\n                      ))}\n                      {project.tech.length > 4 && (\n                        <span className=\"px-2 py-1 text-xs text-gray-500\">+{project.tech.length - 4}</span>\n                      )}\n                    </div>\n\n                    <div className=\"flex gap-2 ml-auto\">\n                      {project.liveLink && (\n                        <a\n                          href={project.liveLink}\n                          target=\"_blank\"\n                          rel=\"noopener noreferrer\"\n                          onClick={(e) => e.stopPropagation()}\n                          className=\"p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors\"\n                        >\n                          <ExternalLink className=\"w-4 h-4 text-purple-400\" />\n                        </a>\n                      )}\n                      {project.githubLink && (\n                        <a\n                          href={project.githubLink}\n                          target=\"_blank\"\n                          rel=\"noopener noreferrer\"\n                          onClick={(e) => e.stopPropagation()}\n                          className=\"p-2 bg-gray-800/50 hover:bg-gray-700 rounded-lg transition-colors\"\n                        >\n                          <Github className=\"w-4 h-4 text-gray-400\" />\n                        </a>\n                      )}\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </motion.div>\n          ))}\n        </div>\n      </div>\n\n      {/* Simplified Modal */}\n      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>\n        <DialogContent className=\"max-w-2xl bg-gray-900 border-purple-500/30 text-white\">\n          {selectedProject && (\n            <>\n              <DialogHeader>\n                <DialogTitle className=\"text-2xl font-bold text-white\">\n                  {selectedProject.title}\n                </DialogTitle>\n                <p className=\"text-gray-400 text-sm mt-1\">{selectedProject.company}</p>\n              </DialogHeader>\n              \n              <div className=\"mt-4 space-y-4\">\n                <p className=\"text-gray-300 leading-relaxed\">{selectedProject.longDescription}</p>\n\n                <div className=\"flex gap-4 p-4 bg-gray-800/50 rounded-lg\">\n                  {Object.entries(selectedProject.metrics).map(([key, value], i) => (\n                    <div key={i}>\n                      <div className=\"text-xl font-bold text-white\">{value}</div>\n                      <div className=\"text-xs text-gray-400 capitalize\">{key}</div>\n                    </div>\n                  ))}\n                </div>\n\n                <div className=\"flex items-center gap-2 text-green-400\">\n                  <TrendingUp className=\"w-5 h-5\" />\n                  <span className=\"font-semibold\">{selectedProject.impact}</span>\n                </div>\n\n                <div className=\"flex flex-wrap gap-2\">\n                  {selectedProject.tech.map((tech, i) => (\n                    <span key={i} className=\"px-3 py-1 bg-purple-500/20 rounded-lg text-sm text-purple-300\">\n                      {tech}\n                    </span>\n                  ))}\n                </div>\n\n                <div className=\"flex gap-3 pt-4\">\n                  {selectedProject.liveLink && (\n                    <a\n                      href={selectedProject.liveLink}\n                      target=\"_blank\"\n                      rel=\"noopener noreferrer\"\n                      className=\"flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-all\"\n                    >\n                      <ExternalLink className=\"w-4 h-4\" />\n                      Live Demo\n                    </a>\n                  )}\n                  {selectedProject.githubLink && (\n                    <a\n                      href={selectedProject.githubLink}\n                      target=\"_blank\"\n                      rel=\"noopener noreferrer\"\n                      className=\"flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-all\"\n                    >\n                      <Github className=\"w-4 h-4\" />\n                      Source Code\n                    </a>\n                  )}\n                </div>\n              </div>\n            </>\n          )}\n        </DialogContent>\n      </Dialog>\n    </section>\n  );\n};\n\nexport default ProfessionalProjects;
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Briefcase, Users, Zap } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const ProfessionalProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Assist-AI',
      company: 'Personal Project (Production)',
      subtitle: 'AI-Powered Multi-Agent Support System',
      description: 'Built a full-stack multi-agent AI support system with intelligent routing and real-time streaming.',
      longDescription: 'Assist-AI is a sophisticated multi-agent AI support system that leverages cutting-edge technologies to provide intelligent, context-aware assistance. The system features real-time streaming responses, intelligent query routing between multiple AI agents, and a scalable PostgreSQL database architecture with Prisma ORM. Built with modern web technologies, it provides a seamless user experience with server-sent events for real-time communication.',
      tech: ['Hono', 'Vercel AI SDK', 'SSE', 'PostgreSQL', 'Prisma', 'TypeScript'],
      metrics: {
        users: '1000+',
        uptime: '99.9%',
        responseTime: '< 200ms'
      },
      liveLink: 'https://assist-ai-chat.vercel.app',
      githubLink: 'https://github.com/20bcs9772/assist-ai',
      color: 'purple',
      impact: 'Reduced support response time by 80%'
    },
    {
      title: 'Hap',
      company: 'Personal Project (Production)',
      subtitle: 'Real-Time Event Management Platform',
      description: 'Developed a comprehensive event management platform with React Native app and Node.js backend.',
      longDescription: 'Hap is a powerful real-time event management platform designed to streamline event organization and attendee engagement. The platform includes a mobile app built with React Native and a robust Node.js backend. Key features include real-time schedule updates, role-based access control for different user types, integrated maps for venue navigation, and push notifications to keep attendees informed. The system handles concurrent users efficiently and provides a smooth experience across different devices.',
      tech: ['React Native', 'Node.js', 'Firebase', 'Google Maps API', 'FCM', 'Express.js'],
      metrics: {
        events: '50+',
        attendees: '5000+',
        rating: '4.8/5'
      },
      liveLink: null,
      githubLink: 'https://github.com/20bcs9772/eventflow',
      color: 'blue',
      impact: 'Managed 50+ events with 5000+ attendees'
    },
    {
      title: 'E-commerce Platform',
      company: 'Oceaniek Technologies',
      subtitle: 'Full-Stack E-commerce Solution',
      description: 'Built a complete e-commerce platform with payment integration and AWS deployment.',
      longDescription: 'Developed a production-ready e-commerce platform from scratch, featuring secure payment gateway integration, real-time inventory management, and advanced product filtering. Implemented AWS S3 for image storage, Route 53 for DNS management, and EC2 for scalable hosting. The platform handles thousands of transactions monthly with 99.9% uptime.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'Payment Gateway'],
      metrics: {
        transactions: '10000+',
        revenue: '$500K+',
        uptime: '99.9%'
      },
      liveLink: null,
      githubLink: null,
      color: 'green',
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className={index === 0 ? 'lg:col-span-2' : ''}
              >
                <motion.div
                  className={`group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border ${colorClasses[project.color]} transition-all hover:scale-[1.02] cursor-pointer h-full`}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Header with gradient */}
                  <div className={`relative h-48 bg-gradient-to-br ${gradientClasses[project.color]} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80" />
                    <div className="relative z-10 text-center p-6">
                      <Briefcase className="w-12 h-12 text-white/20 mx-auto mb-4" />
                      <div className="text-4xl font-bold text-white/10">{project.title}</div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                      {project.company}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400 font-semibold">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{project.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-black/30 rounded-lg">
                      {Object.entries(project.metrics).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold text-white">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Impact Badge */}
                    <div className="mb-4 flex items-center gap-2 text-sm">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold">{project.impact}</span>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300 border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 rounded-lg text-purple-400 transition-all hover:scale-105"
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
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg text-gray-300 transition-all hover:scale-105"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                      )}
                      {!project.liveLink && !project.githubLink && (
                        <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800/30 border border-gray-700/50 rounded-lg text-gray-500">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">Private / NDA</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
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
                <p className="text-gray-400 text-lg mt-2">{selectedProject.subtitle}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                  {selectedProject.company}
                </span>
              </DialogHeader>
              
              <div className="mt-4">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-black/30 rounded-lg">
                  {Object.entries(selectedProject.metrics).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-white">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <h4 className="text-lg font-semibold text-white">Impact</h4>
                  </div>
                  <p className="text-yellow-400 font-semibold">{selectedProject.impact}</p>
                </div>

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

export default ProfessionalProjects;