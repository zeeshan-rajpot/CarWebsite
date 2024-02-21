import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CheckBox from "./components/checkBox.jsx";

export const index = () => {
  const initialContent = [
    "2 sets of tire",
    "Window tint",
    "Aftermarket exhaust",
    "Aftermarket rims",
    "Roof rack",
    "Remote starter",
    "Aftermarket stereo",
    "Aftermarket spoiler",
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
              style={{ color: "#515151", fontWeight: "700", fontSize: "24px" }}
            >
              Tell us more about your vehicle
            </p>
            <p
              className="text-start "
              style={{ color: "#515151", fontWeight: "400", fontSize: "18px" }}
            >
              Share details about your vehicle to receive a solid offer within
              minutes
            </p>
          </div>
          <div>
            <img src="/Frame 1261153513.svg" />
          </div>
        </div>
        <div>
          <Row className=" mt-3">
            {initialContent.map((item, index) => (
              <Col key={index} lg={3} xs={6}>
                <CheckBox content={item} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default index;
