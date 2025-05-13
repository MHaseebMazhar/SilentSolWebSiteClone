import React from "react";
import "./Career.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
const Career = () => {
  return (
    <div className="career">
      <div className="career-header">
        <div className="career-container">
          <h2>
            <span className="lead-color-solid">Join Silentsol </span>{" "}
            <span> & Make A Difference</span>
          </h2>
          <span className="subtext">
            Work at the most dynamic agency & unlock your true potential
          </span>
          
            <Link to="/ContactUs" className="career-container-button">
            <span>Contact Us</span>
            </Link>
          
        </div>
        <div className="career-container-image">
          <img
            src="laura-chouette-92z4a5V7y4I-unsplash-scaled.jpg"
            alt="career"
          />
        </div>
      </div>
      <div className="career-container-join">
        <h2>Ready To Join Our Team?</h2>
      </div>
      <div className="career-container-join-submission">
        <div className="career-container-join-submission1">
          <h2>
            <span>Learn Our Recruitment Process</span>
          </h2>
          <div className="career-container-join-button">
            <p>
              The recruitment process begins with submission of CVs, followed by
              phone screening, assessment and a final interview. At{" "}
              <strong>Silentsol</strong> we believe in working together and
              working hard.
            </p>
            <p className="career-container-join-button1">
              <b>Current openings are closed.</b>
            </p>
          </div>
          <Link to="/ContactUs" className="career-container-button1">
            <span>Contact Us</span>
            </Link>
        </div>

        <div className="career-container-join-submission2">
          <div className="career-container-join-box1">
            <div className="step-title">
              <h2>CV Submission</h2>
              <span className="step-number">1</span>
            </div>
            <p>
              Submit your CV or resume through our online portal if you meet our
              requirements.
            </p>
          </div>
          <div className="career-container-join-box2">
            <div className="step-title">
              <h2>Phone Screening</h2>
              <span className="step-number">2</span>
            </div>
            <p>
              After looking at your CV you will be invited for a telephone
              interview at a time of your choosing.
            </p>
          </div>
          <div className="career-container-join-box3">
            <div className="step-title">
              <h2>Skill Assessment</h2>
              <span className="step-number">3</span>
            </div>
            <p>
              You will be invited at our head office to take a skills and
              knowledge assessment
            </p>
          </div>
          <div className="career-container-join-box4">
            <div className="step-title">
              <h2>Final Interview</h2>
              <span className="step-number">4</span>
            </div>
            <p>
              If you can pass all stages we will invite you for a final
              interview with our CEO and HR executive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
