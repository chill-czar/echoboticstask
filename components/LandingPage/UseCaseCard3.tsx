import React from "react";
import Image from "next/image";
import Card3 from "@/assets/Images/Card3.png";

const UseCaseCard3 = () => {
  return (
    <div className="relative w-[370px] h-[624px] sm:w-[320px] sm:h-[540px] xs:w-[280px] xs:h-[480px]">
      <div className="relative w-full h-full rounded-[20px] border border-[var(--color-border-primary)] backdrop-blur-[10px] overflow-hidden bg-[linear-gradient(156.84deg,rgba(var(--color-primary-rgb),0.72)_-22.32%,rgba(47,18,5,0)_98.46%)]">
        <div className="absolute left-[20px] top-[190px] sm:top-[150px] w-[100px] h-[100px] sm:w-[80px] sm:h-[80px] rounded-[10px] bg-[rgba(var(--color-primary-rgb),0.39)] border border-[var(--color-border-primary)] flex items-center justify-center">
          <div className="relative w-[65.54px] h-[65.54px] sm:w-[55px] sm:h-[55px]">
            <Image
              src={Card3}
              alt="Use case 3 icon"
              width={66}
              height={66}
              className="rounded-md object-contain brightness-0 invert"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-60 rounded-md" />
          </div>
        </div>

        <div className="absolute left-[20px] top-[315px] sm:top-[270px] w-[324px] sm:w-[280px]">
          <h1 className="font-fontSpring text-[30px] sm:text-[24px] leading-[34px] sm:leading-[28px] text-white">
            EDUCATION{" "}
            <span className="text-[var(--color-primary)] font-semibold">
              AND TRAINING
            </span>
          </h1>
          <p className="font-gilroy text-[18px] sm:text-[16px] leading-[24px] sm:leading-[22px] text-white mt-2">
            Turn learning into an engaging two-way experience. With AI tutors
            who explain, guide, and test knowledge live, students and
            professionals can learn interactively. Role-play simulations and
            language partners create deeper, practical training.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard3;
