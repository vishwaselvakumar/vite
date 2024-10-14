import React, { useRef, useEffect } from "react";
import background from "../../../images/Resources/background.avif";
import faq from "../../../images/Resources/faq.jpg";
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMobileButton } from "react-icons/fa6";
import { Link } from "react-router-dom";
import manualPng from "../../../images/Resources/python/manual.png";
import developmentPng from "../../../images/Resources/python/development.png";
import solutionPng from "../../../images/Resources/python/solution.png";
import ideaPng from "../../../images/Resources/python/idea.png";
import micorPng from "../../../images/Resources/python/self-development.png";
import servicePng from "../../../images/Resources/python/service-provider.png";
import resource from "../../../images/Resources/resource.webp";
import { IoIosArrowForward } from "react-icons/io";
import emailjs from "@emailjs/browser"
import {
  NotificationManager,
} from "react-notifications";
import { HelmetProvider, Helmet } from "react-helmet-async";

const BackendDevelopers = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v50v2iq",
        "template_mpnorls",
        form.current,
        "TCLLaD2C7HUr7sggY"
      )
      .then(
        (result) => {
          NotificationManager.success("Message sent successfully!", "Success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          NotificationManager.error(
            "Failed to send message. Please try again later.",
            "Error"
          );
        }
      );
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Hire Backend Developers | Ultrafly Solutions for Scalable Apps{" "}
          </title>
          <meta
            name="description"
            content="Hire backend developers from Ultrafly Solutions for secure, scalable server-side solutions. Strengthen your infrastructure. Get started with us today!"
          />
        </Helmet>
      </HelmetProvider>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-neutral-content text-left flex items-start pl-0 md:pl-8 lg:pl-10">
          <div className="max-w-l ml-1p px-10">
            <h1 className="mb-5 text-4xl sm:text-5xl font-bold text-white">
              Hire Backend Developers
            </h1>
            <h3 className="mb-5 text-white font-semibold text-xl md:text-2xl">
              Why Hire Backend Developers from Ultrafly Solutions
            </h3>
            <ul className="list-disc list-inside mb-7 text-white text-sm md:text-xl grid gap-4">
              <li>
                Expert developers with extensive experience in delivering reliable, scalable backend solutions.
              </li>
              <li>
                Flexible hiring options: full-time, part-time, or project-based to match your specific needs.
              </li>
              <li>
                We design custom, high-performance architectures to power your business applications.
              </li>
              <li>
                Dedicated project managers for smooth communication and real-time updates.
              </li>
              <li>
                End-to-end support from development to maintenance with a strong focus on security.
              </li>
            </ul>
            <div className="flex justify-center mb-5">
              <a href="#sendBtn">
                <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600">
                  Talk with Our Experts
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 w-3/4 mx-auto">
          Empower Your Growth with Optimized Backend Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {/* Cards for Services */}
          <div
            class="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-right"
          >
            <span class="absolute top-20 left-20 z-0 h-10 w-10 rounded-full bg-[#03a4ed]  opacity-75 transition-all duration-500 transform group-hover:scale-[30]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span class="grid h-24 w-24 p-4 place-items-center rounded-full bg-[#03a4ed] transition-all duration-500 transform group-hover:bg-[#eca918]">
                <img
                  src={manualPng}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div class="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Custom Backend Development
                </h3>
                <p class="font-medium group-hover:text-gray-100">
                  Develop robust, tailored backend solutions to address your business's unique challenges, ensuring stability and scalability.
                </p>
              </div>
            </div>
          </div>
          <div
            class="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-up"
          >
            <span class="absolute top-20 left-20 z-0 h-10 w-10 rounded-full bg-[#03a4ed] opacity-75 transition-all duration-500 transform group-hover:scale-[30]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span class="grid h-24 w-24 p-4 place-items-center rounded-full bg-[#03a4ed] transition-all duration-500 transform group-hover:bg-[#eca918]">
                <img
                  src={developmentPng}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div class="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  API &; Microservices Development
                </h3>
                <p class="font-medium group-hover:text-gray-100">
                  Design and implement APIs and microservices that enhance the efficiency and scalability of your systems, providing seamless integration across platforms.
                </p>
              </div>
            </div>
          </div>
          <div
            class="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-left"
          >
            <span class="absolute top-20 left-20 z-0 h-10 w-10 rounded-full bg-[#03a4ed] opacity-75 transition-all duration-500 transform group-hover:scale-[30]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span class="grid h-24 w-24 p-4 place-items-center rounded-full bg-[#03a4ed] transition-all duration-500 transform group-hover:bg-[#eca918]">
                <img
                  src={solutionPng}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div class="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Enterprise-Grade Applications
                </h3>
                <p class="font-medium group-hover:text-gray-100">
                  Build scalable, enterprise-level backend systems that streamline your operations, enhance performance, and optimize business processes.
                </p>
              </div>
            </div>
          </div>
          <div
            class="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-right"
          >
            <span class="absolute top-20 left-20 z-0 h-10 w-10 rounded-full bg-[#03a4ed] opacity-75 transition-all duration-500 transform group-hover:scale-[30]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span class="grid h-24 w-24 p-4 place-items-center rounded-full bg-[#03a4ed] transition-all duration-500 transform group-hover:bg-[#eca918]">
                <img
                  src={ideaPng}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div class="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Cloud-Based Solutions
                </h3>
                <p class="font-medium group-hover:text-gray-100">
                  Leverage cloud technologies to create secure, flexible, and highly scalable backend solutions that can grow with your business.
                </p>
              </div>
            </div>
          </div>
          <div
            class="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-up"
          >
            <span class="absolute top-20 left-20 z-0 h-10 w-10 rounded-full bg-[#03a4ed] opacity-75 transition-all duration-500 transform group-hover:scale-[30]"></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span class="grid h-24 w-24 p-4 place-items-center rounded-full bg-[#03a4ed] transition-all duration-500 transform group-hover:bg-[#eca918]">
                <img
                  src={micorPng}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div class="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Maintenance &; Support
                </h3>
                <p class="font-medium group-hover:text-gray-100">
                  Keep your backend infrastructure running smoothly with our ongoing support and maintenance services, ensuring optimal performance and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-50 relative max-w-full shadow-sm shadow-[#000000] mx-auto rounded overflow-hidden">
        <div className="grid sm:grid-cols-2 max-sm:gap-6">
          <div className="text-center p-6 flex flex-col justify-center items-center">
            <h3 className="font-extrabold text-2xl text-[#4e0083] leading-tight">
              Drive Your Business Forward with Ultrafly Backend Expertise
            </h3>
            <p className="mt-4 text-lg text-gray-800">
              Hiring a backend developer from Ultrafly Solutions means gaining access to a team that excels in creating efficient, secure, and scalable backend architectures. We prioritize your business success, crafting solutions that fuel growth and optimize operations.
            </p>
           <Link to={'/contact-us'}>
              <button
                type="button"
                className="bg-[#3b63cf] hover:bg-[#578ee2cc] text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8">
                Get a Free Consultation
              </button>
           </Link>
          </div>

          <div className="flex justify-end items-center p-2 bg-gradient-to-r from-[#8799ff] to-[#03a4ed] rounded-bl-[230px] w-full h-full">
            <div className="h-72 w-72 rounded-full bg-[#eca918] p-5">
              <img
                src="https://readymadeui.com/team-image.webp"
                className="w-full h-full rounded-full object-cover border-8 border-white"
                alt="Team"
              />
            </div>
          </div>
        </div>
        <div className="absolute -top-[50px] -left-[50px] w-28 h-28 rounded-full bg-[#03a4ed] opacity-40 shadow-lg"></div>
        <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-[#2e8bb6] opacity-40 shadow-lg"></div>
      </div>

      {/* Additional Information Section */}
      <div className="py-10 max-md:px-10">
        <h2 className="text-2xl font-bold text-center">
          Drive Your Vision with Ultrafly’s Expertise

        </h2>
        {/* Flexbox container for benefits */}
        <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Benefit 1 */}
          <div className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400" data-aos="fade-left">
            <h1 className="font-bold text-gray-800 mb-3">
              Transparent Communication
            </h1>
            <p className="text-gray-600">
              We maintain open lines of communication throughout the project, keeping you updated at every stage.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400" data-aos="flip-up">
            <h1 className="font-bold text-gray-800  mb-3">
              Flexible Hiring Models
            </h1>
            <p className="text-gray-600">
              Choose from full-time, part-time, or project-based hiring options to meet your exact requirements.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400" data-aos="fade-right">
            <h1 className="font-bold text-gray-800  mb-3">
              Proven Success Record
            </h1>
            <p className="text-gray-600">
              With years of experience, our backend developers consistently deliver solutions that enhance performance and scale with your business.
            </p>
          </div>

          <div className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400" data-aos="fade-left">
            <h1 className="font-bold text-gray-800  mb-3">
              Client-Centric Approach
            </h1>
            <p className="text-gray-600">
              We collaborate closely with you to understand your goals, ensuring our solutions align with your business vision for long-term success.
            </p>
          </div>

          <div className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400" data-aos="flip-up">
            <h1 className="font-bold text-gray-800  mb-3">
              Ongoing Support
            </h1>
            <p className="text-gray-600">
              Post-development, we provide continuous support and maintenance to ensure your backend systems remain secure and efficient.
            </p>
          </div>
        </div>
      </div>

      <section className="p-10 md:p-20 w-full">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4">4 Easy Steps to Hire an Ionic Developer
        </h1>
        <div className="grid md:grid-cols-4 md:justify-between">
          <div className=" relative border-blue-600 border-b-[3px] max-md:border-r-[3px]">
            <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              1
            </h1>
            <div className=" md:h-[500px] lg:h-72 md:border-r-[3px] border-blue-600 p-10">
              <h1 className="text-xl font-bold">Share Your Requirements</h1>
              <p className=" ">
                Tell us your project needs and goals, and we?ll engage in detailed discussions to clarify your expectations.
              </p>
            </div>
            <IoIosArrowForward className="absolute -bottom-[16px] -left-[16px] text-3xl font-bold max-md:hidden" />
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 max-md:border-b-[3px] max-md:border-l-[3px]">
            <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              2
            </h1>
            <div className=" md:h-[500px] lg:h-72 md:border-t-[3px] border-blue-600  p-10">
              <h1 className="text-xl font-bold">
                Receive Expert Guidance
              </h1>
              <p className=" ">
                Benefit from our expert advice as we recommend the best technologies and development approaches for your backend solution.
              </p>
            </div>
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 border-b-[3px] max-md:border-r-[3px]">
            <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              3
            </h1>
            <div className=" md:h-[500px] lg:h-72 md:border-x-[3px] border-blue-600 p-10">
              <h1 className="text-xl font-bold">
                Collaborate for Success
              </h1>
              <p className=" ">
                Work closely with our developers, ensuring your vision becomes a reality with high-quality, innovative solutions.
              </p>
            </div>
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 max-md:border-l-[3px]">
            <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              4
            </h1>
            <div className=" md:h-[500px] lg:h-72 relative md:border-t-[3px] border-blue-600 p-10">
              <h1 className="text-xl font-bold">
                Ongoing Support
              </h1>
              <p className=" ">
                We offer continuous support throughout the project to ensure everything runs smoothly and aligns with your objectives.
              </p>
              <IoIosArrowForward className="absolute -top-[16px] -right-[16px] text-3xl font-bold max-md:hidden" />
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto mt-10">
          <Link to={'/contact-us'}>
            <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      <div
        className="hero h-fit md:h-96 my-2 md:my-10"
        style={{
          backgroundImage: `url(${resource})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className="pl-10 text-neutral-content text-left items-start py-10 ">
          <div className="">
            <h1 className="md:mb-5 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Hire Top Backend Developers Today
            </h1>
            <p className="mb-5 text-xs md:text-xl text-white w-3/4">
              At Ultrafly Solutions, we are committed to delivering backend solutions that give your business a competitive edge. Our team of experts focuses on creating efficient, scalable, and secure architectures to power your business applications.
              Contact us today to hire a backend developer and kickstart your project.
            </p>
            <Link to={'/contact-us'} className="text-xs md:text-xl text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning mt-2 ">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-2 md:px-6 lg:px-10 mb-10">
        {/* form */}
        <div className="w-full flex items-center justify-center col-span-full md:col-span-1 max-lg:order-last" id="sendBtn">
        <form className="w-full" ref={form} onSubmit={sendEmail}>
            <div className="grid gap-8 outline outline-offset-2 outline-2 outline-slate-400 p-10 bg-gray-200 rounded-xl">
              <label className="input input-bordered flex items-center gap-2">
                <FaUser />
                <input name="user_name" type="text" className="w-full" placeholder="Name" required />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <MdEmail />
                <input name="user_email" type="email" className="w-full" placeholder="Email" required />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <FaMobileButton />
                <input name="user_phone" type="text" className="w-full" placeholder="Number" />
              </label>
              <label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Bio"
                  name="message"
                />
              </label>
              <button
                type="submit"
                className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600">
                Send
              </button>
            </div>
          </form>
        </div>
        {/* faq */}
        <div className="col-span-2 grid gap-2 ">
          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Why should I hire a backend developer from Ultrafly Solutions?
            </div>
            <div className="collapse-content">
              <p>
                Our developers bring years of expertise in delivering secure, scalable backend systems tailored to your business needs, using the latest technologies and best practices.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I hire a backend developer on a project basis?
            </div>
            <div className="collapse-content">
              <p>
                Yes! We offer flexible hiring models to suit your requirements, whether full-time, part-time, or project-based engagement.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What types of backend solutions can you build?
            </div>
            <div className="collapse-content">
              <p>
                Our developers specialize in creating custom backend systems, enterprise applications, APIs, cloud-based solutions, and microservices across a variety of industries.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do you ensure the security of my backend system?
            </div>
            <div className="collapse-content">
              <p>
                We follow industry-leading security practices, including secure coding standards, data protection measures, and regular system maintenance to ensure your backend remains safe and reliable.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What is the typical timeline for a backend project?
            </div>
            <div className="collapse-content">
              <p>
                Timelines vary based on project complexity. Once we understand your requirements, we provide a detailed plan with clear timelines to ensure smooth execution.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do I communicate with the backend development team?
            </div>
            <div className="collapse-content">
              <p>
                You'll have direct access to your project manager and development team, with regular updates through emails, calls, or collaboration tools to ensure seamless communication throughout the project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackendDevelopers;
