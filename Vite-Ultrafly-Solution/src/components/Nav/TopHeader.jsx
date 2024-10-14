import React from "react";
import india from "../../images/hero/india.png";
import usa from "../../images/hero/united-states.png";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

function TopHeader() {
  return (
    <section className="flex items-center gap-1 md:gap-3 lg:gap-5 bg-[#346aa9] text-white m-0 py-2 px-2 sm:px-10 md:px-14 text-[8px] sm:text-[12px] md:text-[14px]">
      <div className="grow">
        <i class="fa-solid fa-envelope pr-1 md:pr-2"></i>
        <a href="mailto:info@ultraflysolutions.com">
          info@ultraflysolutions.com
        </a>
      </div>
      <div className="">
        <img src={usa} alt="usa" className=" inline-block lg:w-6 w-3 md:w-6" />{" "}
        <a href="tel:+1562 5219684">+1 562 521 9684</a>
      </div>
      <div>
        <img
          src={india}
          alt="india"
          className=" inline-block lg:w-6 w-3 md:w-6"
        />
        <a href="tel:+919150001089">+91 91500 01089</a>
        <span className="mx-1 sm:mx-2">{"|"}</span>
        <a href="tel:+919150001090">+91 91500 01090</a>
      </div>
      <div className="hidden md:block">
        <Link to="/contact-us">
          <button
            class="flex justify-center gap-2 items-center mx-auto shadow-xl text-gray-50 backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#eca918] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-1 overflow-hidden border-2 rounded-full group"
            type="submit"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              class="w-6 h-6 justify-end group-hover:rotate-90 bg-white group-hover:bg-[#346aa9] text-gray-50 ease-linear duration-300 rounded-full p-1 rotate-45"
            >
              <path
                class="fill-black group-hover:fill-white"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default TopHeader;
