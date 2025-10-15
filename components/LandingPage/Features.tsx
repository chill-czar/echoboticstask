import React from "react";
import FeatureCard from "./FeatureCard";
import f1 from "@/assets/svg/Feature1.svg";
import f2 from "@/assets/Images/Feature2.png";
import f3 from "@/assets/Images/Feature3.png";
import f4 from "@/assets/Images/Feature4.png";
import f5 from "@/assets/svg/Feature5.svg";

const Features = () => {
  const featureList = [
    {
      icon: f1,
      title: "Real-Time Conversations",
      description:
        "Conversations flow naturally with zero delays, making interactions with EchoBotics feel just like talking to a human.",
    },
    {
      icon: f2,
      title: "Voice Chat",
      description:
        "Engage in lifelike voice chats where AI listens, responds, and adapts, while also allowing seamless switch to text.",
    },
    {
      icon: f3,
      title: "Low Latency",
      description:
        "With a response time of under 330ms, EchoBotics delivers near-instant communication that feels effortless.",
    },
    {
      icon: f4,
      title: "Multi-Language",
      description:
        "Communicate effortlessly in multiple languages, breaking barriers and connecting with audiences worldwide.",
    },
    {
      icon: f5,
      title: "Scalable & Secure",
      description:
        "Built with scalability and top-tier security, EchoBotics can handle thousands of users while keeping data safe.",
    },
  ];

  return (
    <section className="relative w-full flex flex-col justify-center bg-transparent py-20 sm:py-24 md:py-[200px] px-4 sm:px-10 md:px-20">
      {/* Header */}
      <div className="mb-12 md:mb-16 relative">
        <h4 className="text-[var(--color-primary)] text-lg md:text-xl font-gilroy mb-2 leading-none tracking-[0.22em] uppercase">
          Features
        </h4>

        <h1 className="text-white font-fontSpring text-[40px] sm:text-[55px] md:text-[70px] leading-tight md:leading-[1.2]">
          Experience the{" "}
          <span className="text-[var(--color-primary)]">Power</span> of <br />
          Real AI{" "}
          <span className="text-[var(--color-primary)]">Conversations</span>.
        </h1>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-10">
        {featureList.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
