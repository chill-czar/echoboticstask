import React from "react";
import Image from "next/image";
import Sun from "@/assets/Images/sun.png";
import Blur from "@/assets/Images/Blur.png";

const SunBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Sun layer with mask */}
      <div
        className="absolute w-[788px] h-[1327px] left-[1134px] top-[-9px] rotate-180 opacity-100 mix-blend-screen lg:w-[788px] lg:h-[1327px] md:w-[500px] md:h-[850px] md:left-auto md:right-[-200px] sm:w-[400px] sm:h-[600px] sm:right-[-100px]"
        style={{
          maskImage: `url(${Blur.src})`,
          maskRepeat: "no-repeat",
          maskSize: "cover",
          maskPosition: "center",
        }}
      >
        <Image
          src={Sun}
          alt="Sun background"
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
      </div>
    </div>
  );
};

export default SunBackground;
