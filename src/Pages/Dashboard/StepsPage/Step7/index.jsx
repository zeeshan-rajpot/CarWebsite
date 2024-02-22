import { React, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const index = () => {
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview([...imagePreview, event.target.result]);
      };
      reader.onerror = (error) => {
        console.error("Error reading the file:", error);
      };

      reader.readAsDataURL(file);
    }
  };

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
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
          <Col xl={6} md={4}>
            <div
              className="d-flex flex-column justify-content-center align-items-center w-100 p-4 shadow"
              style={{
                height: "auto", // Set the height to auto
                position: "relative", // Add position relative
              }}
            >
              <Col xs="auto">
                <>
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  ) : (
                    <img
                      src="/Frame 68081.svg"
                      alt="files icon"
                      onClick={handleIconClick}
                    />

                  )}
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
