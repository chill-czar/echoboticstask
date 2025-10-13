import React from "react";
import FeatureCard from "./FeatureCard";
import f1 from "@/public/Feature1.svg";
import f2 from "@/public/Images/Feature2.png";
import f3 from "@/public/Images/Feature3.png";
import f4 from "@/public/Images/Feature4.png";
import f5 from "@/public/Feature5.svg";

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
    <section className="relative w-full h-screen justify-center flex flex-col py-20 bg-transparent">
      {/* Headings */}
      <div className="mb-16 mx-20 relative">
        {/* Subheading */}
        <h4 className="text-[#EC4E02] text-xl font-gilroy mb-2 leading-0">Features</h4>

        {/* Main Heading */}
        <h1 className="text-white font-fontSpring text-[70px] leading-20">
          Experience the <span className="text-[#EC4E02]">Power</span> of <br />
          Real AI <span className="text-[#EC4E02]">Conversations</span>.
        </h1>
      </div>

      {/* Features Grid */}
      <div className="flex flex-wrap justify-center gap-10">
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
