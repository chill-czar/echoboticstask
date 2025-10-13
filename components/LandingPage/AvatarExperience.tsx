import React from "react";

const AvatarExperience = () => {
  return (
    <div className="relative w-full min-h-[520px] flex flex-col items-center justify-center bg-transparent text-center overflow-hidden">
      {/* Blurred Orange Ellipse (Exact from CSS) */}
      <div
        className="absolute left-1/2 top-[196.5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EC4E02] opacity-80 blur-[450px] pointer-events-none"
        style={{
          width: "522px",
          height: "522px",
        }}
      ></div>

      {/* Title */}
      <h3 className="relative text-[#EC4E02] font-gilroy-light text-[16px] sm:text-[18px] tracking-[0.22em] uppercase mb-6">
        Avatar Experience
      </h3>

      {/* Description */}
      <p className="relative max-w-[90%] md:max-w-[1005px] font-gilroy-regular text-white text-[18px] sm:text-[24px] md:text-[36px] lg:text-[40px] leading-[1.3]">
        At <span className="font-gilroy-bold">Echobotics</span>, we’re
        redefining human AI interaction. Our mission is to{" "}
        <span className="text-[#EC4E02]">
          make conversations with AI feel as natural as talking to a real
          person.
        </span>{" "}
        We build intelligent, real-time voice and chat systems that can listen,
        understand, and respond instantly with perfect lip-sync, gestures, and
        emotions.
      </p>
    </div>
  );
};

export default AvatarExperience;
