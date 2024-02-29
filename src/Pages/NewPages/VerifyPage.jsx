import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer/NewFooter";
export const VerifyPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <div style={{ paddingTop: "100px" }}>
            <p className="fs-2 fw-bold " style={{ color: "#101010" }}>
              Lets book a time to get your car verify.
            </p>
            <p className="fs-6" style={{ color: "#303030" }}>
              Book a convenient time for your car verification with us. We
              understand the importance of ensuring your vehicle's condition,
              and our streamlined process makes it easy for you. Whether you're
              looking to confirm its overall health, address specific concerns,
              or simply seeking peace of mind, our scheduling system allows you
              to choose a time that suits your schedule.
            </p>
          </div>

          <div className="shadow rounded-5 ">
            <div className="m-2">
              <p className="fs-5 fw-bold " style={{ color: "#101010" }}>
                Choose the date & time when you are free
              </p>

              <Row className="w-50">
                <Col>
                  <div className="d-flex flex-column justify-content-start align-items-start">
                    <div>
                      <p
                        className="my-0"
                        style={{
                          color: "#1F1F1F",
                          fontSize: "15px",
                          fontWeight: "700",
                        }}
                      >
                        Date
                      </p>
                    </div>
                    <div>
                      <div
                        className="d-flex rounded-5 px-4 py-2 "
                        style={{ backgroundColor: "#F5F5F5" }}
                      >
                        <img src="/Calander.svg" alt="" />
                        <input
                          type="date"
                          style={{ backgroundColor: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column justify-content-start align-items-start">
                    <div>
                      <p
                        className="my-0"
                        style={{
                          color: "#1F1F1F",
                          fontSize: "15px",
                          fontWeight: "700",
                        }}
                      >
                        Time
                      </p>
                    </div>
                    <div>
                      <div
                        className=" d-flex rounded-5 px-4 py-2 "
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

              <div className="my-5">
                <div className="d-flex flex-column justify-content-start align-items-start">
                  <label
                    style={{
                      color: "#1F1F1F",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Select the vehicle transmission type
                  </label>
                  <div className="d-flex justify-content-between align-items-center my-2">
                    <input type="radio" name="transmission" value="Automatic" />
                    <label htmlFor="Automatic" className="ms-2">
                      Automatic
                    </label>
                    <input
                      type="radio"
                      name="transmission"
                      value="Manual"
                      className="ms-4"
                    />
                    <label htmlFor="Manual" className="ms-2">
                      Manual
                    </label>
                  </div>
                </div>
              </div>

              <div className="my-5">
                <div>
                  <p
                    style={{
                      color: "#1F1F1F",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Add the address
                  </p>
                </div>

                <div
                  className="d-flex justify-content-between align-items-center p-3 rounded-4 "
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  <p className="my-0 " style={{ color: "#777777" }}>
                    Address
                  </p>
                  <img src="/Location.svg" alt="" />
                </div>

                <div className="my-4">
                  <img
                    src="./Mapimage.png"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center my-5">
            <Link to="/BookAppointment ">
              <button
                className="border-0 rounded-5 px-5 p-2 text-white"
                style={{ backgroundColor: "#1985D2" }}
              >
                Continue
              </button>
            </Link>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default VerifyPage;
