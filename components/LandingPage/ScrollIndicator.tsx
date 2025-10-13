// components/ScrollIndicator.tsx
"use client";

import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [rotation, setRotation] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setRotation(scrolled * 0.5);
      setIsScrolled(scrolled > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isScrolled) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed left-[59px] bottom-[50px] w-[116.62px] h-[116.73px] cursor-pointer transition-transform duration-300 hover:scale-110 z-50"
      onClick={handleClick}
      style={{
        transform: isScrolled ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <div className="relative w-full h-full animate-float">
        {/* Rotating Text */}
        <div
          className="absolute w-full h-full transition-transform duration-100 ease-linear"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
              />
            </defs>
            <circle
              cx="60"
              cy="60"
              r="55"
              fill="none"
              stroke="white"
              strokeWidth="0.9"
              opacity="0.3"
            />
            <text
              fill="white"
              fontFamily="Arial, sans-serif"
              fontSize="12"
              letterSpacing="8"
              className="uppercase"
            >
              <textPath href="#circlePath" startOffset="0%">
                SCROLL • I • SCROLL • I • SCROLL
              </textPath>
            </text>
          </svg>
        </div>

        {/* Arrow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce-subtle">
          <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[17.51px] border-l-transparent border-r-transparent border-t-white" />
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
