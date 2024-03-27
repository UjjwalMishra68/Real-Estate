import React from "react";
import "./ContactUs.css";
import contactImage from "../../assets/contact.jpg";
const ContactUs = () => {
  return (
    <div className="Contact-us Container">
      <div className="Contactus-wrapper">
      <div className="Contact-left">
        <div className="Contact-heading">
          <span className="Heading">
            <h2>Contact Us</h2>
          </span>
          <span className="Heading">
            <h1>Easy to contact us</h1>
          </span>
          <p className="Paragraph">
            We always ready to help by providijng the best services for you. <br />
            We beleive a good place to live can make your life better
          </p>
        </div>
        <div className="Contact-details">
          <div className="details-top">
            <ul>
              <li>
                <div className="card-top">
                  <i class="ri-phone-fill icon"></i>
                  <div className="details">
                    <span className="text">Call</span>
                    <span className="text">+1 123 456 789</span>
                  </div>
                </div>
                <button className="contact-button">Call now</button>
              </li>
              <li>
                <div className="card-top">
                  <i class="ri-message-2-fill icon"></i>
                  <div className="details">
                    <span className="text">Chat</span>
                    <span className="text">+1 123 456 789</span>
                  </div>
                </div>
                <button className="contact-button">Chat now</button>
              </li>
            </ul>
          </div>
          <div className="details-bottom">
            <ul>
              <li>
                <div className="card-top">
                  <i class="ri-video-chat-line icon"></i>
                  <div className="details">
                    <span className="text">Video Call</span>
                    <span className="text">+1 123 456 789</span>
                  </div>
                </div>
                <button className="contact-button">Video Call now</button>
              </li>
              <li>
                <div className="card-top">
                  <i class="ri-message-3-fill icon"></i>
                  <div className="details">
                    <span className="text">Message</span>
                    <span className="text">+1 123 456 789</span>
                  </div>
                </div>
                <button className="contact-button">Message now</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Contact-right">
        <div className="mask">
          <img src={contactImage} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
