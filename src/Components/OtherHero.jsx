import React from "react";
import "./otherhero.css";
import { Col, Container, Row } from "react-bootstrap";

const OtherHero = (props) => {
  return (
    <>
      <div
        className="bgimg d-flex align-items-center justify-content-center flex-column text-center heroPadding"
        style={{
          backgroundImage: `url("${props.img}")`,
          backgroundPosition: "top center ",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundClip: "padding-box",
        }}
      >
        <h1>
          <b
            className="text-light text-center mobhl"
            style={{ fontSize: "70px" }}
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
        <p className=" text-light mobw100 w-50 text-center mobhs">
          {props.heading2}
        </p>
        <p
          className=" text-light mobw100 w-50 text-center fw-bolder  lh-1 mobhs"
          style={{ fontSize: "28px" }}
        >
          {props.heading3}
        </p>
      </div>
    </>
  );
};

export default OtherHero;
