import React from "react";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/index";
import OtherHero from "../../Components/OtherHero";
import ProcessSection from "./ProcessSection";

const index = () => {
  return (
    <>
      <Navbar />
      <OtherHero
        img="/processBg.png"
        heading="Let’s help you sell your car"
        heading1="we help you chase the buyers while you continue with your daily activities."
        heading3="Car Chaser"
      />
      <ProcessSection />
      <Footer />
    </>
  );
};

export default index;
