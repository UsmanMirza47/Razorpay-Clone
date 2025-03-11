import React from "react";
import Cards from "../OtherComponents/Cards";

const CardSection = () => {
  return (
    <section className="">
      {/* Main Card Bod  */}
      <div className="w-4/5 max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {/* Box1  */}
        <Cards
          src={"./payment-link-icon.svg"}
          headData={"Payment Links"}
          pData={
            "Share payment link via an email, SMS, messenger, chatbot etc.and get paid immediatly"
          }
          bgColor={"#fff"}
          hColor={"deepBlue"}
          pColor={"grayBlue"}
        />
        {/* Box2  */}
        <Cards
          src={"./payment-pages-icon.svg"}
          headData={"Payment Pages"}
          pData={
            "Take your store online instantly with zero coding. Accept international & domestic payments."
          }
          bgColor={"#fff"}
          hColor={"deepBlue"}
          pColor={"grayBlue"}
        />
        {/* Box3  */}
        <Cards
          src={"./payment-button.svg"}
          headData={"Payment Buttons"}
          pData={
            "Create. Copy & Collect With Payment Button. Collect one time or subscription payments & more."
          }
          bgColor={"#fff"}
          hColor={"deepBlue"}
          pColor={"grayBlue"}
        />
        {/* Box4  */}
        <Cards
          src={"./subscriptions-icon.svg"}
          headData={"Subscriptions"}
          pData={
            "Subscription plans with automated recurring transactions on various payment modes."
          }
          bgColor={"#fff"}
          hColor={"deepBlue"}
          pColor={"grayBlue"}
        />
        {/* Box5  */}
        <Cards
          src={"./route-icon.svg"}
          headData={"Route"}
          pData={
            "Split incoming payments automatically to vendor's accounts, manage marketplace money flow..."
          }
          bgColor={"#fff"}
          hColor={"deepBlue"}
          pColor={"grayBlue"}
        />
        {/* Box6  */}
        <Cards
          src={"./smart-collect-icon.svg"}
          headData={"Smart Collect"}
          pData={
            "automatically reconcile incoming NEFT, RTGS, IMPS, UPI payments using Customer Identifiers & UPI-IDs"
          }
          bgColor={"#fff"}
          hColor={"deepBlue"}
          pColor={"grayBlue"}
        />
      </div>
    </section>
  );
};

export default CardSection;
