import React from "react";

const AvatarExperience = () => {
  return (
    <section className="relative w-full min-h-[520px] flex flex-col items-center justify-center bg-transparent text-center overflow-hidden px-4 sm:px-8">
      {/* Blurred Orange Glow */}
      <div className="absolute left-1/2 top-[196.5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)] opacity-80 blur-[450px] pointer-events-none w-[522px] h-[522px] max-w-[80vw] sm:max-w-[500px]" />

      {/* Section Title */}
      <h3 className="relative text-[var(--color-primary)] font-gilroy-light text-[14px] sm:text-[18px] tracking-[0.22em] uppercase mb-6">
        Avatar Experience
      </h3>

      {/* Description */}
      <p className="relative max-w-[90%] md:max-w-[1005px] font-gilroy-regular text-white text-[16px] sm:text-[20px] md:text-[28px] lg:text-[40px] leading-[1.3]">
        At{" "}
        <span className="font-gilroy-bold text-[var(--color-primary)]">
          Echobotics
        </span>
        , we&apos;re redefining human AI interaction. Our mission is to{" "}
        <span className="text-[var(--color-text-muted)]">
          make conversations with AI feel as natural as talking to a real
          person. We build intelligent, real-time voice and chat systems that
          can listen, understand, and respond instantly with perfect lip-sync,
          gestures, and emotions.
        </span>
      </p>
    </section>
  );
};

export default AvatarExperience;
