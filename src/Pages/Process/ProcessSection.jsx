import React from "react";
import { Card } from "react-bootstrap";
import "./card.css";

const ProcessSection = () => {
  return (
    <>
      <div style={{ marginTop: "12em" }}>
        <div className="d-flex flex-column align-items-center my-5">
          <img className="cardLogo" src="/Group 17283.svg" alt="logo" />
          <Card
            className="shadow text-center rounded-5 px-2 mobw90 cardWidth"
            style={{ paddingTop: "6em", border: "none" }}
          >
            <p
              style={{ color: "#1985D2", fontSize: "32px", fontWeight: "700" }}
              className="mobhl"
            >
              Step 1
            </p>
            <p
              style={{ fontSize: "28px", fontWeight: "700" }}
              className="mobhm"
            >
              CREATE AN AUTHENTIC VEHICLE PROFILE
            </p>
            <p
              className="mb-5 mb-md-5 px-5 mobhs"
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
            className="shadow text-center rounded-5  px-2 mobw90 cardWidth"
            style={{ paddingTop: "6em", border: "none" }}
          >
            <p
              style={{ color: "#1985D2", fontSize: "32px", fontWeight: "700" }}
              className="mobhl"
            >
              Step 2
            </p>
            <p
              style={{ fontSize: "28px", fontWeight: "700" }}
              className="mobhm"
            >
              DEALERS COMPETE TO BUY YOUR CAR
            </p>
            <p
              className="mb-5 mb-md-5 px-5 mobhs"
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
            className="shadow text-center rounded-5  px-2 mobw90 cardWidth"
            style={{ paddingTop: "6em", border: "none" }}
          >
            <p
              style={{ color: "#1985D2", fontSize: "32px", fontWeight: "700" }}
              className="mobhl"
            >
              Step 3
            </p>
            <p
              style={{ fontSize: "28px", fontWeight: "700" }}
              className="mobhm"
            >
              GETTING PAID
            </p>
            <p
              className="mb-5 mb-md-5 px-5 mobhs"
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
            style={{
              background: "#1985D2",
              padding: "16px 80px",
              fontSize: "24px",
            }}
            className="border rounded-5 text-light "
          >
            Let's Go
          </button>
        </div>
      </div>
    </>
  );
};

export default ProcessSection;
