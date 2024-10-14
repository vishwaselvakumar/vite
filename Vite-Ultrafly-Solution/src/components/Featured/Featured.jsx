import MainButton from "../MainButton";
import TitleRed from "../../images/features/title-bg.svg";
import "./featured.css";
import img1 from "../../images/features/bg1.jpg";
import img2 from "../../images/features/bg2.jpg";
import img3 from "../../images/features/bg5.jpg";
import img4 from "../../images/features/bg7.jpg";
import img5 from "../../images/features/bg4.jpg";
import img6 from "../../images/features/bg6.jpg";
import software from "../../images/features/bg.png";
import { Link } from "react-router-dom";

function Featured() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <section id="featured" className="page-padding pt-5">
        <div className="container">
          {/* title */}
          <div data-aos="fade-in" className="mt-10">
            <h1 className="text-center font-bold text-xl sm:text-2xl md:text-4xl text-gray-800">
              Our Services
            </h1>
          </div>
          <h2
            data-aos="fade-in"
            className=" text-xl md:text-3xl text-center text-[#03a4ed] font-bold my-10"
          >
            Explore Our Services, Why Choose Us, Success Stories
          </h2>
        </div>
      </section>
      {/*  new card */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:px-8">
        {/* card -1 */}
        <div class="featured_card">
          <div class="hover-text">
            <h1 className="text-center text-xl md:text-2xl font-bold ">
              Custom Software Development Solutions
            </h1>
            <div className="flex justify-center items-center p-3">
              <span className="text-[13px] md:text-[16px] text-white text-justify max-w-3xl leading-relaxed">
                We are experts in developing end-to-end applications based on
                web technologies. We combine strong technological insight
                together with business visions to deliver you the accurate
                inputs across the product life cycle.
              </span>
            </div>
            <Link to={"/software-development"}>
              <button className=" group relative flex items-center justify-center gap-2 px-5 py-2.5 bg-yellow-400   text-white font-bold rounded-full border-3 border-white/30 transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:border-white/60 overflow-hidden m-auto">
                Read More
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                >
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-60 transition-all duration-300 ease-out transform -translate-x-full group-hover:translate-x-full"></span>
              </button>
            </Link>
          </div>
          <img src={img1} alt="df" className="h-full w-full" />
          <div className="absolute top-[90%] right-0 transform -translate-x-0 -translate-y-3/4 text-white p-4 rounded-lg backdrop-blur-lg bg-black/40 shadow-md">
            <h1 className="featured_title sm:text-xl sm:font-semibold tracking-wide">
              SOFTWARE DEVELOPMENT
            </h1>
          </div>
        </div>
        {/* card -2 */}
        <div class="featured_card">
          <div class="hover-text">
            <h1 className="text-center text-xl md:text-2xl font-bold mb-2">
              Custom Mobile App Development Services
            </h1>
            <div className="flex justify-center items-center p-3">
              <span className="text-[13px] md:text-[16px] text-white text-justify max-w-3xl leading-relaxed">
                We excel in developing high-quality mobile apps. Whether you're
                a startup, a small business, or a large enterprise, having a
                mobile app can help you reach a wider audience and customer
                engagement.
              </span>
            </div>

            <Link to={"/mobile-app-development"}>
              <button className=" group relative flex items-center justify-center gap-2 px-5 py-2.5 bg-yellow-400   text-white font-bold rounded-full border-3 border-white/30 transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:border-white/60 overflow-hidden m-auto">
                Read More
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                >
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-60 transition-all duration-300 ease-out transform -translate-x-full group-hover:translate-x-full"></span>
              </button>
            </Link>
          </div>
          <img src={img2} alt="df" className="h-full w-full" />
          <div className="absolute top-[90%] right-0 transform -translate-x-0 -translate-y-3/4 text-white p-4 rounded-lg backdrop-blur-lg bg-black/40 shadow-md">
            <h1 className="featured_title sm:text-xl sm:font-semibold tracking-wide">
              MOBILE APP DEVELOPMENT
            </h1>
          </div>
        </div>
        {/* card -3 */}
        <div class="featured_card">
          <div class="hover-text">
            <h1 className="text-center text-xl md:text-2xl font-bold mb-2">
              Professional Website Development Services
            </h1>
            <div className="flex justify-center items-center p-3">
              <span className="text-[13px] md:text-[16px] text-white text-justify max-w-3xl leading-relaxed">
                As technology continues to evolve at an unprecedented pace, the
                role of Website development will only grow in significance. It
                is a field that demands intellectual curiosity, problem-solving
                abilities, and a passion for creating something new.
              </span>
            </div>
            <Link to={"/website-development-company"}>
              <button className=" group relative flex items-center justify-center gap-2 px-5 py-2.5 bg-yellow-400   text-white font-bold rounded-full border-3 border-white/30 transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:border-white/60 overflow-hidden m-auto">
                Read More
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                >
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-60 transition-all duration-300 ease-out transform -translate-x-full group-hover:translate-x-full"></span>
              </button>
            </Link>
          </div>
          <img src={img3} alt="df" className="h-full w-full" />
          <div className="absolute top-[90%] right-0 transform -translate-x-0 -translate-y-3/4 text-white p-4 rounded-lg backdrop-blur-lg bg-black/40 shadow-md">
            <h1 className="featured_title sm:text-xl sm:font-semibold tracking-wide">
              WEBSITE DEVELOPMENT
            </h1>
          </div>
        </div>
        {/* card -4 */}
        <div class="featured_card">
          <div class="hover-text">
            <h1 className="text-center text-xl md:text-2xl font-bold mb-2">
              Result-Driven SEO
            </h1>
            <div className="flex justify-center items-center p-3">
              <span className="text-[13px] md:text-[16px] text-white text-justify max-w-3xl leading-relaxed">
                In Ultrafly Solutions social media marketing, you use popular
                social media networks to achieve your marketing and branding
                goals. Social media marketing isn't just about creating a
                business account and posting whenever you want. You need to
                develop a strategy with measurable goals that includes.
              </span>
            </div>
            <Link to={"/digital-marketing-company"}>
              <button className=" group relative flex items-center justify-center gap-2 px-5 py-2.5 bg-yellow-400   text-white font-bold rounded-full border-3 border-white/30 transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:border-white/60 overflow-hidden m-auto">
                Read More
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                >
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-60 transition-all duration-300 ease-out transform -translate-x-full group-hover:translate-x-full"></span>
              </button>
            </Link>
          </div>
          <img src={img4} alt="df" className="h-full w-full" />
          <div className="absolute top-[90%] right-0 transform -translate-x-0 -translate-y-3/4 text-white p-4 rounded-lg backdrop-blur-lg bg-black/40 shadow-md">
            <h1 className="featured_title sm:text-xl sm:font-semibold tracking-wide">
              SEO OPTIMIZATION
            </h1>
          </div>
        </div>
        {/* card -5 */}
        <div class="featured_card">
          <div class="hover-text">
            <h1 className="text-center text-xl md:text-2xl font-bold mb-2">
              Social Media Marketing
            </h1>
            <div className="flex justify-center items-center p-3">
              <span className="text-[13px] md:text-[16px] text-white text-justify max-w-3xl leading-relaxed">
                Digital marketing content is a pivotal tool for online success.
                It encompasses various forms, from blog posts and videos to
                social media updates and email campaigns. Effective content
                resonates with your audience, delivers value, and aligns with
                your brand's message.
              </span>
            </div>
            <Link to={"/digital-marketing-company"}>
              <button className=" group relative flex items-center justify-center gap-2 px-5 py-2.5 bg-yellow-400   text-white font-bold rounded-full border-3 border-white/30 transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:border-white/60 overflow-hidden m-auto">
                Read More
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                >
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-60 transition-all duration-300 ease-out transform -translate-x-full group-hover:translate-x-full"></span>
              </button>
            </Link>
          </div>
          <img src={img5} alt="df" className="h-full w-full" />
          <div className="absolute top-[90%] right-0 transform -translate-x-0 -translate-y-3/4 text-white p-4 rounded-lg backdrop-blur-lg bg-black/40 shadow-md">
            <h1 className="featured_title sm:text-xl sm:font-semibold tracking-wide">
              DIGITAL MARKETING
            </h1>
          </div>
        </div>
        {/* card -6 */}
        <div class="featured_card">
          <div class="hover-text leading-4">
            <h1 className="text-center text-xl md:text-2xl font-bold mb-2">
              Expert IT Staffing Solutions
            </h1>
            <div className="flex justify-center items-center p-3">
              <span className="text-[13px] md:text-[16px] text-white text-justify max-w-3xl leading-relaxed">
                Staffing: key to success, blending recruiting, training,
                intuition, and data. Staffing, the cornerstone of organizational
                success, is a strategic function that involves recruiting,
                selecting, training, and developing employees to meet an
                organization's goals.
              </span>
            </div>
            <Link to={"/it-staffing"}>
              <button className=" group relative flex items-center justify-center gap-2 px-5 py-2.5 bg-yellow-400   text-white font-bold rounded-full border-3 border-white/30 transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:border-white/60 overflow-hidden m-auto">
                Read More
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                >
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-60 transition-all duration-300 ease-out transform -translate-x-full group-hover:translate-x-full"></span>
              </button>
            </Link>
          </div>
          <img src={img6} alt="df" className="h-full w-full" />
          <div className="absolute top-[90%] right-0 transform -translate-x-0 -translate-y-3/4 text-white p-4 rounded-lg backdrop-blur-lg bg-black/40 shadow-md">
            <h1 className="featured_title sm:text-xl sm:font-semibold tracking-wide">
              IT STAFFING
            </h1>
          </div>
        </div>
      </section>


      {/* featured cta */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between bg-gradient-to-tr from-orange-500 via-orange-400 to-yellow-200 mx-auto overflow-hidden shadow-xl py-16 my-16 relative">
        <div className="text-center relative px-6 py-5 md:py-10 z-10 md:pl-10 lg:pl-44">
          <h6 className="text-gray-900 lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-extrabold leading-tight tracking-tight">
            Unlock
          </h6>
          <h2 className="text-gray-800 lg:text-7xl md:text-6xl sm:text-5xl text-3xl font-extrabold leading-tight tracking-tight">
            Your Potential
          </h2>

          <div className="mt-6">
            <p className="text-xl text-gray-700">
              We Are Always Providing Best Software Service For You
            </p>
          </div>

          <Link to="/contact-us">
            <button className="group relative flex items-center justify-center gap-2 px-5 py-2.5 bg-yellow-400 text-white font-bold rounded-full border-3 border-white/30 transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:border-white/60 overflow-hidden m-auto mt-4 z-50">
              Join with us
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-60 transition-all duration-300 ease-out transform -translate-x-full group-hover:translate-x-full"></span>
            </button>
          </Link>
        </div>
        <img
          src={software}
          className="object-contain absolute inset-0 h-full w-full lg:translate-x-36 md:-translate-x-2 hidden sm:block"
          alt="img"
        />
      </div>
    </>
  );
}

export default Featured;
