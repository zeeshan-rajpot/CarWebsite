import React from "react";
import "./counter.css";
const DetailCounter = () => {
  return (
    <div className="counterbg  mt-5">
      <p
        className="text-center fw-bold "
        style={{ color: "#1985D2", fontSize: "30px", fontWeight: "700" }}
      >
        Quick Sale , Swift Payment
      </p>
      <h3
        className="text-center px-2"
        style={{
          fontSize: "24px",
          fontWeight: "400",
        }}
      >
        Conveniently sell your car from the comfort of your own home, so you can
        relax and enjoy your <br /> favorite TV shows
      </h3>
      <div className="container w-75 mt-4">
        <div className="row justify-content-center">
          <div
            className="col-sm mb-4 "
            style={{
              borderRight: "2px dashed #1985D2",
            }}
          >
            <div className="p-3 text-center ">
              <h2
                className="fw-bold"
                style={{
                  color: "#1985D2",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                72hrs
              </h2>
              <h4
                style={{
                  marginTop: "2em",
                }}
              >
                72hrs and its sold
              </h4>
            </div>
          </div>
          <div
            className="col-sm mb-4 mobborder"
            style={{
              borderRight: "2px dashed #1985D2",
            }}
          >
            <div className="p-3 text-center ">
              <p
                className="fw-bold"
                style={{
                  color: "#1985D2",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                300s
              </p>
              <h4
                style={{
                  marginTop: "1.5em",
                }}
              >
                Over 300 dealers are competing to buy your car.
              </h4>
            </div>
          </div>
          <div className="col-sm mb-4 mobborder">
            <div className="p-3 text-center">
              <h2
                className="fw-bold"
                style={{
                  color: "#1985D2",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
              >
                2,500+
              </h2>
              <h4
                style={{
                  marginTop: "2em",
                }}
              >
                Happy customers
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCounter;
