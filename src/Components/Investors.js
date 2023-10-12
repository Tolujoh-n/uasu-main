import React from 'react';
import featureImage3 from '../assets/img/bitcoin_startup_labs.png';


function Investors() {
  return (
    <section id="counts" className="counts">
      <div className="container">
        <h3>Investors</h3>
        <div className="row counters">
          <div id="investimg" className="col-lg-3 col-6 text-center">
            <a href="/">
              <img
                className="center"
                style={{ height: '80%' }}
                src={featureImage3}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Investors;
