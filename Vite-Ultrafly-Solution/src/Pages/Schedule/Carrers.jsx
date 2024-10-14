import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import career_banner from '../../images/career/career_banner.webp'


function Carrers() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Careers | Ultrafly Solutions</title>
          <meta
            name="description"
            content="Join the Ultrafly Solutions team and build a rewarding career in the tech industry. Explore our current job openings and apply today."
          />
          <meta
            name="keywords"
            content="careers, job openings, tech jobs, Ultrafly Solutions careers"
          />
        </Helmet>
      </HelmetProvider>
      <div className="h-60 w-screen flex  items-center justify-center flex-col gap-4 max-sm:px-10" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${career_banner})`,
        backgroundSize: "cover",
        backgroundPosition: "0 30%",
        backgroundRepeat: "no-repeat",
      }} >
        <h2 className="text-[1.4rem] md:text-3xl lg:text-5xl text-white font-semibold">JOIN OUR TEAM</h2>
        <Link to="/contact-us" >
          <button className=" text-black bg-white border border-white py-2 px-4 rounded-lg transition ease-in-out delay-150 duration-300 hover:bg-transparent hover:text-white ">
            Join with us
          </button>
        </Link>
      </div>
      <section className="">
        {/* schedule */}
        <div className="container page-padding py-[3rem] md:py-[7rem]">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Carrers;
