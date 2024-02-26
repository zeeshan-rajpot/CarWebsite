import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
const questions = [
  {
    id: "1",
    question: "How soon are you ready to sell? ",
    options: ["Immediately", "2-3 Months", "6 Months", "1 Year"],
  },
  {
    id: "2",
    question: "Any mechanical issue or warning light?",
    options: ["Yes", "No"],
  },
  {
    id: "3",
    question: "Anything you feel we should know about your car?",
    options: ["Yes", "No"],
  },
  {
    id: "4",

    question: "Any accident claim? ",
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

  const renderQuestion = (q) => (
    <div className="shadow p-3 mb-5 bg-white rounded-5 px-3 px-md-3" key={q.id}>
      <p className="font-weight-bold text-center">{q.question}</p>
      <div className="d-flex justify-content-between">
        {q.options.map((option, idx) => (
          <button
            key={idx}
            className={`w-50 my-2 shadow p-2  ms-1 ms-lg-2 border ${
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
                option === "Yes"
                  ? "30px 5px 5px 30px"
                  : option === "Immediately"
                  ? "30px 5px 5px 30px"
                  : option === "No"
                  ? "5px 30px 30px 5px"
                  : option === "1 Year"
                  ? "5px 30px 30px 5px"
                  : "5px",
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
              Now is the perfect moment to sell your vehicle. No time !
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
            <img
              src="/6387973.svg"
              alt=""
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
            {questions
              .filter((q) => ["3"].includes(q.id))
              .map((q) => (
                <div
                  className="shadow p-3 mb-5 bg-white rounded-5 px-3 px-md-3"
                  key={q.id}
                >
                  <div className="d-flex justify-content-between">
                    <p className="font-weight-bold">{q.question}</p>
                    <div className="w-50">
                      {q.options.map((option, idx) => (
                        <button
                          key={idx}
                          className={`w-50 shadow p-2  border ${
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
                              option === "Yes"
                                ? "30px 5px 5px 30px"
                                : option === "No"
                                ? "5px 30px 30px 5px"
                                : "",
                          }}
                          onClick={() =>
                            handleButtonClick(q.id, option.toLowerCase())
                          }
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <textarea
                    className="w-100 mt-3 rounded-4 border p-2"
                    rows="2"
                    placeholder="If yes leave a note"
                  ></textarea>
                </div>
              ))}
          </Col>
          <Col xs={12} md={6}>
            {questions
              .filter((q) => ["4"].includes(q.id))
              .map((q) => (
                <div
                  className="shadow p-3 mb-5 bg-white rounded-5 px-3 px-md-3"
                  key={q.id}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="font-weight-bold">{q.question}</p>
                    <div className="w-50">
                      {q.options.map((option, idx) => (
                        <button
                          key={idx}
                          className={`w-50 shadow p-2  border ${
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
                              option === "Yes"
                                ? "30px 5px 5px 30px"
                                : option === "No"
                                ? "5px 30px 30px 5px"
                                : "",
                          }}
                          onClick={() =>
                            handleButtonClick(q.id, option.toLowerCase())
                          }
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  <textarea
                    className="w-100 rounded-4 border p-2"
                    rows="2"
                    placeholder="If yes leave a note"
                    style={{
                      marginTop: "2.4rem",
                    }}
                  ></textarea>
                </div>
              ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
