import React from "react";
import "./counter.css";
const DetailCounter = () => {
  return (
    <div className="counterbg my-5">
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
            className="col-sm mb-4 mobborder"
            style={{
              border: "none",
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
              <h3 className="mt-5">
                Over 300 dealers are competing to buy your car.
              </h3>
            </div>
          </div>
          <div
            className="col-sm mb-4 mobborder"
            style={{
              borderRight: "2px dashed #1985D2",
            }}
          >
            <div className="p-3 text-center" style={{}}>
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
              <h3
                style={{
                  marginTop: "3em",
                }}
              >
                Happy customers
              </h3>
            </div>
          </div>
          <div className="col-sm mb-4 ">
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
              <h3
                style={{
                  marginTop: "3em",
                }}
              >
                72hrs and its sold
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCounter;
