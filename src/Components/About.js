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
          
            <h2 style={{ color: 'rgb(84, 61, 212)' }}>
              Quick and Easy option Trading
            </h2>

            <p
              style={{ marginTop: '30px' }}
              href=""
              className="about-started-btn scrollto"
            >
              <span id='aboutno'>1</span>Select your BTC Amont to Protect
            </p>
            <br />
            <p
              style={{ marginTop: '10px' }}
              href=""
              className="about-started-btn scrollto"
            >
              <span id='aboutno'>2</span>Set Maximum insurance & Expiration
            </p>
            <br />
            <p
              style={{ marginTop: '10px' }}
              href=""
              className="about-started-btn scrollto"
            >
              <span id='aboutno'>3</span>Review terms and Sign
            </p>
          </div>

          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img id='aboutimge' src={featureImage} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
