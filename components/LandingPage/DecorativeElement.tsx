import React from "react";

const DecorativeElement = () => {
  return (
    <div className="inline-block ml-4 w-[526.8px] h-[96px] rounded-[36px] overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:"url('/assets/Images/decorativeElement.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-[rgba(var(--color-primary-rgb),0.5)]" />

      <div className="absolute inset-0 backdrop-blur-[31.8px]" />
    </div>
  );
};

export default DecorativeElement;
