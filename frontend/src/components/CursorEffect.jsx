import React, { useEffect, useRef, useState } from "react";

const CursorEffect = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      const interactive = e.target.closest("a") || e.target.closest("button");
      setIsHovering(!!interactive);
    };

    const lerp = (start, end, amt) => start + (end - start) * amt;

    const animate = () => {
      // Main cursor (snappier)
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.25);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.25);

      // Trail cursor (slower)
      trailPos.current.x = lerp(trailPos.current.x, mouse.current.x, 0.12);
      trailPos.current.y = lerp(trailPos.current.y, mouse.current.y, 0.12);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${pos.current.x - 8}px, ${pos.current.y - 8}px, 0)
          scale(${isHovering ? 1.5 : 1})
        `;
      }

      if (trailRef.current) {
        trailRef.current.style.transform = `
          translate3d(${trailPos.current.x - 16}px, ${trailPos.current.y - 16}px, 0)
          scale(${isHovering ? 2 : 1})
        `;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isHovering]);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-purple-500 pointer-events-none z-[9999] mix-blend-screen will-change-transform"
      />

      {/* Trail */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-blue-400 pointer-events-none z-[9998] mix-blend-screen will-change-transform"
      />
    </>
  );
};

export default CursorEffect;
