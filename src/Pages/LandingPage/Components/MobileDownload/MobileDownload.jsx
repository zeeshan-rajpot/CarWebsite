import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MobileDownload = () => {
  return (
    <>
      <Container style={{height:'400px'}}>
        <Row className=" d-flex align-items-start justify-content-start " >
          <Col className=" " md={6}>
            <h4>Download <span style={{ color: '#FF725E' }}> Car Chaser </span> Mobile App</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting dustry. Lorem Ipsum has been the industry's standard dummy text ece the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.

              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boorem Ipsum.</p>

          </Col>
          <Col md={6}>
            <img src="" alt="" srcset="" />
          </Col>
        </Row>
      </Container>


    
                    <Container >
                        <Row>
                            <Col md={6} className='pt-5 paddingtopxlscreen paddingbottomxlscreen'>
                                <h3 className='headingmob' style={{ fontSize: '4vw' }}><b>CAR CHASER</b></h3>
                               
                                <h4 style={{ fontSize: '2vw' }}>Download <span style={{ color: '#FF725E'  }}> Car Chaser </span> Mobile App</h4> <p className='mobp' style={{
                                    fontSize: '1vw'
                                }}>
                                    With our dedication to finding your ideal car, we're committed to understanding your preferences, budget, and the purpose of your vehicle. Whether you prioritize advanced technology, safety features, environmental impact, or long-term value, we're here to assist every step of the way.
                                </p>
                                <p className='mobp' style={{
                                    fontSize: '1vw'
                                }}
                                >
                                    Our comprehensive services extend beyond just finding the right car; we offer financing options, trade-in evaluations, and post-purchase support to ensure a seamless experience. Let's work together to discover your dream car and make it a reality!
                                </p>
                            </Col>
                        </Row>
                    </Container>
   

    </>
  );
};

export default MobileDownload;
