import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'

const NewcarCompunent = () => {
  return (
    <>

<div
        className="carBg mb-5"
        style={{
          // marginTop: "-5rem",
          zIndex: "+5",
          position: "relative",
        }}
      >

        <Container>
            <Row className="">
                <Col className='w-75 m-auto mobh90'>
                <p
          style={{
            color: "white",
            paddingTop: "80px",
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "700",
          }}
        >
          <b>
            {" "}
            It's our responsibility to <span style={{ color: "#FF725E" }}> Sell Your Car </span> at{" "}
            Best deal
          </b>
        </p>
        <p
          className="text-light pt-1 text-center m-auto mobw100"
          style={{ fontSize: "16px" ,width:'90%'}}
        >
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt .
        </p>
                </Col>
            <Col md={12} className='' style={{paddingTop:'100px'}}>
            <img className='mobhauto' src="/isolated_realistic_shiny_red_modern_elegant_city_sedan_car_from_left_front_angle_view.png" alt="" />
            </Col>
            </Row>
            
        </Container>
        
      </div>
      
    </>
  )
}

export default NewcarCompunent
