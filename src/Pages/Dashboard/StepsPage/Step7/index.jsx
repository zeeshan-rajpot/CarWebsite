import { React, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const index = () => {
  const [imagePreviews, setImagePreviews] = useState([]);

  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;

    if (!files.length) {
      return;
    }

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreviews((prevPreviews) => [
          ...prevPreviews,
          event.target.result,
        ]);
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
      reader.readAsDataURL(file);
    }
  };

  const imagePreviewCards = imagePreviews.map((preview, index) => (
    <Col key={index} xs={12} md={4}>
      <div
        className="d-flex flex-column justify-content-center align-items-center shadow "
        style={{ width: "340px", height: "220px", borderRadius: "10px" }}
      >
        <img
          src={preview}
          alt={`Image Preview ${index + 1}`}
          style={{
            objectFit: "cover",
            borderRadius: "10px",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </Col>
  ));

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
            <img
              src="/Group 17186.svg"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <Row className="mt-5 g-3">
          {imagePreviewCards}
          <Col xs={12} md={4}>
            <div
              className="d-flex flex-column justify-content-center align-items-center shadow p-2 "
              style={{ width: "340px", height: "220px", borderRadius: "10px" }}
            >
              <input
                type="file"
                accept="image/*"
                multiple
                ref={fileInputRef}
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              <img
                src="/Frame 68081.svg"
                alt="files icon"
                onClick={handleIconClick}
              />
              <label
                htmlFor="plusIcon"
                style={{
                  fontFamily: "gilory",
                  color: "rgba(149, 149, 149, 1)",
                }}
              >
                Add images
              </label>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
