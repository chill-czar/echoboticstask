import React from "react";
import UseCaseCard1 from "./UseCaseCard1";
import UseCaseCard2 from "./UseCaseCard2";
import UseCaseCard3 from "./UseCaseCard3";

const UseCase = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-start px-6 md:px-10 lg:px-[50px] pt-20 lg:pt-[100px] gap-10 lg:gap-[80px] max-w-[1400px] mx-auto">
      {/* LEFT TEXT SECTION */}
      <div className="w-full lg:w-[538px] flex-shrink-0">
        <h4 className="font-gilroy text-[var(--color-primary)] text-[18px] uppercase tracking-[0.22em] leading-[22px]">
          Use Cases
        </h4>

        <h1 className="font-fontSpring text-white text-[48px] md:text-[64px] leading-[60px] md:leading-[77px] font-normal mt-4">
          Use <span className="text-[var(--color-primary)]">CASES</span> <br />
          <span className="whitespace-nowrap">
            THAT{" "}
            <span className="bg-[var(--color-primary)] text-white px-2">
              REDEFINE
            </span>
          </span>
          <br />
          INTERACTION<span className="text-[var(--color-primary)]">.</span>
        </h1>

        <p className="font-gilroy text-[18px] md:text-[20px] leading-[24px] text-white mt-8">
          <span className="text-[var(--color-primary)]">Echobotics</span> adapts
          across industries — from gaming to customer support — enabling AI
          agents that listen, think, and act instantly. Whether it&apos;s powering
          NPCs, virtual assistants, or AI companions, the possibilities are
          endless.
        </p>

        <button className="group relative flex items-center justify-between w-[163px] h-[55px] rounded-[10px] border border-[var(--color-border-primary)] bg-gradient-to-br from-[var(--color-primary)] to-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] px-5 text-white font-gilroy text-[16px] leading-[34px] transition-all duration-300 hover:opacity-90 mt-10">
          <span>View All</span>
          <span className="flex items-center justify-center w-[41px] h-[41px] bg-[var(--color-primary)] rounded-[5px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[20px] h-[20px] -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>

      {/* RIGHT CARD SECTION */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-6 mx-auto lg:mx-10">
        <UseCaseCard1 />
        <UseCaseCard2 />
        <UseCaseCard3 />
      </div>
    </section>
  );
};

export default UseCase;
