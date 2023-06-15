import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [closeMenu, setCloseMenu] = useState(false);
  const handleClick = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="header">
            <span>Bertin</span>
          </Link>
        </div>
        <ul className={closeMenu ? "links" : "toggle-menu links"}>
          <li>
            <Link
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="header"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={500}
              to="about"
            >
              About
            </Link>
          </li>
        
          <li>
            <Link
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={500}
              to="contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {closeMenu ? (
            <FaTimes size={20} color="white" />
          ) : (
            <FaBars size={20} color="white" />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
