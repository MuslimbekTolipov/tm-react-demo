import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <h1>Plant</h1>
      <div className="navbar">
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">About Us</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>
      <div className="nav">
        <a href="">Login</a>
        <button>Sing Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
