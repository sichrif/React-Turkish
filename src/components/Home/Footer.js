import React from "react";
import styled from 'styled-components';

 
function Footer() {
  return (
      <FooterStyled>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-30">
            <div className="footer-text__title">Anapp</div>
            <div className="footer-text__body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore.
            </div>
          </div>
          <div className="col-30">
            <div className="footer-text__title">Quick links</div>
            <ul className="footer-list">
              <li>
                <a href="#home">About</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
            </ul>
          </div>
          <div className="col-30">
            <div className="footer-text__title">Newsletter</div>
            <div className="footer-text__body">
              Heaven fruitful doesn't over lesser in days. Appear
            </div>
            <div className="footer-input">
              <input type="text" name="email" placeholder="Email id" />
              <div className="footer-input__icon">
                <ion-icon name="paper-plane-outline" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          Inspired by Colorlib, coded by pathetic geek.
        </div>
      </div>
    </footer>
    </FooterStyled>
  );
}

const FooterStyled = styled.main`

footer {
    height: 70vh;
    padding: 0px 24px;
    display: flex;
  }
  
  footer > .container {
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  footer .row {
    margin: 12px -12px;
  }
  footer .row .col-30 {
    margin: 0px 12px;
  }
  
  .footer-text__title {
    color: #000;
    font-size: 18px;
    margin-bottom: 48px;
    font-weight: 700;
  }
  .footer-text__body {
    color: #707b8e;
    font-size: 1.1rem;
    line-height: 1.8;
    margin: 8px 0px;
  }
  
  .footer-list {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
  }
  .footer-list li {
    margin: 8px 0px;
    transition: 0.1s all ease-in-out;
  }
  .footer-list li:hover {
    margin-left: 6px;
  }
  .footer-list li a {
    display: block;
    text-decoration: none;
    color: #868c98;
    font-weight: 300;
    font-size: 1.1rem;
  }
  
  .footer-input {
    display: flex;
  }
  .footer-input input {
    background-color: #888;
    background: #f9f9fe;
    padding: 10px 14px;
    border: 0px;
    width: 160px;
  }
  .footer-input__icon {
    color: #fff;
    font-size: 1.5rem;
    background: #8f1bdc;
    display: flex;
    padding: 10px 14px;
  }
  
  .copyright {
    color: #888;
    font-weight: 300;
    font-size: 16px;
    line-height: 2;
    margin-top: 24px;
    margin: 0px auto;
  }
  
  @media screen and (max-width: 700px) {
    footer {
      height: auto;
    }
    footer .row {
      flex-direction: column;
    }
    footer .row .col-30 {
      width: calc(100% - 24px);
      margin: 12px auto;
    }
    .footer-text__title {
      margin-bottom: 12px;
    }
  }
  
`;

 
export default Footer;
