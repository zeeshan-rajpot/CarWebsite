import React from "react";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/index";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
export const index = () => {
  return (
    <div>
      <Navbar />

      <div className="contactbg">
        <div className="text-center pt-4">
          <p
            className="mt-5 pt-4"
            style={{
              color: "#FFFFFF",
              fontWeight: "500",
              fontSize: "30px",
            }}
          >
            Contact us
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="mt-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.20)",
              display: "inline-flex",
              padding: "14px 75px",
              alignItems: "flex-end",
              gap: "20px",
            }}
          >
            <img src="/ic_round-phone.svg" alt="" />
            <img src="/ic_round-email.svg" alt="" />
            <img src="/bi_chat-dots-fill.svg" alt="" />
            <img src="/mdi_contact.svg" alt="" />
          </div>
        </div>
      </div>

      <Container>
        {" "}
        <Row className="my-5 ">
          <Col lg={7}>
            <div className="px-5">
              <p
                className="my-4 "
                style={{
                  color: "#1985D2",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                Contact us
              </p>
              <p
                style={{
                  color: "#000000",
                  fontSize: "24px",
                  fontWeight: "400",
                  marginBottom: "40px",
                }}
              >
                We are open during the following hours:
              </p>
              <p
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                Monday - Thursday: 9am - 9pm
              </p>
              <p
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                Friday - Saturday: 9am - 6pm
              </p>
              <p
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                Sunday: By appointment only
              </p>
              <p
                className="mt-4 my-0 "
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Email
              </p>
              <p
                className="my-0 "
                style={{
                  color: "#1985D2",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                @carchaser.ca
              </p>
              <p
                className="my-0 mt-2 "
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Phone
              </p>
              <p
                className="my-0 "
                style={{
                  color: "#1985D2",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                58478
              </p>
            </div>
          </Col>
          <Col lg={5}>
            <img src="./contactusSideimage.png" alt="" />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};
export default index;
