import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/NewNavbar';


const Chat = () => {
  return (
    <>
      <Navbar />
      <div className=''>
        <Row className='text-center ' style={{paddingTop:'250px'}}>
          <Col lg={12}>
            <img src='/Group.svg' alt='' style={{ width: '340px' }} />
          </Col>
        </Row>

        <Row className='text-center mb-5 d-flex flex-column justify-content-center align-items-center'>
          <Col lg={6}>
            <p
              className='mt-4'
              style={{ color: '#515151', fontSize: '24px', fontWeight: '700' }}
            >
              Live chat support
            </p>
            <p
              className='my-0'
              style={{ color: '#515151', fontSize: '16px', fontWeight: '400' }}
            >
              Live chat support is a way for customers to get help through
              <br />
              instant messaging platforms.
            </p>
            {/* <p className='my-0' style={ { color: '#515151', fontSize: '16px', fontWeight: '400' } }>of questio You can also select the questions.</p> */}
          </Col>
          <Col lg={6} className='mt-4'>
            <Link to='/Chat/admin'>
              <button
                className='px-5 p-2 rounded-5 border-0 '
                style={{ backgroundColor: '#1985D2', color: '#FFFFFF ' }}
              >
                Chat Support
              </button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Chat;
