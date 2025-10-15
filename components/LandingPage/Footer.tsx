"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Sun from "@/assets/Images/sun.png";
import Logo from "@/assets/svg/Logo.svg";
export default function Footer() {
  return (
    <footer className="relative mx-auto mt-20 max-w-[1820px] rounded-[50px] overflow-hidden border border-[var(--color-border-subtle)] h-auto lg:h-[465px]">
      {/* Background Glow */}
      <div className="absolute pointer-events-none w-[1955px] h-[2475px] left-[calc(50%-977px-260px)] -bottom-[2137px] opacity-90 mix-blend-soft-light">
        <div className="relative w-full h-full rotate-[270deg]">
          <Image
            src={Sun}
            alt="Footer background glow"
            fill
            className="object-cover blur-[100px]"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-[5] flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 px-6 md:px-16 lg:px-24 pt-12 lg:pt-16 text-white">
        {/* Left Section */}
        <div className="max-w-[566px] space-y-6 text-center lg:text-left mx-auto lg:mx-0">
          <div className="flex justify-center lg:justify-start items-center space-x-2">
            <Image src={Logo} alt="Logo" width={160} height={40} />
          </div>
          <p className="text-[var(--color-text-light)] text-base sm:text-lg md:text-xl leading-[24px] font-gilroy">
            Echobotics is redefining human–AI interaction with real-time voice,
            chat, and lip-sync technology.
          </p>
          <div className="pt-4">
            <h3 className="text-lg md:text-xl mb-3">Follow Us On!</h3>
            <div className="flex justify-center lg:justify-start space-x-5">
              {["Twitter", "Instagram", "Youtube", "Facebook"].map(
                (name, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border border-[var(--color-border-primary)] flex items-center justify-center bg-transparent hover:bg-[var(--color-bg-overlay)] transition-all backdrop-blur-sm"
                  >
                    <Image
                      src={`/Icons/${name}.svg`}
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

        {/* Links Section */}
        <div className="flex flex-wrap justify-center lg:justify-between gap-10 lg:gap-20 text-center lg:text-left">
          {/* Links Column */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-2xl md:text-[32px] font-gilroy-medium mb-3">
              Links
            </h3>
            {["Home", "Use Cases", "Features", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-[var(--color-text-lighter)] text-lg hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Support Column */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-2xl md:text-[32px] font-gilroy-medium mb-3">
              Support
            </h3>
            {["Contact", "Privacy Policy", "Terms & Conditions"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-[var(--color-text-lighter)] text-lg hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Use Cases Column */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-2xl md:text-[32px] font-gilroy-medium mb-3">
              Use Cases
            </h3>
            {[
              "Electronics",
              "E-Commerce",
              "Voice Assistant",
              "Virtual Calls",
            ].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-[var(--color-text-lighter)] text-lg hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="relative z-[5] mt-16 lg:mt-20 w-[90%] mx-auto border-t border-[var(--color-border-primary)]" />

      {/* Bottom Row */}
      <div className="relative z-[5] mt-4 flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-16 lg:px-24 gap-2 md:gap-0 text-white text-sm md:text-base">
        <p className="text-white/90 font-gilroy text-center md:text-left">
          © 2025 Echobotics. All Rights Reserved.
        </p>
        <p className="text-white/90 font-gilroy text-center md:text-right">
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
