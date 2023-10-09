import React from "react";
import { Link } from "react-router-dom";
import featureImage from "../assets/Img/hodl-hand.png";

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
                    <span>HOLD </span> BITCOIN <span> PAINLESSLY</span>
                  </h3>
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <img id="headimg" src={featureImage} className="img-fluid" alt="" />
                      {/* <img style={{ height: '5rem', width: '35rem', borderRadius: '10px' }} src={featureImage} className="img-fluid" alt="" /> */}
                    </div>

                    <div className="col-lg-9 col-md-6 footer-newsletter">
                      <p id="heropara" style={{ color: "white" }}>
                        Protect from price drop while holding your keys 
                      </p>
                      <p id="heroparared" style={{ color: "red" }}>
                       Unstopable Bitcoin Payoff
                      </p>
                    </div>
                  </div>
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
