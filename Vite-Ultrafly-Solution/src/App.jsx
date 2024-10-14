import React, { Suspense, lazy, useEffect } from "react";
import Contact from "./Pages/Contact";
import Navbar from "./components/Nav/Navbar";
// import { NotificationContainer } from "NotificationContainer";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
// import { AuthContextProvider } from "./context/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./Pages/Loder";
import ScrollToTop from "./components/ScrollToTop";
import SocialMedias from "./Pages/our_services_pages/SocialMedias";
import Loder from "./Pages/Loder";
import Error from "./Pages/Error";
import PrivacyPolicy from "./Pages/Schedule/PrivacyPolicy";

const Login = lazy(() => import("./Pages/Login"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const Home = lazy(() => import("./Pages/Home"));
const Classes = lazy(() => import("./Pages/Classes"));
const Blog = lazy(() => import("./Pages/Blog"));
const Schedule = lazy(() => import("./Pages/Schedule/Carrers"));
const Monday = lazy(() => import("./Pages/Schedule/Web"));
const Tuesday = lazy(() => import("./Pages/Schedule/App"));
const Wednesday = lazy(() => import("./Pages/Schedule/Seo"));
const Thursday = lazy(() => import("./Pages/Schedule/Digital"));
const Friday = lazy(() => import("./Pages/Schedule/Hr"));
const Saturday = lazy(() => import("./Pages/Schedule/Bd"));
const Sunday = lazy(() => import("./Pages/Schedule/More"));
const Gallery = lazy(() => import("./Pages/Gallery/Gallery"));
const GalleryPage1 = lazy(() => import("./Pages/Gallery/GalleryPage1"));
const GalleryPage2 = lazy(() => import("./Pages/Gallery/GalleryPage2"));
const About = lazy(() => import("./Pages/About"));
const Ourservices = lazy(() => import("./Pages/OurServices"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const ITStaffing = lazy(() => import("./Pages/our_services_pages/ITStaffing"));
const Mobile = lazy(() => import("./Pages/our_services_pages/Mobile"));
const Seo = lazy(() => import("./Pages/our_services_pages/Seo"));
const Software = lazy(() => import("./Pages/our_services_pages/Software"));
const Website = lazy(() => import("./Pages/our_services_pages/Website"));
const UnlockingFuture = lazy(() =>
  import("./Pages/blog_pages/UnlockingFuture")
);
const UnlockingSuccess = lazy(() =>
  import("./Pages/blog_pages/UnlockingSuccess")
);
const MobileDevelopment = lazy(() =>
  import("./Pages/blog_pages/MobileDevelopment")
);
const TopHeader = lazy(() => import("./components/Nav/TopHeader"));
const Python = lazy(() => import("./Pages/HireResources/Backend/Python"));
const Laravel = lazy(() => import("./Pages/HireResources/Backend/Laravel"));
const Php = lazy(() => import("./Pages/HireResources/Backend/php"));
const Node = lazy(() => import("./Pages/HireResources/Backend/Node"));
const Java = lazy(() => import("./Pages/HireResources/Backend/Java"));
const Dotnet = lazy(() => import("./Pages/HireResources/Backend/Dotnet"));
const Angular = lazy(() => import("./Pages/HireResources/FrontEnd/Angular"));
const Reactjs = lazy(() => import("./Pages/HireResources/FrontEnd/React"));
const ClientReview = lazy(() =>
  import("./components/homeComponents/ClientReview")
);
const Javascript = lazy(() =>
  import("./Pages/HireResources/FrontEnd/Javascript")
);
const Android = lazy(() => import("./Pages/HireResources/Mobile/Android"));
const Flutter = lazy(() => import("./Pages/HireResources/Mobile/Flutter"));
const Ionic = lazy(() => import("./Pages/HireResources/Mobile/Ionic"));
const IOS = lazy(() => import("./Pages/HireResources/Mobile/IOS"));
const ReactNative = lazy(() =>
  import("./Pages/HireResources/Mobile/ReactNative")
);
const BackendDevelopers = lazy(() =>
  import("./Pages/HireResources/Others/BackendDevelopers")
);
const BlockchainDevelopers = lazy(() =>
  import("./Pages/HireResources/Others/BlockchainDevelopers")
);
const DevOps = lazy(() => import("./Pages/HireResources/Others/DevOps"));
const FrontendDevelopers = lazy(() =>
  import("./Pages/HireResources/Others/FrontendDevelopers")
);
const FullstackDevelopers = lazy(() =>
  import("./Pages/HireResources/Others/FullstackDevelopers")
);
const MernFullStack = lazy(() =>
  import("./Pages/HireResources/Others/MernFullStack")
);

function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      {/* <NotificationContainer /> */}
      {/* <AuthContextProvider> */}
        <TopHeader />
        <Navbar />
        <Suspense fallback={<Loder />}>
        <Router>
          <Routes>
            <Route exact={true} path="/" element={<Home />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/portfolio" element={<Classes />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/ultrafly-solutions-driving-tech-innovation"
              element={<UnlockingFuture />}
            />
            <Route
              path="/why-seo-important-in-business"
              element={<UnlockingSuccess />}
            />
            <Route
              path="/top-mobile-development-framework"
              element={< MobileDevelopment/>}
            />
            <Route path="/services" element={<Ourservices />} />
            <Route path="/it-staffing" element={<ITStaffing />} />
            <Route path="/mobile-app-development" element={<Mobile />} />
            <Route path="/digital-marketing-company" element={<Seo />} />
            <Route path="/software-development" element={<Software />} />
            <Route path="/website-development-company" element={<Website />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/careers" element={<Schedule />}>
              <Route path="web" element={<Monday />} />
              <Route path="app" element={<Tuesday />} />
              <Route path="seo" element={<Wednesday />} />
              <Route path="digital" element={<Thursday />} />
              <Route path="hr" element={<Friday />} />
              <Route path="business" element={<Saturday />} />
              <Route path="more" element={<Sunday />} />
            </Route>
            <Route path="gallery" element={<Gallery />}>
              <Route path="page-1" element={<GalleryPage1 />} />
              <Route path="page-2" element={<GalleryPage2 />} />
            </Route>
            <Route path="/hire-python-developers" element={<Python />} />
            <Route path="/hire-php-developers" element={<Php />} />
            <Route path="/hire-laravel-developers" element={<Laravel />} />
            <Route path="/hire-node-js-developers" element={<Node />} />
            <Route path="/hire-java-developers" element={<Java />} />
            <Route path="/hire-dot-net-developers" element={<Dotnet />} />
            <Route path="/hire-angularjs-developers" element={<Angular />} />
            <Route path="/hire-reactjs-developers" element={<Reactjs />} />
            <Route
              path="/hire-javascript-developers"
              element={<Javascript />}
            />
            <Route path="/ClientReview" element={<ClientReview />} />
            <Route path="/hire-android-app-developers" element={<Android />} />
            <Route path="/hire-flutter-developers" element={<Flutter />} />
            <Route path="/hire-ionic-developers" element={<Ionic />} />
            <Route path="/hire-ios-developers" element={<IOS />} />
            <Route
              path="/hire-react-native-developers"
              element={<ReactNative />}
            />
            <Route
              path="/hire-back-end-developers"
              element={<BackendDevelopers />}
            />
            <Route
              path="/hire-blockchain-developers"
              element={<BlockchainDevelopers />}
            />
            <Route path="/hire-devops-developers" element={<DevOps />} />
            <Route
              path="/hire-front-end-developers"
              element={<FrontendDevelopers />}
            />
            <Route
              path="/hire-full-stack-developers"
              element={<FullstackDevelopers />}
            />
            <Route
              path="/hire-mernstack-developers"
              element={<MernFullStack />}
            />

            <Route path="*" element={<Error />} />
          </Routes>
          </Router>
        </Suspense>
        <Footer />
      {/* </AuthContextProvider> */}
      <div className=" fixed right-6 bottom-40 z-40 ">
        <ScrollToTop />
      </div>
      <div className="fixed right-6 bottom-24 z-40 ">
        <SocialMedias />
      </div>
    </>
  );
}

export default App;
