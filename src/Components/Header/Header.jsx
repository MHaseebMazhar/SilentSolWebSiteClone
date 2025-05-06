import React from "react";
import "./Header.css";
import {NavLink} from 'react-router-dom'; // Import Link from react-router-dom
const Header = () => {

  return (
    <div className="Container">
      <div className="Menu">
        <a href="https://silentsol.com/">
          <img
            className="image"
            src= "SilentSolhd-1.png"
            alt="Logo"
          />
        </a>
        <NavLink to="/Home" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/OurStory" className={({ isActive }) => isActive ? 'active' : ''}>Our Story</NavLink>
        <NavLink to="/Services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
        <NavLink to="/Portfolio" className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink>
        <NavLink to="/Career" className={({ isActive }) => isActive ? 'active' : ''}>Career</NavLink>
        <NavLink to="/ContactUs" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink>
      </div>

    </div>
  );
};
export default Header;
