import React from "react";
import "./Header.css";
import "./SilentSolhd-1.png";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook from react-router-dom
const Header = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const handleNext = () => {
    navigate ("/Next"); // Replace with your desired navigation logic
  };
  return (
    <div className="Container">
      <div className="Menu">
        <a href="https://silentsol.com/">
          <img
            className="image"
            src={require("./SilentSolhd-1.png")}
            alt="Logo"
          />
        </a>
        <p>Home</p>
        <p>Our Story</p>
        <p>Services</p>
        <p>Portfolio</p>
        <p>Career</p>
        <p>Contact us</p>
        <p>Blog</p>
      </div>
      <div className="ButtonPrev">
        <button className="button">Previous</button>
      </div>
      <div className="Slider">
      <img
           className="slider"
            src={require("./DSC_0092.JPG")}
            alt="Logo"
          /> 
      </div>
      <div className="ButtonNext">
        <button type="button" onClick={handleNext} className="button">Next</button>
      </div>
    </div>
  );
};

export default Header;
