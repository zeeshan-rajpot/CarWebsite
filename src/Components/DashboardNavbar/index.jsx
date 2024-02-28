import { React, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./dashnav.css";

const index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar shadow">
        <Link to="/Dashbord">
          <div
            className="navbar-brand d-flex align-items-center fw-bold "
            style={{
              color: "#1985D2",
            }}
          >
            <img src="/downloadcopy.png" alt="" />
            Car Chaser
          </div>
        </Link>
        <button className="navbar-toggle-btn" onClick={toggleNavbar}>
          <img src="/icons8-menu.svg" width="20px" alt="" />
        </button>
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <NavLink to="/Dashbord">Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Add">Add</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Recent">Recent</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Previous">Previous</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/Chat">Chat</NavLink>
          </li>
          <li className="navbar-item  m-0 me-md-2">
            <img src="Group 10249.svg" />
          </li>
          <li className="navbar-item  m-0 me-md-5 ">
            Mohsin
            <Link to="/">
              <p>Sign out</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default index;
