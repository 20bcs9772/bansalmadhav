import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Github,
  Code,
  Sparkles,
  MapPin,
  Boxes,
  CalendarDays,
  Brain,
} from "lucide-react";

const PersonalProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Assist-AI | AI-Powered Multi-Agent Support System",
      description:
        "A full-stack AI support system using a multi-agent architecture",
      tech: ["React", "Hono", "PostgreSQL", "Turborepo", "AI SDK"],
      github: "https://github.com/20bcs9772/assist-ai",
      size: "large",
      visual: "ai",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Hap | Real-Time Event Management Platform",
      description:
        "An event management platform to coordinate large-scale events in real time",
      tech: ["React Native", "Prisma", "FCM"],
      github: "https://github.com/20bcs9772/eventflow",
      size: "medium",
      visual: "events",
      code: 'const event = {\n  title: "Build",\n  status: "Live"\n}',
    },
    {
      title: "Interactive 3D Model",
      description:
        "An immersive interactive 3D model viewer built with modern web tech",
      tech: ["Next.js", "React Three"],
      github: "https://github.com/20bcs9772/3d-model",
      size: "small",
      visual: "3d",
    },
    {
      title: "Node-Based Pipeline Editor",
      description:
        "A node-based visual programming interface for building pipelines",
      tech: ["React Flow", "Zustand", "FastAPI"],
      github: "https://github.com/20bcs9772/node-editor",
      size: "medium",
      visual: "nodes",
    },
    {
      title: "Blog Post",
      description:
        "A full-stack blog platform with modern deployment workflows",
      tech: ["Turborepo", "AWS S3"],
      github: "https://github.com/20bcs9772/blog",
      size: "small",
      visual: "blog",
    },
    {
      title: "YelpCamp",
      description:
        "A campground discovery and review platform with maps and authentication",
      tech: ["Node.js", "MongoDB", "Cloudinary", "Maps"],
      github: "https://github.com/20bcs9772/YelpCamp",
      size: "large",
      visual: "map",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  const sizeClasses = {
    large: "col-span-2 row-span-2",
    medium: "col-span-2 sm:col-span-1 row-span-2",
    small: "col-span-2 sm:col-span-1 row-span-1",
  };

  return (
    <section id="personal-projects" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
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
          <p className="text-gray-400 mt-4 text-lg">
            Side projects and experiments that fuel my creativity
          </p>
        </motion.div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[220px] lg:auto-rows-[240px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 }}
              className={`relative group rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur-sm p-5 overflow-hidden ${sizeClasses[project.size]}`}
            >
              {/* Gradient base */}
              {project.gradient && (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition`}
                />
              )}

              {/* AI Nodes */}
              {project.visual === "ai" && (
                <Brain className="absolute right-6 bottom-6 w-20 h-20 text-purple-400/20 group-hover:scale-110 transition" />
              )}

              {project.visual === "events" && project.size === "medium" && (
                <div className="absolute bottom-14 bg-black/50 rounded-lg font-mono text-xs text-green-400 opacity-30 group-hover:opacity-60 transition-opacity">
                  {project.code}
                </div>
              )}

              {/* Events Timeline */}
              {project.visual === "events" && (
                <CalendarDays className="absolute right-6 top-6 w-16 h-16 text-pink-400/20" />
              )}

              {/* 3D Cube */}
              {project.visual === "3d" && (
                <Boxes className="absolute bottom-1 right-1 w-24 h-24 text-blue-400/20" />
              )}

              {/* Node Graph */}
              {project.visual === "nodes" && (
                <div className="absolute inset-0 pointer-events-none opacity-25 group-hover:opacity-40 transition">
                  <svg
                    viewBox="0 0 200 120"
                    className="absolute bottom-6 left-6 w-48 h-28"
                    fill="none"
                  >
                    {/* Lines */}
                    <path
                      d="M20 60 L80 30"
                      stroke="#a855f7"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M80 30 L140 60"
                      stroke="#22d3ee"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M80 30 L80 90"
                      stroke="#ec4899"
                      strokeWidth="1.5"
                    />

                    {/* Nodes */}
                    <circle cx="20" cy="60" r="6" fill="#a855f7" />
                    <circle cx="80" cy="30" r="6" fill="#22d3ee" />
                    <circle cx="140" cy="60" r="6" fill="#ec4899" />
                    <circle cx="80" cy="90" r="6" fill="#22c55e" />
                  </svg>
                </div>
              )}

              {/* Blog Lines */}
              {project.visual === "blog" && (
                <div className="absolute right-4 bottom-4 space-y-2 opacity-20">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-16 h-2 bg-gray-400 rounded" />
                  ))}
                </div>
              )}

              {/* Map Pins */}
              {project.visual === "map" && (
                <MapPin className="absolute right-6 bottom-6 w-16 h-16 text-cyan-400/30" />
              )}

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between mb-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Code className="w-5 h-5 text-purple-400" />
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github className="w-4 h-4 text-gray-400 hover:text-white" />
                  </a>
                </div>

                <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {project.tech.slice(0, 4).map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-gray-800/60 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
