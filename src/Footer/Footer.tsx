import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    
    <div className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>Bin.Mart</h3>
          <p>
            Providing quality goods at affordable prices since day one.
          </p>
        </div>

        <div className="link">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="support">
            <h3>Support</h3>
            <h4>111 Binmart,
                DH 1515 ,Noida.
            </h4>
            <h4>binmart@gmail.com</h4>
            <h5>+88015-904589-12340</h5>

        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><img src="/images/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="/images/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="/images/linkedin-logo.png" alt="LinkedIn" /></a>
          </div>
         
        </div>
         <div className="App">
            <h2>Download App</h2>
            <img src="/images/app.png" alt="app" className="download" />

          </div>

      </div>

      <div className="footer-bottom">

       @ Copyright Rimel 2022 . Bin.Mart | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
