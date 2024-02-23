import React from "react";
import Navbar from "../../Components/NewNavbar";
import NewFooter from "../../Components/Footer/NewFooter";
import Teamsection from "./Components/TeamSection/Teamsection";
import OtherHero from "../../Components/OtherHero";

const index = () => {
  return (
    <>
      <Navbar />
      <OtherHero
        img="/silhouette-confident-businesspeople (1) 1.png"
        heading=" Our Team"
        heading1="Meet the entire team"
      />
      <Teamsection />
      {/* <Footer /> */}\
      <NewFooter />
    </>
  );
};

export default index;
