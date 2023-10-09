import React from 'react';
import featureImage3 from '../assets/Img/bitcoin_startup_labs.png';


function Investors() {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div id='investline'>
        <div className="text-center">
          <h1 style={{ color: 'rgb(84, 61, 212)' }}>Investors</h1>
          <div className='text-center'>
          <p>
          <img style={{ height: '3rem', textAlign: 'center' }} src={featureImage3} className="img-fluid" alt="" />
          </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Investors;
