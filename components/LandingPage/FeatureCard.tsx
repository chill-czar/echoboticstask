import Image, { StaticImageData } from "next/image";
import React from "react";

interface FeatureCardProps {
  icon: StaticImageData | string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="relative w-[304px] h-[204px] bg-transparent flex flex-col justify-start">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-[50px] border border-[var(--color-border-subtle)] rotate-90"></div>

      <div className="flex flex-col gap-4">
        <div className="w-[60px] h-[60px] bg-[var(--color-bg-overlay)] border border-[var(--color-border-primary)] rounded-[10px] flex items-center justify-center">
          <Image
            src={icon}
            alt={title}
            className="w-[40px] h-[40px] object-contain brightness-0 invert"
          />
        </div>

        <div>
          <h2 className="text-[22px] text-white font-gilroy-bold mb-2">
            {title}
          </h2>
          <p className="text-[var(--color-text-tertiary)] text-[16px] leading-[22px] font-gilroy-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
