import React from "react";
import Carousel from "../CrouselSection/Crousel/clientsCrousel";
import { Container } from "react-bootstrap";
export const index = () => {
  return (
    <div className="bgtestmolial mb-5">
      <div className=" text-center pt-3">
        <p
          className="my-0  fw-bold mobhl text-dark"
          style={{ color: "#030303", fontWeight: "400", fontSize: "48px" }}
        >
          Over Customers trust us
        </p>
        
      </div>
      <Container>
        <Carousel />
      </Container>
    </div>
  );
};
export default index;
