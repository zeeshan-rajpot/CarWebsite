import React from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../../Components/Footer/index";
import Navbar from "../../Components/Navbar/index";
import "./style.css";

export const index = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Navbar />

      <div className="herosectionbgg">
        <div className="pt-5 pb-5 container">
          <div
            className="ms-0 mobw100  w-50"
            style={{
              marginTop: "40px",
              marginBottom: "40px",
              marginLeft: "40px",
              borderRadius: "40px",
              background: "rgba(0, 0, 0, 0.20)",
            }}
          >
            <div className="p-3">
              <p
                className="my-0 mobhl"
                style={{
                  fontSize: "40px",
                  color: "#FFFFFF",
                  fontWeight: "200",
                }}
              >
                Introducing the Car Chaser Dealer Network
              </p>
              <p
                className="my-0 mt-2 mobhm"
                style={{
                  color: "#FFFFFF",
                  fontSize: "21px",
                  fontWeight: "700",
                }}
              >
                Attention Registered Dealers!
              </p>
              <p
                className="my-0 mt-2"
                style={{
                  color: "#F5F5F5",
                  fontSiz: "17px",
                  fontWeight: "500",
                  paddingRight: "15px",
                }}
              >
                Join our platform to gain access to a curated selection of
                pre-owned vehicles through our efficient online auction system.
                We handle the inspection, qualification, and delivery processes,
                allowing your dealership to focus on maximizing sales.
              </p>
              <button
                className="border-0 mt-4 px-3 py-2 text-white rounded-5"
                style={{ backgroundColor: "#1985D2" }}
              >
                Register for FREE today!
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sectionbgg">
        <div
          className="text-center"
          style={{
            paddingTop: "10em",
          }}
        >
          <p
            className="text-white mobhl"
            style={{
              fontSize: "40px",
              fontWeight: "700",
              marginBottom: "50px",
            }}
          >
            {" "}
            Why Choose Car Chaser?
          </p>
        </div>

        <Row>
          <Col
            md={2}
            sm={1}
            style={{
              marginLeft: "22px",
            }}
          >
            <div className="d-flex flex-column  justify-content-start justify-content-md-end  align-items-start align-items-md-end ">
              {numbers.map((number, index) => (
                <div
                  key={number}
                  className="d-flex justify-content-center align-items-center "
                  style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <div
                    className="m-2 d-flex justify-content-center align-items-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "80px",
                      background:
                        "linear-gradient(0deg, #ADDCFF 0%, #EAF6FF 50.28%, #EAF6FF 100%)",
                    }}
                  >
                    <p
                      className="my-0"
                      style={{
                        color: "#1985D2",
                        fontSize: "30px",
                        fontWeight: "700",
                      }}
                    >
                      {number}
                    </p>
                  </div>
                  {index < numbers.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        bottom: "0",
                        transform: "translateX(-10%) translateY(80%) ",
                        width: "2px",
                        height: "55px",
                        background: "#FFFF",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </Col>
          <Col lg={9} md={9} xs={9} sm={10}>
            <div className="text-start">
              <div>
                <p className="para mobhm mobht" style={{ marginTop: "28px" }}>
                  Access to over 100 vehicles ready for bidding
                </p>
              </div>
              <div>
                <p className="para mobhm" style={{ marginTop: "53px" }}>
                  High-quality, handpicked vehicles available
                </p>
              </div>
              <div>
                <p className="para mobhm" style={{ marginTop: "55px" }}>
                  Detailed car reports outlining the condition of each vehicle
                </p>
              </div>
              <div>
                <p className="para mobhm" style={{ marginTop: "55px" }}>
                  We handle the sourcing and selection of vehicles, saving you
                  time
                </p>
              </div>
              <div>
                <p className="para mobhm" style={{ marginTop: "55px" }}>
                  Streamlined paperwork, payment, and delivery processes
                </p>
              </div>
              <div>
                <p className="para mobhm" style={{ marginTop: "55px" }}>
                  Committed to the success of your dealership
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div
        style={{
          background:
            "linear-gradient(0deg, #ADDCFF 0%, #EAF6FF 50.28%, #EAF6FF 100%)",
        }}
        className="pt-5"
      >
        <p
          className="text-center mobhl"
          style={{ color: "#1985D2", fontSize: "28px", fontWeight: "700" }}
        >
          Our Partners Trust Us
        </p>
        <p
          className="text-center mobhm"
          style={{ color: "#030303", fontSize: "28px", fontWeight: "600" }}
        >
          "Car Chaser facilitated the purchase of 40 cars for our dealership
          last month."
        </p>
        <p
          className="text-start para2 m-auto mobhm"
          style={{ color: "#1985D2", fontSize: "28px", fontWeight: "600" }}
        >
          Trusted dealer
        </p>
        <p
          className="text-start para2 m-auto pb-5 mobhm"
          style={{ color: "#030303", fontSize: "28px", fontWeight: "600" }}
        >
          Mississauga, Toronto
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default index;
