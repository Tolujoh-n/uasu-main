import React, {useEffect} from 'react';
import { initHeaderScrolled } from "../assets/js/headerScrolled";
import logo from "../Img/uasu-logo.png";


function Header() {
  useEffect(() => {
    initHeaderScrolled();
  }, []);
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <a href="/" className="logo me-auto me-lg-0">
          <img style={{ background: "gold", borderRadius: '5px' }} src={logo} alt="" className="img-fluid" />
        </a>
  
          <a href="/" className="get-started-btn scrollto">
            Launch App
          </a>
        
      </div>
    </header>
  );
}

export default Header;
