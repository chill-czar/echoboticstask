import Home from "@/components/LandingPage/Home";
import React from "react";
import OurTrustedPartners from '../components/LandingPage/OurTrustedPartners';
import UseCase from '../components/LandingPage/UseCase';
import AvatarExperience from '../components/LandingPage/AvatarExperience';
import Features from '../components/LandingPage/Features';
import BookADemoComponent from '../components/LandingPage/BookDemo';
import Footer from '../components/LandingPage/Footer';

const LandingPage = () => {
  return (
    <>
      <div className="bg-[#000000] pb-15">
        <Home />
        <OurTrustedPartners />
        <UseCase />
        <AvatarExperience />
        <Features />
        <BookADemoComponent />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
