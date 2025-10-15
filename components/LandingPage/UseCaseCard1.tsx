import React from "react";
import Image from "next/image";
import Card1 from "@/assets/Images/Card1.png";

const UseCaseCard = () => {
  return (
    <div className="relative w-[370px] h-[623px] sm:w-[320px] sm:h-[540px] xs:w-[280px] xs:h-[480px] max-w-full">
      {/* Main Gradient Card */}
      <div className="relative w-full h-full rounded-[20px] border border-[var(--color-border-primary)] backdrop-blur-[10px] overflow-hidden bg-[radial-gradient(162.12%_162.12%_at_135.54%_-39.06%,var(--color-primary)_0%,rgba(0,0,0,0)_100%)]">
        {/* Icon Container */}
        <div className="absolute left-[15px] top-[190px] sm:top-[150px] w-[100px] h-[100px] sm:w-[80px] sm:h-[80px] rounded-[10px] bg-[rgba(var(--color-primary-rgb),0.39)] border border-[var(--color-border-primary)] flex items-center justify-center">
          <div className="relative w-[65.54px] h-[65.54px] sm:w-[55px] sm:h-[55px]">
            <Image
              src={Card1}
              alt="Use case icon"
              width={66}
              height={66}
              className="rounded-md object-contain brightness-0 invert"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-60 rounded-md" />
          </div>
        </div>

        {/* Text Content */}
        <div className="absolute left-[15px] top-[315px] sm:top-[270px] w-[340px] sm:w-[280px]">
          <h1 className="font-fontSpring text-[30px] leading-[34px] sm:text-[24px] sm:leading-[28px] text-white">
            CUSTOMER SUPPORT{" "}
            <span className="text-[var(--color-primary)] font-semibold">
              AND SALES
            </span>
          </h1>
          <p className="font-gilroy text-[18px] leading-[24px] sm:text-[16px] sm:leading-[22px] text-white mt-2">
            Deliver customer service that feels human, not scripted. Echobotics
            AI agents handle FAQs, bookings, troubleshooting, and sales queries
            instantly, providing 24/7 personalized support that improves
            satisfaction and reduces workload.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;
