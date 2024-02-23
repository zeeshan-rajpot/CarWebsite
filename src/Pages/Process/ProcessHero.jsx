import React from "react";

import { Col, Container, Row } from "react-bootstrap";

const ProcessHero = (props) => {
  return (
    <>
      <div
        className="bgimg d-flex align-items-center justify-content-center flex-column text-center heroPadding proceesbig"
        style={{
          backgroundImage: `url("${props.img}")`,
          backgroundPosition: "top center ",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundClip: "padding-box",
        }}
      >
        <div className="blurbg px-4 rounded-5">
        <h1>
          <b
            className="text-light text-center mobhl"
            style={{ fontSize: "60px" }}
          >
            {props.heading}
          </b>
        </h1>
        <p
          className="text-light fw-lighter mobhm"
          style={{ fontSize: "25px", fontWeight: "400" }}
        >
          {" "}
          {props.heading1}
        </p>
        <p className=" text-light mobw100 w-100 text-center mobhs mb-0">
          {props.heading2}
        </p>
        <p
          className=" text-light mobw100 w-100 text-center fw-bolder  lh-1 mobhs"
          style={{ fontSize: "28px" }}
        >
          {props.heading3}
        </p>
        </div>
      
      </div>
    </>
  );
};

export default ProcessHero;
