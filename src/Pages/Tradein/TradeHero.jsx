import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalCom from "./ModalCom.jsx";

const TradeHero = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="bgheroSection mb-5 "
        style={{
          height: "600px",
          backgroundImage: `url("/blue-car-speed-motion-stretch-style 1.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundClip: "padding-box",
          backgroundPosition: "center",
        }}
      >
        <div
          className="  mobwteam   m-auto pb-4 mobw100"
          style={{ width: "85%", paddingTop: "100px" }}
        >
          <p
            style={{
              fontWeight: "800",
              fontSize: "40px",
              color: "#fff",
            }}
            className="lh-1"
          >
            Looking to sell or upgrade your car?
          </p>
          <span
            className="text-light   p-2 pe-5 mobwteam"
            style={{
              borderRadius: "0px 22px 22px 0px",
              fontWeight: "900",
              fontSize: "30px",
              color: "#FFFFFF",
              background:
                "linear-gradient(270deg, #1985D2 0%, rgba(0, 0, 0, 0) 174.54%)",
            }}
          >
            At Car Chaser,
          </span>
          <p
            className="text-light w-50 mobwteam pt-2"
            style={{
              fontSize: "20px",
              // paddingLeft: "70px",
              // paddingRight: "70px",
            }}
          >
            We've got you covered. Share your needs, and let us assist in
            finding your next dream car. We're passionate about finding the
            perfect match.
          </p>
        </div>
      </div>

      <div className="d-none d-md-block">
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="m-auto " style={{ width: "60%" }}>
            <div className="text-start m-auto w-75">
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "800",
                  color: "#1985D2",
                }}
              >
                Discover the dealership difference
              </p>
              <p
                style={{
                  color: "#101010",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                We ensure you receive top dollar for your trade-in and a
                valuable tax credit for your next purchase. Isn't that
                wonderful?
              </p>
            </div>
          </div>
          <div className="m-auto " style={{ width: "40%" }}>
            <div className="text-end">
              <img
                src="/usersideimage1.png"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="m-auto " style={{ width: "40%" }}>
            <div className="text-end">
              <img src="/image 114.png" alt="" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="m-auto " style={{ width: "60%" }}>
            <div className="text-start m-auto w-75">
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "800",
                  color: "#1985D2",
                }}
              >
                Convenience at your fingertips
              </p>
              <p
                style={{
                  color: "#101010",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                Choose your next car from the comfort of your home. We're here
                to assist you in finding a vehicle that suits your lifestyle and
                needs. Plus, our service is completely free with no hidden fees.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="m-auto " style={{ width: "60%" }}>
            <div className="text-start m-auto w-75">
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "800",
                  color: "#1985D2",
                }}
              >
                Your satisfaction is our priority
              </p>
              <p
                style={{
                  color: "#101010",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                We are dedicated to providing only quality cars and top-notch
                service. Connect with your vehicle acquisition specialist today.
              </p>
            </div>
          </div>
          <div className="m-auto " style={{ width: "40%" }}>
            <div className="text-end">
              <img src="./image115.png" alt="" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>

      <Container className="d-block d-md-none">
        <Row>
          <Col xs={12}>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "800",
                color: "#1985D2",
              }}
            >
              Discover the dealership difference
            </p>
            <p
              style={{ color: "#101010", fontSize: "20px", fontWeight: "400" }}
            >
              We ensure you receive top dollar for your trade-in and a valuable
              tax credit for your next purchase. Isn't that wonderful?
            </p>
          </Col>
          <Col>
            <img src="./image 113.png" alt="" style={{ width: "100%" }} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "800",
                color: "#1985D2",
              }}
            >
              Convenience at your fingertips
            </p>
            <p
              style={{ color: "#101010", fontSize: "20px", fontWeight: "400" }}
            >
              Choose your next car from the comfort of your home. We're here to
              assist you in finding a vehicle that suits your lifestyle and
              needs. Plus, our service is completely free with no hidden fees.
            </p>
          </Col>
          <Col>
            <img src="./image 115.png" alt="" style={{ width: "100%" }} />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "800",
                color: "#1985D2",
              }}
            >
              Your satisfaction is our priority
            </p>
            <p
              style={{ color: "#101010", fontSize: "20px", fontWeight: "400" }}
            >
              We are dedicated to providing only quality cars and top-notch
              service. Connect with your vehicle acquisition specialist today.
            </p>
          </Col>
          <Col>
            <img
              src="./happy-successful-business-woman-using-laptop-computer-creative-work 1.png"
              alt=""
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
      <div>
        <div style={{ border: "1px solid #1985D2" }} />

        <p
          className="m-auto my-0 p-3 mobw100"
          // className=''

          style={{
            fontWeight: "700",
            fontSize: "30px",
            color: "#101010",
            width: "86%",
          }}
        >
          Step into the next era with Car Chaser
        </p>

        <div
          className=" pt-0 p-3  d-block d-md-flex justify-content-start align-items-center mb-4 m-auto mobw100"
          style={{ width: "86%" }}
        >
          <p
            className="my-0 text-nowrap "
            style={{
              color: "#303030",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Initiate your journey right here.
          </p>

          <button
            onClick={handleShow}
            className="border-0 rounded-5 ms-md-4 mt-md-0 mt-3 text-white p-2 px-5 "
            style={{ backgroundColor: "#1985D2" }}
          >
            Let's Start
          </button>
        </div>

        <div
          className="mb-5"
          style={{ width: "100%", border: "1px solid #1985D2" }}
        />
      </div>

      <Modal  size="lg" centered show={show} onHide={handleClose}>
        <Modal.Body className="p-0 border-0">
          <ModalCom  onHide={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TradeHero;
