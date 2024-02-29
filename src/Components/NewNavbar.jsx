import { useState, useEffect  } from "react";
import "./Navbarr.css"; // Import CSS file for styling
import { NavLink, Link , useNavigate} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if token exists in local storage on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!token); // Set isLoggedIn to true if token exists, false otherwise
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Delete token from local storage
    localStorage.removeItem("token");

    // Navigate to the home page


  };

  return (
    <>
      {isLoggedIn ? (
        <div className="" style={{ position: "relative" }}>
          <nav className="newnavbar">
            <Link to="/">
              <div className="navbar-brand d-flex align-items-center">
                <img src="/downloadcopy.png" alt="" />
                Car Chaser
              </div>
            </Link>
            <button className="navbar-toggle-btn" onClick={toggleNavbar}>
              {/* <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i> */}
              <img src="/icons8-menu.svg" width="20px" alt="" />
            </button>
            <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
              <li className="navbar-item">
                <NavLink to="/process">The Process</NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/Trade">Trade In</NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/promise">Our Promise</NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/DealerPage">Dealer network</NavLink>
              </li>
              <li className="navbar-item loginbtnnew m-0 me-md-2">
                <NavLink to="/Login">Sign In</NavLink>
              </li>
              <li className="navbar-item signbtnnew m-0 me-md-5">
                <NavLink to="/SignUp">Sign Up</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="" style={{ position: "relative" }}>
          <nav className="newnavbar">
            <Link to="/Dashbord">
              <div className="navbar-brand d-flex align-items-center " style={{ color: 'rgb(25, 133, 210)' }}>
                <img src="/downloadcopy.png" alt="" />
                Car Chaser
              </div>
            </Link>
            <button className="navbar-toggle-btn" onClick={toggleNavbar}>
              {/* <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i> */}
              <img src="/burger-menu-svgrepo-com.svg" width="20px" alt="" />
            </button>
            <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
              <li className="navbar-item ">
                <NavLink to="/Dashbord" className=' bold' style={{ color: 'black', fontWeight: '500' }}>Home</NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/Add" className=' bold' style={{ color: 'black', fontWeight: '500' }}>Add</NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/Recent" style={{ color: 'black', fontWeight: '500' }}>Recent</NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/Previous" style={{ color: 'black', fontWeight: '500' }}>Pervious</NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/Chat" style={{ color: 'black', fontWeight: '500' }}>Chat</NavLink>
              </li>
              <li className="navbar-item m-0">
                <NavLink to="/Notification" style={{ color: 'black', fontWeight: '500' }}>
                  <img src="/Group 102492.svg" width='50px' alt="" />

                </NavLink>
              </li>
              <li className="navbar-item m-0">
                <NavLink  style={{ color: 'black', fontWeight: '500' }}>

                  <p className="mb-0">
                    Mohsin
                  </p>
                  <Link to='/' className="mb-0" style={{color: 'black', fontWeight: "100" }} onClick={handleLogout}>
                    logout
                  </Link>


                </NavLink>
              </li>

            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
