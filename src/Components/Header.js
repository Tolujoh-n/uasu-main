import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div
        id="main-slide"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        {/* Carousel Inner Starts */}
        <div className="carousel-inner">
          {/* Carousel Item Starts */}
          <div className="item active bg-parallax item-1">
            <div className="slider-content">
              <div className="container">
                <div className="slider-text text-center">
                  <h3 className="slide-title">
                    <span>HOLD</span> BITCOIN <span>PAINLESSLY</span>
                  </h3>
                  <p>
                    
                      <Link to="/Waitlist" className="headbutton">
                        BETA SIGNUP
                      </Link>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel Item Ends */}
        </div>
        {/* Carousel Inner Ends */}
      </div>
    </>
  );
};

export default Header;
