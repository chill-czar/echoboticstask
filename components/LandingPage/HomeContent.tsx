import React from "react";
import DecorativeElement from './DecorativeElement';

const HomeContent = () => {
  return (
    <div className="absolute w-[1144px] left-[50px] top-1/2 -translate-y-1/2">
      {/* BEST AGENTIC AI Label */}
      <div className="absolute left-[10px] -top-[38px]">
        <h3 className="font-gilroy font-normal text-[24px] leading-[29px] tracking-[0.18em] text-[#EC4E02] opacity-80">
          BEST AGENTIC AI
        </h3>
      </div>

      {/* Heading Section */}
      <div className="mt-8">
        <h1 className="text-white font-fontSpring text-[108px] leading-[1.05] tracking-[0%] space-y-2">
          {/* Line 1 */}
          <div className="flex items-center">
            <span className="font-fontSpring">Making</span>
            <DecorativeElement />
          </div>

          {/* Line 2 */}
          <div className="flex flex-wrap items-baseline gap-6">
            <span className="font-NoContinue">conversations</span>
            <span className="font-fontSpring">with</span>
          </div>

          {/* Line 3 */}
          <div className="flex flex-wrap items-baseline gap-6">
            <span className="font-Averno">AI</span>
            <span className="font-fontSpring text-[#EC4E02]">feel</span>
            <span className="font-gilroy-heavy">Real</span>
            <span className="font-fontSpring text-[#EC4E02]">.</span>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default HomeContent;
