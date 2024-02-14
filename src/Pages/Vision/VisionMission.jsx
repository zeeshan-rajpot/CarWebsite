import React from "react";
import { Col } from "react-bootstrap";

const VisionMission = () => {
  return (
    <div className="container w-100 my-5 ">
      <div className="row">
        <Col md={12} className=" mt-5">
          <h2 style={{ color: "#1985D2" }} className="fw-bold">
            Our Vision
          </h2>
          <p style={{ color: "#303030", fontSize: "18px", fontWeight: "600" }}>
            Our vision is to establish ourselves as the foremost vehicle
            sourcing company in Ontario and beyond, by leveraging innovation and
            industry expertise to redefine the vehicle acquisition experience.
            Through our dedication to exceptional service, reliability, and
            continuous improvement, we endeavor to set a new standard for
            automotive sourcing, positioning ourselves as the benchmark of
            excellence in Ontario and beyond ices will guide us in building a
            network of trusted partnerships with dealerships, and private
            sellers. We aspire to be the go-to resource for individuals looking
            to sell their vehicle and businesses seeking a diverse range of
            high-quality vehicles, offering tailored solutions to meet their
            specific requirements. Through our dedication to exceptional
            service, reliability, and continuous improvement, we endeavor to set
            a new standard for automotive sourcing, positioning ourselves as the
            benchmark of excellence in Ontario and beyond.
          </p>
        </Col>
        <Col md={12} className=" text-center ">
          <img
            src="./image 104.png"
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
