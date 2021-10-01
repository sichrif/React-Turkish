import React from "react";

function Pricing() {
  return (
    <section id="pricing">
      <div className="pricing-upper">
        <div className="section-text__title-centered text-white">
          Choose Your Very Best Pricing Plan
        </div>
      </div>
      <div className="pricing-lower">
        <div className="pricing-cards"> 
          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">6 Months</span>
              <div className="pricing-card__title">
                $30<span> / 6 months</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Get discounts up to 50%</li>
              <li>Find directions to all of the stores we work with</li>
              <li>Enjoy top notch tourism experience</li>
              <li>24/7 support</li>
            </ul>
            <a href="/register" className="pricing-card__btn">
              Get started now!
            </a>
          </div>
    </div>
      </div>
    </section>
  );
}

export default Pricing;
