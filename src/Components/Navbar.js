import React from 'react';
import logo from "../assets/Img/uasu-logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar" style={{ background: "rgb(15, 87, 125)" }}>
      <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="button">
        <button>BETA SIGNUP</button>
      </div>
    </nav>
  );
};

export default Navbar;


