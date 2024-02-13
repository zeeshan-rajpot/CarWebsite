import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const index = () => {
  return (
    <div
      className="py-5 mt-1 position-relative bgFooter"
      style={{
        backgroundColor: "#1985D2",
      }}
    >
      <div className="container">
        <Row
          style={{
            paddingTop: "2em",
          }}
        >
          <Col xs={6} lg={3} className=" text-light d-flex flex-column ">
            <h4
              className="border-bottom py-2 "
              style={{ fontSize: "20px", fontWeight: "700" }}
            >
              Location
            </h4>
            <p className="pt-2 ">Ontario</p>
          </Col>
          <Col xs={6} lg={3} className=" text-light d-flex flex-column ">
            <h4
              className="border-bottom py-2 "
              style={{ fontSize: "20px", fontWeight: "700" }}
            >
              Company
            </h4>
            <Link to="/story" className="link">
              <p className="pt-2 ">Our story</p>
            </Link>
            <Link to="/vision" className="link">
              <p>Our Vision</p>
            </Link>
            <Link to="/team" className="link">
              <p>Our team </p>
            </Link>
          </Col>
          <Col xs={6} lg={3} className=" text-light d-flex flex-column ">
            <h4
              className="border-bottom py-2 "
              style={{ fontSize: "20px", fontWeight: "700" }}
            >
              Car chaser
            </h4>
            <p className="py-2 ">The process</p>
            <p>Trade in</p>
            <p>Our process</p>
          </Col>
          <Col xs={6} lg={3} className=" text-light d-flex flex-column ">
            <h4
              className="border-bottom py-2 "
              style={{ fontSize: "20px", fontWeight: "700" }}
            >
              Help center
            </h4>
            <Link to="/ContactUs" className="link">
              <p className="py-2 ">Contact us</p>
            </Link>
          </Col>
        </Row>
        
      </div>
    </div>
  );
};

export default index;
