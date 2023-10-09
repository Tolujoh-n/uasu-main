import React from 'react';
import featureImage from '../assets/Img/about-sec.png';

function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row">
          
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <p style={{ color: 'aliceblue' }} className="fst-italic">
              An OTC market built on open layer 1 technology
            </p>
            <h2 style={{ color: 'goldenrod' }}>
              How it works
            </h2>
            <p style={{ color: 'aliceblue' }}>
            UASU’s platform is designed for high-value, low-frequency trading
            </p>
            <p
              style={{ marginTop: '30px' }}
              href=""
              className="about-started-btn scrollto"
            >
              Select your BTC Amont to Protect
            </p>
            <br />
            <p
              style={{ marginTop: '10px' }}
              href=""
              className="about-started-btn scrollto"
            >
              Set Maximum insurance & Expiration
            </p>
            <br />
            <p
              style={{ marginTop: '10px' }}
              href=""
              className="about-started-btn scrollto"
            >
              Review terms and Sign
            </p>
          </div>

          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img style={{ height: '25rem', width: '35rem', borderRadius: '10px' }} src={featureImage} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
