import React from "react";

const MobileDownload = () => {
  return (
    <div className="container w-100 my-5 ">
      <div className="row">
        <div className="col-sm col-12 mt-5 d-flex align-items-start justify-content-center flex-column">
          <p
            className="fw-bold"
            style={{
              fontSize: "36px",
              fontWeight: "400",
            }}
          >
            You can also download car chaser mobile app
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con
          </p>
          <h5 style={{ color: "#1985D2" }}>Install Now</h5>
          <div
            className="d-flex"
            style={{
              marginLeft: "-10px",
            }}
          >
            <img src="./appstoreicon.svg" alt="appstoreButton" />
            <img src="./playstoreicon.svg" alt="playstorebutton" />
          </div>
        </div>
        <div className="col-md col-12 text-center ">
          <img
            src="./mobile.png"
            alt="mobile"
            style={{
              width: "120%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileDownload;
