import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MobileDownload = () => {
  return (
    <>


    
                    <Container >
                        <Row className="w-75 m-auto mobh90">
                            <Col md={6} className='d-flex flex-column align-items-start justify-content-center '>
                               
                               
                                <h4 className="mb-3" style={{ fontSize: '28px' }}>Download <span style={{ color: '#FF725E'  }}> Car Chaser </span> Mobile App</h4> 
                                <p className='mobp' style={{
                                    fontSize: '16px',
                                    color:'#747474'
                                }}>
                                    With our dedication to finding your ideal car, we're committed to understanding your preferences, budget, and the purpose of your vehicle. Whether you prioritize advanced technology, safety features, environmental impact, or long-term value, we're here to assist every step of the way.
                                </p>
                                <p className='mobp' style={{
                                    fontSize: '16px',
                                    color:'#747474'
                                }}
                                >
                                    Our comprehensive services extend beyond just finding the right car; we offer financing options, trade-in evaluations, and post-purchase support to ensure a seamless experience. Let's work together to discover your dream car and make it a reality!
                                </p>
                                <div className="d-flex align-items-center text-center justify-content-center flex-md-nowrap flex-wrap">
                                <button  className="px-5 text-light border-0 rounded-5 py-2 me-2 me-md-2" style={{background:'#185F87' ,width:'200px'}}> <img className="" src="/Path 35508.png" alt="" width='20px'/> Apple</button>
                                <button  className="px-3 text-light border-0 rounded-5 py-2 mt-2 mt-md-0" style={{background:'#185F87' ,width:'200px'}}> <img className="" src="/Group 23144.png" alt="" width='20px' />    Play Store</button>
                                </div>
                                
                            </Col>
                            <Col md={6} className="d-flex align-items-center ">

                            <img  src="/2020-01-04_(1_of_23)ggg.svg" className="mobhauto" alt="" style={{  height: "90%", objectFit:'contain'}} />
                            </Col>

                        </Row>
                    </Container>
   

    </>
  );
};

export default MobileDownload;
