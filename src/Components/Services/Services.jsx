import React from "react";
import "./Services.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
const Services = () => {
  return (
    <div className="container">
      <div className="services">
        <div className="header">
          <h2>
            PRODUCT, DESIGN AND <br></br>
            ENGINEERING FOR<br></br>
            INNOVATORS.
          </h2>
        </div>
      </div>
      <div className="services-content">
        <h2>Our Services</h2>
      </div>
      <div className="services-list">
        <p>
          <span>
            Empowering your digital journey with innovative solutions, SilentSol
            brings <br></br>expertise and excellence to every line of code,
            ensuring your vision <br></br>transforms into a seamless reality.
          </span>
        </p>
      </div>
      <div className="services-cards">
        <div className="card">
          <div className="card-header">1</div>
          <div className="card-head">
            <h2>UI/UX</h2>
          </div>
          <div className="card-body">
            <p>
              SilentSol’s UI/UX design goes the extra mile, ensuring every
              element serves a purpose, enhancing user engagement and leaving a
              lasting impression.
            </p>
          </div>
        </div>
        <div className="card">
          {" "}
          <div className="card-header">2</div>
          <div className="card-head">
            <h2>Web Development</h2>
          </div>
          <div className="card-body">
            <p>
              We don’t just write code; we build digital experiences. Our
              software company’s commitment to innovation ensures your website
              stands out in the online crowd.
            </p>
          </div>
        </div>
        <div className="card">
          {" "}
          <div className="card-header">3</div>
          <div className="card-head">
            <h2>App Development</h2>
          </div>
          <div className="card-body">
            <p>
              Our app development isn’t just about writing lines; it’s about
              crafting seamless, visually appealing apps that align with your
              brand and captivate your audience.
            </p>
          </div>
        </div>
      </div>
      <div className="services-cards">
        <div className="card">
          <div className="card-header">4</div>
          <div className="card-head">
            <h2>Software Development</h2>
          </div>
          <div className="card-body">
            <p>
              Where each line of code is a brushstroke, creating digital
              masterpieces that redefine the possibilities of your technological
              landscape.
            </p>
          </div>
        </div>
        <div className="card">
          {" "}
          <div className="card-header">5</div>
          <div className="card-head">
            <h2>System Development</h2>
          </div>
          <div className="card-body">
            <p>
              Our system development expertise builds the backbone of your
              digital infrastructure, ensuring robust, scalable, and seamlessly
              integrated solutions.
            </p>
          </div>
        </div>
        <div className="card">
          {" "}
          <div className="card-header">6</div>
          <div className="card-head">
            <h2>Consultancy</h2>
          </div>
          <div className="card-body">
            <p>
              Our expert consultants become your strategic partners, offering
              insights that transcend code to shape your digital success story.
            </p>
          </div>
        </div>
      </div>
      <div className="services-cards">
        <div className="card">
          <div className="card-header">7</div>
          <div className="card-head">
            <h2>Digital Marketing</h2>
          </div>
          <div className="card-body">
            <p>
              From SEO strategies to engaging social media campaigns, our
              digital marketing services orchestrate a harmonious blend of
              visibility, engagement, and conversion.
            </p>
          </div>
        </div>
        <div className="card">
          {" "}
          <div className="card-header">8</div>
          <div className="card-head">
            <h2>AI Development</h2>
          </div>
          <div className="card-body">
            <p>
              Our AI development expertise transforms software into intelligent,
              adaptive entities, harnessing the power of artificial intelligence
              for unparalleled innovation.
            </p>
          </div>
        </div>
        <div className="card">
          {" "}
          <div className="card-header">9</div>
          <div className="card-head">
            <h2>Audit and Evolution</h2>
          </div>
          <div className="card-body">
            <p>
              Our software audit and evolution services pave the way for your
              software’s journey, ensuring it meets current standards and sets
              new benchmarks for the future.
            </p>
          </div>
        </div>
      </div>
      <Link to="/ContactUs" className="quote">
            <span>Get a quote</span>
            </Link>
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
          <img src="email.png" alt="email" />
          <p>info@silentsol.com</p>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Services;
