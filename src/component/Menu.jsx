import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Menu.css";

const Menu = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const scrollToSection = (id) => {
    scroll.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setNavOpen(false); // Close navigation after scrolling
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        checked={isNavOpen}
        onChange={toggleNav}
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link
              to="about"
              className=" cursor-pointer navigation__link"
              smooth={true}
              duration={800}
              onClick={() => scrollToSection("about")}
            >
              <span>01</span>About GOAT
            </Link>
          </li>
          <li className=" cursor-pointer navigation__item">
            <Link
              to="services"
              className="navigation__link"
              smooth={true}
              duration={800}
              onClick={() => scrollToSection("services")}
            >
              <span>02</span>GOAT's Services
            </Link>
          </li>
          <li className=" cursor-pointer navigation__item">
            <Link
              to="ads"
              className="navigation__link"
              smooth={true}
              duration={800}
              onClick={() => scrollToSection("ads")}
            >
              <span>03</span>our Campaigns
            </Link>
          </li>
          {/* <li className="navigation__item">
            <Link
              to="stories"
              className="navigation__link"
              smooth={true}
              duration={800}
              onClick={() => scrollToSection("stories")}
            >
              <span>04</span>Stories
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="book"
              className="navigation__link"
              smooth={true}
              duration={800}
              onClick={() => scrollToSection("book")}
            >
              <span>05</span>Book now
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
