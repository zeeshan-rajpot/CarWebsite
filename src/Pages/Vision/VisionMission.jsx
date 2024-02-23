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
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,  
          </p>
          <p  className="visionbigp" style={{ color: "#303030", fontSize: "14px", fontWeight: "" }}>
          Consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
        </Col>
        <Col md={6} className=" text-center d-flex align-items-end ">
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
