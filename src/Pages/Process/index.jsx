import React from "react";
// import Footer from "../../Components/Footer/index";
import NewFooter from "../../Components/Footer/NewFooter";
import OtherHero from "../../Components/OtherHero";
import ProcessSection from "./ProcessSection";
import Navbar from '../../Components/NewNavbar';
import ProcessHero from "./ProcessHero";


const index = () => {
  return (
    <>
      <Navbar />
 
    
<ProcessHero
        img="/unbrand-electronic-car-driving-high-speed-street-futuristic-city 1.png"
        heading="Let’s help you sell your car"
        heading1="we help you chase the buyers while you continue with your daily activities."
        heading3="Car Chaser"
        />
      <ProcessSection />

      {/* <Footer /> */}
      <NewFooter/>
    </>
  );
};

export default index;
