import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../../Components/NewNavbar";
import Footer from "../../Components/Footer/NewFooter";

export const BookAppointment = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Container>
        <Row>
          <div
            style={{
              paddingTop: "7%",
            }}
          >
            <p className="fs-2 fw-bold " style={{ color: "#101010" }}>
              Please verify the information is right before confirm..
            </p>
          </div>

          <div className="shadow rounded-5 ">
            <div className="my-4 text-center">
              <p className="fs-5 fw-bold " style={{ color: "#1985D2" }}>
                Book Appointment
              </p>

              <Row className="w-50">
                <Col>
                  <div className="d-flex flex-column justify-content-start align-items-start">
                    <div>
                      <div
                        className="rounded-5 px-4 py-2 "
                        style={{ backgroundColor: "#F5F5F5" }}
                      >
                        <img src="/Calander.svg" alt="" />
                        <input
                          style={{ backgroundColor: "transparent" }}
                          type="date"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column justify-content-start align-items-start">
                    <div>
                      <div
                        className="rounded-5 px-4 py-2 "
                        style={{ backgroundColor: "#F5F5F5" }}
                      >
                        <img src="/clarity_alarm-clock-line.svg" alt="" />
                        <input
                          type="time"
                          style={{ backgroundColor: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="w-25 my-4">
                <div
                  className="rounded-5 px-4 py-2 d-flex justify-content-between align-items-center"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  <img src="/exclaminaton.svg" alt="" />
                  <p className="my-0" style={{ color: "#1F1F1F" }} type="date">
                    Transmission: <span className="fw-bold ">Automatic </span>{" "}
                  </p>
                </div>
              </div>

              <div className="my-5">
                <div className="d-flex flex-column justify-content-start align-items-start ">
                  <label
                    style={{
                      color: "#1F1F1F",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Additional information
                  </label>
                  <input
                    type="textarea"
                    className="rounded-5 w-100 mt-2"
                    style={{ backgroundColor: "#FAFAFA", height: "20vh" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center my-5">
            <button
              className="rounded-4 w-25 p-3  bg-transparent"
              style={{ border: "1px solid #1985D2", color: "#1985D2" }}
            >
              Back
            </button>
            <Link to="/ConfirmPost ">
              <button
                className="border-0 rounded-4 w-25 p-3 text-white ms-4"
                style={{ backgroundColor: "#1985D2" }}
              >
                Confirm
              </button>
            </Link>
          </div>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};
export default BookAppointment;
