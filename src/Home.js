import CardSection from "./components/CardSection";
import Header from "./components/Header";
//import {OuterLayout} from './styles/Layouts';
import styled from 'styled-components';
import ChartSection from "./components/ChartSection";
import MessagingSection from "./components/MessagingSection";
import PaymentSection from "./components/PaymentSection";
import FAQSection from "./components/FAQSection";
import questions from "./questions";
//import Footer from "./components/Footer";
import { Fade } from "react-reveal";
//import  './GlobalStyle.module.css';
import Navbar from "./components/Home/Navbar";

import HeroBanner from "./components/Home/HeroBanner";
import Features from "./components/Home/Features";
import Services from "./components/Home/Services";
import Screenshots from "./components/Home/Screenshots";
import Pricing from "./components/Home/Pricing";
import Footer from "./components/Home/Footer";
import Download from "./components/Home/Download";


export default function Home() {
  return (
    <>
    <Navbar />

            <MainStyled>
            <main>
             <Fade left>
              <HeroBanner />
            </Fade>
            <Fade right>
              <Features />
            </Fade>
            <Fade left>
              <Services />
            </Fade>
            <Fade right>
              <Screenshots />
            </Fade>
            <Fade left>
              <Pricing />
            </Fade>
            <Fade right>
              <Download />
            </Fade>
        
        <Fade bottom>
          <Footer />
        </Fade>
        </main>
        </MainStyled>
</>
   );
}

