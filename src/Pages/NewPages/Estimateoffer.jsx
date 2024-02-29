import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer/NewFooter";

import Card from "react-bootstrap/Card";
export const Estimateoffer = () => {
  return (
    <>
      <Navbar />
      <div>
        <Container>
          <Row
            style={{
              paddingTop: "100px",
            }}
          >
            <Col lg={3}>
              <img  className='d-none d-md-flex ' src="/longbar.svg" style={{ height: "76%" }} />
              <img src="/Frame 1261153600.svg" alt="" width='350px' />
            </Col>
            <Col lg={9}>
              <Card className="border-0 shadow rounded-4">
                <Card.Img
                  variant="top"
                  style={{ borderRadius: "15px 15px 0px 0px" }}
                  src="/CardbgCard.png"
                />
                <Card.Body style={{ borderBottom: "1px solid #EBEBEB" }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column justify-content-start align-items-start">
                      <p
                        className="my-0"
                        style={{
                          color: "#101010",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        2018 Volvo
                      </p>
                      <p
                        className="my-0"
                        style={{
                          color: "#3D3D3D",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        XC90 T6 R-Design wagon{" "}
                        <span
                          style={{
                            color: "#3D3D3D",
                            fontSize: "18px",
                            fontWeight: "400",
                          }}
                        >
                          | 180000km
                        </span>
                      </p>
                    </div>
                    <div className="d-flex flex-column justify-content-end align-items-end">
                      <p
                        className="my-0"
                        style={{
                          color: "#1985D2",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        25,000$
                      </p>
                      <p
                        className="my-0"
                        style={{
                          color: "#101010",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        Estimated Offer
                      </p>
                    </div>
                  </div>
                </Card.Body>
                <div className="py-3 px-3">
                  <p
                    className="my-0"
                    style={{
                      color: "#303030",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Car Chaser's Estimated Value Range for Your Car.
                  </p>
                  <p
                    className="my-0"
                    style={{
                      color: "#303030",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    Our estimated range serves as an initial assessment. By
                    leveraging competition within our dealer network, Car Chaser
                    ensures you receive a solid offer, ultimately leading to a
                    higher price compared to other alternatives.
                  </p>
                  <div className="text-center mt-4">
                    <Link to="/NewPages">
                      <button
                        className="border-0 text-white p-2 px-4 rounded-4 "
                        style={{
                          backgroundColor: "#1985D2",
                        }}
                      >
                        Sound good, Lets
                        <img src="/logos_go.svg" />
                      </button>
                    </Link>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div
          style={{ background: "#FAFAFA", textAlign: "center" }}
          className="py-5"
        >
          <h1 className="fw-bolder">Why Choose Car Chaser?</h1>
          <Container className="text-center mt-5">
            <Row className="g-5">
              <Col xs={12} md={6}>
                <img
                  src="appointmentsvg1.svg"
                  style={{ width: "80%", height: "auto" }}
                />
              </Col>
              <Col xs={12} md={6}>
                <img
                  src="appointmentsvg2.svg"
                  style={{ width: "80%", height: "auto" }}
                />
              </Col>
              <Col xs={12} md={6}>
                <img
                  src="appointmentsvg3.svg"
                  style={{ width: "80%", height: "auto" }}
                />
              </Col>
              <Col xs={12} md={6}>
                <img
                  src="appointmentsvg4.svg"
                  style={{ width: "80%", height: "auto" }}
                />
              </Col>
              <Col xs={12} md={6}>
                <img
                  src="appointmentsvg5.svg"
                  style={{ width: "80%", height: "auto" }}
                />
              </Col>
              <Col xs={12} md={6}>
                <img
                  src="appointmentsvg6.svg"
                  style={{ width: "80%", height: "auto" }}
                />
              </Col>
            </Row>
          </Container>
        </div>

        <div
          style={{
            background: "#D0ECFF",
          }}
        >
          <Container className="py-5">
            <h1 className="fw-bolder">
              what
              <br />
              Customer Say
            </h1>
            <div className="mt-4 d-flex">
              <div
                style={{
                  background: "white",
                  width: "45%",
                  position: "relative",
                  zIndex: "+5",
                }}
                className=" py-4 px-3 shadow rounded-5"
              >
                <p
                  style={{
                    fontSize: "18px",
                  }}
                  className="fw-normal"
                >
                  My car sold in 12 hours, I’m telling all my friends and family
                  about car chaser
                </p>
                <h4 style={{ color: "#1985D2" }}>Obinna</h4>
                <p style={{ fontSize: "18px", color: "#1985D2" }}>
                  Sold Feb 2024
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  marginTop: "-7em",
                  marginLeft: "28rem",
                }}
              >
                <img src="Subtract.png" />
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Estimateoffer;
