import React from "react";

const CTASection = () => {
  return (
    <section className="bg-[url(/CTABg.svg)] w-full h-full bg-no-repeat bg-cover relative ctaSection min-h-[510px]">
      {/* main content box */}
      <div className="w-11/12 max-w-[1080px] relative flex flex-row items-center mx-auto justify-between space-x-20 pt-16">
        {/* left part */}
        <div className="flex flex-col gap-5 mt-12 max-w-[600px]">
          <h2 className="font-mullish font-bold text-2xl text-white">
            Supercharge your business with Razorpay
          </h2>
          <div className="w-6 h-1 bg-greenLight"></div>
          <p className="font-mullish text-white">
            Sign up now to experience the future of payments and offer <br />
            your customers the best checkout experience.
          </p>

          <ul className="flex flex-row flex-wrap gap-x-11 text-white gap-y-3">
            <li className="font-mullish text-white flex flex-row">
              <i data-feather="check" className="text-greenLight"></i>
              <span>Quick Onboarding </span>
            </li>
            <li className="font-mullish text-white flex flex-row">
              <i data-feather="check" className="text-greenLight"></i>
              <span>Access to entire product suite </span>
            </li>
            <li className="font-mullish text-white flex flex-row">
              <i data-feather="check" className="text-greenLight"></i>
              <span>API access </span>
            </li>
            <li className="font-mullish text-white flex flex-row">
              <i data-feather="check" className="text-greenLight"></i>
              <span>24x7 support </span>
            </li>
          </ul>

          <button className="min-w-[32px] font-mullish text-sm font-bold bg-white text-lightBlue300 border flex rounded-sm items-center hover:text-lightBlue500 transition-all duration-200 py-3 px-4 place-self-start">
            Sign Up
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              className="w-[14px] h-[14px] ml-3"
            >
              <path
                fill="currentColor"
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              ></path>
            </svg>
          </button>
        </div>

        {/* right side wali image */}
        <img
          src="./ctaImg.svg"
          alt=""
          width="240px"
          height="282px"
          className="mt-16 pt-3 hidden lg:block"
        />
      </div>
    </section>
  );
};

export default CTASection;
