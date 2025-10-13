import React from "react";
import Image from "next/image";
import Card1 from "@/public/Images/Card1.png"

const UseCaseCard = () => {
  return (
    <div className="relative w-[370px] h-[623px]">
      {/* Main Gradient Card */}
      <div
        className="relative w-full h-full rounded-[20px] border border-[#EC4E02] backdrop-blur-[10px] overflow-hidden"
        style={{
          background:
            "radial-gradient(162.12% 162.12% at 135.54% -39.06%, #EC4E02 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        {/* Top Right Overflow Circle */}
        <div className="absolute -top-5 -right-5 w-[90px] h-[90px] rounded-full bg-[#D9D9D9] flex items-center justify-center">
          <div className="w-[72px] h-[72px] rounded-full border border-[#EC4E02] bg-gradient-to-br from-[#EC4E02] to-transparent flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#EC4E02"
              className="w-6 h-6 -rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 7l-10 10m0-10h10v10"
              />
            </svg>
          </div>
        </div>

        {/* Masked Logo Box */}
        <div className="absolute left-[15px] top-[190px] w-[100px] h-[100px] rounded-[10px] bg-[#EC4E0263] border border-[#EC4E02] flex items-center justify-center">
          <div className="relative w-[65.54px] h-[65.54px]">
            <Image
              src={Card1}
              alt="Use case icon"
              width={66}
              height={66}
              className="rounded-md object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-60 rounded-md" />
          </div>
        </div>

        {/* Text Section */}
        <div className="absolute left-[15px] top-[370px] w-[340px]">
          <h1 className="font-fontSpring text-[30px] leading-[36px] text-white">
            CUSTOMER SUPPORT{" "}
            <span className="text-[#EC4E02] font-semibold">AND SALES</span>
          </h1>
          <p className="font-gilroy text-[18px] leading-[22px] text-white mt-4">
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
