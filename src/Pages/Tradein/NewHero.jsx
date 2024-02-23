import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HeroSectionnew.css'; // Import CSS file for styling

const HeroSection = () => {
    const features = [
        {
            image: "/7197525.png",
            title: "Discover Dealership Difference",
            description: "We ensure you receive top dollar for your trade-in and a valuable tax credit for your next purchase. Isn't that wonderful?"
        },
        {
            image: "/auto_show_08 [Converted].svg",
            title: " Convenience at Your Fingertips",
            description: "Choose your next car from the comfort of your home. We're here to assist you in finding a vehicle that suits your lifestyle and needs. Plus, our service is completely free with no hidden fees."
        },
        {
            image: "/Group 22377.png",
            title: "Your Satisfaction is our Priority",
            description: "We are dedicated to providing only quality cars and top-notch service. Connect with your vehicle acquisition specialist today."
        },



        // Add more items as needed
    ];

    return (
        <>

            <div className="hero-section">
                <div className="hero-overlay">
                    <Container fluid>
                        <Row>
                            <Col md={6} className='pt-5 paddingtopxlscreen paddingbottomxlscreen'>
                                <h3 className='headingmob' style={{ fontSize: '4vw' }}><b>CAR CHASER</b></h3>
                                <p className='mobp' style={{
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
                </div>
            </div>



            <Container style={{ marginTop: '100px', marginBottom: '100px' }}>
                <Row className='equal-height-row'>
                    {features.map((feature, index) => (
                        <Col xs={12} md={4} key={index} className='my-3 text-center'>
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
            <Container style={{ marginBottom: '100px' }}>
                <Row className=''>
                    <Col className='shadow p-0'>
                        <div className=' d-block d-md-flex align-items-center justify-content-between'>
                           
                            <div className='position-relative'>
                                <div className=''>
                                    <img src="/226520-P1QDOS-221.png" alt="" width='300px' />
                                </div>
                            </div>
                            <div>
                            <h6 className="card-title"><b style={{  fontSize: '18px' }}> Step into the next era with Car Chaser</b></h6>
                           <p>Car Chaser emerges as the harbinger of the next era in vehicular excellence. With meticulous attention to detail, Car Chaser transcends the boundaries of conventional automotive design and engineering, propelling enthusiasts into a realm of unparalleled innovation and sophistication.</p>
                            </div>
                            <div className='startbtn m-auto'>
                               <p className='py-md-5 py-2 ps-3 pe-2 ms-2 text-light' style={{textWrap:'nowrap' ,background:'#185F87', borderBottomLeftRadius:'20px' ,borderTopLeftRadius:'20px'}}>Let's Start</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HeroSection;
