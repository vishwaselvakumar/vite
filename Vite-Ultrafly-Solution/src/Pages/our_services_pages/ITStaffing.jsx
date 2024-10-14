import React, { useEffect } from "react";
import "./services.css";
import SocialMedias from "./SocialMedias";
import { Link } from "react-router-dom";
import gif1 from "../../images/our_services/software_dev/software-development{}-gif.gif";
import webImg from "../../images/our_services/websiteImg/Recruiter hr.jpg";
import softimg from "../../images/who-we-are/staffing.png";
import ScrollToTop from "../../components/ScrollToTop";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import it_bg from '../../images/our_services/seo&digital/it_bg.webp'

function ITStaffing() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <HelmetProvider>

        <Helmet>
          <title>IT Staffing Solutions | Ultrafly Solutions
          </title>
          <meta name="description" content="Find the right IT talent with Ultrafly Solutions' staffing services. We connect businesses with skilled professionals to meet their IT needs." />
          <meta name="keywords" content=" IT staffing, IT talent, staffing services, IT professionals, Ultrafly Solutions" />
        </Helmet>

      </HelmetProvider>
      <div className="mt-[20px]">

        {/* banner */}
        <div className="h-60 w-screen flex  items-center justify-center flex-col gap-4 max-sm:px-10" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${it_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-semibold">Expert IT Staffing Solutions</h2>
          <Link to="/contact-us" >
            <button className=" text-black bg-white border border-white py-2 px-4 rounded-lg transition ease-in-out delay-150 duration-300 hover:bg-transparent hover:text-white ">
              Join with us
            </button>
          </Link>
        </div>

        <div className=" ">
          {/* first */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14 min620:block">
            <div className="flex justify-center">
              <img src={gif1} alt="IT Professionals Working on a Project" className="mx-auto w-full md:w-2/4 lg:w-full" />
            </div>
            <div className="lg:col-span-2 grid gap-5" data-aos="fade-left">
              <h2 className="text-2xl md:text-5xl font-medium">Temporary and Permanent Staffing</h2>
              <h3 className="text-xl md:text-2xl font-medium">Contract Staffing</h3>
              <p className="text-justify text-base md:text-xl">Staffing is a key function in organizational success, focused on recruiting, selecting, and developing employees to meet goals. It combines intuition with data-driven decisions.</p>
              <p className="text-justify text-base md:text-xl ">The process starts by understanding the organization's needs and identifying required skills for each role. From there, talent acquisition begins with creating job descriptions and using various recruitment strategies to attract suitable candidates.</p>
            </div>
          </div>
          {/* second */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14" >
            <div className="lg:col-span-2" data-aos="fade-right">
              <h2 className="text-2xl md:text-5xl font-medium  ">Technical Recruitment</h2>
              <h3 className="text-xl md:text-2xl font-medium py-3">Direct Hire</h3>
              <p className="text-justify text-base md:text-xl">
                Selecting the right candidates is a critical step. It often
                involves a rigorous evaluation process, including resume
                screening, interviews, assessments, and reference checks. The goal
                is to identify individuals who not only possess the necessary
                qualifications but also align with the organization's culture and
                values.
              </p>
              <br />
              <p className="text-justify text-base md:text-xl ">
                Once employees are on board, the journey doesn't end.
                Organizations must invest in their development through training
                programs, mentoring, and opportunities for growth. This not only
                enhances employee satisfaction but also contributes to the overall
                performance of the organization.
              </p>
            </div>
            <div>
              <img src={softimg} alt="Managed IT Services by UltraFly Solutions" className="mx-auto w-1/2 md:w-2/4 lg:w-3/4" />
            </div>
          </div>
          {/* third */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14">
            <div>
              <img src={webImg} alt="IT Staffing and Recruitment Process" className="mx-auto w-full md:w-2/4 lg:w-full" />
            </div>
            <div className="lg:col-span-2 grid gap-5" data-aos="fade-left">
              <h2 className="text-2xl md:text-5xl font-medium">Managed IT Services</h2>
              <h3 className="text-xl md:text-2xl font-medium">IT Project Staffing</h3>
              <p className="text-justify text-base md:text-xl">
                In today's competitive business landscape, staffing has evolved
                beyond mere recruitment. It encompasses talent management,
                employee engagement, and workforce planning. Organizations that
                excel in staffing have a competitive advantage as they are able to
                build high-performing teams that drive innovation and success.
              </p>
              {/* <p className="text-justify text-base md:text-xl ">
                In conclusion, staffing is a multifaceted function that demands a
                strategic approach. By aligning talent acquisition and development
                with organizational objectives, businesses can create a workforce
                that is not only capable but also committed to achieving shared
                goals.
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

export default ITStaffing;
