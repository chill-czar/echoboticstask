"use client";
import React from "react";
import Navbar from "./Navbar";
import HomeContent from "./HomeContent";

const Home = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden px-4 sm:px-8">
      <Navbar />
      <HomeContent />
      {/* <ScrollIndicator /> */}
    </section>
  );
};

export default Home;
