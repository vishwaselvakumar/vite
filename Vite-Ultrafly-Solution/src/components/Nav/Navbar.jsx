import { useState } from "react";
import NavList from "../Nav/NavList";
import logo from "../../images/ultrafly/ultraflysolutionslog.png";
import { motion, useScroll } from "framer-motion";
import "./nav.css";
// import icon from "../../images/our_services/mobileImgs/mobile-service.png";
// import icon1 from "../../images/our_services/websiteImg/coding.png";
// import icon2 from "../../images/our_services/seo&digital/digital-marketing.png";
// import icon3 from "../../images/our_services/websiteImg/expert.png";
// import icon0 from "../../images/our_services/websiteImg/software.png";
// import down_arrow from "../../images/hero/down-arrow.png";
// import up_arrow from "../../images/hero/navigate-up-arrow.png";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const [sticky, setSticky] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  // hamburger menu
  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <div className={`sticky top-0 z-50 w-full`}>
        <nav className={`  ${sticky ? "shadow-xl !bg-white" : ""}`}>
          {/* logo */}
          <div className=" w-full flex flex-row  items-center justify-between px-4 py-3  md:px-12">
            <Link to="/">
              <img
                src={logo}
                alt="ultraflysolutions pvt ltd"
                className=" w-20 md:w-[150px]"
              />
            </Link>
            <div className="navlist-nav">
              <NavList />
            </div>
            <i
              onClick={hamburgerMenu}
              className="fa-bars fa-solid hidden text-[#03a4ed] text-2xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"></i>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex gap-10">
              {/* mobile menu -------------- */}

              {/* hamburger menu */}
              <div
                className={`flex top-0 flex-col fixed w-full left-0 h-screen bg-white z-[9999999999] px-[40px] ease-in-out duration-500  ${hamburger ? "left-0" : "-left-[100%] text-red"
                  }`}>
                <div className="flex justify-between pt-5">
                  <Link to="/contact-us">
                    <button
                      className="flex justify-center gap-2 items-center mx-auto lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#eca918] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-1 overflow-hidden border-2 rounded-full group"
                      type="submit"
                    >
                      Contact Us
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 19"
                        className="w-6 h-6 justify-end group-hover:rotate-90 bg-white ease-linear duration-300 rounded-full p-1 rotate-45"
                      >
                        <path
                          className="fill-black"
                          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        ></path>
                      </svg>
                    </button>
                  </Link>
                  <i
                    onClick={hamburgerMenu}
                    className="fa-solid fa-xmark text-[#03a4ed] text-4xl cursor-pointer self-end"></i>
                </div>

                <MobileNav handleClose={hamburgerMenu} />
              </div>
              {/* hamburger */}
            </div>
          </div>
          <motion.div
            className="progress-bar "
            style={{ scaleX: scrollYProgress }}
          />
        </nav>
      </div>
    </>
  );
}

export default Navbar;
