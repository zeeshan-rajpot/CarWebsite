import React from "react";
import { Card } from "react-bootstrap";
import "./card.css";

const ProcessSection = () => {
  return (
    <>
      <div style={{ marginTop: "12em" }} >
        <div className="d-flex flex-column align-items-center my-5">
          <img className="cardLogo" src="/Group 17283.svg" alt="logo" />
          <Card
            className="shadow text-center rounded-5 w-75 px-2 mobw90"
            style={{ paddingTop: "6em", border: "none" }}
          >
            <p
              style={{ color: "#1985D2", fontSize: "32px", fontWeight: "700" }}
            >
              Step 1
            </p>
            <p style={{ fontSize: "28px", fontWeight: "700" }}>
              CREATE AN AUTHENTIC VEHICLE PROFILE
            </p>
            <p
              className="mb-5 mb-md-5 px-2"
              style={{ fontSize: "20px", fontWeight: "400" }}
            >
              We'll collect accurate information about your car to create a
              profile that we'll then present to potential buyers.
            </p>
          </Card>
        </div>
      </div>
      <div style={{ marginTop: "12em" }}>
        <div className="d-flex flex-column align-items-center my-5">
          <img className="cardLogo" src="/Group 17287.svg" alt="logo" />
          <Card
            className="shadow text-center rounded-5 w-75 px-2 mobw90"
            style={{ paddingTop: "6em", border: "none" }}
          >
            <h3
              style={{ color: "#1985D2", fontSize: "32px", fontWeight: "700" }}
            >
              Step 2
            </h3>
            <h5 style={{ fontSize: "28px", fontWeight: "700" }}>
              DEALERS COMPETE TO BUY YOUR CAR
            </h5>
            <p
              className="mb-5 mb-md-5 px-3"
              style={{ fontSize: "20px", fontWeight: "400" }}
            >
              Our network of dealers is prepared to purchase cars and competes
              for yours through our online bidding process. We prioritize
              ensuring you receive the best offer. You have the option to either
              accept or reject the offer. And the best part? Our service is
              completely free! For the love of cars.
            </p>
          </Card>
        </div>
      </div>
      <div style={{ marginTop: "12em" }}>
        <div className="d-flex flex-column align-items-center my-5">
          <img className="cardLogo" src="/Group 17286.svg" alt="logo" />
          <Card
            className="shadow text-center rounded-5 w-75 px-2 mobw90"
            style={{ paddingTop: "6em", border: "none" }}
          >
            <h3
              style={{ color: "#1985D2", fontSize: "32px", fontWeight: "700" }}
            >
              Step 3
            </h3>
            <h5 style={{ fontSize: "28px", fontWeight: "700" }}>
              GETTING PAID
            </h5>
            <p
              className="mb-5 mb-md-5 px-2"
              style={{ fontSize: "20px", fontWeight: "400" }}
            >
              It's as simple as choosing a drop-off time or pick-up time. We
              handle all the paperwork, including paying off your auto loan or
              buying-out your lease, and if there's any equity on the car after
              the loan or lease, we pay that to you on the spot. Selling your
              car has never been easier.
            </p>
          </Card>
        </div>
        <div style={{ margin: "5em 0" }} className="w-100 text-center ">
          <button
            style={{ background: "#1985D2", padding: "16px 80px" }}
            className="border rounded-5 text-light "
          >
            Let's Go
          </button>
        </div>

        {/* <div className="ms-5">
          <img src="/theprocesscarbg.png" alt="" />
        </div> */}
      </div>
    </>
  );
};

export default ProcessSection;
