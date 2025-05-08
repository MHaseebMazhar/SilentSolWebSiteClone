import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/Home", label: "Home" },
    { to: "/OurStory", label: "Our Story" },
    { to: "/Services", label: "Services" },
    { to: "/Portfolio", label: "Portfolio" },
    { to: "/Career", label: "Career" },
    { to: "/ContactUs", label: "Contact Us" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Container">
      <div className="Menu">
        <a href="/">
          <img className="image" src="SilentSolhd-1.png" alt="Logo" />
        </a>


        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsMenuOpen(false)} // close on link click
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
