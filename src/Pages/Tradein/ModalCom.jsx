import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ModalCom = ({onHide}) => {

  const handleBackClick = () => {
    // Call the onHide function passed from the parent component
    onHide();
  };
  return (
    <div>
      {/* <Row className='d-flex justify-content-center align-items-center rounded-5 bg-transparent'>
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
      </Row>  */}
      <div className='d-flex rounded-5  bg-light w-100'>
        <div className=' w-50' style={{textAlign:'-webkit-center'}}>
          <h4 className='mt-5'><b style={{color:'#41ACF9'}}> Best time to call </b></h4>
        <div className='input-container rounded-5  shadow bg-light '>
                {/* <FaUser className='icon' /> */}
                <img src='/FL Name.svg' />
                <input
                  type='text'
                  name='phone'
                 
                  placeholder='Name'
                  className='bg-light'
                />
              </div>

              <div className='input-container rounded-5  shadow bg-light mt-3 '>
                {/* <FaUser className='icon' /> */}
                <img src='/Group 17234.svg' />
                <input
                  type='text'
                  name='phone'
                 
                  placeholder='Phone Number'
                  className='bg-light'
                />
              </div>


              <div className='input-container rounded-5 mt-3 shadow bg-light '>
                {/* <FaUser className='icon' /> */}
                <img src='/clarity_alarm-clock-line.svg' style={{width:'25px'}}/>
                <input
                  type='time'
                  name='phone'
                 
                  placeholder='Phone Number'
                  className='bg-light'
                />
              </div>

         
              <button
                className='px-4 p-2 rounded-5 mt-3 mb-5'
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #1985D2',
                  color: '#1985D2',
                }}
                onClick={handleBackClick}
              >
                Cancel
              </button>
              <button
                    className='px-4 ms-3 p-2 rounded-5 border-0'
                    style={{ backgroundColor: '#1985D2', color: '#FFFFFF' }}
                  >
                    Submit 
                  </button>
        </div>
        <div className='w-50 p-5' style={{ backgroundColor: '#41ACF9', borderRadius:'0px 33px 33px 0px' }}>
        <img src='/Asset 1 4.png' alt='' className='m-auto' style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default ModalCom;
