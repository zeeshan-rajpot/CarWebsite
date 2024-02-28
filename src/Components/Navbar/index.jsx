import React from "react";
import "./LandingPage.css";
import DashboardNavbar from "../DashboardNavbar/index"

const index = () => {
  const tokenExists = localStorage.getItem("token");
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    // Additional logic if needed
  };

  return (
    <>
      <DashboardNavbar/>
     </>
  );
};

export default index;
