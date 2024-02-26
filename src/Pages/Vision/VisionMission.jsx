import React from "react";
import { Col } from "react-bootstrap";

const VisionMission = () => {
  return (
    <div className="container w-100 my-5 ">
      <div className="row">
        <Col md={6} className=" mt-5">
          <h2 style={{ color: "" }} className="fw-bold text-center">
          Vision & mission
          </h2>
          <p  className="visionbigp" style={{ color: "#303030", fontSize: "14px", fontWeight: "" }}>
          Our vision to transform the process of acquiring a vehicle by offering a smooth, transparent, and customer-focused service that enables individuals to easily sell their vehicle on our platform and helps businesses find their ideal vehicle match with ease, efficiency, and unmatched satisfaction.
          </p>
        </Col>
        <Col md={6} className=" text-center d-flex align-items-end ">
          <img
            src="/image 104.png"
            alt="mobile"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Col>
      </div>
    </div>
  );
};

export default VisionMission;
