import React from "react";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/index";
import HeroSection from "./Components/HeroSection/HeroSection";
import Teamsection from "./Components/TeamSection/Teamsection";
import OtherHero from "../../Components/OtherHero";

const index = () => {
  return (
    <>
      <Navbar />
      <OtherHero
        img="/Rectangle 3105.png"
        heading=" Our Team"
        heading1="Meet the entire team"
      />
      <Teamsection />
      <Footer />
    </>
  );
};

export default index;
