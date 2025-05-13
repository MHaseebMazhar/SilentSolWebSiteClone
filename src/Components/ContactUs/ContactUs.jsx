import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="contactus-header">
        <h2>
          get in
          <span className="h2-span"> touch</span>
        </h2>
      </div>
      <div className="contactus-content">
        <div className="contactus-message">
          <h2>Send Us Message</h2>
          <p>
            We're friendly and available to chat. Reach out to us anytime and
            we'll happily answer to your questions.
          </p>
          <form
            className="contactus-form"
            action="https://formsubmit.co/haseebdar3333@gmail.com"
            method="POST"
          >
            <input type="text" name="Name" placeholder="Your Name" required />
            <input type="email" name="Email" placeholder="Your Email" required />
            <input type="text" name="Subject" placeholder="Subject" required />
            <textarea name="Message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
