"use client";

import React from "react";
import Image from "next/image";

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

export default function BookADemoComponent() {
  return (
    <div className="py-20">
      <div className="relative mx-auto max-w-[1611px] h-80 rounded-[30px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
        {/* 🖼️ LAYER 1: Decorative Background Image (Rectangle 20) */}
        <div className="absolute inset-0 z-[1]">
          <Image
            src="/Images/decorativeElement.jpg"
            alt="Decorative Background"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "30px",
            }}
          />
        </div>

        {/* 🟠 LAYER 2: Orange Transparent Overlay (Rectangle 4474) */}
        <div
          className="absolute inset-0 z-[2] rounded-[30px]"
          style={{
            background: "rgba(236, 78, 2, 0.5)", // EC4E02 at 50% opacity
            backdropFilter: "blur(25px)", // Matches original CSS
            WebkitBackdropFilter: "blur(25px)",
          }}
        />

        {/* 🌫️ LAYER 3: Blur Image with Soft Light Blend (Image 25) */}
        <div
          className="absolute inset-0 z-[3] rounded-[30px] mix-blend-soft-light opacity-20 rotate-180"
          style={{
            transform: "rotate(180deg)",
          }}
        >
          <Image
            src="/Images/Blur.png"
            alt="Blur Overlay"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "30px",
            }}
          />
        </div>

        {/* ➕ Corner Plus Marks */}
        {[
          "top-6 left-6",
          "top-6 right-6",
          "bottom-6 left-6",
          "bottom-6 right-6",
        ].map((pos, i) => (
          <div key={i} className={`absolute ${pos} z-[4]`}>
            <PlusMark />
          </div>
        ))}

        {/* ✨ Content */}
        <div className="absolute inset-0 z-[5] flex flex-col items-center justify-center text-center px-4">
          <h2 className="font-gilroy-regular text-white text-[60px] leading-[114%] max-w-[969px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            See real AI conversations in action.
            <br />
            book your demo today.
          </h2>

          <button className="mt-8 w-[265px] h-[60px] rounded-[12px] bg-white text-black text-[24px] font-gilroy-regular hover:bg-gray-100 transition-colors shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
}
