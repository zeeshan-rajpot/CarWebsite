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
        <Col md={5} lg={5} xxl={4}>
          <div
            className="mx-auto  pb-3 lwidth "
            style={{
              background: "#2a3026",
              width: "70%",
              borderBottomLeftRadius:'35px',
              borderBottomRightRadius:'35px'
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
                Sell Your Car

              </p>
           
            </div>
            {dummyCarData.map((data, index) => (
              <div key={index} className="px-4  pt-3 rounded-5">
                {data.label === "Vin number" || data.label === "Mileage(KM)" ? (
                  <input
                    type="text"
                    className="w-100 p-2  cinput rounded-5 padingl"
                    placeholder={data.label}
                    style={{ color: "#a6a390", background: '#51574d' }}
                  />
                ) : (
                  <select className="w-100  p-2 p-md-2 padingl  rounded-5 " style={{ color: "#a6a390", background: '#51574d' }}>
                    <option value="" >{data.label}</option>
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
                className="border-0  text-white py-1  w-75 rounded-5 text-center"
                style={{ backgroundColor: "#ff725e" }}
              >
                Signup
              </Link>
            </div>
          </div>
        </Col>
        <Col  md={7} lg={7} xxl={8}
          className="d-none d-md-flex flex-column align-items-start justify-content-start"
        >
          <div className="text-start mt-5">
         
            <p
              className="my-0 "
              style={{ color: "#F5F5F5", fontWeight: "800", fontSize: "38px", fontFamily:'lemon' }}
            >
              REVOLUTiONiZE YOUR DRiVE
            </p>
            <p
              className="my-0 w-75"
              style={{ color: "#F5F5F5", fontWeight: "500", fontSize: "13px" }}
            >
              With our dedication to finding your ideal car, we're committed to understanding your preferences,
              budget, and the purpose of your vehicle. Whether you prioritize advanced technology, safety
              features, environmental impact, or long-term value, we're here to assist every step of the way
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default HerSection;
