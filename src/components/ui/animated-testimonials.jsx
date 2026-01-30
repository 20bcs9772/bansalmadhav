"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  const activeTestimonial = testimonials[active];
  const isStringQuote = typeof activeTestimonial.quote === "string";

  return (
    <div className="mx-auto max-w-sm px-4 md:py-20 font-sans antialiased md:max-w-5xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-8 md:gap-20 md:grid-cols-2">
        {/* Image stack */}
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => {
              const isActive = index === active;
              return (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                    scale: isActive ? 1 : 0.95,
                    z: isActive ? 0 : -100,
                    rotate: isActive ? 0 : randomRotateY(),
                    zIndex: isActive ? 40 : testimonials.length + 2 - index,
                    y: isActive ? [0, -60, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-white">
              {activeTestimonial.name}
            </h3>

            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {activeTestimonial.designation}
            </p>

            {/* QUOTE AREA */}
            <div className="mt-8">
              {isStringQuote ? (
                <motion.p className="text-lg text-gray-500 dark:text-neutral-300">
                  {activeTestimonial.quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-neutral-300"
                >
                  {activeTestimonial.quote}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex gap-4 pt-12 md:pt-8">
            <button
              onClick={handlePrev}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-900/50 border border-purple-500 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <IconArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/button:rotate-12 text-blue-300" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-900/50 border border-purple-500 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12 text-blue-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
