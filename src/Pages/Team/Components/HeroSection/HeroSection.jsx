import React from "react";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <>
      <div
        className="bgheroSection mb-5"
        style={{
          height: "700px",
        }}
      >
        <div
          className="w-50 d-flex flex-column mobwteam"
          style={{
            padding: "20em 10em ",
          }}
        >
          <p
            style={{
              fontWeight: "800",
              fontSize: "80px",
              color: "#1985D2",
            }}
            className="lh-1"
          >
            Our Team
          </p>
          <h2>Meet the entire team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
