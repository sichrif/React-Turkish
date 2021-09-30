import React from "react";

function Services() {
  return (
    <section id="services">
      <div className="section-text">
        <div className="section-text__title-centered">
          How can we help you with Turkish!
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card__icon">
            <img src="./images/coffee.svg" alt="coffee shops" />

            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Discount in coffee shops</div>
              <div className="section-text__body">
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </div>
            </div>
          </div>

          <div className="service-card ">
            <div className="service-card__icon">
            <img style={{background:"#fff3e0",borderRadius:'50%'}} src="./images/restaurent.svg" alt="Restaurents" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">
              Discount in restaurents
              </div>
              <div className="section-text__body">
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon">
             <img src="./images/shoppingicon.svg" alt="Shopping discounts" />

            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Discount in all stores</div>
              <div className="section-text__body">
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
