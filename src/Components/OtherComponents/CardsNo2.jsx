import React from "react";
import KnowMore from "./KnowMore";

const CardsNo2 = ({ bgImg, hoverBgImg, iconImg, hData, pData }) => {
  return (
    <div
      className={`bg-[url(${bgImg})] bg-no-repeat w-full max-h-[300px] cursor-pointer hover:scale-105 transition-all duration-100 hover:bg-[url(${hoverBgImg})] p-10 space-y-4 border-2 hover:shadow-2xl bg-white`}
    >
      <img src={`${iconImg}`} className="rounded-full bg-lightBlue w-12 h-12" />
      <h3 className="font-mullish font-bold text-deepBlue leading-[1.2] text-[1.375rem]">
        {hData}
      </h3>
      <p className="text-gray-400">{pData}</p>
      <KnowMore />
    </div>
  );
};

export default CardsNo2;
