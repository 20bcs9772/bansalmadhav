/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState, useEffect } from "react";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center bg-gray-900/50 rounded-full border border-purple-500/30 hover:border-purple-400 transition-all"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl px-4 pb-3 md:flex",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null);
  const bounds = useRef({ x: 0, width: 0 });
  const [hovered, setHovered] = useState(false);

  // Cache layout ONCE
  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    bounds.current = { x: rect.x, width: rect.width };
  }, []);

  const distance = useTransform(mouseX, (val) => {
    const { x, width } = bounds.current;
    return val - x - width / 2;
  });

  /* SAME animation curve, smoother springs */
  const size = useSpring(useTransform(distance, [-150, 0, 150], [50, 88, 44]), {
    stiffness: 300,
    damping: 20,
    mass: 0.4,
  });

  const iconSize = useSpring(
    useTransform(distance, [-150, 0, 150], [24, 48, 24]),
    {
      stiffness: 300,
      damping: 20,
      mass: 0.4,
    },
  );

  return (
    <a href={href} target="_blank">
      <motion.div
        ref={ref}
        style={{
          width: size,
          height: size,
          translateZ: 0,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full
                   bg-gray-900/50 border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] 
                   will-change-transform"
      >
        <motion.div
          style={{
            width: iconSize,
            height: iconSize,
          }}
          className="flex items-center justify-center text-purple-300 will-change-transform"
        >
          <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full">
            {icon}
          </div>
        </motion.div>
      </motion.div>
    </a>
  );
}
