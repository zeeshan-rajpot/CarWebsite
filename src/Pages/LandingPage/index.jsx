import React from "react";
import Navbar from "../../Components/Navbar/index";
import DetailCounter from "./Components/DetailsCounter/DetailCounter";
import MobileDownload from "./Components/MobileDownload/MobileDownload";
import Footer from "../../Components/Footer/index";
import "./landingPage.css";
import HerSection from "./Components/HeroSection/HerSection";
import CrouselSection from "./Components/CrouselSection/index.jsx";
// import BookAppointmentConfirm from "./demo.jsx";
const index = () => {
  return (
    <>
      <Navbar />
      <HerSection />
      <DetailCounter />
      <MobileDownload />
      <div
        className="carBg mb-5"
        style={{
          marginTop: "-5rem",
          zIndex: "+5",
          position: "relative",
        }}
      >
        <p
          style={{
            color: "white",
            paddingTop: "80px",
            textAlign: "center",
            fontSize: "36px",
            fontWeight: "700",
          }}
        >
          <b>
            {" "}
            It's our responsibility to sell your car at{" "}
            <span style={{ color: "#1985D2" }}>Best deal</span>
          </b>
        </p>
        <p
          className="text-light pt-1 text-center w-50 m-auto mobw100"
          style={{ fontSize: "16px", fontWeight: "500" }}
        >
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt .
        </p>
      </div>

      <CrouselSection />
      <Footer />

      {/* <BookAppointmentConfirm/> */}
    </>
  );
};

export default index;
