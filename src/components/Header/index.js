import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className="menu__btn" onClick={() => handleClick()}>
        <span
          className={open ? "menu__btn__burger open" : "menu__btn__burger"}
        ></span>
      </div>
      <nav className={open ? "nav open" : "nav"}>
        <ul className={open ? "menu__nav open" : "menu__nav"}>
          <li
            className={
              open ? "menu__nav__item active open" : "menu__nav__item active"
            }
          >
            <a href="/" className="menu__nav__link">
              Home
            </a>
          </li>
          <li
            className={
              open ? "menu__nav__item active open" : "menu__nav__item active"
            }
          >
            <a href="/about" className="menu__nav__link">
              About Me
            </a>
          </li>
          <li
            className={
              open ? "menu__nav__item active open" : "menu__nav__item active"
            }
          >
            <a href="/projects" className="menu__nav__link">
              My Projects
            </a>
          </li>
          <li
            className={
              open ? "menu__nav__item active open" : "menu__nav__item active"
            }
          >
            <a href="/contact" className="menu__nav__link">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
