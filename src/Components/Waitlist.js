import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

function Waitlist() {
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
                  <div className="col-xl-12 col-lg-8">
                    <section className="waitlist-section">
                      <h1>
                        <span style={{ color: "goldenrod" }}>Join</span> the{" "}
                        <span style={{ color: "goldenrod" }}>Waitlist</span>
                      </h1>
                      <h2>Submit your email to get on our waitlist.</h2>
                      <form onSubmit={handleSubmit}>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={handleEmailChange}
                          required
                        />
                        <ReCAPTCHA
                          sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your reCAPTCHA site key
                          onChange={(value) => setRecaptchaValue(value)}
                        />
                        <button type="submit" className="submit-button">
                          Submit
                        </button>
                      </form>
                      {/* <Link to="/">Go back to Home</Link> Use Link here */}
                    </section>
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
}

export default Waitlist;
