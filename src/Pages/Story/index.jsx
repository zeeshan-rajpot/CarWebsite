import React from "react";
import OtherHero from "../../Components/OtherHero";
import SuccessJourney from "./SuccessJourney";
import Navbar from '../../Components/NewNavbar';
// import Footer from "../../Components/Footer/index";
import NewFooter from "../../Components/Footer/NewFooter";


const Story = () => {
  return (
    <>
      <Navbar />
      <OtherHero img="/Rectangle 3099.png" heading="Our Story" />
      <SuccessJourney />
      {/* <Footer /> */}
      <NewFooter/>
    </>
  );
};

export default Story;
