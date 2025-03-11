import React from "react";
import KnowMore from "./KnowMore";

const Cards = (props) => {
  const { src, headData, pData, bgColor, hColor, pColor } = props;
  return (
    <div className="w-full min-h-[15rem] relative cursor-pointer group">
      <img
        src={`${src}`}
        className="bg-lightBlue rounded-full absolute right-3 top-3 w-12 h-12"
      />
      <svg
        viewBox="0 0 349.32501220703125 225"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="stroke-1 stroke-[#818597] h-full w-full absolute z-[10] transition-all duration-200 featureCart"
        style={{ strokeOpacity: "0.15" }}
      >
        <path
          d="m 0 6
          a 6 6 0 0 1 6 -6
        h 250.32501220703125
        a 16 16 0 0 1 11 5
        l 77 77
        a 16 16 0 0 1 5 11
        v 126
        a 6 6 0 0 1 -6 6
        h -337.32501220703125
        a 6 6 0 0 1 -6 -6
        z"
          fill={bgColor}
          className="group-hover:filter group-hover:drop-shadow-2xl"
        ></path>
      </svg>

      {/* Content  */}
      <div className="z-[10] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8 group-hover:shadow-lg transition-all duration-200">
        {/* text para  */}
        <div>
          <h3
            className={`font-mullish font-bold text-${hColor} leading-[1.2] text-[1.375rem]`}
          >
            {headData}
          </h3>
          <p className={`font-mullish text-${pColor} mt-6`}>{pData}</p>
        </div>
        {/* hyperlink  */}
        <KnowMore />

        <img
          src="./features-wave.svg"
          className="absolute bottom-0 right-0 hidden group-hover:inline-block transition-all duration-200 z-100"
        />
      </div>
    </div>
  );
};

export default Cards;
