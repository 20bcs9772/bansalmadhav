import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      company: 'Oceaniek Technologies',
      position: 'Full Stack Developer',
      period: 'February 2025 – Present',
      description: [
        'Developed and deployed full-stack applications using React.js, Next.js, and Node.js with MongoDB',
        'Deployed production-ready apps using AWS S3, Route 53, and EC2, scaling with Amplify and VPS setups',
        'Integrated payment gateways to enable secure transactions across multiple production applications',
        'Collaborated with designers and interns, leading weekly code reviews and ensuring high-quality deliverables'
      ],
      color: 'purple'
    },
    {
      company: 'Cybernext',
      position: 'Software Development Engineer',
      period: 'July 2023 - February 2025',
      description: [
        'Built full-stack blockchain-enabled applications using React.js and Payload CMS',
        'Built real-time React Native apps integrated with backend services and Firebase',
        'Created modular SDKs for internal CLI tools, improving developer onboarding and automation',
        'Led multiple project threads, conducted QA and performed code reviews'
      ],
      color: 'blue'
    },
    {
      company: 'Complykart',
      position: 'Software Engineer Intern',
      period: 'June 2022 - July 2022',
      description: [
        'Designed and developed responsive web pages using React.js and Tailwind CSS',
        'Managed and maintained databases, ensuring data integrity and efficient storage solutions'
      ],
      color: 'green'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500" />

          {experiences.map((exp, index) => {
            const colorClasses = {
              purple: 'border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
              blue: 'border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
              green: 'border-green-500/30 hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]'
            };

            const dotColors = {
              purple: 'bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)]',
              blue: 'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]',
              green: 'bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.6)]'
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`mb-12 relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full ${dotColors[exp.color]} transform -translate-x-1/2 z-10`} />

                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 pl-16 md:pl-0' : 'md:pl-12 pl-16 md:pl-0'}`}>
                  <motion.div
                    className={`group bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border ${colorClasses[exp.color]} transition-all hover:scale-105`}
                    whileHover={{ rotateY: 2, rotateX: 2 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <Building2 className={`w-6 h-6 text-${exp.color}-400 mt-1`} />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                        <p className={`text-${exp.color}-400 font-semibold mb-2`}>{exp.position}</p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className={`text-${exp.color}-400 mt-1`}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;