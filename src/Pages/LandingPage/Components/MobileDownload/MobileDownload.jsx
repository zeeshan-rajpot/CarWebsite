import React from "react";

const MobileDownload = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6 col-12  mobm mobh"
          style={{
            marginLeft: "5rem",
            paddingTop: "6rem",
          }}
        >
          <p
            className="fw-bold"
            style={{ fontSize: "36px", fontWeight: "400" }}
          >
            You can also download the Car Chaser mobile app
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con
          </p>
          <h5 style={{ color: "#1985D2" }}>Install Now</h5>
          <div className="d-flex" style={{ marginLeft: "-10px" }}>
            <img src="./appstoreicon.svg" alt="App Store Button" />
            <img src="./playstoreicon.svg" alt="Play Store Button" />
          </div>
        </div>
        <div className="col-md-5 col-12 ">
          <img
            src="./mobile.png"
            alt="Mobile"
            style={{ width: "130%", height: "auto" }}
            className="mobvimg"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileDownload;