const MainStyled = styled.main`
@import url("https://fonts.googleapis.com/css?family=Nunito:300,400,600,700&display=swap");

html,
body {
  width: 100%;
  padding: 0px;
  margin: 0px;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
}

main {
  z-index: 100;
}
main > *:nth-child(odd) {
  background-color: #f4feff;
}

section {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  padding: 100px 24px;
}
section > .container {
  display: flex;
  height: 100%;
  margin: 0px auto;
  max-width: 1440px;
}
section > .container > * {
  margin: auto 12px;
}

@media screen and (max-width: 700px) {
  section {
    height: auto;
  }
  section > .container {
    display: block;
  }
  section > .container > * {
    margin: 12px auto;
    width: 100%;
  }
}

.section-text {
  min-width: 300px;
}
.section-text__title {
  font-size: 50px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 40px;
  color: #2b044d;
  max-width: 400px;
}
.section-text__title-centered {
  max-width: 600px;
  text-align: center;
  margin: 0px auto;
  font-size: 50px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 40px;
  color: #2b044d;
}
.section-text__title-big {
  font-size: 4rem;
  font-weight: 700;
  color: #2b044d;
  line-height: 1.3;
  margin-bottom: 24px;
  max-width: 600px;
}
.section-text__title-small {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 8px;
  color: #23182c;
}
.section-text__subtitle {
  color: #2b044d;
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.section-text__body {
  color: #707b8e;
  font-size: 1rem;
  line-height: 30px;
  margin-bottom: 15px;
  font-weight: 400;
  max-width: 300px;
}

.section-image {
  height: calc(100vh - 130px);
}
.section-image__small {
  height: calc(100vh - 130px);
  max-width: 60vw;
}
.section-image img,
.section-image__small img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
}

@media screen and (max-width: 700px) {
  .section-image,
  .section-image__small {
    display: none;
  }
}

.feature-box {
  margin-bottom: 32px;
}

.service-cards {
  display: flex;
  margin: 0px auto;
  justify-content: center;
}

.service-card {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 90px 18px;
  background-color: #fff;
  border-radius: 25px;
  border: 1px solid transparent;
  margin: 12px 8px;
  transition: 0.1s all ease-in;
}
.service-card:hover,
.service-card.active {
  border: 1px solid #b8a2ff;
}
.service-card > * {
  margin: 0px auto;
}

.service-card__icon {
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 12px auto;
  margin-bottom: 24px;
  border-radius: 50%;
  background-color: #e88cea;
  transition: 0.1s all ease-in;
}
.service-card__icon ion-icon {
  color: #fff;
  margin: auto;
  font-size: 3rem;
}

.service-card:hover .service-card__icon,
.service-card.active .service-card__icon {
  background-color: #835ef8;
}

@media screen and (max-width: 700px) {
  .service-cards {
    flex-direction: column;
  }
}

.download-btn {
  background-color: #f9218d;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 300;
  padding: 16px 40px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s linear;
  margin: 0;
}
.download-btn:hover {
  background-color: #da1276;
}

.section-carousel__images {
  display: flex;
}
.section-carousel__image {
  margin: 0px 6px;
}

@media screen and (max-width: 700px) {
  .section-carousel__images {
    position: relative;
    right: 0;
    left: 0;
  }
}

section#pricing {
  height: auto;
  padding: 0px;
}

.pricing-upper {
  height: calc(50vh - 80px);
  padding: 40px 24px;
  background-image: -webkit-linear-gradient(
      0deg,
      rgba(249, 33, 141, 0.75) 0%,
      rgba(108, 25, 246, 0.75) 100%
    ),
    url("./images/best_pricingbg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.pricing-lower {
  height: 70vh;
  margin-top: -20vh;
  padding: 0px 24px;
}

.pricing-cards {
  display: flex;
  justify-content: center;
}
.pricing-card {
  width: calc(30vw - 12px);
  margin: 0px 6px;
  max-width: 300px;
  padding: 52px 24px;
  background: #fff;
  border-radius: 25px;
  text-align: center;
  position: relative;
  z-index: 20;
  transition: 0.2s all ease-in-out;
}
.pricing-card:hover {
  box-shadow: 0 10px 30px 0 rgba(133, 66, 189, 0.1);
}
/* .pricing-card::before {
  content: "";
  width: 70px;
  height: 130px;
  position: absolute;
  right: 2px;
  bottom: 2px;
  z-index: 1;
  background-image: url("./images/dot-bg.webp");
  transition: 0.2s all ease-in-out;
}
.pricing-card:hover::before {
  right: -25px;
  bottom: -27px;
} */
.pricing-card__header {
  border-bottom: 2px solid #f4f4f4;
  margin-bottom: 46px;
}
.pricing-card__title {
  color: #6a56a6;
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 26px;
}
.pricing-card__title > span {
  vertical-align: baseline;
  font-size: 40%;
}
.pricing-card__subtitle {
  color: #57667e;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 19px;
  display: inline-block;
}
.pricing-card__features {
  list-style-type: none;
  margin: 12px 0px;
  padding: 0px;
}
.pricing-card__features > li {
  margin: 8px 0px;
  color: #717081;
  font-weight: 300;
  font-size: 1.1rem;
}

.pricing-card__btn {
  display: block;
  margin-top: 24px;
  position: relative;
  cursor: pointer;
  background-color: #712fda;
  border-radius: 6px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 16px 28px;
  border: 0px;
  color: #fff;
  transition: 0.2s all ease-in-out;
}
.pricing-card:hover .pricing-card__btn {
  background-color: #ff374b;
}

@media screen and (max-width: 700px) {
  .pricing-lower {
    height: auto;
  }
  .pricing-cards {
    flex-direction: column;
  }
  .pricing-card {
    width: calc(100% - 12px);
    margin: 12px auto;
  }
}

section#download {
  position: relative;
  height: 60vh;
  display: flex;
  background-image: -webkit-linear-gradient(
    0deg,
    rgb(249, 33, 141) 0%,
    rgb(108, 25, 246) 100%
  );
}
section#download .container {
  margin: auto;
}
section#download .section-text {
  max-width: 500px;
}
section#download .section-image {
  max-width: 40vw;
  height: calc(100% - 0px);
}

.download-btn__img {
  display: inline-block;
  height: 56px;
  width: 170px;
  margin: 0px 8px;
  margin-top: 24px;
  transition: 0.2s all ease-in-out;
}
.download-btn__img:hover {
  opacity: 0.9;
}

@media screen and (max-width: 700px) {
  section#download {
    height: auto;
  }
}

.text-white {
  color: #fff;
}

.row {
  display: flex;
  margin: 0px -14px;
  justify-content: space-between;
}
.col-50 {
  width: 50%;
  padding: 0px 14px;
}
.col-30 {
  width: 30%;
  padding: 0px 14px;
}


`;

 