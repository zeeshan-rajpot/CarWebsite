import React from "react";
import { Col, Row, Container } from "react-bootstrap";
// import Footer from "../../Components/Footer/index";
import NewFooter from "../../Components/Footer/NewFooter";
import Navbar from "../../Components/NewNavbar";
import "./style.css";

export const index = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Navbar />

      <div
        className="herosectionbgg heroPadding proceesbig"
        style={{
          paddingBottom: "3rem",
        }}
      >
        <div className="pt-5 pb-5 container">
          <div
            className="ms-0 mobw100  w-50"
            style={{
              marginTop: "40px",
              marginBottom: "40px",
              marginLeft: "40px",
              borderRadius: "40px",
              background: "rgba(0, 0, 0, 0.20)",
            }}
          >
            <div className="p-3">
              <p
                className="my-0 mobhl"
                style={{
                  fontSize: "40px",
                  color: "#FFFFFF",
                  fontWeight: "200",
                }}
              >
                Introducing the Car Chaser Dealer Network
              </p>
              <p
                className="my-0 mt-2 mobhm"
                style={{
                  color: "#FFFFFF",
                  fontSize: "21px",
                  fontWeight: "700",
                }}
              >
                Attention Registered Dealers!
              </p>
              <p
                className="my-0 mt-2"
                style={{
                  color: "#F5F5F5",
                  fontSiz: "17px",
                  fontWeight: "500",
                  paddingRight: "15px",
                }}
              >
                Join our platform to gain access to a curated selection of
                pre-owned vehicles through our efficient online auction system.
                We handle the inspection, qualification, and delivery processes,
                allowing your dealership to focus on maximizing sales.
              </p>
              <button
                className="border-0 mt-4 px-3 py-2 text-white rounded-5"
                style={{ backgroundColor: "#1985D2" }}
              >
                Register for FREE today!
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="text-center"
          style={{
            paddingTop: "3em",
          }}
        >
          <p
            className=" mobhl"
            style={{
              fontSize: "40px",
              fontWeight: "700",
              marginBottom: "50px",
            }}
          >
            {" "}
            Why Choose Car Chaser?
          </p>
        </div>
        <Container className="pb-4 text-center">
          <Row>
            <Col xs={12} md={4}>
              <img
                src="dealersvg1.svg"
                style={{ width: "80%", height: "auto" }}
              />
            </Col>
            <Col xs={12} md={4}>
              <img
                src="dealersvg2.svg"
                style={{ width: "80%", height: "auto" }}
              />
            </Col>
            <Col xs={12} md={4}>
              <img
                src="dealersvg3.svg"
                style={{ width: "80%", height: "auto" }}
              />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col xs={12} md={4}>
              <img
                src="dealersvg4.svg"
                style={{ width: "80%", height: "auto" }}
              />
            </Col>
            <Col xs={12} md={4}>
              <img
                src="dealersvg5.svg"
                style={{ width: "80%", height: "auto" }}
              />
            </Col>
            <Col xs={12} md={4}>
              <img
                src="dealersvg6.svg"
                style={{ width: "80%", height: "auto" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div
        style={{
          background:
            "linear-gradient(0deg, #ADDCFF 0%, #EAF6FF 50.28%, #EAF6FF 100%)",
        }}
        className="pt-5"
      >
        <p
          className="text-center mobhl"
          style={{ color: "#1985D2", fontSize: "28px", fontWeight: "700" }}
        >
          Our Partners Trust Us
        </p>
        <p
          className="text-center mobhm"
          style={{ color: "#030303", fontSize: "28px", fontWeight: "600" }}
        >
          "Car Chaser facilitated the purchase of 40 cars for our dealership
          last month."
        </p>
        <p
          className="text-start para2 m-auto mobhm delerpagelg"
          style={{ color: "#1985D2", fontSize: "28px", fontWeight: "600" }}
        >
          Trusted dealer
        </p>
        <p
          className="text-start para2 m-auto pb-5 mobhm delerpagelg"
          style={{ color: "#030303", fontSize: "28px", fontWeight: "600" }}
        >
          Mississauga, Toronto
        </p>
      </div>
      {/* <Footer /> */}
      <NewFooter />
    </div>
  );
};
export default index;
