import React from "react";
import Crousel from "./Crousel/CrouselCom.jsx";
export const index = () => {
  return (
    <div className="bgtestmolial">
      <div className="mt-5 text-center pt-3">
        <p
          className="my-0 mt-5 fw-bold mobhl"
          style={{ color: "#030303", fontWeight: "400", fontSize: "48px" }}
        >
          Over Customers trust us
        </p>
        <p className="my-0 mb-5" style={{ color: "#fff", fontSize: "16px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
      </div>

     
        <Crousel />

    </div>
  );
};
export default index;
