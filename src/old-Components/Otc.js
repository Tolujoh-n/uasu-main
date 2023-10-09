import React from 'react';
import featureImage1 from '../Img/aboutimage.jpg';
import featureImage2 from '../Img/full-about.jpg';
import featureImage3 from '../Img/peer_to_peer.svg';

function Otc() {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <h3 style={{ color: 'goldenrod' }}>How can underwriters use OTC?</h3>
          <br />
          <br />
        </div>
      </div>
      <div style={{ border: '1px solid goldenrod', borderRadius: '10px' }} className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img style={{ height: '26rem', width: '40rem' }} src={featureImage1} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 style={{ color: 'goldenrod' }}>Engage in a comprehensive marketplace of buyers and sellers.</h3>
            <p>
            Underwriters can engage with clients on OTC, by posting matching requests, which enhances the efficiency of order matching. OTC sparks competitive auctions, aiding in achieving optimal prices.
            </p>
            <a style={{ marginTop: '30px' }} href="" className="api-started-btn scrollto">Launch App</a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div style={{ border: '1px solid goldenrod', borderRadius: '10px', marginRight: '50px', height: '25rem' }} className="col-lg-7 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <br />
            <h3 style={{ color: 'goldenrod' }}>UASU assurance</h3>
            <p>
            Natively de-risk your Bitcoin position using UASU’s Layer 1 OTC platform, fully on-chain and decentralized
            </p>
            <img style={{ height: '15rem', width: '100%', borderRadius: '10px' }} src={featureImage2} className="img-fluid" alt="" />
          </div>
          <div style={{ border: '1px solid goldenrod', borderRadius: '10px', height: '25rem' }} className="col-lg-4 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <br />
            <h3 style={{ color: 'goldenrod' }}>UASU OTC</h3>
            <p>
            We’ve created a trading
              environment where the unspent transaction output (UTXO) is
              safeguarded with on-chain custody, thus eliminating the risk of
              third party defaults.
            </p>
            <img style={{ height: '15rem' }} src={featureImage3} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Otc;
