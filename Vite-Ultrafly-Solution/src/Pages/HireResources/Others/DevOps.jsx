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


const DevOps = () => {
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
            Hire DevOps Developers | Ultrafly Solutions for Efficient Workflows{" "}
          </title>
          <meta
            name="description"
            content="Hire DevOps developers from Ultrafly Solutions to streamline development with automated workflows. Optimize your processes. Get in touch today!"
          />
        </Helmet>
      </HelmetProvider>       
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-neutral-content text-left flex items-start pl-0 md:pl-8 lg:pl-10">
          <div className="max-w-l ml-1p px-10">
            <h1 className="mb-5 text-4xl sm:text-5xl font-bold text-white">
              Hire DevOps Developers
            </h1>
            <h3 className="mb-5 text-white font-semibold text-xl md:text-2xl">
            Why Hire DevOps Developers from Ultrafly Solutions
            </h3>
            <ul className="list-disc list-inside mb-7 text-white text-sm md:text-xl grid gap-4">
              <li>Expert developers with extensive experience in seamless infrastructure integration</li>
              <li>Flexible hiring options: full-time, part-time, or project-based</li>
              <li>Efficient, automated processes tailored to your business needs</li>
              <li>Dedicated project managers for clear communication and regular updates</li>
              <li>End-to-end DevOps services from development to maintenance with a focus on performance and security</li>
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 w-3/4 mx-auto">Empower your operations with tailored DevOps expertise.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {/* Cards for Services */}
          <div
            class="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-right">
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
                <h3 className="text-xl font-semibold mb-3">Custom DevOps Implementation</h3>
                <p class="font-medium group-hover:text-gray-100">Develop tailored solutions to integrate and automate your development and operations processes.
                </p>
              </div>
            </div>
          </div>
          <div
            class="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-up">
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
                <h3 className="text-xl font-semibold mb-3">Continuous Integration & Continuous Delivery (CI/CD)</h3>
                <p class="font-medium group-hover:text-gray-100">Enhance development speed and quality with automated pipelines for CI/CD practices.
                </p>
              </div>
            </div>
          </div>
          <div
            class="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-left">
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
                <h3 className="text-xl font-semibold mb-3">Infrastructure as Code (IaC)</h3>
                <p class="font-medium group-hover:text-gray-100">Leverage IaC to automate infrastructure setup, ensuring consistency and scalability.
                </p>
              </div>
            </div>
          </div>
          <div
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
                <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure Management</h3>
                <p class="font-medium group-hover:text-gray-100">Optimize your cloud infrastructure with secure, scalable, and cost-effective solutions.</p>
              </div>
            </div>
          </div>
          <div
            class="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-up">
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
                <h3 className="text-xl font-semibold mb-3">Security & Compliance Automation</h3>
                <p class="font-medium group-hover:text-gray-100">Implement security best practices and ensure compliance with automated monitoring and threat detection.</p>
              </div>
            </div>
          </div>
          <div
            class="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
            data-aos="fade-left">
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
                <p class="font-medium group-hover:text-gray-100">Ensure smooth operations with continuous monitoring, maintenance, and support services.
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
            <h3 className="font-extrabold text-2xl text-[#4e0083] leading-tight">Unlock Your Business Potential with DevOps Experts!</h3>
            <p className="mt-4 text-lg text-gray-800">Looking for custom DevOps solutions to streamline your business operations? Contact us to discuss your project requirements and see how our experts can help you succeed.
            </p>
            <Link to={'/contact-us'}>
              <button
                type="button"
                className="bg-[#3b63cf] hover:bg-[#578ee2cc] text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8">
                Get Free Consultation
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
        <h2 className="text-2xl font-bold text-center">Drive business efficiency with Ultrafly DevOps expertise.</h2>
        <p className="mt-4 max-w-4xl mx-auto text-gray-600">When you hire a DevOps developer from Ultrafly Solutions, you partner with a team committed to crafting seamless, automated, and scalable solutions. We ensure your business operations run efficiently through innovative DevOps practices.</p>

        {/* Flexbox container for benefits */}
        <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Benefit 1 */}
          <div className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400" data-aos="fade-left">
            <h1 className="font-bold text-gray-800 mb-3">
              Transparent Communication
            </h1>
            <p className="text-gray-600">We maintain open communication throughout the project, keeping you informed of every milestone.</p>
          </div>

          {/* Benefit 2 */}
          <div className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400" data-aos="flip-up">
            <h1 className="font-bold text-gray-800  mb-3">Flexible Hiring Options</h1>
            <p className="text-gray-600">Choose from full-time, part-time, or project-based hiring models to match your needs.</p>
          </div>

          {/* Benefit 3 */}
          <div className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400" data-aos="fade-right">
            <h1 className="font-bold text-gray-800  mb-3">Proven Success Record</h1>
            <p className="text-gray-600">Our DevOps developers consistently deliver high-performance, secure infrastructures for a variety of industries.</p>
          </div>
          {/* Benefit 4 */}
          <div className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400" data-aos="fade-left">
            <h1 className="font-bold text-gray-800  mb-3">Customer-Centric Approach
            </h1>
            <p className="text-gray-600">We focus on understanding your specific business needs to create tailored solutions that align with your goals.</p>
          </div>
          {/* Benefit 5 */}
          <div className="p-8 shadow-lg rounded-lg bg-white flex-1 transition-transform transform hover:scale-105 border border-sky-400" data-aos="flip-up">
            <h1 className="font-bold text-gray-800  mb-3">Ongoing Support and Maintenance</h1>
            <p className="text-gray-600">Post-project, we offer continuous support to ensure your infrastructure stays optimized and secure.</p>
          </div>
        </div>
      </div>
  
      <section className="p-10 md:p-20 w-full">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8">4 Easy Steps to Hire a DevOps Developer</h1>
        <div className="grid md:grid-cols-4 md:justify-between">
          <div className=" relative border-blue-600 border-b-[3px] max-md:border-r-[3px]">
            <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              1
            </h1>
            <div className=" md:h-[500px] lg:h-72 md:border-r-[3px] border-blue-600 p-10">
              <h1 className="text-xl font-bold">Contact us and share your detailed requirements.</h1>
              <p className=" ">We take the time to understand your vision thoroughly and engage in a detailed discussion about your goals.</p>
            </div>
            <IoIosArrowForward className="absolute -bottom-[16px] -left-[16px] text-3xl font-bold max-md:hidden"/>
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 max-md:border-b-[3px] max-md:border-l-[3px]">
            <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              2
            </h1>
            <div className=" md:h-[500px] lg:h-72 md:border-t-[3px] border-blue-600  p-10">
              <h1 className="text-xl font-bold">Receive Expert Guidance.</h1>
              <p className=" ">Our team provides expert advice on the best technologies and approaches for your project.</p>
            </div>
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 border-b-[3px] max-md:border-r-[3px]">
            <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              3
            </h1>
            <div className=" md:h-[500px] lg:h-72 md:border-x-[3px] border-blue-600 p-10">
              <h1 className="text-xl font-bold">Build a collaborative relationship.</h1>
              <p className=" ">Work closely with our developers to ensure your vision is executed with precision, fostering innovation and efficiency.</p>
            </div>
          </div>
          {/* <div className="divider md:divider-horizontal" /> */}
          <div className=" border-blue-600 max-md:border-l-[3px]">
            <h1 className="text-xl font-bold text-center bg-sky-500 rounded-full w-20 h-20 flex justify-center items-center mx-auto my-10 outline outline-offset-2 outline-1 outline-sky-600">
              4
            </h1>
            <div className=" md:h-[500px] lg:h-72 relative md:border-t-[3px] border-blue-600 p-10">
              <h1 className="text-xl font-bold">Get Ongoing Support.</h1>
              <p className=" ">Benefit from continuous collaboration and support throughout your project's lifecycle to keep it on track.</p>
            <IoIosArrowForward className="absolute -top-[16px] -right-[16px] text-3xl font-bold max-md:hidden"/>
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
        }}>
        {/* <div className="hero-overlay"></div> */}
        <div className="text-neutral-content text-left pl-10 items-start py-10 ">
          <div className="">
            <h1 className="md:mb-5 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Hire the Best DevOps Talent Today</h1>
            <p className="md:mb-5 text-[10px] max-sm:leading-3 md:text-xl text-white w-3/4">At Ultrafly Solutions, we are committed to providing DevOps services that help your business thrive. Our developers are not only experts in automation and integration but also focus on delivering solutions that add business value and efficiency.</p>
            <Link to={'/contact-us'} className="text-xs md:text-xl text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning mt-2 ">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 md:px-10 mb-10">
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
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions (FAQs)</h1>
          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">Why should I hire a DevOps developer from Ultrafly Solutions?</div>
            <div className="collapse-content">
              <p>At Ultrafly Solutions, our DevOps developers bring years of expertise in delivering custom, automated, and scalable solutions. We leverage the latest technologies and follow industry best practices to ensure optimal performance.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Can I hire a DevOps developer on a project basis?</div>
            <div className="collapse-content">
              <p>Yes! We offer flexible hiring models, including full-time, part-time, or project-based engagements, depending on your needs and budget.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">What type of DevOps services do you provide?</div>
            <div className="collapse-content">
              <p>We provide a wide range of DevOps services, including custom implementation, cloud infrastructure management, CI/CD pipelines, security automation, and more.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">How do you ensure the security of my infrastructure?</div>
            <div className="collapse-content">
              <p>Our DevOps developers follow industry-standard security protocols and best practices to secure your infrastructure. We also provide post-launch monitoring and maintenance to keep your systems safe.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">What is the typical timeline for a DevOps project?</div>
            <div className="collapse-content">
              <p>The timeline depends on the complexity and scope of your project. We provide a clear project plan with estimated timelines after discussing your specific requirements.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-blue-100 border-blue-800 border-[2px]">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">How do I communicate with the DevOps development team?</div>
            <div className="collapse-content">
              <p>We prioritize transparent communication and provide direct access to your dedicated project manager and development team via email, calls, or collaboration tools to ensure smooth progress and updates throughout your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevOps;
