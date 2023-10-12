import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import featureImage from "../assets/img/hodl-hand.png";
import { initHeaderScrolled } from "../assets/js/headerScrolled";


const Header = () => {
  useEffect(() => {
    initHeaderScrolled();
  }, []);
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Freeze your Bitcoin with full Collateralization</h1>
          </div>
          <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
            <img src={featureImage} className="img-fluid animated" alt="" />
          </div>
          <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2>Unstoppable payoff on Bitcoin</h2>
            <div>
              <a href="#about" className="btn-get-started scrollto">JOIN WAITING LIST</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
