import React from "react";
import CardsNo2 from "../OtherComponents/CardsNo2";

const CardLightBlueSection = () => {
  return (
    <section className="w-full relative">
      <img
        className="w-[233px] h-[167px] absolute -top-16 left-[550px] inline-block -z-10"
        loading="lazy"
        src="data:image/png;base64,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"
        alt=""
      />
      <img
        className="w-[233px] h-[167px] absolute -top-16 right-48 inline-block rotate-180 -z-10"
        loading="lazy"
        src="data:image/png;base64,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"
        alt=""
      />
      <div className="w-10/12 mx-auto max-w-[1080px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 mt-16">
        {/* item-1  */}
        <div className="w-full flex items-center">
          <h2 className="text-deepBlueHead font-mullish text-5xl font-bold leading-[3.375rem]">
            New in the <span className="text-lightBlue">Razorpay</span> Product
            Suite
          </h2>
        </div>
        {/* box-1  */}

        <CardsNo2
          bgImg={"./instant-settlement-bg.svg"}
          hoverBgImg={"./instant-settlement-bghover.svg"}
          iconImg={"./instant-settlement-icon.svg"}
          hData={"Instant settlements"}
          pData={
            "Settle your customer payments within 10 seconds as soon your account is activated, even during holidays."
          }
        />
        {/* box-2  */}

        <CardsNo2
          bgImg={"./upi-autopay-bg.svg"}
          hoverBgImg={"./upi-autopay-hoverbg.svg"}
          iconImg={"./autopay-icon.svg"}
          hData={"UPI Autopay"}
          pData={"Allow customers to set up recurring payments using UPI Apps."}
        />
        {/* box-3  */}

        <CardsNo2
          bgImg={"./instant-settlement-bg.svg"}
          hoverBgImg={"./instant-settlement-bghover.svg"}
          iconImg={"./instant-settlement-icon.svg"}
          hData={"Instant settlements"}
          pData={
            "Settle your customer payments within 10 seconds as soon your account is activated, even during holidays."
          }
        />
        {/* box-4  */}

        <CardsNo2
          bgImg={"./instant-settlement-bg.svg"}
          hoverBgImg={"./instant-settlement-bghover.svg"}
          iconImg={"./instant-settlement-icon.svg"}
          hData={"Instant settlements"}
          pData={
            "Settle your customer payments within 10 seconds as soon your account is activated, even during holidays."
          }
        />
        {/* box-5  */}

        <CardsNo2
          bgImg={"./instant-settlement-bg.svg"}
          hoverBgImg={"./instant-settlement-bghover.svg"}
          iconImg={"./instant-settlement-icon.svg"}
          hData={"Instant settlements"}
          pData={
            "Settle your customer payments within 10 seconds as soon your account is activated, even during holidays."
          }
        />
      </div>
    </section>
  );
};

export default CardLightBlueSection;
