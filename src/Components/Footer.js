import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faSkype, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="footer-info">
                <h3><span>UASU</span></h3>
                <p>
                  A108 Adam Street <br />
                  NY 535022, USA<br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="#" className="google-plus"><FontAwesomeIcon icon={faSkype} /></a>
                  <a href="#" className="Discord"><FontAwesomeIcon icon={faDiscord} /></a>
                </div>
              </div>
            </div>
            

            <div className="col-lg-6 col-md-6 footer-newsletter">
              <h4>Get Updates</h4>
              <p style={{ color: 'white' }}>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="copyright" className="container">
          <div className="copyright">
            &copy; 2023{" "}
            <strong>
              <span>UASU </span>
            </strong>
            LLC
          </div>
          <br></br>
        </div>
    </footer>
  );
};

export default Footer;
