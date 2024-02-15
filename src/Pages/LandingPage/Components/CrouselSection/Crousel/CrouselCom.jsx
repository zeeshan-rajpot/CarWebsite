import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      style={{ ...style, fontSize: "30px", width: "19px", height: "50px", lineHeight: "50px" , color:'#fff'}}
      onClick={onClick}
    >
      <img src="/right-arrow-next-svgrepo-com.svg" width='30px' alt="" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      style={{ ...style, fontSize: "30px", width: "50px", height: "50px", lineHeight: "50px" , color:'#fff'}}
      onClick={onClick}
    >
      <img src="/left-arrow-next-svgrepo-com.svg" width='30px' alt="" />
    </div>
  );
};



const CustomCarousel = () => {
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef(null);

  function togglePlay(video) {
    if (video.paused || video.ended) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  }

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
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          initialSlide: 1, // Adjust initial slide as needed
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
    <div className="container bg-transparent">
      <Slider {...settings}  nextArrow={<NextArrow />}
  prevArrow={<PrevArrow />}>
        {sliderItems.map((item) => (
          <div key={item.id} className="slider-item">
            <div className="video-player player-overlay m-auto sliderw mobw100" style={{width:'60%'}}>
              <video  
                ref={videoRef}
              className="video"
              onClick={(e) => togglePlay(e.target)}
                >
                <source src="car.mp4" type="video/mp4" />
              </video>
              {/* <div className="controls">
                <button
                 ref={videoRef}
                  className="controls__button toggleButton"
                  title="Toggle Play"
                  onClick={() => togglePlay(videoRef.current)}

                >
                  {isPaused ? "►" : "❚❚"}
                </button>
              </div> */}
            <div className="controls">
                {isPaused && (
                  <img src="/Groupplay.svg" alt="Play" className="play-icon" />
                )}
              </div>
<div className="content-testmonial">
<h4>zeeshan</h4>
<p>3 months ago</p>
</div>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
