import React, { useEffect } from "react";
import "./services.css";
import SocialMedias from "./SocialMedias";
import { Link } from "react-router-dom";
import gif1 from "../../images/our_services/software_dev/software-development{}-gif.gif";
import webImg from "../../images/who-we-are/web.png";
import softimg from "../../images/our_services/websiteImg/software-img.jpg";
import ScrollToTop from "../../components/ScrollToTop";
import { Helmet, HelmetProvider } from "react-helmet-async";
import web_bg from '../../images/our_services/mobileImgs/mobile_bg.webp'

function Website() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Website Development | Ultrafly Solutions </title>
          <meta
            name="description"
            content=" Professional website development services by Ultrafly Solutions. We build responsive and user-friendly websites tailored to your business needs. "
          />
          <meta
            name="keywords"
            content="website development, responsive websites, web design, Ultrafly Solutions"
          />
        </Helmet>
      </HelmetProvider>
      <div className="mt-[20px]">
        {/* banner */}
        <div className="h-60 w-screen flex  items-center justify-center flex-col gap-4 max-sm:px-10" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${web_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }} >
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-semibold">
            Professional Website Development Services
          </h1>
          <Link to="/contact-us" >
            <button className=" text-black bg-white border border-white py-2 px-4 rounded-lg transition ease-in-out delay-150 duration-300 hover:bg-transparent hover:text-white ">
              Join with us
            </button>
          </Link>
        </div>

        <div className=" ">
          {/* first */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14">
            <div>
              <img
                src={gif1}
                alt="Tools Used for Website Development at UltraFly Solutions"
                className="mx-auto w-full md:w-2/4 lg:w-full"
              />
            </div>
            <div className="lg:col-span-2 grid gap-5" data-aos="fade-left">
              <h2 className="text-2xl md:text-3xl font-medium   " >
                Custom Web Design
              </h2>
              <h3 className="text-xl md:text-2xl font-normal ">
                Front-End Development
              </h3>
              <p className="text-justify text-base md:text-xl">
              Website development is the process of turning ideas into functional applications. It combines creativity and technical skills, where programmers build digital platforms for various purposes, from mobile apps to complex systems.
              </p>
              <p className="text-justify text-base md:text-xl ">The process begins by identifying the website's goal, followed by planning the structure and functionality. Programmers then code the design using various tools, with thorough testing to ensure it works correctly. Once deployed, continuous maintenance is required to keep the website up-to-date and secure.</p>
            </div>
          </div>
          {/* second */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14">
            <div className="lg:col-span-2 grid gap-5" data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl font-medium   ">
                Responsive Websites
              </h2>
              <h3 className="text-xl md:text-2xl font-normal ">
                Back-End Development
              </h3>
              <p className="text-justify text-base md:text-xl">
                The realm of website development is vast and diverse. Web development focuses on creating applications for the internet, while mobile app development targets smartphones and tablets. Desktop applications cater to traditional computers, while game development brings interactive experiences to life. Embedded systems development involves websites for specialized devices.
              </p>
              <p className="text-justify text-base md:text-xl ">
                Challenges abound in this dynamic field. Building complex systems, safeguarding against cyber threats, and keeping pace with rapid technological advancements require constant innovation and adaptation. Yet, the rewards are immense. Website developers have the power to create solutions that improve lives, drive businesses, and shape the future.
              </p>
            </div>
            <div>
              <img
                src={softimg}
                alt="Responsive Website Design on Different Devices"
                className="mx-auto w-1/2 md:w-2/4 lg:w-full"
              />
            </div>
          </div>
          {/* third */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14">
            <div>
              <img
                src={webImg}
                alt="E-commerce Website Developed by UltraFly Solutions"
                className="mx-auto w-1/2"
              />
            </div>
            <div className="lg:col-span-2 grid gap-2" data-aos="fade-left">
              <h2 className="text-2xl md:text-3xl font-medium">
                E-commerce Solutions
              </h2>
              <h3 className="text-xl md:text-2xl font-normal ">
                Website Maintenance
              </h3>
              <p className="text-justify text-base md:text-xl">
                As technology continues to evolve at an unprecedented pace, the role of website development will only grow in significance. It is a field that demands intellectual curiosity, problem-solving abilities, and a passion for creating something new.
              </p>
              {/* <p className="text-base md:text-xl ">
              Android apps development has become very popular and most widely
              used of its kind at the moment. With such a large force of change,
              it's obvious that there will be a lot of mixed perspectives within
              it. We understand the transformative power of mobile apps.
            </p> */}
            </div>
          </div>
        </div>
      </div>
      {/* footer start */}
      <footer className="soft-banner-footer flex flex-col justify-center items-center gap-5 text-center px-4 lg:px-0">
        <h1 className=" text-white text-xl md:text-3xl lg:text-5xl  ">
          Let’s Get To Work Together Ready To Work With Us.
        </h1>
        <Link to="/contact-us">
          <button className=" text-white border border-white py-2 px-4 rounded-lg transition ease-in-out delay-150 duration-300 hover:bg-white hover:text-black">
            Join with us
          </button>
        </Link>
      </footer>
    </>
  );
}

export default Website;
