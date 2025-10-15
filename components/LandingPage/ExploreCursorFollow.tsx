"use client";
import React, { useState, useEffect, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

const ExploreCursorFollow: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);

  const targetRef = useRef<Position>({ x: 0, y: 0 });

  useEffect(() => {
    setPosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
    targetRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame: number;

    const animate = () => {
      setPosition((prev) => {
        const dx = targetRef.current.x - prev.x;
        const dy = targetRef.current.y - prev.y;
        const newAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        setAngle(newAngle);

        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none w-[190px] h-[190px] -translate-x-1/2 -translate-y-1/2"
      style={{ left: position.x, top: position.y, zIndex: 9999 }}
    >
      <div className="relative flex items-center justify-center w-full h-full rounded-full bg-[var(--color-primary)]">
        {/* Arrow */}
        <div
          className="absolute w-[50px] h-[50px] flex items-center justify-center transition-transform duration-100"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        {/* Circular Text */}
        <div className="absolute w-full h-full">
          <svg
            width="190"
            height="190"
            viewBox="0 0 190 190"
            className="animate-spin-slow"
            style={{ animationDuration: "20s" }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 95, 95 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              />
            </defs>
            <text
              fill="white"
              style={{
                fontSize: "16px",
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontWeight: "600",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              <textPath href="#circlePath" startOffset="0%">
                • EXPLORE • EXPLORE • EXPLORE • EXPLORE • EXPLORE
              </textPath>
            </text>
          </svg>
        </div>

        {/* Decorative dots */}
        <div
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{ top: "15%", left: "50%", transform: "translateX(-50%)" }}
        />
        <div
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{ bottom: "15%", left: "50%", transform: "translateX(-50%)" }}
        />
        <div
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{ left: "15%", top: "50%", transform: "translateY(-50%)" }}
        />
        <div
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{ right: "15%", top: "50%", transform: "translateY(-50%)" }}
        />
      </div>
    </div>
  );
};

export default ExploreCursorFollow;
