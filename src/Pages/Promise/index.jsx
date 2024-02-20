import React from "react";
import Navbar from "../../Components/NewNavbar";
// import Footer from "../../Components/Footer/index";
import NewFooter from "../../Components/Footer/NewFooter";

import OtherHero from "../../Components/OtherHero";
import Promise from "./Promise";

import "./style.css";
export const index = () => {
  return (
    <div>
      <Navbar />
      <OtherHero img="/image 138.png" heading="Our Promise" />
      <div className="promisebg pb-5">
        <Promise />
      </div>

      {/* <Footer /> */}
      <NewFooter />
    </div>
  );
};
export default index;
