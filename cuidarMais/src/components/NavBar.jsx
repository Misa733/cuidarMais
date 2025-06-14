import React from "react";
import "./Navbar.css";
import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar fixed-bottom">
      <div className="nav-item active">
        <FaHome className="icon" />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <FaSearch className="icon" />
      </div>
      <div className="nav-item">
        <FaBell className="icon" />
      </div>
      <div className="nav-item">
        <FaUser className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
