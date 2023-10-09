import React from "react";
import { Link } from "react-router-dom";
import logo from "../Img/uasu-logo.png";

function Footer() {
  return (
    <>
      <footer id="footer">
        <section
          id="foot"
          className="d-flex align-items-center justify-content-center"
        >
          <div className="container" data-aos="fade-up">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="footer-info">
                      <a href="index.html" className="logo me-auto me-lg-0">
                        <img
                          style={{ background: "gold", borderRadius: "5px" }}
                          src={logo}
                          alt=""
                          className="img-fluid"
                        />
                      </a>

                      <br />
                      <br />
                      <div className="social-links mt-3">
                        <a href="#" className="twitter">
                          <i className="bx bxl-twitter"></i>
                        </a>
                        <a
                          href="#"
                          className="discord"
                          style={{ marginLeft: "30px" }}
                        >
                          <i className="bx bxl-discord"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-9 col-md-6">
                    <div
                      className="row justify-content-center"
                      data-aos="fade-up"
                      data-aos-delay="150"
                    >
                      <div className="col-xl-12 col-lg-8">
                        <h2>
                          Hedge using unstoppable bitcoin payoff on Layer 1
                        </h2>
                        <br></br>
                        <Link
                          to="/Waitlist"
                          className="api-started-btn scrollto"
                        >
                          Join Alpha Waiting list
                        </Link>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
    </>
  );
}

export default Footer;
