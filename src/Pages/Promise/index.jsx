import React from "react";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/index";
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
     
      <Footer />
    </div>
  );
};
export default index;
