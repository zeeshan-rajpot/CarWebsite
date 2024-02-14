import React from "react";

const SuccessJourney = () => {
  return (
    <div className="container w-100 my-5 ">
      <div className="row">
        <div className="col-sm col-12 mt-5">
          <h2 style={{ color: "#1985D2", fontWeight: "bolder" }}>
            Selling your car made easy.
          </h2>
          <h4 className="fw-bolder">Our CEO</h4>
          <div
            style={{ color: "#303030", fontSize: "19px" }}
            className="fw-normal mobwstory"
          >
            <p>
              With a decade of industry experience, comprehends the challenges
              associated with privately selling your car. From the
              time-consuming task of arranging multiple viewings to concerns
              about buyer authenticity and personal safety, to navigating the
              sales process itself, we recognize the stress and apprehension
              involved.
            </p>
            <p>
              In response, we've developed a platform that enables you to sell
              your car securely from the comfort of your home, alleviating
              worries about personal safety, fair pricing, and the time
              commitment of multiple viewings. With over 300 potential buyers
              competing for your vehicle, our platform ensures a swift sale,
              allowing you to carry on with your daily routine.
            </p>
            <p>
              At Car Chaser, we take on the task of chasing the buyer, so
              you don't have to.
            </p>
          </div>
        </div>
        <div className="col-sm col-12 text-center ">
          <img
            src="./Group 17256.png"
            alt="mobile"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessJourney;
