import React from "react";

function HeroBanner() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-text">
          <div className="section-text__subtitle turkish_title">Turkish pass</div>
          <div className="section-text__title-big">
            The best discounts you could ever get
          </div>
          <div className="section-text__body">
            With Turkish pass you could save up to 70% while shopping
            'Literally' everywhere in Turkey
          </div>
          <a href="/register" className="download-btn">
            Register now
          </a>
        </div>

        <div className="section-image">
          <img src="./images/discount_home.svg" alt="app preview" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
