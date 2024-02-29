import React from "react";
import Navbar from "../../../Components/DashboardNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "../Carousel/Carousel";

const CarDetails = () => {
  const additionalFeatures = [
    "2 sets of tire",
    "Window tint",
    "Roof rack",
    "Remote starter",
  ];

  const otherDetails = [
    [
      "Aftermarket exhaust",
      "Aftermarket rims",
      "Rust",
      "No exterior damage",
      "Dents",
      "Scratches",
    ],
    [
      "Aftermarket stereo",
      "Aftermarket spoiler",
      "Any Cracked bodywork",
      "Chipped it cracked",
      "Paint Chips",
    ],
  ];

  const questions = [
    { question: "Do you smoke in this vehicle?", response: "Yes" },
    { question: "Do you have original factory rims?", response: "Yes" },
    {
      question:
        "In the last 12 months, have you replaced your all-season tires?",
      response: "Yes",
    },
    { question: "Is your vehicle drivable?", response: "Yes" },
    { question: "Any accident claim?", response: "Yes" },
    { question: "Any mechanical issue or warning light?", response: "Yes" },
    { question: "How soon are you ready to sell?", response: "Yes" },
    {
      question: "Anything you feel we should know about your car",
      response: "Yes",
    },
  ];

  return (
    <>
      <Navbar />
      <Container>
        <Carousel className="my-2" />

        <div className="mt-4">
          <div className="d-flex align-items-center justify-content-between ">
            <h2>Booked Appointment</h2>
            <h3
              style={{
                color: "#1985D2",
              }}
            >
              Show Bids
            </h3>
          </div>
          <div className="d-md-flex d-block align-items-center">
            <div className="d-flex align-items-center">
              <img src="Group 1000004355.png" />
              <p className="mb-2">Friday, January 30 2024</p>
            </div>
            <div
              className="
            d-flex align-items-center"
            >
              <img src="Group 1000004357.png" />
              <p className="mb-2">at 2 AM clock</p>
            </div>
            <div className="d-flex align-items-center">
              <img src="Group 1000004356.png" />
              <p className="mb-2">
                2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
              </p>
            </div>
          </div>
        </div>
        <Row className="d-flex justify-content-center">
          <Col
            xs={10}
            md={2}
            className="p-4 rounded-5 shadow "
            style={{
              marginRight: "20px",
              marginBottom: "20px",
            }}
          >
            <h4>Additional Features</h4>
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="d-flex align-items-center my-3">
                <img
                  src="arrow_icon.svg"
                  style={{
                    width: "20px",
                  }}
                />
                <p className="ms-2 mb-0">{feature}</p>
              </div>
            ))}
          </Col>

          {/* Other Details */}
          <Col
            xs={10}
            md={4}
            className="p-4 rounded-5 shadow "
            style={{
              marginRight: "20px",
              marginBottom: "20px",
            }}
          >
            <h4>Other Details</h4>
            <Row>
              {otherDetails.map((detail, index) => (
                <Col key={index} md={6}>
                  {detail.map((item, idx) => (
                    <div key={idx} className="d-flex align-items-center my-3">
                      <img
                        src="arrow_icon.svg"
                        style={{
                          width: "20px",
                        }}
                      />
                      <p className="ms-2 mb-0">{item}</p>
                    </div>
                  ))}
                </Col>
              ))}
            </Row>
          </Col>

          <Col
            xs={10}
            md={5}
            className="p-4 rounded-5 shadow "
            style={{
              marginBottom: "20px",
            }}
          >
            <h4>Condition & Record </h4>
            <Row>
              {questions.map((q, index) => (
                <Col md={6} key={index}>
                  <div className="d-flex align-items-start ">
                    <img
                      src="arrow_icon.svg"
                      style={{
                        width: "20px",
                      }}
                      alt="Arrow icon"
                      className="mb-0"
                    />
                    <div>
                      <p className="ms-1 m-0">{q.question}</p>
                      <p className="ms-2  mb-1">{q.response}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CarDetails;
