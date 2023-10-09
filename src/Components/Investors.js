import React from 'react';
import featureImage3 from '../assets/Img/bitcoin_startup_labs.png';


function Investors() {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <hr />
        <div className="text-center">
          <h1 style={{ color: 'goldenrod' }}>Investors</h1>
          <div className='text-center'>
          <p>
          <img style={{ height: '2rem', textAlign: 'center' }} src={featureImage3} className="img-fluid" alt="" />
          </p>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
}

export default Investors;
