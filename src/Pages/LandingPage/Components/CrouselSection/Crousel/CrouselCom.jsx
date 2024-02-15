import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const CustomCarousel = () => {
  const sliderItems = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    // Add more items as needed
  ];

  const settings = {
    className: "center",
    centerMode: true,
    // infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2, // Adjust initial slide as needed
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {sliderItems.map((item) => (
          <div key={item.id} className="slider-item">
            {/* Customize the video tag here */}
            <video width="320" height="260" muted controls>
              <source src="car.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
