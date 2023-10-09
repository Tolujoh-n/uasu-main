import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { initHeaderScrolled } from "../assets/js/headerScrolled";
import image from "../Img/bitcoin-2.png";
import image2 from "../Img/about-img.png";
import image3 from "../Img/aboutimage.jpg";

function Hero() {
  useEffect(() => {
    initHeaderScrolled();
  }, []);
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center"
    >
      <div className="container" data-aos="fade-up">
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="col-xl-12 col-lg-8">
            <h1>
              <span style={{ color: "goldenrod" }}>BUY BITCOIN INSURANCE</span>{" "}
               WHILE{" "}
              <span style={{ color: "goldenrod" }}>HOLDING YOUR KEYS</span>
            </h1>
            <h2>Hedge using unstoppable bitcoin payoff on Layer 1</h2>
            <br></br>
            <Link to="/Waitlist" className="api-started-btn scrollto">
              Join Alpha Waiting list
            </Link>
            <br></br>
            <div className="join-count">
              <div className="join-images">
                <img src={image} alt="Person 1" className="join-image" />
                <img src={image2} alt="Person 2" className="join-image" />
                <img src={image3} alt="Person 3" className="join-image" />
              </div>
              <p>Join 100+ Bitcoiners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
