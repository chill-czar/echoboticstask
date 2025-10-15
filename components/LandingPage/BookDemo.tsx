"use client";

import React from "react";
import Image from "next/image";
import decorativeElement from "@/assets/Images/decorativeElement.jpg";

const PlusMark = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="8" y="0.5" width="1" height="16" rx="0.5" fill="white" />
    <rect x="0.5" y="8" width="16" height="1" rx="0.5" fill="white" />
  </svg>
);

export default function BookDemo() {
  return (
    <div className="pb-[150px] sm:pb-[180px] lg:pb-[200px]">
      <div className="relative mx-auto max-w-[1611px] h-[400px] sm:h-[450px] lg:h-80 rounded-[30px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
        {/* Decorative Background */}
        <div className="absolute inset-0 z-[1]">
          <Image
            src={decorativeElement}
            alt="Decorative Background"
            fill
            priority
            className="object-cover object-center rounded-[30px]"
          />
        </div>

        {/* Orange Blur Overlay */}
        <div className="absolute inset-0 z-[2] rounded-[30px] bg-[var(--color-accent-glow)] backdrop-blur-[25px] [--tw-backdrop-blur:blur(25px)]" />

        {/* Soft Light Blur Layer */}
        <div className="absolute inset-0 z-[3] rounded-[30px] mix-blend-soft-light opacity-20 rotate-180">
          <Image
            src="/assets/Images/Blur.png"
            alt="Blur Overlay"
            fill
            className="object-cover object-center rounded-[30px]"
          />
        </div>

        {/* Plus Marks on Corners */}
        {[
          "top-4 left-4 sm:top-6 sm:left-6",
          "top-4 right-4 sm:top-6 sm:right-6",
          "bottom-4 left-4 sm:bottom-6 sm:left-6",
          "bottom-4 right-4 sm:bottom-6 sm:right-6",
        ].map((pos, i) => (
          <div key={i} className={`absolute ${pos} z-[4]`}>
            <PlusMark />
          </div>
        ))}

        {/* Main Content */}
        <div className="absolute inset-0 z-[5] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-gilroy-regular text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight lg:leading-[114%] max-w-[969px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            See real AI conversations in action.
            <br className="hidden sm:block" />
            book your demo today.
          </h2>

          <button className="mt-6 sm:mt-8 w-[220px] sm:w-[240px] lg:w-[265px] h-[50px] sm:h-[55px] lg:h-[60px] rounded-[12px] bg-white text-black text-lg sm:text-xl lg:text-[24px] font-gilroy-regular hover:bg-gray-100 transition-colors shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
}
