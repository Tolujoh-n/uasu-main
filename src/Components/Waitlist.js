import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../assets/img/uasu-logo.png";
import useimg from "../assets/img/hodl-hand.png";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    //logic to submit the email and reCAPTCHA value to the backend or performing any other actions.
    console.log("Email submitted:", email);
    console.log("reCAPTCHA value:", recaptchaValue);
  };

  return (
    <><header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/">
          <a href="/" className="logo">

            <img src={logo} alt="" className="img-fluid" />
          </a>
        </Link>

        
      </div>
    </header>
    <section id="hero" className="d-flex align-items-center">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Join our Waiting List</h1>
            </div>
            <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
              <img src={useimg} className="img-fluid animated" alt="" />
            </div>
            <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2>Signup for Early Access to UASU</h2>
              <br></br>
              <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          id="waitinput"
                          type="email"
                          className="form-control"
                          placeholder="example@email.com"
                          value={email}
                          onChange={handleEmailChange}
                          required
                        />
                      </div>
                      <br></br>
                      <div className="form-group">
                        <ReCAPTCHA
                          sitekey="The_RECAPTCHA_SITE_KEY" // Replace with reCAPTCHA site key
                          onChange={(value) => setRecaptchaValue(value)}
                        />
                      </div>
                      <button className="waitbut" type="submit">
                      JOIN
                      </button>
                    </form>
              <div>
                {/* <a href="#about" className="btn-get-started scrollto">JOIN</a> */}
              </div>
            </div>
          </div>
        </div>
      </section></>
  );
};

export default Waitlist;
