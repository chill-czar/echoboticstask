import React from "react";
import Image from "next/image";
import Logo from "@/assets/ECHOBotics.svg";
import Link from "next/link";
import ScrollIndicator from "./ScrollIndicator";
import HomeContent from "./HomeContent";
import ExploreCursorFollow from './ExploreCursorFollow';

const Home = () => {
  return (
    <div className="h-screen flex items-start justify-center bg-[#000000] ">
      {/* Navbar */}
      <div className="bg-[#7575751A] h-[90px] w-2/4 mt-10 mx-auto rounded-[25px] border border-[#C5C5C54D] flex items-center justify-between px-6">
        {/* Logo */}
        <div>
          <Image src={Logo} alt="Echobotics Logo" width={156} height={19} />
        </div>

        {/* Vertical Divider */}
        <div className="h-[58px] w-[1px] bg-[#EC4E023A]" />

        {/* Navigation Links */}
        <div className="flex gap-16">
          <Link
            href=""
            className="font-gilroy font-normal text-[#ABABAB] text-nav leading-nav tracking-nav"
          >
            Use Cases
          </Link>
          <Link
            href=""
            className="font-gilroy font-normal text-[#ABABAB] text-nav leading-nav tracking-nav"
          >
            How It Works
          </Link>
          <Link
            href=""
            className="font-gilroy font-normal text-[#ABABAB] text-nav leading-nav tracking-nav"
          >
            Contact Us
          </Link>
        </div>

        {/* Sign-In Button */}
        <div>
          <button
            className="relative w-[164px] h-[58px] rounded-[9px] font-gilroy font-normal text-[20px] leading-[24px] text-white"
            style={{
              background:
                "linear-gradient(252.2deg, rgba(236,78,2,0.3) -0.56%, rgba(0,0,0,0.3) 136.7%)",
              border: "1px solid #EC4E02",
              backdropFilter: "blur(1.5px)",
            }}
          >
            Sign In
          </button>
        </div>
      </div>
      <HomeContent />
      <ScrollIndicator />
      {/* <ExploreCursorFollow /> */}
    </div>
  );
};

export default Home;
