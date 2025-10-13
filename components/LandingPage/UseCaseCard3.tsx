import React from "react";
import Image from "next/image";
import Card3 from "@/public/Images/Card3.png"; // place use case 3 icon here

const UseCaseCard3 = () => {
  return (
    <div className="relative w-[370px] h-[624px]">
      {/* Main Card */}
      <div
        className="relative w-full h-full rounded-[20px] border border-[#EC4E02] backdrop-blur-[10px] overflow-hidden"
        style={{
          background:
            "linear-gradient(156.84deg, rgba(236, 78, 2, 0.72) -22.32%, rgba(47, 18, 5, 0) 98.46%)",
        }}
      >
        {/* Top Right Curved Circle */}
        <div className="absolute -top-5 -right-5 w-[90px] h-[90px] rounded-full border border-[#EC4E02] flex items-center justify-center">
          <div className="w-[74px] h-[74px] rounded-full border border-white bg-[#140700] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
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

        {/* Icon Box */}
        <div className="absolute left-[20px] top-[190px] w-[100px] h-[100px] rounded-[10px] bg-[#EC4E0263] border border-[#EC4E02] flex items-center justify-center">
          <div className="relative w-[65.54px] h-[65.54px]">
            <Image
              src={Card3}
              alt="Use case 3 icon"
              width={66}
              height={66}
              className="rounded-md object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-60 rounded-md" />
          </div>
        </div>

        {/* Text Section */}
        <div className="absolute left-[20px] top-[370px] w-[324px]">
          <h1 className="font-fontSpring text-[30px] leading-[36px] text-white">
            EDUCATION{" "}
            <span className="text-[#EC4E02] font-semibold">AND TRAINING</span>
          </h1>
          <p className="font-gilroy text-[18px] leading-[22px] text-white mt-4">
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
