import React from "react";
import "../styles/navbar.css";
import logo from "../assests/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="LOGO" />
      </div>
      <div className="nav_links">
        <p className="links">HOME</p>
        <p className="links">INVESTMENT</p>
        <p className="links">LOCATION</p>
        <p className="links">APPARTMENTS</p>
        <p className="links">CONTACT</p>
      </div>
      <div className="buy_now">
        <button className="buy">BUY NOW </button>
      </div>
    </div>
  );
}

export default Navbar;
