import React from "react";
import UseCaseCard1 from "./UseCaseCard1";
import UseCaseCard2 from "./UseCaseCard2";
import UseCaseCard3 from './UseCaseCard3';

const UseCase = () => {
  return (
    <>
      <div className="flex w-full max-w-[1200px] px-[50px] pt-50 h-screen">
        {/* use case content */}
        <div className="w-[538px]">
          {/* Top label */}
          <h4
            className="
              font-gilroy 
              text-[#EC4E02] 
              text-[18px] 
              uppercase 
              tracking-[0.22em] 
              leading-[22px]
            "
          >
            Use Cases
          </h4>

          {/* Heading */}
          <h1
            className="
    font-fontSpring
    text-white
    text-[64px]
    leading-[77px]
    font-normal
  "
          >
            Use <span className="text-[#EC4E02]">CASES</span> <br />
            <span className="whitespace-nowrap">
              THAT{" "}
              <span className="bg-[#EC4E02] text-white px-2">REDEFINE</span>
            </span>
            <br />
            INTERACTION<span className="text-[#EC4E02]">.</span>
          </h1>

          {/* Description */}
          <p
            className="
              font-gilroy 
              text-[20px] 
              leading-[24px] 
              text-white
              mt-8
              "
          >
            <span className="text-[#EC4E02]">Echobotics</span> adapts across
            industries — from gaming to customer support — enabling AI agents
            that listen, think, and act instantly. Whether it’s powering NPCs,
            virtual assistants, or AI companions, the possibilities are endless.
          </p>

          {/* CTA Button */}
          <button
            className="
              group
              relative
              flex items-center justify-between
              w-[163px] h-[55px]
              rounded-[10px]
              border border-[#EC4E02]
              bg-gradient-to-br from-[#EC4E02] to-transparent
              drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
              px-5
              text-white
              font-gilroy
              text-[16px]
              leading-[34px]
              transition-all
              duration-300
              hover:opacity-90
              mt-10
            "
          >
            <span>View All</span>
            <span
              className="
                flex items-center justify-center
                w-[41px] h-[41px]
                bg-[#EC4E02]
                rounded-[5px]
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[20px] h-[20px] rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Use case cards (right side) */}
        <div className=" flex gap-6 mx-10">
          <UseCaseCard1 />
          <UseCaseCard2 />
          <UseCaseCard3 />
        </div>
      </div>
    </>
  );
};

export default UseCase;
