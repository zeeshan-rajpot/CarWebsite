import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
export const checkBox = ( { content } ) =>
{
  const [ isActive, setIsActive ] = useState( false ); // State to track checkbox state
  const isMobile = useMediaQuery( { maxWidth: 768 } );
  const activeStyle = {
    width: isMobile ? '35.73px' : '48px',
    height: isMobile ? '35.35px' : '44px',
    borderRadius: '12px 0px 0px 12px',
    backgroundColor: '#4E9C0B',
  };
  const Para = {
    width: isMobile ? '  120px' : '196px ',
    height: isMobile ? ' 35.35px' : '48px ',
    borderRadius: '0px 12px 12px 0px'
  };

  const textStyles = {
    color: isActive ? '#515151' : '#959595',
    fontSize: isMobile ? '10px' : '16px',
    fontWeight: '400',
  };
  const notActiveStyle = {
    width: isMobile ? '35.73px' : '48px',
    height: isMobile ? '35.35px' : '44px',
    borderRadius: '12px 0px 0px 12px',
  };

  const toggleCheckBox = () =>
  {
    setIsActive( !isActive );
  };

  return (
    <div>


      <Row className={ `d-flex justify-content-start align-items-center mt-5 ${ isActive ? 'active' : 'not-active' }` }>
        <Col xs={ 2 } lg={ 2 } onClick={ toggleCheckBox } className='pe-4'>
          <div className={ `shadow d-flex justify-content-center align-items-center` } style={ isActive ? activeStyle : notActiveStyle }>
            <img src="/Fill4.svg" alt="" />
          </div>
        </Col>
        <Col xs={ 9 } lg={ 10 } onClick={ toggleCheckBox }>
          <div className='shadow Para ms-0 ms-md-2 ms-7' style={ Para }>
            <p className=' my-0 text-start p-2 p-md-2 ' style={ textStyles } >
              { content }
            </p>
          </div>
        </Col>
      </Row>

    </div>
  );
};

export default checkBox;