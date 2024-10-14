import { Link } from "react-router-dom";
// import icon from "../../images/our_services/mobileImgs/mobile-service.png";
// import icon1 from "../../images/our_services/websiteImg/coding.png";
// import icon2 from "../../images/our_services/seo&digital/digital-marketing.png";
// import icon3 from "../../images/our_services/websiteImg/expert.png";
// import icon0 from "../../images/our_services/websiteImg/software.png";
// import { useState } from "react";
// import down_arrow from "../../images/hero/down-arrow.png";
// import up_arrow from "../../images/hero/navigate-up-arrow.png";

function NavList() {
  return (
    <>
      <ul className="flex gap-9 text- text-[16px] font-medium xl:none">
        <li className="hover:text-blue-600">
          <Link to="/">Home</Link>
        </li>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="hover:text-blue-600">
            Services
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-80 p-2 shadow"
          >
            <li className="hover:bg-blue-200 rounded-xl hover:text-blue-600">
              <Link to="/software-development">Software Development</Link>
            </li>
            <li className="hover:bg-blue-200 rounded-xl hover:text-blue-600">
              <Link to="/mobile-app-development">
                Mobile Application Development
              </Link>
            </li>
            <li className="hover:bg-blue-200 rounded-xl hover:text-blue-600">
              <Link to="/website-development-company">Website Development</Link>
            </li>
            <li className="hover:bg-blue-200 rounded-xl hover:text-blue-600">
              <Link to="/digital-marketing-company">
                Seo & Digital Marketing
              </Link>
            </li>
            <li className="hover:bg-blue-200 rounded-xl hover:text-blue-600">
              <Link to="/it-staffing">IT Staffing</Link>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="hover:text-blue-600">
            Hire Our Resources
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[800px] p-2 shadow grid grid-cols-3"
          >
            <div>
              <li className="text-bold text-lg text-blue-700">
                <h2>BACKEND</h2>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-dot-net-developers"}>
                  Hire .NET Developers
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-java-developers"}>Hire Java Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-laravel-developers"}>
                  Hire Laravel Developers
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-node-js-developers"}>
                  Hire Node.js Developers
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-php-developers"}>Hire PHP Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-python-developers"}>
                  Hire Python Developers
                </Link>
              </li>
            </div>

            <div>
              <li className="text-bold text-lg text-blue-700">
                <h2>MOBILE</h2>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-android-app-developers"}>
                  Hire Android App Developers
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-flutter-developers"}>
                  Hire Flutter Developers
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-ionic-developers"}>Hire Ionic Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-ios-developers"}>Hire iOS Developers</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-react-native-developers"}>
                  Hire React Native Developers
                </Link>
              </li>
            </div>
            <div>
              <li className="text-bold text-lg text-blue-700">
                <h2>OTHERS</h2>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-back-end-developers"}>
                  Hire Backend Developers
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-blockchain-developers"}>
                  Hire Blockchain Developers
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-devops-developers"}>
                  Hire DevOps Developers
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-front-end-developers"}>
                  Hire Frontend Developers
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-full-stack-developers"}>
                  Hire Full Stack Developers
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-mernstack-developers"}>
                  Hire MERN Stack Developers
                </Link>
              </li>
            </div>

            <div>
              <li className="text-bold text-lg text-blue-700">
                <h2>FRONTEND</h2>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-angularjs-developers"}>
                  Hire AngularJS Developers
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-reactjs-developers"}>
                  Hire React Developers
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to={"/hire-javascript-developers"}>
                  Hire Javascript Developers
                </Link>
              </li>
            </div>
          </ul>
        </div>

        <li className="hover:text-blue-600">
          <Link to="/blog">Blog</Link>
        </li>
        {/* <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="hover:text-blue-600">Newsletter</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li className="hover:text-blue-600"><Link>Case Studies</Link></li>
          </ul>
          </div> */}

        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="hover:text-blue-600">
            Company
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li className="hover:text-blue-600">
              <Link to="/about-us">About us</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/contact-us">Contact us</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/careers/web">Career</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/privacy-policy"> Privacy & Policy</Link>
            </li>
          </ul>
        </div>
      </ul>
    </>
  );
}

export default NavList;
