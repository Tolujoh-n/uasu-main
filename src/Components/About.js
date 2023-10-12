import React from 'react';
import featureImage from '../assets/img/freeze.png';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-4 pt-lg-0 order-1 order-lg-1 content" data-aos="fade-right">
            <h3>How does it work</h3>
            <ul>
              <li><i className="bi bi-check-circle"></i>Select BTC amount to stabilize</li>
              <li><i className="bi bi-check-circle"></i>Select number of cycles</li>
              <li><i className="bi bi-check-circle"></i>Review terms and sign</li>
            </ul>
          </div>
          <div className="col-lg-6 order-2 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
            <img id='freezeimg' src={featureImage} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
