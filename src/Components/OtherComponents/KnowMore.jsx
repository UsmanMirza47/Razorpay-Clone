import React from "react";

const KnowMore = () => {
  return (
    <div className="flex items-center cursor-pointer w-fit text-nowrap group/first">
      <a
        href="#"
        className="font-mullish font-bold text-lightBlue500 group-hover/first:text-grayBlue transition-all duration-200"
      >
        Know More
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 text-lightBlue500 group-hover/first:text-grayBlue transition-all duration-200"
      >
        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
      </svg>
    </div>
  );
};

export default KnowMore;
