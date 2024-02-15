import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const index = () => {
  return (
    <div
      className="pt-5 mt-1 position-relative bgFooter  "
      style={{
        backgroundColor: "#1985D2",
        paddingBottom: "80px",
      }}
    >
      <div className="container">
        <Row
          style={{
            paddingTop: "2em",
          }}
          className=" m-auto "
        >
          <Col xs={6} lg={3} className=" text-light d-flex flex-column ">
            <h4
              // className="border-bottom py-2 "
              style={{ fontSize: "20px", fontWeight: "700" }}
            >
              <span className="border-bottom py-2">Location</span>
            </h4>
            <p className="pt-2 ">Ontario</p>
          </Col>
          <Col xs={6} lg={3} className=" text-light d-flex flex-column ">
            <h4
              // className="border-bottom py-2 "
              style={{ fontSize: "20px", fontWeight: "700" }}
            >
              <span className="border-bottom py-2 ">Company</span>
            </h4>
            <Link to="/story" className="link">
              <p className="pt-2 ">Our Story</p>
            </Link>
            <Link to="/vision" className="link">
              <p>Our Vision</p>
            </Link>
            <Link to="/team" className="link">
              <p>Our Team </p>
            </Link>
          </Col>
          <Col xs={6} lg={3} className=" text-light d-flex flex-column ">
            <h4 style={{ fontSize: "20px", fontWeight: "700" }}>
              <span className="border-bottom py-2 ">Car chaser</span>
            </h4>
            <Link to="/process" className="link">
              <p className="pt-2 ">The Process</p>
            </Link>
            <Link to="/Trade" className="link">
              <p>Trade-In</p>
            </Link>
            <Link to="/promise" className="link">
              <p>Our Promise </p>
            </Link>
          </Col>
          <Col xs={6} lg={3} className=" text-light d-flex flex-column ">
            <h4
              // className="border-bottom py-2 "
              style={{ fontSize: "20px", fontWeight: "700" }}
            >
              <span className="border-bottom py-2 ">Help center</span>
            </h4>
            <Link to="/ContactUs" className="link">
              <p className="py-2 ">Contact Us</p>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default index;
