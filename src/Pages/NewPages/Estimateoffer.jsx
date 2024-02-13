import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
export const Estimateoffer = () => {
  return (
    <div>
      <Container>
        <Row className='my-5 '>
          <Col lg={3}>
            <div
              className='text-start w-25 '
              style={{
                marginTop: '150px',
                marginRight: '50px',
                height: ' 40px',
                transform: 'rotate(90deg)',
                position: 'absolute',
                backgroundColor: '#F5F5F5',
              }}
            ></div>
          </Col>
          <Col lg={9}>
            <Card className='border-0 shadow rounded-4'>
              <Card.Img
                variant='top'
                style={{ borderRadius: '15px 15px 0px 0px' }}
                src='/CardbgCard.png'
              />
              <Card.Body style={{ borderBottom: '1px solid #EBEBEB' }}>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex flex-column justify-content-start align-items-start'>
                    <p
                      className='my-0'
                      style={{
                        color: '#101010',
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      2018 Volvo
                    </p>
                    <p
                      className='my-0'
                      style={{
                        color: '#3D3D3D',
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      XC90 T6 R-Design wagon{' '}
                      <span
                        style={{
                          color: '#3D3D3D',
                          fontSize: '18px',
                          fontWeight: '400',
                        }}
                      >
                        | 180000km
                      </span>
                    </p>
                  </div>
                  <div className='d-flex flex-column justify-content-end align-items-end'>
                    <p
                      className='my-0'
                      style={{
                        color: '#1985D2',
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      25,000$
                    </p>
                    <p
                      className='my-0'
                      style={{
                        color: '#101010',
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      Estimated Offer
                    </p>
                  </div>
                </div>
              </Card.Body>
              <div className='py-3 px-3'>
                <p
                  className='my-0'
                  style={{
                    color: '#303030',
                    fontSize: '18px',
                    fontWeight: '600',
                  }}
                >
                  Car Chaser's Estimated Value Range for Your Car.
                </p>
                <p
                  className='my-0'
                  style={{
                    color: '#303030',
                    fontSize: '15px',
                    fontWeight: '500',
                  }}
                >
                  Our estimated range serves as an initial assessment. By
                  leveraging competition within our dealer network, Car Chaser
                  ensures you receive a solid offer, ultimately leading to a
                  higher price compared to other alternatives.
                </p>
                <div className='text-center mt-4'>
                  <button
                    className='border-0 text-white p-2 w-25 rounded-4 '
                    style={{
                      backgroundColor: '#1985D2',
                    }}
                  >
                    Sound good, Lets
                    <img src='/logos_go.svg' alt='' />
                  </button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Estimateoffer;
