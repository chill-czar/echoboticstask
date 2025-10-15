"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/svg/ECHOBotics.svg";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[var(--color-bg-secondary)] mt-10 mx-auto rounded-[25px] border border-[var(--color-border-secondary)] flex items-center justify-between px-6 py-4 w-[90%] max-w-[900px] backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={Logo}
          alt="Echobotics Logo"
          width={156}
          height={19}
          className="w-[130px] sm:w-[156px] h-auto"
        />
      </div>

      {/* Divider (hidden on mobile) */}
      <div className="hidden lg:block h-[58px] w-[1px] bg-[var(--color-border-accent)]" />

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-10 xl:gap-16">
        <Link
          href="#"
          className="font-gilroy font-normal text-[var(--color-text-secondary)] text-[18px] leading-[22px] tracking-wide hover:text-white transition-colors"
        >
          Use Cases
        </Link>
        <Link
          href="#"
          className="font-gilroy font-normal text-[var(--color-text-secondary)] text-[18px] leading-[22px] tracking-wide hover:text-white transition-colors"
        >
          How It Works
        </Link>
        <Link
          href="#"
          className="font-gilroy font-normal text-[var(--color-text-secondary)] text-[18px] leading-[22px] tracking-wide hover:text-white transition-colors"
        >
          Contact Us
        </Link>
      </div>

      {/* Sign In Button */}
      <div className="hidden lg:block">
        <button className="relative w-[164px] h-[58px] rounded-[9px] font-gilroy font-normal text-[20px] leading-[24px] text-white border border-[var(--color-border-primary)] bg-[linear-gradient(252.2deg,var(--color-bg-overlay)_-0.56%,rgba(0,0,0,0.3)_136.7%)] backdrop-blur-[1.5px] hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-colors">
          Sign In
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[90%] bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-2xl p-6 flex flex-col gap-6 items-center backdrop-blur-md lg:hidden z-50">
          <Link
            href="#"
            className="font-gilroy text-[var(--color-text-secondary)] text-lg hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Use Cases
          </Link>
          <Link
            href="#"
            className="font-gilroy text-[var(--color-text-secondary)] text-lg hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="#"
            className="font-gilroy text-[var(--color-text-secondary)] text-lg hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <button className="w-[164px] h-[58px] rounded-[9px] font-gilroy font-normal text-[20px] leading-[24px] text-white border border-[var(--color-border-primary)] bg-[linear-gradient(252.2deg,var(--color-bg-overlay)_-0.56%,rgba(0,0,0,0.3)_136.7%)] backdrop-blur-[1.5px]">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
