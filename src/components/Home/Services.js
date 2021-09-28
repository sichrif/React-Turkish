import React from "react";

function Services() {
  return (
    <section id="services">
      <div className="section-text">
        <div className="section-text__title-centered">
          How can we help you with Anapp!
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="reader-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Easily Manage</div>
              <div className="section-text__body">
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </div>
            </div>
          </div>

          <div className="service-card active">
            <div className="service-card__icon">
              <ion-icon name="wallet-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Get Payments Easily
              </div>
              <div className="section-text__body">
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="chatbubble-ellipses-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Quick Messaging</div>
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
