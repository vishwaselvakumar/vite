import React, { useEffect } from "react";
import About from "../components/About/About";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Featured from "../components/Featured/Featured";
import Hero from "../components/Hero/Hero";
import NewTestimonials from "../components/Testimonials/NewTestimonials";
import OurTechnologies from "../components/homeComponents/OurTechnologies";
import OurClients from "../components/homeComponents/OurClients";
import OurIndustryExpertise from "../components/homeComponents/OurIndustryExpertise";
import Badges from "../components/About/badges";
import ClientReview from '../components/homeComponents/ClientReview';
import PartneredWith from "../components/homeComponents/PartneredWith";


function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Badges />
      <Featured />
      <OurTechnologies/>
      <ChooseUs /> 
      <OurIndustryExpertise/>
      <ClientReview/>
      <PartneredWith />
      {/* <OurClients/> */}
      {/* <NewTestimonials /> */}
    </>
  );
}

export default Home;
