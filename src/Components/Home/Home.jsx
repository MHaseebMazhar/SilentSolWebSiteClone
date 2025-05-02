import React from 'react'
import './Home.css'
import Slider from "react-slick"; // Import the Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import the CSS for the slider
import "slick-carousel/slick/slick-theme.css";
const Home = () => {

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="arrow next" onClick={onClick}>
        ▶
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="arrow prev" onClick={onClick}>
        ◀
      </button>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  };
  const images = [
    {
      src: "./2.jpg",
    },
    {
      src: "./4.avif",
      desc: "Start your journey with silentsol. Web Development App Development Digital Marketing System Development Software Development Consultancy → UI/UX Al Development Audit",
      
    },
    {
      src: "./3.jpg",
      title: "Welcome to Silent Sol",
      desc: "Your Vision, Our Code. Where Ideas Take Flight. Explore A Realm Of Limitless Possibilities With Our Development Mysteries. We Don't Just Build, We Redefine The Way Your Business Connects With The World.",
      
    },
  ];
 
  return (
    <div className="home-container">
      <div className="SliderContainer">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index} className="slide-wrapper">
              <img src={item.src} alt={`Slide ${index}`} className="slide-img" />
              <div className="slide-text">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
                <p className='index'>{index+1}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Home
