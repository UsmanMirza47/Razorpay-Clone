import React from "react";
import List from "./List";

const Navbar = () => {
  return (
    <nav className="bg-deepBlue w-full">
      <div className="relative w-10/12 max-w-[1080px] mx-auto flex items-center justify-between">
        {/* logo  */}
        <a href="" className="cursor-pointer py-7 pr-7">
          <img
            src="./62cc1dc0150d5de9a3dad5fc.png"
            alt=""
            width="125px"
            height="30px"
          />
        </a>

        {/* List  */}
        <ul className="hidden xl:flex gap-6">
          {/* Payments  */}
          <List data={"Paymensts"} />

          {/* Banking  */}
          <List data={"Banking"} />

          {/* Corporate Card  */}
          <List data={"Corporate Card"} />

          {/* Payroll  */}
          <List data={"Payroll"} />

          {/* Resources  */}
          <List data={"Resources"} />

          {/* Support  */}
          <List data={"Support"} />

          {/* Pricing  */}
          <List data={"Pricing"} />
        </ul>

        <div className="flex gap-6 items-center">
          <img src="./27123.jpg" className="w-7 h-5" />
          <button className="py-3 px-5 font-mullish text-white border border-lightBlue border-solid rounded-sm text-sm font-bold">
            Log in
          </button>
          <button className="py-3 px-4 font-mullish text-sm rounded-sm bg-white text-lightBlue300 border transition-all duration-200 hover:text-lightBlue500 font-bold hidden xl:flex items-center">
            Sign Up
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
