import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logodp.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#skills">Skills</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-links">
        <div className="portfolio__navbar-links_logo">
          <img src={logo} alt="logo" className="flip-in-diag-2-br" />
        </div>
        <div className="portfolio__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="portfolio__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#101010"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuLine
            color="#101010"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="portfolio__navbar-menu_container scale-up-center">
            <div className="portfolio__navbar-menu_conatiner-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
