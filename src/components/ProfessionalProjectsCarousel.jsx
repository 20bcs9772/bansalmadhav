import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { ExternalLink } from "lucide-react";
import { LinkPreview } from "./ui/link-preview";

export default function ProfessionalProjectsCarousel() {
  const projects = [
    {
      name: (
        <LinkPreview
          url="https://oceaniekstream.com"
          imageSrc="/projects/3.png"
        >
          <span className="inline-flex items-center gap-2">
            OTT Platform | Oceaniek Stream
          </span>
        </LinkPreview>
      ),
      designation: "Full Stack Development",
      src: "/projects/3.png",
      quote: (
        <div className="space-y-6">
          <p className="text-neutral-200 text-sm md:text-base leading-relaxed">
            Built a full-scale OTT streaming platform supporting movies, series,
            and exclusive content across mobile and TV devices. Developed the
            frontend using React and the backend with Node.js, Express, and
            MongoDB. Implemented user authentication, content management, and
            smooth video playback optimized for performance and scalability.
          </p>
          <TechStack
            tech={[
              "Next.js",
              "Payment Gateway Integration",
              "Responsive Design",
              "AWS",
              "Video Stream",
            ]}
          />
        </div>
      ),
    },
    {
      name: (
        <LinkPreview url="https://punjabports.com/" imageSrc="/projects/1.png">
          <span className="inline-flex items-center gap-2">
            Restaurant Website | Punjab Ports
          </span>
        </LinkPreview>
      ),
      designation: "Full Stack Development",
      src: "/projects/1.png",
      quote: (
        <div className="space-y-6">
          <p className="text-neutral-200 text-sm md:text-base leading-relaxed">
            Developed a restaurant e-commerce platform allowing users to browse
            menus, create accounts, and place online orders with COD and
            Razorpay payments. Built the frontend using React, Tailwind, and
            ShadCN, with a backend powered by Payload CMS and MongoDB, including
            an admin panel for managing products and orders.
          </p>
          <TechStack
            tech={[
              "React",
              "Payment Gateway Integration",
              "Node.js",
              "MongoDB",
              "ExpressJS",
            ]}
          />
        </div>
      ),
    },
    {
      name: (
        <LinkPreview
          url="https://thehealinggroove.com/"
          imageSrc="/projects/4.png"
        >
          <span className="inline-flex items-center gap-2">
            Medical Tourism Facilitator | The Healing Groove
          </span>
        </LinkPreview>
      ),
      designation: "Full Stack Development",
      src: "/projects/4.png",
      quote: (
        <div className="space-y-6">
          <p className="text-neutral-200 text-sm md:text-base leading-relaxed">
            Built a medical tourism platform connecting patients with hospitals
            and healthcare providers worldwide. Developed using Next.js, the
            platform allows users to explore treatments, compare destinations,
            and request medical assistance.
          </p>
          <TechStack
            tech={[
              "Next.js",
              "Responsive Design",
              "User Experience",
              "Map Integration",
              "SEO",
            ]}
          />
        </div>
      ),
    },
    {
      name: (
        <LinkPreview
          url="https://nautilustimes.com/"
          imageSrc="/projects/2.png"
        >
          <span className="inline-flex items-center gap-2">
            Maritime Training Website | Nautilus Times
          </span>
        </LinkPreview>
      ),
      designation: "Full Stack Development",
      src: "/projects/2.png",
      quote: (
        <div className="space-y-6">
          <p className="text-neutral-200 text-sm md:text-base leading-relaxed">
            Developed a modern maritime training platform using React, Node.js,
            Express, and MongoDB. The website supports course listings, secure
            payment gateway integration, and email notifications. Emphasis was
            placed on responsive design and delivering a smooth experience.
          </p>
          <TechStack
            tech={[
              "React.js",
              "Node.js",
              "ExpressJS",
              "MongoDB",
              "Payment Gateway Integration",
            ]}
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
