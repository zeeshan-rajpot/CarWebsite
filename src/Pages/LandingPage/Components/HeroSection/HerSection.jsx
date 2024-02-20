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
      options: [
        "California",
        "Florida",
        "Georgia",
        "Illinois",
        "Indiana",
        "London",
        "Los Angeles",
        "Massachusetts",
        "Michigan",
        "New Jersey",
        "New York",
        "North Carolina",
        "Ohio",
        "Pennsylvania",
        "Sidney",
        "Tennessee",
        "Texas",
        "Virginia",
        "Washington",
      ],
    },
    { label: "Vin number" },
    {
      label: "Year",
      options: [
        "2000",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2022",
      ],
    },
    {
      label: "Make",
      options: [
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
      ],
    },
    {
      label: "Model",
      options: [
        "Toyota Camry",
        "Honda Civic",
        "Ford Mustang",
        "Chevrolet Silverado",
        "BMW 3 Series",
        "Mercedes-Benz E-Class",
        "Audi A4",
        "Nissan Altima",
        "Hyundai Sonata",
        "Kia Optima",
        "Volkswagen Jetta",
        "Volvo XC90",
        "Subaru Outback",
        "Jeep Wrangler",
        "Tesla Model S",
        "Lexus RX",
        "Mazda CX-5",
        "Buick Encore",
      ],
    },
    { label: "Trim", options: ["4WD", "AWD", "FWD", "RWD"] },
    { label: "Mileage(KM)" },
  ];
  return (
    <>
      <Row
        className="herobg heroPadding"
        style={{
          paddingBottom: "35rem ",
        }}
      >
        <Col lg={5}>
          <div
            className="mx-auto mobw100 pb-3 lwidth"
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
                {data.label === "Vin number" || data.label === "Mileage(KM)" ? (
                  <input
                    type="text"
                    className="w-100 p-2 cinput"
                    placeholder={data.label}
                    style={{ color: "#777777" }}
                  />
                ) : (
                  <select className="w-100 p-2" style={{ color: "#777777" }}>
                    <option value="">{data.label}</option>
                    {data.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            ))}
            <div className="d-flex justify-content-center px-5 mt-3">
              <Link
                to="/Add/Car"
                className="border-0  text-white py-2  w-100 text-center"
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
