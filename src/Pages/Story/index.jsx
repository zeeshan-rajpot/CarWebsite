import React from "react";
import OtherHero from "../../Components/OtherHero";
import SuccessJourney from "./SuccessJourney";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/index";

const Story = () => {
  return (
    <>
      <Navbar />
      <OtherHero img="/Rectangle 3099.png" heading="Our Story" />
      <SuccessJourney />
      <Footer />
    </>
  );
};

export default Story;
