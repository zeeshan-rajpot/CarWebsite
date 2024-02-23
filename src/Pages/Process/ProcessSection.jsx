import React from "react";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap';
import "./card.css";

const ProcessSection = () => {
  const features = [
    {
        image: "/Frame 1261153570.png",
        title: "Create an authentic vehicle profile",
        description: "We'll collect accurate information about your car to create a profile that we'll then present to potential buyers."
    },
    {
        image: "/Frame 1261153571.png",
        title: " Dealers compete to buy your car",
        description: "Our network of dealers is prepared to purchase cars and competes for yours through our online bidding process. We prioritize ensuring you receive the best offer. You have the option to either accept or reject the offer. And the best part? Our service is completely free! For the love of cars."
    },
    {
        image: "/Frame 126115357011.png",
        title: "Getting paid getting",
        description: " It's as simple as choosing a drop-off time or pick-up time. We handle all the paperwork, including paying off your auto loan or buying-out your lease, and if there's any equity on the car after the loan or lease, we pay that to you on the spot.  Selling your car has never been easier."
    },



    // Add more items as needed
];
  return (
    <>
         <Container style={{ marginTop: '100px', marginBottom: '100px' }}>
                <Row className='equal-height-row'>
                    {features.map((feature, index) => (
                        <Col md={4} xs={12} key={index} className='my-3 text-center'>
                            <div className="card ">
                                <div className="image-container">
                                    <img src={feature.image} alt={feature.title} className="card-img-top" />
                                </div>
                                <div className="card-body shadow">
                                    <h6 className="card-title"><b style={{ color: '#FF725E', fontSize: '18px' }}>{feature.title}</b></h6>
                                    <p className="card-text" style={{ fontSize: '13px' }}>{feature.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
    </>
  );
};

export default ProcessSection;
