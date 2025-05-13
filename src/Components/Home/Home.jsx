import React from "react";
import "./Home.css";
import Slider from "react-slick"; // Import the Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import the CSS for the slider
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
              <img
                src={item.src}
                alt={`Slide ${index}`}
                className="slide-img"
              />
              <div className="slide-text">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
              <p className="index">{index + 1}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="home-services">
        <div className="home-header">
          <h1>
            Product development<br></br>
            specific to your business need.
          </h1>
        </div>
      </div>
      <div className="home-services1">
        <div className="home-header1">
          <p>
            We have been designing developing, and maintaining apps since 2010.
            <br></br>
            Our mission is to empower businesses with innovative and tailored
            <br></br>
            software solutions that not only meet but exceed their evolving
            needs.
          </p>
        </div>
      </div>
      <div className="home-services2">
        <div className="home-header2">
          <h2>⌾Startups</h2>
          <p>
            Launch your startup into the digital realm with our software house
            expertise – where tailored web solutions meet the unique needs of
            your entrepreneurial journey
          </p>
        </div>
        <div className="home-header2">
          <h2>⌾Scaleups</h2>
          <p>
            From idea to implementation, we committed to enhancing business
            efficacy with tailor-made web solutions – ensuring your digital
            footprint reflects excellence.
          </p>
        </div>
        <div className="home-header2">
          <h2>⌾Enterprises</h2>
          <p>
            Navigate the complexities of enterprise growth with confidence – our
            software house provides scalable, cutting-edge web solutions for
            businesses poised for success.
          </p>
        </div>
      </div>
      <div className="home-services3">
        <div className="home-header3">
          <h2>200+</h2>
          <p>PROJECT COMPLETED</p>
        </div>
        <div className="home-header3">
          <h2>100+</h2>
          <p>HAPPY CUSTOMERS</p>
        </div>
        <div className="home-header3">
          <h2>14+</h2>
          <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
      <div className="home-services4">
        <h2>Customized Solutions</h2>
      </div>
      <div className="home-services5">
        <div className="home-header5">
          <video
            class="elementor-video"
            src="https://silentsol.com/wp-content/uploads/2024/03/pexels-tea-oebel-6804109-2160p.mp4"
            autoplay=""
            loop=""
            muted="muted"
            playsinline=""
            controlslist="nodownload"
          ></video>
        </div>
        <div className="home-header51">
          <p>
            We are specialized in delivering customized solutions, ensuring your
            unique needs are met with precision and innovation. We know
            customization is the cornerstone. We craft solutions that align
            perfectly with your requirements, making your digital vision a
            reality.From intricate web development to personalized app
            solutions, our software company is dedicated to providing
            custom-built success stories for our clients. Our software
            development company thrives on turning challenges into tailor-made
            opportunities, creating digital solutions that resonate uniquely
            with your goals.We stay abreast of emerging technologies and trends,
            ensuring that your solutions are not just relevant today but
            adaptable to the evolving demands of tomorrow.We understand that
            every startup is unique, and so are its challenges. Our development
            services are not one-size-fits-all; instead, they are customized to
            address the specific requirements of your venture.Our development
            services cover the entire spectrum, offering end-to-end solutions
            for businesses of all sizes.
          </p>
        </div>
      </div>
      <div className="services-home-content">
        <h2>Our Services</h2>
      </div>
      <div className="services-home-cards">
        <div className="home-card">
          <div className="home-card-header">1</div>
          <div className="home-card-head">
            <h2>UI/UX</h2>
          </div>
          <div className="home-card-body">
            <p>Explore the Art of User-Centric UI/UX in Software Creation.</p>
          </div>
        </div>
        <div className="home-card">
          {" "}
          <div className="home-card-header">2</div>
          <div className="home-card-head">
            <h2>Web Development</h2>
          </div>
          <div className="home-card-body">
            <p>
              Empowering Your Software’s Digital Presence through Web
              Development.
            </p>
          </div>
        </div>
        <div className="home-card">
          {" "}
          <div className="home-card-header">3</div>
          <div className="home-card-head">
            <h2>App Development</h2>
          </div>
          <div className="home-card-body">
            <p>
              Your Trusted Partner in Crafting Next-Level Software Applications.
            </p>
          </div>
        </div>
      </div>
      <div className="services-home-cards">
        <div className="home-card">
          <div className="home-card-header">4</div>
          <div className="home-card-head">
            <h2>Software Development</h2>
          </div>
          <div className="home-card-body">
            <p>Redefining Possibilities through Software Development.</p>
          </div>
        </div>
        <div className="home-card">
          {" "}
          <div className="home-card-header">5</div>
          <div className="home-card-head">
            <h2>System Development</h2>
          </div>
          <div className="home-card-body">
            <p>Elevate Your Infrastructure with Expert System Development.</p>
          </div>
        </div>
        <div className="home-card">
          {" "}
          <div className="home-card-header">6</div>
          <div className="home-card-head">
            <h2>Consultancy</h2>
          </div>
          <div className="home-card-body">
            <p>Shaping Your Software Success with Strategic Guidance.</p>
          </div>
        </div>
      </div>
      <div className="services-home-cards">
        <div className="home-card">
          <div className="home-card-header">7</div>
          <div className="home-card-head">
            <h2>Digital Marketing</h2>
          </div>
          <div className="home-card-body">
            <p>Ride the Momentum with Strategic Software Marketing.</p>
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-header">8</div>
          <div className="home-card-head">
            <h2>AI Development</h2>
          </div>
          <div className="home-card-body">
            <p>Your Path to AI-Infused Software Brilliance.</p>
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-header">9</div>
          <div className="home-card-head">
            <h2>Audit and Evolution</h2>
          </div>
          <div className="home-card-body">
            <p>Your Trusted Path to Software Development Evolution.</p>
          </div>
        </div>
      </div>
      <div className="home-choose">
        <div className="home-header6">
          <div className="home-choose-header6">
            <h2>Why Choose Us</h2>
          </div>
          <div className="home-choose-header7">
            <p>
              With a proven track record of delivering innovative solutions to
              startups, businesses, and organizations, we take pride in our
              ability to tailor our services to meet your unique requirements.
              Our dedicated team of experienced developers ensures that every
              project is executed with precision and delivered on time. We
              prioritize communication, transparency, and collaboration, making
              us the ideal partner for those seeking a reliable and
              forward-thinking software development company. Trust us to
              transform your ideas into robust, scalable, and efficient
              solutions that drive your success in the rapidly evolving digital
              landscape.
            </p>
          </div>
          <Link to="/ContactUs" className="home-career-container-button">
            <span>Contact Us</span>
            </Link>
        </div>
      </div>
      <div className="home-choose1">
        <div className="home-header8">
          <div className="home-choose-header8">
            <img src="/fe04ca4d-our-experience-2@2x.jpg"alt=""/>
          </div>
          <div className="home-choose-header8">
            <h2>Our Experience</h2>
            <p>
            With a rich legacy in the realms of software development, SilentSol stands as a beacon of expertise and innovation. Our journey is steeped in over 14 years of hands-on experience, successfully navigating the dynamic landscapes of technology. We take pride in our ability to craft bespoke solutions for diverse clients, from startups to established enterprises.
            </p>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default Home;
