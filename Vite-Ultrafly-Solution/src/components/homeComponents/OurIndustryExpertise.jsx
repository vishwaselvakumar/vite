import React from "react";
import bank from "../../images/Company/bank.png";
import constructions from "../../images/Company/construction.png";
import heart from "../../images/Company/heart.png";
import insurance from "../../images/Company/insurance.png";
import lending from "../../images/Company/lending.png";
import logistics from "../../images/Company/logistics.png";
import manufacturing from "../../images/Company/manufacturing.png";
import oil from "../../images/Company/oil.png";
import professional from "../../images/Company/professional.png";
import retail from "../../images/Company/retail.png";
import savings from "../../images/Company/savings.png";
import telecoms from "../../images/Company/telecom.png";
import review from "../../images/features/review.jpg";
import justdial from "../../images/technologies/justdial review.png";
import glassdoor from "../../images/technologies/glassdoor.png";

const industries = [
  { name: "HealthCare", img: heart },
  { name: "Banking", img: bank },
  { name: "Insurance", img: insurance },
  { name: "Lending", img: lending },
  { name: "Investment", img: savings },
  { name: "Retail", img: retail },
  { name: "Manufacturing", img: manufacturing },
  { name: "Professional Services", img: professional },
  { name: "Oil and Gas", img: oil },
  { name: "Telecom", img: telecoms },
  { name: "Logistics and Transportation", img: logistics },
  { name: "Engineering and Construction", img: constructions },
];

const OurIndustryExpertise = () => {
  return (
    <div className="bg-gray-100  py-14">
      <h1 className="text-center font-bold text-xl sm:text-2xl md:text-4xl mt-4 b">
        Our Industry Expertise
      </h1>
      <h4 className="text-lg text-center mb-6 mt-2">
        We’ve excelled our experience in a wide range of industries to bring
        valuable insights and provide our clients with truly beneficial
        solutions.
      </h4>
      <div
        className="grid grid-cols-4 w-[80%] gap-4 max-[900px]:grid-cols-1"
        style={{
          padding: "1%",
          marginLeft: "10%",
          marginRight: "10%",
          fontWeight: "bold",
        }}
      >
        {industries.map((industry, index) => (
          <div
            key={index}
            className="group relative w-full h-32 rounded-lg bg-gray-50  p-5 border border-gray-50 flex flex-col lg:flex-row items-center transition-transform duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 mb-3"
          >
            <img
              src={industry.img}
              alt={industry.name}
              className="w-14 h-14 object-cover mr-4"
            />
            <div className="flex flex-col flex-grow">
              <p className="text-black text-m font-semibold text-left">
                {industry.name}
              </p>
            </div>

            {/* Hovering button (More Info) */}
            <button className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[125%] w-[60%] rounded-lg border-none bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 transition-all ease-out duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2">
              More info
            </button>
          </div>
        ))}
      </div>

      <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl mt-8">
        Reviews
      </h1>
      <div className="grid grid-cols-3 mt-4 gap-4 px-6 md:px-10 lg:px-20">
        <div
          className="h-20 md:h-36 lg:h-48 p-1 md:p-4 shadow-2xl rounded-lg overflow-hidden w-full"
          data-aos="fade-up"
        >
          <a
            href="https://tinyurl.com/286fj3rn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={review}
              alt="Review"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
        <div
          className="h-20 md:h-36 lg:h-48 p-1 md:p-4 shadow-2xl rounded-lg overflow-hidden w-full"
          data-aos="fade-down"
        >
          <a
            href="https://tinyurl.com/286fj3rn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={justdial}
              alt="Review"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
        <div
          className="h-20 md:h-36 lg:h-48 p-1 md:p-4 shadow-2xl rounded-lg overflow-hidden w-full"
          data-aos="fade-up"
        >
          <a
            href="https://tinyurl.com/ydrn6tv3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={glassdoor}
              alt="Review"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurIndustryExpertise;
