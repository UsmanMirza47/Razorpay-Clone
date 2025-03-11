import React from "react";
import Smalldiv from "../OtherComponents/Smalldiv";
import SignUpNow from "../OtherComponents/SignUpNow";

const HeroSection = () => {
  return (
    <section className="relative bg-deepBlue w-full">
      <div className="flex flex-col lg:flex-row justify-between items-center w-10/12 max-w-[1080px] mx-auto">
        {/* left part  */}
        <div className="space-y-8">
          <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-white">
            Power your finance, grow your business
          </h1>
          <Smalldiv />
          <p className="font-mullish text-[18px] leading-7 text-white opacity-70">
            Accept payments from customers. Autmate payouts to vendors &
            employees. Never run out of working capital.
          </p>
          <SignUpNow />
        </div>
        {/* right part  */}
        <img src="./hero-illustration.jpg" className="w-full max-w-[680px]" />
      </div>

      {/* Triangular Shape  */}
      <div className="w-full absolute left-0 right-0">
        <img src="./hero-shape.svg" className="w-full object-fill" />
      </div>
    </section>
  );
};

export default HeroSection;
