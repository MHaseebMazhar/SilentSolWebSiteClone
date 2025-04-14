import React from 'react'

const Head = () => {
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
      
    </div>
  )
}

export default Head
