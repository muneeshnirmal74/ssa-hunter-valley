import React from "react";
import logo from "../assets/SSA-Logo.png";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <img src={logo} alt="Signature Slam Academy Logo" />
          </div>
          <a href="/">Contact Us</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
