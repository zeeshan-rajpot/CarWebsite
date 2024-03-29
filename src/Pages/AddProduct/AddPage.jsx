import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

const AddPage = () => {
  return (
    <>
      {/* <Navbar link='Add' /> */}
      <div className=''>
        <Row className='text-center ' style={{paddingTop:'250px'}}>
          <Col lg={12}>
            <img src='/4860245.svg' alt='' style={{ width: '340px' }} />
          </Col>
        </Row>

        <Row className='text-center mb-5 d-flex flex-column justify-content-center align-items-center'>
          <Col lg={6}>
            <p
              className='mt-4'
              style={{ color: '#515151', fontSize: '24px', fontWeight: '700' }}
            >
              Lead to automotive excellence
            </p>
            <p
              className='my-0'
              style={{ color: '#515151', fontSize: '16px', fontWeight: '400' }}
            >
              For a competitive offer, please respond to the 
{' '}
            </p>
            <p
              className='my-0'
              style={{ color: '#515151', fontSize: '16px', fontWeight: '400' }}
            >
             question with precision.
            </p>
          </Col>
          <Col lg={6} className='mt-4'>
            <Link to='/Add/Car'>
              <button
                className='px-5 p-2 rounded-5 border-0 '
                style={{ backgroundColor: '#1985D2', color: '#FFFFFF ' }}
              >
                Add Car Detail
              </button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AddPage;
