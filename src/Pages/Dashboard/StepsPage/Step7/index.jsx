import { React, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export const index = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImages([...images, event.target.result]);
      };
      reader.onerror = (error) => {
        console.error("Error reading the file:", error);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Container
        className="mt-5 shadow rounded-5 px-4 px-md-5 pb-3"
        style={{ minHeight: "620px" }}
      >
        <div className="pt-5 d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-center ">
            <p
              className="text-start "
              style={{ color: "#515151", fontWeight: "600", fontSize: "24px" }}
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
            <img src="/Group 17186.svg" />
          </div>
        </div>
        <Row className="mt-5">
          {images.length === 0 && (
            <Col
              xs={6}
              md={4}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <Card
                className="shadow rounded-5"
                style={{
                  width: "340px",
                  height: "220px",
                }}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <img src="/Frame 68081.svg" alt="add_icon" />
                  <label
                    htmlFor={`fileInput-0`}
                    className="my-0 mt-2"
                    style={{
                      color: "#959595",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Select image
                  </label>
                  <input
                    type="file"
                    id={`fileInput-0`}
                    onChange={handleImageUpload}
                    accept="image/*"
                  />
                </Card.Body>
              </Card>
            </Col>
          )}
          {images.map((image, index) => (
            <Col
              key={index}
              xs={6}
              md={4}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <Card
                className="shadow rounded-5"
                style={{
                  width: "180px",
                  height: "180px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={image}
                  alt={`Uploaded Image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <label
                    htmlFor={`fileInput-${index}`}
                    className="my-0 mt-2"
                    style={{
                      color: "#959595",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Select image
                  </label>
                  <input
                    type="file"
                    id={`fileInput-${index}`}
                    onChange={handleImageUpload}
                    accept="image/*"
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default index;
