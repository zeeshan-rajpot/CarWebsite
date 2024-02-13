import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ModalCom = () => {
  return (
    <div>
      <Row className='d-flex justify-content-center align-items-center rounded-5 bg-transparent'>
        <Col lg={6} style={{ backgroundColor: '#FFFFFF' }}>
          <div>
            <div className='text-center'>
              <p> Best time to call </p>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center'>
              <div>
                <img src='/phone-bold-duotone.svg' alt='' />
                <input type='text' placeholder='Full name' />
              </div>
              <div>
                <img src='/VectorPhone.svg' alt='' />
                <input type='text' placeholder='Phone number' />
              </div>
              <div>
                <img src='/clarity_alarm-clock-line.svg' alt='' />
                <input type='text' placeholder='02 : 58 AM' />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} style={{ backgroundColor: '#41ACF9' }}>
          <img src='/Asset 1 4.png' alt='' style={{ width: '100%' }} />
        </Col>
      </Row>
    </div>
  );
};

export default ModalCom;
