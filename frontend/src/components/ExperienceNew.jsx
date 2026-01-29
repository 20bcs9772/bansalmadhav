import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Building2, Calendar, Briefcase } from 'lucide-react';

const ExperienceNew = () => {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center']
  });

  const experiences = [
    {
      company: 'Oceaniek Technologies',
      position: 'Full Stack Developer',
      period: 'Feb 2025 – Present',
      duration: 'Present',
      description: [
        'Developed and deployed full-stack applications using React.js, Next.js, and Node.js with MongoDB',
        'Deployed production-ready apps using AWS S3, Route 53, and EC2, scaling with Amplify and VPS setups',
        'Integrated payment gateways to enable secure transactions across multiple production applications',
        'Collaborated with designers and interns, leading weekly code reviews and ensuring high-quality deliverables'
      ],
      color: 'purple',
      icon: '🚀'
    },
    {
      company: 'Cybernext',
      position: 'Software Development Engineer',
      period: 'Jul 2023 - Feb 2025',
      duration: '1.5 years',
      description: [
        'Built full-stack blockchain-enabled applications using React.js and Payload CMS',
        'Built real-time React Native apps integrated with backend services and Firebase',
        'Created modular SDKs for internal CLI tools, improving developer onboarding and automation',
        'Led multiple project threads, conducted QA and performed code reviews'
      ],
      color: 'blue',
      icon: '💻'
    },
    {
      company: 'Complykart',
      position: 'Software Engineer Intern',
      period: 'Jun 2022 - Jul 2022',
      duration: '2 months',
      description: [
        'Designed and developed responsive web pages using React.js and Tailwind CSS',
        'Managed and maintained databases, ensuring data integrity and efficient storage solutions'
      ],
      color: 'green',
      icon: '🎯'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timelineTop = timelineRef.current.offsetTop;
      const timelineHeight = timelineRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      experiences.forEach((_, index) => {
        const itemPosition = timelineTop + (timelineHeight / experiences.length) * index;
        if (scrollPosition >= itemPosition) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [experiences.length]);

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

        <div className="max-w-6xl mx-auto" ref={timelineRef}>
          <div className="flex gap-8">
            {/* Left Timeline */}
            <div className="hidden md:block w-64 flex-shrink-0 relative">
              <div className="sticky top-24">
                {/* Timeline header */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="mb-8 p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl border border-purple-500/30"
                >
                  <Briefcase className="w-8 h-8 text-purple-400 mb-2" />
                  <h3 className="text-white font-bold text-lg">Career Journey</h3>
                  <p className="text-gray-400 text-sm">2+ years experience</p>
                </motion.div>

                {/* Timeline items */}
                <div className="space-y-4">
                  {experiences.map((exp, index) => {
                    const isActive = activeIndex >= index;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className={`relative pl-6 pb-4 transition-all duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-40'
                        }`}
                      >
                        {/* Timeline dot */}
                        <div className={`absolute left-0 top-0 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                          isActive 
                            ? 'bg-purple-500 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.6)]'
                            : 'bg-gray-700 border-gray-600'
                        }`} />
                        
                        {/* Timeline line */}
                        {index < experiences.length - 1 && (
                          <div className={`absolute left-[7px] top-4 w-0.5 h-full transition-colors duration-300 ${
                            activeIndex > index ? 'bg-purple-500' : 'bg-gray-700'
                          }`} />
                        )}

                        <div className="text-sm">
                          <p className={`font-bold transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-gray-500'
                          }`}>
                            {exp.company}
                          </p>
                          <p className={`text-xs transition-colors duration-300 ${
                            isActive ? 'text-purple-400' : 'text-gray-600'
                          }`}>
                            {exp.duration}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Scroll progress beam */}
                <motion.div
                  className="absolute left-[7px] top-32 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 origin-top"
                  style={{
                    scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
                    height: '60%'
                  }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 space-y-8">
              {experiences.map((exp, index) => {
                const colorClasses = {
                  purple: 'border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
                  blue: 'border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
                  green: 'border-green-500/30 hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]'
                };

                const iconColors = {
                  purple: 'from-purple-500 to-purple-600',
                  blue: 'from-blue-500 to-blue-600',
                  green: 'from-green-500 to-green-600'
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    className={`group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border ${colorClasses[exp.color]} transition-all hover:scale-[1.02]`}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${iconColors[exp.color]} text-3xl`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                        <p className={`font-semibold mb-2 ${
                          exp.color === 'purple' ? 'text-purple-400' :
                          exp.color === 'blue' ? 'text-blue-400' :
                          'text-green-400'
                        }`}>
                          {exp.position}
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-3">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            exp.color === 'purple' ? 'bg-purple-400' :
                            exp.color === 'blue' ? 'bg-blue-400' :
                            'bg-green-400'
                          }`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceNew;