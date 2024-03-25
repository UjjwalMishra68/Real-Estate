import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo2.png";
const Footer = () => {
  return (
    <div className="footer Container">
      <div className="footer-left">
        <img src={Logo} alt="" />
        <p>
          Our vision is to make all people <br />
          the best place to live for them.
        </p>
      </div>
      <div className="footer-right">
        <div className="info">
            <h1>Information</h1>
            <p>145 New York, FL 5467, USA</p>
        </div>
        <div className="footer-links">
            <ul>
                <li>Property</li>
                <li>Services</li>
                <li>Product</li>
                <li>About</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
