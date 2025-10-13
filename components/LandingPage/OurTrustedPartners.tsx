import React from "react";
import Image from "next/image";
import Ness from "@/public/ness.svg";
import SafetyWing from "@/public/safety-wing.svg";
import Stitch from "@/public/stitch.svg";
import Unqork from "@/public/unqork.svg";
import Vital from "@/public/vital.svg";
import Xp from "@/public/xp.svg";
import Visa from "@/public/visa.svg";

const OurTrustedPartners = () => {
  return (
    <div className="relative w-full px-[50px] py-20">
      {/* Title */}
      <h1 className="font-gilroy text-center text-[54px] leading-[65px] font-normal text-white mb-[25px]">
        Our <span className="text-[#FF6B35] font-gilroy-bold">Trusted</span> Partners
      </h1>

      {/* Partners Container with Glassmorphism */}
      <div className="relative mx-auto max-w-[1820px]">
        {/* Blur effects on sides */}
        <div className="absolute left-[42.85px] top-[-22px] w-[140.94px] h-[188px] bg-[#371200] blur-[25px] pointer-events-none" />
        <div className="absolute right-[42.85px] top-[-22px] w-[119.49px] h-[188px] bg-[#140600] blur-[25px] pointer-events-none" />

        {/* Glassmorphic Card */}
        <div
          className="relative mx-auto h-[148px] rounded-[20px] border-2 border-white/20 overflow-hidden"
          style={{
            background:
              "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(236, 78, 2, 0.2) 0%, rgba(195, 126, 94, 0.04) 77.08%, rgba(70, 144, 213, 0) 100%)",
            backdropFilter: "blur(60px)",
            WebkitBackdropFilter: "blur(60px)",
          }}
        >
          {/* Logos Container */}
          <div className="flex items-center justify-center h-full gap-[38px] px-[58px]">
            <div className="flex items-center justify-center w-[242px] h-[121px]">
              <Image
                src={Visa}
                alt="Visa"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center w-[241px] h-[102px]">
              <Image
                src={Ness}
                alt="Ness"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center w-[242px] h-[102px]">
              <Image
                src={SafetyWing}
                alt="Safety Wing"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center w-[242px] h-[102px]">
              <Image
                src={Unqork}
                alt="Unqork"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center w-[168px] h-[102px]">
              <Image
                src={Stitch}
                alt="Stitch"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center w-[169px] h-[102px]">
              <Image
                src={Xp}
                alt="XP"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center w-[168px] h-[102px]">
              <Image
                src={Vital}
                alt="Vital"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTrustedPartners;
