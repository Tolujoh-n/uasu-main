import React, {useEffect} from 'react';
import logo from "../assets/img/uasu-logo.png";
import { Link } from "react-router-dom";
import { initHeaderScrolled } from "../assets/js/headerScrolled";



const Navbar = () => {
  useEffect(() => {
    initHeaderScrolled();
  }, []);
  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center justify-content-between">
      <Link to="/">
        <a href="/" className="logo">
          
          <img src={logo} alt="" className="img-fluid" />
        </a>
        </Link>

        <nav id="navbar" className="navbar">
        <Link to="/Waitlist">
          <a className="getstarted scrollto" href="#about">
            LAUNCH BETA
          </a>
          </Link>
        </nav>
      </div>
    </header>
    
  );
};

export default Navbar;


