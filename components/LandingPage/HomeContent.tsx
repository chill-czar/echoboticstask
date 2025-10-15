import Image from "next/image";
import DecorativeElement from "@/assets/svg/HeadingDecorative.svg";

const HomeContent = () => {
  return (
    <div className="relative max-w-[1144px] w-full mx-auto text-center md:text-left mt-20 sm:mt-28 lg:absolute lg:left-[50px] lg:top-1/2 lg:-translate-y-1/2">
      {/* Heading Tagline */}
      <h3 className="font-gilroy font-normal text-[18px] sm:text-[22px] md:text-[24px] leading-[29px] tracking-[0.18em] text-[var(--color-primary)] opacity-80 mb-4">
        BEST AGENTIC AI
      </h3>

      {/* Main Title */}
      <h1 className="text-white font-fontSpring text-[48px] sm:text-[72px] md:text-[90px] lg:text-[108px] leading-[1.05]">
        {/* Line 1 */}
        <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-6 lg:gap-8">
          <span className="font-fontSpring">Making</span>
          <Image
            src={DecorativeElement}
            alt="Decorative underline"
            className="w-[100px] sm:w-[160px] md:w-[220px] lg:w-auto h-[60px] sm:h-[75px] md:h-[90px] object-contain -mb-4"
            priority
          />
        </div>

        {/* Line 2 */}
        <div className="flex flex-wrap justify-center md:justify-start items-baseline gap-4 sm:gap-6 mt-4 relative">
          <span className="relative inline-block">
            <span className="font-NoContinue relative z-10">conversations</span>
            <RectangleElement />
          </span>
          <span className="font-fontSpring">with</span>
        </div>

        {/* Line 3 */}
        <div className="flex flex-wrap justify-center md:justify-start items-baseline gap-4 sm:gap-6 mt-4">
          <span className="font-Averno">AI</span>
          <span className="font-fontSpring text-[var(--color-primary)]">
            feel
          </span>
          <span className="font-gilroy-heavy">Real</span>
          <span className="font-fontSpring text-[var(--color-primary)]">.</span>
        </div>
      </h1>

      {/* Description */}
      <p className="mt-6 md:mt-8 font-gilroy text-white font-light text-[16px] sm:text-[20px] md:text-[24px] leading-[1.4] sm:leading-[1.5] max-w-[95%] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1108px] mx-auto md:mx-0">
        <span className="text-[var(--color-primary)]">Echobotics</span> is
        redefining <span className="text-[var(--color-primary)]">human–AI</span>{" "}
        interaction with real-time voice, chat, and lip-sync technology. Our AI
        doesn&apos;t just respond — it listens, talks, and connects like a{" "}
        <span className="text-[var(--color-primary)]">real</span> assistant.
      </p>

      {/* Explore Button */}
      <button className="group relative flex items-center justify-between w-[150px] sm:w-[163px] h-[50px] sm:h-[55px] rounded-[10px] border border-[var(--color-border-primary)] bg-gradient-to-br from-[var(--color-primary)] to-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] px-5 text-white font-gilroy text-[14px] sm:text-[16px] leading-[34px] transition-all duration-300 hover:opacity-90 mt-8 md:mt-10 mx-auto md:mx-0">
        <span>Explore</span>
        <span className="flex items-center justify-center w-[36px] sm:w-[41px] h-[36px] sm:h-[41px] bg-[var(--color-primary)] rounded-[5px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  );
};

const RectangleElement = () => {
  return (
    <div className="absolute -left-[13px] top-[12px] w-[220px] sm:w-[400px] md:w-[600px] lg:w-[708.96px] h-[40px] sm:h-[70px] md:h-[90px] lg:h-[112.2px] pointer-events-none">
      <div className="absolute box-border w-[98%] h-[90%] left-[4px] top-[3px] border border-[var(--color-border-primary)] shadow-[0_0_100px_rgba(var(--color-primary-rgb),0.2)]" />
      <div className="absolute w-[8px] h-[8px] left-0 top-0 bg-[var(--color-primary)]" />
      <div className="absolute w-[8px] h-[8px] right-0 top-0 bg-[var(--color-primary)]" />
      <div className="absolute w-[6px] h-[6px] left-[1px] bottom-0 bg-[var(--color-primary)]" />
      <div className="absolute w-[8px] h-[8px] right-0 bottom-0 bg-[var(--color-primary)]" />
    </div>
  );
};

export default HomeContent;
