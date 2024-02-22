import React from "react";

import DetailCounter from "./Components/DetailsCounter/DetailCounter";
import MobileDownload from "./Components/MobileDownload/MobileDownload";
// import Footer from "../../Components/Footer/index";
import NewFooter from "../../Components/Footer/NewFooter";
import "./landingPage.css";
import HerSection from "./Components/HeroSection/HerSection";
import CrouselSection from "./Components/CrouselSection/index.jsx";
import Navbar from "../../Components/NewNavbar.jsx";
import NewcarCompunent from "./Components/NewcarCompunent.jsx";
// import BookAppointmentConfirm from "./demo.jsx";
const index = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <HerSection />
      <DetailCounter />
      <div className="mt-5 mb-5 pt-4" style={{background:'#F8F8F8'}}>
      <MobileDownload />
      </div>

     
<NewcarCompunent/>
      <CrouselSection />
      <NewFooter />
      {/* <BookAppointmentConfirm/> */}
    </>
  );
};

export default index;
