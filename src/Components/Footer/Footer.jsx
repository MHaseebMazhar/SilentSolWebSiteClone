import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-footer">
        <div className="footer-footer1">
          <div className="footer-image-div">
            <img className="footer-image" src="SilentSolhd-1.png" alt="Logo" />
          </div>
          <div className="footer-paragraph-div">
            <p>
              We are software engineers & we serve as technology partner for
              startsups, scaleups and enterprises. We Transforme Ideas into
              Digital Reality.We are your Trusted Software Development Partner.
            </p>
          </div>
          <div className="footer-logo-div">
            <svg
              class="e-font-icon-svg e-fab-facebook-f"
              className="footer-logo"
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>
            <img
              className="footer-logo"
              src="icons8-instagram-24.png"
              alt="Logo"
            />
            <img
              className="footer-logo"
              src="icons8-twitter-bird-30.png"
              alt="Logo"
            />
            <img
              className="footer-logo"
              src="icons8-linkedin-2-32.png"
              alt="Logo"
            />
          </div>
        </div>
        <div className="footer-footer2">
          <div className="footer-footer2-div">
            <h4>quick link</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-footer2-div">
            <h4>Help Center</h4>
            <ul>
              <li>FAQ</li>
              <li>Term & Conditions</li>
              <li>Support Policy</li>
              <li>Privacy</li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="footer-footer3">
          <iframe
            src="https://maps.google.com/maps?q=silentsol&t=m&z=15&output=embed&iwloc=near"
            title="Silentsol"
          >
            <span></span>
          </iframe>
        </div>
        <div className="footer-footer4">
          <div className="footer-footer4-div">
          
          </div>
        </div>
        <div className="footer-footer4-div">
          <h4>©2024 Silentsol Copyright All Right Reserved.</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
