import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CheckBox from "../Step3/components/checkBox.jsx";
import CheckSmallBox from "./components/checkBox.jsx";

export const index = () => {
  const initialContent = [
    "Any rust?",
    "Any Cracked bodywork",
    "No exterior damage",
    "Chipped it cracked",
    "Dents",
    "Scratches",
    "Paint Chips",
  ];

  return (
    <div>
      <Container
        className="mt-5 shadow rounded-5 px-4 px-md-5 pb-3 "
        style={{ minHeight: "620px" }}
      >
        <div className="pt-5 d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-center ">
            <p
              className="text-start "
              style={{ color: "#515151", fontWeight: "600", fontSize: "24px" }}
            >
              Please select any relevant external damage to the vehicle.
            </p>
          </div>
          <div>
            <img src="/Frame 1261153508.svg" />
          </div>
        </div>
        <div>
          <div>
            <Row className=" mt-3">
              {initialContent.map((item, index) => (
                <Col key={index} lg={3} xs={6}>
                  <CheckBox content={item} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default index;
