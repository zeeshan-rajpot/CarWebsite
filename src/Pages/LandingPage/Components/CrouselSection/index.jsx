import React from "react";
import Crousel from "./Crousel/CrouselCom.jsx";
export const index = () => {
  return (
    <div>
      <div className="mt-5 text-center">
        <p
          className="my-0 mt-5 fw-bold"
          style={{ color: "#030303", fontWeight: "400", fontSize: "48px" }}
        >
          Over Customers trust us
        </p>
        <p className="my-0 mb-5" style={{ color: "#030303", fontSize: "16px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
      </div>

      <div>
        <Crousel />
      </div>
    </div>
  );
};
export default index;
