import React from "react";
// import Footer from "../../Components/Footer/index";
import NewFooter from "../../Components/Footer/NewFooter";
import OtherHero from "../../Components/OtherHero";
import ProcessSection from "./ProcessSection";
import Navbar from '../../Components/NewNavbar';


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
      <div className="bgprocessimg">

      <ProcessSection />
      </div>
      {/* <Footer /> */}
      <NewFooter/>
    </>
  );
};

export default index;
