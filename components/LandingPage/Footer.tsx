"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mx-15 mt-20 pb-20 max-w-[1820px] h-[465px] rounded-[50px] overflow-hidden">
      {/* 🖼️ LAYER 1: Background large blur image */}
      <div className="absolute inset-0 z-[1] rotate-90 scale-150">
        <Image
          src="/Images/Blur.png"
          alt="Footer Blur Background"
          fill
          priority
          className="object-cover object-center blur-[50px]"
        />
      </div>

      {/* 🟠 LAYER 2: Gradient border layer */}
      <div
        className="absolute inset-0 z-[2] rounded-[50px]"
        style={{
          background:
            "linear-gradient(101.07deg, rgba(236, 78, 2, 0.2) -12.83%, rgba(134, 44, 1, 0) 63.59%)",
          border: "1px solid #EC4E02",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
        }}
      />

      {/* 🌞 LAYER 3: Soft-light overlay */}
      <div className="absolute inset-0 z-[3] mix-blend-soft-light opacity-30 rounded-[50px] rotate-180">
        <Image
          src="/Images/footer.png"
          alt="Footer Soft Light Overlay"
          fill
          className="object-cover object-center rounded-[50px]"
        />
      </div>

      {/* ✨ CONTENT */}
      <div className="relative z-[5] flex justify-between px-24 pt-16 text-white">
        {/* ---- Column 1 ---- */}
        <div className="max-w-[566px] space-y-6">
          <div className="flex items-center space-x-2">
            <Image src="/Logo.svg" alt="Logo" width={160} height={40} />
          </div>
          <p className="text-[#C7C7C7] text-[20px] leading-[24px] font-gilroy">
            Echobotics is redefining human–AI interaction with real-time voice,
            chat, and lip-sync technology.
          </p>
          <div className="pt-4">
            <h3 className="text-[20px] mb-3">Follow Us On!</h3>
            <div className="flex space-x-5">
              {["Twitter", "Instagram", "Youtube", "Facebook"].map(
                (name, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border border-[#EC4E02] flex items-center justify-center bg-transparent hover:bg-[#EC4E02]/20 transition-all backdrop-blur-sm"
                  >
                    <Image
                      src={`/${name}.svg`}
                      alt={name}
                      width={20}
                      height={20}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* ---- Links ---- */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-[32px] font-gilroy-medium mb-3">Links</h3>
          {["Home", "Use Cases", "Features", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-[#DBDBDB] text-[20px] hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* ---- Support ---- */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-[32px] font-gilroy-medium mb-3">Support</h3>
          {["Contact", "Privacy Policy", "Terms & Conditions"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-[#DBDBDB] text-[20px] hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* ---- Use Cases ---- */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-[32px] font-gilroy-medium mb-3">Use Cases</h3>
          {[
            "Electronics",
            "E-Commerce",
            "Voice Assistant",
            "Virtual Calls",
          ].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-[#DBDBDB] text-[20px] hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ---- Bottom Line ---- */}
      <div className="relative z-[5] mt-10 w-[90%] mx-auto border-t border-[#EC4E02]/60 opacity-80" />
      <div className="relative z-[5] mt-4 flex justify-between items-center px-24 text-white text-[16px]">
        <p className="text-white/90 font-gilroy">
          © 2025 Echobotics. All Rights Reserved.
        </p>
        <p className="text-white/90 font-gilroy">
          <Link href="/terms" className="hover:text-white">
            Terms & Conditions
          </Link>{" "}
          |{" "}
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
