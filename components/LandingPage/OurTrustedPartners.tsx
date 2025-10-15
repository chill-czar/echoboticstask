import React from "react";
import Image from "next/image";
import Ness from "@/assets/svg/ness.svg";
import SafetyWing from "@/assets/svg/safety-wing.svg";
import Stitch from "@/assets/svg/stitch.svg";
import Unqork from "@/assets/svg/unqork.svg";
import Vital from "@/assets/svg/vital.svg";
import Xp from "@/assets/svg/xp.svg";
import Visa from "@/assets/svg/visa.svg";

const OurTrustedPartners = () => {
  const logos = [
    { src: Visa, alt: "Visa", w: "w-[180px] sm:w-[220px] md:w-[242px]" },
    { src: Ness, alt: "Ness", w: "w-[180px] sm:w-[220px] md:w-[241px]" },
    {
      src: SafetyWing,
      alt: "SafetyWing",
      w: "w-[180px] sm:w-[220px] md:w-[242px]",
    },
    { src: Unqork, alt: "Unqork", w: "w-[180px] sm:w-[220px] md:w-[242px]" },
    { src: Stitch, alt: "Stitch", w: "w-[130px] sm:w-[150px] md:w-[168px]" },
    { src: Xp, alt: "XP", w: "w-[130px] sm:w-[150px] md:w-[169px]" },
    { src: Vital, alt: "Vital", w: "w-[130px] sm:w-[150px] md:w-[168px]" },
  ];

  return (
    <section className="relative w-full px-6 sm:px-10 md:px-[50px] py-16 sm:py-20">
      {/* Heading */}
      <h1 className="font-gilroy text-center text-[32px] sm:text-[42px] md:text-[54px] leading-tight font-normal text-white mb-8 sm:mb-[25px]">
        Our{" "}
        <span className="text-[var(--color-secondary)] font-gilroy-bold">
          Trusted
        </span>{" "}
        Partners
      </h1>

      {/* Partner container */}
      <div className="relative mx-auto max-w-[1820px]">
        {/* Left glow */}
        <div className="absolute left-[20px] sm:left-[42.85px] top-[-22px] w-[80px] sm:w-[120px] md:w-[140.94px] h-[120px] sm:h-[160px] md:h-[188px] bg-[#371200] blur-[25px] pointer-events-none" />

        {/* Right glow */}
        <div className="absolute right-[20px] sm:right-[42.85px] top-[-22px] w-[80px] sm:w-[119.49px] h-[120px] sm:h-[160px] md:h-[188px] bg-[#140600] blur-[25px] pointer-events-none" />

        {/* Gradient background card */}
        <div className="relative mx-auto flex items-center justify-center gap-6 sm:gap-10 md:gap-[38px] rounded-[20px] border-2 border-white/20 overflow-hidden p-6 sm:px-[40px] md:px-[58px] h-auto min-h-[120px] sm:min-h-[148px] bg-[radial-gradient(90.16%_143.01%_at_15.32%_21.04%,rgba(var(--color-primary-rgb),0.2)_0%,rgba(195,126,94,0.04)_77.08%,rgba(70,144,213,0)_100%)] backdrop-blur-[60px]">
          {/* Partner logos */}
          {logos.map((logo, i) => (
            <div
              key={i}
              className={`flex items-center justify-center ${logo.w} h-[70px] sm:h-[90px] md:h-[102px]`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTrustedPartners;
