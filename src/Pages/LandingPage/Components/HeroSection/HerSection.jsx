import React from "react";
import { Col, Row } from "react-bootstrap";
import "./herosection.css";
import { Link } from "react-router-dom";
export const HerSection = () => {
  const generateRandomOptions = (label, count) => {
    const options = Array.from(
      { length: count },
      (_, index) => `${label} ${index + 1}`
    );
    return [, ...options];
  };
  const dummyCarData = [
    {
      label: "Location",
      options: ["Sidney", "New York", "Los Angeles", "London"],
    },
    { label: "Vin number", options: ["ABC123", "DEF456", "GHI789"] },
    { label: "Year", options: ["2010", "2015", "2020"] },
    { label: "Make", options: ["Toyota", "Honda", "Ford", "Chevrolet"] },
    { label: "Model", options: generateRandomOptions("Model", 5) },
    { label: "Trim", options: generateRandomOptions("Trim", 3) },
    { label: "Mileage(KM)", options: generateRandomOptions("Mileage", 10) },
  ];
  return (
    <>
      <Row className="herobg">
        <Col lg={5}>
          <div
            className="mx-auto mobw100 pb-5"
            style={{
              background: "rgb(60 60 60 / 40%)",
              width: "70%",
            }}
          >
            <div className="text-center pt-4">
              <p
                className="my-0 "
                style={{
                  color: "#FFFFFF",
                  fontSize: "30px",
                  fontWeight: "800",
                }}
              >
                Sell your car!
              </p>
              <p
                className="my-0"
                style={{
                  color: "#FFFFFF",
                  fontSize: "18px",
                  fontWeight: "300",
                }}
              >
                For Top Dollar
              </p>
            </div>
            {dummyCarData.map((data, index) => (
              <div key={index} className="px-5 md-px-5 pt-3">
                <select className="w-100 p-2" style={{ color: "#777777" }}>
                  <option value="">{data.label}</option>
                  {data.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div
              className="d-flex justify-content-center pb-2  mx-auto"
              style={{ width: "74%" }}
            >
              <Link
                to="/Add/Car"
                className="border-0  text-white px-5 md-px-5 py-2 mt-4 w-100 text-center"
                style={{ backgroundColor: "#1985D2" }}
              >
                Signup
              </Link>
            </div>
          </div>
        </Col>
        <Col
          lg={7}
          className="d-none d-md-flex flex-column align-items-start justify-content-start"
        >
          <div className="text-start mt-5">
            <p
              className="my-0 text-start mt-5"
              style={{ color: "#F5F5F5", fontWeight: "400", fontSize: "48px" }}
            >
              Selling your car
            </p>
            <p
              className="my-0 "
              style={{ color: "#F5F5F5", fontWeight: "800", fontSize: "48px" }}
            >
              Privately is a Hassle
            </p>
            <p
              className="my-0 "
              style={{ color: "#F5F5F5", fontWeight: "500", fontSize: "24px" }}
            >
              Over 300 dealer are competing for your car.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default HerSection;
