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

const Laravel = () => {
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
            Hire Laravel Developers | Ultrafly Solutions for Custom Web Apps{" "}
          </title>
          <meta
            name="description"
            content="Ultrafly Solutions offers skilled Laravel developers to create custom, scalable web apps. Elevate your business with our expert services. Contact us today!"
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
              Hire Laravel Developers
            </h1>
            <h3 className="mb-5 text-white font-semibold text-xl md:text-2xl">
              Why Hire Laravel Developers from Ultrafly Solutions?
            </h3>
            <ul className="list-disc list-inside mb-7 text-white text-sm md:text-xl grid gap-4">
              <li>
                Expert Laravel developers with deep industry experience deliver
                high-performance web solutions.
              </li>
              <li>
                Flexible hiring options—choose full-time, part-time, or
                project-based engagement that suits your needs.
              </li>
              <li>
                Scalable, custom solutions built to grow with your business and
                ensure long-term success.
              </li>
              <li>
                Security-focused development following the latest standards to
                protect your applications.
              </li>
              <li>
                Comprehensive services from development to post-launch support,
                ensuring a seamless experience.
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
          Achieve Unparalleled Success with Custom Laravel Solutions!
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
                  Tailored Laravel Web Application Development
                </h3>
                <p class="font-medium group-hover:text-gray-100">
                  We design and develop custom Laravel web applications that
                  solve your unique business challenges.
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
                  Enterprise Laravel Solutions
                </h3>
                <p class="font-medium group-hover:text-gray-100">
                  Build scalable, enterprise-grade Laravel applications that
                  streamline your operations and boost efficiency.
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
                  E-commerce Solutions
                </h3>
                <p class="font-medium group-hover:text-gray-100">
                  Develop powerful Laravel-based e-commerce platforms that
                  provide a secure and user-friendly shopping experience.
                </p>
              </div>
            </div>
          </div>
          {/* <div
            class="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-right">
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
                  Cloud Solutions
                </h3>
                <p class="font-medium group-hover:text-gray-100">Leverage cloud technologies to develop secure, flexible cloud-based Python applications.</p>
              </div>
            </div>
          </div> */}
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
                  API & Third-Party Integrations
                </h3>
                <p class="font-medium group-hover:text-gray-100">
                  Create seamless integrations with third-party services to
                  enhance functionality and performance.
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
                  src={servicePng}
                  alt="custom"
                  className="rounded-xl w-full h-full mb-8 object-contain mx-auto"
                />
              </span>
              <div class="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Maintenance & Support
                </h3>
                <p class="font-medium group-hover:text-gray-100">
                  Keep your Laravel applications running smoothly with our
                  continuous maintenance and support services.
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
              Unlock the True Potential of Your Web Applications!
            </h3>
            <p className="mt-4 text-lg text-gray-800">
              Looking for a custom Laravel solution to power your business?
              Contact us now to discuss your project requirements and see how
              our experts can help you succeed.
            </p>
            <Link to={'/contact-us'}>
              <button
                type="button"
                className="bg-[#3b63cf] hover:bg-[#578ee2cc] text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8">Get a Free Consultation!</button>
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
          Drive Your Business Forward with Ultrafly Laravel Expertise
        </h2>
        <p className="mt-4 max-w-4xl mx-auto text-gray-600">
          When you hire a Laravel developer from Ultrafly Solutions, you gain
          access to a team that is passionate about creating innovative and
          efficient solutions. We put your success at the forefront, building
          applications that drive business results and productivity.
        </p>

        {/* Flexbox container for benefits */}
        <div className="mt-6 max-w-4xl mx-auto flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
          {/* Benefit 1 */}
          <div className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400" data-aos="fade-left">
            <h1 className="font-bold text-gray-800 mb-3">
              Transparent Communication
            </h1>
            <p className="text-gray-600">
              We maintain open lines of communication at every stage of the
              project, ensuring you're always informed.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400" data-aos="flip-up">
            <h1 className="font-bold text-gray-800  mb-3">
              Flexible Hiring Models
            </h1>
            <p className="text-gray-600">
              Whether you need a dedicated developer or a full team for a
              specific project, we offer adaptable hiring models to suit your
              needs.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400" data-aos="fade-right">
            <h1 className="font-bold text-gray-800  mb-3">
              Proven Track Record
            </h1>
            <p className="text-gray-600">
              Our Laravel developers consistently deliver high-performing
              applications, backed by years of expertise and client
              satisfaction.
            </p>
          </div>
        </div>
      </div>
      {/* Steps Section as Cards */}
      <section className="p-10 md:p-20 w-full">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8">4 Simple Steps to Hire a Laravel Developer
        </h1>
        <div className="grid md:grid-cols-4 md:justify-between">
          <div className=" relative border-blue-600 border-b-[3px] max-md:border-r-[3px]">
            <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              1
            </h1>
            <div className=" md:h-[500px] lg:h-72 md:border-r-[3px] border-blue-600 p-10">
              <h1 className="text-xl font-bold">
                Reach Out and Share Your Vision.
              </h1>
              <p className=" ">
                We'll listen closely to your ideas and work with you to define
                clear project goals.
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
              <h1 className="text-xl font-bold">Get professional advice.</h1>
              <p className=" ">
                Benefit from our team's deep expertise in Laravel development as
                we guide you in choosing the right technologies.
              </p>
            </div>
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 border-b-[3px] max-md:border-r-[3px]">
            <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              3
            </h1>
            <div className=" md:h-[500px] lg:h-72 md:border-x-[3px] border-blue-600 p-10">
              <h1 className="text-xl font-bold">Collaborate for Success.</h1>
              <p className=" ">
                Work closely with our developers to ensure your vision is
                executed flawlessly.
              </p>
            </div>
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 max-md:border-l-[3px]">
            <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              4
            </h1>
            <div className=" md:h-[500px] lg:h-72 relative md:border-t-[3px] border-blue-600 p-10">
              <h1 className="text-xl font-bold">Get Ongoing Support</h1>
              <p className=" ">
                Receive continuous support throughout the development process to
                ensure your project stays on track and meets your goals.
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
          // backgroundSize: "100%",
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className="pl-10 text-neutral-content text-left items-start py-10 ">
          <div className="">
            <h1 className="md:mb-5 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Hire Expert Laravel Developers Today
            </h1>
            <p className="md:mb-5 text-[10px] max-sm:leading-3 md:text-xl text-white w-3/4">
              At Ultrafly Solutions, we are dedicated to delivering Laravel
              development services that help your business stay ahead of the
              curve. Our developers bring a business-oriented approach to ensure
              that your software meets the highest standards of performance and
              efficiency.
            </p>
            <Link to={'/contact-us'} className="text-xs md:text-xl text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning mt-2 ">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 md:px-10 mb-10">
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
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Frequently Asked Questions (FAQs)
          </h1>
          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Why should I hire a Laravel developer from Ultrafly Solutions?
            </div>
            <div className="collapse-content">
              <p>
                Ultrafly Solutions has a team of expert Laravel developers with
                a proven track record of delivering secure, scalable, and custom
                solutions that meet your business needs.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I hire a Laravel developer on a project basis?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! We offer flexible hiring options, whether you're
                looking for a full-time developer or support for a specific
                project.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What type of applications can your Laravel developers build?
            </div>
            <div className="collapse-content">
              <p>
                Our Laravel developers build a wide range of applications,
                including web platforms, enterprise solutions, and e-commerce
                websites.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do you ensure the security of my Laravel project?
            </div>
            <div className="collapse-content">
              <p>
                Security is a top priority. Our developers follow industry best
                practices for secure coding and provide ongoing support to
                ensure the integrity of your application.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What is the typical timeline for a Laravel project?
            </div>
            <div className="collapse-content">
              <p>
                Timelines depend on project complexity. Once we understand your
                requirements, we will provide a clear project plan with
                estimated deadlines.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do I communicate with the Laravel development team?
            </div>
            <div className="collapse-content">
              <p>
                You will have direct access to our project managers and
                development team through email, calls, or collaboration tools,
                ensuring regular updates and clear communication
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Laravel;
