import React from "react";
import "./counter.css";
import { Col, Container, Row } from "react-bootstrap";

const items = [
  {
    image: "/Frame 1261153568.svg",
    heading: "72hrs",
    text: "Til it's gone, paid & sold!",
  },

  {
    image: "/Frame 1261153566.svg",
    heading: "300s",
    text: "Over 300 dealers are competing to buy your car",
  },
  { image: "/Frame 1261153567.svg", heading: "2500+", text: "Happy Customers" },
];
const DetailCounter = () => {
  return (
    <>
      <Container className="  mt-5">
        <p
          className="text-center fw-bold "
          style={{ color: "#1985D2", fontSize: "30px", fontWeight: "700" }}
        >
          Quick Sale , Swift Payment
        </p>
        <h3
          className="text-center px-2 w-75 m-auto mb-4 mobh90"
          style={{
            fontSize: "14px",
            lineHeight: "1.6",
            fontWeight: "400",
            color: "#747E93",
          }}
        >
          Conveniently sell your car from the comfort of your own home, so you
          can relax and enjoy your favorite TV shows. You're lounging on your
          couch, engrossed in the latest episodes of your favorite TV series,
          when the realization hits – it's time to part ways with your car. But
          instead of interrupting your binge-watching session, you can now sell
          your car eortlessly from the comfort of your own home. With our online
          platform, you can list your car with just a few clicks, provide
          potential buyers with virtual tours, and securely complete
          transactions without ever stepping foot outside.
        </h3>
        <Row className="shadow w-75 m-auto mobh90">
          {items.map((item, index) => (
            <Col key={index} md={4} className="text-center hover">
              <img
                className="m-auto py-4"
                style={{ width: "90%" }}
                src={item.image}
                alt=""
              />
              <h5 style={{ color: "#FF725E", fontSize: "35px" }}>
                {item.heading}
              </h5>
              <p style={{ color: "#747474" }}>
                {item.text}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DetailCounter;
