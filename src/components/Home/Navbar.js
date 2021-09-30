import React, { useState } from "react";
import styled from 'styled-components';
import { useScrollYPosition } from "react-use-scroll-position";
 
 function Navbar({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollYPosition();

  const stickeyTrigger = window.innerHeight / 2.75;

  return (
    <NavbarStyled>
    <div
      className={`nav${scrollY > stickeyTrigger ? " nav-stickey" : ""}${
        menuOpen ? " nav-open" : ""
      }`}>
      <div className="nav-content">
        <div    className="nav-logo"> <img style={{height:"24vh",paddingTop:"12px"}} src='/static/favicon.png' alt="Turkish Pass" /> </div>

        <nav className="nav-links__container">
          {links &&
            links.map((link, i) => (
              <a className="nav-link" href={link.href} key={i}>
                <div className="nav-link__text">{link.title}</div>
                <div className="nav-link__background" />
              </a>
            ))}
        </nav>

        <div className="nav-menu__icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div />
          <div />
        </div>
      </div>
    </div>
    </NavbarStyled>
  );
}

Navbar.defaultProps = {
  links: [
    { title: "Home", href: "#home" },
    { title: "Features", href: "#features" },
    { title: "Services", href: "#services" },
    { title: "Pricing", href: "#pricing" },
    { title: "Contact", href: "#contact" }
  ]
};


const NavbarStyled = styled.main`
.nav {
  width: calc(100%);
  position: absolute;
  padding: 0px 12px;
  top: 0px;
  left: 0px;
  display: flex;
  height: 70px;
  overflow: hidden;
  z-index: 1000;
}
.nav-stickey {
  animation: nav-enter-anim 0.15s ease-in;
  background-color: #fff;
  position: fixed;
  -webkit-box-shadow: 0px -6px 24px -1px rgba(148, 148, 148, 1);
  -moz-box-shadow: 0px -6px 24px -1px rgba(148, 148, 148, 1);
  box-shadow: 0px -6px 24px -1px rgba(148, 148, 148, 1);
}

.nav-content {
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
}

.nav-logo {
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  font-size: 2rem;
}

.nav-links__container {
  display: flex;
  margin-left: auto;
}
.nav-link {
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  margin: 0px 8px;
}
.nav-link__text {
  margin: auto 0px;
  padding: 0px 12px;
  color: #450b78;
  font-size: 1.2rem;
  font-weight: 300;
}
.nav-link__background {
  margin-top: -2px;
  height: 2px;
  width: 0%;
  background: #a60dcf;
  transition: 0.2s all ease-in;
}
.nav-link:hover .nav-link__background {
  width: 100%;
}

.nav-menu__icon {
  display: none;
  cursor: pointer;
  height: 30px;
  width: 30px;
  margin: auto 0px;
  border-radius: 5px;
  transition: 0.1s all ease-in;
}
.nav-menu__icon div {
  height: 2px;
  width: 100%;
  background-color: #1a1a1a;
  transform-origin: left;
  transition: 0.1s all ease-in;
  margin: 0px auto;
}

.nav-open .nav-menu__icon div:nth-of-type(1) {
  width: 40px;
  margin-left: 0px;
  transform: rotate(45deg);
}
.nav-open .nav-menu__icon div:nth-of-type(2) {
  width: 40px;
  margin-right: 0px;
  transform: rotate(-45deg);
}

@media screen and (max-width: 700px) {
  .nav-open {
    height: 100vh;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.95);
    animation: nav-open 0.2s ease-in-out;
  }
  .nav-open .nav-content {
    height: 70px;
    margin-top: 0px;
  }
  .nav-links__container {
    position: absolute;
    top: 70px;
    left: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    height: 60px;
  }
  .nav-link > * {
    margin-left: auto;
    margin-right: auto;
  }
  .nav-menu__icon {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .nav-open .nav-menu__icon {
    justify-content: space-between;
  }
}

@keyframes nav-enter-anim {
  from {
    top: -70px;
  }
  to {
    top: 0px;
  }
}
@-webkit-keyframes nav-enter-anim {
  from {
    top: -70px;
  }
  to {
    top: 0px;
  }
}

@keyframes nav-open {
  from {
    height: 70px;
  }
  to {
    height: 100vh;
  }
}
@-webkit-keyframes nav-open {
  from {
    height: 70px;
  }
  to {
    height: 100vh;
  }
}

`;

export default Navbar;
