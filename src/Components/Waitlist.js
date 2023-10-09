import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import featureImage from "../assets/Img/hodl-hand.png";

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
                    <span>Join </span> the <span> Waitlist</span>
                  </h3>
                  <p id="waitpara" style={{ color: "white" }}>
                    Submit your email to get on our waitlist.
                  </p>
                  <div className="col-lg-12 col-md-6" id="waitform">
                    <form onSubmit={handleSubmit}>
                      <input
                        id="waitinput"
                        type="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                      <div id="" className="captcha">
                        <ReCAPTCHA
                        sitekey="The_RECAPTCHA_SITE_KEY" // Replace with reCAPTCHA site key
                        onChange={(value) => setRecaptchaValue(value)}
                      />
                      </div>

                      <p>
                        <Link to="/Waitlist" className="headbutton">
                          Submit
                        </Link>
                      </p>
                    </form>
                  </div>
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

export default Waitlist;
