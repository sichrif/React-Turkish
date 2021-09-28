import React from "react";

function HeroBanner() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-text">
          <div className="section-text__subtitle">App landing page</div>
          <div className="section-text__title-big">
            Get things done with Anapp
          </div>
          <div className="section-text__body">
            Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm
            tempor incididunt ulabore et dolore magna aliqua.
          </div>
          <a href="#download" className="download-btn">
            Download App
          </a>
        </div>

        <div className="section-image">
          <img src="./images/hero_right.webp" alt="app preview" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
