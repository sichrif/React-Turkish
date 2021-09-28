import React from "react";

function Screenshots() {
  return (
    <section id="screenshots" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="section-text">
          <div className="section-text__title">Applic Apps Screenshot</div>
          <div className="section-text__body">
            Lorem ipsum dolor sit amet, consecadipiscing elit, sed do eiusmod
            tempor incididunt ut ore et dolore magna aliqua. Quis ipsum
            suspendisse gravida. Risus commodo viverra maecenasan lacus vel
            facilisis.
          </div>
        </div>
        <div className="section-carousel">
          <div className="section-carousel__images">
            <div className="section-carousel__image">
              <img src="./images/App1.webp" alt="app screenshot" />
            </div>
            <div className="section-carousel__image">
              <img src="./images/App2.webp" alt="app screenshot" />
            </div>
            <div className="section-carousel__image">
              <img src="./images/App3.webp" alt="app screenshot" />
            </div>
            <div className="section-carousel__image">
              <img src="./images/App1.webp" alt="app screenshot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Screenshots;
