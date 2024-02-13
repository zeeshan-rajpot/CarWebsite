import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Promise = () => {
  return (
    <>
      <div className="my-5 text-center ">
        <h1 className="fw-bold">Our Promise</h1>
        <p className="w-50 m-auto fw-normal">
          Experience a hassle-free car selling process with Car Chaser. We
          understand the challenges of private car sales, and we're committed to
          making it easy for you. Your Hassle-Free Car Selling Solution!
        </p>
      </div>

      <Container>
        <Row className="example mb-5 ">
          <Col>
            {" "}
            <h3 className="fw-bold ">Online bidding platform</h3>
            <p
              style={{
                width: "45%",
              }}
            >
              {" "}
              Experience the ease of selling your car through our cutting-edge
              online bidding platform. With over 300 competing dealers, you're
              guaranteed a win while you enjoy your favorite TV show.
            </p>
          </Col>
        </Row>
        <Row className="example1  mb-5">
          <Col>
            {" "}
            <h3
              className="fw-bold ms-auto"
              style={{
                width: "44%",
              }}
            >
              Get the Best Value for Your Car!
            </h3>
            <p
              className=" ms-auto"
              style={{
                width: "44%",
              }}
            >
              Rest assured, with over 300 dealers waiting for your car, you'll
              receive top dollar without any lowball offers.
            </p>
          </Col>
        </Row>
        <Row className="example mb-5">
          <Col>
            {" "}
            <h3 className="fw-bold ">Sell Stress-Free!</h3>
            <p
              style={{
                width: "45%",
              }}
            >
            At Car Chaser, we handle everything while you carry on with your daily activities and continue driving your car until it sells. It's that simple.
            </p>
          </Col>
        </Row>
        <Row className="example1 mb-5">
          <Col>
            {" "}
            <h3
              className="fw-bold ms-auto"
              style={{
                width: "44%",
              }}
            >
              Maximum Visibility for Your Car!
            </h3>
            <p
              className=" ms-auto"
              style={{
                width: "44%",
              }}
            >
             List your car on Car Chaser and expose it to over 300 dealers within our network.
            </p>
          </Col>
        </Row>
        <Row className="example mb-5">
          <Col>
            {" "}
            <h3 className="fw-bold ">Sell with Speed and Security!</h3>
            <p
              style={{
                width: "45%",
              }}
            >
             Sell your car in as little as 72 hours with over 300 dealers in our network, ensuring quick payment.
            </p>
          </Col>
        </Row>
        <Row className="example1 mb-5">
          <Col>
            {" "}
            <h3
              className="fw-bold ms-auto"
              style={{
                width: "44%",
              }}
            >
            Your Safety Matters!
            </h3>
            <p
              className=" ms-auto"
              style={{
                width: "44%",
              }}
            >
            Remain anonymous while we handle all communication with potential buyers, safeguarding your privacy throughout the selling process.
            </p>
          </Col>
        </Row>
        <Row className="example mb-5">
          <Col>
            {" "}
            <h3 className="fw-bold ">Online bidding platform</h3>
            <p
              style={{
                width: "45%",
              }}
            >
              {" "}
              Experience the ease of selling your car through our cutting-edge
              online bidding platform. With over 300 competing dealers, you're
              guaranteed a win while you enjoy your favorite TV show.
            </p>
          </Col>
        </Row>
        <Row className="example1">
          <Col>
            {" "}
            <h3
              className="fw-bold ms-auto"
              style={{
                width: "44%",
              }}
            >
              Get the Best Value for Your Car!
            </h3>
            <p
              className=" ms-auto"
              style={{
                width: "44%",
              }}
            >
              Rest assured, with over 300 dealers waiting for your car, you'll
              receive top dollar without any lowball offers.
            </p>
          </Col>
        </Row>
        <Row className="example mb-5">
          <Col>
            {" "}
            <h3 className="fw-bold ">Online bidding platform</h3>
            <p
              style={{
                width: "45%",
              }}
            >
              {" "}
              Experience the ease of selling your car through our cutting-edge
              online bidding platform. With over 300 competing dealers, you're
              guaranteed a win while you enjoy your favorite TV show.
            </p>
          </Col>
        </Row>

        {/* <Row>
          <Col md={7} className="bgexample my-5">
            <h3 className="fw-bold lefttext">Online bidding platform</h3>
            <p className="lefttext">
              {" "}
              Experience the ease of selling your car through our cutting-edge
              online bidding platform. With over 300 competing dealers, you're
              guaranteed a win while you enjoy your favorite TV show.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={5}></Col>
          <Col md={7} xs={12} className="bgexample1  py-3">
            <h3 className="fw-bold ms-auto" style={{ width: "76%" }}>
              Get the Best Value for Your Car!
            </h3>
            <p className="mobw100 ms-auto" style={{ width: "76%" }}>
              {" "}
              Rest assured, with over 300 dealers vying for your car, you'll
              receive top dollar without any lowball offers.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            md={7}
            className="bgexample my-5"
            style={{ backgroundImage: `url("/Group 17318.png")` }}
          >
            <h3 className="fw-bold">Sell Stress-Free!</h3>
            <p style={{ width: "80%" }}>
              {" "}
              At Car Chaser, we handle everything while you carry on with your
              daily activities and continue driving your car until it sells.
              It's that simple.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={5}></Col>
          <Col
            md={7}
            xs={12}
            className="bgexample1 py-3"
            style={{ backgroundImage: `url("/Group 17319.png")` }}
          >
            <h3 className="fw-bold ms-auto" style={{ width: "80%" }}>
              Maximum Visibility for Your Car!
            </h3>
            <p className="mobw100 ms-auto" style={{ width: "80%" }}>
              {" "}
              List your car on Car Chaser and expose it to over 300 dealers
              within our network.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            md={7}
            className="bgexample py-3 my-3"
            style={{ backgroundImage: `url("/Group 17320.png")` }}
          >
            <h3 className="fw-bold">Sell with Speed and Security!</h3>
            <p style={{ width: "80%" }}>
              {" "}
              Sell your car in as little as 72 hours with over 300 dealers in
              our network, ensuring quick payment.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={5}></Col>
          <Col
            md={7}
            xs={12}
            className="bgexample1 my-3 py-3"
            style={{ backgroundImage: `url("/Group 17321.png")` }}
          >
            <h3 className="fw-bold ms-auto" style={{ width: "80%" }}>
              Your Safety Matters!
            </h3>
            <p className="mobw100 ms-auto" style={{ width: "80%" }}>
              {" "}
              Remain anonymous while we handle all communication with potential
              buyers, safeguarding your privacy throughout the selling process.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            md={7}
            className="bgexample my-3 py-5"
            style={{ backgroundImage: `url("/Group 17322.png")` }}
          >
            <h3 className="fw-bold">Say Goodbye to Paperwork Hassles!</h3>
            <p style={{ width: "80%" }}>
              {" "}
              We take care of all the paperwork, leaving you with just one thing
              – CASH
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={5}></Col>
          <Col
            md={7}
            xs={12}
            className="bgexample1 my-2 py-2"
            style={{ backgroundImage: `url("/Group 17323.png")` }}
          >
            <h3 className="fw-bold ms-auto" style={{ width: "80%" }}>
              Transparent and Guided Selling Experience!
            </h3>
            <p className="mobw100 ms-auto" style={{ width: "80%" }}>
              {" "}
              Experience complete transparency and receive all the information
              you need to make informed decisions about your car.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            md={7}
            className="bgexample my-3 py-3"
            style={{ backgroundImage: `url("/Group 17324.png")` }}
          >
            <h3 className="fw-bold">
              Effortless Selling, Right from Your Couch!
            </h3>
            <p style={{ width: "80%" }}>
              {" "}
              List your car on Car Chaser and let our team handle everything,
              making the selling process easy for you.
            </p>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default Promise;
