import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Promise = () => {
  return (
    <>
      <div className="my-5 text-center mobwpromise bgimgpromise">
        <h1 className="fw-bold">Our Promise</h1>
        <p className="w-50 m-auto fw-normal mobw100">
          Experience a hassle-free car selling process with Car Chaser. We
          understand the challenges of private car sales, and we're committed to
          making it easy for you. Your Hassle-Free Car Selling Solution!
        </p>
      </div>

      <Container>
        <Row className="text-center gy-4">
          <Col xs={12} md={4}>
            <img
              src="promisesvg1.svg"
              style={{ width: "90%", height: "auto" }}
            />
          </Col>
          <Col xs={12} md={4}>
            <img
              src="promisesvg2.svg"
              style={{ width: "90%", height: "auto" }}
            />
          </Col>
          <Col xs={12} md={4}>
            <img
              src="promisesvg3.svg"
              style={{ width: "90%", height: "auto" }}
            />
          </Col>
          <Col xs={12} md={4}>
            <img
              src="promisesvg4.svg"
              style={{ width: "90%", height: "auto" }}
            />
          </Col>
          <Col xs={12} md={4}>
            <img
              src="promisesvg5.svg"
              style={{ width: "90%", height: "auto" }}
            />
          </Col>
          <Col xs={12} md={4}>
            <img
              src="promisesvg6.svg"
              style={{ width: "90%", height: "auto" }}
            />
          </Col>
          <Col xs={12} md={4}>
            <img
              src="promisesvg7.svg"
              style={{ width: "90%", height: "auto" }}
            />
          </Col>
          <Col xs={12} md={4}>
            <img
              src="promisesvg8.svg"
              style={{ width: "90%", height: "auto" }}
            />
          </Col>
          <Col xs={12} md={4}>
            <img
              src="promisesvg9.svg"
              style={{ width: "90%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Promise;
