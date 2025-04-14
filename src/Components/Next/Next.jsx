import React from 'react'
import "./Next.css"
import "./SilentSolhd-1.png"
const Next = () => {
const handlePrev = () => {
  window.history.back(); // Go back to the previous page
}

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
      <div onClick={handlePrev} className="ButtonPrev">
        <button className="button">Previous</button>
        </div>
        <div className="Slider">
      <img
           className="slider"
            src={require("./DSC_0081.JPG")}
            alt="Logo"
          /> 
      </div>
    </div>
  )
}

export default Next
