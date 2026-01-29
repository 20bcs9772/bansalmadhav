import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Briefcase, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const ProfessionalProjectsCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false 
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const projects = [
    {
      title: 'Assist-AI',
      company: 'Personal Project (Production)',
      description: 'Full-stack multi-agent AI support system with intelligent routing and real-time streaming.',
      longDescription: 'Assist-AI is a sophisticated multi-agent AI support system that leverages cutting-edge technologies to provide intelligent, context-aware assistance. The system features real-time streaming responses, intelligent query routing between multiple AI agents, and a scalable PostgreSQL database architecture with Prisma ORM.',
      tech: ['Hono', 'Vercel AI SDK', 'PostgreSQL', 'Prisma', 'TypeScript'],
      metrics: { users: '1000+', uptime: '99.9%', response: '< 200ms' },
      liveLink: 'https://assist-ai-chat.vercel.app',
      githubLink: 'https://github.com/20bcs9772/assist-ai',
      impact: 'Reduced support response time by 80%',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Hap',
      company: 'Personal Project (Production)',
      description: 'Comprehensive event management platform with React Native app and Node.js backend.',
      longDescription: 'Hap is a powerful real-time event management platform designed to streamline event organization and attendee engagement. Key features include real-time schedule updates, role-based access control, integrated maps for venue navigation, and push notifications.',
      tech: ['React Native', 'Node.js', 'Firebase', 'Google Maps API', 'FCM'],
      metrics: { events: '50+', attendees: '5000+', rating: '4.8/5' },
      liveLink: null,
      githubLink: 'https://github.com/20bcs9772/eventflow',
      impact: 'Managed 50+ events with 5000+ attendees',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'E-commerce Platform',
      company: 'Oceaniek Technologies',
      description: 'Complete e-commerce platform with payment integration and AWS deployment.',
      longDescription: 'Developed a production-ready e-commerce platform from scratch, featuring secure payment gateway integration, real-time inventory management, and advanced product filtering. Implemented AWS S3 for image storage, Route 53 for DNS management, and EC2 for scalable hosting.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
      metrics: { transactions: '10K+', revenue: '$500K+', uptime: '99.9%' },
      liveLink: null,
      githubLink: null,
      impact: 'Processed $500K+ in transactions',
      color: 'from-green-500 to-emerald-500'
    },
  ];

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="professional-projects" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

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

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_90%] md:flex-[0_0_70%] lg:flex-[0_0_50%] min-w-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all cursor-pointer h-full overflow-hidden"
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    
                    <div className="relative z-10">
                      {/* Icon & Company */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} group-hover:scale-110 transition-transform`}>
                          <Briefcase className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">{project.company}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-black/30 rounded-xl">
                        {Object.entries(project.metrics).map(([key, value], i) => (
                          <div key={i} className="text-center">
                            <div className="text-lg font-bold text-white">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Impact */}
                      <div className="flex items-center gap-2 mb-6 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-green-400 font-semibold">{project.impact}</span>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 5).map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300 border border-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-3">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 rounded-xl transition-all group/btn"
                          >
                            <ExternalLink className="w-4 h-4 text-purple-400 group-hover/btn:scale-110 transition-transform" />
                            <span className="text-sm font-medium text-purple-400">Live Demo</span>
                          </a>
                        )}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800/50 hover:bg-gray-700 border border-gray-700 rounded-xl transition-all group/btn"
                          >
                            <Github className="w-4 h-4 text-gray-400 group-hover/btn:scale-110 transition-transform" />
                            <span className="text-sm font-medium text-gray-300">Code</span>
                          </a>
                        )}
                      </div>

                      {/* Click hint */}
                      <p className="text-center text-xs text-gray-500 mt-4">Click for full details</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full hover:bg-gray-800 hover:border-purple-500/50 transition-all z-10 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full hover:bg-gray-800 hover:border-purple-500/50 transition-all z-10 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? 'bg-purple-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-gray-900 border-purple-500/30 text-white">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {selectedProject.title}
                </DialogTitle>
                <p className="text-gray-400 text-sm mt-2">{selectedProject.company}</p>
              </DialogHeader>
              
              <div className="mt-6 space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.longDescription}</p>

                <div className="grid grid-cols-3 gap-4 p-6 bg-gray-800/50 rounded-xl">
                  {Object.entries(selectedProject.metrics).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl border border-green-500/30">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <span className="text-green-400 font-semibold text-lg">{selectedProject.impact}</span>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-white">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-purple-500/20 rounded-lg text-sm text-purple-300 border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-purple-500 hover:bg-purple-600 rounded-xl transition-all font-medium"
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
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl transition-all font-medium"
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

export default ProfessionalProjectsCarousel;