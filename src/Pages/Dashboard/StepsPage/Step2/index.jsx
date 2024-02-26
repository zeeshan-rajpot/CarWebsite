import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const index = () => {
  const colors = [
    "",
    "red", // Toyota Camry
    "blue", // Honda Civic
    "green", // Ford Mustang
    "orange", // Chevrolet Silverado
    "purple", // BMW 3 Series
    "teal", // Mercedes-Benz E-Class
    "brown", // Audi Q5
    "magenta", // Tesla Model S
    "navy", // Hyundai Sonata
    "olive", // Nissan Altima
  ];
  const Keys = ["", "1", "2", "3", "4"];
  const Trim = ["", "4WD", "AWD", "FWD", "RWD"];
  return (
    <div>
      <Container
        className="mt-5 shadow rounded-5 px-4 px-md-5 pb-3"
        style={{ minHeight: "620px" }}
      >
        <div className="pt-5 d-block d-md-flex justify-content-between">
          <div className="d-flex flex-column justify-content-center">
            <p
              className="text-start"
              style={{ color: "#515151", fontWeight: "700", fontSize: "24px" }}
            >
              Tell us more about your vehicle
            </p>
            <p
              className="text-start"
              style={{ color: "#515151", fontWeight: "400", fontSize: "18px" }}
            >
              Share details about your vehicle to receive a solid offer within
              minutes
            </p>
          </div>
          <div>
            <img
              src="/Frame 1261153506.svg"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <Row className="mt-4 gx-5">
          <Col lg={6}>
            <div className="d-flex flex-column justify-content-start align-items-start">
              <label
                style={{
                  color: "#515151",
                  fontSize: "16px",
                  fontWeight: "500",
                  marginLeft: "1rem",
                }}
              >
                Mileage
              </label>
              <input
                className="border shadow py-3 px-2 rounded-5 w-100 ms-0 mt-2"
                type="text"
                placeholder=""
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-flex flex-column justify-content-start align-items-start mt-3 mt-md-0">
              <label
                style={{
                  color: "#515151",
                  fontSize: "16px",
                  fontWeight: "500",
                  marginLeft: "1rem",
                }}
              >
                Trim
              </label>
              <select
                className="border shadow py-3 px-2 rounded-5 w-100 ms-0 mt-2"
                style={{ background: "#FFFFFF", width: "200px" }}
              >
                {Trim.map((trim, index) => (
                  <option key={index} value={trim}>
                    {trim}
                  </option>
                ))}
              </select>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 gx-5">
          <Col lg={6}>
            <div className="d-flex flex-column justify-content-start align-items-start">
              <label
                style={{
                  color: "#515151",
                  fontSize: "16px",
                  fontWeight: "500",
                  marginLeft: "1rem",
                }}
              >
                Color
              </label>
              <select
                className="border shadow py-3 px-2 rounded-5 w-100 ms-0 mt-2"
                style={{ background: "#FFFFFF", width: "200px" }}
              >
                {colors.map((model, index) => (
                  <option key={index} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-flex flex-column justify-content-start align-items-start mt-3 mt-md-0">
              <label
                style={{
                  color: "#515151",
                  fontSize: "16px",
                  fontWeight: "500",
                  marginLeft: "1rem",
                }}
              >
                Keys
              </label>
              <select
                className="border shadow py-3 px-2 rounded-5 w-100 ms-0 mt-2"
                style={{ background: "#FFFFFF" }}
              >
                {Keys.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
