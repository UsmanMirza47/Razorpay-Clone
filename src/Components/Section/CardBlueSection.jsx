import React from "react";
import Cards from "../OtherComponents/Cards";
import Check from "../OtherComponents/Check";

const CardBlueSection = () => {
  return (
    <section className="bg-[url(./feature-section-2BG.svg)] bg-no-repeat bg-cover mt-14 pt-[10rem] pb-[350px] w-full">
      <div className="w-10/12 max-w-[1080px] mx-auto relative pt-4">
        <h2 className="font-mullish text-center text-2xl leading-[1.2] text-white font-bold hidden md:block">
          Explore Razorpay business Banking
        </h2>
        <h3 className="font-mullish text-[28px] leading-10 font-bold max-w-[500px] text-white block md:hidden">
          Explore
          <img
            src="./razorpayX.svg"
            loading="lazy"
            className="w-[168px] h-[32px] block"
          />
          <span className="text-greenLight">Business Banking</span>
        </h3>
        <div className="w-6 h-1 bg-greenLight mr-auto md:mx-auto mt-4 mb-16"></div>

        {/* main feature box  */}
        <div className="relative w-full min-h-[440px] flex flex-col">
          <img
            src="./x-flame-1.png"
            loading="lazy"
            className="absolute -left-[140px] -top-[142px] w-[200px]"
          />
          <img
            src="./x-flame-2.png"
            loading="lazy"
            className="absolute -right-[180px] top-[150px] w-[270px]"
          />

          {/* content box  */}
          <div className="w-full flex flex-row rounded-md relative p-8 border border-slate-700 bg-[#181c2e]">
            {/* Left Box  */}
            <div className="flex flex-col items-start gap-10 w-full">
              <h3 className="font-mullish text-[28px] leading-10 font-bold max-w-[500px] text-white">
                Manage your company's finances with
                <img
                  src="./razorpayX.svg"
                  loading="lazy"
                  className="w-[168px] h-[32px] hidden md:inline-block"
                />
                <span className="text-greenLight hidden md:inline-block">
                  Business Banking
                </span>
              </h3>

              {/* unordered List  */}
              <ul className="space-y-2 text-white">
                <li className="font-mullish flex items-center space-x-2">
                  <Check />
                  <span>Open a fully digital current account</span>
                </li>
                <li className="font-mullish flex items-center space-x-2">
                  <Check />
                  <span>Automate payables & compliment payments</span>
                </li>
                <li className="font-mullish flex items-center space-x-2">
                  <Check />
                  <span>Simplify and track spends with Corparate cards</span>
                </li>
                <li className="font-mullish flex items-center space-x-2">
                  <Check />
                  <span>View financial insights at a glance</span>
                </li>
              </ul>
              {/* button  */}
              <div className="flex flex-col-reverse md:flex-row items-start gap-4 md:gap-0 md:items-center w-full md:space-x-4 text-nowrap">
                <button className="relative bg-lightBlue w-full md:w-fit flex items-center justify-center md:justify-start text-white py-[14px] px-[18px] md:pr-[98px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200">
                  Sign Up
                  <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-[20px] h-[20px] -skew-x-[20deg]"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </div>
                </button>
                {/* hyperLink  */}
                <div className="flex items-center cursor-pointer text-nowrap group w-fit">
                  <a
                    href="#"
                    className="font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                  >
                    Know More
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                  >
                    <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* background Image  */}
            <img
              src="./buisness-banking.png"
              loading="lazy"
              className="max-w-[500] w-[300px] lg:w-[500px] hidden md:block"
            />
          </div>

          {/* Card Setion  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 my-14">
            {/* Box1  */}
            <Cards
              src={"./payment-link-icon.svg"}
              headData={"Payment Links"}
              pData={
                "Share payment link via an email, SMS, messenger, chatbot etc.and get paid immediatly"
              }
              bgColor={"#181c2e"}
              hColor={"white"}
              pColor={"white"}
            />
            {/* Box2  */}
            <Cards
              src={"./payment-pages-icon.svg"}
              headData={"Payment Pages"}
              pData={
                "Take your store online instantly with zero coding. Accept international & domestic payments."
              }
              bgColor={"#181c2e"}
              hColor={"white"}
              pColor={"white"}
            />
            {/* Box3  */}
            <Cards
              src={"./payment-button.svg"}
              headData={"Payment Buttons"}
              pData={
                "Create. Copy & Collect With Payment Button. Collect one time or subscription payments & more."
              }
              bgColor={"#181c2e"}
              hColor={"white"}
              pColor={"white"}
            />
          </div>

          {/* demo Box  */}
          <div className="hidden md:flex flex-col gap-y-4 lg:flex-row w-full md:items-center md:justify-between border border-slate-700 mb-24 p-6 relative rounded-md">
            <p className="text-white font-mullish text-xl">
              Check out the live demo to learn how RazorpayX works.
              <span className="font-bold">No sign-up required!</span>
            </p>
            <button className="relative bg-lightBlue w-full md:w-fit flex items-center justify-center md:justify-start text-white py-[14px] px-[18px] md:pr-[98px] rounded-md text-nowrap font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200">
              Check Out the Demo
              <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[20px] h-[20px] -skew-x-[20deg]"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardBlueSection;
