import React from "react";
import "./Home.css";
import "./Home.js";
import Slider from "react-slick"; // Import the Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import the CSS for the slider
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
const Home = () => {
  const skills = [
    { name: "Software Development", percentage: 95 },
    { name: "Design", percentage: 87 },
    { name: "Digital Marketing", percentage: 90 },
    { name: "Consultancy", percentage: 87 },
  ];
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
  const NextArrow1 = (props) => {
    const { onClick } = props;
    return (
      <button className="arrow next" onClick={onClick}>
        ▶
      </button>
    );
  };

  const PrevArrow1 = (props) => {
    const { onClick } = props;
    return (
      <button className="arrow prev" onClick={onClick}>
        ◀
      </button>
    );
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow1 />,
    prevArrow: <PrevArrow1 />,
  };
  const images1 = [
    {
      src: "/client-1-300x90.png",
    },
    {
      src: "/client-2.png",
    },
    {
      src: "/client-3.png",
    },
    {
      src: "/client-4-1-1.png",
    },
    {
      src: "/client-5-1.png",
    },
    {
      src: "/client-6.png",
    },
    {
      src: "/client-7.png",
    },
    {
      src: "/client-8.png",
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
            <img src="/fe04ca4d-our-experience-2@2x.jpg" alt="" />
          </div>
          <div className="home-choose-header8">
            <section className="experience-section">
              <h2 className="experience-heading">Our Experience</h2>
              <p className="experience-description">
                With a rich legacy in the realms of software development,
                SilentSol stands as a beacon of expertise and innovation. Our
                journey is steeped in over 14 years of hands-on experience,
                successfully navigating the dynamic landscapes of technology. We
                take pride in our ability to craft bespoke solutions for diverse
                clients, from startups to established enterprises.
              </p>

              <div className="skills-container">
                {skills.map((skill, index) => (
                  <div className="skill" key={index}>
                    <div className="skill-title">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="home-choose2">
        <img src="/Arrow.png" alt="" />
      </div>
      <div className="home-box1">
        <div className="home-header9">
          <h2>Projects</h2>
        </div>
        <div className="home-boxes1">
          <div className="home-box-item1">
            <div className="home-box-header1">
              <img
                src="Shopwave.jpg"
                alt="Our Values"
                className="home-our-values-img1"
              />
              <h2>Shopwave</h2>
            </div>
          </div>
          <div className="home-box-item1">
            <div className="home-box-header1">
              <img
                src="web2.png"
                alt="Our Values"
                className="home-our-values-img1"
              />
            </div>
          </div>
        </div>
        <div className="home-boxes1">
          <div className="home-box-item1">
            <div className="home-box-header1">
              <img
                src="wlwell-app.jpg"
                alt="Our Values"
                className="home-our-values-img1"
              />
            </div>
          </div>
          <div className="home-box-item1">
            <div className="home-box-header1">
              <img
                src="web3.png"
                alt="Our Values"
                className="home-our-values-img1"
              />
            </div>
          </div>
        </div>
        <div className="home-boxes1">
          <div className="home-box-item1">
            <div className="home-box-header1">
              <img
                src="taxi-booking.png"
                alt="Our Values"
                className="home-our-values-img1"
              />
            </div>
          </div>
          <div className="home-box-item1">
            <div className="home-box-header1">
              <img
                src="somali-scaled.jpg"
                alt="Our Values"
                className="home-our-values-img1"
              />
            </div>
          </div>
        </div>
        <div className="home-career-container-loadmore">
          <span className="">Load-More</span>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-header10">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div class="accordion">
          <div class="accordion-item">
            <div class="accordion-item-header">
              How does SilentSol ensure the security of the software developed?
            </div>
            <div class="accordion-item-body">
              <div class="accordion-item-body-content">
                Security is paramount at SilentSol. We implement robust coding
                practices, conduct thorough security audits, and adhere to
                industry best practices to safeguard your software against
                potential vulnerabilities.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-item-header">
              Can SilentSol handle both small-scale and large-scale software
              projects?
            </div>
            <div class="accordion-item-body">
              <div class="accordion-item-body-content">
                Absolutely. SilentSol is equipped to handle projects of various
                scales. Our team is adaptable and can tailor our services to
                meet the unique requirements of both small startups and large
                enterprises.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-item-header">
              What technologies does SilentSol specialize in?
            </div>
            <div class="accordion-item-body">
              <div class="accordion-item-body-content">
                SilentSol is proficient in a wide range of technologies,
                including but not limited to Python, Java, JavaScript, PHP,
                React, Angular, and more. Our expertise allows us to choose the
                best technology stack for your specific project needs.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-item-header">
              Can you provide digital services?
            </div>
            <div class="accordion-item-body">
              <div class="accordion-item-body-content">
                We provide the most user-friendly service for you to develop
                your software with the best user-experience design. You can come
                up with an idea, design plan or we are open for discussion to
                help you to develop your desired software efficiently.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-item-header">
              Is SilentSol open to customization based on client-specific needs?
            </div>
            <div class="accordion-item-body">
              <div class="accordion-item-body-content">
                Absolutely. We understand that every client has unique
                requirements. SilentSol is flexible and committed to tailoring
                our services to meet your specific needs, ensuring the end
                product aligns perfectly with your vision.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner">
        <h2>Our Partners</h2>
      </div>
      <div className="SliderContainer1">
        <Slider {...settings1}>
          {images1.map((item, index) => (
            <div key={index} className="slide-wrapper1">
              <img src={item.src} alt={`Slide`} className="slide-img1" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="home-client">
        <div className="home-client-header">
          <h2>What our clients says</h2>
        </div>
      </div>
      <div className="home-client-section">
        <div className="home-client-image">
          <img src="287e571f-image2.png" alt="" />
        </div>
        <div className="home-client-descrption">
          <h6>Sharyar alam- ceo of finx digital private limited.</h6>
          <p>
            “The Silentsol team was exemplary in the design and creation of the
            app. It has made an outstanding commitment to developing consumer
            communication and fresh insights. They proposed all the possible
            ways to save money and support us.
          </p>
          <div className="home-feedback-heading">
            <div class="home-star">
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
            </div>
            <div className="home-feedback-logo">
              <svg
                aria-hidden="true"
                class="e-font-icon-svg e-fab-google-plus-g"
                viewBox="0 0 640 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="home-client-feedback">
        <div className="home-feedback">
          <div className="home-feedback-heading">
            <div className="home-star">
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
            </div>
            <div className="home-feedback-logo">
              <svg
                aria-hidden="true"
                class="e-font-icon-svg e-fab-yelp"
                viewBox="0 0 384 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z"></path>
              </svg>
            </div>
          </div>
          <div className="home-feedback-second-section">
            <div className="home-feedback-paragraph">
              <p>
                “Their expert advisors provided insights that transcended our
                software goals, aligning technology with our business
                objectives. The result? A strategic roadmap that continues to
                guide our digital success.”
              </p>
            </div>
            <div className="home-feedback-name-image">
              <div className="home-feedback-image">
                <img src="lab-customer-testimonial-1.jpg" alt="" />
              </div>
              <div className="home-feedback-intro">
                <div className="home-feedback-name">
                  <h2>Maria Eve</h2>
                </div>
                <div className="home-feebback-profession">Lawyer</div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-feedback">
          <div className="home-feedback-heading">
            <div className="home-star">
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
            </div>
            <div className="home-feedback-logo">
              <svg
                aria-hidden="true"
                class="e-font-icon-svg e-fab-google-plus-g"
                viewBox="0 0 640 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path>
              </svg>
            </div>
          </div>
          <div className="home-feedback-second-section">
            <div className="home-feedback-paragraph">
              <p>
                “SilentSol's web development prowess revamped our online
                platform. Their attention to detail and seamless integration of
                cutting-edge features enhanced user experience, resulting in a
                significant boost in conversions.”
              </p>
            </div>
            <div className="home-feedback-name-image">
              <div className="home-feedback-image">
                <img src="lab-customer-testimonial-2.jpg" alt="" />
              </div>
              <div className="home-feedback-intro">
                <div className="home-feedback-name">
                  <h2>Liam Bower</h2>
                </div>
                <div className="home-feebback-profession">Mechanic</div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-feedback">
          <div className="home-feedback-heading">
            <div className="home-star">
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
              <i class="icon-element-eicon-star-o"></i>
            </div>
            <div className="home-feedback-logo">
              <svg
                aria-hidden="true"
                class="e-font-icon-svg e-fab-facebook-square"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
              </svg>
            </div>
          </div>
          <div className="home-feedback-second-section">
            <div className="home-feedback-paragraph">
              <p>
                “SilentSol's system development expertise was a game-changer.
                Robust solutions not only meet industry standards but also
                provide a scalable foundation for future growth. Truly impressed
                with their dedication.”
              </p>
            </div>
            <div className="home-feedback-name-image">
              <div className="home-feedback-image">
                <img src="lab-customer-testimonial-13.jpg" alt="" />
              </div>
              <div className="home-feedback-intro">
                <div className="home-feedback-name">
                  <h2>Nicky</h2>
                </div>
                <div className="home-feebback-profession">Doctor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-footer">
        <div className="footer-header">
          <img src="location.png" alt="location" />
          <p>
            1st Floor, Paramount Arcade, Office# F-4, G-15 Markaz Islamabad,
            44000
          </p>
        </div>
        <div className="footer-header">
          <img src="phone.png" alt="phone" />
          <p>+92 342 0945111</p>
        </div>
        <div className="footer-header1">
          <img src="d6db7ea4-icon.png" alt="email" />
          <p>info@silentsol.com</p>
        </div>
      </div>
      <div className="home-hello">
        <h2>Hello There!👋</h2>
      </div>
    </div>
  );
};

export default Home;
