import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/uasu-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright-wrap d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <a href="/">
              <img
                className="center"
                style={{ height: "50%" }}
                src={logo}
                alt=""
              />
            </a>
            <div className="copyright">
              &copy; 2023{" "}
              <strong>
                <span>UASU</span>
              </strong>{" "}
              All rights reserved.
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="#" className="discord">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
