import React from "react";
import Home from "@/components/LandingPage/Home";
import OurTrustedPartners from "@/components/LandingPage/OurTrustedPartners";
import UseCase from "@/components/LandingPage/UseCase";
import AvatarExperience from "@/components/LandingPage/AvatarExperience";
import Features from "@/components/LandingPage/Features";
import Footer from "@/components/LandingPage/Footer";
import SunBackground from "@/components/LandingPage/SunBg";
import BookDemo from "@/components/LandingPage/BookDemo";

const LandingPage = () => {
  return (
    <div className="pb-15 overflow-hidden bg-[var(--color-bg-primary)]">
      <div className="relative overflow-hidden">
        <SunBackground />

        <div className="relative z-10">
          <Home />
          <OurTrustedPartners />
        </div>
      </div>

      <UseCase />
      <AvatarExperience />
      <Features />
      <BookDemo />
      <Footer />
    </div>
  );
};

export default LandingPage;
