import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Smooth animation using requestAnimationFrame
    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        setMousePosition(prev => ({
          x: prev.x + (targetPosition.current.x - prev.x) * 0.15,
          y: prev.y + (targetPosition.current.y - prev.y) * 0.15
        }));
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed w-4 h-4 bg-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-screen transition-transform duration-200"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)'
        }}
      />
      
      {/* Trail cursor */}
      <div
        className="fixed w-8 h-8 border-2 border-blue-400 rounded-full pointer-events-none z-[9998] mix-blend-screen transition-transform duration-300"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: isHovering ? 'scale(2)' : 'scale(1)'
        }}
      />
    </>
  );
};

export default CursorEffect;