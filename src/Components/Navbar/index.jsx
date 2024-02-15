import React from "react";
import "./LandingPage.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const index = () => {
  const tokenExists = localStorage.getItem("token");
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    // Additional logic if needed
  };
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="headingMain z-1 mobwnav">
          <Link to="/">
            <img src="/download.png" alt="" srcset="" height="80px" /> Car
            Chaser
          </Link>
        </div>
  
        <div className="headerInfo mobwnav">
          <img
            src="/mailIcon.svg"
            alt="mail_icon"
            style={{ width: "20px" }}
            className="mb-2 mx-2"
          />
          <p
            style={{
              marginRight: "5px",
            }}
            className="mb-2"
          >
            @carchaser.ca
          </p>
          <img
            src="/PhoneIcon.svg"
            alt="mail_icon"
            style={{ width: "20px" }}
            className="mb-2 mx-2"
          />
          <p className="mb-2">58478</p>
        </div>
      </div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto"

              style={{
                fontFamily: "Mulish",
                fontSize: "18px",
                fontWeight: "700",
                color: "#101010",
              }}
            >
              {tokenExists ? (
                <>
                  <div className="d-flex  align-items-center">
                    <Link to="/Dashbord" className="nav-link">
                      Home
                    </Link>
                    <Link to="/Add" className="nav-link">
                      Add
                    </Link>
                    <Link to="/Recent" className="nav-link">
                      Recent
                    </Link>
                    <Link to="/Previous" className="nav-link">
                      Previous
                    </Link>
                    <Link
                      to="/Chat"
                      className="nav-link"
                      style={{
                        marginRight: "120px",
                      }}
                    >
                      Chat
                    </Link>
                    <Link to="/Notification">
                      <img src="/Group 10249.svg" alt="" />
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/process" className="nav-link">
                    The Process
                  </Link>
                  <Link to="/Trade" className="nav-link">
                    Trade-In
                  </Link>
                  <Link to="/promise" className="nav-link">
                    Our Promise
                  </Link>
                  <Link
                    to="/DealerPage"
                    className="nav-link"
                    style={{
                      marginRight: "120px",
                    }}
                  >
                    Dealer Network
                  </Link>
                </>
              )}

              {tokenExists ? (
                <>
                  <Link
                    to="/"
                    onClick={handleLogout}
                    style={{
                      backgroundColor: "#1985D2",
                      color: "#FFFFFF",
                      // clipPath: "polygon(0 0, 100% 0%, 83% 100%, 0% 100%)",
                    }}
                    className="px-4 nav-link"
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <div className="d-flex justify-content-end">
                    {" "}
                    {/* Added justify-content-end class */}
                    <Link
                      to="/Login"
                      style={{
                        backgroundColor: "#1985D2",
                        color: "#FFFFFF",
                        clipPath: "polygon(0 0, 100% 0%, 83% 100%, 0% 100%)",
                      }}
                      className="px-4 nav-link"
                    >
                      Sign-in
                    </Link>
                    <Link
                      to="/Logout"
                      style={{
                        border: "1px solid #1985D2",
                        color: "#1985D2",
                        clipPath: "polygon(24% 0, 100% 0%, 100% 100%, 0% 100%)",
                      }}
                      className="px-3 nav-link"
                    >
                      Sign-Up
                    </Link>
                  </div>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default index;
