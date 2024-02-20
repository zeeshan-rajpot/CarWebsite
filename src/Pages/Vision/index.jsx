import React from "react";
import OtherHero from "../../Components/OtherHero";
import VisionMission from "./VisionMission";
import Navbar from "../../Components/NewNavbar";
import NewFooter from "../../Components/Footer/NewFooter";

const index = () => {
  return (
    <>
      <Navbar />
      <OtherHero
        img="/Rectangle 3098.png"
        heading="Our Vision"
        heading1="Vision is the art of seeing what is invisible to others."
      />
      <VisionMission />
      {/* <Footer /> */}
      <NewFooter />
    </>
  );
};

export default index;
