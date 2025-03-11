import React from "react";

const TestimonialSection = () => {
  return (
    <section className="relative">
      <div className="w-11/12 max-w-[1300px] mx-auto relative py-20">
        <img
          src="./feature-section1-dottedrows.png"
          className="absolute w-[200px] top-[8rem] left-[2rem] -z-10"
        />

        <h2 className="font-mullish font-extrabold text-2xl text-deepBlueHead text-center">
          An Experience <br />
          People Love to Talk About
        </h2>
        <div className="w-6 h-1 bg-greenLight mx-auto my-4"></div>

        {/* left button  */}
        <button className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute left-0 top-1/2 flex justify-center items-center">
          <div className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
          </div>
        </button>

        {/* right button  */}
        <button className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute right-0 top-1/2 flex justify-center items-center">
          <div className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </div>
        </button>

        {/* main content  */}
        <div className="flex flex-col xl:flex-row max-w-[960px] items-center mx-auto my-20 space-x-[10rem]">
          {/* left image  */}
          <img
            src="./testimonial.jpg"
            alt=""
            height="320px"
            width="320px"
            className="rounded-xl"
          />

          {/* riught part */}
          <div className="max-w-[400px] flex flex-col">
            <img
              src="./quotes.svg"
              alt=""
              width="35px"
              height="40px"
              className="-mb-2 xl:order-1"
            />
            <p className="font-mullish text-3xl font-extralight xl:order-1">
              Readymade Closed Wallet Solution For Quick Refunds
            </p>
            <a href="#" className="text-grayText italic underline xl:order-1">
              Learn More
            </a>
            <p className="font-mullish font-extrabold text-2xl -order-1 xl:order-1">
              Lorem Ipsum
            </p>
            <p className="font-mullish font-medium xl:order-1">
              CEO, XYZ Engineering Company
            </p>
            <img
              src="./fake-company-logo.png"
              alt=""
              width="80px"
              height="40px"
              className="xl:order-1"
            />
          </div>
        </div>

        {/* 6 dot wala div */}
        <div className="w-full flex flex-row mx-auto space-x-2 justify-center">
          {/* dot 1 */}
          <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

          <div className="h-[10px] w-[10px] bg-lightBlue300 rounded-full"></div>

          <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

          <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

          <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>

          <div className="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
