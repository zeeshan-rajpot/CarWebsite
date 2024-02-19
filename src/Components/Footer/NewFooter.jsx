import React from 'react'
import './newfooterstyle.css'
import { Col, Container, Row } from 'react-bootstrap'
const NewFooter = () => {
    return (
        <>

            <Container fluid style={{ padding: '3rem', paddingBottom: '1rem' }} className='footerbgdiv'>
                <Row className='d-md-flex align-items-center justify-content- ' style={{ paddingBottom: '3rem' }}>
                    <Col md={6}>
                        <div>
                            <h6 className="card-title"><b style={{ fontSize: '24px' }}>CAR CHASER</b></h6>
                            <p className="" style={{ fontSize: '13px', fontWeight: '100' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the induages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley o
                                s with the release of Letraset sheetsg software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='d-flex align-items-center justify-content-between d-md-block mt-5 mt-md-0'>

                            <div className='d-md-flex align-items-center justify-content-between text-nowrap border-bottom-footer pb-2'>
                                <h5 className='footerheading mb-1 mb-md-0'>
                                    <b >Company</b>
                                </h5>
                                <p className='footerlink'>
                                    Our story
                                </p>
                                <p className='footerlink'>Our Vision</p>
                                <p className='footerlink'>
                                    Our Team
                                </p>
                            </div>
                            <div className='d-md-flex align-items-center justify-content-between text-nowrap pt-2'>
                                <h5 className='footerheading mb-1 mb-md-0'>
                                    <b >Car Chaser</b>
                                </h5>
                                <p className='footerlink'>The process</p>
                                <p className='footerlink'>
                                    Trade In
                                </p>
                                <p className='footerlink'>
                                    Our Process
                                </p>
                            </div>

                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='d-flex align-items-center justify-content-between d-md-block mt-3 mt-md-0'>

                            <div className='d-md-flex align-items-center justify-content-start text-nowrap border-bottom-footer pb-2  '>
                                <h5 className='footerheading mb-1 mb-md-0'>
                                    <b >Location   </b>
                                </h5>
                                <p className='footerlink ps-0 ps-md-3  '>
                                    Ontario
                                </p>

                            </div>
                            <div className='d-md-flex align-items-center justify-content-start text-nowrap pt-0 pt-md-2'>
                                <h5 className=' footerheading mb-1 mb-md-0'>
                                    <b>Help Center</b>
                                </h5>
                                <p className='footerlink  ps-0 ps-md-3 '>
                                    Contact Us
                                </p>
                            </div>

                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className='pt-1 border rounded-5 position-relative w-100 ' ></div>
                        <div className='d-md-flex align-items-center justify-content-between pt-md-2'>
                            <div>
                                Copyright © 2024 CarChaser. All Rights Reserved.
                            </div>
                            <div>
                                <span>Terms of Usey</span>
                                <span className='ms-4 '>Privacy Policy</span>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>




        </>
    )
}

export default NewFooter
