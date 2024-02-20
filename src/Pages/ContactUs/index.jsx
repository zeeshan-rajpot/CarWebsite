import React from "react";
import Navbar from "../../Components/NewNavbar";
// import Footer from "../../Components/Footer/index";
import NewFooter from "../../Components/Footer/NewFooter";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
export const index = () => {
  return (
    <div>
      <Navbar />

      <div className="contactbg"></div>
      <Container>
        <Row className="my-5 ">
          <Col xs={12} md={6}>
            <div className="px-2">
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
          <Col xs={12} md={6}>
            <img
              src="/contactusSideimage.png"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Col>
        </Row>
      </Container>

      {/* <Footer /> */}
      <NewFooter />
    </div>
  );
};
export default index;
