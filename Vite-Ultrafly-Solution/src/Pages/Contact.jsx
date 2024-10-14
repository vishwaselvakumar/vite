import React, { useRef, useEffect } from "react";
import india from '../images/hero/india.png';
import usa from '../images/hero/united-states.png';
import emailjs from "@emailjs/browser"
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import contact_banner from '../images/contact/contact_banner.webp'

function Login() {
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
          NotificationManager.error("Failed to send message. Please try again later.", "Error");
        }
      );
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contact Us | Ultrafly Solutions</title>
          <meta
            name="description"
            content="Get in touch with Ultrafly Solutions for expert IT solutions and services. We're here to help your business grow and succeed."
          />
          <meta
            name="keywords"
            content="contact Ultrafly Solutions, get in touch, IT solutions, business inquiries"
          />
        </Helmet>
      </HelmetProvider>

      <div className="h-60 w-screen flex  items-center justify-center gap-4 max-sm:px-10" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contact_banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} >
        <h2 className="text-[1.4rem] md:text-3xl lg:text-5xl text-white font-semibold">
          GET IN TOUCH WITH US
        </h2>
      </div>
      <section>

        {/* Contact Section */}
        <div className="bg-white py-3 page-padding grid md:grid-cols-2 container gap-10 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-black text-2xl md:text-3xl font-bold mb-4">
              We are here to help you! To uplift your business.
            </h2>
            <p className="text-base md:text-lg text-[#646464] w-[95%] mb-10">
              Our field of expertise includes Software Development, Web Development, Mobile App Development, SEO, Digital Marketing & Recruitment Services. Our global clients come from diverse industries with varying requirements.
            </p>

            <div className="grid gap-10">
              {/* Office Location */}
              <div className="flex flex-col relative">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Visit Our Office</h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Office Location</h3>
                <p className="text-base md:text-lg text-[#646464]">
                  27/9, Nivedh Vikas, Pankaja Mills Road, Puliakulam, Coimbatore-641 045.
                </p>
              </div>

              {/* Opening Hours */}
              <div className="flex flex-col relative">
                <h3 className="text-2xl md:text-3xl mb-2 font-bold">Opening Hours</h3>
                <div className="text-[#646464] grid grid-cols-3 w-full md:w-[60%]">
                  <p className="text-base md:text-lg">Mon - Fri :</p>
                  <p className="text-base md:text-lg col-span-2">9:30 am — 6:30 pm</p>
                  <p className="text-base md:text-lg">Saturday :</p>
                  <p className="text-base md:text-lg col-span-2">9:30 am — 5:30 pm</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col relative">
                <h2 className="text-2xl md:text-3xl mb-2 font-bold">Send Us a Message</h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Phone</h3>
                <div className="text-[#646464] pl-2">
                  <p className="text-base md:text-lg">
                    <img src={india} alt="India Flag" className="inline-block w-4 h-4" /> +91 91500 01089
                  </p>
                  <p className="text-base md:text-lg">
                    <img src={india} alt="India Flag" className="inline-block w-4 h-4" /> +91 91500 01090
                  </p>
                  <p className="text-base md:text-lg">
                    <img src={usa} alt="USA Flag" className="inline-block w-4 h-4" /> +1 562 521 9684
                  </p>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mt-4">Landline</h3>
                <p className="text-base md:text-lg pl-1">
                  <img src={india} alt="India Flag" className="inline-block w-4 h-4" /> +0422-267 0033</p>
                <h3 className="text-xl md:text-2xl font-semibold mt-4">Email</h3>
                <div className="text-base md:text-xl text-[#646464] pl-1">
                  <a href="mailto:info@ultraflysolutions.com">
                    <i className="fa-solid fa-envelope"></i> Business - info@ultraflysolutions.com
                  </a><br />
                  <a href="mailto:hr@ultraflysolutions.com">
                    <i className="fa-solid fa-envelope"></i> HR/Careers - hr@ultraflysolutions.com
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              {/* <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10"></h3>
                <div className="text-[18px] font-medium text-black flex gap-5">
                  <i className="fa-brands fa-facebook-f bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff695f] ease-in duration-200 hover:text-white"></i>
                  Add more social media icons here
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative"
          >
            <h2 className="text-[22px] md:text-[28px] font-bold mb-4">
              Contact Information
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold my-4">Contact Form</h3>
            <input
              name="user_name"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Full Name *"
              type="text"
              required
            />
            <input
              name="user_email"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Email Address *"
              type="email"
              required
            />
            <input
              name="user_phone"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Your phone number"
              type="number"
            />
            <select
              name="user_domain"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              required
            >
              <option value="">Select Domain</option>
              <option value="Software Development">Software Development</option>
              <option value="Website Development">Website Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="message"
              className="w-full py-[12px] px-[20px] h-[120px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Your message"
              required
            />
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="flex justify-center py-10">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d705.0160674609839!2d76.99391089232648!3d11.003122866893872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c5ee211c7b%3A0x9880ea6c81891b24!2sNivedh%20Vikas%20Apartment!5e1!3m2!1sen!2sin!4v1727782619876!5m2!1sen!2sin"
            className="w-full h-64 md:h-80 lg:h-[400px] xl:h-[500px] rounded-lg border-none"
            loading="lazy"
          />
        </div>
      </section>
      <NotificationContainer />
    </>
  );
}

export default Login;
