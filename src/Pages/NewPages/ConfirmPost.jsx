import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../../Components/NewNavbar";
import Footer from "../../Components/Footer/NewFooter";
export const ConfirmPost = () => {
  return (
    <div>
      <Navbar />
      <Container
        style={{
          padding: "3% 0",
        }}
      >
        <Row>
          <div className="shadow rounded-5  my-5 w-75 m-auto p-3">
            <div className="my-4 text-start">
              <p className="fs-5 fw-bold " style={{ color: "#1985D2" }}>
                Experience a Seamless Process
              </p>

              <div className="">
                <p
                  className="lh-md"
                  style={{
                    color: "#1F1F1F",
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                >
                  On your scheduled appointment, our expert acquisition team
                  meticulously captures your car's details, conducts a
                  comprehensive test drive, and assesses for any mechanical
                  issues and damages. Once completed, your vehicle swiftly
                  becomes available on our dynamic platform, engaging over 300
                  dealers within our extensive network to compete for your car.
                </p>
                <p
                  className="lh-md"
                  style={{
                    color: "#1F1F1F",
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                >
                  Upon accepting an offer, our streamlined payment process kicks
                  in, encompassing all necessary paperwork. You have the
                  flexibility to either drop off your car or arrange for
                  convenient pickup, with payment due on the scheduled handover
                  date. Discover the effortless way to sell your car.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center ">
            <Link to="/ ">
              <button
                className="border-0 rounded-4 w-25 p-3 text-white ms-4"
                style={{ backgroundColor: "#1985D2" }}
              >
                View post
              </button>
            </Link>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default ConfirmPost;
