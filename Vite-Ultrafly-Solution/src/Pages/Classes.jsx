import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import bg1 from "../images/classes/cycling.jpg";
import bg2 from "../images/classes/meditation.jpg";
import bg3 from "../images/classes/A.png";
import bg4 from "../images/classes/app1.png";
import bg5 from "../images/classes/app2.png";
import bg6 from "../images/classes/mobileapps.png";
import portfolio_banner from "../images/career/portfolio_banner.webp";
import { Link } from "react-router-dom";

function Classes() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const projects = [
    {
      bgImg: bg1,
      title: "Den Mark",
      trainer: "",
      date: "",
      text: "Den Mark is a mobile app for a movie OTT platform, offering features like multi-language support, personalized recommendations, and offline viewing. Built with React Native, React.js, Node.js, and MongoDB, it ensures a smooth and secure user experience. This app is designed to delight and satisfy clients with its reliability and ease of use.",
    },
    {
      bgImg: bg2,
      title: "Sales Life Site - Website",
      trainer: "",
      date: "",
      text: "A website without SEO is like a car with no gas.” Paul Cookson",
    },
    {
      bgImg: bg3,
      title: "Adappt - Website",
      trainer: "John Flex",
      date: "Tue: 4:00 pm",
      text: "Websites promote you 24/7: No employee will do that",
    },
    {
      bgImg: bg4,
      title: "Time Sheet - Website",
      trainer: "David Rich",
      date: "Sat: 9:00 am",
      text: "Our mobile time sheets app simplifies tracking work hours for small teams and individuals. It offers easy time entry, real-time reporting, and seamless integration with payroll systems. Designed for efficiency and accuracy, it helps manage time effectively and streamline administrative tasks.",
    },
    {
      bgImg: bg5,
      title: "Mobile App",
      trainer: "Larry Wheels",
      date: "Mon: 8:00 pm",
      text: "A bad website is like a grumpy salesperson.",
    },
    {
      bgImg: bg6,
      title: "Mobile App",
      trainer: "Shawn Ray",
      date: "Sun: 10:00 am",
      text: "Website without visitors is like a ship lost in the horizon.",
    },
  ];

  const getCardClass = (index) => {
    switch (index) {
      case 0:
        return "card1";
      case 1:
        return "card2";
      case 2:
        return "card3";
      case 3:
        return "card4";
      case 4:
        return "card5";
      case 5:
        return "card6";
      default:
        return "";
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Our Portfolio | Ultrafly Solutions</title>
          <meta
            name="description"
            content="Explore our portfolio showcasing successful projects in mobile app development, website development, and digital marketing by Ultrafly Solutions."
          />
          <meta
            name="keywords"
            content="portfolio, project showcase, case studies, Ultrafly Solutions"
          />
        </Helmet>
      </HelmetProvider>
      <div className="h-60 w-screen flex  items-center justify-center flex-col gap-4 max-sm:px-10" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${portfolio_banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} >
        <h2 className="text-[1.4rem] md:text-3xl lg:text-5xl text-white font-semibold">Our Recent Projects</h2>
        <Link to="/contact-us" >
            <button className=" text-black bg-white border border-white py-2 px-4 rounded-lg transition ease-in-out delay-150 duration-300 hover:bg-transparent hover:text-white ">
              Join with us
            </button>
          </Link>
      </div>
      <section className="portfolio max-sm:mt-8">
        <p className="text-base md:text-xl py-4">
          At UltraFly Solutions, we take pride in delivering top-notch digital
          solutions tailored to meet our clients' unique needs. Our portfolio
          showcases a diverse range of projects that demonstrate our expertise,
          creativity, and commitment to excellence. Explore our success stories
          and see how we've helped businesses across various industries achieve
          their goals.
        </p>

        <secton className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center ">
          {projects.map((project, index) => (
            <div class="max-w-sm overflow-hidden shadow-lg p-8 rounded-2xl">
             <div class="h-44  rounded-2xl">
                <img
                  class="h-full w-full rounded-2xl border-2"
                  src={project.bgImg}
                  alt="Sunset in the mountains"
                />
             </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{project.title}</div>
                {/* <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p> */}
              </div>
            </div>
          ))}
        </secton>

        {/* <div className="card-grid1">
          {projects.map((project, index) => (
            <div className={`cardclass ${getCardClass(index)}`} key={index}>
              <h1 className="project-title">{project.title}</h1>
              <div className="inner-box">
                <div
                  className="front"
                  style={{ backgroundImage: `url(${project.bgImg})` }}
                ></div>
                <div className="back font-bold text-lg text-gray-700 mb-4">
                  <h1 className="text-center text-2xl font-semibold">
                    {project.title}
                  </h1>
                  <div className="project-info font-medium text-lg text-gray-700 mb-4">
                    <p className="project-text font-medium text-lg text-gray-700 mb-4">
                      Text: {project.text}
                    </p>
                    <p className="project-trainer font-medium text-lg text-gray-700 mb-4">
                      Trainer: {project.trainer}
                    </p>
                    <p className="project-date font-medium text-lg text-gray-700 mb-4">
                      Date: {project.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </section>

      <style jsx>{`
        body {
          background-color: white;
          margin: 0;
          padding: 0;
        }

        .portfolio {
          padding: 2rem;
          text-align: center;
        }

        .title {
          font-size: 2rem;
          margin-bottom: 2rem;
          font-weight: bold;
          color: #333;
        }

        .card-grid1 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4.5rem;
        }

        .card1,
        .card4,
        .card5 {
          grid-column: span 1;
        }

        .card2,
        .card3,
        .card6 {
          grid-column: span 2;
        }

        .cardclass {
          height: 300px;
          perspective: 900px;
          border-radius: 40px;
        }

        .inner-box {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s;
          position: relative;
        }

        .cardclass:hover .inner-box {
          transform: rotateY(180deg);
        }

        .front,
        .back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          box-shadow: 0 8px 10px rgba(0, 0, 3, 0.5);
          border-radius: 20px;
          transition: color 0.4s, background-color 0.4s;
        }

        .front {
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          color: white;
        }

        .back {
          background-size: cover;
          background-position: center;
          color: black;
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          background-color: white;
          text-align: left;
          backdrop-filter: blur(8px);
          background-color: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .cardclass:hover .front {
          color: white;
        }

        .cardclass:hover .back {
          color: black;
        }

        .project-title {
          margin: 0;
          transition: color 0.4s;
          padding: 10px;
          font-weight: bold;
          font-size: 24px;
        }

        .cardcard:hover .project-title {
          visibility: hidden;
        }

        .project-info {
          display: inline-block; /* Align text as inline-block */
          gap: 0.5rem; /* Add space between elements */
        }

        .project-text,
        .project-trainer,
        .project-date {
          margin: 0.5rem 0;
          transition: color 0.4s;
        }

        .cardclass:hover .project-text,
        .cardclass:hover .project-trainer,
        .cardclass:hover .project-date {
          color: black;
        }

        @media (max-width: 1024px) {
          .card-grid1 {
            grid-template-columns: repeat(2, 1fr);
            gap: 6rem;
          }

          .cardclass {
            height: 300px;
          }

          .inner-box {
            width: 100%;
            height: 100%;
          }

          .card2,
          .card3,
          .card6 {
            grid-column: span 1;
          }
        }

        @media (max-width: 768px) {
          .card-grid1 {
            grid-template-columns: 1fr;
            gap: 6rem;
          }

          .cardclass {
            height: 200px;
          }

          .inner-box {
            width: 100%;
            height: 100%;
            background-color: white;
          }

          .card1,
          .card2,
          .card3,
          .card4,
          .card5,
          .card6 {
            grid-column: span 1;
          }

          .portfolio {
            padding: 3rem;
          }
        }
      `}</style>
    </>
  );
}

export default Classes;
