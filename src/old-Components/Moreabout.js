import React from "react";
import featureImage1 from "../Img/auction.png";
import featureImage2 from "../Img/bitcoin-2.png";
import featureImage3 from "../Img/microscope-3.png";
import featureImage4 from "../Img/user_control-4.png";

function Moreabout() {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="container" data-aos="zoom-in">
          <div className="text-center">
            <p style={{ color: "rgb(235, 187, 235)" }}>
              UASU OTC makes native bitcoin option
            </p>
            <h3 style={{ color: "goldenrod" }}>
              Trading simple and transparent
            </h3>
            {/* <p style={{ color: "aliceblue" }}>
              UASU’s platform is designed for high-value, low-frequency trading.
              UASU uses the power of bitcoin technology to create options
              contracts as on-chain transactions. 
            </p> */}
          </div>
          <br />
        </div>

        <div className="row">
          <div
            className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon">
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                  src={featureImage1}
                />
              </div>
              <h4>
                <a href="">Match making excellence</a>
              </h4>
              {/* <p style={{ color: "azure" }}>
                UASU’s OTC is an open-auction platform, bringing together risk
                underwriters, market makers, bitcoiners, and buyers representing
                DeFi protocols. This optimizes the deal-making process.
              </p> */}
            </div>
          </div>

          <div
            className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                  src={featureImage2}
                />
              </div>
              <h4>
                <a href="">Fully-covered bitcoin options</a>
              </h4>
              {/* <p style={{ color: "azure" }}>
                Our technology executes options contract terms which have been
                pre-agreed by users; this enables value transfer to remain
                strictly under user control. The options contract terms are
                inscribed directly into Bitcoin ordinals, ensuring system
                transparency. Payouts are determined by means of distributed
                price feed oracles.
              </p> */}
            </div>
          </div>

          <div
            className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                  src={featureImage3}
                />
              </div>
              <h4>
                <a href="">Non-KYC</a>
              </h4>
              {/* <p style={{ color: "azure" }}>
                Our blockchain-driven, open-access platform ensures that KYC and
                AML obligations are the responsibility of each participant based
                on their own jurisdiction, not UASU’s platform. With fully
                covered options, you can trade confidently without fear of
                counterparty risk.
              </p> */}
            </div>
          </div>

          <div
            className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                  src={featureImage4}
                />
              </div>
              <h4>
                <a href="">Customized options</a>
              </h4>
              {/* <p style={{ color: "azure" }}>
                UASU’s OTC platform enables users to create specifically
                tailored orders. Users can choose various strike prices,
                expiration dates, and option strategies to suit their hedging or
                speculative needs.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Moreabout;
