import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { ExternalLink } from "lucide-react";
import { LinkPreview } from "./ui/link-preview";

export default function ProfessionalProjectsCarousel() {
  const projects = [
    {
      name: (
        <LinkPreview url="https://oceaniekstream.com">
          <span className="inline-flex items-center gap-2">
            E-commerce Platform
            <ExternalLink className="w-5 h-5" />
          </span>
        </LinkPreview>
      ),
      designation: "Personal Project · Production",
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
      quote: (
        <div className="space-y-6">
          <p className="text-neutral-200 text-sm md:text-base leading-relaxed">
            Full-stack multi-agent AI support system with intelligent routing
            and real-time streaming responses.
          </p>

          <TechStack
            tech={[
              "Hono",
              "Vercel AI SDK",
              "PostgreSQL",
              "Prisma",
              "TypeScript",
            ]}
          />
        </div>
      ),
    },
    {
      name: (
        <LinkPreview url="https://oceaniekstream.com">
          <span className="inline-flex items-center gap-2">
            E-commerce Platform
            <ExternalLink className="w-5 h-5" />
          </span>
        </LinkPreview>
      ),
      designation: "Personal Project · Production",
      src: "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1200",
      quote: (
        <div className="space-y-6">
          <p className="text-neutral-200 text-sm md:text-base leading-relaxed">
            Comprehensive real-time event management platform with a React
            Native app and Node.js backend.
          </p>
          <TechStack
            tech={[
              "React Native",
              "Node.js",
              "Firebase",
              "Google Maps API",
              "FCM",
            ]}
          />
        </div>
      ),
    },
    {
      name: (
        <LinkPreview url="https://oceaniekstream.com">
          <span className="inline-flex items-center gap-2">
            E-commerce Platform
            <ExternalLink className="w-5 h-5" />
          </span>
        </LinkPreview>
      ),
      designation: "Oceaniek Technologies",
      src: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200",
      quote: (
        <div className="space-y-6">
          <p className="text-neutral-200 text-sm md:text-base leading-relaxed">
            Production-ready e-commerce platform with payment integration and
            AWS deployment.
          </p>
          <TechStack
            tech={["React.js", "Node.js", "MongoDB", "AWS", "Stripe"]}
          />
        </div>
      ),
    },
  ];

  return (
    <section
      id="professional-projects"
      className="relative w-full bg-[#0a0a0a] py-24 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Work
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">
            Production applications deployed at scale
          </p>
        </div>

        <AnimatedTestimonials testimonials={projects} />
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function TechStack({ tech }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
