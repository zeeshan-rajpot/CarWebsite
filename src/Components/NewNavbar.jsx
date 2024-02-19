import React, { useState } from 'react';
import './Navbarr.css'; // Import CSS file for styling
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className='' style={{position:'relative'}}>


    <nav className="newnavbar">
      <div className="navbar-brand d-flex align-items-center"><img src="/downloadcopy.png" alt="" />Car Chaser</div>
      <button className="navbar-toggle-btn" onClick={toggleNavbar}>
        {/* <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i> */}
        <img src="/icons8-menu.svg" width='20px' alt="" />
      </button>
      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <li className="navbar-item"><NavLink to='/process'>The Process</NavLink></li>
        <li className="navbar-item"><NavLink to="/Trade">Trade In</NavLink></li>
        <li className="navbar-item"><NavLink to="/promise">Our Promise</NavLink></li>
        <li className="navbar-item"><NavLink   to="/DealerPage">Dealer network</NavLink></li>
        <li className="navbar-item loginbtnnew m-0 me-md-2"><NavLink to='/'>Sign In</NavLink></li>
        <li className="navbar-item signbtnnew m-0 me-md-5"><NavLink to='/'>Sign Up</NavLink></li>
        
      </ul>
    </nav>
    </div>
    </>
  );
};

export default Navbar;
