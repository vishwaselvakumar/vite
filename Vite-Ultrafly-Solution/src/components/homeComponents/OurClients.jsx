import React from "react";
import imageOne from "../../images/blog/back1.jpg";
import brahmmis from '../../images/Clients/brahmmis.jpg';
import makros from "../../images/Clients/makros.png";
import srimathe from "../../images/Clients/srimathe.png";
import exceed from "../../images/Clients/EXCEED LOGO.png";
import mgs from "../../images/Clients/mgs.jpg";

function OurClients() {
  // Array of client images
  const clientImages = [
    brahmmis,
    makros,
    srimathe,
    exceed,
    mgs,
  ];

  return (
    <section className="py-10 mt-5 w-full">
      <div data-aos="zoom-in">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-4xl">
          Our Clients
        </h1>
      </div>
      <div className="overflow-hidden mt-8">
        <div
          className="whitespace-nowrap animate-marquee"
          style={{
            display: 'inline-flex',
            animation: 'marquee 20s linear infinite',
          }}
        >
          {/* Repeat the client image elements for marquee effect */}
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="inline-block w-20 h-14 sm:w-36 sm:h-28 mx-2 hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
            >
              <img
                src={clientImages[index % clientImages.length]} // Cycle through the client images
                alt="Client"
                className="w-full h-full rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
}

export default OurClients;
