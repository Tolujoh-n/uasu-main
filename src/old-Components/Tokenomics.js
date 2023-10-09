import React from 'react';
import image from "../Img/tokenomics-main.png"

function Tokenomics() {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <h3 style={{ color: 'goldenrod' }}>Tokenomics</h3>
          <p>
          UASU brings a transparent pricing model for native bitcoin options. No hidden fees, no abusive margins. The fee is calculated on the option premium, not on the locked Bitcoin collateral.
          </p>
        </div>
        <br />
      </div>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-12 order-1 order-lg-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img
              style={{
                border: '1px solid goldenrod',
                borderRadius: '20px',
                height: '25rem',
                width: '50rem',
                marginLeft: '10rem',
              }}
              src={image}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
