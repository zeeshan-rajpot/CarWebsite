import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export const index = () => {
  const CarModels = [
    "",
    "Toyota Camry",
    "Honda Civic",
    "Ford Mustang",
    "Chevrolet Silverado",
    "BMW 3 Series",
    "Mercedes-Benz E-Class",
    "Audi Q5",
    "Tesla Model S",
    "Hyundai Sonata",
    "Nissan Altima",
  ];
  const Years = [
    "",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
  ];

  const Make = [
    "",
    "Audi",
    "BMW",
    "Buick",
    "Chevrolet",
    "Ford",
    "Honda",
    "Hyundai",
    "Jeep",
    "Kia",
    "Lexus",
    "Mazda",
    "Mercedes-Benz",
    "Nissan",
    "Subaru",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ];

  return (
    <>

      <div>
        <div
          className="mt-5 shadow rounded-5 px-4 px-md-5 pb-3 "
          style={{ minHeight: "620px" }}
        >
          <div className="pt-5 d-block d-md-flex">
            <div className="d-flex flex-column justify-content-center ">
              <p
                className="text-start"
                style={{
                  color: "#515151",
                  fontWeight: "700",
                  fontSize: "24px",
                }}
              >
                We are dedicated to finding the perfect buyer for your car,
                making the selling process easier than ever.
              </p>
              <p
                className="text-start"
                style={{
                  color: "#515151",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                Share details about your vehicle to receive a solid offer within
                minutes
              </p>
            </div>
            <div>
              <img
                src="/Frame 1261153509.svg"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <Row className="mt-4 gx-5">
            <Col lg={6}>
              <div className="d-flex flex-column justify-content-start align-items-start mt-2 mt-md-0">
                <label
                  style={{
                    color: "#515151",
                    fontSize: "16px",
                    fontWeight: "500",
                    marginLeft: "1rem",
                  }}
                >
                  VIN{" "}
                  <span
                    style={{
                      color: "#515151",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    ( Vehicle Identification Number )
                  </span>
                </label>
                <input
                  className="border shadow py-3 px-2 rounded-5 w-100 ms-0 mt-2"
                  type="text"
                  placeholder=""
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className=" d-flex flex-column justify-content-start align-items-start mt-2 mt-md-0">
                <label
                  style={{
                    color: "#515151",
                    fontSize: "16px",
                    fontWeight: "500",
                    marginLeft: "1rem",
                  }}
                >
                  Make
                </label>
                <select
                  className="border shadow py-3 px-2 rounded-5 w-100 ms-0 mt-2"
                  style={{ background: "#FFFFFF" }}
                >
                  {Make.map((make, index) => (
                    <option key={index} value={make}>
                      {make}
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
                  Model
                </label>
                <select
                  className="border shadow py-3 px-2 rounded-5 w-100 ms-0 mt-2"
                  style={{ background: "#FFFFFF" }}
                >
                  {CarModels.map((model, index) => (
                    <option key={index} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex flex-column justify-content-start align-items-start mt-2 mt-md-0">
                <label
                  style={{
                    color: "#515151",
                    fontSize: "16px",
                    fontWeight: "500",
                    marginLeft: "1rem",
                  }}
                >
                  Year
                </label>
                <select
                  className="border shadow py-3 px-2 rounded-5 w-100 ms-0 mt-2"
                  style={{ background: "#FFFFFF", width: "200px" }}
                >
                  {Years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default index;
