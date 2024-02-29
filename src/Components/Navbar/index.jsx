import React from "react";

import Navbar from "../../Components/NewNavbar.jsx";
const index = () => {
  const tokenExists = localStorage.getItem("token");
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    // Additional logic if needed
  };

  return (
    <>
      <Navbar/>
     </>
  );
};

export default index;
