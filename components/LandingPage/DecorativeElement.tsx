import React from "react";

const DecorativeElement = () => {
  return (
    <div className="inline-block ml-4 w-[526.8px] h-[96px] rounded-[36px] overflow-hidden relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/public/images/decorativeElement.jpg')" }}
      />

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-[#EC4E0280]" />

      {/* Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-[31.8px]" />
    </div>
  );
};

export default DecorativeElement;
