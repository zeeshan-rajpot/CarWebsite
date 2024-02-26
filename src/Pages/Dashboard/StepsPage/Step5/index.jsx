import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const questions = [
  {
    id: "1",
    question: "Do you smoke in this vehicle?",
    options: ["Yes", "No"],
  },
  {
    id: "2",
    question: "Do you have original factory rims?  ",
    options: ["Yes", "No"],
  },
  {
    id: "3",
    question: "Have you replaced your tires in last 12 months?",
    options: ["Yes", "No"],
  },
  {
    id: "4",
    question: "Is your vehicle drivable?",
    options: ["Yes", "No"],
  },
];

export const index = () => {
  const [activeButtons, setActiveButtons] = useState(
    new Array(questions.length).fill("")
  ); // Array to track active buttons for each question

  const handleButtonClick = (questionId, option) => {
    setActiveButtons({ ...activeButtons, [questionId]: option });
  };

  // Function to render a single question
  const renderQuestion = (q) => (
    <div className="shadow p-3 mb-5 bg-white rounded-5 px-3 px-md-5" key={q.id}>
      <p className="font-weight-bold text-center">{q.question}</p>
      <div className="d-flex justify-content-between">
        {q.options.map((option, idx) => (
          <button
            key={idx}
            className={`w-50 my-2 shadow p-2 ms-1 ms-md-2 border ${
              activeButtons[q.id] === option.toLowerCase()
                ? "active-button"
                : ""
            }`}
            style={{
              color:
                activeButtons[q.id] === option.toLowerCase()
                  ? "#FFFFFF"
                  : "#BBBBBB",
              fontSize: "16px",
              fontWeight: "500",
              backgroundColor:
                activeButtons[q.id] === option.toLowerCase()
                  ? "#4E9C0B"
                  : "#FFFFFF",
              borderRadius:
                option === "Yes" ? "30px 5px 5px 30px" : "5px 30px 30px 5px",
            }}
            onClick={() => handleButtonClick(q.id, option.toLowerCase())}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Container
        className="mt-5 shadow rounded-5 px-4 px-md-5 pb-3"
        style={{ minHeight: "620px" }}
      >
        <div className="pt-5 d-block d-md-flex justify-content-between">
          <div className="d-flex flex-column justify-content-center ">
            <p
              className="text-start "
              style={{ color: "#515151", fontWeight: "700", fontSize: "24px" }}
            >
              Our top priority is to sell your car.
            </p>
            <p
              className="text-start "
              style={{ color: "#515151", fontWeight: "400", fontSize: "18px" }}
            >
              We are ager to have a conversation with you.
            </p>
          </div>
          <div>
            <img
              src="/Frame 1261153508.svg "
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>

        <Row className="mt-3 gx-3">
          <Col xs={12} md={6}>
            {questions.filter((q) => ["1"].includes(q.id)).map(renderQuestion)}
          </Col>
          <Col xs={12} md={6}>
            {questions.filter((q) => ["2"].includes(q.id)).map(renderQuestion)}
          </Col>
        </Row>
        <Row className="gx-3">
          <Col xs={12} md={6}>
            {questions.filter((q) => ["3"].includes(q.id)).map(renderQuestion)}
          </Col>
          <Col xs={12} md={6}>
            {questions.filter((q) => ["4"].includes(q.id)).map(renderQuestion)}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
