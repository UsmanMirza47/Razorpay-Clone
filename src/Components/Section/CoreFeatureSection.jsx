import React from "react";
import CardNo3 from "../OtherComponents/CardNo3";

const CoreFeatureSection = () => {
  return (
    <section className="w-full bg-[url(/core-features-sectionBg.svg)] bg-no-repeat bg-cover bg-center mt-14 relative pt-48 pb-48">
      <div className="relative w-11/12 mx-auto pt-4 max-w-[1080px]">
        <h2 className="font-mullish font-bold text-2xl text-start md:text-center text-white mt-8 md:mt-0">
          Features
        </h2>
        <div className="w-6 h-1 bg-greenLight mr-auto md:mx-auto mt-4 mb-6"></div>
        <p className="font-mullish font-bold text-lg text-start md:text-center text-white w-full md:w-[450px] mr-auto md:mx-auto">
          Empower your business with all the right tools to accept online
          payments and provide the best
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] mt-8">
          {/* card1  */}
          <CardNo3 />

          {/* card2  */}
          <CardNo3 />
          {/* card3  */}
          <CardNo3 />
          {/* card4  */}
          <CardNo3 />
          {/* card5  */}
          <CardNo3 />
          {/* card6  */}
          <CardNo3 />
          {/* card7  */}
          <CardNo3 />
          {/* card8  */}
          <CardNo3 />
        </div>
      </div>
    </section>
  );
};

export default CoreFeatureSection;
