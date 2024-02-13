import React, { useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css"; // Import your custom CSS file for styling

const CustomCarousel = () => {
  const carouselRef = useRef(null); // Ref to access the Carousel component

  const slides = [
    {
      name: "ALi",
      image: "/crousel1.jpg",
      time: "4 hours ago",
    },
    {
      name: "Anas",
      image: "/crousel2.jpg",
      time: "4 hours ago",
    },
    {
      name: "Salman",
      image: "/crousel3.jpg",
      time: "4 hours ago",
    },
    {
      name: "Raza",
      image: "/crousel4.jpg",
      time: "4 hours ago",
    },
  ];

  const handleLeftArrowClick = () => {
    if (carouselRef.current) {
      carouselRef.current.prev(); // Move carousel to the previous slide
    }
  };

  const handleRightArrowClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next(); // Move carousel to the next slide
    }
  };

  return (
    <Carousel ref={carouselRef}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center align-items-center">
            <div
              className="shadow d-flex justify-content-center align-items-center"
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                backgroundColor: "#1985D2",
                objectFit: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={handleLeftArrowClick}
            >
              <img
                src="/leftArrow+RightArrow.svg"
                alt=""
                className="arrow left-arrow"
              />
            </div>

            <img
              className="d-block w-100 mx-auto small-image"
              src={slide.image}
              alt={slide.name}
            />

            <Carousel.Caption className="text-center">
              <h3>{slide.name}</h3>
              <p>{slide.time}</p>
            </Carousel.Caption>

            <div
              className="shadow d-flex justify-content-center align-items-center"
              style={{
                height: "80px",
                width: "40px",
                borderRadius: "50%",
                backgroundColor: "#1985D2",
                objectFit: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={handleRightArrowClick}
            >
              <img
                src="/leftArrow+RightArrow.svg"
                alt=""
                className="arrow right-arrow"
              />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
