import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Feb 2025 – Present",
    content: (
      <div className="backdrop-blur-md rounded-2xl px-6">
        <div className="flex items-start gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Oceaniek Technologies
            </h3>
            <p className="text-purple-400 font-semibold">
              Full Stack Developer
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
              <Calendar className="w-4 h-4" />
              Feb 2025 – Present
            </div>
          </div>
        </div>

        <ul className="space-y-3 text-gray-300">
          {[
            "Developed and deployed full-stack applications using React.js, Next.js, and Node.js with MongoDB",
            "Deployed production-ready apps using AWS S3, Route 53, EC2, Amplify, and VPS setups",
            "Integrated payment gateways for secure transactions across multiple applications",
            "Led interns, conducted weekly code reviews, and ensured high-quality deliveries",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Jul 2023 – Feb 2025",
    content: (
      <div className="backdrop-blur-md rounded-2xl px-6">
        <div className="flex items-start gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Cybernext</h3>
            <p className="text-blue-400 font-semibold">
              Software Development Engineer
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
              <Calendar className="w-4 h-4" />
              1.5 Years
            </div>
          </div>
        </div>

        <ul className="space-y-3 text-gray-300">
          {[
            "Built full-stack blockchain-enabled applications using React.js and Payload CMS",
            "Developed real-time React Native apps with Firebase integrations",
            "Created modular SDKs and internal CLI tools for automation",
            "Led multiple project threads, QA cycles, and code reviews",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Jun 2022 – Jul 2022",
    content: (
      <div className="backdrop-blur-md rounded-2xl px-6">
        <div className="flex items-start gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Complykart</h3>
            <p className="text-green-400 font-semibold">
              Software Engineer Intern
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
              <Calendar className="w-4 h-4" />2 Months
            </div>
          </div>
        </div>

        <ul className="space-y-3 text-gray-300">
          {[
            "Designed responsive UI using React.js and Tailwind CSS",
            "Managed and maintained databases ensuring data integrity",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

export default function ExperienceNew() {
  return (
    <section
      id="experience"
      className="w-full bg-[#0a0a0a] py-24"
    >
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
      </div>

      <div className="relative w-full overflow-clip">
        <Timeline data={experiences} />
      </div>
    </section>
  );
}
