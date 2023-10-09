import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faXTwitter,
  faFacebook,
  faInstagram,
  faSkype,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="footer-info">
                <h3>
                  <span>Sign up for Early Access</span>
                </h3>

                <Link to="/Waitlist" className="headbutton">
                  BETA SIGNUP
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="footer-info">
                <h3>
                  <span>Join the Network</span>
                </h3>
                
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>


                  <a href="#" className="Discord">
                    <FontAwesomeIcon icon={faDiscord} />
                  </a>
                </div>
              </div>
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
